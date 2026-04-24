'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

/* Behance Icon */
const BehanceIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M3 7h4c2.2 0 4 1.8 4 4 0 1.3-.6 2.4-1.6 3.1C10.5 14.8 11 15.8 11 17c0 2.2-1.8 4-4 4H3V7zm4 6c.6 0 1-.4 1-1s-.4-1-1-1H5v2h2zm0 4c.6 0 1-.4 1-1s-.4-1-1-1H5v2h2zM14 9h7v2h-7V9zm3.5 3c2.5 0 4.5 2 4.5 4.5S20 21 17.5 21 13 19 13 16.5 15 12 17.5 12zm0 2c-1.4 0-2.5 1.1-2.5 2.5S16.1 19 17.5 19s2.5-1.1 2.5-2.5S18.9 14 17.5 14z" />
  </svg>
)

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden md:flex fixed top-0 left-0 right-0 z-50 justify-between items-center px-8 py-4 glassmorphism border-b border-slate-700"
      >
        {/* Logo */}
        <Link href="#hero" className="text-xl font-bold gradient-text">
          SB
        </Link>

        {/* Nav Links */}
        <div className="flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-slate-300 hover:text-cyan-400 transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Behance Icon */}
        <motion.a
          href="https://www.behance.net/shrutibagad"
          target="_blank"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-700 hover:border-cyan-500 transition-all"
        >
          <BehanceIcon size={20} />
        </motion.a>
      </motion.nav>

      {/* Mobile Menu Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 right-4 z-40 p-2 rounded-lg bg-slate-800 text-cyan-400 hover:bg-slate-700 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </motion.button>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden fixed top-16 left-4 right-4 z-40 p-6 rounded-xl glassmorphism border border-slate-700 ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm text-slate-300 hover:text-cyan-400 transition-colors py-2 border-b border-slate-700 last:border-b-0"
            >
              {link.label}
            </Link>
          ))}

          {/* Behance Link */}
          <a
            href="https://www.behance.net/shrutibagad"
            target="_blank"
            className="flex items-center justify-center gap-2 mt-2 text-slate-300 hover:text-cyan-400 transition-colors"
          >
            <BehanceIcon size={18} />
            <span className="text-sm">Behance</span>
          </a>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-shadow w-full"
          >
            Let&apos;s Collaborate
          </motion.button>
        </div>
      </motion.div>
    </>
  )
}