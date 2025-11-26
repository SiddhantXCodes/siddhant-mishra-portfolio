"use client";

import { useState } from "react";
import { X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ResumeModalProps {
  onClose: () => void; // ✅ define the prop type here
}

export default function ResumeModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-yellow-300 border-2 border-black px-5 py-2 rounded-lg font-semibold shadow-[3px_3px_0_#000]
        hover:translate-y-1 hover:shadow-[5px_5px_0_#000] transition-all flex items-center gap-2"
      >
        <Download size={18} /> View Resume
      </button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white border-4 border-black rounded-xl shadow-[5px_5px_0_#000] max-w-4xl w-full mx-4 overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <div className="flex justify-between items-center p-4 border-b-2 border-black bg-yellow-100">
                <h3 className="text-lg font-bold">My Resume</h3>
                <div className="flex gap-3">
                  <a
                    href="https://1drv.ms/w/c/a0432b20eebe2f83/IQAw_OPCSqAiSJCF5e2q3P6UAeCXO9DM7nYQum5AluqHiJE?e=1p5Ecj"
                    download
                    className="text-sm font-semibold border-2 border-black px-2 py-1 rounded hover:bg-yellow-200"
                  >
                    <Download size={16} className="inline mr-1" />
                    Download
                  </a>
                  <button onClick={() => setIsOpen(false)}>
                    <X size={22} />
                  </button>
                </div>
              </div>

              <iframe
                src="/resume.pdf"
                className="w-full h-[85vh]"
                title="Resume PDF"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
