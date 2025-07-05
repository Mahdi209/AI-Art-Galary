import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaHome, FaImage, FaTools, FaEdit, FaFileAlt } from 'react-icons/fa';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'الرئيسية', icon: FaHome },
    { id: 'topics', label: 'المواضيع', icon: FaImage },
    { id: 'details', label: 'التفاصيل', icon: FaFileAlt },
    { id: 'tools', label: 'أدوات الإنشاء', icon: FaTools },
    { id: 'enhancement', label: 'أدوات التحسين', icon: FaEdit },
    { id: 'form', label: 'التقديم', icon: FaFileAlt },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const sections = ['home', 'topics', 'details', 'tools', 'enhancement', 'form'];
    
    const handleScroll = () => {
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 md:hidden
          glass-morphism p-3 rounded-full
          border border-white/20 hover:border-purple-500/50
          transition-all duration-300
          hover:scale-110"
      >
        {isOpen ? (
          <FaTimes className="w-6 h-6 text-white" />
        ) : (
          <FaBars className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Desktop Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40 
        hidden md:block">
        <div className="glass-morphism px-6 py-3 rounded-full
          border border-white/20 hover:border-purple-500/30
          transition-all duration-300">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full
                      transition-all duration-300 text-sm font-medium
                      ${activeSection === item.id 
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' 
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                      }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className={`fixed top-0 right-0 h-full w-80 z-40 md:hidden
        glass-morphism border-l border-white/20
        transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 pt-20">
          <ul className="space-y-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-4 w-full px-6 py-4 rounded-xl
                      transition-all duration-300 text-right
                      ${activeSection === item.id 
                        ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' 
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                      }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-lg font-medium">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}