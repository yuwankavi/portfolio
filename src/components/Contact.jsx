import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Replace the following with your actual EmailJS service/template/user IDs
    emailjs.send(
      'service_2002',         // Your Service ID
      'template_zifa6wh',      // Your Template ID
      formData,
      'fDzsWVAnFoTTQe8Yz'     // Your User ID (Public Key)
    )
    .then((result) => {
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    }, (error) => {
        alert('There was an error sending your message. Please try again later.');
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">
          Contact <span>Me</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <MapPin className="text-yellow-500 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Address</h3>
              </div>
              <p className="text-gray-700 ml-9">103 A-3, Raigama, Bandaragama</p>
            </div>
            
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Phone className="text-yellow-500 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Phone</h3>
              </div>
              <p className="text-gray-700 ml-9">+94 77 474 0621</p>
            </div>
            
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Mail className="text-yellow-500 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Email</h3>
              </div>
              <p className="text-gray-700 ml-9">yuwanwithanage2002@gmail.com</p>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full p-4 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                ></textarea>
              </div>
              
              <div>
                <button type="submit" className="btn btn-primary">
                  Contact us
                </button>
              </div>
            </form>
            {/*
              NOTE: To enable email sending, sign up at https://www.emailjs.com/ and replace the placeholders above with your actual EmailJS Service ID, Template ID, and User ID (public key).
              Set the template variables to: name, email, message.
              Set the recipient email to yuwanwithanage2002@gmail.com in your EmailJS template.
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 