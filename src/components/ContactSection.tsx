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
        title: "Missing Information",
        description: "Please fill in all fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours."
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
      title: "Call Us",
      details: "+1 (234) 567-8900"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@pigeonarmenian.com"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Armenian Street, Downtown District"
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
    <section className='py-20 bg-background' id='contact'>
      <div className='container mx-auto px-4'>
        {/* Clean Background Container */}
        <div className='py-16'>
          {/* Section Header */}
          <div className='text-center mb-6 md:mb-16'>
            <div className='flex justify-center items-center gap-2 md:gap-6 mb-3 sm:mb-4 md:mb-6'>
              <div className='w-6 sm:w-8 md:w-12 h-0.5 bg-border'></div>
              <img
                src='/lovable-uploads/754e1eea-9a30-4b0b-ba6a-0c42f1f3a3f0.png'
                alt='Armenian Restaurant Logo'
                className='w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain hover:scale-110 transition-transform duration-300'
              />
              <div className='w-6 sm:w-8 md:w-12 h-0.5 bg-border'></div>
            </div>
            <h2 className='text-2xl sm:text-3xl md:text-5xl font-light text-foreground mb-2 sm:mb-3 md:mb-6 font-montserrat'>
              Contact
            </h2>
            <p className='text-sm sm:text-base md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed px-4 md:px-0'>
              Get in touch with us
            </p>
          </div>

          <div className='mx-auto'>
            <div className='grid lg:grid-cols-2 gap-16'>
              {/* Contact Information */}
              <div className='space-y-8'>
                <div className='space-y-6'>
                  {contactInfo.map((info, index) => (
                    <div key={index} className='flex items-start gap-3 sm:gap-4'>
                      <div className='flex-shrink-0'>
                        <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orangered/10 flex items-center justify-center'>
                          <info.icon className='text-orangered' size={18} />
                        </div>
                      </div>
                      <div className='space-y-0.5 sm:space-y-1'>
                        <h3 className='text-base sm:text-lg font-medium text-foreground font-montserrat'>
                          {info.title}
                        </h3>
                        <p className='text-sm sm:text-base text-muted-foreground font-light'>
                          {info.details}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className='bg-card rounded-2xl p-4 sm:p-5 md:p-8'>
                <form onSubmit={handleSubmit} className='space-y-4 sm:space-y-6'>
                  <div className='space-y-2'>
                    <Label
                      htmlFor='contact-name'
                      className='text-foreground font-light font-montserrat'
                    >
                      Name
                    </Label>
                    <Input
                      id='contact-name'
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      className='h-12 border-border focus:border-orangered focus:ring-orangered/20'
                      placeholder='Your name'
                      required
                    />
                  </div>

                  <div className='space-y-2'>
                    <Label
                      htmlFor='contact-email'
                      className='text-foreground font-light font-montserrat'
                    >
                      Email
                    </Label>
                    <Input
                      id='contact-email'
                      type='email'
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className='h-12 border-border focus:border-orangered focus:ring-orangered/20'
                      placeholder='your@email.com'
                      required
                    />
                  </div>

                  <div className='space-y-2'>
                    <Label
                      htmlFor='contact-message'
                      className='text-foreground font-light font-montserrat'
                    >
                      Message
                    </Label>
                    <Textarea
                      id='contact-message'
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      className='min-h-32 border-border focus:border-orangered focus:ring-orangered/20 resize-none'
                      placeholder='Your message...'
                      required
                    />
                  </div>

                  <Button
                    type='submit'
                    className='w-full bg-orangered hover:bg-orangered/90 text-white font-medium py-2.5 sm:py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 font-montserrat hover:shadow-xl hover:scale-[1.02] text-sm sm:text-base'
                  >
                    <Send size={16} className="sm:hidden" />
                    <Send size={18} className="hidden sm:block" />
                    Send Message
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
