import { MapPin, Mail, Phone } from 'lucide-react';
import ContactForm from './ContactForm';

const contactInfo = [
  {
    icon: MapPin,
    label: 'Location',
    value: 'Nyeri, Kenya',
    href: null,
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'contact@truphena.org',
    href: 'mailto:contact@truphena.org',
  },
  {
    icon: Phone,
    label: 'Follow',
    value: '@TruphenaMuthoni',
    href: 'https://twitter.com/TruphenaMuthoni',
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-sans text-sm tracking-widest uppercase">Contact</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4">
            Reach Out
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto font-sans">
            Have questions, want to collaborate, or interested in supporting the movement? 
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Let's Connect
              </h3>
              <p className="text-muted-foreground font-sans leading-relaxed mb-8">
                Whether you're a fellow activist, a journalist, an organization looking to partner, 
                or simply someone inspired by the mission—your voice matters. Together, we can amplify 
                the message and create lasting change.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                    <info.icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-foreground font-medium hover:text-accent transition-colors"
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="border-l-4 border-accent pl-6 py-2 mt-8">
              <p className="font-serif text-lg text-foreground italic">
                "Every message of support is a seed planted. Together, we grow forests of change."
              </p>
            </blockquote>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
