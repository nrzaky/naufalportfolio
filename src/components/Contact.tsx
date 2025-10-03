import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

// 🔹 Definisikan tipe data untuk form
type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const { toast } = useToast();

  // 🔹 Gunakan typing di useState
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // contoh integrasi EmailJS
    emailjs.send(
      'service_ktmzzg9',
      'template_uoi7bmd',
      formData,
      'qqjZNa7GzNJEWj2qy'
    ).then(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      setFormData({ name: '', email: '', message: '' });
    }).catch((error) => {
      toast({
        title: "Failed to send",
        description: error.text,
      });
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to work together? Let's discuss your project and bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 shadow-card hover:shadow-glow transition-all duration-300 animate-slide-up">
            <h3 className="text-2xl font-bold mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-sm font-medium mb-2 block">
                  Full Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-sm font-medium mb-2 block">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full min-h-[120px] resize-none"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full hero-gradient text-white shadow-soft hover:shadow-glow transition-all duration-300"
                size="lg"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="animate-slide-up space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always excited to work on new projects and collaborate with amazing people. 
                Whether you have a project in mind or just want to chat about technology, 
                feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-muted-foreground">novalrz0707@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-muted-foreground">+62 877-2075-5723</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-muted-foreground">Indonesia, Jakarta Utara</p>
                </div>
              </div>
            </div>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <h4 className="font-bold mb-3 text-primary">Willing to accept suggestions and messages</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Currently, I am still in vocational school, so I may not be able to take on freelance projects or other opportunities. 
                However, you can contact me if you would like to offer advice or share knowledge to expand my horizons.
              </p>
              <div className="flex space-x-2">  
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-600">Contact me if you want to give advice or knowledge</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
