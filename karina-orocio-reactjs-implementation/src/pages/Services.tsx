import { Layout } from '../components/Layout';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    slug: "reduccion-predial-oaxaca",
    title: "Reducción de Predial",
    excerpt: "Defensa contra cobros excesivos de impuesto predial en Oaxaca de Juárez y municipios conurbados mediante juicios de nulidad.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "derecho-civil-oaxaca",
    title: "Derecho Civil",
    excerpt: "Regularización de propiedades (Usucapión), juicios sucesorios (intestados y testamentarios) y elaboración de contratos de alto rigor.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "derecho-familiar-oaxaca",
    title: "Derecho Familiar",
    excerpt: "Resolución estratégica de divorcios incausados, pensiones alimenticias y guarda y custodia ante los Juzgados Familiares del Centro.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800"
  },
  {
    slug: "derecho-administrativo-oaxaca",
    title: "Derecho Administrativo",
    excerpt: "Defensa contra clausuras de negocios, multas de tránsito y actos arbitrarios de autoridades municipales y estatales.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Services() {
  return (
    <Layout
      title="Áreas de Práctica | Karina Orocio | Abogados en Oaxaca"
      description="Servicios legales especializados en Oaxaca: Reducción de predial, derecho civil, familiar y administrativo. Litigio estratégico y resultados."
      keywords="servicios legales oaxaca, reduccion predial oaxaca, abogado civil oaxaca, abogada familiar oaxaca, amparos oaxaca, karina orocio servicios, despachos juridicos en oaxaca"
    >
      <section className="bg-charcoal text-cream py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Áreas de <span className="italic text-gold">Práctica</span></h1>
          <p className="font-light text-cream-dark max-w-2xl mx-auto text-lg">
            Representación legal de alto nivel enfocada en la protección de su patrimonio y sus derechos fundamentales en el Estado de Oaxaca.
          </p>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {services.map((service, index) => (
            <div key={service.slug} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={index % 2 !== 0 ? 'order-2 lg:order-1 bg-cream-dark aspect-square rounded-sm overflow-hidden' : 'bg-cream-dark aspect-square rounded-sm overflow-hidden order-2'}>
                <img src={service.image} alt={service.title} className="w-full h-full object-cover mix-blend-multiply opacity-80" />
              </div>
              <div className={index % 2 !== 0 ? 'order-1 lg:order-2 lg:pl-12' : 'order-1'}>
                <span className="text-gold tracking-widest uppercase text-xs font-bold mb-4 block">0{index + 1}. {service.title}</span>
                <h2 className="font-serif text-4xl text-charcoal mb-6">
                  <Link to={`/servicios/${service.slug}`} className="hover:text-gold transition-colors">{service.title}</Link>
                </h2>
                <p className="text-charcoal-light font-light text-lg mb-8 leading-relaxed">
                  {service.excerpt}
                </p>
                <Link to={`/servicios/${service.slug}`} className="text-charcoal font-medium text-sm tracking-widest uppercase hover:text-gold transition-colors flex items-center space-x-2">
                  <span>Ver Detalles del Servicio</span> <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}

        </div>
      </section>
    </Layout>
  );
}
