import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Replace YOUR_FORM_ID with your actual Formspree form ID
  const formspreeEndpoint = "https://formspree.io/f/xnnlawpb";

  const [status, setStatus] = useState("idle");
  const [serverError, setServerError] = useState("");

  const onSubmit = async (data) => {
    setStatus("loading");
    setServerError("");

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          company: data.company || "Not specified",
          email: data.email,
          budget: data.budget || "Not specified",
          message: data.message,
          _subject: `New website enquiry from ${data.name}`,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Unable to send message right now.");
      }

      setStatus("success");
    } catch (error) {
      console.error("Contact form error", error);
      setServerError(
        error.message ||
          "Something went wrong while sending your message. Please try again or email vdcsoft@outlook.com."
      );
      setStatus("error");
    }
  };

  if (status === "success")
    return (
      <div
        id="contact"
        className="rounded-2xl bg-white p-6 shadow-md"
        aria-live="polite"
      >
        <h3 className="text-xl font-semibold text-brandText">
          Thanks — we'll reply within 24 hours
        </h3>
        <p className="mt-2 text-brandText/70">
          If it's urgent, email vdcsoft@outlook.com
        </p>
      </div>
    );

  return (
    <form
      id="contact"
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 bg-white rounded-2xl shadow-md"
    >
      <h3 className="text-xl font-semibold">Start a conversation</h3>
      <p className="text-gray-600 mt-2">
        We reply within 24 hours on weekdays.
      </p>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label className="text-sm">Full name</label>
          <input
            className="mt-1 w-full p-2 border rounded focus-ring"
            {...register("name", { required: true })}
            aria-invalid={errors.name ? "true" : "false"}
          />
        </div>
        <div>
          <label className="text-sm">Company</label>
          <input
            className="mt-1 w-full p-2 border rounded focus-ring"
            {...register("company")}
          />
        </div>
        <div>
          <label className="text-sm">Email</label>
          <input
            type="email"
            className="mt-1 w-full p-2 border rounded focus-ring"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            aria-invalid={errors.email ? "true" : "false"}
          />
        </div>
        <div>
          <label className="text-sm">Budget</label>
          <input
            className="mt-1 w-full p-2 border rounded focus-ring"
            {...register("budget")}
          />
        </div>
      </div>
      <div className="mt-4">
        <label className="text-sm">Message</label>
        <textarea
          rows={5}
          className="mt-1 w-full p-2 border rounded focus-ring"
          {...register("message", { required: true })}
          aria-invalid={errors.message ? "true" : "false"}
        />
      </div>
      <div className="mt-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="mr-2"
            {...register("consent", { required: true })}
          />
          <span className="text-sm">
            I consent to receive communications and accept the{" "}
            <a href="/privacy" className="underline">
              Privacy Policy
            </a>
            .
          </span>
        </label>
        {errors.consent && (
          <div className="text-sm text-red-600 mt-1">
            You must accept the privacy policy.
          </div>
        )}
      </div>
      {serverError && (
        <div
          className="mt-3 text-sm text-red-600"
          role="alert"
          aria-live="assertive"
        >
          {serverError}
        </div>
      )}
      <div className="mt-4">
        <button
          type="submit"
          className="px-5 py-3 rounded-2xl bg-primary text-white transition disabled:cursor-not-allowed disabled:bg-primary/60"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Send message"}
        </button>
        <p className="mt-2 text-xs text-brandText/50">
          Messages are delivered directly to our team inbox (
          <a className="underline" href="mailto:vdcsoft@outlook.com">
            vdcsoft@outlook.com
          </a>
          ).
        </p>
      </div>
    </form>
  );
}
