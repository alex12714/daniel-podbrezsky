import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { skills } from '../mock';
import { Code, Database, Calendar, Globe, Search, Workflow } from 'lucide-react';

const Skills = () => {
  const iconMap = {
    'Software Development': Code,
    'Database Management': Database,
    'Event Organization': Calendar,
    'Website Development': Globe,
    'Market Research': Search,
    'Business Automation': Workflow
  };

  return (
    <section id="skills" className="py-24 bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center">
          I Am The Best At:
        </h2>
        <p className="text-gray-400 text-center mb-16 text-lg">Expertise across multiple domains</p>
        
        <Accordion type="single" collapsible className="space-y-4">
          {skills.map((skill) => {
            const Icon = iconMap[skill.title];
            return (
              <AccordionItem 
                key={skill.id} 
                value={`item-${skill.id}`}
                className="border border-zinc-800 rounded-lg overflow-hidden bg-black hover:border-[#E91E63] transition-all duration-300 hover:shadow-[0_0_25px_rgba(233,30,99,0.2)]"
              >
                <AccordionTrigger className="px-6 py-5 hover:no-underline text-left">
                  <div className="flex items-center gap-4 w-full">
                    {Icon && (
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#C2185B] to-[#E91E63] flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    )}
                    <span className="text-xl font-semibold">{skill.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5">
                  <div className="pt-4 pl-16 space-y-3">
                    <p className="text-gray-400">{skill.description}</p>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm text-[#E91E63] font-semibold">Tools & Tech:</span>
                      <span className="text-sm text-gray-300">{skill.tools}</span>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};

export default Skills;