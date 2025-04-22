import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import TestimonialCard from '../ui/TestimonialCard';
import { TESTIMONIALS } from '../../utils/constants';

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="section bg-white">
      <div className="container">
        <SectionTitle
          title="Histórias de Sucesso"
          subtitle="Conheça quem já está transformando resultados com a 1% World"
          center
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              avatar={testimonial.avatar}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;