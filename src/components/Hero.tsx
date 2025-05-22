
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from '@/components/ui/carousel';

const Hero = () => {
  useEffect(() => {
    const animateOnLoad = () => {
      const elements = document.querySelectorAll('.hero-animate');
      elements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('animate-fade-in');
        }, index * 200);
      });
    };
    
    animateOnLoad();
  }, []);

  const heroSlides = [
    {
      title: "Himpunan Mahasiswa Doktor Ilmu Ekonomi",
      subtitle: "Universitas Hasanuddin",
      description: "Wadah kolaborasi, inovasi, dan pengembangan keilmuan bagi mahasiswa doktor Ilmu Ekonomi Universitas Hasanuddin.",
      backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80')",
      overlayColor: "blue-overlay"
    },
    {
      title: "Himpunan Mahasiswa Doktor Ilmu Ekonomi",
      subtitle: "Universitas Hasanuddin",
      description: "Mendorong kontribusi nyata dalam riset ekonomi melalui sinergi antar akademisi, peneliti, dan pemangku kepentingan.",
      backgroundImage: "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80')",
      overlayColor: "bg-gradient-to-r from-red-800/80 to-indigo-800/70"
    },
    {
      title: "Himpunan Mahasiswa Doktor Ilmu Ekonomi",
      subtitle: "Universitas Hasanuddin",
      description: "Bersama menciptakan lingkungan akademik yang unggul, berintegritas, dan berdaya saing global.",
      backgroundImage: "url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80')",
      overlayColor: "bg-gradient-to-r from-[#BC0000]/80 to-[#fd8925]/40"
    }
  ];
  

  return (
    <section id="home" className="relative min-h-screen">
      <Carousel className="w-full h-screen">
        <CarouselContent className="h-full">
          {heroSlides.map((slide, index) => (
            <CarouselItem key={index} className="h-full">
              <div 
                className="relative flex items-center h-full bg-cover bg-center"
                style={{ backgroundImage: slide.backgroundImage }}
              >
                <div className={`absolute inset-0 ${slide.overlayColor}`}></div>
                
                <div className="container relative z-10 mx-auto px-20 py-32 lg:py-40">
                  <div className="max-w-3xl">
                    <h4 className="text-blue-100 mb-2 hero-animate opacity-0 font-medium">
                      {slide.subtitle}
                    </h4>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 hero-animate opacity-0">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl text-blue-50 mb-8 max-w-2xl hero-animate opacity-0">
                      {slide.description}
                    </p>
                    <div className="flex flex-wrap gap-4 hero-animate opacity-0">
                      <Button size="lg" className="text-base">
                        Explore Research <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                      <Button size="lg" variant="outline" className="text-base bg-transparent text-white hover:bg-white/10 border-white">
                        View Publications
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-10 z-20 w-full flex justify-center">
          <div className="flex gap-1">
            {heroSlides.map((_, index) => (
              <div key={index} className="h-2 rounded-full bg-white/70 w-2"></div>
            ))}
          </div>
        </div>
        <CarouselPrevious className="left-4 sm:left-8" />
        <CarouselNext className="right-4 sm:right-8" />
      </Carousel>
    </section>
  );
};

export default Hero;
