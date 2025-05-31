import React from 'react';
import { Palette, Code, Server, Database, Pencil } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Palette size={48} className="text-yellow-500 mb-4" />,
      title: 'UI/UX Design',
      description: 'I design intuitive and visually appealing interfaces using HTML, CSS, and JavaScript, focusing on user-first experiences.'
    },
    {
      icon: <Code size={48} className="text-yellow-500 mb-4" />,
      title: 'Web Development',
      description: 'I build dynamic and responsive websites using Java, React, Node.js, HTML, and CSS — delivering seamless user experiences across devices.'
    },
    {
      icon: <Server size={48} className="text-yellow-500 mb-4" />,
      title: 'Backend API Development',
      description: 'I create powerful RESTful APIs using Java and Node.js with secure, scalable architecture for modern web applications.'
    },
    {
      icon: <Database size={48} className="text-yellow-500 mb-4" />,
      title: 'Database Design & Management',
      description: 'I handle backend databases using MySQL and MongoDB, ensuring efficient data storage, retrieval, and manipulation.'
    },
    {
      icon: <Pencil size={48} className="text-yellow-500 mb-4" />,
      title: 'Freelancing & Graphic Design',
      description: 'I offer freelance design services, combining creativity with technical skills to deliver customized visual content.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-900 text-white">
      <div className="section-container">
        <h2 className="section-title">
          My <span>Service</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              {service.icon}
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 