import { useParams, Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { ArrowLeft, Calendar, User } from 'lucide-react';

// Mock database of full articles
const articles = {
  "como-reducir-pago-impuesto-predial-oaxaca": {
    title: "¿Cómo reducir el pago del Impuesto Predial en Oaxaca de Juárez?",
    date: "15 Oct 2023",
    content: `
      <h2>El problema del predial excesivo en Oaxaca</h2>
      <p>Año con año, cientos de propietarios en Oaxaca de Juárez y municipios conurbados se enfrentan a cobros de impuesto predial que resultan desproporcionados, confiscatorios y, en muchos casos, inconstitucionales. Esto se debe frecuentemente a actualizaciones catastrales arbitrarias o a la aplicación de tarifas que no corresponden a la realidad del inmueble.</p>
      
      <h2>¿Es legal el cobro que me están haciendo?</h2>
      <p>La Suprema Corte de Justicia de la Nación ha establecido criterios claros sobre la proporcionalidad y equidad tributaria. Si su boleta predial presenta un incremento desmedido en comparación con el año anterior sin que haya realizado modificaciones a su propiedad, es altamente probable que el cobro sea impugnable.</p>
      
      <h3>Pasos para la defensa legal</h3>
      <ol>
        <li><strong>Análisis de la Boleta:</strong> Revisamos detalladamente su boleta de cobro actual y el historial de pagos.</li>
        <li><strong>Recurso Administrativo:</strong> En primera instancia, se puede presentar un recurso de revisión ante la autoridad municipal.</li>
        <li><strong>Juicio de Nulidad:</strong> De ser necesario, acudimos ante el Tribunal de Justicia Administrativa del Estado de Oaxaca para demandar la nulidad del cobro excesivo.</li>
        <li><strong>Juicio de Amparo:</strong> Como última instancia, el amparo federal protege sus derechos constitucionales contra actos arbitrarios.</li>
      </ol>

      <h2>Proteja su patrimonio</h2>
      <p>No permita que cobros injustificados afecten su economía. En nuestra firma, realizamos un análisis de viabilidad para determinar si su caso es candidato a una reducción legal del impuesto predial, asegurando que pague únicamente lo justo conforme a derecho.</p>
    `
  },
  "guia-divorcio-incausado-express-oaxaca": {
    title: "El Divorcio Incausado en Oaxaca: Proceso y Protección Patrimonial",
    date: "28 Sep 2023",
    content: `
      <h2>La evolución del Divorcio en Oaxaca</h2>
      <p>El divorcio incausado, comúnmente conocido como "divorcio exprés", ha transformado el derecho familiar en Oaxaca. Ya no es necesario probar causales como adulterio o abandono; basta con la voluntad de uno de los cónyuges de no querer continuar con el matrimonio.</p>
      
      <h2>Protección Patrimonial y Familiar</h2>
      <p>Aunque el vínculo matrimonial se disuelve de manera más ágil, las consecuencias inherentes al mismo requieren una estrategia jurídica impecable. Es fundamental presentar una propuesta de convenio que regule:</p>
      <ul>
        <li><strong>Guarda y Custodia:</strong> Determinación de quién ejercerá el cuidado de los menores.</li>
        <li><strong>Régimen de Convivencia:</strong> Establecimiento de días y horas para el cónyuge no custodio.</li>
        <li><strong>Pensión Alimenticia:</strong> Cálculo proporcional y equitativo para garantizar el bienestar de los hijos.</li>
        <li><strong>Liquidación de la Sociedad Conyugal:</strong> División justa de los bienes adquiridos durante el matrimonio.</li>
      </ul>

      <h2>Estrategia Legal</h2>
      <p>Nuestro enfoque no solo busca la disolución del vínculo, sino la protección integral de su patrimonio y la estabilidad emocional de su familia, negociando acuerdos sólidos o litigando con firmeza cuando es necesario.</p>
    `
  },
  "juicio-sucesorio-intestamentario-oaxaca-pasos": {
    title: "Transmisión Patrimonial: El Juicio Sucesorio Intestamentario en Oaxaca",
    date: "22 Ago 2023",
    content: `
      <h2>¿Qué sucede cuando no hay testamento?</h2>
      <p>En Oaxaca, cuando una persona fallece sin dejar disposición testamentaria, la ley determina quiénes tienen derecho a heredar sus bienes mediante un Juicio Sucesorio Intestamentario. Este proceso es vital para dar certeza jurídica al patrimonio familiar.</p>
      
      <h2>Etapas del Juicio Sucesorio</h2>
      <ol>
        <li><strong>Denuncia de la Sucesión:</strong> Se presenta ante el Juez Familiar o Notario Público, acreditando el entroncamiento (parentesco) con el autor de la sucesión.</li>
        <li><strong>Declaratoria de Herederos y Nombramiento de Albacea:</strong> El juez reconoce a quienes tienen derecho a heredar y designa al representante de la sucesión (albacea).</li>
        <li><strong>Inventario y Avalúo:</strong> Se realiza una relación detallada de todos los bienes, derechos y obligaciones del difunto, asignándoles un valor económico.</li>
        <li><strong>Administración y Rendición de Cuentas:</strong> El albacea administra los bienes y rinde cuentas a los herederos.</li>
        <li><strong>Partición y Adjudicación:</strong> Se elabora el proyecto de división de los bienes y, una vez aprobado, se adjudican a los herederos, culminando con la escrituración.</li>
      </ol>

      <h2>Certeza Jurídica</h2>
      <p>Evite conflictos familiares y asegure la titularidad de sus bienes. Un juicio sucesorio llevado con rigor y transparencia es la mejor inversión para proteger el legado familiar.</p>
    `
  },
  "juicio-usucapion-oaxaca-regularizar-propiedad": {
    title: "Juicio de Usucapión en Oaxaca: Cómo Regularizar y Obtener Escrituras de su Propiedad",
    date: "10 Feb 2024",
    content: `
      <h2>¿Qué es la Usucapión o Prescripción Positiva?</h2>
      <p>En Oaxaca, muchas propiedades carecen de escrituras formales, existiendo únicamente contratos privados de compraventa o constancias de posesión. La usucapión es la figura jurídica que permite a una persona adquirir la propiedad de un bien inmueble por el simple transcurso del tiempo y bajo ciertas condiciones que marca la ley civil.</p>
      
      <h2>Requisitos para la Usucapión en Oaxaca</h2>
      <p>Para que un Juez Civil en Oaxaca declare la usucapión a su favor, la posesión del inmueble debe cumplir con los siguientes requisitos:</p>
      <ul>
        <li><strong>En concepto de propietario:</strong> Debe poseer el bien comportándose como el verdadero dueño (pagando predial, servicios, realizando mejoras).</li>
        <li><strong>Pacífica:</strong> La posesión debe haberse adquirido sin violencia.</li>
        <li><strong>Continua:</strong> No debe haber interrupciones en la posesión del inmueble.</li>
        <li><strong>Pública:</strong> La posesión debe ser conocida por la comunidad o estar inscrita en el Registro Público de la Propiedad.</li>
      </ul>

      <h2>El Proceso Legal</h2>
      <p>El juicio de usucapión se tramita ante los Juzgados Civiles del Estado de Oaxaca. Es un proceso técnico que requiere pruebas contundentes (testimoniales, documentales, periciales) para demostrar que se cumplen todos los requisitos legales. Una sentencia favorable le otorgará el título de propiedad definitivo, el cual podrá inscribirse en el Registro Público, dándole plena certeza jurídica sobre su patrimonio.</p>
    `
  },
  "clausura-negocios-oaxaca-amparo": {
    title: "Clausura de Negocios en Oaxaca: Cómo Defenderse con un Juicio de Amparo",
    date: "12 Dic 2023",
    content: `
      <h2>Actos Arbitrarios de Autoridad</h2>
      <p>Los empresarios y comerciantes en Oaxaca frecuentemente enfrentan clausuras de sus establecimientos por parte de autoridades municipales (como inspectores de comercio o protección civil) o estatales. En muchas ocasiones, estas clausuras se ejecutan sin respetar la garantía de audiencia, sin una orden debidamente fundada y motivada, o imponiendo multas desproporcionadas.</p>
      
      <h2>El Juicio de Amparo como Defensa</h2>
      <p>El Juicio de Amparo Indirecto es el medio de defensa constitucional más efectivo contra la clausura ilegal de un negocio. A través de este juicio, promovido ante los Juzgados de Distrito del Poder Judicial de la Federación en Oaxaca, se busca proteger los derechos humanos del comerciante, como la libertad de trabajo y el debido proceso.</p>
      
      <h2>La Suspensión del Acto Reclamado</h2>
      <p>Uno de los beneficios más importantes del amparo es la solicitud de la <strong>suspensión provisional y definitiva</strong>. Si el juez federal concede la suspensión, se ordena a las autoridades levantar los sellos de clausura inmediatamente, permitiendo que el negocio vuelva a operar mientras se resuelve el fondo del juicio. Esto es vital para evitar pérdidas económicas irreparables.</p>
    `
  },
  "pension-alimenticia-oaxaca-calculo-y-derechos": {
    title: "Pensión Alimenticia en Oaxaca: Cálculo, Derechos y Obligaciones",
    date: "05 Nov 2023",
    content: `
      <h2>El Derecho Fundamental a los Alimentos</h2>
      <p>En el derecho familiar oaxaqueño, la pensión alimenticia es una obligación ineludible que busca garantizar el desarrollo integral de los menores y, en ciertos casos, del cónyuge que se dedicó preponderantemente al hogar. Los alimentos no solo comprenden la comida, sino también vestido, habitación, atención médica, educación y esparcimiento.</p>
      
      <h2>¿Cómo se Calcula la Pensión en Oaxaca?</h2>
      <p>No existe una tarifa fija o un porcentaje único establecido en la ley. Los Jueces Familiares en Oaxaca determinan el monto de la pensión alimenticia basándose en dos principios fundamentales:</p>
      <ul>
        <li><strong>La necesidad del que debe recibirlos:</strong> Se evalúan los gastos reales de los menores (colegiaturas, médicos, alimentación, etc.).</li>
        <li><strong>La capacidad del que debe darlos:</strong> Se analizan los ingresos comprobables y el nivel de vida del deudor alimentario.</li>
      </ul>
      <p>Generalmente, los jueces pueden fijar un porcentaje del salario del deudor (que suele oscilar entre el 15% y el 20% por cada hijo) o una cantidad fija mensual en salarios mínimos o UMAS si el deudor no tiene ingresos fijos comprobables.</p>

      <h2>Aseguramiento y Cumplimiento</h2>
      <p>Para garantizar el pago, la ley permite solicitar el embargo precautorio de bienes o el descuento directo vía nómina. El incumplimiento del pago de la pensión alimenticia tiene graves consecuencias legales en Oaxaca, incluyendo la inscripción en el Registro de Deudores Alimentarios Morosos y posibles sanciones penales.</p>
    `
  },
  "contratos-compraventa-inmuebles-oaxaca-precauciones": {
    title: "Contratos de Compraventa de Inmuebles en Oaxaca: Precauciones Legales",
    date: "18 Oct 2023",
    content: `
      <h2>La Importancia de un Contrato Blindado</h2>
      <p>La adquisición o venta de un bien inmueble en Oaxaca es una de las decisiones patrimoniales más importantes. Realizar esta transacción mediante "machotes" descargados de internet o contratos verbales es un riesgo altísimo que frecuentemente deriva en fraudes, juicios largos y pérdida del patrimonio.</p>
      
      <h2>Elementos Esenciales a Verificar Antes de Firmar</h2>
      <p>Antes de firmar cualquier contrato de compraventa o promesa de compraventa, un abogado especialista debe verificar:</p>
      <ol>
        <li><strong>Certificado de Libertad de Gravámenes:</strong> Emitido por el Registro Público de la Propiedad de Oaxaca, asegura que el inmueble no tiene hipotecas, embargos o juicios pendientes.</li>
        <li><strong>Identidad y Capacidad del Vendedor:</strong> Confirmar que quien vende es el legítimo propietario o cuenta con un poder notarial válido y vigente.</li>
        <li><strong>Situación Fiscal y Municipal:</strong> Verificar que el inmueble no tenga adeudos de predial, agua u otros servicios municipales.</li>
        <li><strong>Uso de Suelo:</strong> Especialmente importante si la compra es para fines comerciales.</li>
      </ol>

      <h2>Cláusulas Vitales en el Contrato</h2>
      <p>Un contrato redactado por profesionales incluirá cláusulas de penalización claras en caso de incumplimiento, establecerá la jurisdicción de los tribunales de Oaxaca para cualquier controversia, y detallará las condiciones de entrega física y jurídica (escrituración) del inmueble, protegiendo su inversión de principio a fin.</p>
    `
  },
  "multas-transito-excesivas-oaxaca-juicio-nulidad": {
    title: "Multas de Tránsito Excesivas en Oaxaca: Defensa Legal mediante Juicio de Nulidad",
    date: "02 Sep 2023",
    content: `
      <h2>Abusos en Infracciones de Tránsito</h2>
      <p>Es común que conductores y transportistas en Oaxaca de Juárez y carreteras estatales sean objeto de multas de tránsito (infracciones) que resultan excesivas, carecen de fundamentación y motivación legal, o fueron impuestas por agentes que no tienen la facultad para hacerlo (como en el caso de la policía vial estatal actuando fuera de su jurisdicción).</p>
      
      <h2>El Juicio de Nulidad ante el Tribunal de Justicia Administrativa</h2>
      <p>Usted no está obligado a pagar una multa injusta. La vía legal para cancelar estas infracciones es el Juicio de Nulidad, el cual se promueve ante el Tribunal de Justicia Administrativa del Estado de Oaxaca (TJAO).</p>
      
      <h2>Argumentos de Defensa Comunes</h2>
      <ul>
        <li><strong>Falta de Fundamentación y Motivación:</strong> La boleta de infracción no cita correctamente los artículos del reglamento de tránsito violados o no describe detalladamente las circunstancias de modo, tiempo y lugar de la supuesta infracción.</li>
        <li><strong>Incompetencia de la Autoridad:</strong> El agente que levantó la infracción no tiene la facultad legal para hacerlo en esa vía específica.</li>
        <li><strong>Vicios en el Procedimiento:</strong> No se respetó el derecho de audiencia o la boleta carece de los requisitos formales exigidos por la ley.</li>
      </ul>
      <p>Una sentencia favorable en el Juicio de Nulidad ordenará la cancelación total de la multa y, en su caso, la devolución de las garantías retenidas (placas, tarjeta de circulación o licencia).</p>
    `
  },
  "guarda-y-custodia-menores-oaxaca-criterios": {
    title: "Guarda y Custodia de Menores en Oaxaca: Criterios de los Jueces Familiares",
    date: "15 Ago 2023",
    content: `
      <h2>El Interés Superior del Menor</h2>
      <p>En los juicios familiares en Oaxaca donde se disputa la guarda y custodia de los hijos menores de edad, el principio rector absoluto para los jueces es el "Interés Superior del Menor". Esto significa que todas las decisiones se tomarán buscando el mayor beneficio, bienestar y desarrollo integral de los niños, por encima de los intereses o deseos de los padres.</p>
      
      <h2>Factores que Evalúan los Jueces</h2>
      <p>Para determinar a qué progenitor se le otorgará la custodia, los jueces en Oaxaca consideran múltiples factores, apoyándose frecuentemente en dictámenes periciales en psicología y trabajo social:</p>
      <ul>
        <li><strong>Aptitud e Idoneidad:</strong> Capacidad emocional, psicológica y moral de cada padre para brindar cuidado y educación.</li>
        <li><strong>Entorno Físico y Social:</strong> Las condiciones del hogar y el entorno donde vivirá el menor.</li>
        <li><strong>Vínculo Afectivo:</strong> La relación y apego del menor con cada uno de sus padres.</li>
        <li><strong>Opinión del Menor:</strong> Dependiendo de su edad y madurez, los jueces pueden escuchar la preferencia del niño o niña.</li>
        <li><strong>Disponibilidad de Tiempo:</strong> La capacidad de cada padre para dedicar tiempo de calidad al cuidado diario.</li>
      </ul>

      <h2>Custodia Compartida vs. Custodia Monoparental</h2>
      <p>Aunque la tendencia moderna busca fomentar la custodia compartida para que ambos padres participen equitativamente en la crianza, en Oaxaca la custodia monoparental (con un régimen de visitas para el otro progenitor) sigue siendo común cuando existen altos niveles de conflicto entre las partes o cuando la dinámica familiar así lo requiere para proteger la estabilidad del menor.</p>
    `
  },
  "desalojo-arrendamiento-oaxaca-juicio-especial": {
    title: "Juicio Especial de Desahucio en Oaxaca: Cómo Recuperar su Inmueble Arrendado",
    date: "20 Jul 2023",
    content: `
      <h2>El Problema del Inquilino Moroso</h2>
      <p>Rentar una propiedad en Oaxaca puede ser una excelente inversión, pero el riesgo de enfrentar a un inquilino que deja de pagar la renta (inquilino moroso) o que se niega a desocupar el inmueble al término del contrato es una preocupación constante para los arrendadores. Intentar desalojar a un inquilino por la fuerza o cortando los servicios básicos es un delito (despojo) y puede acarrear graves consecuencias penales para el propietario.</p>
      
      <h2>La Vía Legal: El Juicio Especial de Desahucio</h2>
      <p>El Código de Procedimientos Civiles para el Estado de Oaxaca contempla una vía rápida y específica para estos casos: el Juicio Especial de Desahucio. Este juicio procede cuando se exigen dos o más mensualidades de renta atrasadas.</p>
      
      <h2>El Proceso de Desahucio</h2>
      <ol>
        <li><strong>Demanda:</strong> Se presenta la demanda ante el Juez Civil, exhibiendo el contrato de arrendamiento (preferentemente por escrito).</li>
        <li><strong>Requerimiento y Embargo:</strong> El juez ordena requerir al inquilino el pago de las rentas adeudadas. Si no paga en el acto, se le pueden embargar bienes suficientes para cubrir la deuda.</li>
        <li><strong>Emplazamiento:</strong> Se le notifica la demanda y se le otorga un plazo para contestar o justificar el pago.</li>
        <li><strong>Lanzamiento (Desalojo):</strong> Si el inquilino no demuestra haber pagado, el juez dictará sentencia ordenando la desocupación del inmueble. Si el inquilino se niega a salir voluntariamente, se ejecutará el lanzamiento con el uso de la fuerza pública si es necesario.</li>
      </ol>
      <p>Contar con un contrato de arrendamiento bien redactado y la asesoría de un abogado especialista en litigio civil es fundamental para recuperar su propiedad en el menor tiempo posible y con estricto apego a la ley.</p>
    `
  }
};

export default function BlogPost() {
  const { slug } = useParams();
  const article = slug ? articles[slug as keyof typeof articles] : null;

  if (!article) {
    return (
      <Layout title="Artículo no encontrado" description="El artículo que buscas no existe.">
        <div className="min-h-[60vh] flex items-center justify-center bg-cream">
          <div className="text-center">
            <h1 className="text-3xl font-serif text-charcoal mb-4">Artículo no encontrado</h1>
            <Link to="/blog" className="text-gold hover:underline">Volver a la Editorial</Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={`${article.title} | Karina Orocio`} description={article.title}>
      <article className="bg-cream min-h-screen py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center space-x-2 text-gold hover:text-charcoal transition-colors mb-12 text-xs font-medium tracking-widest uppercase">
            <ArrowLeft className="h-4 w-4" />
            <span>Volver a la Editorial</span>
          </Link>
          
          <header className="mb-16">
            <h1 className="text-4xl md:text-5xl font-serif text-charcoal leading-tight mb-8">{article.title}</h1>
            <div className="flex items-center space-x-6 text-xs tracking-widest uppercase text-charcoal-light/70 font-sans">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>Lic. Karina Orocio</span>
              </div>
            </div>
          </header>

          <div 
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className="mt-24 pt-12 border-t border-gold/20">
            <div className="bg-charcoal text-cream p-12 rounded-sm text-center">
              <h3 className="text-3xl font-serif mb-6">¿Necesita asesoría sobre este tema?</h3>
              <p className="font-light text-cream-dark mb-8 max-w-lg mx-auto">Agende una consulta para analizar su caso específico en Oaxaca de Juárez con absoluta confidencialidad.</p>
              <Link to="/contacto" className="inline-block bg-gold text-charcoal px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-cream transition-colors">
                Agendar Asesoría
              </Link>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}
