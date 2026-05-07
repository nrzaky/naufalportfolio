import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Phone, Send, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const { toast } = useToast();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: 'Incomplete form',
        description: 'Please fill in all fields.'
      });
      return;
    }

    try {
      setLoading(true);

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast({
        title: 'Message sent successfully 🚀',
        description: "Thank you for contacting me. I'll reply soon!"
      });

      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error(error);

      toast({
        title: 'Failed to send message',
        description: 'Something went wrong. Please try again later.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-background to-muted/30"
    >
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate, learn, and build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Form */}
          <Card className="p-8 shadow-xl border-0 bg-background/80 backdrop-blur animate-slide-up">
            <h3 className="text-2xl font-bold mb-6">
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <div>
                <Label
                  htmlFor="name"
                  className="mb-2 block"
                >
                  Full Name
                </Label>

                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email */}
              <div>
                <Label
                  htmlFor="email"
                  className="mb-2 block"
                >
                  Email Address
                </Label>

                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Message */}
              <div>
                <Label
                  htmlFor="message"
                  className="mb-2 block"
                >
                  Message
                </Label>

                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your ideas or just say hello..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[140px] resize-none"
                />
              </div>

              {/* Button */}
              <Button
                type="submit"
                disabled={loading}
                size="lg"
                className="w-full hero-gradient text-white transition-all duration-300 hover:scale-[1.02]"
              >
                {loading ? (
                  <>
                    <Loader2
                      size={18}
                      className="mr-2 animate-spin"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send
                      size={18}
                      className="mr-2"
                    />
                    Send Message
                  </>
                )}
              </Button>

            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up">

            <div>
              <h3 className="text-2xl font-bold mb-6">
                Let's Connect
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                I'm always interested in meeting new people,
                learning new things, and discussing technology,
                development, and creative ideas.
              </p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Mail className="text-primary" size={20} />
              </div>

              <div>
                <p className="font-semibold">Email</p>
                <p className="text-muted-foreground">
                  novalrz0707@gmail.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Phone className="text-primary" size={20} />
              </div>

              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-muted-foreground">
                  +62 877-2075-5723
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <MapPin className="text-primary" size={20} />
              </div>

              <div>
                <p className="font-semibold">Location</p>
                <p className="text-muted-foreground">
                  Jakarta Utara, Indonesia
                </p>
              </div>
            </div>

            {/* Info Card */}
            <Card className="p-6 border-primary/20 bg-primary/5">
              <h4 className="font-bold text-primary mb-3">
                Open to Learning & Networking
              </h4>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                I'm currently a vocational high school student focused on
                software engineering and backend development.
                While I may not be available for freelance work yet,
                I would love to connect with people who want to share
                knowledge, insights, and experiences.
              </p>

              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>

                <span className="text-sm font-medium text-green-600">
                  Available for discussion and learning
                </span>
              </div>
            </Card>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;