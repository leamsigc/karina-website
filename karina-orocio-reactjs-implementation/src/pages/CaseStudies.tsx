import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { ArrowRight, Award, MapPin } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';

export default function CaseStudies() {
  return (
    <Layout
      title="Casos de Éxito | Lic. Karina Orocio - Abogada en Oaxaca"
      description="Conozca nuestros casos de éxito en litigio estratégico, derecho civil, administrativo y familiar en el Estado de Oaxaca. Resultados comprobables que respaldan nuestra experiencia."
      keywords="casos de exito abogados oaxaca, resultados legales oaxaca, litigio estrategico oaxaca, sentencias favorables oaxaca, karina orocio casos"
    >
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center bg-charcoal overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=2000"
            alt="Casos de Éxito Legal en Oaxaca"
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-20 text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8 text-cream">
            Casos de <span className="italic text-gold">Éxito</span>
          </h1>
          <p className="text-cream-dark text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Nuestra mejor carta de presentación son los resultados. Conozca cómo hemos protegido el patrimonio, la libertad y los derechos de nuestros clientes en Oaxaca mediante litigio estratégico de alto nivel.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {caseStudies.map((study) => (
              <div key={study.slug} className="group bg-white border border-gold/20 flex flex-col h-full hover:shadow-lg transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-charcoal text-cream px-3 py-1 text-xs tracking-widest uppercase font-medium">
                    {study.category}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center space-x-4 mb-4 text-xs font-medium tracking-widest text-charcoal-light uppercase">
                    <span className="flex items-center"><MapPin className="w-3 h-3 mr-1 text-gold" /> {study.location}</span>
                  </div>
                  
                  <h2 className="font-serif text-2xl text-charcoal mb-4 group-hover:text-gold transition-colors">
                    <Link to={`/casos-de-exito/${study.slug}`}>{study.title}</Link>
                  </h2>
                  
                  <div className="flex items-center space-x-2 mb-6 bg-gold/10 p-3 rounded-sm border border-gold/20">
                    <Award className="h-5 w-5 text-gold shrink-0" />
                    <span className="text-charcoal font-medium text-sm">Resultado: {study.result}</span>
                  </div>
                  
                  <p className="text-charcoal-light font-light leading-relaxed mb-8 flex-grow">
                    {study.summary}
                  </p>
                  
                  <Link 
                    to={`/casos-de-exito/${study.slug}`}
                    className="inline-flex items-center text-gold text-sm tracking-widest uppercase font-medium hover:text-charcoal transition-colors mt-auto"
                  >
                    Leer Caso Completo <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-charcoal py-24 text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl mb-6">¿Enfrenta un desafío legal similar?</h2>
          <p className="text-cream-dark mb-10 text-lg font-light max-w-2xl mx-auto">
            Cada caso es único, pero nuestra metodología de litigio estratégico se aplica con el mismo rigor. Agende una consulta para analizar sus opciones legales.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center px-8 py-4 bg-gold text-charcoal hover:bg-cream transition-all duration-300 uppercase tracking-widest text-sm font-medium"
          >
            Solicitar Consulta <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
