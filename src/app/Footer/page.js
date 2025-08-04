"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Icon components (SVG placeholders – replace with icon library if needed)
const PhoneIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const MailIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const LocationIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const WhatsAppIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967... (truncated for brevity, keep full path)" />
  </svg>
);

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 10 } },
  };

  const quickLinks = [
    { label: 'About Us', href: '/about_us' },
    { label: 'Events', href: '/Upcomingevents/details' },
    { label: 'Workshop', href: '/workshop' },
    { label: 'Leaderboard', href: '/leaderboard' },
    { label: 'Our Team', href: '/team' },
    { label: 'Contact Us', href: '/contact_us' },
    { label: 'Alumni', href: '/alumni' },
  ];

  const resources = [
    { label: 'Documentation', href: '/comingsoon' },
    { label: 'Blog', href: '/comingsoon' },
    { label: 'Research Papers', href: '/comingsoon' },
    { label: 'Project Gallery', href: '/comingsoon' },
  ];

  const policies = [
    { label: 'Privacy Policy', href: '/comingsoon' },
    { label: 'Terms of Service', href: '/comingsoon' },
    { label: 'Cookie Policy', href: '/comingsoon' },
  ];

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white pt-12 pb-6 border-t-2 border-[#d69e9e] px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl font-bold">IEEE RGIPT</h2>
            <p className="text-gray-300">
              Advancing technology for Humanity through innovation, education, and collaboration.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-gray-300 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-gray-300 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-2 text-purple-400" />
                +91 7870304944
              </li>
              <li className="flex items-center">
                <MailIcon className="h-5 w-5 mr-2 text-purple-400" />
                ieee_sb@rgipt.ac.in
              </li>
              <li className="flex items-center">
                <LocationIcon className="h-5 w-5 mr-2 text-purple-400" />
                RGIPT, Jais, Amethi, UP, India
              </li>
              <li className="flex items-center">
                <WhatsAppIcon className="h-5 w-5 mr-2 text-purple-400" />
                +91 7870304944
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-purple-600 pt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} IEEE RGIPT. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
