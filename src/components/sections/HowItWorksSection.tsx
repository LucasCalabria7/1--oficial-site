import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import SectionTitle from '../ui/SectionTitle';

const HowItWorksSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const [companySliderRef] = useKeenSlider({
    initial: 0,
    slides: { perView: 1 },
    renderMode: "performance"
  });

  const [sellerSliderRef] = useKeenSlider({
    initial: 0,
    slides: { perView: 1 },
    renderMode: "performance"
  });

  const tabs = [
    { id: 0, title: "Para empresas" },
    { id: 1, title: "Para vendedores globais" }
  ];

  const companySlides = [
    {
      title: "Insira detalhes sobre seu produto em nossa plataforma.",
      content: (
        <div className="grid gap-4 w-full">
          <div className="flex justify-between items-center p-4 bg-dark-900/50 rounded-lg border border-primary-300/10">
            <span className="text-gray-300">Título do Produto</span>
            <span className="text-primary-300 font-semibold">AgentAI - Seu SDR com IA</span>
          </div>
          <div className="flex justify-between items-center p-4 bg-dark-900/50 rounded-lg border border-primary-300/10">
            <span className="text-gray-300">Preço</span>
            <span className="text-primary-300 font-semibold">R$ 297,00/mês</span>
          </div>
          <div className="flex justify-between items-center p-4 bg-dark-900/50 rounded-lg border border-primary-300/10">
            <span className="text-gray-300">Comissão</span>
            <span className="text-primary-300 font-semibold">50%</span>
          </div>
        </div>
      )
    },
    {
      title: "Apresente seu produto para nossos vendedores globais.",
      content: (
        <div className="grid gap-4 w-full">
          <div className="flex justify-between items-center p-4 bg-dark-900/50 rounded-lg border border-primary-300/10">
            <span className="text-gray-300">Pitch de Apresentação</span>
            <span className="text-primary-300 font-semibold">Vídeo do que te torna único</span>
          </div>
          <div className="flex justify-between items-center p-4 bg-dark-900/50 rounded-lg border border-primary-300/10">
            <span className="text-gray-300">Arquivos de compartilhamento</span>
            <span className="text-primary-300 font-semibold">Criativos validados</span>
          </div>
          <div className="flex justify-between items-center p-4 bg-dark-900/50 rounded-lg border border-primary-300/10">
            <span className="text-gray-300">Dados de compartilhamento</span>
            <span className="text-primary-300 font-semibold">Métricas já analisadas</span>
          </div>
        </div>
      )
    },
    {
      title: "Integração com seu financeiro",
      content: (
        <div className="grid gap-4 w-full">
          <div className="flex justify-between items-center p-4 bg-dark-900/50 rounded-lg border border-primary-300/10">
            <span className="text-gray-300">Integração com sua gateway</span>
            <span className="text-primary-300 font-semibold">Utilize a sua ou a nossa</span>
          </div>
          <div className="flex justify-between items-center p-4 bg-dark-900/50 rounded-lg border border-primary-300/10">
            <span className="text-gray-300">Projeção de monetização</span>
            <span className="text-primary-300 font-semibold">Veja até onde seu faturamento pode chegar</span>
          </div>
          <div className="flex justify-between items-center p-4 bg-dark-900/50 rounded-lg border border-primary-300/10">
            <span className="text-gray-300">Gamifique seus ganhos</span>
            <span className="text-primary-300 font-semibold">Aumentar faturamento de uma forma única</span>
          </div>
        </div>
      )
    }
  ];

  const sellerSlides = [
    {
      title: "Descubra produtos de tecnologia e recorrência",
      content: (
        <div className="grid gap-4 w-full">
          <div className="flex justify-between items-center p-4 bg-dark-900/50 rounded-lg border border-primary-300/10">
            <span className="text-gray-300">Recorrência</span>
            <span className="text-primary-300 font-semibold">Construa uma renda sólida e previsível</span>
          </div>
          <div className="flex justify-between items-center p-4 bg-dark-900/50 rounded-lg border border-primary-300/10">
            <span className="text-gray-300">Globalização</span>
            <span className="text-primary-300 font-semibold">Venda para qualquer lugar do mundo</span>
          </div>
          <div className="flex justify-between items-center p-4 bg-dark-900/50 rounded-lg border border-primary-300/10">
            <span className="text-gray-300">Estrutura</span>
            <span className="text-primary-300 font-semibold">Monte sua própria estrutura digital</span>
          </div>
        </div>
      )
    },
    {
      title: "Crie seu próprio império e seja um criador de produtos",
      content: (
        <div className="grid gap-4 w-full">
          <div className="flex justify-between items-center p-4 bg-dark-900/50 rounded-lg border border-primary-300/10">
            <span className="text-gray-300">Transformação</span>
            <span className="text-primary-300 font-semibold">Tenha seu próprio projeto além de vender outros validados</span>
          </div>
          <div className="flex justify-between items-center p-4 bg-dark-900/50 rounded-lg border border-primary-300/10">
            <span className="text-gray-300">Mentoria</span>
            <span className="text-primary-300 font-semibold">Suporte completo desde estratégia até monetização</span>
          </div>
          <div className="flex justify-between items-center p-4 bg-dark-900/50 rounded-lg border border-primary-300/10">
            <span className="text-gray-300">Produtos diversos</span>
            <span className="text-primary-300 font-semibold">Micro-SaaS, SaaS, Agentes de IA, escolha o que mais se identifica</span>
          </div>
        </div>
      )
    },
    {
      title: "Comunidade única e exclusiva focada em resultados e crescimento conjunto",
      content: (
        <div className="w-full bg-gradient-to-br from-dark-800 to-dark-900/50 rounded-xl p-8 border border-primary-300/20">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="text-primary-300 text-2xl font-bold mb-2">1000+</div>
              <div className="text-gray-300">Membros Ativos</div>
            </div>
            <div className="text-center p-4">
              <div className="text-primary-300 text-2xl font-bold mb-2">24/7</div>
              <div className="text-gray-300">Suporte Dedicado</div>
            </div>
            <div className="text-center p-4">
              <div className="text-primary-300 text-2xl font-bold mb-2">50+</div>
              <div className="text-gray-300">Países</div>
            </div>
            <div className="text-center p-4">
              <div className="text-primary-300 text-2xl font-bold mb-2">100+</div>
              <div className="text-gray-300">Mentorias Realizadas</div>
            </div>
            <div className="text-center p-4">
              <div className="text-primary-300 text-2xl font-bold mb-2">R$1M+</div>
              <div className="text-gray-300">GMV Mensal</div>
            </div>
            <div className="text-center p-4">
              <div className="text-primary-300 text-2xl font-bold mb-2">10+</div>
              <div className="text-gray-300">Eventos Anuais</div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="section bg-dark-900 overflow-hidden">
      <div className="container">
        <SectionTitle
          title="Como Funciona"
          subtitle="Veja como é fácil começar a vender com a 1% World"
          center
          light
        />
        
        <div className="relative mt-12">
          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-dark-800 rounded-lg p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    px-6 py-3 rounded-md text-sm font-medium transition-all duration-200
                    ${activeTab === tab.id
                      ? 'bg-gradient-button text-white shadow-lg'
                      : 'text-gray-400 hover:text-white'
                    }
                  `}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>

          {/* Company Slider */}
          {activeTab === 0 && (
            <div ref={companySliderRef} className="keen-slider min-h-[500px]">
              {companySlides.map((slide, index) => (
                <div key={index} className="keen-slider__slide">
                  <div className="flex flex-col items-center text-center px-4 h-full">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                      {slide.title}
                    </h3>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="w-full px-4 md:px-8 lg:px-12"
                    >
                      {slide.content}
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Seller Slider */}
          {activeTab === 1 && (
            <div ref={sellerSliderRef} className="keen-slider min-h-[500px]">
              {sellerSlides.map((slide, index) => (
                <div key={index} className="keen-slider__slide">
                  <div className="flex flex-col items-center text-center px-4 h-full">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                      {slide.title}
                    </h3>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="w-full px-4 md:px-8 lg:px-12"
                    >
                      {slide.content}
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;