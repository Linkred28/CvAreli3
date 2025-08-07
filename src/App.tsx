import { useEffect, useRef, useState } from 'react';
import './index.css'; // ✅ Aquí el cambio

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
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* TÍTULO ANIMADO */}
      <header className="bg-[#0b172b] text-white py-10 text-center relative overflow-hidden">
        <h1 className="text-4xl font-bold tracking-wide glow-gold">
          Curriculum Vitae
        </h1>
        <div className="mt-2 text-lg text-[#ffd700] font-semibold">
          {carouselItems[currentIndex].emoji} {carouselItems[currentIndex].label}
        </div>
      </header>

      {/* CONTENIDO DE PRUEBA */}
      <main className="p-8 max-w-4xl mx-auto">
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-[#0b172b] mb-4">
            Perfil Profesional
          </h2>
          <ul className="space-y-4">
            <li className="bg-gray-100 p-4 rounded shadow">
              Ejecutiva bilingüe (inglés/español) con más de 20 años de experiencia en desarrollo de negocios, gestión estratégica de proyectos y análisis de información clave para la toma de decisiones de alta dirección.
            </li>
            <li className="bg-gray-100 p-4 rounded shadow">
              Mi trayectoria combina habilidades avanzadas en planeación y gestión administrativa con una visión estratégica orientada a la transformación digital. Integro tecnologías emergentes —incluida la inteligencia artificial— para modernizar procesos, fortalecer la gestión empresarial y optimizar la toma de decisiones.
            </li>
            <li className="bg-gray-100 p-4 rounded shadow">
              Actualmente participo en equipos interdisciplinarios que aplican inteligencia artificial en entornos empresariales, desarrollando soluciones innovadoras con impacto tangible en la organización.
            </li>
            <li className="bg-gray-100 p-4 rounded shadow">
              Cuento con amplia experiencia generando relaciones comerciales estratégicas entre organizaciones privadas y públicas, mediante propuestas alineadas con objetivos corporativos.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
