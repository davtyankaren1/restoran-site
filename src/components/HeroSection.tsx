import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  const slides = [
    { image: hero1, alt: t('hero.slide1.alt') },
    { image: hero2, alt: t('hero.slide2.alt') },
    { image: hero3, alt: t('hero.slide3.alt') }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className='relative h-screen overflow-hidden' id='home'>
      {/* Image Slider */}
      <div className='absolute inset-0'>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className='w-full h-full object-cover'
              loading={index === 0 ? "eager" : "lazy"}
            />
            {/* Orangered Overlay */}
            <div className='absolute inset-0 hero-overlay'></div>
          </div>
        ))}
      </div>

      {/* Moving Lights Effect */}
      <div className='moving-lights'>
        <div className='light'></div>
        <div className='light'></div>
        <div className='light'></div>
        <div className='light'></div>
        <div className='light'></div>
        <div className='light'></div>
        <div className='light'></div>
        <div className='light'></div>
        <div className='light'></div>
        <div className='light'></div>
        <div className='light'></div>
        <div className='light'></div>
        <div className='light'></div>
        <div className='light'></div>
        <div className='light'></div>
        <div className='light'></div>
      </div>

      {/* Content Overlay */}
      <div className='relative z-10 flex items-center justify-center h-full'>
        <div className='text-center text-white px-4 max-w-4xl mx-auto'>
          <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 font-montserrat tracking-tight'>
            {t('hero.title')}
          </h1>
          <p className='text-base sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-12 font-light max-w-3xl mx-auto leading-relaxed px-2'>
            {t('hero.description')}
          </p>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center'>
            <div className='w-[180px] sm:w-auto'>
              <Button
                size='lg'
                className='btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 font-semibold w-full sm:w-auto hover:scale-100'
                onClick={() => {
                  const element = document.getElementById("menu");
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start"
                    });
                  }
                }}
              >
                {t('hero.button.menu')}
              </Button>
            </div>

            <div className='w-[180px] sm:w-auto'>
              <Button
                size='lg'
                variant='outline'
                className='text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 font-semibold border-white text-black bg-white hover:bg-white hover:text-black w-full sm:w-auto'
                onClick={() => {
                  const element = document.getElementById("booking");
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start"
                    });
                  }
                }}
              >
                {t('hero.button.book')}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className='absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20'>
        <div className='flex space-x-4'>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
