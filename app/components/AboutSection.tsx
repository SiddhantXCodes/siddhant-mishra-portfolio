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
      {/* 🧑‍💼 Section Title */}
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

        {/* 👋 Who I Am */}
        <div>
          <h3 className="text-2xl font-bold mb-3">👋 Who I Am</h3>
          <p className="text-gray-700 leading-relaxed">
            I’m <span className="font-semibold">Siddhant Mishra</span> — a passionate{" "}
            <span className="font-semibold">Flutter & Full-Stack Web Developer</span>{" "}
            who loves designing and developing fast, responsive, and impactful digital experiences.{" "}
            I specialize in <span className="font-semibold">Flutter</span>,{" "}
            <span className="font-semibold">Firebase</span>,{" "}
            <span className="font-semibold">React</span>,{" "}
            and <span className="font-semibold">Next.js</span>.  
            I enjoy combining creativity and clean code to build apps and websites that solve real problems.
          </p>
        </div>

        {/* 💻 Tech Stack */}
        <div>
          <h3 className="text-2xl font-bold mb-4">💻 Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {[

              "Flutter",
    "Dart",
    "Firebase",
    "REST APIs",
    "Provider",
    "Riverpod",
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Firebase (Web)",
    "REST APIs",
      "UI/UX Design",
    "Figma",
    "Canva",
    "Photoshop",
    "TailwindCSS",
    "Git",
    "GitHub",
    "VS Code",
    "Vercel",
    "Netlify",
     "Python",
    "AI/ML (Basics)",
    "Data Visualization",
           
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
              <p className="font-semibold">
                B.Tech in Electronics & Communication Engineering
              </p>
              <p className="text-sm text-gray-600">
                Bundelkhand Institute of Engineering & Technology (BIET), Jhansi — 2020–2024
              </p>
            </div>
            <div>
              <p className="font-semibold">Intermediate (PCM)</p>
              <p className="text-sm text-gray-600">
                Blue Bells Public School, Jhansi — 2018–2020 (ICSE)
              </p>
            </div>
            <div>
              <p className="font-semibold">High School</p>
              <p className="text-sm text-gray-600">
                Blue Bells Public School, Jhansi — 2018 (ICSE)
              </p>
            </div>
          </div>
        </div>

        {/* 🏢 Work Experience */}
        <div>
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Briefcase className="w-5 h-5" /> Experience
          </h3>
          <div className="border-l-4 border-black pl-4 space-y-5">
<div>
              <p className="font-semibold">Freelance Developer</p>
              <p className="text-sm text-gray-600">2023 – Present</p>
              <p className="text-sm text-gray-700">
                Designed and developed web and mobile applications for local clients and startups — handling UI/UX, frontend, backend, and deployment.
              </p>
            </div>
            <div>
              <p className="font-semibold">
                Intern — Central Ground Water Board, Ministry of Jal Shakti, Govt. of India
              </p>
              <p className="text-sm text-gray-600">Jul 2023 – Dec 2023</p>
              <p className="text-sm text-gray-700">
                Built a web and mobile app for visualizing isotopic and water analysis data using Flutter & Firebase.
              </p>
            </div>
             <div>
              <p className="font-semibold">
                R&D Intern — Govt. of India (Urban Development Project)
              </p>
              <p className="text-sm text-gray-600">Jul 2022 – Oct 2022</p>
              <p className="text-sm text-gray-700">
                Worked on digital redevelopment and tech-based planning for public infrastructure.
              </p>
            </div>
            <div>
              <p className="font-semibold">
                PR Head & Web Developer — BIICF (Bundelkhand Innovation & Incubation Centre Foundation)
              </p>
              <p className="text-sm text-gray-600">Aug 2022 – May 2024</p>
              <p className="text-sm text-gray-700">
                Promoted from <span className="font-semibold">Coordinator → Executive → PR Head</span>.  
                Developed the official BIICF website, managed events, sponsorships, and led the organizing team for the
                college techfest <span className="font-semibold">Innovanza’24</span>.
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
            <li>
              🥇 Winner — <span className="font-semibold">Smart India Hackathon 2022 (Software Edition)</span>  
              Solved a real-world data organization challenge and won ₹1,00,000 prize money.
            </li>
            <li>
              Organized and led <span className="font-semibold">Innovanza’24</span> techfest as PR Head at BIICF.
            </li>
            <li>
              Developed multiple production-ready apps and websites for clients and government projects.
            </li>
          </ul>
        </div>

        {/* ❤️ Volunteering & Community */}
        <div>
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Heart className="w-5 h-5" /> Volunteering & Community Work
          </h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Active contributor and volunteer in college innovation and tech clubs (BIICF & IIC).</li>
            <li>Organized technical events, workshops, and hackathons in college.</li>
            <li>Mentored junior students on Flutter and web development basics.</li>
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
