"use client"

import Navbar from "./components/Navbar";
import Card from "./components/ProjectCard";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
 const allProjects = [
    {
      title: "Speed Maths App",
      desc: "A Flutter app to improve calculation speed and accuracy.",
      img: ["/projects/project1.png", "/projects/project2.webp", ],
      github: "https://github.com/yourusername/speedmaths",
      live: "https://speedmaths.vercel.app",
      category: ["Android", "High-level"],
      techStack: ["Flutter", "Dart", "Firebase"],
    },
    {
      title: "Vocabulary Builder",
      desc: "Learn new words daily from the entire dictionary with gamified progress.",
      img: ["/projects/project1.png", "/projects/project1.png", "/projects/project1.png"],
      github: "https://github.com/yourusername/vocab-builder",
      live: "https://vocab-builder.vercel.app",
      category: ["Web", "Intermediate"],
      techStack: ["React", "TypeScript", "TailwindCSS"],
    },
    {
      title: "Study Timer System",
      desc: "Smart study timer like YPT app — stay focused and track your sessions.",
    img: ["/projects/project1.png", "/projects/project1.png", "/projects/project1.png"],
      github: "https://github.com/yourusername/study-timer",
      live: "https://study-timer.vercel.app",
      category: ["Android", "Basic"],
      techStack: ["Flutter", "Firebase", "Provider"],
    },
    {
      title: "Portfolio Website",
      desc: "A handcrafted portfolio website with animations and unique design.",
     img: ["/projects/project1.png", "/projects/project1.png", "/projects/project1.png"],
      github: "https://github.com/yourusername/portfolio",
      live: "https://portfolio.vercel.app",
      category: ["Web", "High-level"],
    },
    {
      title: "AI Chat App",
      desc: "An experimental chat app powered by AI using Node.js and OpenAI API.",
      img: "/projects/project1.png",
      github: "https://github.com/yourusername/aichat",
      live: "https://aichat.vercel.app",
      category: ["AI/ML", "High-level", "Web"],
    },
  ];

  const categories = ["All", "Web", "Android", "AI/ML", "High-level", "Intermediate", "Basic"];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category.includes(activeCategory));



  return (
    <main className="min-h-screen bg-[#fefcf7] text-black relative">
      <Navbar />

      {/* Hero Section */}
      <section 
        className="relative flex flex-col items-center justify-center text-center min-h-[90vh] pt-6 pb-10 overflow-hidden">
        {/* 🎨 Soft watercolor-like blobs */}
        <div className="absolute inset-0 -z-10 opacity-40">
          <div className="absolute w-60 h-60 bg-yellow-100 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
          <div className="absolute w-72 h-72 bg-pink-100 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>
        </div>

        {/* 🖼️ Polaroid-style photo */}
        <div className="relative mb-4">
          <div className="bg-[#fffef9] border-2 border-black p-2 rounded-lg shadow-[4px_4px_0_#000] transform rotate-[-2deg] hover:rotate-[0deg] transition-transform duration-300">
            <img
              src="/siddhant_mishra_image.JPG"
              alt="Siddhant Mishra"
              className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg border-2 border-black"
            />
            <p className="mt-2 text-sm text-gray-700">Siddhant Mishra</p>
          </div>
        </div>

        {/* 💬 Main intro text */}
        <div className="relative bg-[#fffef9] border-2 border-black rounded-2xl shadow-[5px_5px_0_#000] px-6 py-8 sm:px-8 sm:py-10 handdrawn hover:shadow-[7px_7px_0_#000] transition-all duration-300">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2 leading-tight">
            Hi, I’m <span className="underline decoration-4 decoration-yellow-400">Siddhant Mishra</span> 👋
          </h1>

          <h2 className="text-base sm:text-lg font-bold text-gray-700 max-w-xl mx-auto mb-3">
           Flutter App Developer | Full-Stack Web Developer
           </h2>
            <h2 className="text-base sm:text-lg text-gray-700 max-w-xl mx-auto mb-6">
          I’m an independent and creative developer specializing in Flutter app development and full-stack web development (MERN & Next.js). I enjoy designing and developing apps from scratch — handling everything from UI/UX to backend integration. ✨
           </h2>
          
          

          {/* 📎 Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-2">
            <a
              href="#projects"
              className="bg-yellow-300 border-2 border-black rounded-lg px-5 py-1.5 text-base font-semibold shadow-[3px_3px_0_#000] transition-all hover:translate-y-1 hover:shadow-[5px_5px_0_#000]"
            >
              🚀 View My Work
            </a>
            <a
              href="#contact"
              className="bg-white border-2 border-black rounded-lg px-5 py-1.5 text-base font-semibold shadow-[3px_3px_0_#000] transition-all hover:translate-y-1 hover:bg-gray-100 hover:shadow-[5px_5px_0_#000]"
            >
              📬 Contact Me
            </a>
          </div>
        </div>

        {/* ✏️ Subtle hand-drawn underline */}
        <svg
          className="absolute bottom-4 w-3/4 max-w-lg opacity-30"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 50"
          fill="none"
        >
          <path
            d="M5 25c80 20 200 20 300 0s240-20 350 0"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="5 10"
          />
        </svg>
      </section>

      <div className="section-divider"></div>

      {/* 🚀 Projects Section */}
        <section
        id="projects"
        className="py-10 px-6 sm:px-12 md:px-24 lg:px-40 xl:px-56 bg-transparent relative"
      >
        <motion.h2
          className="text-4xl font-extrabold mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="border-b-4 border-yellow-300 pb-1">My Projects</span>
        </motion.h2>



        {/* 🧭 Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-lg border-2 border-black font-medium text-sm sm:text-base shadow-[3px_3px_0_#000] transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-yellow-300 translate-y-1 shadow-[5px_5px_0_#000]"
                  : "bg-white hover:translate-y-1 hover:shadow-[4px_4px_0_#000]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 🧱 Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center"
        >
          <AnimatePresence>
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <Card
                  title={project.title}
                  
                  description={project.desc}
                  img={project.img}
                  github={project.github}
                  live={project.live}
                  techStack={project.techStack}
                   
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        </section>
      
      <div className="section-divider"></div>
      
      {/*About Section*/}
      <AboutSection />

      <div className="section-divider"></div>
      {/* {Contact Section} */}
      <ContactSection/>

      <Footer />
    </main>
  );
}
