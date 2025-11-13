import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef();
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [selectedReasons, setSelectedReasons] = useState([]);

  // ✅ Handle checkbox toggle
  const handleCheckbox = (e) => {
    const { value, checked } = e.target; // use value, not name
    setSelectedReasons((prev) =>
      checked ? [...prev, value] : prev.filter((r) => r !== value)
    );
  };

  // ✅ Send Email
  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !message ||
      selectedReasons.length === 0
    ) {
      setStatus({
        type: "error",
        message: "Please fill in all fields and select at least one reason.",
      });
      return;
    }

    setLoading(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
        import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
      );
      setStatus({ type: "success", message: "Message sent successfully!" });
      formRef.current.reset();
      setSelectedReasons([]);
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-wrapper p-15 max-[1025px]:p-10 max-sm:p-6 bg-white rounded-lg">
      <form ref={formRef} onSubmit={sendEmail}>
        {/* Name Fields */}
        <div className="row mb-5 max-sm:mb-4 flex justify-between max-sm:flex-col max-sm:gap-4 max-[1025px]:flex-col max-[1025px]:gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="w-[48%] max-[1025px]:w-full max-sm:w-full px-7 max-sm:px-6 max-sm:py-4 py-3 border border-border rounded-lg bg-[#F5F3F0] placeholder:text-gray placeholder:text-lg text-lg max-sm:placeholder:text-sm max-sm:text-sm"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="w-[48%] max-[1025px]:w-full max-sm:w-full px-7 max-sm:px-6 max-sm:py-4 py-3 border border-border rounded-lg bg-[#F5F3F0] placeholder:text-gray placeholder:text-lg text-lg max-sm:placeholder:text-sm max-sm:text-sm"
          />
        </div>

        {/* Email & Phone */}
        <div className="row mb-5 flex justify-between max-sm:flex-col max-sm:gap-4 max-[1025px]:flex-col max-[1025px]:gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-[48%] max-[1025px]:w-full max-sm:w-full px-7 max-sm:px-6 max-sm:py-4 py-3 border border-border rounded-lg bg-[#F5F3F0] placeholder:text-gray placeholder:text-lg text-lg max-sm:placeholder:text-sm max-sm:text-sm"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="w-[48%] max-[1025px]:w-full max-sm:w-full px-7 max-sm:px-6 max-sm:py-4 py-3 border border-border rounded-lg bg-[#F5F3F0] placeholder:text-gray placeholder:text-lg text-lg max-sm:placeholder:text-sm max-sm:text-sm"
          />
        </div>

        {/* Reasons */}
        <div className="row bg-[#F5F3F0] rounded-xl border border-border px-7 max-sm:px-6 max-sm:py-6 py-10">
          <p className="text-gray text-lg leading-normal font-medium mb-5 max-sm:text-[1rem]">
            Why are you contacting me?
          </p>
          <div className="checkboxes-wrapper flex flex-wrap justify-between gap-y-6 max-sm:gap-4 max-sm:flex-col">
            {["web-design", "collaboration", "mobile-app-design", "others"].map(
              (reason) => (
                <div
                  key={reason}
                  className="flex checkbox w-[48%] max-sm:w-full"
                >
                  <input
                    type="checkbox"
                    name="reasonOption"
                    value={reason}
                    checked={selectedReasons.includes(reason)}
                    onChange={handleCheckbox}
                    className="w-7 h-7 max-sm:w-6 max-sm:h-6"
                  />
                  <label className="text-gray text-lg ml-2.5 capitalize max-sm:text-sm">
                    {reason.replace("-", " ")}
                  </label>
                </div>
              )
            )}
          </div>

          {/* Hidden input for EmailJS */}
          <input
            type="hidden"
            name="reason" // must match your EmailJS template variable
            value={selectedReasons.join(", ")}
          />
        </div>

        {/* Message */}
        <div className="row my-5">
          <textarea
            name="message"
            placeholder="Your Message Here..."
            className="h-48 max-sm:h-[8.313rem] bg-[#F5F3F0] rounded-xl border border-border px-7 py-8 w-full placeholder:text-gray placeholder:text-lg text-lg max-sm:text-sm max-sm:placeholder:text-sm"
          />
        </div>

        {/* Submit */}
        <div className="row flex justify-center">
          <button
            disabled={loading}
            type="submit"
            className={`flex gap-[0.578rem] w-fit max-sm:w-full max-sm:justify-center bg-primary rounded-md transition hover:bg-primary-hover text-white px-11 py-4.5 max-sm:py-3.5 max-sm:text-sm text-lg font-medium cursor-pointer ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </div>

        {/* Status Message */}
        {status.message && (
          <p
            className={`mt-5 text-center text-lg ${
              status.type === "error" ? "text-red-500" : "text-green-600"
            }`}
          >
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
