import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, Clock, Users, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import hero2 from "@/assets/hero-2.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const BookingSection = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    time: "",
    guests: "",
    message: ""
  });
  const { toast } = useToast();
  const { t } = useLanguage();

  const timeSlots = [
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM"
  ];

  const guestOptions = [
    t('booking.guests.1'),
    t('booking.guests.2'),
    t('booking.guests.3'),
    t('booking.guests.4'),
    t('booking.guests.5'),
    t('booking.guests.6'),
    t('booking.guests.7')
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !selectedDate ||
      !formData.name ||
      !formData.email ||
      !formData.time ||
      !formData.guests
    ) {
      toast({
        title: t('booking.form.error'),
        description: t('booking.form.error.description'),
        variant: "destructive"
      });
      return;
    }

    toast({
      title: t('booking.form.success'),
      description: t('booking.form.success.description')
    });

    // Reset form
    setSelectedDate(undefined);
    setFormData({
      name: "",
      email: "",
      phone: "",
      time: "",
      guests: "",
      message: ""
    });
  };

  return (
    <section className='py-20 bg-background' id='booking'>
      <div className='container mx-auto px-4'>
        {/* Background Container with Image and Overlay */}
        <div className='relative overflow-hidden rounded-3xl'>
          <div className='absolute inset-0'>
            <img
              src={hero2}
              alt={t('booking.restaurant.interior')}
              className='w-full h-full object-cover'
            />

            <div className='absolute inset-0 bg-gradient-to-t from-[#ff6a00b2] to-[#e20a20] via-[#0066B3] opacity-50'></div>
          </div>

          <div className='relative z-10 px-4 sm:px-8 py-10 sm:py-16'>
            {/* Section Header */}
            <div className='text-center mb-10 sm:mb-16'>
              <div className='flex justify-center items-center gap-4 sm:gap-6 mb-4 sm:mb-6'>
                <div className='w-8 sm:w-12 h-0.5 bg-white/80'></div>
                <img
                  src='/logo.png'
                  alt={t('header.restaurant')}
                  className='w-12 h-12 sm:w-16 sm:h-16 object-contain'
                />
                <div className='w-8 sm:w-12 h-0.5 bg-white/80'></div>
              </div>
              <h2 className='text-3xl sm:text-4xl md:text-5xl font-light text-white mb-4 sm:mb-6 font-montserrat'>
                {t('booking.title')}
              </h2>
              <p className='text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed px-2'>
                {t('booking.description')}
              </p>
            </div>

            <div className='max-w-6xl mx-auto'>
              <div className='grid lg:grid-cols-2 gap-12 items-stretch'>
                {/* Calendar Section */}
                <div className='flex flex-col'>
                  <div className='bg-white/10 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 border border-white/20 flex-1 flex flex-col'>
                    <h3 className='text-xl sm:text-2xl font-light text-white mb-4 sm:mb-6 font-montserrat flex items-center gap-2 sm:gap-3'>
                      <CalendarIcon className='text-orangered' size={24} />
                      {t('booking.select.date')}
                    </h3>
                    <div className='flex-1 flex items-center justify-center'>
                      <div className='w-full max-w-none'>
                        <Calendar
                          mode='single'
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          disabled={(date) => date < new Date()}
                          className='bg-white/95 backdrop-blur-sm rounded-2xl p-1 sm:p-4 md:p-6 border border-white/30 pointer-events-auto w-full'
                          classNames={{
                            months: "space-y-2 sm:space-y-4 w-full",
                            month: "space-y-2 sm:space-y-4 w-full",
                            caption:
                              "flex justify-center pt-1 relative items-center text-foreground mb-4",
                            caption_label: "text-sm sm:text-xl font-medium",
                            nav: "space-y-1 flex items-center",
                            nav_button:
                              "h-8 w-8 bg-transparent p-0 opacity-50 hover:opacity-100 text-foreground hover:bg-orangered/10 rounded-md transition-colors",
                            nav_button_previous: "absolute left-2",
                            nav_button_next: "absolute right-2",
                            table: "w-full border-collapse",
                            head_row: "flex w-full",
                            head_cell:
                              "text-muted-foreground rounded-md flex-1 font-normal text-xs sm:text-sm py-1 sm:py-2",
                            row: "flex w-full mt-1 sm:mt-2",
                            cell: "flex-1 text-center text-sm p-1 relative focus-within:relative focus-within:z-20",
                            day: "h-6 sm:h-12 w-full p-0 font-normal hover:bg-orangered hover:text-white rounded-md transition-colors text-xs sm:text-base flex items-center justify-center",
                            day_range_end: "day-range-end",
                            day_selected:
                              "bg-orangered text-white hover:bg-orangered hover:text-white focus:bg-orangered focus:text-white",
                            day_today: "bg-accent text-white",
                            day_outside:
                              "day-outside text-muted-foreground opacity-50",
                            day_disabled: "text-muted-foreground opacity-50",
                            day_range_middle:
                              "aria-selected:bg-accent aria-selected:text-accent-foreground",
                            day_hidden: "invisible"
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Selected Date Display */}
                  {selectedDate && (
                    <div className='bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20 mt-4 sm:mt-6'>
                      <div className='text-center'>
                        <p className='text-white/80 mb-1 sm:mb-2 text-sm sm:text-base'>
                          {t('booking.selected.date')}
                        </p>
                        <p className='text-lg sm:text-xl md:text-2xl font-light text-white font-montserrat'>
                          {format(selectedDate, "EEE, MMM do, yyyy")}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Booking Form */}
                <div className='bg-white/10 backdrop-blur-md rounded-3xl p-4 sm:p-6 md:p-8 border border-white/20'>
                  <h3 className='text-xl sm:text-2xl font-light text-white mb-4 sm:mb-6 md:mb-8 font-montserrat flex items-center gap-2 sm:gap-3'>
                    <Send className='text-orangered' size={24} />
                    {t('booking.details')}
                  </h3>

                  <form
                    onSubmit={handleSubmit}
                    className='space-y-4 sm:space-y-6'
                  >
                    {/* Name & Email Row */}
                    <div className='grid md:grid-cols-2 gap-4'>
                      <div className='space-y-2'>
                        <Label
                          htmlFor='name'
                          className='text-white/90 font-light'
                        >
                          {t('booking.form.name')} *
                        </Label>
                        <Input
                          id='name'
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          className='bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-orangered focus:ring-orangered/20 backdrop-blur-sm'
                          placeholder={t('booking.form.placeholder.name')}
                          required
                        />
                      </div>
                      <div className='space-y-2'>
                        <Label
                          htmlFor='email'
                          className='text-white/90 font-light'
                        >
                          {t('booking.form.email')} *
                        </Label>
                        <Input
                          id='email'
                          type='email'
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          className='bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-orangered focus:ring-orangered/20 backdrop-blur-sm'
                          placeholder={t('booking.form.placeholder.email')}
                          required
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className='space-y-2'>
                      <Label
                        htmlFor='phone'
                        className='text-white/90 font-light'
                      >
                        {t('booking.form.phone')}
                      </Label>
                      <Input
                        id='phone'
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        className='bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-orangered focus:ring-orangered/20 backdrop-blur-sm'
                        placeholder={t('booking.form.placeholder.phone')}
                      />
                    </div>

                    {/* Time & Guests Row */}
                    <div className='grid md:grid-cols-2 gap-4'>
                      <div className='space-y-2'>
                        <Label className='text-white/90 font-light flex items-center gap-2'>
                          <Clock size={16} />
                          {t('booking.form.time')} *
                        </Label>
                        <Select
                          value={formData.time}
                          onValueChange={(value) =>
                            handleInputChange("time", value)
                          }
                        >
                          <SelectTrigger className='bg-white/20 border-white/30 text-white focus:border-orangered focus:ring-orangered/20 backdrop-blur-sm'>
                            <SelectValue placeholder={t('booking.form.placeholder.time')} />
                          </SelectTrigger>
                          <SelectContent className='bg-white/95 backdrop-blur-sm border-white/30'>
                            {timeSlots.map((time) => (
                              <SelectItem
                                key={time}
                                value={time}
                                className='hover:bg-orangered/10'
                              >
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className='space-y-2'>
                        <Label className='text-white/90 font-light flex items-center gap-2'>
                          <Users size={16} />
                          {t('booking.form.guests')} *
                        </Label>
                        <Select
                          value={formData.guests}
                          onValueChange={(value) =>
                            handleInputChange("guests", value)
                          }
                        >
                          <SelectTrigger className='bg-white/20 border-white/30 text-white focus:border-orangered focus:ring-orangered/20 backdrop-blur-sm'>
                            <SelectValue placeholder={t('booking.form.placeholder.guests')} />
                          </SelectTrigger>
                          <SelectContent className='bg-white/95 backdrop-blur-sm border-white/30'>
                            {guestOptions.map((option) => (
                              <SelectItem
                                key={option}
                                value={option}
                                className='hover:bg-orangered/10'
                              >
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className='space-y-2'>
                      <Label
                        htmlFor='message'
                        className='text-white/90 font-light'
                      >
                        {t('booking.form.requests')}
                      </Label>
                      <Textarea
                        id='message'
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange("message", e.target.value)
                        }
                        className='bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-orangered focus:ring-orangered/20 backdrop-blur-sm resize-none'
                        placeholder={t('booking.form.placeholder.requests')}
                        rows={4}
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type='submit'
                      className='w-3/4 sm:w-full bg-orangered hover:bg-orangered/90 text-white font-medium py-2 sm:py-4 text-sm sm:text-lg rounded-xl transition-all duration-300 hover:shadow-xl'
                    >
                      {t('booking.form.submit')}
                    </Button>
                  </form>

                  <p className='text-white/70 text-xs sm:text-sm mt-4 sm:mt-6 text-center font-light px-2'>
                    {t('booking.form.confirmation')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
