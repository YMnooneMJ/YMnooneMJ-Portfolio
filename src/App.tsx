import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import FloatingParticles from "./components/FloatingParticles";
import Footer from "./components/Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div
      className={
        darkMode
          ? "dark bg-gray-950 text-white min-h-screen relative"
          : "bg-white text-gray-900 min-h-screen relative"
      }
    >
      <FloatingParticles />
      <div className="fixed inset-0 pointer-events-none z-10 bg-gradient-to-b from-transparent via-white/40 to-white/60 dark:via-gray-900/40 dark:to-gray-950/60"></div>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-1 w-full max-w-9xl rounded- mx-auto px-6 py-12">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
