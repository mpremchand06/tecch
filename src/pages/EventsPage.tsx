import React, { useLayoutEffect } from 'react';
import Events from '../components/Events';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';

const EventsPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-neo-black pt-20">
      <Events />
      <Gallery />
      <Contact />
    </div>
  );
};

export default EventsPage;