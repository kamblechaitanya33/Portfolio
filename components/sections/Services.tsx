'use client'

import {
  Layout,
  PenTool,
  Palette,
  Layers,
  Image,
  Sparkles,
} from 'lucide-react'
import { AnimatedHeading } from '@/components/common/AnimatedHeading'
import { ServiceCard } from '@/components/common/ServiceCard'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

const services = [
  {
    icon: <Layout />,
    title: 'UI/UX Design',
    description:
      'Designing intuitive and user-centered interfaces focused on usability, accessibility, and seamless user experience.',
  },
  {
    icon: <PenTool />,
    title: 'Wireframing & Prototyping',
    description:
      'Creating wireframes and interactive prototypes to visualize user flows and bring ideas to life before development.',
  },
  {
    icon: <Palette />,
    title: 'Branding & Visual Identity',
    description:
      'Building strong brand identities through logo design, typography, color systems, and cohesive visual language.',
  },
  {
    icon: <Layers />,
    title: 'Design Systems',
    description:
      'Developing scalable design systems and reusable components to maintain consistency across products.',
  },
  {
    icon: <Image />,
    title: 'Visual & Graphic Design',
    description:
      'Crafting engaging visuals, posters, social media creatives, and campaign designs with strong visual storytelling.',
  },
  {
    icon: <Sparkles />,
    title: 'Creative Direction',
    description:
      'Transforming ideas into impactful design solutions with a focus on creativity, clarity, and user engagement.',
  },
]

export const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-8"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <ScrollReveal direction="up" className="mb-12 sm:mb-16">
          <div className="text-center">
            <AnimatedHeading
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
              gradient
            >
              What I Do
            </AnimatedHeading>

            <p className="text-base sm:text-lg text-slate-400 max-w-xl sm:max-w-2xl mx-auto">
              I create thoughtful and visually engaging design solutions focused on user experience, branding, and digital storytelling.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}