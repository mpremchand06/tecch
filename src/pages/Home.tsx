import React, { useLayoutEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import About from '../components/About';
import Founder from '../components/Founder';
import Technologies from '../components/Technologies';
import Events from '../components/Events';
import Gallery from '../components/Gallery';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Technologies />
      <Founder />
      <Team />
      <Events />
      <Gallery />
      <Team />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;