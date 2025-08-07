import './index.css';
import { Briefcase, Lightbulb, Globe2 } from 'lucide-react';

function App() {
  return (
    <div className="flex min-h-screen bg-white flex-col">

      {/* TÍTULO SUPERIOR ESTILO GEMINI */}
      <aside className="bg-[#0F172A] text-white py-6 px-4 text-center shadow-lg">
        <div className="text-sm uppercase tracking-widest text-emerald-400 mb-1">
          Curriculum Vitae
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide">
          ARELI AGUILAR DELGADO
        </h1>
      </aside>

      {/* CARRUSEL MARQUEE */}
      <section className="marquee-wrapper bg-slate-100 border-y border-gray-300 py-4 hover:bg-slate-200 transition-all duration-300">
        <div className="marquee-track">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="flex">
              <div className="marquee-item">
                <Briefcase className="icon" />
                Estrategia Empresarial
              </div>
              <div className="marquee-item">
                <Globe2 className="icon" />
                IA y Tecnología en Evolución
              </div>
              <div className="marquee-item">
                <Lightbulb className="icon" />
                Pensamiento Crítico y Sistémico
              </div>
              <div className="marquee-item">
                <Briefcase className="icon" />
                Orientación a Resultados
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <main className="p-6 max-w-4xl mx-auto text-gray-800">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-emerald-700">Perfil Profesional</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-md border shadow-sm">
              Ejecutiva bilingüe (inglés/español) con más de 20 años de experiencia en desarrollo de negocios,
              gestión estratégica de proyectos y análisis de información clave para la toma de decisiones de alta dirección.
            </div>
            <div className="bg-white p-4 rounded-md border shadow-sm">
              Mi trayectoria combina habilidades avanzadas en planeación y gestión administrativa con una visión estratégica
              orientada a la transformación digital. Integro tecnologías emergentes —incluida la inteligencia artificial— para
              modernizar procesos, fortalecer la gestión empresarial y optimizar la toma de decisiones.
            </div>
            <div className="bg-white p-4 rounded-md border shadow-sm">
              Actualmente participo en equipos interdisciplinarios que aplican inteligencia artificial en entornos empresariales,
              desarrollando soluciones innovadoras con impacto tangible en la organización.
            </div>
            <div className="bg-white p-4 rounded-md border shadow-sm">
              Cuento con amplia experiencia generando relaciones comerciales estratégicas entre organizaciones privadas y públicas,
              mediante propuestas alineadas con objetivos corporativos. Me distingo por mi capacidad para identificar necesidades del cliente,
              gestionar ventas de forma estructurada y construir vínculos institucionales sólidos.
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
