import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section bg-dark-800">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle 
            title="Sobre a 1% World" 
            center
            light
          />
          
          <motion.div
            className="relative py-8 px-5 md:px-10 rounded-xl bg-dark-900"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Decorative Quotes */}
            <div className="absolute hidden md:block top-6 left-6 text-4xl md:text-5xl text-gold-500 opacity-30 font-serif select-none pointer-events-none z-0">"</div>
            <div className="absolute hidden md:block bottom-6 right-6 text-4xl md:text-5xl text-gold-500 opacity-30 font-serif rotate-180 select-none pointer-events-none z-0">"</div>
            
            <div className="relative z-10">
              <p className="text-xl md:text-2xl font-poppins text-white leading-relaxed mb-8">
                A 1% World nasceu para reunir os talentos que moldam o futuro. Rumo aos 1% que transformam o mundo com tecnologia, vendas e inovação.
              </p>

              <div className="h-1 w-24 bg-gradient-button mx-auto my-8 rounded-full"></div>
              
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