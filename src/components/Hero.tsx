import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]" />
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Naufal Raikhan Zaky</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Backend Developer crafting robust and scalable solutions with{' '}
            <span className="text-primary font-semibold">HTML</span>,{' '}
            <span className="text-primary font-semibold">CSS</span>, and{' '}
            <span className="text-primary font-semibold">Golang</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="hero-gradient text-white shadow-glow hover:shadow-soft transition-all duration-300 px-8 py-6 text-lg"
              onClick={scrollToProjects}
            >
              View Portfolio
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 px-8 py-6 text-lg"
              onClick={scrollToContact}
            >
              Contact Me
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
              <a href="https://github.com/nrzaky"><Github size={24} /></a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
              <a href="https://linkedin.com/in/naufalraikhanz"><Linkedin size={24} /></a>
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary transition-colors">
              <a href="mailto:novalrz0707@gmail.com"><Mail size={24} /></a>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <ArrowDown size={32} className="text-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;