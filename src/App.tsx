import './index.css';
import { Briefcase, Lightbulb, Globe2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* Título en header */}
      <header className="bg-slate-900 text-white text-center py-6">
        <div className="text-sm text-emerald-400 uppercase tracking-wider mb-1">
          Curriculum Vitae
        </div>
        <h1 className="text-3xl font-bold tracking-wide">ARELI AGUILAR DELGADO</h1>
      </header>

      {/* Carrusel */}
      <section className="marquee-wrapper bg-gray-100 border-y border-gray-300 py-4">
        <div className="marquee-track">
          {Array(2).fill(0).map((_, idx) => (
            <div key={idx} className="flex items-center gap-12 px-6">
              <div className="marquee-item"><Briefcase className="icon" /> Estrategia Empresarial</div>
              <div className="marquee-item"><Lightbulb className="icon" /> Pensamiento Crítico y Sistémico</div>
              <div className="marquee-item"><Globe2 className="icon" /> IA y Tecnología en Evolución</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contenido Principal */}
      <main className="p-6 max-w-4xl mx-auto">
        <h2 className="text-emerald-700 text-2xl font-bold mb-4">Perfil Profesional</h2>
        <div className="space-y-4">
          <div className="card">Ejecutiva bilingüe (inglés/español)...</div>
          <div className="card">Mi trayectoria combina habilidades avanzadas...</div>
          <div className="card">Actualmente participo en equipos interdisciplinarios...</div>
          <div className="card">Cuento con amplia experiencia generando relaciones comerciales...</div>
        </div>
      </main>

    </div>
  );
}

export default App;
