"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail } from 'lucide-react'
import { developerData } from '@/lib/data'

export default function Hero2() {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center bg-background text-foreground relative"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-block relative">
          <div className="bg-secondary/80 text-secondary-foreground px-6 py-2 rounded-full text-sm font-medium border border-transparent hover:animate-border-animation">
            Full-Stack Developer
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 mt-6">
          Creating digital<br />
          experiences that<br />
          <span className="text-primary">inspire</span>
        </h1>
        
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
          I build modern, responsive web applications with cutting-edge
          technologies that deliver exceptional user experiences.
        </p>
        
        <div className="flex justify-center gap-4 mb-12">
          <Button 
            asChild 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 border border-transparent hover:animate-border-animation"
          >
            <Link href={developerData.resumeUrl}>Download Resume</Link>
          </Button>
        </div>
        
        <div className="flex justify-center gap-6">
          <a 
            href={developerData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-secondary/80 hover:bg-primary hover:text-primary-foreground transition-colors border border-transparent hover:animate-border-animation"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href={developerData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-secondary/80 hover:bg-primary hover:text-primary-foreground transition-colors border border-transparent hover:animate-border-animation"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href={`mailto:${developerData.email}`}
            className="p-2 rounded-full bg-secondary/80 hover:bg-primary hover:text-primary-foreground transition-colors border border-transparent hover:animate-border-animation"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  )
}