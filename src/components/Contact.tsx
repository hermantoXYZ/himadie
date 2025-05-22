
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const { toast } = useToast();
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const animElements = entry.target.querySelectorAll('.animate-on-scroll');
            animElements.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('animate');
              }, i * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      details: [
        '123 Research Avenue',
        'Academic District',
        'Knowledge City, KC 10001'
      ]
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: [
        '+1 (555) 123-4567',
        '+1 (555) 987-6543'
      ]
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: [
        'info@researchinstitute.edu',
        'admissions@researchinstitute.edu'
      ]
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="section-padding bg-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
            Get in Touch
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Contact Us
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Have questions about our research, interested in collaboration opportunities, 
            or want to learn more about our institution? We'd love to hear from you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="animate-on-scroll">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              {contactInfo.map((item, index) => (
                <div key={index} className="mb-8 last:mb-0">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">
                      <item.icon size={20} />
                    </div>
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                  </div>
                  <div className="pl-13">
                    {item.details.map((detail, i) => (
                      <p key={i} className="text-gray-600 mb-2">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-2 animate-on-scroll">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h4 className="text-xl font-semibold mb-6">Send us a Message</h4>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    required
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full md:w-auto" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
