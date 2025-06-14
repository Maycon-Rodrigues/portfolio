"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "@/lib/translations";

// Skill data structure
interface Skill {
  name: string;
  icon: string;
}

// Skill categories
const skillCategories = [
  {
    title: "frontend",
    skills: [
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Shadcn", icon: "shadcn" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
    ],
  },
  {
    title: "backend",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Python", icon: "python" },
      { name: "Java", icon: "java" },
      { name: "NestJS", icon: "nestjs" },
      { name: "Express", icon: "express" },
      { name: "Django", icon: "django" },
      { name: "Spring Boot", icon: "spring" },
      { name: "Flask", icon: "flask" },
    ],
  },
  {
    title: "tools",
    skills: [
      { name: "Git", icon: "git" },
      { name: "Docker", icon: "docker" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Firebase", icon: "firebase" },
      { name: "GraphQL", icon: "graphql" },
      { name: "Redis", icon: "redis" },
    ],
  },
];

// Skill card component
function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.05 }}
      className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center justify-center border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10"
    >
      <div className="w-12 h-12 mb-3 flex items-center justify-center">
        <div className="w-10 h-10 bg-slate-700 rounded-md flex items-center justify-center text-cyan-400">
          {skill.icon.substring(0, 2).toUpperCase()}
        </div>
      </div>
      <h3 className="text-sm font-medium text-gray-200">{skill.name}</h3>
    </motion.div>
  );
}

// Category component
function SkillCategory({
  category,
  index,
}: {
  category: { title: string; skills: Skill[] };
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const t = useTranslations('skills');

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className="mb-12"
    >
      <h3 className="text-xl font-semibold mb-6 text-cyan-400">
        {t(`categories.${category.title}`) || t('categories.other')}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {category.skills.map((skill, idx) => (
          <SkillCard key={skill.name} skill={skill} index={idx} />
        ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const t = useTranslations('skills');
  
  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 bg-slate-950 relative overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

      {/* Background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
              {t('title')}
            </span>
          </h2>

          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
