
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Institution',
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'Our History', href: '#' },
        { label: 'Leadership', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'News', href: '#' },
      ]
    },
    {
      title: 'Research',
      links: [
        { label: 'Research Areas', href: '#research' },
        { label: 'Publications', href: '#' },
        { label: 'Projects', href: '#' },
        { label: 'Collaborations', href: '#' },
        { label: 'Grants', href: '#' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Library', href: '#' },
        { label: 'Equipment', href: '#' },
        { label: 'Datasets', href: '#' },
        { label: 'Workshops', href: '#' },
        { label: 'Events', href: '#' },
      ]
    }
  ];
  
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-[#980201] text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-1">Hima<span className="text-gray-300">Die</span></h3>
              <p className="text-gray-100 text-sm">Advancing Knowledge Through Research</p>
            </div>
            <p className="text-blue-100 mb-6 max-w-md">
              Our institution is dedicated to pushing the boundaries of knowledge through 
              innovative research and interdisciplinary collaboration, addressing the most 
              pressing challenges facing our world today.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="w-10 h-10 text-black rounded-full bg-white flex items-center justify-center hover:bg-red-700 hover:text-white transition-colors"
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href} 
                      className="text-gray-200 hover:text-white transition-colors flex items-center"
                    >
                      {link.label}
                      <ArrowUpRight className="ml-1 h-3 w-3" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8 border-t border-gray-300/40 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-200 text-sm mb-4 md:mb-0">
            © {currentYear} HermantoXYZ. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-200">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
