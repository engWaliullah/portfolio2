"use client"

import { motion } from 'framer-motion'
import { 
  Briefcase,
  Calendar,
  ChevronRight,
  GraduationCap,
  MapPin
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Experience() {
  const workExperience = [
    {
      title: "Senior MERN Stack Developer",
      company: "Tech Solutions Inc.",
      location: "San Francisco, CA",
      period: "2021 - Present",
      description: "Led the development of multiple web applications using the MERN stack. Collaborated with cross-functional teams to deliver high-quality products on time.",
      responsibilities: [
        "Architected and developed scalable web applications",
        "Implemented RESTful APIs using Express.js and Node.js",
        "Designed and maintained MongoDB database schemas",
        "Mentored junior developers on best practices"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "WebDev Agency",
      location: "New York, NY",
      period: "2019 - 2021",
      description: "Developed responsive web applications for various clients using React.js, Node.js, and MongoDB.",
      responsibilities: [
        "Built interactive user interfaces with React.js",
        "Created backend services with Node.js and Express",
        "Implemented database solutions using MongoDB",
        "Collaborated with designers to transform mockups into functional websites"
      ]
    },
    {
      title: "Front-end Developer",
      company: "Digital Creations",
      location: "Austin, TX",
      period: "2017 - 2019",
      description: "Developed user interfaces for web applications using React.js and modern JavaScript frameworks.",
      responsibilities: [
        "Created responsive web designs using modern CSS techniques",
        "Implemented interactive features with JavaScript and React",
        "Optimized web performance and accessibility",
        "Collaborated with UX designers to implement intuitive user interfaces"
      ]
    }
  ]

  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Tech University",
      location: "Boston, MA",
      period: "2015 - 2017",
      description: "Specialized in web technologies and software engineering. Completed thesis on scalable web architectures."
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "Engineering College",
      location: "Chicago, IL",
      period: "2011 - 2015",
      description: "Graduated with honors. Focused on programming fundamentals, data structures, and algorithms."
    }
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            My professional journey and educational background that have shaped my expertise in web development.
          </p>
        </motion.div>

        <Tabs defaultValue="work" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="work" className="text-sm sm:text-base">
              <Briefcase className="mr-2 h-4 w-4" />
              Work Experience
            </TabsTrigger>
            <TabsTrigger value="education" className="text-sm sm:text-base">
              <GraduationCap className="mr-2 h-4 w-4" />
              Education
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="work" className="mt-0">
            <div className="space-y-8">
              {workExperience.map((job, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="overflow-hidden border-l-4 border-l-primary hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                          <p className="text-primary font-medium">{job.company}</p>
                        </div>
                        <div className="mt-2 sm:mt-0 flex items-center text-sm text-muted-foreground">
                          <Calendar className="mr-1 h-4 w-4" />
                          {job.period}
                        </div>
                      </div>
                      
                      <div className="flex items-center text-sm text-muted-foreground mb-4">
                        <MapPin className="mr-1 h-4 w-4" />
                        {job.location}
                      </div>
                      
                      <p className="mb-4 text-muted-foreground">{job.description}</p>
                      
                      <h4 className="font-medium mb-2">Key Responsibilities:</h4>
                      <ul className="space-y-1">
                        {job.responsibilities.map((resp, j) => (
                          <li key={j} className="flex items-start">
                            <ChevronRight className="mr-2 h-4 w-4 mt-1 flex-shrink-0 text-primary" />
                            <span className="text-sm text-muted-foreground">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="education" className="mt-0">
            <div className="space-y-8">
              {education.map((edu, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="overflow-hidden border-l-4 border-l-primary hover:shadow-md transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                          <p className="text-primary font-medium">{edu.institution}</p>
                        </div>
                        <div className="mt-2 sm:mt-0 flex items-center text-sm text-muted-foreground">
                          <Calendar className="mr-1 h-4 w-4" />
                          {edu.period}
                        </div>
                      </div>
                      
                      <div className="flex items-center text-sm text-muted-foreground mb-4">
                        <MapPin className="mr-1 h-4 w-4" />
                        {edu.location}
                      </div>
                      
                      <p className="text-muted-foreground">{edu.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}