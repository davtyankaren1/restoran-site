import { Heart, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Heart,
      title: t('about.feature1.title'),
      description: t('about.feature1.description')
    },
    {
      icon: Users,
      title: t('about.feature2.title'),
      description: t('about.feature2.description')
    },
    {
      icon: Award,
      title: t('about.feature3.title'),
      description: t('about.feature3.description')
    }
  ];

  return (
    <section
      className='py-12 md:py-16 bg-gradient-to-b from-background to-card/30 relative overflow-hidden'
      id='about'
    >
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-10 left-10 w-32 h-32 border border-orangered rounded-full'></div>
        <div className='absolute bottom-20 right-20 w-24 h-24 border border-orangered rounded-full'></div>
        <div className='absolute top-1/2 left-20 w-16 h-16 border border-orangered rounded-full'></div>
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        {/* Section Header with Logo */}
        <div className='text-center mb-6 md:mb-12'>
          <div className="flex justify-center items-center gap-2 md:gap-6 mb-4 md:mb-6">
            <div className="w-8 md:w-12 h-0.5 bg-orangered"></div>
            <div className="relative">
              <img
                src="/logo.png"
                alt={t('header.restaurant')}
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
              <div className="absolute inset-0 bg-orangered/20 rounded-full blur-2xl"></div>
            </div>
            <div className="w-8 md:w-12 h-0.5 bg-orangered"></div>
          </div>
          <h2 className='text-3xl md:text-5xl font-light text-foreground mb-3 md:mb-6 font-montserrat'>
            {t('about.title')}
          </h2>
          <p className='text-base md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed px-4 md:px-0'>
            {t('about.description')}
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-8 md:gap-12 items-center'>
          {/* Left Side - Logo and Text */}
          <div className='space-y-8'>
            {/* Logo with Overlay */}

            <div className='relative'>
              <div className='absolute inset-0 bg-[url("/arg-arm.png")] bg-cover bg-center backdrop-blur-sm rounded-3xl'></div>
              <div className='relative bg-card/50 rounded-3xl p-8 md:p-12 border border-orangered/10 flex items-center justify-center'>
                <img
                  src='/logo.png'
                  alt={t('header.restaurant')}
                  className='w-36 h-36 md:w-48 md:h-48 object-contain'
                />
              </div>
            </div>

            {/* Story Text */}
            <div className='space-y-6'>
              <h3 className='text-2xl md:text-3xl font-light text-foreground font-montserrat'>
                {t('about.subtitle')}
              </h3>
              <div className='space-y-4 text-muted-foreground font-light leading-relaxed'>
                <p>
                  {t('about.paragraph1')}
                </p>
                <p>
                  {t('about.paragraph2')}
                </p>
              </div>

              <div className='flex flex-col sm:flex-row gap-4 pt-4 w-full'>
                <Button
                  className='btn-primary w-full sm:w-auto text-base'
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
                  {t('about.button.menu')}
                </Button>
                <Button
                  variant='outline'
                  className='border-orangered text-orangered hover:bg-orangered hover:text-white w-full sm:w-auto text-base'
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
                  {t('about.button.book')}
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side - Features */}
          <div>
            <div className='grid gap-4 md:gap-6'>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className='group p-2 md:p-8 rounded-2xl bg-card hover:shadow-[var(--shadow-elegant)] transition-all duration-300 border  border-orangered/20'
                >
                  <div className='flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6'>
                    <div className='flex-shrink-0'>
                      <div className='w-10 h-10 md:w-16 md:h-16 rounded-2xl bg-orangered/10 flex items-center justify-center group-hover:bg-orangered transition-all duration-300'>
                        <feature.icon
                          className='text-orangered group-hover:text-white transition-colors duration-300'
                          size={24}
                        />
                      </div>
                    </div>
                    <div className='space-y-2 sm:space-y-3 text-center sm:text-left'>
                      <h4 className='text-base md:text-xl font-medium text-foreground font-montserrat group-hover:text-orangered transition-colors duration-300'>
                        {feature.title}
                      </h4>
                      <p className='text-sm md:text-base text-muted-foreground font-light leading-relaxed'>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className='grid grid-cols-3 gap-2 md:gap-6 pt-6 md:pt-8'>
              <div className='text-center p-2 md:p-6 rounded-2xl bg-gradient-to-b from-orangered/5 to-transparent'>
                <div className='text-xl md:text-3xl font-light text-orangered mb-1 md:mb-2 font-montserrat'>
                  15+
                </div>
                <div className='text-xs md:text-sm text-muted-foreground font-light'>
                  {t('about.stats.experience')}
                </div>
              </div>
              <div className='text-center p-2 md:p-6 rounded-2xl bg-gradient-to-b from-orangered/5 to-transparent'>
                <div className='text-xl md:text-3xl font-light text-orangered mb-1 md:mb-2 font-montserrat'>
                  50+
                </div>
                <div className='text-xs md:text-sm text-muted-foreground font-light'>
                  {t('about.stats.recipes')}
                </div>
              </div>
              <div className='text-center p-2 md:p-6 rounded-2xl bg-gradient-to-b from-orangered/5 to-transparent'>
                <div className='text-xl md:text-3xl font-light text-orangered mb-1 md:mb-2 font-montserrat'>
                  1000+
                </div>
                <div className='text-xs md:text-sm text-muted-foreground font-light'>
                  {t('about.stats.customers')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
