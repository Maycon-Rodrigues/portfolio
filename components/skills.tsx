"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "@/lib/translations";
import { FloatingElements } from "@/components/ui/floating-elements";
import {
  Code2,
  Server,
  Cpu,
  Link2,
  Wrench,
} from "lucide-react";

const skillCategories = [
  {
    title: "frontend",
    icon: Code2,
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Shadcn", "Tailwind CSS"],
  },
  {
    title: "backend",
    icon: Server,
    skills: ["Node.js", "Express", "NestJS", "Python", "Django", "Flask", "Java", "Spring Boot"],
  },
  {
    title: "aiEngineering",
    icon: Cpu,
    skills: ["Agno", "LangChain", "OpenAI", "Gemini", "Streamlit", "Vector DBs", "RAG", "Agent Frameworks"],
  },
  {
    title: "blockchain",
    icon: Link2,
    skills: ["Solidity", "Rust", "Smart Contracts", "Ethereum", "Stellar", "Ethers.js", "Web3.js", "Viem"],
  },
  {
    title: "tools",
    icon: Wrench,
    skills: ["Git", "Docker", "PostgreSQL", "MySQL", "MongoDB", "Firebase", "GraphQL", "Redis"],
  },
];

const skillsFloatingShapes = [
  { type: "ring" as const, size: 80, position: "top-16 right-[8%]", animation: "animate-float", delay: "1s" },
  { type: "cross" as const, size: 35, position: "bottom-24 left-[5%]", animation: "animate-spin-slow" },
];

function CategoryCard({
  category,
  index,
}: {
  category: (typeof skillCategories)[number];
  index: number;
}) {
  const t = useTranslations("skills");
  const Icon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-electric-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative h-full bg-zinc-900/60 backdrop-blur-sm rounded-2xl p-6 border border-white/[0.06] group-hover:border-electric-blue-500/30 transition-colors duration-300">
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2 rounded-lg bg-electric-blue-500/10 text-electric-blue-400 group-hover:bg-electric-blue-500/20 group-hover:text-electric-blue-300 transition-all duration-300">
            <Icon size={20} />
          </div>
          <h3 className="text-lg font-semibold text-white uppercase tracking-wide">
            {t(`categories.${category.title}`) || category.title}
          </h3>
        </div>

        <ul className="space-y-2.5">
          {category.skills.map((skill) => (
            <li
              key={skill}
              className="flex items-center gap-2.5 text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-electric-blue-500/50 group-hover:bg-electric-blue-400 shrink-0 transition-colors" />
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const t = useTranslations("skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 bg-background relative overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-electric-blue-500/30 to-transparent" />

      {/* Giant outlined background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <h2
          className="text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] font-black uppercase leading-none tracking-tighter whitespace-nowrap"
          style={{
            WebkitTextStroke: "1px rgba(59, 130, 246, 0.06)",
            WebkitTextFillColor: "transparent",
          }}
        >
          SKILLS
        </h2>
      </div>

      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-electric-blue-500/5 rounded-full blur-[100px]" />

      <FloatingElements shapes={skillsFloatingShapes} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-14 text-center">
            <span className="bg-gradient-to-r from-white to-electric-blue-400 bg-clip-text text-transparent">
              {t("title")}
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {skillCategories.map((category, index) => (
              <CategoryCard
                key={category.title}
                category={category}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
