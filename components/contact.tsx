"use client";

import type React from "react";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Responderei em breve.",
    });

    setIsSubmitting(false);
    e.currentTarget.reset();
  };

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

            {/* Contact Form */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input
                      id="name"
                      placeholder="Seu nome"
                      required
                      className="bg-slate-700/50 border-slate-600 focus:border-cyan-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      required
                      className="bg-slate-700/50 border-slate-600 focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto</Label>
                  <Input
                    id="subject"
                    placeholder="Como posso ajudar?"
                    required
                    className="bg-slate-700/50 border-slate-600 focus:border-cyan-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    placeholder="Descreva seu projeto ou dúvida..."
                    rows={5}
                    required
                    className="bg-slate-700/50 border-slate-600 focus:border-cyan-500"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" />
                      Enviar Mensagem
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
