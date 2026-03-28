import { useParams, Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { ArrowRight, MapPin, ShieldCheck, Scale, Award, CheckCircle2, Landmark } from 'lucide-react';

const cityData: Record<string, { name: string, region: string, image: string, context: string, caseStudy: { title: string, result: string, description: string } }> = {
  "oaxaca-de-juarez": {
    name: "Oaxaca de Juárez", region: "Valles Centrales",
    image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&q=80&w=1200",
    context: "Como capital del estado, Oaxaca de Juárez concentra la mayor actividad comercial, inmobiliaria y administrativa. Nuestra firma ofrece representación estratégica de alto nivel ante los tribunales estatales y federales con sede en la capital, protegiendo el patrimonio de familias y empresas oaxaqueñas.",
    caseStudy: {
      title: "Nulidad de Multa Administrativa y Clausura Municipal",
      result: "Ahorro de $1.2M MXN y Reapertura Inmediata",
      description: "Logramos la nulidad lisa y llana de una multa impuesta arbitrariamente por el municipio a una empresa constructora local, demostrando violaciones graves al debido proceso y logrando el levantamiento de los sellos de clausura en menos de 48 horas mediante un juicio de amparo."
    }
  },
  "puerto-escondido": {
    name: "Puerto Escondido", region: "Costa",
    image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&q=80&w=1200",
    context: "El acelerado auge inmobiliario y turístico en Puerto Escondido requiere asesoría legal altamente especializada. Protegemos inversiones mediante la regularización de tierras, estructuración de fideicomisos para extranjeros y resolución de conflictos de propiedad comunal vs. privada.",
    caseStudy: {
      title: "Regularización de Propiedad Costera de Alto Valor",
      result: "Certeza Jurídica y Escrituración Exitosa",
      description: "Asesoramos a un grupo de inversionistas en la transición segura de derechos de posesión (actas de posesión comunal) a propiedad privada mediante juicios de usucapión estratégicos, asegurando una inversión inmobiliaria de más de $50M MXN frente a la playa."
    }
  },
  "huatulco": {
    name: "Huatulco", region: "Costa",
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&q=80&w=1200",
    context: "En Bahías de Huatulco, brindamos certeza jurídica a desarrolladores turísticos, empresas de servicios y particulares. Nos especializamos en derecho civil, administrativo y cumplimiento normativo ante autoridades federales y municipales en la zona costera.",
    caseStudy: {
      title: "Defensa contra Clausura de FONATUR y PROFEPA",
      result: "Suspensión Definitiva y Operación Continua",
      description: "Obtuvimos el amparo y protección de la justicia federal para un hotel boutique local, revirtiendo una orden de clausura irregular por supuestas faltas administrativas ambientales, permitiendo que el negocio operara sin interrupciones durante la temporada alta."
    }
  },
  "salina-cruz": {
    name: "Salina Cruz", region: "Istmo",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1200",
    context: "El desarrollo portuario, petrolero e industrial de Salina Cruz exige un equipo legal con experiencia sólida. Asesoramos a empresas y trabajadores en derecho corporativo, administrativo y litigios complejos contra autoridades federales y grandes corporativos.",
    caseStudy: {
      title: "Litigio Comercial Portuario y Recuperación de Activos",
      result: "Recuperación del 100% de la Cartera Vencida",
      description: "Representamos exitosamente a una empresa proveedora de servicios marítimos en el cobro judicial de facturas millonarias a contratistas de la región, logrando el embargo precautorio de cuentas y el pago total de la deuda más intereses legales."
    }
  },
  "juchitan": {
    name: "Juchitán de Zaragoza", region: "Istmo",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    context: "Como el corazón comercial del Istmo y centro de desarrollo de energías renovables, Juchitán presenta retos legales únicos. Ofrecemos defensa en disputas comerciales, derecho familiar y negociaciones complejas de arrendamiento de tierras.",
    caseStudy: {
      title: "Defensa de Propietarios en Contratos de Arrendamiento Eólico",
      result: "Renegociación Exitosa y Aumento de Regalías",
      description: "Asesoramos a un grupo de propietarios de tierras en la revisión y renegociación de contratos de usufructo con empresas de energía eólica, corrigiendo cláusulas abusivas y logrando un incremento del 40% en las contraprestaciones económicas."
    }
  },
  "tuxtepec": {
    name: "San Juan Bautista Tuxtepec", region: "Papaloapan",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200",
    context: "La potencia agrícola y comercial de la Cuenca del Papaloapan requiere soluciones legales ágiles. Protegemos a productores, comerciantes y familias tuxtepecanas en juicios civiles, mercantiles y regularización de predios rústicos y urbanos.",
    caseStudy: {
      title: "Resolución de Conflicto Comercial Agrícola",
      result: "Cumplimiento Forzoso de Contrato",
      description: "Logramos sentencia favorable para una cooperativa de productores locales contra una empacadora nacional que incumplió los términos de compra, asegurando el pago de la cosecha y el resarcimiento por daños y perjuicios."
    }
  },
  "tehuantepec": {
    name: "Santo Domingo Tehuantepec", region: "Istmo",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200",
    context: "En Tehuantepec, combinamos el respeto por las tradiciones locales con una práctica jurídica moderna. Nos especializamos en resolver juicios sucesorios (intestados), conflictos de linderos y defensa del patrimonio familiar en la región.",
    caseStudy: {
      title: "Juicio Sucesorio Intestamentario Complejo",
      result: "Adjudicación Pacífica de Bienes",
      description: "Resolvimos un litigio familiar de más de 10 años sobre una herencia intestada con múltiples propiedades comerciales. Mediante mediación estratégica y litigio civil, logramos la partición justa y la escrituración a favor de nuestros clientes."
    }
  },
  "pochutla": {
    name: "San Pedro Pochutla", region: "Costa",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1200",
    context: "Como centro de abasto y comercio de la Costa, Pochutla requiere defensa legal firme para sus comerciantes y residentes. Ofrecemos servicios en derecho civil, familiar y defensa contra actos arbitrarios de autoridades municipales y estatales.",
    caseStudy: {
      title: "Defensa Administrativa contra Clausura Comercial",
      result: "Nulidad de Acto de Autoridad",
      description: "Defendimos a un grupo de comerciantes locales ante intentos de clausura y cobros de impuestos municipales fuera de la ley, obteniendo la nulidad de los actos a través del Tribunal de Justicia Administrativa del Estado."
    }
  },
  "tlaxiaco": {
    name: "Heroica Ciudad de Tlaxiaco", region: "Mixteca",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    context: "En el corazón de la Mixteca, brindamos asesoría legal enfocada en la protección del patrimonio familiar. Nos especializamos en juicios de usucapión, rectificación de actas, divorcios y regularización de predios urbanos y suburbanos.",
    caseStudy: {
      title: "Regularización de Predios Urbanos",
      result: "Obtención de Títulos de Propiedad",
      description: "Llevamos a cabo con éxito una serie de juicios de prescripción adquisitiva (usucapión) para familias que habitaban sus propiedades por décadas sin escrituras, otorgándoles finalmente certeza jurídica y valor comercial a sus hogares."
    }
  },
  "huajuapan": {
    name: "Huajuapan de León", region: "Mixteca",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200",
    context: "Por su ubicación estratégica y dinamismo económico, Huajuapan requiere servicios legales que entiendan el comercio interregional. Ofrecemos litigio civil, mercantil y familiar, protegiendo los intereses de los mixtecos dentro y fuera del estado.",
    caseStudy: {
      title: "Litigio Mercantil Transfronterizo Estatal",
      result: "Ejecución de Embargo Exitosa",
      description: "Representamos a una empresa distribuidora local en un juicio ejecutivo mercantil contra deudores ubicados en el estado vecino de Puebla, logrando ejecutar embargos mediante exhortos y recuperando el capital adeudado."
    }
  },
  "miahuatlan": {
    name: "Miahuatlán de Porfirio Díaz", region: "Sierra Sur",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200",
    context: "Atendemos las necesidades legales de Miahuatlán y la Sierra Sur con un enfoque en derecho civil y familiar. Resolvemos conflictos de tierras, pensiones alimenticias y brindamos defensa contra abusos de autoridades locales.",
    caseStudy: {
      title: "Defensa de Derechos de Propiedad",
      result: "Restitución de Inmueble",
      description: "Logramos la restitución de un predio comercial que había sido despojado ilegalmente, utilizando acciones reivindicatorias civiles y medidas cautelares urgentes para proteger el patrimonio de la familia afectada."
    }
  },
  "zimatlan": {
    name: "Zimatlán de Álvarez", region: "Valles Centrales",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1200",
    context: "En Zimatlán, nuestra práctica se enfoca en la transición segura de propiedades, juicios sucesorios y derecho familiar. Ayudamos a las familias a proteger su legado y resolver disputas legales con eficiencia y discreción.",
    caseStudy: {
      title: "Juicio de Usucapión de Predio Agrícola",
      result: "Sentencia Favorable y Escrituración",
      description: "Asesoramos a productores locales en la regularización legal de sus tierras de cultivo, transformando derechos de posesión históricos en propiedad privada debidamente inscrita en el Registro Público de la Propiedad."
    }
  },
  "ocotlan": {
    name: "Ocotlán de Morelos", region: "Valles Centrales",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    context: "Brindamos servicios legales integrales en Ocotlán, destacando nuestra experiencia en derecho administrativo para la reducción de impuestos prediales, así como litigio civil para la resolución de conflictos patrimoniales.",
    caseStudy: {
      title: "Nulidad de Cobros Prediales Excesivos",
      result: "Reducción del 75% en Impuesto Predial",
      description: "Impugnamos exitosamente una actualización catastral arbitraria que multiplicaba el impuesto predial de varios inmuebles comerciales en el centro de Ocotlán, logrando que el tribunal ordenara el cobro justo basado en valores reales."
    }
  },
  "tlacolula": {
    name: "Tlacolula de Matamoros", region: "Valles Centrales",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200",
    context: "El crecimiento urbano y comercial de Tlacolula exige certeza jurídica. Nos especializamos en la resolución de disputas de linderos, regularización de fraccionamientos, juicios civiles y defensa del patrimonio familiar.",
    caseStudy: {
      title: "Resolución de Disputa de Linderos y Propiedad",
      result: "Acuerdo Judicial Favorable",
      description: "Resolvimos un complejo conflicto de límites de propiedad entre particulares mediante un juicio de apeo y deslinde, evitando un litigio prolongado y estableciendo legalmente las colindancias exactas con peritajes topográficos."
    }
  }
};

export default function CityPage() {
  const { citySlug } = useParams<{ citySlug: string }>();
  
  // Fallback if the city is not explicitly in our list, we format the slug nicely
  const formattedCityName = citySlug 
    ? citySlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : 'Oaxaca';

  const defaultCityInfo = { 
    name: formattedCityName, 
    region: "Oaxaca", 
    image: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&q=80&w=1200",
    context: `Brindamos representación legal de alto nivel y defensa estratégica para residentes y empresas en ${formattedCityName} y todo el estado de Oaxaca.`,
    caseStudy: {
      title: "Defensa Legal Estratégica",
      result: "Resolución Favorable",
      description: `Nuestra firma ha representado exitosamente a múltiples clientes en ${formattedCityName}, protegiendo su patrimonio y garantizando el respeto a sus derechos ante tribunales locales y federales.`
    }
  };

  const cityInfo = citySlug && cityData[citySlug] ? cityData[citySlug] : defaultCityInfo;
  const cityName = cityInfo.name;

  return (
    <Layout
      title={`Abogado en ${cityName}, Oaxaca | Lic. Karina Orocio`}
      description={`Despacho jurídico y servicios legales en ${cityName}, Oaxaca. Especialistas en reducción de predial, derecho civil, familiar y administrativo en la región de ${cityInfo.region}.`}
      keywords={`abogado en ${cityName}, abogada ${cityName} oaxaca, despacho juridico ${cityName}, servicios legales ${cityName}, reduccion predial ${cityName}, divorcio ${cityName}`}
    >
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center bg-cream overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={cityInfo.image}
            alt={`Servicios legales en ${cityName}, Oaxaca`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/85 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-20 text-center">
          <div className="inline-flex items-center space-x-2 bg-cream/10 text-cream px-4 py-2 rounded-full text-xs font-bold mb-8 border border-cream/20 uppercase tracking-widest">
            <MapPin className="h-4 w-4 text-gold" />
            <span>{cityName}, Oaxaca</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8 text-cream">
            Abogada Especialista en <br/><span className="italic text-gold">{cityName}</span>
          </h1>
          <p className="text-cream-dark text-lg font-light max-w-3xl mx-auto mb-10 leading-relaxed">
            {cityInfo.context}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto" className="inline-flex items-center justify-center space-x-3 bg-gold text-charcoal px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-cream transition-colors duration-300">
              <span>Agendar Asesoría</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="tel:9516153010" className="inline-flex items-center justify-center space-x-3 border border-cream text-cream px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-cream hover:text-charcoal transition-colors duration-300">
              <span>Llamar: 951-615-30-10</span>
            </a>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-charcoal text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl mb-4">Casos de Éxito en <span className="italic text-gold">{cityName}</span></h2>
            <p className="font-light text-cream-dark text-lg max-w-2xl mx-auto">
              Resultados comprobables que respaldan nuestra experiencia y compromiso con los clientes de la región de {cityInfo.region}.
            </p>
          </div>
          
          <div className="bg-cream/5 border border-gold/20 p-8 md:p-12 rounded-sm max-w-4xl mx-auto relative">
            <div className="absolute top-0 right-0 bg-gold text-charcoal px-4 py-1 text-xs font-bold tracking-widest uppercase transform translate-x-2 -translate-y-2">
              Caso Destacado
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-gold mb-4">{cityInfo.caseStudy.title}</h3>
            <div className="flex items-center space-x-2 mb-6">
              <Award className="h-5 w-5 text-cream" />
              <span className="text-cream font-medium tracking-wider uppercase text-sm">Resultado: {cityInfo.caseStudy.result}</span>
            </div>
            <p className="text-cream-dark font-light leading-relaxed text-lg mb-8">
              {cityInfo.caseStudy.description}
            </p>
            <Link 
              to="/casos-de-exito"
              className="inline-flex items-center text-gold text-sm tracking-widest uppercase font-medium hover:text-cream transition-colors"
            >
              Ver todos los casos de éxito <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services specific to the city */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-charcoal mb-4">Servicios Legales en <span className="italic text-gold">{cityName}</span></h2>
            <p className="font-light text-charcoal-light text-lg max-w-2xl mx-auto">
              Nuestra firma cuenta con la experiencia necesaria para resolver conflictos legales complejos ante las autoridades y juzgados correspondientes a {cityName}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 border border-gold/20 shadow-sm rounded-sm">
              <h3 className="font-serif text-2xl text-charcoal mb-4">Reducción de Predial</h3>
              <p className="text-charcoal-light font-light mb-6 leading-relaxed">
                Protegemos su patrimonio inmobiliario en {cityName} contra cobros excesivos, actualizaciones catastrales arbitrarias y multas injustificadas mediante Juicios de Nulidad.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3"><CheckCircle2 className="w-5 h-5 text-gold shrink-0" /><span className="text-sm text-charcoal-light">Análisis de boletas prediales</span></li>
                <li className="flex items-start space-x-3"><CheckCircle2 className="w-5 h-5 text-gold shrink-0" /><span className="text-sm text-charcoal-light">Impugnación de cobros excesivos</span></li>
              </ul>
              <Link to="/servicios/reduccion-predial-oaxaca" className="text-gold text-sm tracking-widest uppercase font-medium hover:text-charcoal transition-colors">Ver Detalles &rarr;</Link>
            </div>

            <div className="bg-white p-10 border border-gold/20 shadow-sm rounded-sm">
              <h3 className="font-serif text-2xl text-charcoal mb-4">Derecho Civil y Patrimonial</h3>
              <p className="text-charcoal-light font-light mb-6 leading-relaxed">
                Regularización de propiedades, juicios de usucapión y trámites sucesorios (intestados) para asegurar la transmisión correcta de sus bienes en {cityName}.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3"><CheckCircle2 className="w-5 h-5 text-gold shrink-0" /><span className="text-sm text-charcoal-light">Juicios de Usucapión</span></li>
                <li className="flex items-start space-x-3"><CheckCircle2 className="w-5 h-5 text-gold shrink-0" /><span className="text-sm text-charcoal-light">Juicios Sucesorios Intestamentarios</span></li>
              </ul>
              <Link to="/servicios/derecho-civil-oaxaca" className="text-gold text-sm tracking-widest uppercase font-medium hover:text-charcoal transition-colors">Ver Detalles &rarr;</Link>
            </div>

            <div className="bg-white p-10 border border-gold/20 shadow-sm rounded-sm">
              <h3 className="font-serif text-2xl text-charcoal mb-4">Derecho Familiar</h3>
              <p className="text-charcoal-light font-light mb-6 leading-relaxed">
                Representación sensible y firme en los juzgados familiares de la región para casos de divorcio incausado, pensión alimenticia y guarda y custodia.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3"><CheckCircle2 className="w-5 h-5 text-gold shrink-0" /><span className="text-sm text-charcoal-light">Divorcios Express (Incausados)</span></li>
                <li className="flex items-start space-x-3"><CheckCircle2 className="w-5 h-5 text-gold shrink-0" /><span className="text-sm text-charcoal-light">Pensiones Alimenticias</span></li>
              </ul>
              <Link to="/servicios/derecho-familiar-oaxaca" className="text-gold text-sm tracking-widest uppercase font-medium hover:text-charcoal transition-colors">Ver Detalles &rarr;</Link>
            </div>

            <div className="bg-white p-10 border border-gold/20 shadow-sm rounded-sm">
              <h3 className="font-serif text-2xl text-charcoal mb-4">Derecho Administrativo</h3>
              <p className="text-charcoal-light font-light mb-6 leading-relaxed">
                Defensa legal para negocios y particulares en {cityName} contra clausuras arbitrarias, multas de tránsito y actos inconstitucionales de autoridades.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start space-x-3"><CheckCircle2 className="w-5 h-5 text-gold shrink-0" /><span className="text-sm text-charcoal-light">Juicios de Amparo</span></li>
                <li className="flex items-start space-x-3"><CheckCircle2 className="w-5 h-5 text-gold shrink-0" /><span className="text-sm text-charcoal-light">Defensa contra Clausuras</span></li>
              </ul>
              <Link to="/servicios/derecho-administrativo-oaxaca" className="text-gold text-sm tracking-widest uppercase font-medium hover:text-charcoal transition-colors">Ver Detalles &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us / Authority */}
      <section className="py-24 bg-white border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="font-serif text-4xl text-charcoal mb-6">Por qué elegirnos en <br/><span className="italic text-gold">{cityName}</span></h2>
              <p className="font-light text-charcoal-light mb-8 leading-relaxed text-lg">
                Conocemos a fondo el funcionamiento de las instituciones, juzgados y tribunales en el Estado de Oaxaca. Nuestra firma se compromete a brindarle una representación ética, transparente y orientada a resultados.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-charcoal/5 p-3 rounded-full shrink-0">
                    <ShieldCheck className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-charcoal mb-2">Protección Patrimonial</h4>
                    <p className="font-light text-charcoal-light text-sm leading-relaxed">Diseñamos estrategias legales para asegurar que sus bienes y los de su familia estén protegidos ante cualquier eventualidad o acto de autoridad.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-charcoal/5 p-3 rounded-full shrink-0">
                    <Scale className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-charcoal mb-2">Litigio Estratégico</h4>
                    <p className="font-light text-charcoal-light text-sm leading-relaxed">No improvisamos. Cada demanda, recurso o amparo es elaborado con el más alto rigor técnico jurídico para maximizar las probabilidades de éxito.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-charcoal/5 p-3 rounded-full shrink-0">
                    <Landmark className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-charcoal mb-2">Conocimiento Local</h4>
                    <p className="font-light text-charcoal-light text-sm leading-relaxed">Entendemos el contexto social, económico y jurídico específico de {cityName} y la región de {cityInfo.region}, lo que nos da una ventaja competitiva en los tribunales locales.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
               <div className="relative p-3 border border-gold/30 rounded-sm bg-cream">
                 <img src="/karina-about.png" alt="Lic. Karina Orocio" className="w-full aspect-[4/5] object-cover mix-blend-luminosity opacity-90" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1000'; }} />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-charcoal py-24 text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl mb-6">¿Necesita un abogado en {cityName}?</h2>
          <p className="text-cream-dark mb-10 text-lg font-light max-w-2xl mx-auto">
            No deje su tranquilidad y patrimonio al azar. Agende una consulta confidencial para analizar su situación legal y diseñar la mejor estrategia.
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
