import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import { LINKS } from '../../utils/constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre', href: '#about' },
    { name: 'Núcleos', href: '#nucleus' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];
  
  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-900 shadow-lg py-3' : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex justify-between items-center">
        <Logo variant="light" />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="font-medium text-gray-300 hover:text-gold-500 transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          
          <Button
            href={LINKS.WHATSAPP_TECH}
            variant="primary"
            size="sm"
            external
          >
            Junte-se a Nós
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? (
            <X className="h-6 w-6 text-gold-500" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-dark-900 z-40 flex flex-col"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container h-full flex flex-col pt-24 pb-8">
                <nav className="flex-grow">
                  <ul className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-xl font-medium text-gray-300 hover:text-gold-500 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
                
                <div className="mt-8 space-y-4">
                  <Button
                    href={LINKS.WHATSAPP_TECH}
                    variant="primary"
                    fullWidth
                    external
                  >
                    Grupo Tecnologia
                  </Button>
                  <Button
                    href={LINKS.WHATSAPP_SALES}
                    variant="outline"
                    fullWidth
                    external
                  >
                    Grupo Vendas
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;