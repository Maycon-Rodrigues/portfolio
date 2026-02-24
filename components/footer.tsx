"use client";

import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-steel-800/30 py-12 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-electric-blue-500/50 to-transparent"></div>
        <div className="absolute inset-0 bg-grid-zinc-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-zinc-800/[0.05] [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-bold text-white group cursor-default">
              <span className="text-electric-blue-500 group-hover:text-steel-100 transition-colors">&lt;</span>
              <span className="group-hover:text-electric-blue-300 transition-colors">Maycon Rodrigues</span>
              <span className="text-electric-blue-500 group-hover:text-steel-100 transition-colors">/&gt;</span>
            </div>
            <p className="text-zinc-500 text-sm mt-2">
              © {new Date().getFullYear()} Todos os direitos reservados.
            </p>
          </div>

          <div className="flex space-x-4">
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="rounded-full bg-zinc-900 hover:bg-electric-blue-500/20 hover:text-steel-100 border border-transparent hover:border-electric-blue-500/30 transition-all duration-300"
            >
              <Link href={"https://github.com/Maycon-Rodrigues"}>
                <Github size={18} />
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="rounded-full bg-zinc-900 hover:bg-electric-blue-500/20 hover:text-steel-100 border border-transparent hover:border-electric-blue-500/30 transition-all duration-300"
            >
              <Link href={"https://www.linkedin.com/in/maycon-rodrigues/"}>
                <Linkedin size={18} />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
