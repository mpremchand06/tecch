import React, { useLayoutEffect } from 'react';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const TestimonialsPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-neo-black pt-20">
      <Testimonials />
      <Contact />
    </div>
  );
};

export default TestimonialsPage;