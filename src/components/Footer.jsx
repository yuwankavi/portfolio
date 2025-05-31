import React from 'react';
import { Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook size={24} />, url: 'https://www.facebook.com/yuwan.kavindu.2025?mibextid=wwXIfr&mibextid=wwXIfr', name: 'Facebook' },
    { icon: <Linkedin size={24} />, url: 'https://www.linkedin.com/in/yuwan-kavindu-026147333/', name: 'LinkedIn' },
    { icon: <Instagram size={24} />, url: 'https://www.instagram.com/yuwankavindu?igsh=MTl2c202bGljbzNneg%3D%3D&utm_source=qr', name: 'Instagram' },
    { icon: <Youtube size={24} />, url: 'https://www.youtube.com/channel/UCe_Wf3yv5s3s6rbrPeMLLnw/community?pvf=CAI%253D', name: 'YouTube' }
  ];

  return (
    <footer className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
          </p>
          
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-slate-800 hover:text-yellow-500 transition-colors duration-300"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <p className="mt-8 text-gray-500 text-sm">
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 