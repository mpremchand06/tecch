import React, { useLayoutEffect } from 'react';
import Services from '../components/Services';
import Technologies from '../components/Technologies';
import Contact from '../components/Contact';

const ServicesPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-neo-black pt-20">
      <Services />
      <Technologies />
      <Contact />
    </div>
  );
};

export default ServicesPage;