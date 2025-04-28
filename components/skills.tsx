"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "Next.js", icon: "▲" },
        { name: "TypeScript", icon: "TS" },
        { name: "Tailwind CSS", icon: "🌊" },
        { name: "JavaScript", icon: "JS" },
        { name: "HTML/CSS", icon: "</>" },
        { name: "Redux", icon: "⚡" },
        { name: "Framer Motion", icon: "🎭" }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "Express", icon: "🚂" },
        { name: "MongoDB", icon: "🍃" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "NestJS", icon: "🐈" },
        { name: "REST API", icon: "🔌" }
      ]
    },
    {
      title: "Tools & Other Skills",
      skills: [
        { name: "Git", icon: "🔄" },
        { name: "CI/CD", icon: "🔄" },
        { name: "Responsive Design", icon: "📱" },
        { name: "Testing", icon: "🧪" },
        { name: "Agile/Scrum", icon: "🔄" }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-primary font-medium uppercase tracking-wider mb-2 block">
            Expertise
          </span>
          <h2 className="text-3xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            The tools and technologies I use to bring products to life
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {category.skills.map((skill, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: j * 0.05 }}
                  >
                    <Card className="p-6 rounded text-center hover:bg-primary/5 transition-all duration-300 border-2 hover:border-primary/50 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
                      <div className="text-2xl mb-3">{skill.icon}</div>
                      <p className="font-medium">{skill.name}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}