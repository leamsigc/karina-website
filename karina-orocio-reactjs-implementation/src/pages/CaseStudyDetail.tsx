import { useParams, Link, Navigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { ArrowLeft, ArrowRight, Award, MapPin, Briefcase, ChevronRight } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const study = caseStudies.find(s => s.slug === slug);

  if (!study) {
    return <Navigate to="/casos-de-exito" replace />;
  }

  return (
    <Layout
      title={`${study.title} | Casos de Éxito | Lic. Karina Orocio`}
      description={study.summary}
    >
      {/* Breadcrumbs */}
      <div className="bg-cream border-b border-gold/20 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-xs font-medium tracking-widest uppercase text-charcoal-light">
            <Link to="/" className="hover:text-gold transition-colors">Inicio</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/casos-de-exito" className="hover:text-gold transition-colors">Casos de Éxito</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gold truncate">{study.title}</span>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <article className="bg-cream pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="flex flex-wrap items-center gap-4 mb-8 text-xs font-medium tracking-widest uppercase text-charcoal-light">
            <span className="bg-charcoal text-cream px-3 py-1">{study.category}</span>
            <span className="flex items-center"><MapPin className="w-4 h-4 mr-1 text-gold" /> {study.location}</span>
            <span className="flex items-center"><Briefcase className="w-4 h-4 mr-1 text-gold" /> Cliente: {study.client}</span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.1] mb-8">
            {study.title}
          </h1>
          
          <div className="bg-gold/10 border border-gold/30 p-6 md:p-8 rounded-sm mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-charcoal-light mb-2">Resultado Final</p>
              <p className="font-serif text-2xl text-charcoal flex items-center">
                <Award className="w-6 h-6 text-gold mr-3 shrink-0" />
                {study.result}
              </p>
            </div>
            <Link
              to="/contacto"
              className="shrink-0 inline-flex items-center justify-center px-6 py-3 bg-charcoal text-cream hover:bg-gold hover:text-charcoal transition-all duration-300 uppercase tracking-widest text-xs font-medium"
            >
              Consultar mi caso
            </Link>
          </div>
        </div>

        {/* Featured Image */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="aspect-[21/9] overflow-hidden rounded-sm shadow-md">
            <img 
              src={study.image} 
              alt={study.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-headings:font-serif prose-headings:text-charcoal prose-p:text-charcoal-light prose-p:font-light prose-p:leading-relaxed prose-a:text-gold hover:prose-a:text-charcoal max-w-none">
            
            <h2 className="text-3xl mt-12 mb-6 border-b border-gold/20 pb-4">El Desafío</h2>
            <p className="text-xl leading-relaxed">{study.challenge}</p>

            <h2 className="text-3xl mt-16 mb-6 border-b border-gold/20 pb-4">Nuestra Estrategia</h2>
            <p className="text-xl leading-relaxed">{study.strategy}</p>

            <h2 className="text-3xl mt-16 mb-6 border-b border-gold/20 pb-4">El Resultado</h2>
            <p className="text-xl leading-relaxed">{study.outcome}</p>
            
          </div>

          <div className="mt-20 pt-10 border-t border-gold/20 flex justify-between items-center">
            <Link to="/casos-de-exito" className="inline-flex items-center text-charcoal-light hover:text-gold transition-colors text-sm tracking-widest uppercase font-medium">
              <ArrowLeft className="mr-2 h-4 w-4" /> Ver todos los casos
            </Link>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="bg-charcoal py-24 text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl mb-6">Proteja su patrimonio hoy mismo</h2>
          <p className="text-cream-dark mb-10 text-lg font-light max-w-2xl mx-auto">
            La intervención legal oportuna es la clave del éxito. Contáctenos para una evaluación profesional de su situación jurídica.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center px-8 py-4 bg-gold text-charcoal hover:bg-cream transition-all duration-300 uppercase tracking-widest text-sm font-medium"
          >
            Agendar Asesoría <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
