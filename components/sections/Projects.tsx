'use client'

import { motion } from 'framer-motion'
import { AnimatedHeading } from '@/components/common/AnimatedHeading'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

const projects = [
  {
    id: 1,
    title: 'Hostel & PG App Case Study',
    description:
      'A UI/UX case study focused on designing a seamless experience for tenants to find and manage hostel and PG accommodations.',
    image:
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=500',
    link: 'https://www.behance.net/gallery/244892373/hostel-PG-app-for-tenantsUIUX-CASE-STUDY',
  },
  {
    id: 2,
    title: 'Tour & Travel Registration Website',
    description:
      'A modern and user-friendly website design for travel registration with a focus on simplicity and smooth user flow.',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500',
    link: 'https://www.behance.net/gallery/244280891/Tour-and-travel-registration-website',
  },
  {
    id: 3,
    title: 'Tea Brand Logo Case Study',
    description:
      'A branding project exploring logo design, identity, and visual storytelling for a tea brand.',
    image:
      'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500',
    link: 'https://www.behance.net/gallery/243162095/tea-logo-design-case-study',
  },
  {
    id: 4,
    title: 'Food Ordering Interface',
    description:
      'A clean and modern UI design for a food ordering application focused on usability and visual appeal.',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500',
    link: 'https://www.behance.net/gallery/241292149/FOOD-ORDERING-INTERFACE',
  },
]

export const Projects: React.FC = () => {
  return (
    <section className="py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <ScrollReveal direction="up" className="mb-10 text-center">
          <AnimatedHeading
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3"
            gradient
          >
            Projects
          </AnimatedHeading>

          <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto">
            A collection of UI/UX, branding, and visual design projects focused on creating meaningful and engaging experiences.
          </p>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              onClick={() => window.open(project.link, '_blank')}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group cursor-pointer rounded-xl overflow-hidden bg-slate-800/50 border border-slate-700 hover:border-cyan-500/40 transition-all duration-300"
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
                    View Case Study →
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}