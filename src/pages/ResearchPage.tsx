
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Research from '@/components/Research';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Home } from 'lucide-react';

const ResearchPage = () => {
  useEffect(() => {
    document.title = "Research Areas - Research Institute";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Research />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ResearchPage;
