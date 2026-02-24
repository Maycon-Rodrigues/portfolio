"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Quote } from "lucide-react"

// Testimonial data
const testimonials = [
  {
    name: "Ana Silva",
    position: "CEO, TechStart",
    image: "/placeholder.svg?height=100&width=100",
    text: "Um profissional excepcional que entregou além das nossas expectativas. Sua capacidade técnica e criatividade transformaram nossa visão em realidade.",
  },
  {
    name: "Carlos Mendes",
    position: "CTO, InnovateX",
    image: "/placeholder.svg?height=100&width=100",
    text: "Trabalhar com este desenvolvedor foi uma experiência incrível. Seu conhecimento técnico e habilidade para resolver problemas complexos são impressionantes.",
  },
  {
    name: "Mariana Costa",
    position: "Product Manager, DigitalWave",
    image: "/placeholder.svg?height=100&width=100",
    text: "Um talento raro que combina excelência técnica com uma compreensão profunda das necessidades do usuário. Recomendo fortemente.",
  },
]

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="relative group p-px rounded-2xl overflow-hidden h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-electric-blue-500/20 via-steel-800/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800 group-hover:border-electric-blue-500/30 transition-all duration-300 h-full flex flex-col shadow-lg">
        <Quote className="text-electric-blue-500 mb-6 h-8 w-8 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />

        <p className="text-zinc-300 mb-8 italic flex-grow leading-relaxed">"{testimonial.text}"</p>

        <div className="flex items-center pt-4 border-t border-zinc-800 group-hover:border-zinc-700/50 transition-colors">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-zinc-700 group-hover:border-electric-blue-500/50 transition-colors">
            <Image
              src={testimonial.image || "/placeholder.svg"}
              alt={testimonial.name}
              width={100}
              height={100}
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold text-white group-hover:text-electric-blue-300 transition-colors">{testimonial.name}</h4>
            <p className="text-sm text-electric-blue-500/80 group-hover:text-electric-blue-400 transition-colors">{testimonial.position}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="testimonials" ref={ref} className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-electric-blue-500/50 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-electric-blue-500/50 to-transparent"></div>

      {/* Background elements */}
      <div className="absolute top-40 left-10 w-64 h-64 bg-electric-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-64 h-64 bg-steel-800/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-white to-electric-blue-400 bg-clip-text text-transparent">Depoimentos</span>
          </h2>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
