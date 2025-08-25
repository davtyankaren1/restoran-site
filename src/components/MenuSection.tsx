import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import kebabImg from "@/assets/menu/kebab.jpg";
import dolmaImg from "@/assets/menu/dolma.jpg";
import lavashImg from "@/assets/menu/lavash.jpg";
import khorovatsImg from "@/assets/menu/khorovats.jpg";
import mantiImg from "@/assets/menu/manti.jpg";
import baklavaImg from "@/assets/menu/baklava.jpg";
import babaGanoushImg from "@/assets/menu/baba-ganoush.jpg";
import hummusImg from "@/assets/menu/hummus.jpg";
import lahmacunImg from "@/assets/menu/lahmacun.jpg";
import pilafImg from "@/assets/menu/pilaf.jpg";
import gataImg from "@/assets/menu/gata.jpg";
import coffeeImg from "@/assets/menu/coffee.jpg";

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState(1);

  const categories = [
    { id: 1, name: "Entrantes" },
    { id: 2, name: "Platos Principales" },
    { id: 3, name: "Postres" }
  ];

  const appetizers = [
    {
      id: 1,
      name: "Dolma",
      description:
        "Hojas de parra rellenas tradicionales con arroz, hierbas y especias",
      price: "$12.95",
      image: dolmaImg
    },
    {
      id: 2,
      name: "Fresh Lavash",
      description: "Pan plano armenio tradicional caliente servido con hierbas",
      price: "$8.95",
      image: lavashImg
    }
  ];

  const additionalAppetizers = [
    {
      id: 7,
      name: "Baba Ganoush",
      description: "Dip de berenjena ahumada con tahini, ajo y aceite de oliva",
      price: "$10.95",
      image: babaGanoushImg
    },
    {
      id: 8,
      name: "Hummus",
      description: "Dip cremoso de garbanzos cubierto con pimentón y aceite de oliva",
      price: "$9.95",
      image: hummusImg
    }
  ];

  const mainCourses = [
    {
      id: 3,
      name: "Armenian Kebab",
      description: "Brochetas de cordero y ternera a la parrilla con especias aromáticas",
      price: "$24.95",
      image: kebabImg
    },
    {
      id: 4,
      name: "Khorovats",
      description: "Parrillada mixta con verduras y carnes marinadas",
      price: "$28.95",
      image: khorovatsImg
    },
    {
      id: 5,
      name: "Manti",
      description:
        "Empanadillas al vapor rellenas de carne sazonada, servidas con yogur",
      price: "$22.95",
      image: mantiImg
    }
  ];

  const additionalMainCourses = [
    {
      id: 9,
      name: "Lahmacun",
      description:
        "Pan plano fino y crujiente cubierto con carne picada especiada y verduras",
      price: "$18.95",
      image: lahmacunImg
    },
    {
      id: 10,
      name: "Armenian Pilaf",
      description: "Arroz fragante cocinado con fideos y mantequilla",
      price: "$14.95",
      image: pilafImg
    }
  ];

  const desserts = [
    {
      id: 6,
      name: "Armenian Baklava",
      description: "Capas de masa filo con frutos secos y almíbar de miel",
      price: "$9.95",
      image: baklavaImg
    }
  ];

  const additionalDesserts = [
    {
      id: 11,
      name: "Gata",
      description: "Pan dulce armenio tradicional con capas de mantequilla",
      price: "$8.95",
      image: gataImg
    },
    {
      id: 12,
      name: "Armenian Coffee",
      description: "Café tradicional intenso servido con delicias armenias",
      price: "$6.95",
      image: coffeeImg
    }
  ];

  const MenuCategory = ({
    title,
    items
  }: {
    title: string;
    items: typeof appetizers;
  }) => (
    <div className='mb-8'>
      <h3 className='text-2xl md:text-3xl font-light text-foreground mb-8 md:mb-12 text-center font-montserrat relative'>
        <span className='relative z-10 bg-background px-4 md:px-6 py-1 md:py-2 rounded-full border border-orangered/20'>
          {title}
        </span>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='w-full h-px bg-gradient-to-r from-transparent via-orangered/30 to-transparent'></div>
        </div>
      </h3>
      <div className='grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 mx-auto'>
        {items.map((item) => (
          <div key={item.id} className='relative group'>
            {/* Glassmorphism Background */}
            <div className='absolute inset-0 bg-orangered/5 backdrop-blur-md rounded-2xl border border-orangered/20 group-hover:bg-orangered/5 group-hover:border-orangered/30 transition-all duration-300'></div>

            {/* Content */}
            <div className='relative flex flex-col sm:flex-row items-center sm:items-start sm:justify-between p-3 sm:p-5 md:p-6 rounded-2xl transition-all duration-200'>
              <div className='flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-3 md:gap-4 w-full'>
                {/* Circular Image with Glow */}
                <div className='flex-shrink-0 relative mb-2 sm:mb-0'>
                  <div className='w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden ring-2 ring-orangered/30 group-hover:ring-orangered/50 transition-all duration-300 relative z-10'>
                    <img
                      src={item.image}
                      alt={item.name}
                      className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                    />
                  </div>
                  {/* Glow Effect */}
                  <div className='absolute inset-0 bg-orangered/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                </div>

                {/* Dish Details */}
                <div className='flex-grow text-center sm:text-left'>
                  <h4 className='text-sm sm:text-lg md:text-xl font-medium text-foreground font-montserrat group-hover:text-orangered transition-colors duration-300 mb-0.5 sm:mb-1.5 md:mb-2'>
                    {item.name}
                  </h4>
                  <p className='text-xs sm:text-sm md:text-sm text-muted-foreground font-light leading-relaxed line-clamp-2'>
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Price with Enhanced Styling */}
              <div className='flex-shrink-0 mt-1 sm:mt-0 sm:ml-4 md:ml-6'>
                <div className='bg-orangered/10 backdrop-blur-sm rounded-full px-1.5 sm:px-4 md:px-4 py-0.5 sm:py-1.5 md:py-2 border border-orangered/30 group-hover:bg-orangered/30 group-hover:border-orangered/50 transition-all duration-300'>
                  <span className='text-xs sm:text-base md:text-lg font-semibold text-black font-montserrat'>
                    {item.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      className='py-12 md:py-20 bg-gradient-to-b from-background to-card/30 relative overflow-hidden'
      id='menu'
    >
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-20 left-10 w-64 h-64 bg-orangered/20 rounded-full blur-3xl'></div>
        <div className='absolute bottom-20 right-10 w-80 h-80 bg-orangered/15 rounded-full blur-3xl'></div>
        <div className='absolute top-1/2 left-1/3 w-48 h-48 bg-orangered/10 rounded-full blur-2xl'></div>
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        {/* Section Header */}
        <div className='text-center mb-6 md:mb-16'>
          <div className='flex justify-center items-center gap-2 md:gap-6 mb-4 md:mb-6'>
            <div className='w-8 md:w-12 h-0.5 bg-orangered'></div>
            <div className='relative'>
              <img
                src='/lovable-uploads/754e1eea-9a30-4b0b-ba6a-0c42f1f3a3f0.png'
                alt='Logo del Restaurante Armenio'
                className='w-16 h-16 md:w-20 md:h-20 object-contain hover:scale-110 transition-transform duration-300'
              />
              <div className='absolute inset-0 bg-orangered/20 rounded-full blur-2xl'></div>
            </div>
            <div className='w-8 md:w-12 h-0.5 bg-orangered'></div>
          </div>
          <h2 className='text-3xl md:text-5xl font-light text-foreground mb-3 md:mb-6 font-montserrat'>
            Nuestro Menú
          </h2>
          <p className='text-base md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed px-4 md:px-0'>
            Descubra auténticos sabores armenios elaborados con recetas tradicionales
            y los mejores ingredientes
          </p>
        </div>

        {/* Menu Categories */}
        <div className='flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 mb-8 md:mb-12 px-2'>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-full font-montserrat text-sm sm:text-base transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-orangered text-white shadow-lg shadow-orangered/30"
                  : "bg-card hover:bg-orangered/10 text-foreground"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        {activeCategory === 1 && (
          <MenuCategory
            title='Entrantes'
            items={[...appetizers, ...additionalAppetizers]}
          />
        )}
        {activeCategory === 2 && (
          <MenuCategory
            title='Platos Principales'
            items={[...mainCourses, ...additionalMainCourses]}
          />
        )}
        {activeCategory === 3 && (
          <MenuCategory
            title='Postres'
            items={[...desserts, ...additionalDesserts]}
          />
        )}
      </div>
    </section>
  );
};

export default MenuSection;
