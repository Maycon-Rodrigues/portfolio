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
      className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10"
    >
      <Quote className="text-cyan-400 mb-4 h-8 w-8 opacity-50" />

      <p className="text-gray-300 mb-6 italic">{testimonial.text}</p>

      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image
            src={testimonial.image || "/placeholder.svg"}
            alt={testimonial.name}
            width={100}
            height={100}
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-medium text-white">{testimonial.name}</h4>
          <p className="text-sm text-gray-400">{testimonial.position}</p>
        </div>
      </div>
    </motion.div>
  )
}

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="testimonials" ref={ref} className="py-20 bg-slate-900/50 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">Depoimentos</span>
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
