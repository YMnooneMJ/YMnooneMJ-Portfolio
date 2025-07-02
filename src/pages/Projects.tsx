import { motion } from "framer-motion";

const projects = [
  {
    title: "Blog Website",
    description:
      "A modern blog platform featuring responsive design, dynamic content management, and seamless user experience. Built with React and Tailwind CSS for fast performance and clean aesthetics.",
    tech: ["React", "TypeScript", "TailwindCSS", "Vite"],
    url: "https://react-blog-ivory-one.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
  },
  {
    title: "Weather App",
    description:
      "A real-time weather dashboard providing location-based forecasts, interactive maps, and detailed analytics. Utilizes external APIs and responsive layouts for accessibility on any device.",
    tech: ["React", "TypeScript", "OpenWeatherMap API", "TailwindCSS"],
    url: "https://weather-application-six-ashy.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
  },
  {
    title: "Advice Generator App",
    description:
      "An interactive app that fetches and displays random advice using a public API. Features a clean UI, smooth animations, and instant content refresh for an engaging user experience.",
    tech: ["React", "TypeScript", "Advice Slip API", "Framer Motion", "TailwindCSS"],
    url: "https://advice-generator-app-three-snowy.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1721369697938-eef8d5efccb9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFkdmljZSUyMGdlbmVyYXRvcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "FashionFusion",
    description:
      "A stylish and responsive e-commerce website for fashion products. Built with HTML, Bootstrap, and JavaScript, it features a dynamic shopping cart and intuitive product browsing.",
    tech: ["HTML", "JavaScript", "Bootstrap", "LocalStorage"],
    url: "https://workshop-dom-shopping-cart.vercel.app/",
    image:
      "https://images.unsplash.com/photo-1603798125914-7b5d27789248?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbiUyMHN0b3JlfGVufDB8fDB8fHww",
  },
];

const Projects = () => {
  return (
    <div className="py-16 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-10 text-center text-purple-600 dark:text-purple-300">
          Projects
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ title, description, url, tech, image }) => (
            <motion.a
              key={title}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.04,
                boxShadow: "0 8px 32px 0 rgba(99,102,241,0.15)",
              }}
              whileTap={{ scale: 0.98 }}
              className="flex flex-col h-full bg-white/90 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {image && (
                <img
                  src={image}
                  alt={title}
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />
              )}
              <div className="flex-1 flex flex-col p-5">
                <h3 className="text-xl font-semibold mb-2 text-blue-700 dark:text-blue-300">
                  {title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {tech.map((t) => (
                    <span
                      key={t}
                      className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-200 px-2 py-1 rounded text-xs font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Projects;
