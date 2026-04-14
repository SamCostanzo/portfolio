import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const { isDark } = useTheme();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={isDark ? "dark" : "light"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={isDark ? "bg-[#080d12] min-h-screen" : "bg-[#f6f5f2] min-h-screen"}
      >
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}
