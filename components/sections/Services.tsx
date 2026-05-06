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
      'Designing intuitive, user-focused digital interfaces that combine usability, accessibility, and modern visual aesthetics.',
  },
  {
    icon: <PenTool />,
    title: 'Wireframing & Prototyping',
    description:
      'Creating structured wireframes and interactive prototypes to visualize ideas, user journeys, and product experiences effectively.',
  },
  {
    icon: <Palette />,
    title: 'Brand Identity Design',
    description:
      'Building cohesive visual identities through typography, color systems, logos, and creative branding strategies.',
  },
  {
    icon: <Layers />,
    title: 'Design Systems',
    description:
      'Developing scalable design systems and reusable UI components to maintain consistency across digital products.',
  },
  {
    icon: <Image />,
    title: 'Visual Design',
    description:
      'Crafting visually engaging creatives, social media graphics, presentations, and digital assets with strong storytelling.',
  },
  {
    icon: <Sparkles />,
    title: 'Creative Strategy',
    description:
      'Transforming concepts into impactful experiences with a balance of creativity, functionality, and user engagement.',
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
              I create modern and meaningful digital experiences through UI/UX
              design, branding, visual storytelling, and user-centered creative
              solutions.
            </p>

          </div>
        </ScrollReveal>

        {/* Services Grid */}
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