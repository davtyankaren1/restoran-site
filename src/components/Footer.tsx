import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Menú", href: "#menu" },
    { name: "Nosotros", href: "#about" },
    { name: "Reservar Mesa", href: "#booking" }
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" }
  ];

  const scrollToSection = (href: string) => {
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <footer className='bg-gradient-to-b from-red-600/100 via-blue-600/100 to-orange-500/100 relative overflow-hidden'>
      <div className='container mx-auto px-4 relative z-10'>
        <div className='py-10 sm:py-16'>
          <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-8 sm:gap-12'>
            <div className='space-y-6'>
              <div className='flex items-center space-x-3'>
                <img
                  src='/lovable-uploads/754e1eea-9a30-4b0b-ba6a-0c42f1f3a3f0.png'
                  alt='Logo del Restaurante Armenio'
                  className='h-12 w-12 sm:h-14 sm:w-14 object-contain'
                />
                <div>
                  <h3 className='text-lg sm:text-xl font-semibold text-white font-montserrat'>
                    Restaurante Armenio Pigeon
                  </h3>
                  <p className='text-xs sm:text-sm text-white/80 font-light'>
                    Restaurante
                  </p>
                </div>
              </div>
              <p className='text-white/90 font-light leading-relaxed'>
                Experimente la auténtica cocina armenia en un ambiente elegante
                donde la tradición se encuentra con la sofisticación moderna.
              </p>
              <div className='flex space-x-4'>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className='w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-orangered transition-all duration-300 hover:scale-110'
                    aria-label={social.name}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className='space-y-4 sm:space-y-6'>
              <h3 className='text-lg sm:text-xl font-semibold text-white font-montserrat'>
                Enlaces Rápidos
              </h3>
              <ul className='space-y-3'>
                {navigationLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className='text-white/90 hover:text-white transition-colors duration-300 font-light hover:translate-x-1 transform inline-block'
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className='space-y-4 sm:space-y-6'>
              <h3 className='text-lg sm:text-xl font-semibold text-white font-montserrat'>
                Información de Contacto
              </h3>
              <div className='space-y-4'>
                <div className='flex items-start gap-3'>
                  <MapPin className='text-white mt-1 flex-shrink-0' size={18} />
                  <div>
                    <p className='text-white/90 font-light'>
                      123 Calle Armenia
                      <br />
                      Distrito Centro
                      <br />
                      Ciudad, Estado 12345
                    </p>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <Phone className='text-white flex-shrink-0' size={18} />
                  <a
                    href='tel:+1234567890'
                    className='text-white/90 hover:text-white transition-colors duration-300 font-light'
                  >
                    +1 (234) 567-8900
                  </a>
                </div>
                <div className='flex items-center gap-3'>
                  <Mail className='text-white flex-shrink-0' size={18} />
                  <a
                    href='mailto:info@pigeonarmenian.com'
                    className='text-white/90 hover:text-white transition-colors duration-300 font-light'
                  >
                    info@pigeonarmenian.com
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className='space-y-4 sm:space-y-6'>
              <h3 className='text-lg sm:text-xl font-semibold text-white font-montserrat'>
                Horario de Apertura
              </h3>
              <div className='space-y-3'>
                <div className='flex items-center gap-3 mb-4'>
                  <Clock className='text-white flex-shrink-0' size={18} />
                  <span className='text-white/90 font-light'>Estamos Abiertos</span>
                </div>
                <div className='space-y-2'>
                  <div className='flex justify-between'>
                    <span className='text-white/90 font-light'>
                      Lunes - Jueves
                    </span>
                    <span className='text-white font-medium'>
                      11:00 - 22:00
                    </span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-white/90 font-light'>
                      Viernes - Sábado
                    </span>
                    <span className='text-white font-medium'>
                      11:00 - 23:00
                    </span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-white/90 font-light'>Domingo</span>
                    <span className='text-white font-medium'>
                      12:00 - 21:00
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-white/20 py-6 sm:py-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <div className='flex items-center'>
              <p className='text-white/90 font-light text-xs sm:text-sm text-center md:text-left'>
                © {currentYear} Restaurante Armenio Pigeon. Todos los derechos reservados.
              </p>
            </div>
            <div className='flex items-center gap-4 sm:gap-6 text-xs sm:text-sm'>
              <button className='text-white/90 hover:text-white transition-colors duration-300 font-light'>
                Política de Privacidad
              </button>
              <button className='text-white/90 hover:text-white transition-colors duration-300 font-light'>
                Términos de Servicio
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
