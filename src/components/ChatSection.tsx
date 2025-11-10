import { ArrowUp, MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatSection() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; text: string }[]>(
    []
  );
  const [input, setInput] = useState("");
  const bodyRef = useRef<HTMLDivElement>(null);

  const placeholders = ["skills", "projects", "experience", "contact info"];

  useEffect(() => {
    if (!open) return;
    const initialMsg = {
      role: "bot",
      text: "Hi! I’m Shashwat’s portfolio assistant. I can tell you about projects, skills, and how to contact him.",
    };
    setMessages([initialMsg]);
  }, [open]);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { role: "user", text: input };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");

    const loadingMsg = { role: "bot", text: "Thinking..." };
    setMessages([...updated, loadingMsg]);

    const payload = {
      contents: [
        {
          parts: [
            {
              text: `
                    You are a personal portfolio assistant for Shashwat. Your task is to answer questions about Shashwat's skills, projects, technologies, and experience. 
                    Use the following data:

                    Skills:
                    - Java 
                    - Python 
                    - Web Development 
                    - Database Management 
                    - Problem Solving 

                    Technologies by category:
                    - Programming: Java, Python, JavaScript, TypeScript, HTML, CSS
                    - Frameworks: React.js, Node.js, Express.js, JakartaEE, TailwindCSS
                    - Databases: MySQL, MongoDB, Oracle
                    - Tools: Git, VS Code, Eclipse, Figma, GitHub, Postman
                    - Currently Exploring: TypeScript, C#
                    - Soft Skills: Problem Solving, Teamwork, Communication

                    Projects:
                    1. MediConnect - Academic Project: Web-based hospital appointments and staff management app. Tech: Java, MySQL, JakartaEE, Servlets. 
                    2. Land Rental System - Academic Project: CLI app for buying/selling land. Tech: Python, Pandas, Matplotlib, NumPy. 
                    3. Weather App - Personal Project: Shows city weather using OpenWeather API. Tech: React.js, OpenWeather API. 
                    4. Quiz App - Personal Project: Quiz management with authentication and responsive UI. Tech: React.js, MongoDB, Express.js, Node.js, TailwindCSS. 
                    5. Movie Details App - Personal Project: Browse movie details using TMDB API. Tech: React.js, Express.js, Node.js, TailwindCSS.
                    6. Chat App - Personal Project: MERN chat app with Socket.IO, JWT auth, media sharing. Tech: React.js, Express.js, Node.js, MongoDB, Socket.IO, JWT Authentication, TailwindCSS. 

                    Contact:
                    - Email: shashwatshakya89@gmail.com
                    - Phone: +977 9849977706 or +977 9704535418

                    Instructions:
                    - Keep answers concise, friendly, and professional.
                    - Only provide info about Shashwat's portfolio (skills, projects, technologies, experience).
                    - If asked about unrelated topics, politely decline and redirect to portfolio info.
                    - Provide GitHub links and live project links when relevant.
                    - Answer in paragraphs, no markdowns and other formattings.
                    - If asked about projects give only two and randomize it.
                    - If asked about work experience, tell "No experience till date.".
                    - If asked about contact info, provide Shashwat's email and phone number.
                    - If irrelevant prompt is given, answer: "Sorry, I can't help with that.".
                    `,
            },
          ],
        },
        ...updated.map((m) => ({ parts: [{ text: m.text }] })),
      ],
    };

    try {
      const res = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSyBVrSRBzl-1VHunEK5kANT9JkUjRrB3uyY",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();
      const reply =
        data.candidates?.[0]?.content?.parts?.[0]?.text || "no response";

      setMessages((m) => [
        ...m.filter((x) => x !== loadingMsg),
        { role: "bot", text: reply },
      ]);
    } catch {
      setMessages((m) => [...m, { role: "bot", text: "error" }]);
    }
  };

  return (
    <>
      {/* Floating Button with Framer Motion */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 p-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <MessageCircle size={22} />
      </motion.button>

      {/* Chatbox */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-20 right-5 w-96 h-120 bg-gray-900 border border-gray-700 rounded-lg shadow-lg flex flex-col px-6 pt-4 pb-6 z-50"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <h1 className="text-xl font-bold pb-3 text-blue-600 text-center">
              Personal Assistant Chat Bot
            </h1>

            <div className="flex-1 overflow-y-auto p-3 space-y-2 border rounded-lg border-gray-700">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={m.role === "user" ? "text-right" : "text-left"}
                >
                  <span
                    className={
                      m.role === "user"
                        ? "inline-block px-3 py-2 bg-blue-500/20 border border-blue-500/30 text-white rounded-2xl max-w-70 rounded-br-xs overflow-hidden"
                        : "inline-block px-3 py-2 bg-blue-500/60 border border-blue-500/60 text-white rounded-2xl max-w-70 rounded-bl-xs overflow-hidden"
                    }
                  >
                    {m.text}
                  </span>
                </div>
              ))}
              <div ref={bodyRef}></div>
            </div>

            <div className="flex gap-1 mt-4">
              <input
                className="flex-1 px-5 outline-none  border border-blue-500/30 bg-blue-500/20 rounded-full text-blue-300"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={`Ask me about ${
                  placeholders[Math.floor(Math.random() * placeholders.length)]
                }...`}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button
                className="p-2 border border-blue-500/30 bg-blue-500/20 rounded-full text-blue-300 hover:bg-purple-500 transition-colors duration-300 hover:text-white"
                onClick={sendMessage}
              >
                <ArrowUp />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
