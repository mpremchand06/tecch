import { motion } from 'framer-motion';
import { Code, Cloud, Database, Layout, Settings, Users } from 'lucide-react';
import GlitchText from './effects/GlitchText';

const Services = () => {
  const services = [
    {
      icon: <Code className="h-12 w-12 text-neo-blue-100" />,
      title: 'Custom Software',
      description: 'Tailored software solutions designed to meet your specific business requirements and objectives.',
      color: 'neo-blue',
    },
    {
      icon: <Cloud className="h-12 w-12 text-neo-green-100" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services for optimal performance and reliability.',
      color: 'neo-green',
    },
    {
      icon: <Database className="h-12 w-12 text-neo-purple-100" />,
      title: 'Data Analytics',
      description: 'Transform your raw data into actionable insights with our advanced analytics solutions.',
      color: 'neo-purple',
    },
    {
      icon: <Layout className="h-12 w-12 text-neo-green-100" />,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      color: 'neo-green',
    },
    {
      icon: <Settings className="h-12 w-12 text-neo-blue-100" />,
      title: 'DevOps',
      description: 'Streamline your development and operations with our automated CI/CD pipelines.',
      color: 'neo-blue',
    },
    {
      icon: <Users className="h-12 w-12 text-neo-purple-100" />,
      title: 'IT Consulting',
      description: 'Expert guidance to help you make informed decisions about your technology stack.',
      color: 'neo-purple',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const serviceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    },
  };

  return (
    <section id="services" className="py-20 relative bg-neo-dark overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-2">
            <code className="text-xs bg-neo-green-100 bg-opacity-10 text-neo-green-100 px-2 py-1 rounded-sm">
              $ ./services --list-all
            </code>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-vt323 mb-4">
            <GlitchText 
              text="OUR SERVICES" 
              className="text-white text-shadow-neon-green"
              intensity="low"
            />
          </h2>
          
          <p className="max-w-2xl mx-auto text-gray-400 font-code">
            We deliver cutting-edge software solutions that drive innovation and 
            business growth. Our services are designed to help you stay ahead in 
            the digital landscape.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`service-card bg-neo-black p-6 rounded-sm neon-border-${service.color} hover:bg-gradient-to-b hover:from-transparent hover:to-${service.color}-300 hover:to-opacity-5 transition-all duration-500`}
              variants={serviceVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="mb-4">{service.icon}</div>
              
              <h3 className={`font-vt323 text-${service.color}-100 text-2xl mb-3`}>
                {service.title}
              </h3>
              
              <p className="text-gray-400 font-code text-sm">
                {service.description}
              </p>
              
              <div className="mt-6 flex items-center">
                <a href="#contact" className={`font-vt323 text-${service.color}-100 flex items-center text-sm group`}>
                  &gt;_LEARN_MORE
                  <span className={`ml-2 transform transition-transform duration-300 group-hover:translate-x-1 text-${service.color}-100`}>
                    &#x2192;
                  </span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;