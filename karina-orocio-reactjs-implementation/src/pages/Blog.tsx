import { Layout } from '../components/Layout';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
  {
    slug: "como-reducir-pago-impuesto-predial-oaxaca",
    title: "¿Cómo reducir el pago del Impuesto Predial en Oaxaca de Juárez?",
    excerpt: "Descubra los mecanismos legales para impugnar cobros excesivos y desproporcionados de predial ante las autoridades municipales y estatales en Oaxaca.",
    category: "Derecho Administrativo"
  },
  {
    slug: "guia-divorcio-incausado-express-oaxaca",
    title: "El Divorcio Incausado en Oaxaca: Proceso y Protección Patrimonial",
    excerpt: "Análisis detallado sobre el proceso de divorcio sin expresión de causa en los Juzgados Familiares del Centro, enfocado en la protección de activos y la resolución eficiente de conflictos.",
    category: "Derecho Familiar"
  },
  {
    slug: "juicio-sucesorio-intestamentario-oaxaca-pasos",
    title: "Transmisión Patrimonial: El Juicio Sucesorio Intestamentario en Oaxaca",
    excerpt: "Guía legal sobre cómo asegurar la correcta transmisión de bienes inmuebles en Oaxaca cuando no existe disposición testamentaria, evitando conflictos familiares.",
    category: "Derecho Civil"
  },
  {
    slug: "juicio-usucapion-oaxaca-regularizar-propiedad",
    title: "Juicio de Usucapión en Oaxaca: Cómo Regularizar y Obtener Escrituras de su Propiedad",
    excerpt: "Si posee un terreno o casa en Oaxaca sin escrituras a su nombre, la prescripción positiva o usucapión es la vía legal para obtener certeza jurídica. Conozca los requisitos y el proceso civil.",
    category: "Derecho Civil"
  },
  {
    slug: "clausura-negocios-oaxaca-amparo",
    title: "Clausura de Negocios en Oaxaca: Cómo Defenderse con un Juicio de Amparo",
    excerpt: "Si su establecimiento comercial en Oaxaca fue clausurado arbitrariamente por autoridades municipales o estatales, conozca cómo el Juicio de Amparo y la suspensión pueden reabrir sus puertas.",
    category: "Derecho Administrativo"
  },
  {
    slug: "pension-alimenticia-oaxaca-calculo-y-derechos",
    title: "Pensión Alimenticia en Oaxaca: Cálculo, Derechos y Obligaciones",
    excerpt: "Conozca cómo se calcula la pensión alimenticia en Oaxaca, qué conceptos incluye y cómo asegurar el cumplimiento de esta obligación vital para el bienestar de los menores.",
    category: "Derecho Familiar"
  },
  {
    slug: "contratos-compraventa-inmuebles-oaxaca-precauciones",
    title: "Contratos de Compraventa de Inmuebles en Oaxaca: Precauciones Legales",
    excerpt: "Antes de comprar o vender una propiedad en Oaxaca, es fundamental contar con un contrato de compraventa blindado legalmente. Descubra los elementos esenciales para evitar fraudes.",
    category: "Derecho Civil"
  },
  {
    slug: "multas-transito-excesivas-oaxaca-juicio-nulidad",
    title: "Multas de Tránsito Excesivas en Oaxaca: Defensa Legal mediante Juicio de Nulidad",
    excerpt: "Las multas de tránsito desproporcionadas en Oaxaca pueden ser impugnadas. Conozca el proceso del Juicio de Nulidad ante el Tribunal de Justicia Administrativa para cancelar sanciones injustas.",
    category: "Derecho Administrativo"
  },
  {
    slug: "guarda-y-custodia-menores-oaxaca-criterios",
    title: "Guarda y Custodia de Menores en Oaxaca: Criterios de los Jueces Familiares",
    excerpt: "Análisis de los factores que los jueces familiares en Oaxaca consideran al determinar la guarda y custodia de los hijos, priorizando siempre el interés superior del menor.",
    category: "Derecho Familiar"
  },
  {
    slug: "desalojo-arrendamiento-oaxaca-juicio-especial",
    title: "Juicio Especial de Desahucio en Oaxaca: Cómo Recuperar su Inmueble Arrendado",
    excerpt: "Si su inquilino ha dejado de pagar la renta en Oaxaca, el juicio especial de desahucio es la herramienta legal para recuperar la posesión de su inmueble de manera ágil y efectiva.",
    category: "Derecho Civil"
  }
];

export default function Blog() {
  return (
    <Layout
      title="Editorial Legal | Karina Orocio"
      description="Artículos de autoridad sobre derecho civil, familiar y administrativo en Oaxaca."
    >
      <section className="bg-charcoal text-cream py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl mb-6">Editorial <span className="italic text-gold">Legal</span></h1>
          <p className="font-light text-cream-dark max-w-2xl mx-auto text-lg">
            Análisis jurídico profundo sobre los retos legales más relevantes en el Estado de Oaxaca.
          </p>
        </div>
      </section>

      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map(post => (
              <article key={post.slug} className="group cursor-pointer">
                <div className="border-t border-charcoal pt-6">
                  <span className="text-gold tracking-widest uppercase text-[10px] font-bold mb-4 block">{post.category}</span>
                  <h2 className="font-serif text-2xl text-charcoal mb-4 group-hover:text-gold transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-charcoal-light font-light text-sm mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link to={`/blog/${post.slug}`} className="text-charcoal font-medium text-xs tracking-widest uppercase group-hover:text-gold transition-colors flex items-center space-x-2">
                    <span>Leer Artículo</span> <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
