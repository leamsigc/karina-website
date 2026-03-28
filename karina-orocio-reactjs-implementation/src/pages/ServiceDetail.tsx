import { Layout } from '../components/Layout';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const serviceData = {
  "reduccion-predial-oaxaca": {
    title: "Reducción de Predial en Oaxaca",
    subtitle: "Defensa legal contra cobros excesivos de impuesto predial",
    description: "En Oaxaca de Juárez y municipios conurbados, los cobros de impuesto predial a menudo sufren incrementos desproporcionados e inconstitucionales. Nuestro despacho se especializa en la interposición de Juicios de Nulidad ante el Tribunal de Justicia Administrativa del Estado de Oaxaca para lograr la reducción significativa de estos cobros, protegiendo su patrimonio inmobiliario.",
    benefits: [
      "Análisis gratuito de su boleta predial actual.",
      "Interposición de Juicio de Nulidad estratégico.",
      "Suspensión del cobro excesivo durante el juicio.",
      "Resoluciones favorables que reducen el pago hasta en un 70%."
    ],
    keywords: "reduccion predial oaxaca, juicio de nulidad predial, amparo contra predial oaxaca, impuesto predial excesivo oaxaca, abogado fiscalista oaxaca, karina orocio predial",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200"
  },
  "derecho-civil-oaxaca": {
    title: "Derecho Civil y Patrimonial",
    subtitle: "Protección y regularización de su patrimonio en Oaxaca",
    description: "Brindamos asesoría y representación en litigios civiles complejos. Nos especializamos en la regularización de propiedades mediante juicios de Usucapión (Prescripción Positiva), juicios sucesorios testamentarios e intestamentarios para asegurar la correcta transmisión de bienes, y la elaboración y revisión de contratos civiles de alto rigor técnico para prevenir futuros conflictos.",
    benefits: [
      "Juicios de Usucapión para obtener escrituras a su nombre.",
      "Trámites sucesorios ágiles y transparentes (Intestados).",
      "Elaboración de contratos de compraventa, arrendamiento y comodato.",
      "Recuperación de inmuebles (Juicios Reivindicatorios)."
    ],
    keywords: "abogado civil oaxaca, juicio de usucapion oaxaca, intestados oaxaca, abogado de propiedades oaxaca, contratos civiles oaxaca, karina orocio civil",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
  },
  "derecho-familiar-oaxaca": {
    title: "Derecho Familiar",
    subtitle: "Soluciones legales sensibles y efectivas para su familia",
    description: "Entendemos que los conflictos familiares requieren tacto, discreción y firmeza legal. Representamos a nuestros clientes ante los Juzgados Familiares del Centro en Oaxaca en procesos de divorcio incausado (exprés), juicios de pensión alimenticia, guarda y custodia de menores, y reconocimiento de paternidad, buscando siempre la resolución más favorable y menos desgastante.",
    benefits: [
      "Divorcios incausados rápidos y sin complicaciones.",
      "Gestión y aseguramiento de pensiones alimenticias justas.",
      "Convenios de guarda, custodia y regímenes de visitas.",
      "Juicios de pérdida de patria potestad."
    ],
    keywords: "abogada familiar oaxaca, divorcio incausado oaxaca, pension alimenticia oaxaca, guarda y custodia oaxaca, abogado de divorcios oaxaca, karina orocio familiar",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200"
  },
  "derecho-administrativo-oaxaca": {
    title: "Derecho Administrativo y Amparo",
    subtitle: "Defensa frente a actos arbitrarios de autoridades en Oaxaca",
    description: "Protegemos a empresas y particulares contra actos ilegales de autoridades municipales, estatales y federales en Oaxaca. Interponemos recursos administrativos, juicios de nulidad y Juicios de Amparo contra clausuras de establecimientos comerciales, multas de tránsito excesivas, negativas de licencias o permisos, y cualquier acto de autoridad que vulnere sus derechos constitucionales.",
    benefits: [
      "Levantamiento de clausuras de negocios locales.",
      "Nulidad de multas de tránsito y sanciones administrativas.",
      "Juicios de Amparo contra actos de autoridad inconstitucionales.",
      "Asesoría en licitaciones y contratos gubernamentales."
    ],
    keywords: "abogado administrativo oaxaca, juicio de amparo oaxaca, clausura de negocios oaxaca, multas de transito oaxaca, tribunal de justicia administrativa oaxaca, karina orocio amparos",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1200"
  }
};

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  
  // @ts-ignore
  const service = serviceData[slug];

  if (!service) {
    return (
      <Layout title="Servicio no encontrado | Karina Orocio" description="El servicio legal que busca no se encuentra disponible.">
        <div className="py-24 text-center bg-cream min-h-[60vh] flex flex-col justify-center items-center">
          <h1 className="font-serif text-4xl text-charcoal mb-4">Servicio no encontrado</h1>
          <p className="text-charcoal-light mb-8">Lo sentimos, la página que buscas no existe.</p>
          <Link to="/servicios" className="text-gold hover:text-charcoal transition-colors font-medium tracking-widest uppercase text-sm">
            Volver a Servicios
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      title={`${service.title} | Karina Orocio | Abogada Oaxaca`}
      description={service.description.substring(0, 155) + "..."}
      keywords={service.keywords}
    >
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/80 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <span className="text-gold tracking-widest uppercase text-xs font-bold mb-4 block">Área de Práctica</span>
          <h1 className="font-serif text-5xl md:text-6xl text-cream mb-6 leading-tight">
            {service.title}
          </h1>
          <p className="text-cream-dark text-xl font-light max-w-2xl mx-auto">
            {service.subtitle}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-charcoal max-w-none mb-16">
            <p className="text-xl leading-relaxed text-charcoal font-light">
              {service.description}
            </p>
          </div>

          <div className="bg-white p-10 shadow-sm border border-cream-dark/20 rounded-sm">
            <h3 className="font-serif text-3xl text-charcoal mb-8 text-center">¿Cómo podemos ayudarle?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.benefits.map((benefit: string, index: number) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <p className="text-charcoal-light leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-charcoal text-cream py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl mb-6">¿Necesita asesoría en {service.title.toLowerCase()}?</h2>
          <p className="text-cream-dark mb-10 text-lg font-light max-w-2xl mx-auto">
            Agende una consulta confidencial en nuestras oficinas en Oaxaca de Juárez para analizar su caso y diseñar una estrategia legal efectiva.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center justify-center px-8 py-4 border border-gold text-gold hover:bg-gold hover:text-charcoal transition-all duration-300 uppercase tracking-widest text-sm font-medium"
          >
            Solicitar Consulta <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
