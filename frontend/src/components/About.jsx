import React from 'react';
import { Card } from './ui/card';
import { personalInfo } from '../mock';
import { Zap, Layers, TrendingUp, Award } from 'lucide-react';

const About = () => {
  const iconMap = {
    'Zap': Zap,
    'Layers': Layers,
    'TrendingUp': TrendingUp,
    'Award': Award
  };

  return (
    <section id="about" className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center">
          Why Work With Me
        </h2>
        
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg text-gray-300 leading-relaxed text-center">
            {personalInfo.bio}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {personalInfo.whyWorkWithMe.map((benefit, index) => {
            const Icon = iconMap[benefit.icon];
            return (
              <Card 
                key={index}
                className="bg-zinc-900 border-zinc-800 p-6 hover:border-[#E91E63] transition-all duration-300 hover:shadow-[0_0_20px_rgba(233,30,99,0.3)] hover:scale-105"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#C2185B] to-[#E91E63] flex items-center justify-center mb-4">
                    {Icon && <Icon className="h-7 w-7 text-white" />}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;