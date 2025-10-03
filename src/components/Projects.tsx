import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'Built with React, Tailwind CSS, and deployed on the web.',
      technologies: ['React', 'Tailwind CSS'],
      githubUrl: '#',
      liveUrl: '#',
      image: '/placeholder.svg'
    },
    {
      id: 2,
      title: 'Internship at Radio Republik Indonesia (RRI)',
      description: 'Developing a CSIRT (Computer Security Incident Response Team) website as a medium for information and reporting of internal cyber security incidents at RRI.',
      technologies: ['PHP', 'CodeIgniter', 'MySQL', 'Bootstrap', 'AdminLTE'],
      githubUrl: '#',
      liveUrl: '#',
      image: '/placeholder.svg'
    },
    {
      id: 3,
      title: 'Build a Property Web: Setup Projects & Homepage',
      description: 'Building a Property Website as a platform to showcase property projects and provide an interactive homepage for visitors to explore available listings.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      githubUrl: 'https://github.com/nrzaky/naufal-residence',
      liveUrl: 'https://naufal-residence.vercel.app',
      image: '/placeholder.svg'
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my backend development expertise and problem-solving abilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden hover:shadow-glow transition-all duration-300 animate-slide-up"
            >
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-primary flex items-center justify-center">
                  <div className="text-white text-center p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-lg flex items-center justify-center">
                      <Github size={24} className="text-white" />
                    </div>
                    <h3 className="font-semibold">{project.title}</h3>
                  </div>
                </div>
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <Button asChild variant="secondary" size="sm" className="bg-white text-primary hover:bg-white/90">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    </Button>
                  )}

                  {project.liveUrl && project.liveUrl !== '#' && (
                    <Button asChild variant="secondary" size="sm" className="bg-white text-primary hover:bg-white/90">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
