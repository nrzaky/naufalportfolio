import { ArrowDown, Github, Linkedin, Mail, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-grid"
    >
      <div className="absolute inset-0 bg-background/50 pointer-events-none" />
      
      <div className="container mx-auto px-6 text-center relative z-10 flex flex-col items-center mt-20">
        <div className="animate-fade-in flex flex-col items-center w-full max-w-5xl">
          
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <Sparkles size={16} />
            <span>Junior Software Engineer</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1] text-foreground animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Building software,<br className="hidden md:block" />
            <span className="text-primary"> one project at a time.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.3s' }}>
            A premium portfolio showcasing programming, software development, 
            and the latest technology projects for modern developers.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white shadow-glow hover:shadow-lg transition-all duration-300 px-8 py-6 rounded-full text-lg font-medium group"
              onClick={scrollToProjects}
            >
              View Portfolio
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <a href="https://github.com/nrzaky" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-secondary rounded-full">
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/naufalraikhanz" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-secondary rounded-full">
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:novalrz0707@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-secondary rounded-full">
              <Mail size={24} />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;