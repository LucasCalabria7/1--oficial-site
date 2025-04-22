import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import FAQItem from '../ui/FAQItem';
import { FAQ_ITEMS } from '../../utils/constants';

const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="section bg-gray-50">
      <div className="container">
        <SectionTitle
          title="Perguntas Frequentes"
          subtitle="Tire suas dúvidas sobre a 1% World e como podemos ajudar você"
          center
        />
        
        <div className="max-w-3xl mx-auto">
          {FAQ_ITEMS.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;