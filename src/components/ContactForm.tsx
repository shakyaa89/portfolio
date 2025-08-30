import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const messageToast = (message: string, messageType: "success" | "error") => {
    messageType === "success" ? toast.success(message) : toast.error(message);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const name = (
      formRef.current.elements.namedItem("name") as HTMLInputElement
    )?.value.trim();
    const email = (
      formRef.current.elements.namedItem("email") as HTMLInputElement
    )?.value.trim();
    const subject = (
      formRef.current.elements.namedItem("subject") as HTMLInputElement
    )?.value.trim();
    const message = (
      formRef.current.elements.namedItem("message") as HTMLTextAreaElement
    )?.value.trim();

    if (name === "" || email === "" || message === "" || subject === "") {
      messageToast("Please fill in all the fields!", "error");
      return;
    }

    setIsLoading(true);

    emailjs
      .sendForm(
        "service_7k5pm0f",
        "template_60i2rhi",
        formRef.current,
        "F4zcGUR4fa4VoBuiB"
      )
      .then(
        () => {
          messageToast("Message sent successfully!", "success");
          formRef.current?.reset();
          setIsLoading(false);
        },
        () => {
          messageToast("Error Sending Email!", "error");
          setIsLoading(false);
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
        {/* Name */}
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
            className="w-full px-4 py-2 rounded-lg bg-gray-900/60 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50"
          />
        </div>

        {/* Subject */}
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
            className="w-full px-4 py-2 rounded-lg bg-gray-900/60 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50"
          />
        </div>

        {/* Email */}
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
            className="w-full px-4 py-2 rounded-lg bg-gray-900/60 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50"
          />
        </div>

        {/* Message */}
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
            className="w-full px-4 py-2 rounded-lg bg-gray-900/60 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 resize-none"
          ></textarea>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isLoading} // disable while loading
          className={`w-full py-3 mt-6 rounded-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 text-white font-medium transition duration-200 shadow-md hover:shadow-lg ${
            isLoading
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-blue-700 cursor-pointer"
          }`}
        >
          {isLoading ? "Sending..." : "Submit"}
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
