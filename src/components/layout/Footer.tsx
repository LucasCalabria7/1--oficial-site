import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../ui/Logo';
import { Instagram } from 'lucide-react';
import { LINKS } from '../../utils/constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <Logo variant="light" />
            <p className="mt-4 text-gray-300 max-w-xs">
              Impulsionando talentos e negócios para o topo 1% global com tecnologia, vendas e inovação.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4 font-poppins">Núcleos</h4>
            <ul className="space-y-2">
              <li>
                <a href={LINKS.TECH_FUNNEL} className="text-gray-300 hover:text-primary-300 transition-colors" target="_blank" rel="noopener noreferrer">
                  1% World Tecnologia
                </a>
              </li>
              <li>
                <a href={LINKS.SALES_FUNNEL} className="text-gray-300 hover:text-primary-300 transition-colors" target="_blank" rel="noopener noreferrer">
                  1% World Vendas
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4 font-poppins">Founders</h4>
            <div className="space-y-4">
              <a
                href={LINKS.INSTAGRAM_CALABRIA}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-primary-300 transition-colors"
              >
                <Instagram className="h-5 w-5 mr-2" />
                Lucas Calabria
              </a>
              <a
                href={LINKS.INSTAGRAM_THALES}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-primary-300 transition-colors"
              >
                <Instagram className="h-5 w-5 mr-2" />
                Thales Marinho
              </a>
            </div>
          </div>
        </div>
        
        <motion.div 
          className="pt-8 border-t border-dark-800 text-center text-gray-400 text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p>&copy; {currentYear} 1% World - Todos os direitos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;