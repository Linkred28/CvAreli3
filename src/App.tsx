import React, { useState, useEffect, useRef } from 'react';
import {
  User, Briefcase, GraduationCap, Globe, Zap, Brain, Landmark, FileText, HardHat, Users,
  BarChart, Gem, Lightbulb, Info, Settings, Bot, Handshake, BookOpen, Flag, LayoutDashboard,
  CheckCircle, HeartHandshake, Phone, Mail, Linkedin, Download, Home
} from 'lucide-react';

const portfolioData = {
  profile: [
    {
      icon: <Briefcase size={24} />,
      text: "Ejecutiva bilingüe (inglés/español) con más de 20 años de experiencia en desarrollo de negocios, gestión estratégica de proyectos y análisis de información clave para la toma de decisiones de alta dirección.",
    },
    {
      icon: <Settings size={24} />,
      text: "Mi trayectoria combina habilidades avanzadas en planeación y gestión administrativa con una visión estratégica orientada a la transformación digital. Integro tecnologías emergentes - incluida la inteligencia artificial - para modernizar procesos, fortalecer la gestión empresarial y optimizar la toma de decisiones, impulsando la eficiencia operativa y la identificación de oportunidades estratégicas.",
    },
    {
      icon: <Bot size={24} />,
      text: "Actualmente participo en equipos interdisciplinarios que aplican inteligencia artificial en entornos empresariales, desarrollando soluciones innovadoras con impacto tangible en la organización.",
    },
    {
      icon: <Handshake size={24} />,
      text: "Cuento con amplia experiencia generando relaciones comerciales estratégicas entre organizaciones privadas y públicas, mediante propuestas alineadas con objetivos corporativos. Me distingo por mi capacidad para identificar necesidades del cliente, gestionar ventas de forma estructurada y construir vínculos institucionales sólidos. Tengo una orientación constante a resultados y un firme compromiso con el cumplimiento de metas organizacionales.",
    },
  ],
  skills: {
    tooltips: {
      'MS Office': 'Word, Excel, Outlook, Power Point - Nivel Avanzado',
      'Motores de búsqueda': 'Búsqueda avanzada y análisis de información',
      'Correo electrónico': 'Gestión Profesional de comunicaciones',
      'Soluciones inteligentes': 'Implementación de Inteligencia Artificial para optimización de procesos',
      'Tecnologías emergentes': 'Aplicación en gestión empresarial y análisis estratégico',
      'Gestión empresarial': 'Sólidas habilidades administrativas',
      'Análisis Estratégico': 'Evaluación y toma de decisiones empresariales',
    },
    management: [
      'Altamente organizada y autónoma',
      'Precisión y confidencialidad de la información',
      'Respuesta eficaz a cambios de prioridades',
      'Habilidad destacada en negociación',
      'Fuertes habilidades analíticas y de resolución de problemas',
      'Atención al detalle',
      'Gestión múltiple de tareas y personas',
      'Capacidad de adaptación y aprendizaje independiente',
      'Habilidades interpersonales y de comunicación',
      'Filosofía orientada al trabajo en equipo'
    ],
  },
  experience: [
    {
      date: 'Febrero 2024 - Actualidad',
      title: 'Colaboración Actual en Proyectos Empresariales con Inteligencia Artificial',
      company: 'Rol transversal | Transformación digital y estrategia con tecnologías emergentes',
      description: [
        'Participación activa en equipos multidisciplinarios dedicados al desarrollo de soluciones empresariales mediante el uso estratégico de inteligencia artificial.',
        'Diseño, conceptualización y aplicación de iniciativas de transformación digital con impacto directo en la eficiencia operativa, la gestión de información y la toma de decisiones.',
        'Colaboración en la implementación de herramientas tecnológicas emergentes para modernizar procesos clave y fortalecer el desempeño organizacional.',
        'Aportación de perspectiva estratégica, visión de negocio y experiencia ejecutiva al diseño de soluciones inteligentes adaptadas a necesidades reales del entorno empresarial.',
      ],
      icon: <Zap size={24} />,
    },
  ],
  projects: [
    {
      title: 'AI STARS LEAGUE',
      date: 'Diciembre 2024 - Junio 2025',
      description: [
        'Participación activa en una competencia internacional de alto rendimiento en inteligencia artificial aplicada.',
        'Integré equipos multidisciplinarios para resolver desafíos reales mediante tecnologías de IA, combinando pensamiento estratégico, innovación y visión de negocio.',
        'Diseñé y presenté soluciones con impacto empresarial, aplicando habilidades avanzadas en automatización, análisis de datos, generación de contenido con IA y desarrollo de herramientas inteligentes.',
        'Colaboré en proyectos enfocados en transformación digital, visualización de datos y mejora de procesos organizacionales.',
        'Fui evaluada por un panel de expertos internacionales en IA, innovación y consultoría estratégica.',
        'La experiencia fortaleció mis competencias para integrar inteligencia artificial en contextos reales, potenciar la resolución creativa de problemas y acelerar la implementación de soluciones tecnológicas.',
        'Participé en sesiones de capacitación técnica especializada y actividades de networking internacional con líderes y profesionales de alto nivel del ecosistema tecnológico global.',
      ],
      icon: <Brain size={24} />,
    },
  ],
  education: [
    {
      icon: <Landmark size={24} />,
      iconColor: '#3B82F6',
      title: 'ITESM',
      period: '2002-2004',
      description: 'Master en Administración de Negocios (MBA)',
    },
    {
      icon: <Landmark size={24} />,
      iconColor: '#3B82F6',
      title: 'ITESM',
      period: '1991-1995',
      description: 'Licenciatura en Mercadotecnia (Mención Honorífica)',
    },
    {
      icon: <Brain size={24} />,
      iconColor: '#8B5CF6',
      title: 'LEARNING HEROES',
      period: '2024-2025',
      description: [
        'Programa Intensivo de Transformación Digital',
        'Especialización en Inteligencia Artificial Aplicada enfocado en implementación de soluciones inteligentes, optimización de procesos empresariales y aplicación práctica de tecnologías emergentes en entornos corporativos.'
      ],
    },
  ],
  otherStudies: [
    'Diploma en Marketing Digital; ITAM 2022.',
    'Diploma en Gestión Estratégica de las Finanzas Públicas; ITESM; 2016-2017.',
    'Diploma en Mercadotecnia Competitiva; World Trade Center, Business Center; 1997-1998.',
    'Diploma en Finanzas; ITESM; 1994 - 1995.'
  ],
  languages: [
    { language: 'Español', proficiency: 'Lengua nativa' },
    { language: 'Inglés', proficiency: 'Fluido' },
  ],
  contact: {
    email: 'areliaguilarin@gmail.com',
    phone: '55 4341 3490',
    linkedin: 'https://www.linkedin.com/in/areli-aguilar/',
    cvUrl: '#',
  },
};

// Carrusel
const MarqueeCarousel = () => {
  const [isLargeScreen, setisLargeScreen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setisLargeScreen(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const phrases = [
    { text: 'Estrategia Empresarial', icon: <Landmark size={24} /> },
    { text: 'Orientación a Resultados', icon: <BarChart size={24} /> },
    { text: 'Pensamiento Crítico y Sistémico', icon: <Brain size={24} /> },
    { text: 'IA y Tecnología en Evolución', icon: <Zap size={24} /> },
    { text: 'Gestión de Proyectos', icon: <LayoutDashboard size={24} /> },
    { text: 'Análisis para la Toma de Decisiones', icon: <Gem size={24} /> },
  ];
  const fullContent = [...phrases, ...phrases, ...phrases];

  if (!isLargeScreen) return null;

  return (
    <div
      className="bg-transparent overflow-hidden h-12 w-[calc(100vw-20rem)] ml-80 mt-4 carousel-container flex items-center"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className={`marquee-container ${isHovering ? 'paused' : ''}`}>
        {fullContent.map((item, index) => (
          <div key={index} className="marquee-item">
            <span className="icon">{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
// Barra de navegación lateral
const Navigation = ({ activeSection, onNavigate, isMobileMenuOpen, toggleMobileMenu }) => {
  const sections = [
    { id: 'perfil', title: 'Perfil Profesional', icon: <User size={20} /> },
    { id: 'habilidades', title: 'Habilidades Destacadas', icon: <Gem size={20} /> },
    { id: 'experiencia', title: 'Experiencia Profesional', icon: <Briefcase size={20} /> },
    { id: 'proyectos', title: 'Proyectos de Innovación y Transformación Digital', icon: <Lightbulb size={20} /> },
    { id: 'educacion', title: 'Educación Académica', icon: <GraduationCap size={20} /> },
    { id: 'idiomas', title: 'Idiomas', icon: <Globe size={20} /> },
    { id: 'contacto', title: 'Contacto', icon: <Handshake size={20} /> },
  ];

  return (
    <nav className="fixed lg:left-0 top-0 w-full lg:w-80 h-16 lg:h-screen bg-gray-900 text-gray-200 shadow-2xl z-50">
      <div className="container mx-auto px-4 lg:px-0 h-full flex items-center justify-between lg:block">
        <div className="lg:py-8 flex items-center lg:justify-center">
          <div className="flex-shrink-0 flex items-center lg:flex-col lg:text-center">
            <User size={32} className="text-amber-600 mr-3 lg:mb-4" />
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-bold font-sans tracking-wider mb-2 title-shine">
                CURRICULUM VITAE
              </h2>
              <h1 className="text-2xl font-bold font-sans text-gray-50 leading-tight text-center">
                <span className="block">ARELI</span>
                <span className="block">AGUILAR</span>
                <span className="block">DELGADO</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="hidden lg:block w-3/4 mx-auto my-4 border-t border-gray-700"></div>
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-200 hover:text-gray-400 focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        <div className={`fixed inset-x-0 top-16 bg-gray-900 lg:static lg:block lg:h-auto lg:mt-8 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col lg:space-y-2 p-4 lg:p-0">
            {sections.map(section => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={(e) => { e.preventDefault(); onNavigate(section.id); }}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                    activeSection === section.id
                      ? 'bg-emerald-700 text-white shadow-lg'
                      : 'hover:bg-gray-800'
                  }`}
                >
                  {section.icon}
                  <span className="font-semibold">{section.title}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="px-4 mt-6">
            <a
              href={portfolioData.contact.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 bg-amber-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:bg-amber-700 transition-colors duration-200"
            >
              <Download size={20} />
              <span>Descargar CV</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
const App = () => {
  const [activeSection, setActiveSection] = useState('perfil');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sectionRefs = useRef({});

  const handleNavigate = (sectionId) => {
    const element = sectionRefs.current[sectionId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-20px 0px -50% 0px' }
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800">
      <Navigation
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
      <MarqueeCarousel />

      <main className="lg:ml-80 p-6 lg:p-8">
        {/* Aquí irían tus secciones como <Section id="perfil" ... /> etc. */}
        {/* Puedes copiar desde tu versión anterior el contenido de secciones con Section + ProfileCard, etc. */}
      </main>
    </div>
  );
};

export default App;
