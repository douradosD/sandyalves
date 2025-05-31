import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, MessageCircle, Menu, X, MapPin } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'modelos', 'sobre', 'contato'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm fixed w-full z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-red-600">Sandy Alves</h1>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['home', 'modelos', 'sobre', 'contato'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-lg capitalize ${
                  activeSection === item ? 'text-red-600 font-semibold' : 'text-gray-600'
                } hover:text-red-600 transition-colors`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white border-t">
            {['home', 'modelos', 'sobre', 'contato'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`block w-full py-3 px-4 text-left capitalize ${
                  activeSection === item ? 'text-red-600 bg-red-50' : 'text-gray-600'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        )}
      </header>

      {/* Home Section */}
      <section 
        id="home" 
        className="min-h-screen relative flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://revistacars.com.br/wp-content/uploads/2024/12/Toyota-Corolla-GR-Sport-2025.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 py-32 relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Sandy Alves
          </h2>
          <p className="text-2xl md:text-3xl text-white mb-4">
            Sua consultora Toyota em Parnaíba-PI
          </p>
          <p className="text-xl text-white/90 mb-12">
            Atendimento exclusivo e os melhores modelos 2025
          </p>
          <a
            href="https://wa.me/5586995661742"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-full hover:bg-green-700 transition-colors text-lg"
          >
            <MessageCircle className="w-6 h-6 mr-2" />
            Falar no WhatsApp
          </a>
        </div>
      </section>

      {/* Models Section */}
      <section id="modelos" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Modelos em Destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'SW4 Platinum 2025',
                image: '/sw4.png',
                features: 'SUV Premium • 4x4 • 7 lugares',
              },
              {
                name: 'Corolla Sedan 2025',
                image: '/corola.png',
                features: 'Híbrido • Elegante • Econômico',
              },
              {
                name: 'Corolla Cross 2025',
                image: '/corola cross.png',
                features: 'SUV Híbrido • Tecnológico',
              },
              {
                name: 'Hilux 2025',
                image: '/hilux.png',
                features: 'Robusta • 4x4 • Diesel',
              },
            ].map((model) => (
              <div 
                key={model.name} 
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{model.name}</h3>
                  <p className="text-gray-600 mb-4">{model.features}</p>
                  <a
                    href="https://wa.me/5586995661742"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Solicitar proposta
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">Sobre Sandy Alves</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Com anos de experiência no mercado automotivo, ofereço um atendimento personalizado
              para encontrar o Toyota perfeito para você. Meu compromisso é proporcionar uma
              experiência única de compra, com transparência, profissionalismo e dedicação total
              às suas necessidades.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Como sua consultora Toyota em Parnaíba, estou aqui para guiá-lo em cada etapa
              do processo, desde a escolha do modelo ideal até a finalização da sua compra.
              Conte com minha expertise para fazer a melhor escolha.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Entre em Contato</h2>
          
          {/* Social Media and Contact */}
          <div className="flex flex-col items-center space-y-8 mb-16">
            <div className="flex justify-center space-x-8">
              <a
                href="https://www.facebook.com/share/1AJ1mKaQ4o/"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform"
              >
                <Facebook className="w-12 h-12 text-blue-600" />
              </a>
              <a
                href="https://www.instagram.com/sandy_toyota_?igsh=MWRheXpkamZsc2p4dw=="
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform"
              >
                <Instagram className="w-12 h-12 text-pink-600" />
              </a>
              <a
                href="https://wa.me/5586995661742"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform"
              >
                <MessageCircle className="w-12 h-12 text-green-600" />
              </a>
            </div>
            <p className="text-xl text-gray-600">
              Estou à disposição para ajudar você a encontrar o Toyota dos seus sonhos!
            </p>
          </div>

          {/* Location Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.0876641238166!2d-41.7766493!3d-2.9043775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ec2522df7b7c2d%3A0x1c8f7f4b8fca7d8c!2sToyota%20Parnaiba!5e0!3m2!1spt-BR!2sbr!4v1710371547975!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                ></iframe>
              </div>
              <div className="p-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Toyota Parnaíba</h3>
                    <p className="text-gray-600">
                      BR-343, 1880 - Reis Veloso, Parnaíba - PI, 64204-035
                    </p>
                    <a
                      href="https://maps.app.goo.gl/VDJzksm4qGFRneTu5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 hover:text-red-700 font-medium mt-2 inline-block"
                    >
                      Ver no Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2024 Sandy Alves - Consultora Toyota Parnaíba. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;