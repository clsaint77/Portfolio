"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectCard({
  title,
  description,
  tech,
  image,
  link,
}) 
{
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/80"
    >
      {/* img */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* conteudo */}
      <div className="relative z-10 p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-zinc-400 text-sm mb-4">{description}</p>
        <span className="text-xs text-purple-400">{tech}</span>
      </div>

    
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/40 to-cyan-400/40 blur-2xl" />
      </div>
    </motion.a>
  );
}
