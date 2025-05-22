
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Research', href: '/research' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
  ];
  
  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/80 shadow-sm backdrop-blur-sm py-3 border-b border-gray-100'
          : 'bg-transparent py-5'
          
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className={`text-xl md:text-2xl font-bold ${isScrolled ? 'text-gray-800' : 'text-white'} font-sans`}>
          HimaDIE<span className={`${isScrolled ? 'text-gray-600' : 'text-white'} font-light`}>Com</span>
          </Link>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map(item => (
            <Link
              key={item.name}
              to={item.href}
              className={`${
                isScrolled ? 'text-black' : 'text-gray-300'
              } hover:text-red-600 font-medium transition-colors border-b-2 border-transparent hover:border-red-600 py-2`}
            >
              {item.name}
            </Link>
          ))}
          <Link to="/contact">
            <Button className="ml-4  rounded-xl bg-[#BC0000] hover:bg-red-700">Get Involved</Button>
          </Link>
        </nav>
        
        <div className="lg:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-6 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map(item => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-blue-600 py-2 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full">Get Involved</Button>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
