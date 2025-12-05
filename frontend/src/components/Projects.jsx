import React from 'react';
import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { projects } from '../mock';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-center">
          Portfolio
        </h2>
        <p className="text-gray-400 text-center mb-16 text-lg">Real solutions delivering measurable results</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id}
              className="bg-zinc-900 border-zinc-800 overflow-hidden group hover:border-[#E91E63] transition-all duration-300 hover:shadow-[0_0_30px_rgba(233,30,99,0.3)] hover:-translate-y-2"
            >
              <div className="aspect-video overflow-hidden bg-zinc-950">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#E91E63] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.split(', ').map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-zinc-950 border border-zinc-700 rounded-full text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button 
                  variant="outline"
                  className="w-full border-[#E91E63] text-[#E91E63] hover:bg-[#E91E63] hover:text-white transition-all duration-300"
                >
                  View Details
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;