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
      className="mb-12 relative group"
    >
      <div className="flex flex-col md:flex-row gap-6">
        {/* Timeline dot and line */}
        <div className="hidden md:flex flex-col items-center">
          <div className="w-4 h-4 rounded-full bg-zinc-800 border-2 border-electric-blue-500 z-10 group-hover:bg-steel-100 group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_2px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_15px_rgba(148,163,184,0.5)]"></div>
          <div className="w-0.5 h-full bg-gradient-to-b from-electric-blue-500/50 via-electric-blue-700/50 to-transparent my-2 group-hover:from-steel-100/50 transition-colors duration-300"></div>
        </div>

        {/* Content */}
        <div className="flex-1 relative p-px rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-electric-blue-500/10 group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.2)]">
          <div className="absolute inset-0 bg-gradient-to-r from-electric-blue-500/0 via-electric-blue-500/10 to-steel-800/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative bg-zinc-900/80 backdrop-blur-sm rounded-xl p-6 border border-zinc-800 group-hover:border-electric-blue-500/30 transition-colors duration-300 h-full hover:bg-zinc-900/90">
             <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white mb-2 sm:mb-0 group-hover:text-steel-200 transition-colors">{experience.position}</h3>
                <div className="flex items-center text-electric-blue-400 text-sm bg-electric-blue-500/10 px-3 py-1 rounded-full border border-electric-blue-500/20 group-hover:border-steel-100/30 group-hover:text-steel-200 group-hover:bg-steel-100/10 transition-all">
                  <Calendar size={14} className="mr-2" />
                  {experience.period}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
                <div className="text-lg font-medium text-zinc-300">{experience.company}</div>
                <div className="flex items-center text-zinc-400 text-sm">
                  <MapPin size={14} className="mr-1" />
                  {experience.location}
                </div>
              </div>

              <p className="text-zinc-300 mb-6 leading-relaxed bg-zinc-950/30 p-4 rounded-lg border border-zinc-800/50">{experience.description}</p>

              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span key={tech} className="text-xs bg-zinc-800 text-electric-blue-300 px-3 py-1.5 rounded-full border border-zinc-700 hover:border-electric-blue-500/50 transition-colors">
                    {tech}
                  </span>
                ))}
            </div>
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
    <section id="experience" ref={ref} className="py-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-electric-blue-500/50 to-transparent"></div>
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-electric-blue-500/50 to-transparent"></div>

      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-electric-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-steel-800/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-white to-electric-blue-400 bg-clip-text text-transparent">
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
