"use client";

import { motion } from "framer-motion";
import { BookOpen, Code, Globe, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  const highlights = [
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Web Development",
      description:
        "Specialized in building modern, responsive web applications.",
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Full Stack",
      description: "Proficient in both frontend and backend technologies.",
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Collaborative",
      description: "Strong team player with excellent communication skills.",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      title: "Continuous Learner",
      description:
        "Always expanding my skills and staying updated with latest trends.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            I'm a passionate MERN stack developer with a strong foundation in
            web technologies. I enjoy building scalable web applications and
            solving complex problems with clean, efficient code.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 border-2 border-primary rounded-lg transform translate-x-4 translate-y-4"></div>
              <img
                src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Developer working"
                className="rounded-lg shadow-lg relative z-10 w-full h-[400px] object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <p className="mb-4 text-muted-foreground">
              I started my journey as a web developer with a curiosity for
              creating interactive websites. This led me to explore the MERN
              stack, where I found my passion for building full-stack
              applications.
            </p>
            <p className="mb-6 text-muted-foreground">
              With experience in various projects, I've developed a strong
              understanding of modern web development practices and a knack for
              creating clean, efficient, and scalable solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-primary/10 rounded-full text-sm font-medium">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-primary/10 rounded-full text-sm font-medium">
                Detail-Oriented
              </span>
              <span className="px-4 py-2 bg-primary/10 rounded-full text-sm font-medium">
                Fast Learner
              </span>
              <span className="px-4 py-2 bg-primary/10 rounded-full text-sm font-medium">
                Team Player
              </span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <Card className="h-full border hover:border-primary hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-primary/10 mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
                <div className="w-70 h-70 border-2 rounded-full flex items-center justify-center absolute -top-[134px] -right-[131px] h">
                  <div className="w-[280px] h-[280px] border-2 shadow-md rounded-full hidden group-hover:flex items-center justify-center transition-all duration-500">
                    <div className="w-[240px] h-[240px] border-2 shadow-md rounded-full flex items-center justify-center">
                      <div className="w-[200px] h-[200px] border-2 shadow-md rounded-full flex items-center justify-center">
                        <div className="w-[160px] h-[160px] border-2 shadow-md rounded-full flex items-center justify-center">
                          <div className="w-[120px] h-[120px] border-2 shadow-md rounded-full flex items-center justify-center">
                            <div className="w-[80px] h-[80px] border-2 shadow-md rounded-full flex items-center justify-center">
                              <div className="w-[40px] h-[40px] border-2 shadow-md rounded-full" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

