"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Mail, Github, Linkedin, Twitter, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("phone", phone);

    // ✅ Email validation
    const email = formData.get("email") as string;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/myzbajnz", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setPhone("");
      } else {
        setStatus("error");
        setErrorMsg("Formspree rejected the submission. Check your form ID or settings.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Network error. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-20 mt-20  text-center">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
       <motion.h2
          className="text-4xl font-extrabold mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="border-b-4 border-yellow-300 pb-1">Let's Connect</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-700 text-lg mb-10 max-w-2xl mx-auto"
        >
          I’m always excited to connect with fellow developers, collaborators, or recruiters.
          Feel free to reach out via the form below or through my socials 👇
        </motion.p>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white border-2 border-black rounded-2xl shadow-[5px_5px_0_#000] p-6 sm:p-8 max-w-xl mx-auto mb-10 text-left"
        >
          <div className="flex flex-col gap-4">
            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="border-2 border-black rounded-lg px-4 py-2 shadow-[3px_3px_0_#000] focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="border-2 border-black rounded-lg px-4 py-2 shadow-[3px_3px_0_#000] focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />

            {/* Optional Phone */}
            <div className="border-2 border-black rounded-lg px-2 py-1 shadow-[3px_3px_0_#000]">
              <PhoneInput
                country={"in"}
                value={phone}
                onChange={(value) => setPhone(value)}
                inputClass="!border-0 !shadow-none !w-full !bg-transparent !text-black"
                placeholder="Your Mobile Number (optional)"
              />
            </div>

            {/* Message */}
            <textarea
              name="message"
              rows={4}
              placeholder="Your Message..."
              required
              className="border-2 border-black rounded-lg px-4 py-2 shadow-[3px_3px_0_#000] focus:outline-none focus:ring-2 focus:ring-yellow-300 resize-none"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "sending"}
              className={`${
                status === "sending" ? "opacity-70 cursor-not-allowed" : ""
              } bg-yellow-300 border-2 border-black rounded-lg px-5 py-2 font-semibold shadow-[3px_3px_0_#000] hover:translate-y-1 hover:shadow-[5px_5px_0_#000] transition-all`}
            >
              {status === "sending" ? "⏳ Sending..." : "🚀 Send Message"}
            </button>
          </div>

          {/* Success or Error messages */}
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 flex items-center gap-2 text-green-600 font-semibold"
            >
              <CheckCircle2 size={20} />
              Message sent successfully!
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-red-600 font-semibold"
            >
              ❌ {errorMsg}
            </motion.div>
          )}
        </motion.form>

   
      </div>
    </section>
  );
}
