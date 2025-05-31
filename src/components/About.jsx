import React from 'react';
import yuwanImg from '../assets/yuwan.jpg';

const About = () => {
  const educationItems = [
    {
      degree: 'BEng (Hons) Software Engineering',
      institution: 'University of Westminster (IIT)',
      period: '2023 - Present'
    },
    {
      degree: 'GCE A/L and O/L',
      institution: 'Taxila Central College & Royal College Horana',
      period: '2018 - 2021'
    },
    {
      degree: 'Diploma Level Certificate in English',
      institution: 'British Way English Academy',
      period: '2022'
    },
    {
      degree: 'Freelancing and Graphic Design',
      institution: 'IT Guru',
      period: '2022'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">
          About <span>Me</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[3/4] bg-slate-200 rounded-lg overflow-hidden">
            <img 
  src={yuwanImg}
  alt="Professional portrait"
  className="w-full h-full object-cover"
/>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">Short personal profile:</h3>
            <p className="text-gray-700 mb-6">
              I'm an enthusiastic and passionate computer science undergraduate with skills in Java, Python, HTML, CSS, React, and Node.js. 
              I strive to build innovative, dynamic web solutions and am seeking internship opportunities in a collaborative tech environment.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4">Education timeline:</h3>
            <ul className="space-y-4">
              {educationItems.map((item, index) => (
                <li key={index} className="flex">
                  <div className="mr-4 mt-1">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    {index < educationItems.length - 1 && (
                      <div className="w-0.5 h-full bg-yellow-300 ml-1.5 mt-1"></div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-medium">{item.degree}</h4>
                    <p className="text-gray-600">{item.institution}</p>
                    <p className="text-sm text-gray-500">{item.period}</p>
                  </div>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <a href="#contact" className="btn btn-primary">Contact me</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 