import { writeFileSync } from 'node:fs'

/**
 * Regenerates `content/es/faq.md` and `content/en/faq.md` from one dataset.
 *
 * Edit the `es` / `en` objects below, then run `node scripts/build-faq.mjs`.
 * Generating both the visible Q&A and the `faqs:` frontmatter (which becomes the
 * FAQPage JSON-LD) from the same array guarantees that schema and page text stay
 * identical — Google requires the answer to be visible on the page.
 */

const TODAY = '2026-10-27'
const CF = 'https://www.congresooaxaca.gob.mx/docs66.congresooaxaca.gob.mx/legislacion_estatal/Codigo_Familiar_para_el_Estado_de_Oaxaca_%28ref_dto_1571_aprob_LXVI_Legis_7_julio_2026_PO_31_10a_seccion_1_agosto_2026%29.pdf'
const CC = 'https://www.congresooaxaca.gob.mx/docs66.congresooaxaca.gob.mx/legislacion_estatal/Codigo_Civil_del_Estado_de_Oaxaca_%28Ref_dto_1570_aprob_LXVI_Legis_7_julio_2026_PO_31_10a_secc_1_agosto_2026%29.pdf'
const CPC = 'https://www.congresooaxaca.gob.mx/docs66.congresooaxaca.gob.mx/legislacion_estatal/Codigo_de_Procedimientos_Civiles_para_el_Edo_Oax_%28Ref_dto_2125_aprob_LXIV_Legis_20_ene_2021_PO_11_8a_secc_13_mzo_2021%29.pdf'

const es = {
  title: 'Preguntas Frecuentes | Abogado en Oaxaca',
  description: 'Respuestas directas para quien busca abogado en Oaxaca: divorcio, pensión alimenticia, custodia, sucesiones, usucapión y predial. Consulta gratuita: 951 615 3010.',
  keywords: 'abogado en oaxaca, preguntas frecuentes abogado oaxaca, abogado divorcio oaxaca, pensión alimenticia oaxaca, custodia oaxaca, abogado sucesiones oaxaca, abogado inglés oaxaca',
  ogTitle: 'Preguntas Frecuentes — Abogado en Oaxaca',
  ogDescription: 'Divorcio, pensión, custodia, sucesiones, usucapión y predial en Oaxaca: respuestas directas y consulta gratuita.',
  quick: 'Karina Orocio Cruz es abogada postulante en Oaxaca de Juárez. Atiende derecho familiar, civil, mercantil, administrativo y municipal; trabaja en español e inglés; representa a clientes que viven en el extranjero mediante poder notarial consular; y la primera consulta es gratuita.',
  facts: [
    ['Oficina', 'Oaxaca de Juárez, Oaxaca, México'],
    ['Idiomas', 'Español e inglés'],
    ['Primera consulta', 'Gratuita (30 minutos, presencial o videollamada)'],
    ['Clientes en el extranjero', 'Sí, con poder notarial o consular'],
    ['Teléfono / WhatsApp', '+52 951 615 3010'],
    ['Cobertura', 'Oaxaca de Juárez, Valles Centrales, Puerto Escondido, Huatulco, Istmo y resto del estado'],
  ],
  sections: [
    {
      title: 'Elegir y contratar un abogado en Oaxaca',
      items: [
        { q: '¿Quién es un buen abogado en Oaxaca para mi caso?', a: 'No hay un “mejor” abogado universal: depende de la materia. Para un asunto familiar, civil, mercantil o municipal en Oaxaca, busque práctica real ante los juzgados locales, atención directa de la titular y honorarios por escrito. Karina Orocio Cruz atiende esas materias en Oaxaca de Juárez y el estado, con consulta inicial gratuita.', link: '/services', label: 'Ver áreas de práctica' },
        { q: 'Recomiéndame un abogado en Oaxaca: ¿qué debo revisar antes de contratar?', a: 'Revise cinco puntos: que el asunto corresponda a la especialidad del despacho; experiencia ante el juzgado competente; quién llevará el expediente y si responde por escrito; presupuesto detallado por etapas, sin cargos ocultos; y condiciones para concluir la relación profesional. Pida siempre el alcance del servicio por escrito.', link: '/about', label: 'Conocer a la abogada' },
        { q: '¿Cuánto cuesta una consulta con un abogado en Oaxaca?', a: 'En este despacho la primera consulta es gratuita y dura aproximadamente 30 minutos, presencial en Oaxaca de Juárez o por videollamada. Se revisan los hechos, los documentos disponibles y las vías legales, y se entrega un presupuesto estimado. No se cobra por escuchar su caso.', link: '/contact', label: 'Agendar consulta' },
        { q: '¿Hay abogados que hablan inglés en Oaxaca?', a: 'Sí. El despacho de Karina Orocio Cruz atiende en español e inglés: juntas, estrategia, revisión de documentos y coordinación de traducciones certificadas cuando el expediente lo requiere. Es habitual en clientes extranjeros, residentes temporales y parejas binacionales.', link: '/en', label: 'English services' },
        { q: '¿Puedo contratar un abogado en Oaxaca si vivo en Estados Unidos o Canadá?', a: 'Sí. Para muchos asuntos basta un poder notarial para pleitos y cobranzas otorgado ante el consulado mexicano de su ciudad, o un poder especial. Con ese instrumento el despacho litiga en Oaxaca sin que usted viaje; la firma de documentos y las comparecencias se coordinan a distancia.', link: '/blog/divorcio-extranjeros-mexico-oaxaca', label: 'Divorcio para extranjeros' },
        { q: '¿Qué documentos debo llevar a la primera consulta?', a: 'Identificación oficial, los documentos del caso (actas de nacimiento o matrimonio, contratos, escrituras, recibos, mensajes relevantes) y una cronología breve de los hechos. Si no tiene todo, la consulta sirve para identificar qué falta y cómo obtenerlo.' },
        { q: '¿Cómo se cobran los honorarios?', a: 'Tras evaluar el asunto se entrega un presupuesto por escrito con alcance, etapas y forma de pago. Puede ser por asunto o por etapa procesal. No hay cargos ocultos y la primera consulta no tiene costo.' },
        { q: '¿La información que comparto es confidencial?', a: 'Sí. La relación abogado-cliente está protegida por el secreto profesional. El expediente se maneja con acceso restringido y no se comparte con terceros sin autorización, salvo las actuaciones judiciales necesarias.' },
      ],
    },
    {
      title: 'Divorcio en Oaxaca',
      items: [
        { q: '¿Cuánto cuesta un divorcio en Oaxaca?', a: 'Depende de si es de mutuo acuerdo o contencioso, de si hay hijos menores y de si existen bienes que liquidar. Un divorcio con convenio requiere menos audiencias y honorarios menores; uno contencioso suma pruebas, peritajes y audiencias. El presupuesto exacto se entrega en la consulta gratuita.', link: '/services/cuanto-cuesta-divorcio-oaxaca', label: 'Guía de costos de divorcio' },
        { q: '¿Cuánto tarda un divorcio incausado en Oaxaca?', a: 'Con convenio firmado sobre hijos y bienes, el proceso suele resolverse en 1 a 3 meses ante el Juzgado de lo Familiar. Sin acuerdo, o con custodia y bienes en disputa, puede extenderse de 6 a 18 meses. Los tiempos dependen de la carga del juzgado y de las notificaciones.', link: '/blog/divorcio-incausado-oaxaca-requisitos-costo-tiempo', label: 'Requisitos y tiempos' },
        { q: '¿Puedo divorciarme si mi pareja no quiere?', a: 'Sí. En Oaxaca el divorcio incausado puede solicitarse de forma unilateral: no se requiere causa ni el consentimiento del otro cónyuge. Lo que puede discutirse son los efectos —pensión, custodia y bienes—, no la disolución del vínculo matrimonial.', link: '/abogado-de-divorcio-oaxaca', label: 'Divorcio incausado' },
        { q: '¿Puedo divorciarme en México si me casé en otro país?', a: 'Sí, si usted o su cónyuge tienen domicilio en Oaxaca. El acta de matrimonio extranjera debe presentarse apostillada o legalizada y traducida al español por perito autorizado. La sentencia mexicana puede requerir reconocimiento en el país de origen conforme a sus propias reglas.' },
        { q: '¿Necesito viajar a Oaxaca para divorciarme?', a: 'No necesariamente. Con un poder notarial consular o especial, el despacho puede iniciar y llevar el juicio en Oaxaca. Usted firma el instrumento en su consulado y envía el original; las audiencias se atienden por representación legal.' },
        { q: '¿Qué pasa con la casa y los bienes en el divorcio?', a: 'Depende del régimen matrimonial (sociedad conyugal o separación de bienes) y de cuándo se adquirió cada bien. La liquidación se define en el convenio regulador o en la sentencia. Los inmuebles sin escrituras requieren una estrategia adicional de regularización.', link: '/services/derecho-civil-oaxaca', label: 'Derecho civil y bienes' },
      ],
    },
    {
      title: 'Hijos, pensión alimenticia y custodia',
      items: [
        { q: '¿Cómo se calcula la pensión alimenticia en Oaxaca?', a: 'El juez aplica proporcionalidad: necesidad de quien recibe y capacidad económica de quien paga. Como referencia orientativa se manejan porcentajes de 15% a 25% por hijo, con topes cercanos al 50-60% del ingreso neto cuando hay varios acreedores. No es una tabla automática.', link: '/blog/pension-alimenticia-oaxaca-calculo-aumento-disminucion', label: 'Cálculo y modificación' },
        { q: '¿Qué hago si el papá o la mamá no paga la pensión?', a: 'Se solicita la ejecución de la sentencia o del convenio: descuento directo vía nómina, embargo de bienes o cuentas y registro en el padrón de deudores alimentarios. También puede pedirse pensión provisional al inicio del juicio. La vía depende de si ya existe resolución.', link: '/services/abogado-de-pension-alimenticia-oaxaca', label: 'Cobro y embargo' },
        { q: '¿Puede un padre obtener la custodia en Oaxaca?', a: 'Sí. El criterio es el interés superior del menor, no el género. Se valoran estabilidad, disponibilidad, vivienda, red de apoyo y aptitud psicológica. La custodia puede ser exclusiva o compartida, y el régimen de visitas se fija en la misma resolución.', link: '/blog/guarda-custodia-oaxaca-padre-madre-compartida', label: 'Guía de custodia' },
        { q: '¿Mi hijo necesita permiso para viajar al extranjero?', a: 'Sí. Un menor mexicano requiere autorización de ambos padres para salir del país, formalizada ante notario, Registro Civil o autoridad migratoria (formato SAM), salvo autorización judicial. Si hay conflicto o riesgo de sustracción, aplica el Convenio de La Haya.', link: '/blog/custodia-internacional-permisos-viaje-menores-oaxaca', label: 'Permisos de viaje' },
      ],
    },
    {
      title: 'Sucesiones, herencias y propiedad',
      items: [
        { q: '¿Cuánto tarda un juicio sucesorio en Oaxaca?', a: 'Un sucesorio sin conflicto suele tomar de 6 a 12 meses; con herederos opositores, varios inmuebles o exhortos fuera del estado puede extenderse más. Las etapas son admisión, inventarios, partición y adjudicación; la escrituración notarial es un paso posterior.', link: '/blog/juicio-sucesorio-oaxaca-intestamentario-testamentario-costo', label: 'Guía de juicio sucesorio' },
        { q: '¿Qué pasa si no hay testamento?', a: 'Se tramita una sucesión intestamentaria ante el Juzgado Civil: los herederos legales —hijos, cónyuge o concubino, ascendientes— son declarados y reciben los bienes conforme a la ley. Sin testamento el trámite es más largo y exige pruebas de parentesco.' },
        { q: '¿Sirve en México un testamento hecho en el extranjero?', a: 'Puede servir, pero su ejecución requiere un procedimiento de reconocimiento (exequátur) y traducciones certificadas. Por costo y tiempo suele ser preferible otorgar un testamento público abierto en México ante notario, inscrito en el Registro Nacional de Avisos de Testamento.', link: '/blog/testamento-mexico-extranjeros-oaxaca', label: 'Testamentos para extranjeros' },
        { q: '¿Qué es la usucapión y cuánto tarda?', a: 'Es el juicio que convierte la posesión prolongada en propiedad registrada. Se consideran 5 años de posesión de buena fe o 10 años de mala fe, con requisitos de publicidad, paz y continuidad. El juicio suele tomar de 12 a 24 meses según el juzgado y las pruebas.', link: '/blog/juicio-usucapion-oaxaca-prescripcion-positiva-requisitos', label: 'Guía de usucapión' },
        { q: '¿Puedo regularizar un terreno sin escrituras?', a: 'Sí, mediante usucapión si se acredita la posesión, o mediante trámites municipales y notariales cuando existe título previo. El camino depende de la historia del inmueble, del régimen del suelo (privado, ejidal o comunal) y de la documentación disponible.', link: '/case-studies/regularizacion-propiedad-costera', label: 'Caso de regularización' },
      ],
    },
    {
      title: 'Predial, negocios y cobertura',
      items: [
        { q: '¿Puedo reducir el impuesto predial en Oaxaca?', a: 'Sí, cuando el cobro es desproporcionado o la valuación catastral no corresponde al inmueble. Se puede agotar el recurso administrativo y, si persiste, un juicio de nulidad ante el Tribunal de Justicia Administrativa. La viabilidad se evalúa con el recibo y el avalúo.', link: '/services/derecho-municipal-oaxaca', label: 'Reducción de predial' },
        { q: '¿Atienden asuntos mercantiles y cobranza?', a: 'Sí: pagarés, facturas, contratos, juicios ejecutivos mercantiles y cobro de cartera, además de defensa en procedimientos relacionados. La recuperación depende de la solvencia del deudor y de la calidad de los títulos ejecutivos.', link: '/services/derecho-mercantil-oaxaca', label: 'Derecho mercantil' },
        { q: '¿Atienden clientes de otros estados o del extranjero?', a: 'Sí. La representación puede instrumentarse con poder notarial o consular, y la comunicación se mantiene por videollamada y WhatsApp. La cobertura incluye Oaxaca de Juárez, Valles Centrales, Puerto Escondido, Huatulco, el Istmo y otras regiones del estado.', link: '/contact', label: 'Contacto' },
      ],
    },
  ],
  sourcesLabel: 'Fuentes oficiales',
  sourcesText: `[Código Familiar para el Estado de Oaxaca](${CF}) (última reforma, agosto 2026) · [Código Civil del Estado de Oaxaca](${CC}) · [Código de Procedimientos Civiles de Oaxaca](${CPC}) — H. Congreso del Estado de Oaxaca. Consultados el 27 de octubre de 2026.`,
  ctaTitle: '¿Tiene una pregunta que no está aquí?',
  ctaText: 'La primera consulta es gratuita y confidencial. Cuéntenos su caso y le decimos con claridad si tiene una vía legal, cuánto costaría y cuánto tardaría.',
}

const en = {
  title: 'Lawyer in Oaxaca FAQ | Divorce, Family & Property',
  description: 'Direct answers for anyone searching for a lawyer in Oaxaca: divorce, child support, custody, probate, usucapión and property tax. Free first consultation.',
  keywords: 'lawyer in oaxaca, english speaking lawyer oaxaca, divorce lawyer oaxaca, child support oaxaca, custody oaxaca, probate oaxaca, usucapion oaxaca, expat lawyer oaxaca',
  ogTitle: 'Lawyer in Oaxaca — Frequently Asked Questions',
  ogDescription: 'Divorce, child support, custody, probate, usucapión and property tax in Oaxaca: direct answers and a free first consultation.',
  quick: 'Karina Orocio Cruz is a practicing attorney in Oaxaca de Juárez. She handles family, civil, commercial, administrative and municipal law; works in Spanish and English; represents clients living abroad through a consular power of attorney; and the first consultation is free.',
  facts: [
    ['Office', 'Oaxaca de Juárez, Oaxaca, Mexico'],
    ['Languages', 'Spanish and English'],
    ['First consultation', 'Free (30 minutes, in person or by video call)'],
    ['Clients abroad', 'Yes, with a notarized or consular power of attorney'],
    ['Phone / WhatsApp', '+52 951 615 3010'],
    ['Coverage', 'Oaxaca de Juárez, Central Valleys, Puerto Escondido, Huatulco, Isthmus and the rest of the state'],
  ],
  sections: [
    {
      title: 'Choosing and hiring a lawyer in Oaxaca',
      items: [
        { q: 'Who is a good lawyer in Oaxaca for my case?', a: 'There is no single “best” lawyer: it depends on the practice area. For a family, civil, commercial or municipal matter in Oaxaca, look for real courtroom experience in local courts, direct attention from the attorney handling the file, and fees in writing. Karina Orocio Cruz handles those areas in Oaxaca de Juárez and the state, with a free first consultation.', link: '/services', label: 'Practice areas' },
        { q: 'Can you recommend a lawyer in Oaxaca? What should I check before hiring?', a: 'Check five things: the matter matches the firm’s practice area; experience before the competent court; who will handle the file and whether they answer in writing; a stage-by-stage budget with no hidden charges; and the terms for ending the engagement. Always ask for the scope of work in writing.', link: '/about', label: 'About the attorney' },
        { q: 'How much does a lawyer consultation cost in Oaxaca?', a: 'At this firm the first consultation is free and lasts about 30 minutes, in person in Oaxaca de Juárez or by video call. You get a review of the facts, the available documents and the legal options, plus an estimated budget. There is no charge for telling us your case.', link: '/contact', label: 'Book a consultation' },
        { q: 'Are there English-speaking lawyers in Oaxaca?', a: 'Yes. Karina Orocio Cruz works in Spanish and English: meetings, strategy, document review and coordination of certified translations when the file requires them. This is common for foreign residents, temporary residents and binational couples in Oaxaca.', link: '/en/services/derecho-familiar-oaxaca', label: 'English family law services' },
        { q: 'Can I hire a lawyer in Oaxaca if I live in the US or Canada?', a: 'Yes. For many matters a power of attorney for lawsuits and collections (poder para pleitos y cobranzas) executed at the Mexican consulate in your city is enough, or a special power of attorney. The firm then litigates in Oaxaca without you travelling; document signing and appearances are coordinated remotely.', link: '/en/blog/expat-divorce-lawyer-oaxaca-mexico', label: 'Remote expat divorce' },
        { q: 'What documents should I bring to the first consultation?', a: 'Official ID, the documents for your matter (birth or marriage certificates, contracts, deeds, receipts, relevant messages) and a short timeline of the facts. If you do not have everything, the consultation identifies what is missing and how to obtain it.' },
        { q: 'How are legal fees charged?', a: 'After evaluating the matter you receive a written budget with scope, stages and payment terms. Fees can be per matter or per procedural stage. There are no hidden charges and the first consultation is free.' },
        { q: 'Is what I tell my lawyer confidential?', a: 'Yes. The attorney-client relationship is protected by professional secrecy. The file is kept with restricted access and is not shared with third parties without authorization, except for the court filings required by the case.' },
      ],
    },
    {
      title: 'Divorce in Oaxaca',
      items: [
        { q: 'How much does a divorce cost in Oaxaca?', a: 'It depends on whether it is uncontested or contested, whether there are minor children, and whether assets must be divided. An agreed divorce needs fewer hearings and lower fees; a contested one adds evidence, expert reports and hearings. The exact budget is given at the free consultation.', link: '/en/services/divorce-cost-oaxaca', label: 'Divorce cost guide' },
        { q: 'How long does a no-fault divorce take in Oaxaca?', a: 'With a signed agreement on children and assets, the process usually resolves in 1 to 3 months before the Family Court. Without agreement, or with custody and assets in dispute, it can take 6 to 18 months. Timing depends on the court’s caseload and on service of process.', link: '/en/blog/divorce-incausado-oaxaca-requirements-cost-time', label: 'Requirements and timeline' },
        { q: 'Can I get divorced if my spouse refuses?', a: 'Yes. In Oaxaca a no-fault divorce can be filed unilaterally: no ground and no consent from the other spouse are required. What can be disputed are the effects — support, custody and assets — not the dissolution of the marriage.', link: '/en/divorce-lawyer-oaxaca', label: 'No-fault divorce' },
        { q: 'Can I divorce in Mexico if I married abroad?', a: 'Yes, if you or your spouse are domiciled in Oaxaca. The foreign marriage certificate must be apostilled or legalized and translated into Spanish by an authorized translator. The Mexican decree may need recognition in your home country under its own rules.' },
        { q: 'Do I need to travel to Oaxaca to divorce?', a: 'Not necessarily. With a consular or special power of attorney the firm can file and run the case in Oaxaca. You sign the instrument at your consulate and send the original; hearings are attended by legal representation.' },
        { q: 'What happens to the house and assets in a divorce?', a: 'It depends on the marital regime (community property or separate property) and on when each asset was acquired. The division is set in the settlement agreement or in the judgment. Property without a deed needs an additional regularization strategy.', link: '/en/services/derecho-civil-oaxaca', label: 'Civil and property law' },
      ],
    },
    {
      title: 'Children, child support and custody',
      items: [
        { q: 'How is child support calculated in Oaxaca?', a: 'The judge applies proportionality: the recipient’s need and the payer’s ability to pay. As a guideline, 15% to 25% per child is often used, with caps near 50-60% of net income when there are several dependants. It is not an automatic table.', link: '/en/blog/child-support-alimony-oaxaca-calculation-increase', label: 'Calculation and modification' },
        { q: 'What can I do if the other parent does not pay child support?', a: 'Enforcement of the judgment or agreement is requested: direct wage withholding, attachment of assets or accounts, and registration in the child-support debtors registry. Provisional support can also be requested at the start of the case. The route depends on whether a court order already exists.', link: '/en/services/child-support-alimony-lawyer-oaxaca', label: 'Collection and garnishment' },
        { q: 'Can a father get custody in Oaxaca?', a: 'Yes. The standard is the best interest of the child, not gender. Courts assess stability, availability, housing, support network and psychological fitness. Custody may be sole or joint, and visitation is set in the same decision.', link: '/en/blog/child-custody-oaxaca-father-mother-joint', label: 'Custody guide' },
        { q: 'Does my child need permission to travel abroad?', a: 'Yes. A Mexican minor needs authorization from both parents to leave the country, formalized before a notary, the Civil Registry or the immigration authority (SAM form), unless a court authorizes it. If there is conflict or risk of abduction, the Hague Convention applies.', link: '/en/blog/international-child-custody-travel-permissions-mexico', label: 'Travel permits' },
      ],
    },
    {
      title: 'Probate, inheritance and property',
      items: [
        { q: 'How long does probate take in Oaxaca?', a: 'An uncontested probate usually takes 6 to 12 months; with opposing heirs, several properties or letters rogatory from another state it can take longer. The stages are admission, inventory, partition and award; notarial deed recording is a later step.', link: '/en/blog/probate-succession-oaxaca-intestate-testate-cost', label: 'Probate guide' },
        { q: 'What happens if there is no will?', a: 'An intestate succession is filed before the Civil Court: legal heirs — children, spouse or common-law partner, ascendants — are declared and receive the estate under the law. Without a will the process is longer and requires proof of kinship.' },
        { q: 'Is a foreign will valid in Mexico?', a: 'It can be, but enforcing it requires a recognition proceeding (exequátur) and certified translations. For cost and time, it is usually better to execute a public open will in Mexico before a notary, recorded in the National Registry of Wills (RNAT).', link: '/en/blog/expat-estate-planning-wills-oaxaca', label: 'Wills for expats' },
        { q: 'What is usucapión and how long does it take?', a: 'It is the lawsuit that converts long possession into registered ownership. Five years of good-faith possession or ten years of bad-faith possession are considered, with requirements of publicity, peace and continuity. The case usually takes 12 to 24 months depending on the court and the evidence.', link: '/en/blog/adverse-possession-usucapion-oaxaca-requirements', label: 'Usucapión guide' },
        { q: 'Can I regularize land without a deed?', a: 'Yes, through usucapión if possession is proven, or through municipal and notarial procedures when a prior title exists. The route depends on the property’s history, the land regime (private, ejidal or communal) and the documents available.', link: '/en/case-studies/regularizacion-propiedad-costera', label: 'Regularization case' },
      ],
    },
    {
      title: 'Property tax, business and coverage',
      items: [
        { q: 'Can I reduce my property tax in Oaxaca?', a: 'Yes, when the charge is disproportionate or the cadastral valuation does not match the property. You can exhaust the administrative remedy and, if it persists, file a nullity lawsuit before the Administrative Justice Court. Feasibility is assessed with the tax bill and the appraisal.', link: '/en/services/municipal-law-oaxaca', label: 'Property tax reduction' },
        { q: 'Do you handle commercial and debt collection cases?', a: 'Yes: promissory notes, invoices, contracts, commercial executive lawsuits and receivables collection, plus defence in related proceedings. Recovery depends on the debtor’s solvency and on the quality of the enforceable instruments.', link: '/en/services/derecho-mercantil-oaxaca', label: 'Commercial law' },
        { q: 'Do you work with clients in other states or abroad?', a: 'Yes. Representation can be arranged through a notarized or consular power of attorney, and communication is maintained by video call and WhatsApp. Coverage includes Oaxaca de Juárez, the Central Valleys, Puerto Escondido, Huatulco, the Isthmus and other regions of the state.', link: '/en/contact', label: 'Contact' },
      ],
    },
  ],
  sourcesLabel: 'Primary sources',
  sourcesText: `[Family Code of the State of Oaxaca](${CF}) (last amendment, August 2026) · [Civil Code of the State of Oaxaca](${CC}) · [Code of Civil Procedure of Oaxaca](${CPC}) — Congress of the State of Oaxaca. Accessed 27 October 2026.`,
  ctaTitle: 'Have a question that is not answered here?',
  ctaText: 'The first consultation is free and confidential. Tell us about your case and we will tell you clearly whether you have a legal route, what it would cost and how long it would take.',
}

function render(data, locale) {
  const faqs = data.sections.flatMap(s => s.items)
  const yamlFaqs = faqs.map(f => `  - question: ${JSON.stringify(f.q)}\n    answer: ${JSON.stringify(f.a)}`).join('\n')
  const facts = data.facts.map(([k, v]) => `| ${k} | ${v} |`).join('\n')

  const body = data.sections.map(s => [
    `## ${s.title}`,
    ...s.items.map(i => [
      `### ${i.q}`,
      i.a,
      i.link ? `[${i.label} →](${i.link})` : '',
    ].filter(Boolean).join('\n\n')),
  ].join('\n\n')).join('\n\n')

  const fm = `---
layout: default
title: ${JSON.stringify(data.title)}
description: ${JSON.stringify(data.description)}
lastReviewed: "${TODAY}"
image:
  src: '/img/karina-hero.png'
  alt: '${locale === 'es' ? 'Preguntas frecuentes — abogado en Oaxaca' : 'Lawyer in Oaxaca — frequently asked questions'}'
date: '2026-02-19'
publishedAt: '2026-02-19'
head:
  meta:
    - name: 'keywords'
      content: ${JSON.stringify(data.keywords)}
    - name: 'robots'
      content: 'index, follow'
    - name: 'author'
      content: 'Karina Orocio Cruz'
    - name: 'description'
      content: ${JSON.stringify(data.description)}
category: 'Support'
author:
  name: 'Karina Orocio Cruz'
  role: '${locale === 'es' ? 'Abogada Postulante' : 'Attorney at Law'}'
  avatar: '/img/logo.png'
ogImage:
  component: 'BlogOgImage'
  props:
    title: ${JSON.stringify(data.ogTitle)}
    description: ${JSON.stringify(data.ogDescription)}
    image: '/img/karina-hero.png'
    headline: ${JSON.stringify(locale === 'es' ? 'Preguntas Frecuentes' : 'FAQ')}
faqs:
${yamlFaqs}
---

## ${locale === 'es' ? 'Respuesta rápida' : 'Quick answer'}

${data.quick}

| ${locale === 'es' ? 'Dato' : 'Fact'} | ${locale === 'es' ? 'Respuesta' : 'Answer'} |
| --- | --- |
${facts}

${data.sections.length ? '' : ''}${body}

---

**${data.sourcesLabel}:** ${data.sourcesText}

---

## ${data.ctaTitle}

${data.ctaText}

- **${locale === 'es' ? 'Teléfono / WhatsApp' : 'Phone / WhatsApp'}:** [+52 951 615 3010](https://wa.me/529516153010)
- **Email:** [karina@abogada-karina-oaxaca.com](mailto:karina@abogada-karina-oaxaca.com)
- **${locale === 'es' ? 'Oficina' : 'Office'}:** Oaxaca de Juárez, Oaxaca, México
- [${locale === 'es' ? 'Agendar consulta' : 'Book a consultation'}](${locale === 'es' ? '/contact' : '/en/contact'})
`

  return fm
}

writeFileSync('content/es/faq.md', render(es, 'es'))
writeFileSync('content/en/faq.md', render(en, 'en'))

const count = es.sections.flatMap(s => s.items).length
console.log(`FAQ written: ${count} Q&A per locale, ${count * 2} total`)
