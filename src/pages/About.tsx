import { motion } from "framer-motion";
import { IoCode } from "react-icons/io5";

const About = () => {
  return (
    <div className="py-20 px-4 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        aria-labelledby="about-heading"
        className="max-w-5xl mx-auto"
      >
        <h2
          id="about-heading"
          className="text-4xl font-bold text-center mb-14 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg"
        >
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center bg-white/80 dark:bg-gray-800 rounded-3xl shadow-lg p-8">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200">
              I was going to be a professional footballer but 🥱... I'm a
              passionate full-stack developer with 6 months of experience
              building web applications that solve real-world problems. I love
              working with modern technologies and I am always eager to learn
              new tools and frameworks.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-200 rounded-full border border-purple-200 dark:border-purple-800 text-sm font-semibold shadow-sm">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-200 rounded-full border border-pink-200 dark:border-pink-800 text-sm font-semibold shadow-sm">
                Team Player
              </span>
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full border border-blue-200 dark:border-blue-800 text-sm font-semibold shadow-sm">
                Continuous Learner
              </span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 rounded-full bg-gradient-to-br from-gray-600 via-gray-800 to-black/30 p-1 shadow-xl flex items-center justify-center">
              <div
                className="w-full h-full rounded-full flex items-center justify-center bg-white/90 dark:bg-gray-900"
                role="img"
                aria-label="Code icon representing programming skills"
              >
                <IoCode size={110} className="text-purple-400" />
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
