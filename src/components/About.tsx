
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Award, Compass, FileText, Users } from 'lucide-react';

const About = () => {
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

  const stats = [
    { icon: Users, value: '150+', label: 'Researchers' },
    { icon: FileText, value: '320+', label: 'Publications' },
    { icon: Award, value: '42', label: 'Awards' },
    { icon: Compass, value: '28', label: 'Active Projects' },
  ];

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="lg:w-5/12">
            <div className="animate-on-scroll">
              <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
                About Our Institution
              </h2>
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Excellence in Research and Education
              </h3>
              <p className="text-gray-700 mb-6">
              Selain itu, pembentukan himpunan ini menjadi penting untuk meningkatkan kepedulian mahasiswa terhadap kemajuan program studi, dan membantu program studi dalam memperbaiki mutu akademik.
              </p>
              <p className="text-gray-700 mb-8">
              Sehingga chek dan balances berjalan dengan baik,” kata Dekan Fakultas Ekonomi dan Bisnis Unhas, Prof. Dr. Abd. Rahman Kadir, SE, MSi dalam sambutannya usai melantik para pengurus Himadie FEB Unhas Periode 2021-2022.
              </p>
            </div>
            
            <div className="relative pl-6 animate-on-scroll">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600"></div>
              <blockquote className="italic text-gray-700">
                "HIMADIE FEB-Unhas ini sebagai wadah mahasiswa untuk berkumpul serta mengadakan kegiatan-kegiatan kajian akademik dan kegiatan lainnya, seperti: Bakti Sosial, Olahraga, keagamaan, dan lain sebagainya"
              </blockquote>
              <p className="mt-4 font-medium">Dr. Anas Iswanto Anwar</p>
            </div>
          </div>
          
          <div className="lg:w-7/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className={cn(
                    "p-8 rounded-lg animate-on-scroll",
                    index % 2 === 0 ? "bg-blue-50" : "bg-gray-50"
                  )}
                >
                  <div className={cn(
                    "w-12 h-12 mb-4 flex items-center justify-center rounded-full",
                    index % 2 === 0 ? "bg-blue-100 text-blue-600" : "bg-gray-200 text-gray-700"
                  )}>
                    <stat.icon size={24} />
                  </div>
                  <h4 className="text-3xl font-bold mb-2">{stat.value}</h4>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-6 bg-blue-600 text-white rounded-lg animate-on-scroll">
              <h4 className="text-xl font-semibold mb-2">Our Commitment</h4>
              <p>
                We are committed to building a diverse and inclusive research community, 
                fostering collaboration that transcends boundaries, and translating discoveries 
                into solutions that address pressing global challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
