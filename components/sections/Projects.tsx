'use client'

import { motion } from 'framer-motion'
import { AnimatedHeading } from '@/components/common/AnimatedHeading'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

const projects = [
  {
    id: 1,
    title: 'MSRTC App Redesign',
    description:
      'A complete redesign of the MSRTC mobile application focused on improving usability and enhancing the travel experience.',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500',
    link: 'https://www.behance.net/gallery/245845069/MSRTC-APP-REDESIGN',
  },
  {
    id: 2,
    title: 'Bizcharlie Branding',
    description:
      'A branding project focused on building a strong visual identity through logo, typography, and brand guidelines.',
    image:
      'https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=500',
    link: 'https://www.behance.net/gallery/245811705/Bizcharlie-Branding',
  },
  {
    id: 3,
    title: 'Oliv Menu Card',
    description:
      'Designed a clean and visually appealing menu layout focusing on readability and modern aesthetics.',
    image:
      'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=500',
    link: 'https://www.behance.net/gallery/245811299/Oliv-Menu-Card',
  },
  {
    id: 4,
    title: 'SafeDoc App Design',
    description:
      'A healthcare app interface designed for easy document storage and seamless user interaction.',
    image:
      'https://images.unsplash.com/photo-1773332585815-f106a5d6ed6c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: 'https://www.behance.net/gallery/242941943/SafeDoc-App-Design',
  },
  {
    id: 5,
    title: 'Shopkop Campaign',
    description:
      'A creative campaign combining visual storytelling and branding for impactful communication.',
    image:
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=500',
    link: 'https://www.behance.net/gallery/242896835/Shopkop-Campaign',
  },
  {
    id: 6,
    title: 'Treadmill Dashboard Design',
    description:
      'A modern dashboard UI focusing on fitness tracking, clarity, and intuitive interaction.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500',
    link: 'https://www.behance.net/gallery/225614739/Treademill-Dashboard-Design',
  },
  {
    id: 7,
    title: 'Social Awareness Campaign',
    description:
      'Creative visual designs aimed at spreading awareness through strong messaging and visuals.',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500',
    link: 'https://www.behance.net/gallery/225613415/SOCIAL-AWARENESS',
  },
  {
    id: 8,
    title: 'Road Safety Poster Series',
    description:
      'A bold poster series designed to promote road safety using impactful visuals.',
    image:
      'https://images.unsplash.com/photo-1465447142348-e9952c393450?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: 'https://www.behance.net/gallery/225612217/Road-Safety-Poster-Series',
  },
  {
    id: 9,
    title: 'Magazine Design',
    description:
      'An editorial design project focusing on layout, typography, and storytelling.',
    image:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=500',
    link: 'https://www.behance.net/gallery/218063985/Magzine',
  },
  {
    id: 10,
    title: 'Branding Project',
    description:
      'A complete branding exploration creating a cohesive visual identity system.',
    image:
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=500',
    link: 'https://www.behance.net/gallery/213801677/BRANDING',
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
            Selected Work
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