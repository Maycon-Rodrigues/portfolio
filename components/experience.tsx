"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"

// Experience data
const experiences = [
  {
    company: "Tech Solutions Inc.",
    position: "Senior Full-Stack Developer",
    period: "2021 - Presente",
    location: "São Paulo, Brasil",
    description:
      "Desenvolvimento de aplicações web escaláveis utilizando React, Node.js e AWS. Liderança técnica de uma equipe de 5 desenvolvedores.",
    technologies: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"],
  },
  {
    company: "Digital Innovations",
    position: "Full-Stack Developer",
    period: "2019 - 2021",
    location: "Remoto",
    description:
      "Criação de soluções e-commerce com Vue.js e Laravel. Implementação de APIs RESTful e integração com sistemas de pagamento.",
    technologies: ["Vue.js", "Laravel", "MySQL", "Docker", "Redis"],
  },
  {
    company: "WebCraft Agency",
    position: "Front-End Developer",
    period: "2017 - 2019",
    location: "Rio de Janeiro, Brasil",
    description:
      "Desenvolvimento de interfaces responsivas e acessíveis para clientes de diversos setores. Otimização de performance e SEO.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Sass", "WordPress"],
  },
  {
    company: "StartUp Innovations",
    position: "Desenvolvedor Web Júnior",
    period: "2016 - 2017",
    location: "Belo Horizonte, Brasil",
    description:
      "Desenvolvimento de landing pages e websites institucionais. Manutenção e atualização de sistemas existentes.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "jQuery"],
  },
]

function ExperienceCard({
  experience,
  index,
}: {
  experience: (typeof experiences)[0]
  index: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="mb-12 relative"
    >
      <div className="flex flex-col md:flex-row gap-6">
        {/* Timeline dot and line */}
        <div className="hidden md:flex flex-col items-center">
          <div className="w-4 h-4 rounded-full bg-cyan-500"></div>
          <div className="w-0.5 h-full bg-gradient-to-b from-cyan-500 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="flex-1 bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-white mb-2 sm:mb-0">{experience.position}</h3>
            <div className="flex items-center text-cyan-400 text-sm">
              <Calendar size={14} className="mr-1" />
              {experience.period}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
            <div className="text-lg font-medium text-gray-300">{experience.company}</div>
            <div className="flex items-center text-gray-400 text-sm">
              <MapPin size={14} className="mr-1" />
              {experience.location}
            </div>
          </div>

          <p className="text-gray-300 mb-4">{experience.description}</p>

          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span key={tech} className="text-xs bg-slate-700 text-cyan-300 px-2 py-1 rounded-md">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="experience" ref={ref} className="py-20 bg-slate-900/50 relative overflow-hidden">
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
              Experiência Profissional
            </span>
          </h2>

          <div className="mt-12">
            {experiences.map((experience, index) => (
              <ExperienceCard key={experience.company} experience={experience} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
