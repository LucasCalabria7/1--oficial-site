import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const HeroSection: React.FC = () => {
  const scrollToNucleus = (section: string) => {
    const element = document.querySelector(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      mode: "snap",
      slides: { perView: 1 },
      defaultAnimation: {
        duration: 1000
      },
      renderMode: "performance"
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 4000);
        }
        
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  const slides = [
    {
      subtitle: "Para Empresas",
      heading: "Escale suas vendas com nosso exército de afiliados",
      features: [
        "+1000 afiliados altamente treinados",
        "sem precisar investir em anúncios",
        "escale globalmente"
      ]
    },
    {
      subtitle: "Para Vendedores Globais",
      heading: "Venda os melhores produtos com recorrência global",
      features: [
        "Produtos Globais",
        "Recorrência em qualquer moeda",
        "Melhores estratégias do mercado"
      ]
    }
  ];

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
          <div ref={sliderRef} className="keen-slider">
            {slides.map((slide, index) => (
              <div key={index} className="keen-slider__slide flex flex-col justify-center min-h-[400px]">
                <div className="mb-16">
                  <motion.h3
                    className="text-primary-300 text-xl md:text-2xl font-medium mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    {slide.subtitle}
                  </motion.h3>
                  <motion.h1
                    className="text-white"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {slide.heading}
                  </motion.h1>
                </div>
                
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-200 text-lg md:text-xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {slide.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-center">
                      <span className="text-primary-300 mr-3 text-2xl md:text-3xl">✓</span>
                      {feature}
                    </div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              onClick={() => scrollToNucleus('#tech-nucleus')}
              variant="primary"
            >
              Conheça nosso núcleo de tecnologia
            </Button>
            <Button 
              onClick={() => scrollToNucleus('#sales-nucleus')}
              variant="outline"
            >
              Conheça nosso núcleo de vendas
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