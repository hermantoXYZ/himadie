
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Research = () => {
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
              }, i * 150);
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

  const projects = [
    {
      id: 1,
      title: 'Mubes HimaDie Unhas',
      image: '/artikel1.jpeg',
      category: 'Berita HimaDie Unhas',
      description: 'Himpunan Mahasiswa Doktor Ilmu Ekonomi, Fakultas Ekonomi dan Bisnis, Universitas Hasanuddin,  (HIMADIE FEB UNHAS) periode 2024-2025 menggelar Musyawarah Besar (Mubes)',
      featured: true
    },
    {
      id: 2,
      title: 'Pengurus Himadie FEB Unhas Resmi Dilantik',
      image: 'https://asset-2.tstatic.net/makassar/foto/bank/images/dekan-fakultas-ekonomi-dan-bisnis-feb-unhas-prof-dr-abd-rahman-kadir.jpg',
      category: 'Berita HimaDie Unhas',
      description: 'Dekan Fakultas Ekonomi dan Bisnis (FEB) Unhas, Prof Dr Abd Rahman Kadir, SE, MSi melantik Pengurus Himpunan Mahasiswa..',
      featured: false
    },
  ];

  return (
    <section id="research" ref={sectionRef} className="section-padding bg-blue-50/70">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
            Our Research
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Innovative Projects & Discoveries
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Our multidisciplinary research teams work on groundbreaking projects that address 
            complex challenges and drive meaningful innovation across various fields.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={cn(
                "group bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg animate-on-scroll",
                project.featured && "md:col-span-2"
              )}
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3 transition-colors group-hover:text-blue-600">
                  {project.title}
                </h4>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <Button 
                  variant="ghost" 
                  className="flex items-center text-blue-600 hover:text-blue-700 p-0"
                  asChild
                >
                  <Link to={`/research/${project.id}`}>
                    Read More <ExternalLink className="ml-1  text-left h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center animate-on-scroll">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-blue-600 text-blue-600 hover:bg-blue-50"
            asChild
          >
            <Link to="/research">View All Research Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Research;
