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
      className='py-16 bg-gradient-to-b from-background to-card/30 relative overflow-hidden'
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
        <div className='text-center mb-12'>
          <div className='flex justify-center items-center gap-3 mb-6'>
            <div className='w-12 h-0.5 bg-orangered'></div>
            <Info className='text-orangered' size={32} />
            <div className='w-12 h-0.5 bg-orangered'></div>
          </div>
          <h2 className='text-5xl font-light text-foreground mb-6 font-montserrat'>
            About Our Story
          </h2>
          <p className='text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed'>
            A journey through Armenian heritage, bringing authentic flavors and
            warm hospitality to your table
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Side - Logo and Text */}
          <div className='space-y-8'>
            {/* Logo with Overlay */}
            <div className='relative'>
              <div className='absolute inset-0 bg-gradient-to-r from-orangered/10 to-transparent rounded-3xl blur-3xl'></div>
              <div className='relative bg-card/50 backdrop-blur-sm rounded-3xl p-12 border border-orangered/10 flex items-center justify-center'>
                <div className='relative'>
                  <img
                    src='/lovable-uploads/754e1eea-9a30-4b0b-ba6a-0c42f1f3a3f0.png'
                    alt='Armenian Restaurant Logo'
                    className='w-48 h-48 object-contain hover:scale-105 transition-transform duration-300'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-orangered/20 to-transparent rounded-full'></div>
                </div>
              </div>
            </div>

            {/* Story Text */}
            <div className='space-y-6'>
              <h3 className='text-3xl font-light text-foreground font-montserrat'>
                Bringing Armenia to Your Plate
              </h3>
              <div className='space-y-4 text-muted-foreground font-light leading-relaxed'>
                <p>
                  Founded with a deep love for Armenian culture and cuisine, our
                  restaurant is more than just a place to dine – it's a bridge
                  between the rich traditions of Armenia and the modern culinary
                  world.
                </p>
                <p>
                  Our chefs, trained in the ancient techniques of Armenian
                  cooking, carefully prepare each dish using time-honored
                  recipes that have been perfected over centuries. From the
                  smoky flavors of our grilled meats to the delicate spices in
                  our vegetarian dishes, every bite tells a story.
                </p>
                <p>
                  We believe that food is the universal language of love, and
                  through our authentic Armenian cuisine, we invite you to
                  experience the warmth, hospitality, and rich cultural heritage
                  that defines our beautiful nation.
                </p>
              </div>

              <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                <Button
                  className='btn-primary'
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
                  className='border-orangered text-orangered hover:bg-orangered hover:text-white'
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
          <div className='space-y-8'>
            <div className='grid gap-8'>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className='group p-8 rounded-2xl bg-card hover:shadow-[var(--shadow-elegant)] transition-all duration-300 border border-orangered/5 hover:border-orangered/20'
                >
                  <div className='flex items-start gap-6'>
                    <div className='flex-shrink-0'>
                      <div className='w-16 h-16 rounded-2xl bg-orangered/10 flex items-center justify-center group-hover:bg-orangered group-hover:scale-110 transition-all duration-300'>
                        <feature.icon
                          className='text-orangered group-hover:text-white transition-colors duration-300'
                          size={28}
                        />
                      </div>
                    </div>
                    <div className='space-y-3'>
                      <h4 className='text-xl font-medium text-foreground font-montserrat group-hover:text-orangered transition-colors duration-300'>
                        {feature.title}
                      </h4>
                      <p className='text-muted-foreground font-light leading-relaxed'>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className='grid grid-cols-3 gap-6 pt-8'>
              <div className='text-center p-6 rounded-2xl bg-gradient-to-b from-orangered/5 to-transparent'>
                <div className='text-3xl font-light text-orangered mb-2 font-montserrat'>
                  15+
                </div>
                <div className='text-sm text-muted-foreground font-light'>
                  Years Experience
                </div>
              </div>
              <div className='text-center p-6 rounded-2xl bg-gradient-to-b from-orangered/5 to-transparent'>
                <div className='text-3xl font-light text-orangered mb-2 font-montserrat'>
                  50+
                </div>
                <div className='text-sm text-muted-foreground font-light'>
                  Traditional Recipes
                </div>
              </div>
              <div className='text-center p-6 rounded-2xl bg-gradient-to-b from-orangered/5 to-transparent'>
                <div className='text-3xl font-light text-orangered mb-2 font-montserrat'>
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
