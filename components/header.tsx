"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useTranslations } from '@/lib/translations';
import { LanguageSwitcher } from './language-switcher';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations('nav');

  const navItems = [
    { name: t('home'), href: "#hero" },
    { name: t('about'), href: "#about" },
    { name: t('skills'), href: "#skills" },
    { name: t('projects'), href: "#projects" },
    { name: t('contact'), href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-4 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "w-auto mx-auto" : "w-full"
      )}
    >
      <div className={cn(
        "transition-all duration-300 mx-auto",
        scrolled 
          ? "bg-zinc-950/80 backdrop-blur-md border border-electric-blue-500/20 rounded-full shadow-lg shadow-electric-blue-500/10 px-6 py-3 mt-2 max-w-fit"
          : "bg-transparent px-4 py-4 container"
      )}>
        <div className="flex items-center justify-between gap-8">
          <Link
            href="#hero"
            className={cn(
              "text-xl font-bold text-white hover:text-electric-blue-400 transition-colors flex items-center gap-1",
              scrolled ? "text-lg" : "text-xl"
            )}
          >
            <span className="text-electric-blue-500">&lt;</span>
            <span className={cn("hidden sm:inline", scrolled && "inline")}>Maycon</span>
            <span className="text-electric-blue-500">/&gt;</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-white hover:bg-electric-blue-500/10 px-4 py-2 rounded-full transition-all"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            
            <Button
              className="hidden md:inline-flex bg-electric-blue-600 hover:bg-electric-blue-700 text-white rounded-full px-6"
              size={scrolled ? "sm" : "default"}
              onClick={() => {
                document.querySelector("#contact")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              {t('hireMe')}
            </Button>

            {/* Mobile Navigation Toggle */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-zinc-950/background backdrop-blur-xl border border-electric-blue-500/20 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-4">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-200 hover:text-electric-blue-400 hover:bg-electric-blue-500/10 px-4 py-3 rounded-xl transition-all"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({
                      behavior: "smooth",
                    });
                    setIsOpen(false);
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 flex flex-col gap-3">
                  <Button
                    className="bg-electric-blue-600 hover:bg-electric-blue-700 text-white w-full rounded-xl"
                    onClick={() => {
                      document.querySelector("#contact")?.scrollIntoView({
                        behavior: "smooth",
                      });
                      setIsOpen(false);
                    }}
                  >
                    {t('hireMe')}
                  </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
