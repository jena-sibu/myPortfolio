import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, ExternalLink, Code, Database, Cloud, Cpu, Monitor, Server } from 'lucide-react';
import Profile from './assets/profile.jpg'

const App = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'Java', icon: <Code className="w-6 h-6" />, category: 'Backend' },
    { name: 'Spring Boot', icon: <Server className="w-6 h-6" />, category: 'Backend' },
    { name: 'JDBC', icon: <Database className="w-6 h-6" />, category: 'Backend' },
    { name: 'HTML', icon: <Monitor className="w-6 h-6" />, category: 'Frontend' },
    { name: 'CSS', icon: <Monitor className="w-6 h-6" />, category: 'Frontend' },
    { name: 'JavaScript', icon: <Code className="w-6 h-6" />, category: 'Frontend' },
    { name: 'Angular', icon: <Monitor className="w-6 h-6" />, category: 'Frontend' },
    { name: 'MLUP', icon: <Cpu className="w-6 h-6" />, category: 'AI/ML' },
    { name: 'Cloud', icon: <Cloud className="w-6 h-6" />, category: 'DevOps' },
    { name: 'Jenkins', icon: <Server className="w-6 h-6" />, category: 'DevOps' },
    { name: 'Kubernetes', icon: <Server className="w-6 h-6" />, category: 'DevOps' },
    { name: 'Docker', icon: <Server className="w-6 h-6" />, category: 'DevOps' }
  ];

  const projects = [
    {
      title: 'Complete CI/CD Pipeline',
      description: 'Built a comprehensive CI/CD pipeline for automated deployment of web applications. Implemented continuous integration, automated testing, and deployment workflows using industry-standard DevOps practices.',
      technologies: ['Jenkins', 'Docker', 'Kubernetes', 'Git', 'CI/CD'],
      type: 'DevOps Project'
    },
    {
      title: 'Smart Library Management System',
      description: 'A comprehensive library management system built with Java, JDBC, and Swing. Features include book inventory management, user registration, borrowing/returning books, and automated fine calculations.',
      technologies: ['Java', 'JDBC', 'Swing', 'MySQL'],
      type: 'Desktop Application'
    },
    {
      title: 'Movie Recommendation System',
      description: 'An intelligent movie recommendation system using machine learning algorithms. Built with Python and deployed with Streamlit for an interactive web interface.',
      technologies: ['Python', 'Jupyter Notebook', 'NumPy', 'Pandas', 'Streamlit'],
      type: 'ML/AI Project'
    },
    {
      title: 'Alarm Clock Application',
      description: 'A feature-rich alarm clock application developed in Java with customizable alarms, snooze functionality, and multiple alarm tones.',
      technologies: ['Java', 'Swing', 'Java Sound API'],
      type: 'Desktop Application'
    }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Jayadev Jena
            </div>
            <div className="hidden md:flex space-x-8">
              {['about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-blue-400 ${
                    activeSection === section ? 'text-blue-400 border-b-2 border-blue-400' : 'text-white/70'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-20 pb-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Jayadev Jena
                </h1>
                <p className="text-xl md:text-2xl text-blue-300 font-medium">
                  MCA Student & Full Stack Developer
                </p>
              </div>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Passionate MCA student with expertise in full-stack development and emerging technologies. 
                Skilled in Java ecosystem, cloud technologies, and modern frontend frameworks. 
                Currently exploring machine learning and DevOps to build scalable, intelligent applications.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="mailto:jayadevj01@gmail.com"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                >
                  <Mail className="w-5 h-5" />
                  Get In Touch
                </a>
                <a 
                  href="https://github.com/jena-sibu"
                  className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                >
                  <Github className="w-5 h-5" />
                  View Projects
                </a>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <img 
                  src={Profile}
                  alt="Jayadev Jena"
                  className="relative w-80 h-80 object-cover rounded-full border-4 border-white/20 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {['Backend', 'Frontend', 'AI/ML', 'DevOps'].map((category) => (
              <div key={category} className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50">
                <h3 className="text-xl font-semibold text-blue-300 mb-4">{category}</h3>
                <div className="space-y-3">
                  {skills.filter(skill => skill.category === category).map((skill) => (
                    <div key={skill.name} className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-300">
                      <div className="text-blue-400">{skill.icon}</div>
                      <span className="text-gray-200">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
                <div className="mb-4">
                  <span className="text-xs font-medium text-blue-400 bg-blue-400/20 px-2 py-1 rounded-full">
                    {project.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          
          <p className="text-xl text-gray-300 mb-12">
            Ready to collaborate on exciting projects or discuss opportunities? Let's get in touch!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <a 
              href="mailto:jayadevj01@gmail.com"
              className="flex flex-col items-center gap-4 p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-8 h-8 text-blue-400" />
              <div>
                <h3 className="text-lg font-semibold text-white">Email</h3>
                <p className="text-gray-300">jayadevj01@gmail.com</p>
              </div>
            </a>
            
            <a 
              href="tel:9692418125"
              className="flex flex-col items-center gap-4 p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-8 h-8 text-green-400" />
              <div>
                <h3 className="text-lg font-semibold text-white">Phone</h3>
                <p className="text-gray-300">+91 9692418125</p>
              </div>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/jayadev-jena-0b641233a"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300 hover:scale-105"
            >
              <Linkedin className="w-8 h-8 text-purple-400" />
              <div>
                <h3 className="text-lg font-semibold text-white">LinkedIn</h3>
                <p className="text-gray-300">Connect with me</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-700/50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2024 Jayadev Jena. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a 
              href="https://github.com/jena-sibu"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/jayadev-jena-0b641233a"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              target="_blank"   
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;