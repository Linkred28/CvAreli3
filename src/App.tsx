import { useEffect, useRef, useState } from 'react';
import './index.css';
import { CheckCircle, Briefcase, Brain, Sparkles } from 'lucide-react';

const carouselItems = [
  { emoji: '📊', label: 'Estrategia Empresarial' },
  { emoji: '📈', label: 'Orientación a Resultados' },
  { emoji: '🧠', label: 'Pensamiento Crítico y Sistémico' },
  { emoji: '⚡', label: 'IA y Tecnología en Evolución' },
];

const perfilProfesional = [
  {
    icon: <Briefcase className="text-green-600 w-5 h-5" />,
    text: 'Ejecutiva bilingüe (inglés/español) con más de 20 años de experiencia en desarrollo de negocios, gestión estratégica de proyectos y análisis de información clave para la toma de decisiones de alta dirección.',
  },
  {
    icon: <Sparkles className="text-green-600 w-5 h-5" />,
    text: 'Mi trayectoria combina habilidades avanzadas en planeación y gestión administrativa con una visión estratégica orientada a la transformación digital. Integro tecnologías emergentes –incluida la inteligencia artificial– para modernizar procesos, fortalecer la gestión empresarial y optimizar la toma de decisiones, impulsando la eficiencia operativa y la identificación de oportunidades estratégicas.',
  },
  {
    icon: <Brain className="text-green-600 w-5 h-5" />,
    text: 'Actualmente participo en equipos interdisciplinarios que aplican inteligencia artificial en entornos empresariales, desarrollando soluciones innovadoras con impacto tangible en la organización.',
  },
  {
    icon: <CheckCircle className="text-green-600 w-5 h-5" />,
    text: 'Cuento con amplia experiencia generando relaciones comerciales estratégicas entre organizaciones privadas y públicas, mediante propuestas alineadas con objetivos corporativos. Me distingo por mi capacidad para identificar necesidades del cliente, gestionar ventas de forma estructurada y construir vínculos institucionales sólidos. Tengo una orientación constante a resultados y un firme compromiso con el cumplimiento de metas organizacionales.',
  },
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
      {/* TÍTULO ANIMADO */}
      <header className="bg-[#0b172b] text-white py-10 text-center">
        <h1 className="text-4xl font-bold tracking-wide glow-gold">
          Curriculum Vitae
        </h1>
        <div className="mt-2 text-lg text-[#ffd700] font-semibold">
          {carouselItems[currentIndex].emoji} {carouselItems[currentIndex].label}
        </div>
      </header>

      {/* PERFIL PROFESIONAL */}
      <main className="p-8 max-w-5xl mx-auto">
        <section>
          <h2 className="text-2xl font-bold text-[#0b172b] mb-6">Perfil Profesional</h2>
          <div className="space-y-6">
            {perfilProfesional.map((item, index) => (
              <div
                key={index}
                className="flex items-start bg-gray-50 border border-gray-200 rounded-lg shadow-sm p-5"
              >
                <div className="mr-4 mt-1">{item.icon}</div>
                <p className="text-gray-800 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
