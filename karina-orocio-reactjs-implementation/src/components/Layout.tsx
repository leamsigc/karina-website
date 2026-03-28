import { ReactNode, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  children: ReactNode;
}

export function Layout({ title, description, keywords, children }: SEOProps) {
  return (
    <div className="min-h-screen flex flex-col font-sans text-charcoal bg-cream selection:bg-gold selection:text-charcoal">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
      </Helmet>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-cream border-b border-gold/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="border border-charcoal p-2 flex items-center justify-center w-12 h-12 group-hover:bg-charcoal transition-colors duration-300">
              <span className="text-charcoal font-serif text-xl group-hover:text-cream transition-colors duration-300">KO</span>
            </div>
            <div>
              <h1 className="text-xl font-serif tracking-widest uppercase text-charcoal">Karina Orocio</h1>
              <p className="text-[10px] text-gold tracking-[0.2em] uppercase">Abogada Postulante</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex space-x-10 items-center">
            <Link to="/" className="text-xs tracking-widest uppercase font-medium hover:text-gold transition-colors">Inicio</Link>
            <Link to="/servicios" className="text-xs tracking-widest uppercase font-medium hover:text-gold transition-colors">Servicios</Link>
            <Link to="/casos-de-exito" className="text-xs tracking-widest uppercase font-medium hover:text-gold transition-colors">Casos de Éxito</Link>
            <Link to="/blog" className="text-xs tracking-widest uppercase font-medium hover:text-gold transition-colors">Editorial</Link>
            <Link to="/contacto" className="text-xs tracking-widest uppercase font-medium hover:text-gold transition-colors">Contacto</Link>
            <Link to="/contacto" className="bg-charcoal text-cream px-6 py-3 text-xs tracking-widest uppercase font-medium hover:bg-gold hover:text-charcoal transition-colors duration-300">
              Agendar Asesoría
            </Link>
          </nav>

          <button className="md:hidden p-2 text-charcoal" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-cream border-b border-gold/20 px-4 py-6 space-y-4">
          <Link to="/" className="block text-sm tracking-widest uppercase font-medium" onClick={() => setIsOpen(false)}>Inicio</Link>
          <Link to="/servicios" className="block text-sm tracking-widest uppercase font-medium" onClick={() => setIsOpen(false)}>Servicios</Link>
          <Link to="/casos-de-exito" className="block text-sm tracking-widest uppercase font-medium" onClick={() => setIsOpen(false)}>Casos de Éxito</Link>
          <Link to="/blog" className="block text-sm tracking-widest uppercase font-medium" onClick={() => setIsOpen(false)}>Editorial</Link>
          <Link to="/contacto" className="block text-sm tracking-widest uppercase font-medium" onClick={() => setIsOpen(false)}>Contacto</Link>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-charcoal text-cream py-16 border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center space-x-4 mb-6">
            <div className="border border-cream p-2 flex items-center justify-center w-10 h-10">
              <span className="text-cream font-serif text-lg">KO</span>
            </div>
            <div>
              <h2 className="text-lg font-serif tracking-widest uppercase text-cream">Karina Orocio</h2>
              <p className="text-[10px] text-gold tracking-[0.2em] uppercase">Abogada Postulante</p>
            </div>
          </div>
          <p className="text-sm font-light text-cream-dark leading-relaxed max-w-md">
            Firma legal boutique en Oaxaca de Juárez. Especializados en litigio estratégico, defensa patrimonial y derecho administrativo con un enfoque de excelencia y resultados.
          </p>
        </div>
        
        <div>
          <h3 className="text-gold font-serif text-lg mb-6">Navegación</h3>
          <ul className="space-y-3 text-sm font-light">
            <li><Link to="/" className="hover:text-gold transition-colors">Inicio</Link></li>
            <li><Link to="/servicios" className="hover:text-gold transition-colors">Áreas de Práctica</Link></li>
            <li><Link to="/casos-de-exito" className="hover:text-gold transition-colors">Casos de Éxito</Link></li>
            <li><Link to="/blog" className="hover:text-gold transition-colors">Editorial Legal</Link></li>
            <li><Link to="/contacto" className="hover:text-gold transition-colors">Contacto</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-gold font-serif text-lg mb-6">Contacto</h3>
          <ul className="space-y-3 text-sm font-light">
            <li>Oaxaca de Juárez, Oax.</li>
            <li>Atención previa cita</li>
            <li className="pt-4">
              <a href="tel:9516153010" className="text-lg font-serif hover:text-gold transition-colors">951-615-30-10</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-12 border-t border-cream/10">
        <h3 className="text-gold font-serif text-lg mb-6">Cobertura Legal en el Estado de Oaxaca</h3>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-light text-cream-dark/80">
          <Link to="/abogado-en-oaxaca-de-juarez" className="hover:text-gold transition-colors">Oaxaca de Juárez</Link>
          <Link to="/abogado-en-puerto-escondido" className="hover:text-gold transition-colors">Puerto Escondido</Link>
          <Link to="/abogado-en-huatulco" className="hover:text-gold transition-colors">Huatulco</Link>
          <Link to="/abogado-en-salina-cruz" className="hover:text-gold transition-colors">Salina Cruz</Link>
          <Link to="/abogado-en-juchitan" className="hover:text-gold transition-colors">Juchitán de Zaragoza</Link>
          <Link to="/abogado-en-tuxtepec" className="hover:text-gold transition-colors">Tuxtepec</Link>
          <Link to="/abogado-en-tehuantepec" className="hover:text-gold transition-colors">Tehuantepec</Link>
          <Link to="/abogado-en-pochutla" className="hover:text-gold transition-colors">Pochutla</Link>
          <Link to="/abogado-en-tlaxiaco" className="hover:text-gold transition-colors">Tlaxiaco</Link>
          <Link to="/abogado-en-huajuapan" className="hover:text-gold transition-colors">Huajuapan de León</Link>
          <Link to="/abogado-en-miahuatlan" className="hover:text-gold transition-colors">Miahuatlán</Link>
          <Link to="/abogado-en-zimatlan" className="hover:text-gold transition-colors">Zimatlán</Link>
          <Link to="/abogado-en-ocotlan" className="hover:text-gold transition-colors">Ocotlán</Link>
          <Link to="/abogado-en-tlacolula" className="hover:text-gold transition-colors">Tlacolula</Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-cream/10 text-xs font-light text-cream-dark/60 text-center tracking-wider">
        <p>&copy; {new Date().getFullYear()} KARINA OROCIO. TODOS LOS DERECHOS RESERVADOS.</p>
      </div>
    </footer>
  );
}
