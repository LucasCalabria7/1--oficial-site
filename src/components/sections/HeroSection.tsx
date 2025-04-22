import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  const scrollToNucleus = (section: string) => {
    const element = document.querySelector(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 bg-gradient-dark overflow-hidden"
    >
      {/* Background Globe Effect */}
      <div className="absolute inset-0 opacity-5">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 800 800"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" stroke="#FFFFFF" strokeWidth="1">
            <circle cx="400" cy="400" r="300" />
            <circle cx="400" cy="400" r="250" />
            <circle cx="400" cy="400" r="200" />
            <circle cx="400" cy="400" r="150" />
            <path d="M400,100 C530,100 650,220 650,350 C650,480 550,550 400,550 C250,550 150,480 150,350 C150,220 270,100 400,100 Z" />
            <path d="M100,400 C100,270 220,150 350,150 C480,150 550,250 550,400 C550,550 480,650 350,650 C220,650 100,530 100,400 Z" />
          </g>
        </svg>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Seja a Diferença com <span className="text-gold-500">1%</span> que transforma o mundo.
          </motion.h1>
          
          <motion.p
            className="text-gray-200 text-lg md:text-xl mb-8 md:mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Construa sua história com inovação, tecnologia e vendas em um dos ecossistemas mais exclusivos do mercado digital. 
            Estratégias exclusivas que apenas o topo 1% conhece e aplica.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button 
              onClick={() => scrollToNucleus('#tech-nucleus')}
            >
              Conheça o Núcleo Tecnologia
            </Button>
            <Button 
              onClick={() => scrollToNucleus('#sales-nucleus')}
              variant="outline"
            >
              Conheça o Núcleo Vendas
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Animated Gradient Effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-dark-900 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
    </section>
  );
};

export default HeroSection;