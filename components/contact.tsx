"use client";

import type React from "react";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 bg-slate-950 relative overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

      {/* Background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
              Entre em Contato
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">
                Vamos conversar sobre seu projeto
              </h3>
              <p className="text-gray-300 mb-8">
                Estou disponível para freelance, projetos de longo prazo ou
                oportunidades de emprego. Preencha o formulário ou entre em
                contato através dos canais abaixo.
              </p>
            </div>

            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-slate-800 p-3 rounded-lg mr-4">
                    <Mail className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-1">
                      Email
                    </h4>
                    <p className="text-white">maycon.zng@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-slate-800 p-3 rounded-lg mr-4">
                    <Phone className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-1">
                      Telefone
                    </h4>
                    <p className="text-white">(21) 98398-3056</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-slate-800 p-3 rounded-lg mr-4">
                    <MapPin className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-1">
                      Localização
                    </h4>
                    <p className="text-white">Rio de Janeiro, Brasil</p>
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
