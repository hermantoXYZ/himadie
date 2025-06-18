import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Linkedin, Twitter, FileText } from 'lucide-react';

const Team = () => {
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
              }, i * 100);
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

  const team = [
    {
      name: 'Wardihan Sabar',
      position: 'Team HimaDie',
      image: 'https://api.dicebear.com/7.x/bottts/svg?seed=Wardihan',
      bio: 'Mahasiswa aktif yang berdedikasi dalam memimpin dan mengembangkan HimaDie untuk kemajuan bersama.',
      featured: true
    },
    {
      name: 'Andi Samsir',
      position: 'Team HimaDie',
      image: 'https://api.dicebear.com/7.x/bottts/svg?seed=Andi',
      bio: 'Membantu mengkoordinasikan kegiatan dan program kerja HimaDie untuk mencapai visi dan misi bersama.',
      featured: true
    },
    {
      name: 'Muh Jamil',
      position: 'Team HimaDie',
      image: 'https://api.dicebear.com/7.x/bottts/svg?seed=Jamil',
      bio: 'Mengelola administrasi dan dokumentasi kegiatan HimaDie dengan penuh tanggung jawab.',
      featured: true
    },
    {
      name: 'Juardi',
      position: 'Team HimaDie',
      image: 'https://api.dicebear.com/7.x/bottts/svg?seed=Juardi',
      bio: 'Mengelola keuangan dan anggaran HimaDie dengan transparan dan akuntabel.',
      featured: false
    },
    {
      name: 'Raznilawati',
      position: 'Team HimaDie',
      image: 'https://api.dicebear.com/7.x/bottts/svg?seed=Raznilawati',
      bio: 'Memimpin program-program akademik dan pengembangan keilmuan di HimaDie.',
      featured: false
    },
    {
      name: 'Lisa Nursita',
      position: 'Team HimaDie',
      image: 'https://api.dicebear.com/7.x/bottts/svg?seed=Lisa',
      bio: 'Mengkoordinasikan kegiatan sosial dan pengabdian masyarakat HimaDie.',
      featured: false
    },
    {
      name: 'Amaliah Rezky',
      position: 'Team HimaDie',
      image: 'https://api.dicebear.com/7.x/bottts/svg?seed=Amaliah',
      bio: 'Mengembangkan program kaderisasi dan pengembangan anggota HimaDie.',
      featured: false
    },
  ];

  const featuredTeam = team.filter(member => member.featured);
  const otherTeam = team.filter(member => !member.featured);

  return (
    <section id="team" ref={sectionRef} className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
            Our Team
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Meet Our Researchers
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Our institution brings together brilliant minds from diverse backgrounds and disciplines, 
            united by a passion for discovery and innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredTeam.map((member, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md animate-on-scroll"
            >
              <div className="h-72 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-1">{member.name}</h4>
                <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <Button size="sm" variant="ghost" className="p-2">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button size="sm" variant="ghost" className="p-2">
                    <Twitter className="h-5 w-5" />
                  </Button>
                  <Button size="sm" variant="ghost" className="p-2">
                    <FileText className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {otherTeam.map((member, index) => (
            <div 
              key={index}
              className="flex items-center p-4 bg-white border border-gray-100 rounded-lg animate-on-scroll"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div>
                <h5 className="font-semibold">{member.name}</h5>
                <p className="text-blue-600 text-sm">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center animate-on-scroll">
          <Button size="lg">View All Team Members</Button>
        </div>
      </div>
    </section>
  );
};

export default Team;
