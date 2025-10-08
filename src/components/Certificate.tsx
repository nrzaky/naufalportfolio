import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Award, Building } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'Dicoding: Belajar Dasar Pemrograman Web',
      description: 'Completed an introductory web development course from Dicoding Indonesia.',
      issuedBy: 'Dicoding Indonesia',
      date: '19 September 2025',
      credentialUrl: 'https://www.dicoding.com/certificates/2VX35OW43PYQ',
      image: '/certificateimg/sertifikat_course_653_4886998_290925220159_page-0001.jpg'
    },
    {
      id: 2,    
      title: 'Back End Development and APIs',
      description: 'Completed a Back End Development and APIs course.',
      issuedBy: 'Freecodecamp',
      date: '27 June 2025', 
      credentialUrl: 'https://www.freecodecamp.org/certification/naufal0467/back-end-development-and-apis',
      image: '/certificateimg/certificate-back-end-development-and_apis.png'
    },
    {
      id: 3,    
      title: 'Responsive Web Design',
      description: 'Completed a Responsive Web Design course.',
      issuedBy: 'Freecodecamp',
      date: '03 February 2025', 
      credentialUrl: 'https://www.freecodecamp.org/certification/naufal0467/responsive-web-design',
      image: '/certificateimg/certificate-responsive-web-design.png'
    },
    {
      id: 4,    
      title: 'Software Engineering Introduction',
      description: 'Successfully completed the Software Engineering Introduction course during Tech Week organized by Tech Voice Indonesia.',
      issuedBy: 'Tech Voice Indonesia',
      date: '16-20 June 2025', 
      credentialUrl: '',
      image: '/certificateimg/certificate-software-engineering-introduction.png'
    },
  ];

  return (
    <section id="certificates" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Certificates</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of certificates that reflect my achievements, learning experiences, and professional development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate) => (
            <Card
              key={certificate.id}
              className="group overflow-hidden hover:shadow-glow transition-all duration-300 animate-slide-up"
            >
              <div className="relative">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  loading="lazy"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  {certificate.credentialUrl && certificate.credentialUrl !== '#' && (
                    <Button asChild variant="secondary" size="sm" className="bg-white text-primary hover:bg-white/90">
                      <a href={certificate.credentialUrl} target="_blank" rel="noopener noreferrer"  aria-label={`View ${certificate.title} certificate`}>
                        <ExternalLink size={16} className="mr-2" />
                        View Certificate
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {certificate.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{certificate.description}</p>
                <p className="flex items-center text-sm text-muted-foreground mb-1">
                  <Building size={14} className="mr-1" /> {certificate.issuedBy}
                </p>
                <p className="text-xs text-muted-foreground">{certificate.date}</p>
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
            View All Certificates
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
