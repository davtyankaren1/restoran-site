import { Info, Heart, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const features = [
    {
      icon: Heart,
      title: "Passion for Authenticity",
      description:
        "Every dish is crafted with love using traditional Armenian recipes passed down through generations."
    },
    {
      icon: Users,
      title: "Family Atmosphere",
      description:
        "We create a warm, welcoming environment where every guest feels like part of our Armenian family."
    },
    {
      icon: Award,
      title: "Premium Quality",
      description:
        "We source only the finest ingredients to ensure every meal exceeds your expectations."
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
        {/* Section Header */}
        <div className='text-center mb-6 md:mb-12'>
          <h2 className='text-3xl md:text-5xl font-light text-foreground mb-3 md:mb-6 font-montserrat'>
            About Our Story
          </h2>
          <p className='text-base md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed px-4 md:px-0'>
            A journey through Armenian heritage, bringing authentic flavors and
            warm hospitality to your table
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-8 md:gap-12 items-center'>
          {/* Left Side - Logo and Text */}
          <div className='space-y-8'>
            {/* Logo with Overlay */}

            <div className='relative'>
              <div className='absolute inset-0 bg-[url("https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/2560px-Flag_of_Argentina.svg.png")] bg-cover bg-center backdrop-blur-sm rounded-3xl'></div>
              <div className='relative bg-card/50 rounded-3xl p-8 md:p-12 border border-orangered/10 flex items-center justify-center'>
                <img
                  src='/lovable-uploads/754e1eea-9a30-4b0b-ba6a-0c42f1f3a3f0.png'
                  alt='Armenian Restaurant Logo'
                  className='w-36 h-36 md:w-48 md:h-48 object-contain hover:scale-105 transition-transform duration-300'
                />
              </div>
            </div>

            {/* Story Text */}
            <div className='space-y-6'>
              <h3 className='text-2xl md:text-3xl font-light text-foreground font-montserrat'>
                Llevando Armenia a tu Plato
              </h3>
              <div className='space-y-4 text-muted-foreground font-light leading-relaxed'>
                <p>
                  Fundado con un profundo amor por la cultura y la cocina
                  armenia, nuestro restaurante es más que un lugar para comer:
                  es un puente entre las ricas tradiciones de Armenia y el mundo
                  culinario moderno.
                </p>
                <p>
                  Nuestros chefs, capacitados en las antiguas técnicas de la
                  cocina armenia, preparan cuidadosamente cada plato utilizando
                  recetas tradicionales que han sido perfeccionadas durante
                  siglos. Desde los sabores ahumados de nuestras carnes a la
                  parrilla hasta las especias delicadas en nuestros platos
                  vegetarianos, cada bocado cuenta una historia.
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
                  Discover Our Menu
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
                  Book Your Table
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side - Features */}
          <div>
            <div className='grid gap-1 md:gap-2' style={{ marginTop: "-70px" }}>
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
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8'>
              <div className='text-center p-4 md:p-6 rounded-2xl bg-gradient-to-b from-orangered/5 to-transparent mb-4 sm:mb-0'>
                <div className='text-2xl md:text-3xl font-light text-orangered mb-1 md:mb-2 font-montserrat'>
                  15+
                </div>
                <div className='text-sm text-muted-foreground font-light'>
                  Years Experience
                </div>
              </div>
              <div className='text-center p-4 md:p-6 rounded-2xl bg-gradient-to-b from-orangered/5 to-transparent mb-4 sm:mb-0'>
                <div className='text-2xl md:text-3xl font-light text-orangered mb-1 md:mb-2 font-montserrat'>
                  50+
                </div>
                <div className='text-sm text-muted-foreground font-light'>
                  Traditional Recipes
                </div>
              </div>
              <div className='text-center p-4 md:p-6 rounded-2xl bg-gradient-to-b from-orangered/5 to-transparent'>
                <div className='text-2xl md:text-3xl font-light text-orangered mb-1 md:mb-2 font-montserrat'>
                  1000+
                </div>
                <div className='text-sm text-muted-foreground font-light'>
                  Happy Customers
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
