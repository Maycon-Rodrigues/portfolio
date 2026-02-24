"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight } from "lucide-react";
import { useTranslations } from '@/lib/translations';
import { FloatingElements } from "@/components/ui/floating-elements";

const heroFloatingShapes = [
  { type: "ring" as const, size: 120, position: "top-20 right-[10%]", animation: "animate-float", delay: "0s" },
  { type: "sphere" as const, size: 80, position: "bottom-32 left-[8%]", animation: "animate-float-reverse", delay: "1s" },
  { type: "blob" as const, size: 160, position: "top-1/3 left-[5%]", animation: "animate-float-slow", delay: "2s" },
  { type: "cross" as const, size: 50, position: "bottom-40 right-[15%]", animation: "animate-spin-slow" },
  { type: "ring" as const, size: 60, position: "top-40 left-[25%]", animation: "animate-float-reverse", delay: "3s" },
];

export function Hero() {
  const t = useTranslations("hero")

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-background"
    >
      {/* Giant outlined background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <h2
          className="text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] font-black uppercase leading-none tracking-tighter whitespace-nowrap"
          style={{
            WebkitTextStroke: "1px rgba(59, 130, 246, 0.08)",
            WebkitTextFillColor: "transparent",
          }}
        >
          DEVELOPER
        </h2>
      </div>

      {/* Subtle radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-blue-500/5 rounded-full blur-[120px]" />

      {/* Floating decorative elements */}
      <FloatingElements shapes={heroFloatingShapes} />

      <div className="container mx-auto px-4 z-10 relative">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={item}
            className="inline-block mb-4 px-3 py-1 rounded-full border border-electric-blue-500/30 bg-electric-blue-500/10 backdrop-blur-sm text-electric-blue-300 text-sm font-medium"
          >
            {t('greeting')}
          </motion.div>
          
          <motion.h1 
            variants={item}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            <span className="bg-gradient-to-r from-electric-blue-400 via-steel-200 to-electric-blue-500 bg-clip-text text-transparent">
              {t('role')}
            </span>
          </motion.h1>

          <motion.p 
            variants={item}
            className="text-xl md:text-2xl text-zinc-400 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            {t('description')}
          </motion.p>
          
          <motion.div 
            variants={item}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="group relative overflow-hidden bg-electric-blue-600 hover:bg-electric-blue-500 text-white rounded-full px-8 transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] active:scale-95 duration-300"
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="relative z-10 flex items-center">
                {t('projects')}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 border-zinc-700 bg-black/50 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all hover:scale-105 active:scale-95 duration-300"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('contact')}
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          className="text-zinc-500 hover:text-electric-blue-400 hover:bg-transparent transition-colors"
          onClick={() => {
            document.querySelector("#about")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <ChevronDown size={24} />
        </Button>
      </div>
    </section>
  );
}
