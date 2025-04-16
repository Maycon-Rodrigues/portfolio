import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-bold text-white">
              <span className="text-cyan-400">&lt;</span>
              Maycon Rodrigues
              <span className="text-cyan-400">/&gt;</span>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              © {new Date().getFullYear()} Todos os direitos reservados.
            </p>
          </div>

          <div className="flex space-x-4">
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="rounded-full bg-slate-800 hover:bg-cyan-500/20 hover:text-cyan-400"
            >
              <Link href={"https://github.com/Maycon-Rodrigues"}>
                <Github size={18} />
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="rounded-full bg-slate-800 hover:bg-cyan-500/20 hover:text-cyan-400"
            >
              <Link href={"https://www.linkedin.com/in/maycon-rodrigues/"}>
                <Linkedin size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
