
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
      <Team />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default TeamPage;
