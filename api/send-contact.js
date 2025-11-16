const CONTACT_TO =
  process.env.CONTACT_TO || process.env.CONTACT_EMAIL || "vdfcsoft@outlook.com";
const CONTACT_FROM =
  process.env.CONTACT_FROM || "VDCsoft <onboarding@resend.dev>";

const requiredEnv = ["RESEND_API_KEY"];

function getMissingEnv() {
  return requiredEnv.filter((key) => !process.env[key]);
}

function parseBody(req) {
  try {
    if (typeof req.body === "string") {
      return JSON.parse(req.body);
    }
    if (req.body) return req.body;
    if (req.rawBody) {
      return JSON.parse(req.rawBody.toString());
    }
  } catch (error) {
    console.error("Failed to parse body", error);
  }
  return null;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed" });
  }

  const missing = getMissingEnv();
  if (missing.length) {
    return res.status(500).json({
      message: `Missing environment variables: ${missing.join(", ")}`,
    });
  }

  const data = parseBody(req);
  if (!data) {
    return res.status(400).json({ message: "Invalid JSON payload" });
  }

  const { name, email, message, budget, company } = data;
  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ message: "Name, email, and message are required" });
  }

  const subject = `New website enquiry from ${name}`;
  const html = `
    <h2>New enquiry from VDCsoft contact form</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Company:</strong> ${company || "Not specified"}</p>
    <p><strong>Budget:</strong> ${budget || "Not specified"}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, "<br/>")}</p>
  `;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: CONTACT_FROM,
        to: CONTACT_TO,
        reply_to: email,
        subject,
        html,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.json().catch(() => ({}));
      console.error("Resend error", errorBody);
      return res
        .status(502)
        .json({ message: "Email provider error", details: errorBody });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Contact API error", error);
    return res.status(500).json({ message: "Failed to send email" });
  }
}
