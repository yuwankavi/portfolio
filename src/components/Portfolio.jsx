import React, { useState } from 'react';
import yuwanImg from '../assets/yuwan.jpg';
import riceImg from '../assets/Rice.png';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Plane Tickets Management System',
      technologies: 'Java, OOP',
      image: 'https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'A comprehensive system for managing plane ticket bookings, seat allocations, and flight scheduling.'
    },
    {
      id: 2,
      title: 'Zero Hunger Web Platform',
      technologies: 'HTML, CSS, JavaScript',
      image: 'https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'A web platform connecting food donors with those in need to reduce food waste and address hunger.'
    },
    {
      id: 3,
      title: 'Real Event Ticket System',
      technologies: 'Spring Boot, React, WebSocket',
      image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'A real-time event ticketing system with live updates and secure payment processing.'
    },
    {
      id: 4,
      title: 'AI Chatbot for Document Summarization',
      technologies: 'Node.js, React, Python',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'An AI-powered chatbot that can automatically summarize documents and extract key information.'
    },
    {
      id: 5,
      title: 'SLRICE',
      technologies: 'Node.js, React',
      image: riceImg,
      description: 'A platform for tracking and analyzing rice production and distribution across Sri Lanka.'
    }
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">
          My <span>Portfolio</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:-translate-y-2"
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-yellow-500 mb-4">{project.technologies}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50" onClick={() => setSelectedProject(null)}>
            <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
              <div className="h-64 overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{selectedProject.title}</h3>
                <p className="text-yellow-500 mb-4">{selectedProject.technologies}</p>
                <p className="text-gray-700">{selectedProject.description}</p>
                <div className="mt-6 flex justify-end">
                  <button 
                    className="btn btn-primary"
                    onClick={() => setSelectedProject(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio; 