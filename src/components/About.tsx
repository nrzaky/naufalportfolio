import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, Github, Linkedin } from 'lucide-react';
import profilePlaceholder from '@/assets/profile-placeholder.jpg';

const About = () => {
  const skills = [
    'HTML5', 'CSS3', 'JavaScript', 'Golang', 'React', 'PHP',
    'MySQL','Git Hub'
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate backend developer with expertise in building scalable web applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <Card className="p-8 shadow-card hover:shadow-glow transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-8 shadow-soft">
                  <img
                    src={profilePlaceholder}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">Naufal Raikhan Zaky</h3>
                <p className="text-primary font-semibold mb-6">Backend Developer</p>
                
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm">
                    <Download size={16} className="mr-2" />
                    Download CV
                  </Button>
                  <Button variant="ghost" size="icon">
                    <a href="https://github.com/nrzaky"><Github size={20} /></a>
                  </Button>
                  <Button variant="ghost" size="icon">
                    <a href="https://linkedin.com/in/naufalraikhanz"><Linkedin size={20} /></a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          <div className="animate-slide-up space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">Hello there!</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I’m an entry-level developer eager to grow my skills and contribute to impactful projects. I started my 
                journey with HTML and CSS, building simple and responsive web pages. Along the way, I learned PHP for 
                backend development and using SQL databases to manage data effectively.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Currently, I’m also exploring Golang and React, aiming to become more versatile as a full-stack developer. 
                I enjoy learning new technologies and applying them to real projects, focusing on writing clean, maintainable code. 
                My goal is to continue improving and collaborate on projects that challenge me to think critically and creatively.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">Technical Skills</h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="hero-gradient text-white shadow-soft hover:shadow-glow transition-all duration-300">
                Let's Work Together
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;