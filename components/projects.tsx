"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslations } from "@/lib/translations";

// Project data
const projects = [
  {
    title: "ChainChat - Blockchain Explorer",
    description:
      "Uma plataforma para explorar a blockchain Stellar.",
    image: "/chainchat.png",
    technologies: [
      "Next.js",
      "Stellar SDK",
      "Shadcn UI",
      "Tailwind CSS",
      "TypeScript",
    ],
    liveUrl: "https://chain-chat.live/",
    githubUrl: "https://github.com/Maycon-Rodrigues/chainchat",
    featured: true,
  },
  {
    title: "SCI - Stellar Contract Invoker",
    description:
      "Uma plataforma para invocar contratos inteligentes da rede Stellar.",
    image: "/sci.png",
    technologies: [
      "Next.js",
      "Stellar SDK",
      "Shadcn UI",
      "Tailwind CSS",
      "TypeScript",
    ],
    liveUrl: "https://stellar-contract-invoker.vercel.app/",
    githubUrl: "https://github.com/Maycon-Rodrigues/stellar-contract-invoker",
    featured: true,
  },
  {
    title: "Stephany Araujo - Website",
    description:
      "Site pessoal para a advogada Stephany Araujo, com informações sobre sua carreira, contato e redes sociais.",
    image: "/adv.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Resend"],
    liveUrl: "https://stephanyaraujo.adv.br/",
    featured: true,
  },
  {
    title: "Buy me a coffee",
    description:
      "Site para gerenciamento de doações usando blockchain stellar.",
    image: "/bmac.png",
    technologies: ["Astro.js", "Tailwind CSS", "TypeScript", "Stellar SDK", "Stellar Wallet Kit"],
    liveUrl: "https://stellar-buy-me-a-coffee.netlify.app/",
    githubUrl: "https://github.com/Maycon-Rodrigues/stellar-buy-me-a-coffee-dapp",
    featured: true,
  },
  {
    title: "DApp - Decentralized Application",
    description:
      "DApp para gerenciamento de cursos com recursos de compra e venda de cursos.",
    image: "/daap.png",
    technologies: ["Next.js", "Solidity", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://web3-course-dapp.vercel.app/",
    githubUrl: "https://github.com/Maycon-Rodrigues/web3-course-dapp",
    featured: true,
  },
  {
    title: "Fitness Tracker",
    description:
      "Aplicativo para acompanhamento de atividades físicas, nutrição e progresso pessoal.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React Native", "GraphQL", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Blog Platform",
    description:
      "Plataforma de blog com editor rich text, categorias, tags e sistema de comentários.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Laravel", "MySQL", "Alpine.js", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

function ProjectCard({
  project,
  index,
  isFeatured = false,
}: {
  project: (typeof projects)[0];
  index: number;
  isFeatured?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [isHovered, setIsHovered] = useState(false);
  const t = useTranslations('projects');

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-slate-700 bg-slate-800/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10",
        isFeatured ? "col-span-1 md:col-span-2" : "col-span-1"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video w-full overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={800}
          height={600}
          className={cn(
            "h-full w-full object-cover transition-transform duration-500",
            isHovered ? "scale-110" : "scale-100"
          )}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <h3 className="text-xl font-semibold text-white mb-2">
          {project.title}
        </h3>
        {/* <p className="text-gray-300 text-sm mb-4">{project.description}</p> */}

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-slate-700 text-cyan-300 px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <Button size="sm" className="bg-cyan-500 hover:bg-cyan-600" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={14} className="mr-1" />
              {t('viewProject')}
            </a>
          </Button>
          {project.githubUrl && (
            <Button
              size="sm"
              variant="outline"
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
              asChild
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={14} className="mr-1" />
                {t('viewCode')}
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const t = useTranslations('projects');

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-slate-950 relative overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

      {/* Background elements */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
              {t('title')}
            </span>
          </h2>

          <div className="max-w-6xl mx-auto">
            {/* Featured Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  isFeatured={true}
                />
              ))}
            </div>

            {/* Other Projects */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index + featuredProjects.length}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
