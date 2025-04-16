"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-950 opacity-70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="absolute inset-0 bg-[url('/hero.jpg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent"
          >
            Desenvolvedor Full-Stack | Transformando Ideias em Código
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-8"
          >
            Criando soluções digitais inovadoras com paixão e expertise técnica
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-600 text-white"
              onClick={() => {
                document.querySelector("#projects")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Conheça Meus Projetos
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
              onClick={() => {
                document.querySelector("#contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Entre em Contato
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:text-cyan-400 hover:bg-transparent"
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
