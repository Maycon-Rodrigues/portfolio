"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/lib/translations";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { cn } from "@/lib/utils";

// Project data
const projects = [
  {
    title: "Stellar Blockchain Assistent",
    description: "Um agente de IA para interagir com a Stellar Blockchain",
    image: "/stellarAI.png",
    technologies: [
      "Python",
      "Streamlit",
      "Agno",
      "Sqlite",
      "llm",
      "OpenAi",
      "Gemini",
    ],
    liveUrl: "https://stellar-assistant.streamlit.app/",
    githubUrl:
      "https://github.com/Maycon-Rodrigues/stellar-blockchain-assistant",
    featured: true,
  },
  {
    title: "DevOps AI Agent",
    description: "Um agente de IA para automatizar tarefas de DevOps.",
    image: "/devops.png",
    technologies: ["Python", "Agno", "Sqlite", "llm"],
    githubUrl: "https://github.com/Maycon-Rodrigues/DevOps-Agent",
    featured: true,
  },
  {
    title: "ChainChat - Blockchain Explorer",
    description: "Uma plataforma para explorar a blockchain Stellar.",
    image: "/chainchat.png",
    technologies: [
      "Next.js",
      "Stellar SDK",
      "Shadcn UI",
      "Tailwind CSS",
      "TypeScript",
    ],
    liveUrl: "https://chain-chat.live/",
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
    githubUrl:
      "https://github.com/Maycon-Rodrigues/stellar-contract-invoker",
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
    technologies: [
      "Astro.js",
      "Tailwind CSS",
      "TypeScript",
      "Stellar SDK",
      "Stellar Wallet Kit",
    ],
    liveUrl: "https://stellar-buy-me-a-coffee.netlify.app/",
    githubUrl:
      "https://github.com/Maycon-Rodrigues/stellar-buy-me-a-coffee-dapp",
  },
  {
    title: "Simple Bank API",
    description:
      "Sistema de pagamento bancário simples, com funcionalidades de transferência, saque e depósito.",
    image: "/simple-pay.png",
    technologies: ["Nest.js", "Swagger", "Docker", "Docker Compose", "PostgreSQL"],
    githubUrl: "https://github.com/Maycon-Rodrigues/simple-bank-api",
  },
  {
    title: "Scientive DAO",
    description:
      "Plataforma de DAO para a Scientive, com funcionalidades de criação de propostas, votação e gestão de recursos.",
    image: "/sol.png",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Solidity",
      "Foundry",
      "Zk Verify",
      "Rust",
    ],
    githubUrl: "https://github.com/scientiveDAO",
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const t = useTranslations("projects");

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-background relative overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-electric-blue-500/50 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-electric-blue-500/50 to-transparent"></div>

      {/* Background elements */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-electric-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-72 h-72 bg-steel-800/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-white via-electric-blue-400 to-steel-200 bg-clip-text text-transparent">
              {t("title")}
            </span>
          </h2>

          <BentoGrid className="max-w-6xl mx-auto">
            {projects.map((project, i) => (
              <CardSpotlight
                key={i}
                className={cn(
                  "rounded-xl border border-zinc-800 bg-zinc-900/50 p-0 hover:border-electric-blue-500/50 transition-colors duration-300",
                  i === 0 || i === 3 ? "md:col-span-2" : ""
                )}
                color="rgba(16, 185, 129, 0.2)"
              >
              <BentoGridItem
                title={project.title}
                description={project.description}
                header={
                   <div className="flex flex-1 w-full h-full min-h-[12rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden relative group">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                       {project.liveUrl && (
                        <Button
                          asChild
                          size="sm"
                          className="bg-electric-blue-600 hover:bg-electric-blue-400 hover:text-black text-white border-0 transition-all duration-300 shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_-5px_rgba(148,163,184,0.6)]"
                        >
                          <Link href={project.liveUrl} target="_blank">
                            <ExternalLink size={16} className="mr-2" />
                            {t("viewProject")}
                          </Link>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="bg-black/50 backdrop-blur-sm border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300"
                        >
                          <Link href={project.githubUrl} target="_blank">
                            <Github size={16} className="mr-2" />
                            Code
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                }
                className={cn("border-none")}
                icon={
                   <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] bg-zinc-800 text-electric-blue-300 px-2 py-0.5 rounded-full border border-zinc-700 hover:border-electric-blue-400/50 hover:text-steel-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                }
              />
              </CardSpotlight>
            ))}
          </BentoGrid>
        </motion.div>
      </div>
    </section>
  );
}
