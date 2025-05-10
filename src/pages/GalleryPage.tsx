import React, { useLayoutEffect } from 'react';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';

const GalleryPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-neo-black pt-20">
      <Gallery />
      <Contact />
    </div>
  );
};

export default GalleryPage;