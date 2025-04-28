"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="pt-32 pb-20 md:pt-40 md:pb-32 hero-gradient"
    >
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              <span className="block">Hi, I'm</span>
              <span className="text-primary block mt-2">MERN Stack Developer</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-xl">
              I build responsive, scalable web applications using MongoDB, Express, React, and Node.js. 
              Transforming ideas into elegant, functional solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild size="lg" className="group">
                <a href="#contact">
                  Contact Me
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground">
                <a href="#projects">View Projects</a>
              </Button>
            </div>

            <div className="flex gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a 
                href="mailto:contact@example.com" 
                className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-square rounded-full bg-gradient-to-br from-primary/20 to-primary/5 p-1">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 p-4 bg-card shadow-lg rounded-lg card-hover">
              <p className="font-medium">MERN Stack Developer</p>
              <p className="text-sm text-muted-foreground">Full Stack Web Development</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}