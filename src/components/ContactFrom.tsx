import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const name = (
      formRef.current.elements.namedItem("from_name") as HTMLInputElement
    )?.value.trim();
    const email = (
      formRef.current.elements.namedItem("reply_to") as HTMLInputElement
    )?.value.trim();
    const subject = (
      formRef.current.elements.namedItem("subject") as HTMLInputElement
    )?.value.trim();
    const message = (
      formRef.current.elements.namedItem("message") as HTMLTextAreaElement
    )?.value.trim();

    if (name === "" || email === "" || message === "" || subject === "") {
      setErrorMessage("Please fill in all the fields!");
      setShowErrorMessage(true);
      setShowSuccessMessage(false);
      return;
    }

    emailjs
      .sendForm(
        "service_7k5pm0f", // Replace with your EmailJS service ID
        "template_60i2rhi", // Replace with your EmailJS template ID
        formRef.current,
        "F4zcGUR4fa4VoBuiB" // Replace with your EmailJS public key
      )
      .then(
        () => {
          setShowErrorMessage(false);
          setShowSuccessMessage(true);
          formRef.current?.reset();
        },
        (error: any) => {
          console.error("Email send failed:", error.text);
          setErrorMessage("Error Sending Email!");
          setShowErrorMessage(true);
        }
      );
  };

  return (
    <motion.div
      key="contact-form"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50, scale: 0.95 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-gray-900/20 backdrop-blur-lg p-8 rounded-2xl shadow-lg w-full max-w-md border border-gray-800 mb-10"
    >
      <h2 className="text-3xl font-semibold text-white mb-6 text-center">
        Contact
      </h2>
      <form ref={formRef} onSubmit={sendEmail}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-300 text-sm mb-2 text-left"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            onChange={() => {
              setShowErrorMessage(false);
              setShowSuccessMessage(false);
            }}
            className="w-full px-4 py-2 rounded-lg bg-gray-900/60 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-gray-300 text-sm mb-2 text-left"
          >
            Subject
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Subject"
            onChange={() => {
              setShowErrorMessage(false);
              setShowSuccessMessage(false);
            }}
            className="w-full px-4 py-2 rounded-lg bg-gray-900/60 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-300 text-sm mb-2 text-left"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            onChange={() => {
              setShowErrorMessage(false);
              setShowSuccessMessage(false);
            }}
            className="w-full px-4 py-2 rounded-lg bg-gray-900/60 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 "
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-gray-300 text-sm mb-2 text-left"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message..."
            rows={5}
            onChange={() => {
              setShowErrorMessage(false);
              setShowSuccessMessage(false);
            }}
            className="w-full px-4 py-2 rounded-lg bg-gray-900/60 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 resize-none"
          ></textarea>
        </div>

        {showSuccessMessage && (
          <motion.p
            className="text-lg text-green-500 max-w-2xl font-semibold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            Email Sent!
          </motion.p>
        )}

        {showErrorMessage && (
          <motion.p
            className="text-lg text-red-500 max-w-2xl font-semibold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            {errorMessage}
          </motion.p>
        )}

        <button
          type="submit"
          className="w-full py-3 mt-6 rounded-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 hover:bg-blue-700 text-white font-medium transition duration-200 shadow-md hover:shadow-lg cursor-pointer"
        >
          Submit
        </button>
      </form>
    </motion.div>
  );
}
