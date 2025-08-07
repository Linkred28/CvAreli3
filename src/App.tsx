import { useState } from 'react';
import {
  Landmark,
  BarChart,
  Brain,
  Zap,
  LayoutDashboard,
  Gem,
} from 'lucide-react';

function MarqueeCarousel() {
  const [isHovering, setIsHovering] = useState(false);

  const phrases = [
    { text: 'Estrategia Empresarial', icon: <Landmark size={20} /> },
    { text: 'Orientación a Resultados', icon: <BarChart size={20} /> },
    { text: 'Pensamiento Crítico y Sistémico', icon: <Brain size={20} /> },
    { text: 'IA y Tecnología en Evolución', icon: <Zap size={20} /> },
    { text: 'Gestión de Proyectos', icon: <LayoutDashboard size={20} /> },
    { text: 'Análisis para la Toma de Decisiones', icon: <Gem size={20} /> },
  ];

  const scrollingContent = [...phrases, ...phrases];

  return (
    <div
      className="marquee-wrapper ml-80 mt-4 hidden lg:block"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className={`marquee-track ${isHovering ? 'paused' : ''}`}>
        {scrollingContent.map((item, index) => (
          <div key={index} className="marquee-item">
            <span className="icon">{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-start justify-start p-12">
      {/* Título */}
      <h1 className="text-5xl font-bold mb-4 title-shine ml-80 mt-10">
        Gibrán Dosal
      </h1>

      {/* Carrusel */}
      <MarqueeCarousel />

      {/* Aquí puedes seguir agregando el resto de tu CV, secciones, etc. */}
    </div>
  );
}

export default App;
