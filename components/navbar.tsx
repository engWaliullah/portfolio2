"use client"

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)

      // Update active section based on scroll position
      const sections = links.map(link => link.href.substring(1))
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
      scrolled 
        ? "bg-background/80 backdrop-blur-md shadow-sm" 
        : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a 
            href="#hero" 
            className="text-xl font-bold tracking-tight transition-colors"
          >
            <span className="text-primary">MERN</span>
            <span>Dev</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "nav-link text-sm font-medium transition-colors hover:text-primary",
                  activeSection === link.href.substring(1) && "text-primary"
                )}
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle />
            <Button asChild className="ml-4 relative overflow-hidden group">
              <a href="/resume.pdf" download>
                <span className="relative z-10">Resume</span>
                <span className="absolute inset-0 bg-primary/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-background md:hidden">
          <nav className="flex flex-col items-center justify-center h-full gap-8 p-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "nav-link text-lg font-medium transition-colors hover:text-primary",
                  activeSection === link.href.substring(1) && "text-primary"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="w-full max-w-[200px]">
              <a href="/resume.pdf" download onClick={() => setIsOpen(false)}>
                Resume
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}