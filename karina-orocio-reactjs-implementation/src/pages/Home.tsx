import { Layout } from '../components/Layout';
import { ArrowRight, Star, Award, ShieldCheck, MapPin, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Layout
      title="Abogada Karina Orocio | Despacho Jurídico en Oaxaca de Juárez"
      description="Firma legal de prestigio en Oaxaca. Especialistas en reducción de predial, derecho civil, familiar y administrativo. Agende su asesoría legal con la Lic. Karina Orocio."
      keywords="abogados en oaxaca, abogada oaxaca, despacho juridico oaxaca, reduccion de predial oaxaca, abogado civil oaxaca, abogado familiar oaxaca, karina orocio, divorcios oaxaca, juicios sucesorios oaxaca"
    >
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-12 pb-20">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2 bg-charcoal/5 text-charcoal px-4 py-2 rounded-full text-xs font-bold mb-8 border border-charcoal/10 uppercase tracking-widest">
              <MapPin className="h-4 w-4 text-gold" />
              <span>Oaxaca de Juárez, México</span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8 text-charcoal">
              Defensa legal <br/><span className="italic text-gold">de prestigio</span><br/>y resultados.
            </h1>
            <p className="text-charcoal-light text-lg font-light max-w-lg mb-10 leading-relaxed">
              Protegemos su patrimonio y tranquilidad con estrategias jurídicas de alto nivel. Especialistas en litigio estratégico, derecho civil, familiar y reducción de impuestos prediales en el Estado de Oaxaca.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contacto" className="inline-flex items-center justify-center space-x-3 bg-charcoal text-cream px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-gold transition-colors duration-300">
                <span>Agendar Asesoría</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:9516153010" className="inline-flex items-center justify-center space-x-3 border border-charcoal text-charcoal px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-charcoal hover:text-cream transition-colors duration-300">
                <span>Llamar: 951-615-30-10</span>
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-gold/30 flex items-center space-x-8">
              <div>
                <p className="font-serif text-3xl text-charcoal mb-1">10+</p>
                <p className="text-xs tracking-widest uppercase font-medium text-charcoal-light">Años de Experiencia</p>
              </div>
              <div className="w-px h-12 bg-gold/30"></div>
              <div>
                <p className="font-serif text-3xl text-charcoal mb-1">98%</p>
                <p className="text-xs tracking-widest uppercase font-medium text-charcoal-light">Casos de Éxito</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
            {/* Image Container for the Lawyer */}
            <div className="relative w-full max-w-md aspect-[3/4] rounded-t-full overflow-hidden border border-gold/30 p-3 bg-cream">
               <div className="w-full h-full rounded-t-full overflow-hidden bg-cream-dark relative">
                  {/* INSTRUCCIÓN: La imagen se carga desde la carpeta public */}
                  <img src="/karina-hero.png" alt="Lic. Karina Orocio - Abogada en Oaxaca" className="w-full h-full object-cover object-top mix-blend-multiply" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800'; }} />
               </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute bottom-10 -left-10 bg-charcoal text-cream p-6 rounded-sm shadow-2xl border border-gold/20 hidden md:block">
              <div className="flex items-center space-x-4">
                <div className="bg-gold/20 p-3 rounded-full">
                  <Award className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase font-medium text-gold mb-1">Especialista en</p>
                  <p className="font-serif text-xl">Reducción de Predial</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-charcoal text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="md:col-span-1">
              <h2 className="font-serif text-4xl mb-6">Áreas de <br/><span className="italic text-gold">Especialidad</span></h2>
              <p className="font-light text-cream-dark mb-8 leading-relaxed">
                Nuestra práctica se centra en áreas críticas del derecho en Oaxaca, donde la precisión y la estrategia determinan el éxito del caso.
              </p>
              <Link to="/servicios" className="text-gold text-sm tracking-widest uppercase font-medium hover:text-cream transition-colors flex items-center space-x-2">
                <span>Ver todos los servicios</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div className="border-t border-gold/30 pt-6 group">
                <span className="text-gold font-serif text-2xl mb-4 block">01.</span>
                <h3 className="text-xl font-serif mb-3">
                  <Link to="/servicios/reduccion-predial-oaxaca" className="hover:text-gold transition-colors">Reducción de Predial</Link>
                </h3>
                <p className="font-light text-cream-dark text-sm leading-relaxed mb-4">
                  Defensa contra cobros excesivos de impuesto predial en Oaxaca de Juárez y municipios conurbados mediante juicios de nulidad.
                </p>
                <Link to="/servicios/reduccion-predial-oaxaca" className="text-xs tracking-widest uppercase font-medium text-gold opacity-0 group-hover:opacity-100 transition-opacity">Leer más &rarr;</Link>
              </div>
              <div className="border-t border-gold/30 pt-6 group">
                <span className="text-gold font-serif text-2xl mb-4 block">02.</span>
                <h3 className="text-xl font-serif mb-3">
                  <Link to="/servicios/derecho-civil-oaxaca" className="hover:text-gold transition-colors">Derecho Civil</Link>
                </h3>
                <p className="font-light text-cream-dark text-sm leading-relaxed mb-4">
                  Regularización de propiedades (Usucapión), juicios sucesorios (intestados y testamentarios) y elaboración de contratos de alto rigor.
                </p>
                <Link to="/servicios/derecho-civil-oaxaca" className="text-xs tracking-widest uppercase font-medium text-gold opacity-0 group-hover:opacity-100 transition-opacity">Leer más &rarr;</Link>
              </div>
              <div className="border-t border-gold/30 pt-6 group">
                <span className="text-gold font-serif text-2xl mb-4 block">03.</span>
                <h3 className="text-xl font-serif mb-3">
                  <Link to="/servicios/derecho-familiar-oaxaca" className="hover:text-gold transition-colors">Derecho Familiar</Link>
                </h3>
                <p className="font-light text-cream-dark text-sm leading-relaxed mb-4">
                  Resolución estratégica de divorcios incausados, pensiones alimenticias y guarda y custodia ante los Juzgados Familiares del Centro.
                </p>
                <Link to="/servicios/derecho-familiar-oaxaca" className="text-xs tracking-widest uppercase font-medium text-gold opacity-0 group-hover:opacity-100 transition-opacity">Leer más &rarr;</Link>
              </div>
              <div className="border-t border-gold/30 pt-6 group">
                <span className="text-gold font-serif text-2xl mb-4 block">04.</span>
                <h3 className="text-xl font-serif mb-3">
                  <Link to="/servicios/derecho-administrativo-oaxaca" className="hover:text-gold transition-colors">Derecho Administrativo</Link>
                </h3>
                <p className="font-light text-cream-dark text-sm leading-relaxed mb-4">
                  Defensa contra clausuras de negocios, multas de tránsito y actos arbitrarios de autoridades municipales y estatales.
                </p>
                <Link to="/servicios/derecho-administrativo-oaxaca" className="text-xs tracking-widest uppercase font-medium text-gold opacity-0 group-hover:opacity-100 transition-opacity">Leer más &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authority / SEO Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gold/20 transform translate-x-4 translate-y-4"></div>
                <img src="/karina-about.png" alt="Lic. Karina Orocio - Despacho Legal Oaxaca" className="w-full aspect-[4/5] object-cover relative z-10 grayscale hover:grayscale-0 transition-all duration-700" onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=1000'; }} />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="font-serif text-4xl text-charcoal mb-6">Autoridad Legal en <br/><span className="italic text-gold">Oaxaca de Juárez</span></h2>
              <p className="text-charcoal-light font-light text-lg mb-6 leading-relaxed">
                Comprendemos profundamente el entorno jurídico y administrativo del Estado de Oaxaca. Nuestra firma se distingue por un análisis meticuloso y una ejecución impecable en cada caso que asumimos ante los juzgados locales y federales.
              </p>
              <p className="text-charcoal-light font-light text-lg mb-10 leading-relaxed">
                Ya sea que enfrente un cobro desproporcionado de impuesto predial por parte del municipio de Oaxaca de Juárez, Santa Lucía del Camino o Xoxocotlán, o requiera asegurar el patrimonio de su familia a través de un juicio sucesorio, le brindamos certeza jurídica absoluta.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="flex items-start space-x-3">
                  <ShieldCheck className="h-6 w-6 text-gold shrink-0" />
                  <div>
                    <h4 className="font-serif text-lg text-charcoal mb-1">Defensa Estratégica</h4>
                    <p className="text-sm font-light text-charcoal-light">Análisis profundo de cada expediente.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Scale className="h-6 w-6 text-gold shrink-0" />
                  <div>
                    <h4 className="font-serif text-lg text-charcoal mb-1">Ética Profesional</h4>
                    <p className="text-sm font-light text-charcoal-light">Transparencia total en honorarios y procesos.</p>
                  </div>
                </div>
              </div>

              <Link to="/blog" className="inline-flex items-center space-x-3 border border-charcoal text-charcoal px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-charcoal hover:text-cream transition-colors duration-300">
                <span>Leer Artículos Editoriales</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials / Reviews */}
      <section className="py-24 bg-cream-dark border-y border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-charcoal mb-4">Casos de <span className="italic text-gold">Éxito</span> y Testimonios</h2>
            <p className="font-light text-charcoal-light text-lg max-w-2xl mx-auto">
              La confianza de nuestros clientes en Oaxaca es nuestro mayor respaldo. Resultados comprobables en litigio estratégico.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-cream p-10 border border-gold/20 relative">
              <div className="flex text-gold mb-6">
                <Star className="h-5 w-5 fill-current" /><Star className="h-5 w-5 fill-current" /><Star className="h-5 w-5 fill-current" /><Star className="h-5 w-5 fill-current" /><Star className="h-5 w-5 fill-current" />
              </div>
              <p className="font-light text-charcoal-light italic mb-8 leading-relaxed">
                "El municipio de Oaxaca me quería cobrar una cantidad absurda de predial por una supuesta actualización. La Licenciada Karina promovió un juicio de nulidad y logramos reducir el pago en un 60%. Excelente abogada, muy profesional."
              </p>
              <div className="border-t border-gold/30 pt-4">
                <p className="font-serif text-lg text-charcoal">Roberto M.</p>
                <p className="text-xs tracking-widest uppercase font-medium text-gold">Caso: Reducción de Predial</p>
              </div>
            </div>

            <div className="bg-cream p-10 border border-gold/20 relative">
              <div className="flex text-gold mb-6">
                <Star className="h-5 w-5 fill-current" /><Star className="h-5 w-5 fill-current" /><Star className="h-5 w-5 fill-current" /><Star className="h-5 w-5 fill-current" /><Star className="h-5 w-5 fill-current" />
              </div>
              <p className="font-light text-charcoal-light italic mb-8 leading-relaxed">
                "Llevábamos años intentando arreglar las escrituras de la casa de mis abuelos. Gracias a su asesoría en el juicio sucesorio intestamentario, por fin tenemos certeza jurídica sobre nuestro patrimonio familiar en Jalatlaco."
              </p>
              <div className="border-t border-gold/30 pt-4">
                <p className="font-serif text-lg text-charcoal">Familia García</p>
                <p className="text-xs tracking-widest uppercase font-medium text-gold">Caso: Juicio Sucesorio</p>
              </div>
            </div>

            <div className="bg-cream p-10 border border-gold/20 relative">
              <div className="flex text-gold mb-6">
                <Star className="h-5 w-5 fill-current" /><Star className="h-5 w-5 fill-current" /><Star className="h-5 w-5 fill-current" /><Star className="h-5 w-5 fill-current" /><Star className="h-5 w-5 fill-current" />
              </div>
              <p className="font-light text-charcoal-light italic mb-8 leading-relaxed">
                "Mi proceso de divorcio fue rápido y sin complicaciones gracias a su intervención. Logró un convenio justo para la pensión alimenticia de mis hijos. Recomiendo ampliamente su despacho jurídico."
              </p>
              <div className="border-t border-gold/30 pt-4">
                <p className="font-serif text-lg text-charcoal">Ana Lilia S.</p>
                <p className="text-xs tracking-widest uppercase font-medium text-gold">Caso: Divorcio Incausado</p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link to="/casos-de-exito" className="inline-flex items-center space-x-3 border border-charcoal text-charcoal px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-charcoal hover:text-cream transition-colors duration-300">
              <span>Ver todos los casos de éxito</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Local SEO FAQ */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-charcoal mb-4">Preguntas <span className="italic text-gold">Frecuentes</span></h2>
            <p className="font-light text-charcoal-light text-lg">
              Respuestas claras a las dudas legales más comunes en Oaxaca.
            </p>
          </div>

          <div className="space-y-8">
            <div className="border-b border-gold/30 pb-6">
              <h3 className="font-serif text-2xl text-charcoal mb-3">¿Es posible reducir el pago del impuesto predial en Oaxaca de Juárez?</h3>
              <p className="font-light text-charcoal-light leading-relaxed">
                Sí. Si el cobro presenta incrementos desproporcionados o se basa en valuaciones catastrales erróneas, es posible interponer un Recurso Administrativo o un Juicio de Nulidad ante el Tribunal de Justicia Administrativa del Estado de Oaxaca para pagar lo justo.
              </p>
            </div>
            <div className="border-b border-gold/30 pb-6">
              <h3 className="font-serif text-2xl text-charcoal mb-3">¿Cuánto tiempo tarda un juicio sucesorio intestamentario en Oaxaca?</h3>
              <p className="font-light text-charcoal-light leading-relaxed">
                El tiempo varía dependiendo de si hay acuerdo entre los herederos. Si no hay controversia, el proceso ante los Juzgados Civiles o Familiares del Distrito Judicial del Centro puede tomar entre 6 y 12 meses hasta la adjudicación de los bienes.
              </p>
            </div>
            <div className="border-b border-gold/30 pb-6">
              <h3 className="font-serif text-2xl text-charcoal mb-3">¿Qué necesito para un divorcio incausado (exprés) en Oaxaca?</h3>
              <p className="font-light text-charcoal-light leading-relaxed">
                Solo requiere la voluntad de uno de los cónyuges, acta de matrimonio, actas de nacimiento de los hijos (si los hay) y una propuesta de convenio que regule la pensión alimenticia, guarda y custodia, y la liquidación de la sociedad conyugal.
              </p>
            </div>
            <div className="border-b border-gold/30 pb-6">
              <h3 className="font-serif text-2xl text-charcoal mb-3">¿Cómo puedo recuperar mi propiedad si el inquilino no paga la renta en Oaxaca?</h3>
              <p className="font-light text-charcoal-light leading-relaxed">
                A través de un Juicio Especial de Desahucio. Si el inquilino adeuda dos o más mensualidades, podemos iniciar este proceso legal para requerir el pago, embargar bienes si es necesario, y finalmente lograr el desalojo (lanzamiento) para recuperar su inmueble.
              </p>
            </div>
            <div className="border-b border-gold/30 pb-6">
              <h3 className="font-serif text-2xl text-charcoal mb-3">¿Qué hago si clausuran mi negocio injustamente en Oaxaca?</h3>
              <p className="font-light text-charcoal-light leading-relaxed">
                Si la clausura por parte de autoridades municipales o estatales fue arbitraria, sin orden fundada o sin respetar su garantía de audiencia, podemos promover un Juicio de Amparo Indirecto solicitando la suspensión del acto para reabrir su negocio mientras se resuelve el juicio.
              </p>
            </div>
            <div className="border-b border-gold/30 pb-6">
              <h3 className="font-serif text-2xl text-charcoal mb-3">¿Ofrecen asesoría gratuita?</h3>
              <p className="font-light text-charcoal-light leading-relaxed">
                Sí, la primera consulta de evaluación de su caso es totalmente gratuita. Analizamos sus documentos y le planteamos la viabilidad jurídica y la estrategia a seguir sin compromiso en nuestras oficinas en Oaxaca.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
