import { useState } from "react";
import { motion } from "framer-motion";
import { IoIosSend, IoMdMailUnread } from "react-icons/io";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const contactMethods = [
  {
    label: "Email",
    value: "demraldo@gmail.com",
    icon: <IoMdMailUnread className="text-blue-400" size={28} />,
    action: "mailto:ademolayusuf1349@gmail.com",
    actionLabel: "Message",
    actionIcon: <IoMdMailUnread className="text-white" size={18} />,
    border: "border-blue-400",
    bg: "bg-white/60 dark:bg-blue-900/60",
  },
  {
    label: "Whatsapp",
    value: "+2348069433474",
    icon: <FaWhatsappSquare className="text-green-400" size={28} />,
    action: "https://wa.me/2348069433474",
    actionLabel: "Message",
    actionIcon: <FaWhatsappSquare className="text-white" size={18} />,
    border: "border-green-400",
    bg: "bg-white/60 dark:bg-green-900/60",
  },
  {
    label: "Twitter",
    value: "@YMnooneMJ",
    icon: <FaSquareXTwitter className="text-blue-300" size={28} />,
    action: "https://twitter.com/YMnooneMJ",
    actionLabel: "Message",
    actionIcon: <FaSquareXTwitter className="text-white" size={18} />,
    border: "border-blue-300",
    bg: "bg-white/60 dark:bg-blue-900/60",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const { name, email, message } = formData;
  const subject = encodeURIComponent("Contact Form Submission");
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  );

  if (submitted) {
    window.location.href = `mailto:ademolayusuf1349@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="py-20 px-2 sm:px-4 bg-gradient-to-br from-gray-100 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 min-h-screen flex items-center">
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10 md:gap-16 bg-white/80 dark:bg-gray-900/80 rounded-3xl shadow-2xl p-6 md:p-12"
      >
        {/* Contact Info */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-gray-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent text-left drop-shadow-lg">
            Let's talk on your next{" "}
            <span className="text-blue-500 dark:text-blue-300">project</span>{" "}
            together
          </h2>
          <div className="flex flex-col gap-6">
            {contactMethods.map((method) => (
              <div
                key={method.label}
                className={`flex items-center justify-between rounded-2xl px-6 py-5 ${method.bg} border ${method.border} shadow-lg transition-all overflow-hidden`}
                style={{
                  backdropFilter: "blur(12px)",
                }}
              >
                <div className="flex items-center gap-4">
                  {method.icon}
                  <div>
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      {method.label}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm">
                      {method.value}
                    </div>
                  </div>
                </div>
                <a
                  href={method.action}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 transition text-white font-semibold shadow"
                >
                  {method.actionIcon}
                  <span className="hidden sm:inline">{method.actionLabel}</span>
                </a>
              </div>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-4 mt-10 justify-start">
            <a
              href="https://github.com/YMnooneMJ"
              className="rounded-full bg-gray-800 hover:bg-blue-700 p-3 text-white shadow transition"
            >
              <svg
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/ademola-adeyemo-ba13b7348/"
              className="rounded-full bg-gray-800 hover:bg-blue-700 p-3 text-white shadow transition"
            >
              <svg
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z" />
              </svg>
            </a>
            <a
              href="https://x.com/YMnooneMJ"
              className="rounded-full bg-gray-800 hover:bg-blue-500 p-3 text-white shadow transition"
            >
              <FaSquareXTwitter size={22} />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 flex flex-col justify-center mt-10 md:mt-0">
          <h2 className="text-3xl font-bold mb-6 text-left text-gray-900 dark:text-white">
            Contact Me
          </h2>
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              action="mailto:ademolayusuf1349@gmail.com"
              encType="text/plain"
              className="space-y-6"
            >
              <label className="block">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Your full name
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-2xl border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 text-gray-900 dark:text-white px-4 py-3 shadow-inner placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Your email
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-2xl border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 text-gray-900 dark:text-white px-4 py-3 shadow-inner placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                  placeholder="you@example.com"
                />
              </label>
              <label className="block">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Your message
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 block w-full rounded-2xl border border-gray-300 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 text-gray-900 dark:text-white px-4 py-3 shadow-inner placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
                  placeholder="Your message here..."
                />
              </label>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl shadow-lg transition-all text-lg w-full"
              >
                <IoIosSend />
                Send Now
              </motion.button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center text-green-500 font-semibold mt-10 text-lg"
            >
              <p>Thank you for reaching out! I will get back to you soon.</p>
            </motion.div>
          )}
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
