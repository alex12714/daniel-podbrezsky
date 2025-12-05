import React, { useState } from 'react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { toast } from '../hooks/use-toast';
import { personalInfo } from '../mock';
import { Mail, Phone, Globe, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center">
          Get In Touch
        </h2>
        <p className="text-gray-400 text-center mb-16 text-lg">Let's discuss your next project</p>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-zinc-900 border-zinc-800 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-300">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-black border-zinc-700 text-white focus:border-[#E91E63] focus:ring-[#E91E63] transition-colors duration-300"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-300">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-black border-zinc-700 text-white focus:border-[#E91E63] focus:ring-[#E91E63] transition-colors duration-300"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-300">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-black border-zinc-700 text-white focus:border-[#E91E63] focus:ring-[#E91E63] transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#C2185B] to-[#E91E63] hover:from-[#AD1457] hover:to-[#D81B60] text-white py-6 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(233,30,99,0.6)]"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info & QR Code */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="space-y-4">
              <Card className="bg-zinc-900 border-zinc-800 p-6 hover:border-[#E91E63] transition-all duration-300 hover:shadow-[0_0_20px_rgba(233,30,99,0.2)]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#C2185B] to-[#E91E63] flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href={`mailto:${personalInfo.email}`} className="text-white font-semibold hover:text-[#E91E63] transition-colors duration-300">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="bg-zinc-900 border-zinc-800 p-6 hover:border-[#E91E63] transition-all duration-300 hover:shadow-[0_0_20px_rgba(233,30,99,0.2)]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#C2185B] to-[#E91E63] flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a href={`tel:${personalInfo.phone}`} className="text-white font-semibold hover:text-[#E91E63] transition-colors duration-300">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="bg-zinc-900 border-zinc-800 p-6 hover:border-[#E91E63] transition-all duration-300 hover:shadow-[0_0_20px_rgba(233,30,99,0.2)]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#C2185B] to-[#E91E63] flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Website</p>
                    <a href={`https://${personalInfo.website}`} target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-[#E91E63] transition-colors duration-300">
                      {personalInfo.website}
                    </a>
                  </div>
                </div>
              </Card>
            </div>

            {/* QR Code */}
            <Card className="bg-zinc-900 border-zinc-800 p-6 hover:border-[#E91E63] transition-all duration-300 group">
              <h3 className="text-lg font-semibold mb-4 text-center">Scan to Connect</h3>
              <div className="bg-white p-6 rounded-lg group-hover:shadow-[0_0_40px_rgba(233,30,99,0.5)] transition-all duration-500">
                <div className="aspect-square bg-zinc-200 rounded flex items-center justify-center">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    {/* Simple QR code placeholder pattern */}
                    <rect width="200" height="200" fill="white"/>
                    <rect x="20" y="20" width="60" height="60" fill="black"/>
                    <rect x="120" y="20" width="60" height="60" fill="black"/>
                    <rect x="20" y="120" width="60" height="60" fill="black"/>
                    <rect x="30" y="30" width="40" height="40" fill="white"/>
                    <rect x="130" y="30" width="40" height="40" fill="white"/>
                    <rect x="30" y="130" width="40" height="40" fill="white"/>
                    <rect x="40" y="40" width="20" height="20" fill="black"/>
                    <rect x="140" y="40" width="20" height="20" fill="black"/>
                    <rect x="40" y="140" width="20" height="20" fill="black"/>
                    {/* Pattern blocks */}
                    <rect x="90" y="30" width="10" height="10" fill="black"/>
                    <rect x="105" y="30" width="10" height="10" fill="black"/>
                    <rect x="90" y="45" width="10" height="10" fill="black"/>
                    <rect x="105" y="60" width="10" height="10" fill="black"/>
                    <rect x="135" y="90" width="10" height="10" fill="black"/>
                    <rect x="150" y="90" width="10" height="10" fill="black"/>
                    <rect x="165" y="90" width="10" height="10" fill="black"/>
                    <rect x="90" y="120" width="10" height="10" fill="black"/>
                    <rect x="105" y="135" width="10" height="10" fill="black"/>
                    <rect x="120" y="150" width="10" height="10" fill="black"/>
                  </svg>
                </div>
              </div>
              <p className="text-center text-gray-400 text-sm mt-4">Save contact information instantly</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;