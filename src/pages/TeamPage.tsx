
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Team from '@/components/Team';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Home } from 'lucide-react';

const TeamPage = () => {
  useEffect(() => {
    document.title = "Our Team - Research Institute";
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
              <BreadcrumbLink href="/team">Team</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Our Team</h1>
      </div>
      <Team />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default TeamPage;
