import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/nrzaky', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/naufalraikhanz', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: 'mailto:novalrz0707@gmail.com', label: 'Email' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground/5 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo/Brand */}
          <div className="text-center">
            <button
              onClick={scrollToTop}
              className="text-3xl font-bold gradient-text hover:scale-105 transition-transform duration-200"
            >
              Naufal Raikhan Zaky
            </button>
            <p className="text-muted-foreground mt-2">Backend Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <Button
                key={label}
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10 hover:text-primary transition-all duration-200 rounded-full"
                asChild
              >
                <a 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              </Button>
            ))}
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <button
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-border"></div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
              © {currentYear} Naufal Raikhan Zaky. Made with{' '}
              <Heart size={14} className="text-red-500 fill-current" />
              {' '}and code.
            </p>
            <p className="text-xs text-muted-foreground/70 mt-1">
              Built with React, Tailwind CSS, and deployed on the web.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;