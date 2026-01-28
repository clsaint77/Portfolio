"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import MouseGlow from "@/components/MouseGlow";
import CustomCursor from "@/components/CustomCursor";
import Particles from "@/components/Particles";
import Image from "next/image";
import { Download } from "lucide-react";




export default function Home() {
  return (
    <main className="bg-gradient-to-br from-black via-zinc-900 to-black text-white">
    <MouseGlow />
    <CustomCursor />
    <Particles />
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center px-6">


        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/2 w-[700px] h-[700px] bg-purple-500/50 rounded-full blur-[150px] -translate-x-1/2" />
          <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-cyan-400/50 rounded-full blur-[150px]" />
        </div>

        {/* conteudo */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center" >

<div className="relative mb-10">
  {/* Glow */}
  <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 blur-2xl opacity-60" />

  {/* Moldura */}
  <div className="relative h-48 w-48 rounded-full p-1 bg-gradient-to-r from-purple-500 to-cyan-400">
    <div className="h-full w-full rounded-full overflow-hidden bg-black">
      <Image
        src="/projects/profile1.jpeg"
        alt="Athos Clives"
        width={192}
        height={192}
        className="object-cover object-center "
        priority
      />
    </div>
  </div>
</div>

          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            Athos Clives
          </h1>

          <p className="mt-4 text-lg md:text-xl text-zinc-400 max-w-xl">
            Graduated in mechatronics and currently studying Systems Analysis and Development, with years of experience in project management. Web developer focused on creating {" "}
            <span className="text-purple-400 font-medium">modern</span>,{" "}
            <span className="text-cyan-400 font-medium">high-performance </span> 
            and <span className="text-purple-400 font-medium">well-structured</span> interfaces.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full font-medium text-black bg-gradient-to-r from-purple-400 to-cyan-400 hover:scale-105 transition-transform"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-white rounded-full font-medium hover:bg-white hover:text-black transition"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-6">
  <a
    href="/cv/CV_Athos_Clives.pdf"
    download
    className="px-18 py-3 rounded-full font-medium border border-zinc-400 text-zinc-300 hover:bg-white hover:text-black transition"
  >
    Download CV
  </a>
</div>


        </motion.div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section
        id="projects"
        className="px-6 py-24 max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Projects
        </h2>

        <ProjectCard
  title="Professional Portfolio"
  description="This professional website, focused on performance and modern design, was developed by me using the latest versions of Next.js and Tailwind CSS."
  tech="Next.js • Tailwind • Framer Motion • React"
  image="/projects/code.png"
  link="https://github.com/clsaint77/Portfolio"
/>

<ProjectCard
  title="WebSite"
  description="A corporate website developed for a company, highlighting its services and portfolio using web development fundamentals."
  tech="JavaScript • HTML5 • CSS3"
  image="/projects/mouratec.png"
  link="https://github.com/clsaint77/Mouratec-Site"
/>

      </section>
      <section
        id="contact"
        className="px-6 py-24 max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Contact
        </h2>

        <p className="text-zinc-400 mb-10">
          Want to talk about a project, job opening, or idea? Feel free to get in touch.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:Athos.clives77@gmail.com"
            className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
          >
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/athos-clives"
            target="_blank"
            className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/clsaint77"
            target="_blank"
            className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
          >
            GitHub
          </a>
        </div>
      </section>



    </main>
  );
}
