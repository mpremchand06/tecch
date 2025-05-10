import React, { useLayoutEffect } from 'react';
import About from '../components/About';
import Founder from '../components/Founder';
import Team from '../components/Team';
import Contact from '../components/Contact';

const AboutPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-neo-black pt-20">
      <About />
      <Founder />
      <Team />
      <Contact />
    </div>
  );
};

export default AboutPage;