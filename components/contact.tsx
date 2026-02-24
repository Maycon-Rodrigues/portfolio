"use client";

import type React from "react";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useTranslations } from "@/lib/translations";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const t = useTranslations("contact");

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 bg-background relative overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-electric-blue-500/50 to-transparent"></div>

      {/* Background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-electric-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-electric-blue-400/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-white via-electric-blue-400 to-steel-200 bg-clip-text text-transparent">
              {t("title")}
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">
                {t("subtitle")}
              </h3>
              <p className="text-zinc-300 mb-8">{t("description")}</p>
            </div>

            <div>
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="bg-zinc-800 p-3 rounded-lg mr-4 border border-zinc-700/50 group-hover:border-electric-blue-400/50 group-hover:bg-electric-blue-400/10 transition-colors duration-300">
                    <Mail className="h-5 w-5 text-electric-blue-400 group-hover:text-steel-200 transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-zinc-400 mb-1">
                      {t("email")}
                    </h4>
                    <p className="text-white group-hover:text-electric-blue-300 transition-colors">business@mayconrodrigues.com</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-zinc-800 p-3 rounded-lg mr-4 border border-zinc-700/50 group-hover:border-electric-blue-400/50 group-hover:bg-electric-blue-400/10 transition-colors duration-300">
                    <Phone className="h-5 w-5 text-electric-blue-400 group-hover:text-steel-200 transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-zinc-400 mb-1">
                      {t("phone")}
                    </h4>
                    <p className="text-white group-hover:text-electric-blue-300 transition-colors">(21) 98398-3056</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-zinc-800 p-3 rounded-lg mr-4 border border-zinc-700/50 group-hover:border-electric-blue-400/50 group-hover:bg-electric-blue-400/10 transition-colors duration-300">
                    <MapPin className="h-5 w-5 text-electric-blue-400 group-hover:text-steel-200 transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-zinc-400 mb-1">
                      {t("location")}
                    </h4>
                    <p className="text-white">{t("info.locationValue")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
