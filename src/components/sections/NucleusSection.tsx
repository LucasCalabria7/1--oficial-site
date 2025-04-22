import React from 'react';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { LINKS } from '../../utils/constants';
import { Instagram, DollarSign, Code } from 'lucide-react';

const NucleusSection: React.FC = () => {
  return (
    <section id="nucleus" className="section bg-dark-800">
      <div className="container">
        <SectionTitle
          title="Núcleos da 1% World"
          subtitle="Conheça nossos núcleos especializados que impulsionam talentos e negócios para o topo global"
          center
          light
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Sales Nucleus */}
          <motion.div
            id="sales-nucleus"
            className="bg-dark-900 rounded-lg p-8 border border-gold-500/20"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center mb-6">
                <div className="bg-gold-500/10 p-3 rounded-lg mr-4">
                  <DollarSign className="h-8 w-8 text-gold-500" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-white">1% World Vendas</h3>
              </div>
              
              <p className="text-gray-300 mb-6">
                Estruturamos produtos digitais únicos no mercado (SaaS) para alcançar o sucesso comercial global. 
                Nossas metodologias, estratégias e produtos transformam especialistas em líderes do mercado internacional 
                através de recorrência e margem de lucro.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-dark-800/50 p-4 rounded-lg border border-gold-500/10">
                  <h4 className="font-semibold text-gold-500 mb-2">Estratégias</h4>
                  <p className="text-sm text-gray-400">Desenvolvimento de ofertas irrecusáveis para produtos exclusivos (SaaS e Micro-SaaS) além de funis de vendas de alta conversão</p>
                </div>
                <div className="bg-dark-800/50 p-4 rounded-lg border border-gold-500/10">
                  <h4 className="font-semibold text-gold-500 mb-2">Mentoria</h4>
                  <p className="text-sm text-gray-400">Acesso ao conhecimento prático de experts com resultados comprovados. Crie seus próprios produtos que escalam globalmente</p>
                </div>
              </div>
              
              <div className="mt-auto space-y-4">
                <Button className="w-full" href={LINKS.INSTAGRAM_THALES} external icon={<Instagram size={18} />}>
                  Instagram Thales Marinho
                </Button>
                <div className="grid grid-cols-2 gap-4">
                  <Button href={LINKS.SALES_FUNNEL} variant="outline" external>
                    1% World Vendas
                  </Button>
                  <Button href={LINKS.SALES_CHEAP_PRODUCT} variant="outline" external>
                    Seja um Associate
                  </Button>
                </div>
                <Button href={LINKS.SALES_EXPENSIVE_PRODUCT} variant="primary" external fullWidth>
                  CEO's Vendas
                </Button>
              </div>
            </div>
          </motion.div>
          
          {/* Technology Nucleus */}
          <motion.div
            id="tech-nucleus"
            className="bg-dark-900 rounded-lg p-8 border border-gold-500/20"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center mb-6">
                <div className="bg-gold-500/10 p-3 rounded-lg mr-4">
                  <Code className="h-8 w-8 text-gold-500" strokeWidth={2} />
                </div>
                <h3 className="text-2xl font-bold text-white">1% World Tecnologia</h3>
              </div>
              
              <p className="text-gray-300 mb-6">
                Criamos um ecossistema voltado para o desenvolvimento de SaaS e Micro-SaaS globais e de alta performance. 
                Democratizamos o acesso à inovação, transformando conhecimento em negócios digitais capazes de gerar 
                valor internacional.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-dark-800/50 p-4 rounded-lg border border-gold-500/10">
                  <h4 className="font-semibold text-gold-500 mb-2">Inovação</h4>
                  <p className="text-sm text-gray-400">Metodologias únicas para identificação de problema e desenvolvimento de soluções escaláveis globalmente</p>
                </div>
                <div className="bg-dark-800/50 p-4 rounded-lg border border-gold-500/10">
                  <h4 className="font-semibold text-gold-500 mb-2">Comunidade</h4>
                  <p className="text-sm text-gray-400">Rede de profissionais de tecnologia focados em resultados extraordinários. Suporte exclusivo e crescimento em conjunto</p>
                </div>
              </div>
              
              <div className="mt-auto space-y-4">
                <Button className="w-full" href={LINKS.INSTAGRAM_CALABRIA} external icon={<Instagram size={18} />}>
                  Instagram Lucas Calabria
                </Button>
                <div className="grid grid-cols-2 gap-4">
                  <Button href={LINKS.TECH_FUNNEL} variant="outline" external>
                    1% World Tecnologia
                  </Button>
                  <Button href={LINKS.TECH_CHEAP_PRODUCT} variant="outline" external>
                    Seja um Dev do Futuro
                  </Button>
                </div>
                <Button href={LINKS.TECH_EXPENSIVE_PRODUCT} variant="primary" external fullWidth>
                  CEO's Tecnologia
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NucleusSection;