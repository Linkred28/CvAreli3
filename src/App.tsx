import { useEffect, useRef, useState } from 'react';
import './index.css';
import { Briefcase, Sparkles, Brain, Users } from 'lucide-react';

const carouselItems = [
  { emoji: '📊', label: 'Estrategia Empresarial' },
  { emoji: '📈', label: 'Orientación a Resultados' },
  { emoji: '🧠', label: 'Pensamiento Crítico y Sistémico' },
  { emoji: '⚡', label: 'IA y Tecnología en Evolución' },
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    }, 2500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* ENCABEZADO */}
      <header className="bg-[#0b172b] text-white py-10 text-center">
        <h1 className="text-4xl font-bold tracking-wide glow-gold">Curriculum Vitae</h1>
        <div className="mt-2 text-lg text-[#ffd700] font-semibold">
          {carouselItems[currentIndex].emoji} {carouselItems[currentIndex].label}
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="p-8 max-w-5xl mx-auto">
        {/* PERFIL PROFESIONAL */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#0b172b] mb-6">Perfil Profesional</h2>
          <ul className="space-y-6">
            <li className="flex items-start bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-5">
              <Briefcase className="w-6 h-6 text-[#0b172b] mt-1 mr-4" />
              <p className="text-gray-800 leading-relaxed">
                Ejecutiva bilingüe (inglés/español) con más de 20 años de experiencia en desarrollo de negocios, gestión estratégica de proyectos y análisis de información clave para la toma de decisiones de alta dirección.
              </p>
            </li>
            <li className="flex items-start bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-5">
              <Sparkles className="w-6 h-6 text-[#0b172b] mt-1 mr-4" />
              <p className="text-gray-800 leading-relaxed">
                Mi trayectoria combina habilidades avanzadas en planeación y gestión administrativa con una visión estratégica orientada a la transformación digital. Integro tecnologías emergentes —incluida la inteligencia artificial— para modernizar procesos, fortalecer la gestión empresarial y optimizar la toma de decisiones.
              </p>
            </li>
            <li className="flex items-start bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-5">
              <Brain className="w-6 h-6 text-[#0b172b] mt-1 mr-4" />
              <p className="text-gray-800 leading-relaxed">
                Actualmente participo en equipos interdisciplinarios que aplican inteligencia artificial en entornos empresariales, desarrollando soluciones innovadoras con impacto tangible en la organización.
              </p>
            </li>
            <li className="flex items-start bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-5">
              <Users className="w-6 h-6 text-[#0b172b] mt-1 mr-4" />
              <p className="text-gray-800 leading-relaxed">
                Cuento con amplia experiencia generando relaciones comerciales estratégicas entre organizaciones privadas y públicas, mediante propuestas alineadas con objetivos corporativos.
              </p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
