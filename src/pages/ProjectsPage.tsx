import React, { useLayoutEffect } from 'react';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const ProjectsPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-neo-black pt-20">
      <Projects />
      <Contact />
    </div>
  );
};

export default ProjectsPage;