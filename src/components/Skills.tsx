import { motion } from "framer-motion";
import { FaDatabase, FaGlobe } from "react-icons/fa";

const skills = [
  {
    category: "Frontend",
    items: [
      "React",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "SASS",
    ],
    icon: FaGlobe,
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express",
      "JavaScript",
      "Django",
      "Java",
      "Spring Boot",
      "REST APIs",
    ],
    icon: FaDatabase,
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL", "MySQL",],
    icon: FaDatabase,
  },
];

const Skills = () => {
  return (
    <div className="py-20 px-4 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <motion.section
        id="skills"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {skills.map((skillGroup, index) => {
            const IconComponent = skillGroup.icon;
            return (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 32px 0 rgba(168,85,247,0.15)",
                }}
                className="rounded-2xl p-8 bg-white/80 dark:bg-gray-800 border border-purple-100 dark:border-gray-800 shadow-md hover:shadow-xl transition-all duration-300 w-full max-w-xs"
              >
                <div className="flex items-center mb-4">
                  <IconComponent className="text-purple-400 mr-3" size={28} />
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                    {skillGroup.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium shadow-sm hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>
    </div>
  );
};

export default Skills;
