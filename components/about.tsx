"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from '@/lib/translations';
import { FloatingElements } from "@/components/ui/floating-elements";

const aboutFloatingShapes = [
  { type: "sphere" as const, size: 100, position: "top-10 right-[5%]", animation: "animate-float", delay: "0.5s" },
  { type: "ring" as const, size: 90, position: "bottom-20 left-[3%]", animation: "animate-float-reverse", delay: "1.5s" },
  { type: "cross" as const, size: 40, position: "top-1/3 right-[12%]", animation: "animate-spin-slow" },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const t = useTranslations('about');

  return (
    <section
      id="about"
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
          ABOUT ME
        </h2>
      </div>

      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-electric-blue-500/5 rounded-full blur-[100px]" />

      {/* Floating decorative elements */}
      <FloatingElements shapes={aboutFloatingShapes} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-white to-electric-blue-400 bg-clip-text text-transparent">
              {t('title')}
            </span>
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-12 bg-zinc-900/50 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative w-64 h-64">
                 <div className="absolute inset-0 bg-gradient-to-tr from-electric-blue-500 to-electric-blue-700 rounded-full blur-lg opacity-60 animate-pulse" />
                 <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-zinc-800 shadow-xl">
                  <Image
                    src="/perfil.jpg"
                    alt="Foto do Desenvolvedor"
                    fill
                    className="object-cover"
                  />
                 </div>
              </div>
            </div>

            <div className="w-full md:w-2/3 text-center md:text-left">
              <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
                {t('description')}
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border-electric-blue-500/30 text-electric-blue-400 hover:bg-electric-blue-500/10 hover:text-electric-blue-300 transition-all duration-300"
                >
                  <Link href={"https://github.com/Maycon-Rodrigues"} target="_blank">
                    <Github size={20} className="mr-2" />
                    GitHub
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border-zinc-700/50 text-zinc-400 hover:bg-zinc-800 hover:text-white transition-all duration-300"
                >
                  <Link href={"https://www.linkedin.com/in/maycon-rodrigues/"} target="_blank">
                    <Linkedin size={20} className="mr-2" />
                    LinkedIn
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
