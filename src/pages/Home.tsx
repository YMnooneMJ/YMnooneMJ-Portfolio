import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaChevronDown, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Skills from "./Skills";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { useLocation } from "react-router-dom";

const handleType = (count: number) => console.log(count);
const handleDone = () => console.log("Done after 5 loops!");

const sectionList = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Home = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", ...sectionList.map((s) => s.id)];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    const scrollTo = (id: string) => {
      const element = document.getElementById(id);
      const navbarHeight = 100;
      if (element) {
        const yOffset = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: yOffset - navbarHeight,
          behavior: "smooth",
        });
      }
    };

    if (params.get("scrollToHero") === "true") {
      setTimeout(() => scrollTo("hero"), 100);
    }
    if (params.get("contact") === "true") {
      setTimeout(() => scrollTo("contact"), 100);
    }
  }, [location.search]);

  const Section = ({
    id,
    title,
    children,
  }: {
    id: string;
    title: string;
    children: React.ReactNode;
  }) => (
    <section
      id={id}
      className={`px-4 sm:px-8 py-12 w-full transition-all duration-300 ${
        activeSection === id
          ? "ring-4 ring-blue-400/40 dark:ring-blue-600/40 scale-[1.03]"
          : "ring-0"
      }`}
      style={{ scrollMarginTop: 120 }}
    >
      {title && (
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 text-center">
          {title}
        </h2>
      )}
      {children}
    </section>
  );

  return (
    <div id="home" className="min-h-screen w-full">
      {/* HERO */}
      <div id="hero" className="py-16 px-4 sm:px-8">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6 max-w-3xl mx-auto text-center"
        >
          <h1 className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            Hi <span className="text-white/90">👋</span>, I'm{" "}
            <span className="text-blue-800 font-bold">
              <Typewriter
                words={["Ademola", "Yusuf", "NoOne"]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={60}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={handleDone}
                onType={handleType}
              />
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-950 dark:text-gray-400">
            Full Stack Developer & Software Engineer
          </p>

          <p className="text-md text-gray-950 dark:text-gray-400">
            I build reliable, interactive and responsive web applications with
            React, Next.js, Tailwind CSS, Express, and more.
          </p>

          <p className="text-sm text-gray-800 dark:text-gray-500">
            Welcome to my portfolio — explore my projects and feel free to get
            in touch!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-700 hover:to-gray-900 transition-all transform hover:scale-105 font-semibold text-white"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 border-2 border-purple-400 rounded-full hover:bg-purple-400/10 transition-all font-semibold"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center">
            <a
              href="https://docs.google.com/document/d/1Ep6uoUr0jCjImF7xzithvdUaISGNNe9idx2C636IDoY/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-all font-semibold text-blue-600 dark:text-blue-400 mt-4"
            >
              See My Resume
            </a>
          </div>

          <div className="flex justify-center space-x-6 pt-8">
            {[{
              icon: <FaGithub size={24} />,
              href: "https://github.com/YMnooneMJ"
            }, {
              icon: <FaLinkedin size={24} />,
              href: "https://www.linkedin.com/in/ademola-adeyemo-ba13b7348/"
            }, {
              icon: <FaXTwitter size={24} />,
              href: "https://x.com/YMnooneMJ"
            }, {
              icon: <MdEmail size={24} />,
              href: "mailto:ademolayusuf1349@gmail.com"
            }].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="p-3 rounded-full hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 transition-colors shadow"
              >
                {item.icon}
              </a>
            ))}
          </div>

          <div className="flex justify-center">
            <div className="animate-bounce">
              <FaChevronDown
                size={32}
                className="text-gray-900 dark:text-gray-300 mt-4"
              />
            </div>
          </div>
        </motion.section>
      </div>

      {/* CONTENT SECTIONS */}
      <Section id="about" title="">
        <About />
      </Section>

      <Section id="skills" title="">
        <Skills />
      </Section>

      <Section id="projects" title="">
        <Projects />
      </Section>

      <Section id="contact" title="">
        <Contact />
      </Section>
    </div>
  );
};

export default Home;
