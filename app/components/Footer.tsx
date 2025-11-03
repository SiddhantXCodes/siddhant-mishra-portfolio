"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-yellow-100 border-t-4 border-black text-center py-8 mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-6"
      >
        {/* 🌐 Social Links */}
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://github.com/siddhantmishra"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-black p-2 rounded-full hover:bg-black hover:text-white transition-all shadow-[2px_2px_0_#000]"
          >
            <Github size={20} />
          </a>

          <a
            href="https://linkedin.com/in/siddhantmishra"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-black p-2 rounded-full hover:bg-[#0077b5] hover:text-white transition-all shadow-[2px_2px_0_#000]"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="mailto:siddhantmishra.dev@gmail.com"
            className="border-2 border-black p-2 rounded-full hover:bg-yellow-100 transition-all shadow-[2px_2px_0_#000]"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* 💬 Footer Text */}
        <p className="text-gray-800 font-semibold">
          © {new Date().getFullYear()} Siddhant Mishra — All Rights Reserved.
        </p>

        <p className="text-sm text-gray-600 mt-1 mb-20">
          Built with ❤️ using Next.js & Tailwind CSS
        </p>
      </motion.div>
    </footer>
  );
}
