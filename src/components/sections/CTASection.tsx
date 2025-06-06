import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { LINKS } from '../../utils/constants';
import { Crown as WhatsApp } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-dark">
      <div className="absolute inset-0 opacity-10 z-0">
        <svg width="100%" height="100%">
          <pattern
            id="pattern-circles"
            x="0"
            y="0"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
            patternContentUnits="userSpaceOnUse"
          >
            <circle id="pattern-circle" cx="10" cy="10" r="2" fill="#FFF"></circle>
          </pattern>
          <rect
            id="rect"
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#pattern-circles)"
          ></rect>
        </svg>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Pronto para fazer parte do <span className="text-primary-300">1%</span> que transforma o mundo?
          </motion.h2>
          
          <motion.p
            className="text-gray-200 text-lg md:text-xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Junte-se ao maior ecossistema de SaaS e Micro-SaaS e comece sua jornada
            rumo ao topo. Conteúdos únicos, conexões valiosas e oportunidades imperdíveis
            esperam por você.
          </motion.p>
          
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href={LINKS.WHATSAPP_TECH}
                size="lg"
                external
                className="whitespace-nowrap"
                icon={<WhatsApp size={18} />}
              >
                Grupo Exclusivo 1% Tecnologia
              </Button>
              <Button 
                href={LINKS.WHATSAPP_SALES}
                size="lg"
                external
                className="whitespace-nowrap"
                icon={<WhatsApp size={18} />}
              >
                Grupo Exclusivo 1% Vendas
              </Button>
            </div>

            <p className="text-white text-lg font-medium">Ficou alguma dúvida?</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href={LINKS.WHATSAPP_EXPERT_TECH}
                variant="outline"
                external
              >
                Converse com um Especialista em Tecnologia
              </Button>
              <Button 
                href={LINKS.WHATSAPP_EXPERT_SALES}
                variant="outline"
                external
              >
                Converse com um Especialista em Vendas
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;