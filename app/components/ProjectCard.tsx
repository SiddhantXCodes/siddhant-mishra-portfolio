"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Github, Globe } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  img: string | string[]; // can be single or multiple images
  github: string;
  live: string;
  techStack?: string[];
}

export default function ProjectCard({
  title,
  description,
  img,
  github,
  live,
  techStack,
}: ProjectCardProps) {
  const images = Array.isArray(img) ? img : [img];
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      {/* 🎴 Project Card */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-white border-2 border-black shadow-[4px_4px_0_#000] rounded-xl overflow-hidden max-w-sm"
      >
        <div className="relative cursor-pointer" onClick={() => setShowModal(true)}>
          <img
            src={images[0]}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-500"
          />
          <motion.div
            className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center py-2 text-sm opacity-0 hover:opacity-100 transition-opacity duration-300"
          >
            Click to view fullscreen
          </motion.div>
        </div>

        <div className="p-3">
        {techStack && techStack.length > 0 && (
  <div className="flex flex-wrap gap-1 mb-1">
    {techStack.map((tech, i) => (
      <span
        key={i}
        className="
          bg-yellow-300 text-gray-800 
          text-[11px] font-medium px-2 py-[2px] rounded-full
          border border-black-300
        "
      >
        {tech}
      </span>
    ))}
  </div>
)}

          <h3 className="text-xl font-bold mb-2">{title}</h3>
         
          <p className="text-gray-700 text-sm mb-4">{description}</p>
          {/* 🧠 Tech Stack */}
          

          <div className="flex justify-between items-center">
            <a
              href={github}
              target="_blank"
              className="flex items-center gap-1 text-sm font-medium border-2 border-black px-3 py-1 rounded-md hover:bg-black hover:text-white transition-all"
            >
              <Github size={16} /> Code
            </a>
            <a
              href={live}
              target="_blank"
              className="flex items-center gap-1 text-sm font-medium border-2 border-black px-3 py-1 rounded-md hover:bg-black hover:text-white transition-all"
            >
              <Globe size={16} /> Live
            </a>
          </div>
        </div>
      </motion.div>

      {/* 🌌 Fullscreen Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl p-4"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={images[currentIndex]}
                alt={title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />

              {/* ❌ Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 bg-white text-black rounded-full p-2 hover:bg-gray-200 transition"
              >
                <X size={20} />
              </button>

              {/* ⬅️➡️ Navigation Buttons (only if multiple images) */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 hover:bg-gray-200 transition"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 hover:bg-gray-200 transition"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
