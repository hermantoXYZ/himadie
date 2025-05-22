
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Home } from 'lucide-react';

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact Us - Research Institute";
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
              <BreadcrumbLink href="/contact">Contact</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Contact Us</h1>
      </div>
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ContactPage;
