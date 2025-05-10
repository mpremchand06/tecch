import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import GlitchText from './effects/GlitchText';
import { Code, Database, Cloud, Server, Github as Git, Globe } from 'lucide-react';

interface HexTech {
  icon: JSX.Element;
  name: string;
  description: string;
  color: string;
}

const Technologies = () => {
  const [activeHex, setActiveHex] = useState<number | null>(null);
  const hexGridRef = useRef<HTMLDivElement>(null);
  
  const technologies: HexTech[] = [
    {
      icon: <Code className="h-8 w-8" />,
      name: 'Frontend',
      description: 'React, Vue.js, Angular, TypeScript, and modern frontend frameworks for building responsive web applications.',
      color: 'text-neo-blue-100'
    },
    {
      icon: <Server className="h-8 w-8" />,
      name: 'Backend',
      description: 'Node.js, Python, Java, and .NET for building scalable server-side applications.',
      color: 'text-neo-green-100'
    },
    {
      icon: <Database className="h-8 w-8" />,
      name: 'Databases',
      description: 'PostgreSQL, MongoDB, Redis, and other modern database solutions for data management.',
      color: 'text-neo-purple-100'
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      name: 'Cloud Services',
      description: 'AWS, Azure, and Google Cloud Platform for scalable cloud infrastructure.',
      color: 'text-neo-green-100'
    },
    {
      icon: <Git className="h-8 w-8" />,
      name: 'Version Control',
      description: 'Git, GitHub, GitLab for efficient code management and collaboration.',
      color: 'text-neo-blue-100'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      name: 'DevOps',
      description: 'Docker, Kubernetes, Jenkins for continuous integration and deployment.',
      color: 'text-neo-purple-100'
    },
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (activeHex === null) {
        setActiveHex(0);
      } else {
        setActiveHex((prev) => (prev! + 1) % technologies.length);
      }
    }, 3000);
    
    return () => clearInterval(interval);
  }, [activeHex, technologies.length]);
  
  const handleHexClick = (index: number) => {
    setActiveHex(index);
  };
  
  return (
    <section id="tech" className="py-20 relative bg-neo-dark overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-2">
            <code className="text-xs bg-neo-purple-100 bg-opacity-10 text-neo-purple-100 px-2 py-1 rounded-sm">
              $ ./tech --display-stack
            </code>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-vt323 mb-4">
            <GlitchText 
              text="TECH STACK" 
              className="text-white text-shadow-neon-blue"
              intensity="low"
            />
          </h2>
          
          <p className="max-w-2xl mx-auto text-gray-400 font-code">
            Our technology stack is carefully chosen to deliver robust, 
            scalable, and maintainable solutions for our clients.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="w-full lg:w-3/5 mb-10 lg:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="hex-grid flex flex-wrap justify-center" ref={hexGridRef}>
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  className={`hexagon relative w-24 h-24 md:w-28 md:h-28 m-2 flex items-center justify-center bg-neo-black
                              ${activeHex === index ? `neon-border-${tech.color.split('-')[2]}` : 'border border-gray-800'} 
                              cursor-pointer transition-all duration-300`}
                  onClick={() => handleHexClick(index)}
                  whileHover={{ scale: 1.05 }}
                  animate={{ 
                    scale: activeHex === index ? 1.1 : 1,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className={`${tech.color} ${activeHex === index ? 'animate-pulse-glow' : ''}`}>
                    {tech.icon}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-2/5 lg:pl-10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {activeHex !== null && (
              <div className="bg-neo-black p-6 rounded-sm neon-border-blue">
                <div className="flex items-center mb-4">
                  <div className={`mr-3 ${technologies[activeHex].color}`}>
                    {technologies[activeHex].icon}
                  </div>
                  <h3 className="font-vt323 text-2xl text-white">
                    {technologies[activeHex].name}
                  </h3>
                </div>
                
                <p className="font-code text-gray-400">
                  {technologies[activeHex].description}
                </p>
                
                <div className="mt-6 font-code text-xs text-gray-500">
                  <div className="flex items-center">
                    <span className="mr-2 inline-block w-2 h-2 bg-neo-green-100 rounded-full animate-pulse"></span>
                    Implementation: 100%
                  </div>
                  <div className="flex items-center mt-1">
                    <span className="mr-2 inline-block w-2 h-2 bg-neo-blue-100 rounded-full animate-pulse"></span>
                    Integration: Active
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-800">
                  <a href="#contact" className="font-vt323 text-neo-blue-100 flex items-center group">
                    &gt;_REQUEST_DETAILS
                    <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
                      &#x2192;
                    </span>
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;