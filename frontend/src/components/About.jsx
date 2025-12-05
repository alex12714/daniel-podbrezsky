import React from 'react';
import { Card } from './ui/card';
import { personalInfo } from '../mock';
import { MapPin, Languages, Calendar, Target } from 'lucide-react';

const About = () => {
  const iconMap = {
    'Location': MapPin,
    'Languages': Languages,
    'Experience': Calendar,
    'Focus': Target
  };

  return (
    <section id="about" className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <div>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              {personalInfo.bio}
            </p>
          </div>

          {/* Quick Facts */}
          <div className="grid grid-cols-2 gap-4">
            {personalInfo.quickFacts.map((fact, index) => {
              const Icon = iconMap[fact.label];
              return (
                <Card 
                  key={index}
                  className="bg-zinc-900 border-zinc-800 p-6 hover:border-[#E91E63] transition-all duration-300 hover:shadow-[0_0_20px_rgba(233,30,99,0.3)] hover:scale-105"
                >
                  <div className="flex flex-col items-center text-center">
                    {Icon && <Icon className="h-8 w-8 text-[#E91E63] mb-3" />}
                    <p className="text-gray-400 text-sm mb-1">{fact.label}</p>
                    <p className="text-white font-semibold">{fact.value}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;