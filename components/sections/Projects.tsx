'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { AnimatedHeading } from '@/components/common/AnimatedHeading'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

const projects = [
  {
    id: 1,
    title: 'Smart Buy – Design for Special Needs',
    description:
      'A thoughtful UI/UX project focused on creating accessible shopping experiences tailored for users with special needs and improved usability.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500',
    link: 'https://www.behance.net/gallery/241704393/Smart-Buy-Design-For-Special-Needs',
  },
  {
    id: 2,
    title: 'Aquasense – Tangible Interaction',
    description:
      'An innovative interaction design project exploring tangible interfaces and immersive user experiences through smart product concepts.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500',
    link: 'https://www.behance.net/gallery/227147751/Aquasense-Tangible-Interaction',
  },
  {
    id: 3,
    title: 'Connected Care Interface Design',
    description:
      'A healthcare-focused interface design project aimed at improving communication, accessibility, and digital care experiences.',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500',
    link: 'https://www.behance.net/gallery/224607653/Connected-Care-Interface-Design',
  },
  {
    id: 4,
    title: 'Cinepolis App Redesign',
    description:
      'A modern redesign concept for the Cinepolis mobile application focused on seamless ticket booking and user-friendly navigation.',
    image:
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500',
    link: 'https://www.behance.net/gallery/226639211/Cinepolis-App-Redesign',
  },
  {
    id: 5,
    title: 'Website Redesign – Cognitive Ergonomics',
    description:
      'A website redesign case study centered around cognitive ergonomics, usability improvements, and enhanced digital accessibility.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500',
    link: 'https://www.behance.net/gallery/237834617/Website-Redesign-Cognitive-Ergonomics',
  },
  {
    id: 6,
    title: 'Burud Ali Pune – Ethnographic Research',
    description:
      'An ethnographic research case study exploring cultural understanding, field research, and user-centered design methodologies.',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500',
    link: 'https://www.behance.net/gallery/225797455/Burud-Ali-Pune-Ethnographic-Research-Case-Study',
  },
  {
    id: 7,
    title: 'Game Design Concept',
    description:
      'A creative game design project focused on interactive storytelling, immersive gameplay experiences, and visual engagement.',
    image:
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500',
    link: 'https://www.behance.net/gallery/230146129/Game-Design',
  },
]

export const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <ScrollReveal direction="up" className="mb-10 text-center">
          <AnimatedHeading
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3"
            gradient
          >
            Featured Projects
          </AnimatedHeading>

          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
            A curated collection of UI/UX, interaction, research, and redesign
            projects focused on building meaningful, accessible, and engaging
            user experiences.
          </p>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group rounded-xl overflow-hidden bg-slate-800/50 border border-slate-700 hover:border-cyan-500/40 transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">
                    Explore Project →
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Button */}
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-5 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                >
                  View Project
                  <ArrowRight size={16} />
                </motion.a>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}