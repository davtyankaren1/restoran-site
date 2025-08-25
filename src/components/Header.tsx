import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Phone, Globe, ChevronDown } from "lucide-react";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { name: t('nav.home'), href: "#home" },
    { name: t('nav.menu'), href: "#menu" },
    { name: t('nav.about'), href: "#about" },
    { name: t('nav.gallery'), href: "#gallery" },
    { name: t('nav.contact'), href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);

      // Update active section based on scroll position
      const sections = ["home", "menu", "about", "gallery", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border shadow-sm transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md"
          : "bg-background/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <img
              src="/logo.png"
              alt="Pigeon Armenian Restaurant Logo"
              className="h-10 w-10 md:h-14 md:w-14 transition-transform duration-300"
            />
            <div>
              <h1 className="text-sm md:text-xl text-foreground font-montserrat">
                {t('header.restaurant')}
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`nav-link font-medium transition-colors duration-300 ${
                  activeSection === item.href.substring(1)
                    ? "text-orangered font-semibold nav-link-active"
                    : "text-foreground hover:text-[hsl(var(--nav-hover))]"
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            {/* Language Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="hidden sm:flex items-center gap-1 text-sm text-foreground hover:text-orangered transition-colors outline-none">
                <img 
                  src={language === 'en' ? '/usa.png' : language === 'am' ? '/armenia.png' : '/spain.webp'} 
                  alt={language} 
                  className="w-5 h-3 object-cover" 
                />
                <span className="uppercase">{language}</span>
                <ChevronDown size={14} />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('en')} className={language === 'en' ? 'bg-orangered/10 text-orangered' : ''}>
                  <img src="/usa.png" alt="English" className="w-5 h-3 mr-2 object-cover" /> English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('am')} className={language === 'am' ? 'bg-orangered/10 text-orangered' : ''}>
                  <img src="/armenia.png" alt="Armenian" className="w-5 h-3 mr-2 object-cover" /> Հայերեն
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('es')} className={language === 'es' ? 'bg-orangered/10 text-orangered' : ''}>
                  <img src="/spain.webp" alt="Spanish" className="w-5 h-3 mr-2 object-cover" /> Español
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button
              className="btn-primary hidden sm:inline-flex"
              onClick={() => {
                const element = document.getElementById("booking");
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              {t('nav.book')}
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`bg-foreground block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                    isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                  }`}
                ></span>
                <span
                  className={`bg-foreground block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`bg-foreground block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                    isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "h-screen opacity-100" : "h-0 opacity-0"
          } overflow-hidden fixed top-20 left-0 w-full bg-background/95 backdrop-blur-sm z-40 flex flex-col`}
        >
         
          <nav className="py-4 space-y-2 flex-grow">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`block nav-link font-medium w-full text-left transition-colors duration-300 rounded-lg ${
                  activeSection === item.href.substring(1)
                    ? "text-orangered font-semibold nav-link-active bg-orangered/5"
                    : "text-foreground hover:text-orangered hover:bg-muted/50"
                }`}
              >
                <span className="px-4">{item.name}</span>
              </button>
            ))}
            
            {/* Language Selector for Mobile */}
            <div className="mt-4 px-4">
              <p className="text-sm text-muted-foreground mb-2">{t('nav.language')}</p>
              <div className="flex gap-3">
                <button 
                  onClick={() => setLanguage('en')} 
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-md outline-none ${language === 'en' ? 'bg-orangered/10 text-orangered' : 'bg-muted hover:bg-muted/80'}`}
                >
                  <img src="/usa.png" alt="English" className="w-5 h-3 object-cover" /> EN
                </button>
                <button 
                  onClick={() => setLanguage('am')} 
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-md outline-none ${language === 'am' ? 'bg-orangered/10 text-orangered' : 'bg-muted hover:bg-muted/80'}`}
                >
                  <img src="/armenia.png" alt="Armenian" className="w-5 h-3 object-cover" /> AM
                </button>
                <button 
                  onClick={() => setLanguage('es')} 
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-md outline-none ${language === 'es' ? 'bg-orangered/10 text-orangered' : 'bg-muted hover:bg-muted/80'}`}
                >
                  <img src="/spain.webp" alt="Spanish" className="w-5 h-3 object-cover" /> ES
                </button>
              </div>
            </div>
            
            <div className="pt-4 pb-2"></div>
          </nav>
          
          {/* Bottom Section with Button and Social */}
          <div className="mt-auto border-t border-gray-100">
            {/* Book a Table Button */}
            <div className="px-4 py-6">
              <Button
                className="btn-primary w-full"
                onClick={() => {
                  const element = document.getElementById("booking");
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                    setIsMenuOpen(false);
                  }
                }}
              >
                {t('nav.book')}
              </Button>
            </div>
            
            {/* Phone Number */}
            <div className="text-center mb-12 border-t border-gray-100">
              <p className="text-muted-foreground text-sm">{t('contact.call')}</p>
              <a href="tel:+12345678900" className="text-orangered font-medium">+1 (234) 567-8900</a>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex justify-center space-x-6 pb-6">
              <a href="#" className="p-2 rounded-full bg-orangered/10 hover:bg-orangered/20 transition-colors">
                <Facebook size={20} className="text-orangered" />
              </a>
              <a href="#" className="p-2 rounded-full bg-orangered/10 hover:bg-orangered/20 transition-colors">
                <Instagram size={20} className="text-orangered" />
              </a>
              <a href="#" className="p-2 rounded-full bg-orangered/10 hover:bg-orangered/20 transition-colors">
                <Phone size={20} className="text-orangered" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
