import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Información Faltante",
        description: "Por favor complete todos los campos.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Mensaje Enviado!",
      description: "Le responderemos dentro de las próximas 24 horas."
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Llámenos",
      details: "+1 (234) 567-8900"
    },
    {
      icon: Mail,
      title: "Envíenos un Correo",
      details: "info@pigeonarmenian.com"
    },
    {
      icon: MapPin,
      title: "Visítenos",
      details: "123 Calle Armenia, Distrito Centro"
    },
    {
      icon: Phone,
      title: "WhatsApp",
      details: "+1 (234) 567-8900"
    },
    {
      icon: Phone,
      title: "Viber",
      details: "+1 (234) 567-8900"
    },
    {
      icon: Phone,
      title: "Telegram",
      details: "@pigeonarmenian"
    }
  ];

  return (
    <section className='py-10 bg-background' id='contact'>
      <div className='container mx-auto px-4'>
        {/* Clean Background Container */}
        <div className='py-12'>
          {/* Section Header */}
          <div className='text-center mb-6 md:mb-16'>
            <div className='flex justify-center items-center gap-2 md:gap-6 mb-3 sm:mb-4 md:mb-6'>
              <div className='w-6 sm:w-8 md:w-12 h-0.5 bg-border'></div>
              <img
                src='/lovable-uploads/754e1eea-9a30-4b0b-ba6a-0c42f1f3a3f0.png'
                alt='Logo del Restaurante Armenio'
                className='w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain hover:scale-110 transition-transform duration-300'
              />
              <div className='w-6 sm:w-8 md:w-12 h-0.5 bg-border'></div>
            </div>
            <h2 className='text-2xl sm:text-3xl md:text-5xl font-light text-foreground mb-2 sm:mb-3 md:mb-6 font-montserrat'>
              Contacto
            </h2>
            <p className='text-sm sm:text-base md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed px-4 md:px-0'>
              Póngase en contacto con nosotros
            </p>
          </div>

          <div className='mx-auto'>
            <div className='grid lg:grid-cols-2 gap-10'>
              {/* Contact Information */}
              <div className='space-y-8'>
                <div className='grid grid-cols-2 gap-3 sm:gap-8'>
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className='flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 p-3 sm:p-6 bg-card rounded-xl border border-orangered/20 transition-all duration-300'

                      // className='flex items-start gap-4 p-6 bg-card rounded-xl shadow-md transition-all duration-300'
                    >
                      <div className='flex-shrink-0'>
                        <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orangered/10 flex items-center justify-center'>
                          <info.icon className='text-orangered' size={20} />
                        </div>
                      </div>
                      <div className='space-y-1 text-center sm:text-left'>
                        <h3 className='text-base sm:text-lg font-medium text-foreground font-montserrat'>
                          {info.title}
                        </h3>
                        <p className='text-xs sm:text-sm text-muted-foreground'>
                          {info.details}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Form (Horizontal Layout) */}
              <div className='bg-card'>
                <form onSubmit={handleSubmit} className='space-y-8'>
                  <div className='flex gap-8'>
                    <div className='flex-1 space-y-2'>
                      <Label
                        htmlFor='contact-name'
                        className='text-foreground font-light font-montserrat'
                      >
                        Nombre
                      </Label>
                      <Input
                        id='contact-name'
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        className='h-12 border-border focus:border-orangered focus:ring-orangered/20'
                        placeholder='Su nombre'
                        required
                      />
                    </div>

                    <div className='flex-1 space-y-2'>
                      <Label
                        htmlFor='contact-email'
                        className='text-foreground font-light font-montserrat'
                      >
                        Correo Electrónico
                      </Label>
                      <Input
                        id='contact-email'
                        type='email'
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className='h-12 border-border focus:border-orangered focus:ring-orangered/20'
                        placeholder='su@correo.com'
                        required
                      />
                    </div>
                  </div>

                  <div className='space-y-2'>
                    <Label
                      htmlFor='contact-message'
                      className='text-foreground font-light font-montserrat'
                    >
                      Mensaje
                    </Label>
                    <Textarea
                      id='contact-message'
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      className='min-h-40 border-border focus:border-orangered focus:ring-orangered/20 resize-none'
                      placeholder='Su mensaje...'
                      required
                    />
                  </div>

                  <Button
                    type='submit'
                    className='w-full bg-orangered hover:bg-orangered/90 text-white font-medium py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 font-montserrat'
                  >
                    <Send size={18} />
                    Enviar Mensaje
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
