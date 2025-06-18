
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import About from '@/components/About';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Home } from 'lucide-react';

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Us - Research Institute";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <About />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default AboutPage;
