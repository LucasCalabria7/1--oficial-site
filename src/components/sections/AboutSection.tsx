import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const AboutSection: React.FC = () => {
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
      title: "Comece com R$0 de investimento",
      description: "Primeiro nossos associados vendem para você, depois você os paga através de comissão sobre as vendas. Aproveite de um canal de vendas automático e global!"
    },
    {
      subtitle: "Para Vendedores Globais",
      title: "Conheça os melhores produtos globais do mercado",
      description: "Inovação, recorrência e inteligência artificial. Conheça o mundo da tecnologia atrelado à vendas e monetize em qualquer lugar do mundo!"
    }
  ];

  return (
    <section id="about" className="section bg-dark-800">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <div ref={sliderRef} className="keen-slider">
            {slides.map((slide, index) => (
              <div key={index} className="keen-slider__slide flex flex-col justify-center min-h-[400px] space-y-16">
                <div className="space-y-6">
                  <motion.h3
                    className="text-primary-300 text-xl md:text-2xl font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    {slide.subtitle}
                  </motion.h3>
                  
                  <motion.h2
                    className="text-white text-4xl md:text-5xl lg:text-6xl font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {slide.title}
                  </motion.h2>
                </div>
                
                <motion.p
                  className="text-xl md:text-2xl font-poppins text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {slide.description}
                </motion.p>
              </div>
            ))}
          </div>
          
          <motion.div
            className="relative py-8 px-5 md:px-10 rounded-xl bg-dark-900 mt-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Decorative Quotes */}
            <div className="absolute hidden md:block top-6 left-6 text-4xl md:text-5xl text-primary-300 opacity-30 font-serif select-none pointer-events-none z-0">"</div>
            <div className="absolute hidden md:block bottom-6 right-6 text-4xl md:text-5xl text-primary-300 opacity-30 font-serif rotate-180 select-none pointer-events-none z-0">"</div>
            
            <div className="relative z-10">
              <p className="text-lg text-gray-300">
                Somos um ecossistema global que impulsiona mentes visionárias a construir negócios digitais de alto impacto através da tecnologia e do marketing de elite. 
                Acreditamos que com o conhecimento certo, mentorias de qualidade e uma comunidade de alto nível, qualquer pessoa pode alcançar resultados excepcionais.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;