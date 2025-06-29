import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const socials = [
  {
    href: "https://github.com/YMnooneMJ",
    icon: <FaGithub className="w-5 h-5" />,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/ademola-adeyemo-ba13b7348/",
    icon: <FaLinkedin className="w-5 h-5" />,
    label: "LinkedIn",
  },
  {
    href: "mailto:demraldo@gmail.com",
    icon: <FaMailBulk className="w-5 h-5" />,
    label: "Email",
  },
  {
    href: "https://x.com/YMnooneMJ",
    icon: <FaSquareXTwitter className="w-5 h-5" />,
    label: "X",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="w-full px-4 py-10 bg-transparent">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
        {/* Social Icons */}
        <div className="flex gap-5 mb-2">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: i % 2 === 0 ? 5 : -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-11 h-11 rounded-full bg-gray-200/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-200 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 transition-colors shadow"
              aria-label={s.label}
            >
              {s.icon}
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-base font-semibold text-center text-gray-900 dark:text-gray-400">
          Copyright ©2025 ᵞᴹNøŌneᴹᴶ. All Rights Reserved.
        </p>

        {/* Credit */}
        <p className="font-medium text-gray-600 dark:text-gray-400 text-center flex items-center gap-1">
          Built with love by{" "}
          <span className="font-semibold text-gray-900 dark:text-gray-600">
            Ademola Yusuf
          </span>
          <span className="text-lg">❤</span>
        </p>
      </div>
      <div className="w-full flex justify-center items-center py-8 bg-transparent">
        <h1
          className="text-[7vw] font-extrabold bg-gradient-to-r from-blue-800 via-gray-600 to-red-400 bg-clip-text text-transparent select-none"
          style={{ lineHeight: 1 }}
        >
          Ademola Yusuf
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
