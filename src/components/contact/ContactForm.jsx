import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    reasons: [],
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  // handle text inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle checkboxes
  const handleCheckbox = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => {
      const newReasons = checked
        ? [...prev.reasons, name]
        : prev.reasons.filter((r) => r !== name);
      return { ...prev, reasons: newReasons };
    });
  };

  // validate form before sending
  const validateForm = () => {
    if (!formData.firstName.trim()) return "First name is required.";
    if (!formData.lastName.trim()) return "Last name is required.";
    if (!formData.email.trim()) return "Email is required.";
    if (!/\S+@\S+\.\S+/.test(formData.email)) return "Invalid email address.";
    if (!formData.phone.trim()) return "Phone number is required.";
    if (formData.reasons.length === 0)
      return "Please select at least one reason.";
    if (!formData.message.trim()) return "Message cannot be empty.";
    return null;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    const error = validateForm();
    if (error) {
      setStatus({ type: "error", message: error });
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "YOUR_SERVICE_ID", // 🔹 Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // 🔹 Replace with your EmailJS template ID
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          reason: formData.reasons.join(", "),
        },
        "YOUR_PUBLIC_KEY" // 🔹 Replace with your EmailJS public key
      )
      .then(
        () => {
          setStatus({
            type: "success",
            message: "Message sent successfully! 🎉",
          });
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
            reasons: [],
          });
        },
        () => {
          setStatus({
            type: "error",
            message: "Failed to send message. Please try again.",
          });
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="form-wrapper p-15 bg-white rounded-lg">
      <form onSubmit={sendEmail}>
        {/* Name Fields */}
        <div className="row mb-5 flex justify-between">
          <input
            className="w-[48%] px-7 py-3 border border-border rounded-lg bg-[#F5F3F0] placeholder:text-gray placeholder:text-lg text-lg"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
          />
          <input
            className="w-[48%] px-7 py-3 border border-border rounded-lg bg-[#F5F3F0] placeholder:text-gray placeholder:text-lg text-lg"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
          />
        </div>

        {/* Email & Phone */}
        <div className="row mb-5 flex justify-between">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-[48%] px-7 py-3 border border-border rounded-lg bg-[#F5F3F0] placeholder:text-gray placeholder:text-lg text-lg"
            placeholder="Email"
            required
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-[48%] px-7 py-3 border border-border rounded-lg bg-[#F5F3F0] placeholder:text-gray placeholder:text-lg text-lg"
            placeholder="Phone Number"
            required
          />
        </div>

        {/* Reasons */}
        <div className="row bg-[#F5F3F0] rounded-xl border border-border px-7 py-10">
          <p className="text-gray text-lg leading-normal font-medium mb-5">
            Why are you contacting us?
          </p>
          <div className="checkboxes-wrapper flex flex-wrap justify-between gap-y-6">
            {["web-design", "collaboration", "mobile-app-design", "others"].map(
              (name) => (
                <div key={name} className="flex checkbox w-[48%]">
                  <input
                    type="checkbox"
                    className="w-7 h-7"
                    name={name}
                    checked={formData.reasons.includes(name)}
                    onChange={handleCheckbox}
                    required={formData.reasons.length === 0} // force at least one selection
                  />
                  <label className="text-gray text-lg ml-2.5 capitalize">
                    {name.replace("-", " ")}
                  </label>
                </div>
              )
            )}
          </div>
        </div>

        {/* Message */}
        <div className="row my-5">
          <textarea
            className="h-48 bg-[#F5F3F0] rounded-xl border border-border px-7 py-8 w-full placeholder:text-gray placeholder:text-lg text-lg"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message Here..."
            required
          />
        </div>

        {/* Submit Button */}
        <div className="row flex justify-center">
          <button
            disabled={loading}
            className={`flex gap-[0.578rem] w-fit bg-primary rounded-md transition hover:bg-primary-hover text-white px-11 py-4.5 text-lg font-medium cursor-pointer ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
            type="submit"
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
