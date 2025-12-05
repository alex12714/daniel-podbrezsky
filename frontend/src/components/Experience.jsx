import React from 'react';
import { experience } from '../mock';
import { CheckCircle2 } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-zinc-950 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center">
          Professional Experience
        </h2>
        <p className="text-gray-400 text-center mb-16 text-lg">Career journey and key achievements</p>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C2185B] via-[#D81B60] to-[#AD1457]"></div>
          
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div key={exp.id} className="relative pl-20">
                {/* Timeline Dot */}
                <div className="absolute left-5 top-2 w-7 h-7 rounded-full bg-gradient-to-br from-[#C2185B] to-[#E91E63] border-4 border-zinc-950 shadow-[0_0_20px_rgba(233,30,99,0.5)]"></div>
                
                <div className="bg-black border border-zinc-800 rounded-lg p-6 hover:border-[#E91E63] transition-all duration-300 hover:shadow-[0_0_25px_rgba(233,30,99,0.2)]">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                      <p className="text-[#E91E63] font-semibold">{exp.company}</p>
                    </div>
                    <span className="text-gray-400 text-sm mt-2 md:mt-0">{exp.period}</span>
                  </div>
                  
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300">
                        <CheckCircle2 className="h-5 w-5 text-[#E91E63] flex-shrink-0 mt-0.5" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-[#C2185B] to-[#E91E63] rounded-full text-xs font-semibold text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;