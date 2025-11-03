"use client";

import { motion } from "framer-motion";
import { Download, Briefcase, GraduationCap, Award, Heart } from "lucide-react";
import ResumeModal from "./ResumeModal";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 px-6 sm:px-12 md:px-24 lg:px-40 xl:px-56 bg-transparent text-black"
    >
              <motion.h2
          className="text-4xl font-extrabold mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="border-b-4 border-yellow-300 pb-1">About Me</span>
        </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white border-2 border-black rounded-2xl shadow-[6px_6px_0_#000] p-8 space-y-10"
      >
        {/* 🧑‍💼 Intro */}
        <div>
          <h3 className="text-2xl font-bold mb-3">👋 Who I Am</h3>
          <p className="text-gray-700 leading-relaxed">
            I’m <span className="font-semibold">Siddhant Mishra</span> — a passionate developer who loves crafting digital experiences that are fast, elegant, and meaningful.  
            I specialize in <span className="font-semibold">Flutter</span>, <span className="font-semibold">Web Development</span>, and have explored <span className="font-semibold">AI/ML</span> projects as well.  
            I enjoy combining creativity with clean code to build things that make people smile 😊
          </p>
        </div>

        {/* 💻 Skills */}
        <div>
          <h3 className="text-2xl font-bold mb-4">💻 Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Flutter",
              "Dart",
              "Firebase",
              "React",
              "Next.js",
              "Node.js",
              "Express",
              "MongoDB",
              "Python",
              "AI/ML",
              "TailwindCSS",
            ].map((tech, i) => (
              <span
                key={i}
                className="border-2 border-black bg-yellow-100 px-3 py-1 text-sm rounded-md shadow-[2px_2px_0_#000] font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 🎓 Education */}
        <div>
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <GraduationCap className="w-5 h-5" /> Education
          </h3>
          <div className="border-l-4 border-black pl-4 space-y-4">
            <div>
              <p className="font-semibold">B.Tech in Electronics and Communication Enginnering </p>
              <p className="text-sm text-gray-600">Bundelkhand Instititue of Enginering and technology(BIET), Jhansi — 2020–2024</p>
            </div>
            <div>
              <p className="font-semibold">Intermediate(10+2) (PCM)</p>
              <p className="text-sm text-gray-600">Blue Bells Public School, Jhansi — 2018–2020</p>
            </div>
          </div>
        </div>

        {/* 🏢 Work Experience */}
        <div>
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Briefcase className="w-5 h-5" /> Experience
          </h3>
          <div className="border-l-4 border-black pl-4 space-y-4">
            <div>
              <p className="font-semibold">Flutter Developer Intern — DevTech Labs</p>
              <p className="text-sm text-gray-600">Jan 2023 – Jun 2023</p>
              <p className="text-sm text-gray-700">
                Built and optimized cross-platform mobile apps using Flutter and Firebase.
              </p>
            </div>
            <div>
              <p className="font-semibold">Web Developer (Freelance)</p>
              <p className="text-sm text-gray-600">2021 – Present</p>
              <p className="text-sm text-gray-700">
                Designed responsive and modern websites using React, Next.js, and Node.js.
              </p>
            </div>
          </div>
        </div>

        {/* 🏆 Achievements */}
        <div>
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Award className="w-5 h-5" /> Achievements
          </h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>🏅 Winner of <span className="font-semibold">Smart India Hackathon 2022</span></li>
            <li>Developed an AI-based productivity tool during Hackathon</li>
            <li>Top 1% in Flutter Development Challenges on Devfolio</li>
          </ul>
        </div>

        {/* ❤️ Volunteering */}
        <div>
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Heart className="w-5 h-5" /> Volunteering & Community Work
          </h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Mentor at local coding bootcamps for undergraduates</li>
            <li>Organized open-source contribution events</li>
            <li>Active participant in college tech clubs and community initiatives</li>
          </ul>
        </div>

        {/* 📄 Resume Button */}
        <div id="resume" className="flex justify-center pt-4">
  <ResumeModal />
</div>
      </motion.div>
    </section>
  );
}
