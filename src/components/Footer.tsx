import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const navigationLinks = [
    { name: t('nav.home'), href: "#home" },
    { name: t('nav.menu'), href: "#menu" },
    { name: t('nav.about'), href: "#about" },
    { name: t('nav.book'), href: "#booking" }
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
                  src='/logo.png'
                  alt={t('gallery.logo.background')}
                  className='h-12 w-12 sm:h-14 sm:w-14 object-contain'
                />
                <div>
                  <h3 className='text-lg sm:text-xl font-semibold text-white font-montserrat'>
                    {t('header.restaurant')}
                  </h3>
                  <p className='text-xs sm:text-sm text-white/80 font-light'>
                    {t('footer.restaurant')}
                  </p>
                </div>
              </div>
              <p className='text-white/90 font-light leading-relaxed'>
                {t('footer.description')}
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
                {t('footer.quickLinks')}
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
                {t('footer.contactInfo')}
              </h3>
              <div className='space-y-4'>
                <div className='flex items-start gap-3'>
                  <MapPin className='text-white mt-1 flex-shrink-0' size={18} />
                  <div>
                    <p className='text-white/90 font-light'>
                      {t('footer.address.line1')}
                      <br />
                      {t('footer.address.line2')}
                      <br />
                      {t('footer.address.line3')}
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
                {t('footer.openingHours')}
              </h3>
              <div className='space-y-3'>
                <div className='flex items-center gap-3 mb-4'>
                  <Clock className='text-white flex-shrink-0' size={18} />
                  <span className='text-white/90 font-light'>{t('footer.weAreOpen')}</span>
                </div>
                <div className='space-y-2'>
                  <div className='flex justify-between'>
                    <span className='text-white/90 font-light'>
                      {t('footer.days.monThurs')}
                    </span>
                    <span className='text-white font-medium'>
                      11:00 - 22:00
                    </span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-white/90 font-light'>
                      {t('footer.days.friSat')}
                    </span>
                    <span className='text-white font-medium'>
                      11:00 - 23:00
                    </span>
                  </div>
                  <div className='flex justify-between'>
                    <span className='text-white/90 font-light'>{t('footer.days.sunday')}</span>
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
                {t('footer.copyright').replace('{year}', currentYear.toString())}
              </p>
            </div>
            <div className='flex items-center gap-4 sm:gap-6 text-xs sm:text-sm'>
              <button className='text-white/90 hover:text-white transition-colors duration-300 font-light'>
                {t('footer.privacyPolicy')}
              </button>
              <button className='text-white/90 hover:text-white transition-colors duration-300 font-light'>
                {t('footer.termsOfService')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
