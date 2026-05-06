'use client'

import { Linkedin } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { SocialIcon } from '@/components/common/SocialIcon'

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

export const Sidebar: React.FC = () => {
  const socialLinks = [
    {
      href: 'https://www.behance.net/tanishkashah3',
      icon: <BehanceIcon size={20} />,
      label: 'Behance',
    },
    {
      href: 'https://www.linkedin.com/in/tanishka-shah',
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
    },
    {
      href: 'https://wa.me/91XXXXXXXXXX', // Replace with actual WhatsApp number
      icon: <FaWhatsapp size={20} />,
      label: 'WhatsApp',
    },
  ]

  return (
    <div className="hidden md:flex fixed left-0 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-6 px-6 py-8">

      {/* Social Icons */}
      <div className="flex flex-col gap-6">
        {socialLinks.map((link, index) => (
          <SocialIcon
            key={link.label}
            href={link.href}
            icon={link.icon}
            label={link.label}
            delay={index * 0.1}
          />
        ))}
      </div>

      {/* Vertical Line */}
      <div className="w-0.5 h-24 bg-gradient-to-b from-slate-700 to-transparent" />
    </div>
  )
}