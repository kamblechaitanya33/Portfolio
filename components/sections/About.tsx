'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { AnimatedHeading } from '@/components/common/AnimatedHeading'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

const highlights = [
  'Designing intuitive and meaningful user experiences',
  'Creating visually engaging and modern interfaces',
  'Strong focus on usability and user behavior',
  'Turning ideas into impactful digital products',
  'Attention to detail and design consistency',
  'Exploring trends and evolving design styles',
]

export const About: React.FC = () => {
  return (
    <section id="about" className="py-10 sm:py-14 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <ScrollReveal direction="up" className="mb-8 sm:mb-12 text-center md:text-left">
          <AnimatedHeading
            className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4"
            gradient
          >
            About Me.
          </AnimatedHeading>
        </ScrollReveal>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

          {/* Text Content */}
          <ScrollReveal direction="left">
            <div className="space-y-4 sm:space-y-6 text-center md:text-left">

              <p className="text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed">
                I’m a UI/UX designer passionate about crafting digital experiences that are simple, meaningful, and visually engaging.
              </p>

              <p className="text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed">
                I believe design is not just about how things look, but how they feel and function. My goal is to create interfaces that connect with users and make their journey effortless.
              </p>

              <p className="text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed">
                From research to final design, I focus on understanding user needs and transforming ideas into intuitive and impactful solutions.
              </p>

              {/* Tools */}
              <div className="pt-4 sm:pt-6">
                <p className="text-xs sm:text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider">
                  Tools & Skills
                </p>

                <ul className="space-y-2 sm:space-y-3">
                  {[
                    'Figma (UI Design & Prototyping)',
                    'Wireframing & User Flows',
                    'User Research & Analysis',
                    'Design Systems & Components',
                    'Interaction Design',
                  ].map((skill) => (
                    <li
                      key={skill}
                      className="flex items-start justify-center md:justify-start gap-2 sm:gap-3 text-slate-300 text-sm sm:text-base"
                    >
                      <span className="text-cyan-400 mt-1">→</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </ScrollReveal>

          {/* Highlights */}
          <ScrollReveal direction="right">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">

              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle
                      size={16}
                      className="text-cyan-400 group-hover:text-purple-400 transition-colors mt-1 flex-shrink-0"
                    />
                    <p className="text-xs sm:text-sm font-medium text-slate-300 group-hover:text-slate-100 transition-colors">
                      {highlight}
                    </p>
                  </div>
                </motion.div>
              ))}

            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}