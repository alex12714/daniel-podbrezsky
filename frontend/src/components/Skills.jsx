import React from 'react';
import { Card, CardContent } from './ui/card';
import { expertise } from '../mock';
import { Code, Database, Calendar, Globe, Search, Workflow } from 'lucide-react';

const Skills = () => {
  const iconMap = {
    'Code': Code,
    'Database': Database,
    'Calendar': Calendar,
    'Globe': Globe,
    'Search': Search,
    'Workflow': Workflow
  };

  return (
    <section id="skills" className="py-24 bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center">
          Expertise
        </h2>
        <p className="text-gray-400 text-center mb-16 text-lg">Solutions that drive your business forward</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <Card 
                key={item.id}
                className="bg-black border-zinc-800 hover:border-[#E91E63] transition-all duration-300 hover:shadow-[0_0_25px_rgba(233,30,99,0.3)] hover:-translate-y-2 group"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#C2185B] to-[#E91E63] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {Icon && <Icon className="h-7 w-7 text-white" />}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#E91E63] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;