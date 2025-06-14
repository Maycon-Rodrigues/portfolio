"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from '@/lib/translations';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const t = useTranslations('about');

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-slate-900/50 relative overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

      <div className="container mx-auto px-4">
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

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-lg shadow-cyan-500/20">
                <Image
                  src="/perfil.jpg"
                  alt="Foto do Desenvolvedor"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <p className="text-lg text-gray-300 mb-8">
                {t('description')}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-slate-800 hover:bg-cyan-500/20 hover:text-cyan-400"
                >
                  <Link href={"https://github.com/Maycon-Rodrigues"}>
                    <Github size={20} />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-slate-800 hover:bg-cyan-500/20 hover:text-cyan-400"
                >
                  <Link href={"https://www.linkedin.com/in/maycon-rodrigues/"}>
                    <Linkedin size={20} />
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
