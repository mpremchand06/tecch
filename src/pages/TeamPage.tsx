import React, { useLayoutEffect } from 'react';
import Team from '../components/Team';
import Contact from '../components/Contact';

const TeamPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-neo-black pt-20">
      <Team />
      <Contact />
    </div>
  );
};

export default TeamPage;