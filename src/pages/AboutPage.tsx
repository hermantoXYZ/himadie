
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
      <div className="container mx-auto px-6 pt-24 pb-6">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <Home className="h-4 w-4 mr-1" />
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/about">About</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-3xl md:text-4xl font-bold mb-8">About Us</h1>
      </div>
      <About />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default AboutPage;
