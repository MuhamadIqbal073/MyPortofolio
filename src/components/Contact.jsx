// src/components/Contact.jsx

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    emailjs
  .sendForm(
    "service_ymwrjm5",
    "template_k7o7tmn",
    form.current,
    "n3KwWtTm4aFwIi3tp"
  )
      .then(
        () => {
          setStatus("success");
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.log(error);

          setStatus("error");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="
        py-24
        px-5
        bg-slate-50
        dark:bg-slate-900
        transition
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            text-4xl
            sm:text-5xl
            font-bold
            text-center
            mb-16
            text-slate-900
            dark:text-white
          "
        >
          Contact <span className="text-cyan-400">Me</span>
        </motion.h2>

        {/* CONTACT FORM */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-8
            bg-slate-100
            dark:bg-slate-950
            rounded-3xl
            p-6
            sm:p-10
            shadow-2xl
            border
            border-slate-200
            dark:border-white/10
          "
        >

          {/* LEFT SIDE */}
          <div className="space-y-6">

            {/* NAME */}
            <div>
              <label
                className="
                  block
                  mb-2
                  font-medium
                  text-slate-700
                  dark:text-slate-300
                "
              >
                Your Name
              </label>

              <input
                type="text"
                name="user_name"
                placeholder="Enter your name"
                required
                className="
                  w-full
                  p-4
                  rounded-2xl
                  bg-white
                  dark:bg-slate-800
                  text-black
                  dark:text-white
                  placeholder:text-slate-400
                  border
                  border-slate-200
                  dark:border-white/10
                  focus:outline-none
                  focus:ring-2
                  focus:ring-cyan-500
                  transition
                "
              />
            </div>

            {/* EMAIL */}
            <div>
              <label
                className="
                  block
                  mb-2
                  font-medium
                  text-slate-700
                  dark:text-slate-300
                "
              >
                Your Email
              </label>

              <input
                type="email"
                name="user_email"
                placeholder="Enter your email"
                required
                className="
                  w-full
                  p-4
                  rounded-2xl
                  bg-white
                  dark:bg-slate-800
                  text-black
                  dark:text-white
                  placeholder:text-slate-400
                  border
                  border-slate-200
                  dark:border-white/10
                  focus:outline-none
                  focus:ring-2
                  focus:ring-cyan-500
                  transition
                "
              />
            </div>

            {/* SUBJECT */}
            <div>
              <label
                className="
                  block
                  mb-2
                  font-medium
                  text-slate-700
                  dark:text-slate-300
                "
              >
                Subject
              </label>

              <input
                type="text"
                name="title"
                placeholder="Enter message subject"
                required
                className="
                  w-full
                  p-4
                  rounded-2xl
                  bg-white
                  dark:bg-slate-800
                  text-black
                  dark:text-white
                  placeholder:text-slate-400
                  border
                  border-slate-200
                  dark:border-white/10
                  focus:outline-none
                  focus:ring-2
                  focus:ring-cyan-500
                  transition
                "
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                bg-cyan-500
                hover:bg-cyan-600
                disabled:opacity-60
                disabled:cursor-not-allowed
                py-4
                rounded-2xl
                text-white
                font-semibold
                transition
                shadow-lg
                hover:shadow-cyan-500/30
              "
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* STATUS */}
            {status === "success" && (
              <div
                className="
                  rounded-2xl
                  bg-green-100
                  dark:bg-green-500/10
                  border
                  border-green-300
                  dark:border-green-500/20
                  p-4
                "
              >
                <p className="text-sm font-semibold text-green-600 dark:text-green-400">
                  Message sent successfully!
                </p>
              </div>
            )}

            {status === "error" && (
              <div
                className="
                  rounded-2xl
                  bg-red-100
                  dark:bg-red-500/10
                  border
                  border-red-300
                  dark:border-red-500/20
                  p-4
                "
              >
                <p className="text-sm font-semibold text-red-600 dark:text-red-400">
                  Failed to send message. Please check your EmailJS template variables.
                </p>
              </div>
            )}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col h-full">

            <label
              className="
                block
                mb-2
                font-medium
                text-slate-700
                dark:text-slate-300
              "
            >
              Message
            </label>

            <textarea
              name="message"
              rows="10"
              placeholder="Write your message here..."
              required
              className="
                flex-1
                w-full
                p-5
                rounded-2xl
                bg-white
                dark:bg-slate-800
                text-black
                dark:text-white
                placeholder:text-slate-400
                border
                border-slate-200
                dark:border-white/10
                focus:outline-none
                focus:ring-2
                focus:ring-cyan-500
                transition
                resize-none
              "
            ></textarea>

          </div>

        </motion.form>
      </div>
    </section>
  );
}