import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Import the hero images we already have
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

// Gallery images - we'll use the existing images for now
// In a real scenario, you would add more dedicated gallery images
const galleryImages = [
  {
    src: hero1,
    alt: "Armenian Restaurant Interior"
  },
  {
    src: hero2,
    alt: "Traditional Armenian Cuisine"
  },
  {
    src: hero3,
    alt: "Armenian Chef Cooking"
  },
  {
    src: hero1,
    alt: "Traditional Armenian Decor"
  },
  {
    src: hero2,
    alt: "Armenian Desserts"
  },
  {
    src: hero3,
    alt: "Restaurant Atmosphere"
  }
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Animation variants for gallery items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="gallery" className="py-12 md:py-20 bg-gradient-to-b from-background to-card/30 relative overflow-hidden">
      {/* Background Pattern with Logo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-orangered/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-orangered/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-orangered/10 rounded-full blur-2xl"></div>
        
        {/* Blurred Logo Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <img 
            src="/lovable-uploads/754e1eea-9a30-4b0b-ba6a-0c42f1f3a3f0.png" 
            alt="Armenian Restaurant Logo Background" 
            className="w-full h-full object-contain scale-150 blur-md"
          />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header with Logo */}
        <div className="text-center mb-6 md:mb-16">
          <div className="flex justify-center items-center gap-2 md:gap-6 mb-4 md:mb-6">
            <div className="w-8 md:w-12 h-0.5 bg-orangered"></div>
            <div className="relative">
              <img
                src="/lovable-uploads/754e1eea-9a30-4b0b-ba6a-0c42f1f3a3f0.png"
                alt="Armenian Restaurant Logo"
                className="w-16 h-16 md:w-20 md:h-20 object-contain hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-orangered/20 rounded-full blur-2xl"></div>
            </div>
            <div className="w-8 md:w-12 h-0.5 bg-orangered"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-light text-foreground mb-3 md:mb-6 font-montserrat">
            Our Gallery
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed px-4 md:px-0">
            Explore the beauty of Armenian cuisine and our restaurant's ambiance through our carefully curated gallery
          </p>
        </div>


        {/* Gallery grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-2xl shadow-xl"
              variants={itemVariants}
              onClick={() => setSelectedImage(index)}
            >
              {/* Glassmorphism Background */}
              <div className="absolute inset-0 bg-orangered/5 backdrop-blur-md rounded-2xl border border-orangered/20 group-hover:bg-orangered/5 group-hover:border-orangered/30 transition-all duration-300"></div>
              
              <div className="aspect-w-4 aspect-h-3 relative z-10">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-orangered/20 opacity-0 group-hover:opacity-100 transition-opacity duration-100 z-20 rounded-2xl"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-orangered/10 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 text-black bg-white/70 rounded-full p-1.5 sm:p-2 hover:bg-white shadow-md"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-6 sm:h-6">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img 
              src={galleryImages[selectedImage].src} 
              alt={galleryImages[selectedImage].alt}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            
            {/* Mobile-visible navigation arrows */}
            <div className="absolute top-1/2 left-2 sm:left-0 transform -translate-y-1/2 sm:-translate-x-12 z-20">
              <button 
                className="text-black bg-white/70 rounded-full p-2 hover:bg-white shadow-md"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
            </div>
            
            <div className="absolute top-1/2 right-2 sm:right-0 transform -translate-y-1/2 sm:translate-x-12 z-20">
              <button 
                className="text-black bg-white/70 rounded-full p-2 hover:bg-white shadow-md"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((selectedImage + 1) % galleryImages.length);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
