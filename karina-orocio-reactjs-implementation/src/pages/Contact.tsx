import { Layout } from '../components/Layout';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <Layout
      title="Contacto | Karina Orocio | Abogada en Oaxaca"
      description="Agende una asesoría legal confidencial en Oaxaca de Juárez. Especialistas en derecho civil, familiar, administrativo y reducción de predial."
      keywords="contacto abogada oaxaca, despacho juridico oaxaca, telefono abogada oaxaca, asesoria legal oaxaca, karina orocio contacto"
    >
      <section className="bg-cream py-24 min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h1 className="font-serif text-5xl md:text-6xl mb-6 text-charcoal">Agendar <br/><span className="italic text-gold">Asesoría</span></h1>
              <p className="font-light text-charcoal-light text-lg mb-12 leading-relaxed max-w-md">
                Atendemos cada caso con la máxima confidencialidad y rigor jurídico. Contáctenos para evaluar su situación legal en Oaxaca de Juárez y municipios conurbados.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-gold mt-1" />
                  <div>
                    <h3 className="text-gold tracking-widest uppercase text-xs font-bold mb-2">Línea Directa</h3>
                    <a href="tel:9516153010" className="font-serif text-3xl text-charcoal hover:text-gold transition-colors">951-615-30-10</a>
                    <p className="text-sm font-light text-charcoal-light mt-1">Atención telefónica y WhatsApp</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-gold mt-1" />
                  <div>
                    <h3 className="text-gold tracking-widest uppercase text-xs font-bold mb-2">Ubicación</h3>
                    <p className="text-charcoal-light font-light text-lg">Oaxaca de Juárez, Oax.</p>
                    <p className="text-sm font-light text-charcoal-light mt-1">Atención exclusiva previa cita para garantizar la privacidad de su caso.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-gold mt-1" />
                  <div>
                    <h3 className="text-gold tracking-widest uppercase text-xs font-bold mb-2">Horario de Atención</h3>
                    <p className="text-charcoal-light font-light text-lg">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                    <p className="text-sm font-light text-charcoal-light mt-1">Sábados: Previa cita</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-charcoal p-10 rounded-sm text-cream shadow-2xl">
              <h3 className="font-serif text-3xl mb-8">Solicitud de Contacto</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-gold mb-2">Nombre Completo</label>
                  <input type="text" className="w-full bg-transparent border-b border-cream/20 py-2 text-cream focus:outline-none focus:border-gold transition-colors" required />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-gold mb-2">Teléfono / WhatsApp</label>
                  <input type="tel" className="w-full bg-transparent border-b border-cream/20 py-2 text-cream focus:outline-none focus:border-gold transition-colors" required />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-gold mb-2">Área de Interés</label>
                  <select className="w-full bg-transparent border-b border-cream/20 py-2 text-cream focus:outline-none focus:border-gold transition-colors appearance-none" required>
                    <option value="" className="text-charcoal">Seleccione un área...</option>
                    <option value="predial" className="text-charcoal">Reducción de Predial</option>
                    <option value="civil" className="text-charcoal">Derecho Civil (Usucapión, Contratos)</option>
                    <option value="familiar" className="text-charcoal">Derecho Familiar (Divorcio, Pensión)</option>
                    <option value="administrativo" className="text-charcoal">Derecho Administrativo (Amparos, Multas)</option>
                    <option value="otro" className="text-charcoal">Otro asunto legal</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-gold mb-2">Breve descripción de su asunto</label>
                  <textarea rows={3} className="w-full bg-transparent border-b border-cream/20 py-2 text-cream focus:outline-none focus:border-gold transition-colors resize-none" required></textarea>
                </div>
                <button className="w-full bg-gold text-charcoal py-4 text-sm tracking-widest uppercase font-medium hover:bg-cream transition-colors mt-4">
                  Enviar Solicitud Confidencial
                </button>
                <p className="text-xs text-cream-dark/60 text-center mt-4 font-light">
                  Sus datos están protegidos por el secreto profesional y serán utilizados únicamente para contactarle.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
