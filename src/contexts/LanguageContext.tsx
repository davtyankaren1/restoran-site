import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define available languages
export type Language = 'en' | 'am' | 'es';

// Define language context type
type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Define props for the provider
type LanguageProviderProps = {
  children: ReactNode;
};

// Translations
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Hero Section
    'hero.title': 'Welcome to our Armenian corner',
    'hero.description': 'Experience authentic Armenian flavors in an elegant setting where tradition meets modern sophistication.',
    'hero.button.menu': 'View Menu',
    'hero.button.book': 'Book a Table',
    'hero.slide1.alt': 'Armenian Restaurant Interior',
    'hero.slide2.alt': 'Traditional Armenian Cuisine',
    'hero.slide3.alt': 'Armenian Chef Cooking',
    
    // Navigation
    'nav.home': 'Home',
    'nav.menu': 'Menu',
    'nav.about': 'About Us',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'nav.book': 'Book a Table',
    'nav.language': 'Language',
    
    // Header
    'header.restaurant': 'Restaurante Armenio Pigeon',
    
    // Menu Section
    'menu.title': 'Our Menu',
    'menu.description': 'Discover authentic Armenian flavors crafted with traditional recipes and the finest ingredients',
    'menu.category.appetizers': 'Appetizers',
    'menu.category.main': 'Main Courses',
    'menu.category.desserts': 'Desserts',
    
    // Menu Items
    'menu.items.dolma.name': 'Dolma',
    'menu.items.dolma.description': 'Traditional stuffed grape leaves with rice, herbs, and spices',
    'menu.items.lavash.name': 'Fresh Lavash',
    'menu.items.lavash.description': 'Traditional Armenian flatbread served hot with herbs',
    'menu.items.babaGanoush.name': 'Baba Ganoush',
    'menu.items.babaGanoush.description': 'Smoky eggplant dip with tahini, garlic, and olive oil',
    'menu.items.hummus.name': 'Hummus',
    'menu.items.hummus.description': 'Creamy chickpea dip topped with paprika and olive oil',
    'menu.items.kebab.name': 'Armenian Kebab',
    'menu.items.kebab.description': 'Grilled skewers of lamb and beef with aromatic spices',
    'menu.items.khorovats.name': 'Khorovats',
    'menu.items.khorovats.description': 'Mixed grill with vegetables and marinated meats',
    'menu.items.manti.name': 'Manti',
    'menu.items.manti.description': 'Steamed dumplings filled with seasoned meat, served with yogurt',
    'menu.items.lahmacun.name': 'Lahmacun',
    'menu.items.lahmacun.description': 'Thin, crispy flatbread topped with spiced minced meat and vegetables',
    'menu.items.pilaf.name': 'Armenian Pilaf',
    'menu.items.pilaf.description': 'Fragrant rice cooked with vermicelli and butter',
    'menu.items.baklava.name': 'Armenian Baklava',
    'menu.items.baklava.description': 'Layers of filo pastry with nuts and honey syrup',
    'menu.items.gata.name': 'Gata',
    'menu.items.gata.description': 'Traditional Armenian sweet bread with layers of butter',
    'menu.items.coffee.name': 'Armenian Coffee',
    'menu.items.coffee.description': 'Strong traditional coffee served with Armenian sweets',
    
    // Contact Section
    'contact.title': 'Contact',
    'contact.description': 'Get in touch with us',
    'contact.call': 'Call Us',
    'contact.email': 'Email Us',
    'contact.visit': 'Visit Us',
    'contact.whatsapp': 'WhatsApp',
    'contact.viber': 'Viber',
    'contact.telegram': 'Telegram',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.placeholder.name': 'Your name',
    'contact.form.placeholder.email': 'your@email.com',
    'contact.form.placeholder.message': 'Write your message here...',
    'contact.form.error': 'Missing Information',
    'contact.form.error.description': 'Please fill in all required fields',
    'contact.form.success': 'Message Sent!',
    'contact.form.success.description': 'We will respond within the next 24 hours.',
    
    // Booking Section
    'booking.title': 'Book a Table',
    'booking.description': 'Reserve your perfect dining experience with authentic Armenian flavors',
    'booking.restaurant.interior': 'Restaurant Interior',
    'booking.select.date': 'Select Date',
    'booking.selected.date': 'Selected Date',
    'booking.details': 'Booking Details',
    'booking.form.name': 'Full Name',
    'booking.form.email': 'Email',
    'booking.form.phone': 'Phone Number',
    'booking.form.time': 'Preferred Time',
    'booking.form.guests': 'Number of Guests',
    'booking.form.requests': 'Special Requests',
    'booking.form.placeholder.name': 'Your full name',
    'booking.form.placeholder.email': 'your@email.com',
    'booking.form.placeholder.phone': 'Your phone number',
    'booking.form.placeholder.time': 'Select time',
    'booking.form.placeholder.guests': 'Select guests',
    'booking.form.placeholder.requests': 'Any special requests or dietary requirements...',
    'booking.form.submit': 'Send Booking Request',
    'booking.form.confirmation': 'We will confirm your reservation within the next 24 hours via email or phone',
    'booking.form.error': 'Missing Information',
    'booking.form.error.description': 'Please fill in all required fields.',
    'booking.form.success': 'Booking Request Sent!',
    'booking.form.success.description': 'We will confirm your reservation within the next 24 hours.',
    'booking.guests.1': '1 Guest',
    'booking.guests.2': '2 Guests',
    'booking.guests.3': '3 Guests',
    'booking.guests.4': '4 Guests',
    'booking.guests.5': '5 Guests',
    'booking.guests.6': '6 Guests',
    'booking.guests.7': '7+ Guests',
    
    // About Section
    'about.title': 'Our History',
    'about.description': 'A journey through Armenian heritage, bringing authentic flavors and warm hospitality to your table',
    'about.subtitle': 'Bringing Armenia to Your Plate',
    'about.paragraph1': 'Founded with a deep love for Armenian culture and cuisine, our restaurant is more than a place to eat: it is a bridge between the rich traditions of Armenia and the modern culinary world.',
    'about.paragraph2': 'Our chefs, trained in the ancient techniques of Armenian cooking, carefully prepare each dish using traditional recipes that have been perfected over centuries. From the smoky flavors of our grilled meats to the delicate spices in our vegetarian dishes, every bite tells a story.',
    'about.feature1.title': 'Passion for Authenticity',
    'about.feature1.description': 'Each dish is crafted with love using traditional Armenian recipes passed down through generations.',
    'about.feature2.title': 'Family Atmosphere',
    'about.feature2.description': 'We create a warm and welcoming environment where every guest feels like part of our Armenian family.',
    'about.feature3.title': 'Premium Quality',
    'about.feature3.description': 'We use only the finest ingredients to ensure every meal exceeds your expectations.',
    'about.stats.experience': 'Years of Experience',
    'about.stats.recipes': 'Traditional Recipes',
    'about.stats.customers': 'Satisfied Customers',
    'about.button.menu': 'Discover Our Menu',
    'about.button.book': 'Reserve Your Table',
    'about.history.title': 'Our History',
    'about.history.content': 'Founded in 2010, Pigeon Armenian Restaurant brings the authentic flavors of Armenia to your table. Our recipes have been passed down through generations, preserving the rich culinary traditions of Armenia.',
    'about.mission.title': 'Our Mission',
    'about.mission.content': 'To share the rich culinary heritage of Armenia through authentic dishes prepared with love and tradition.',
    
    // Gallery Section
    'gallery.title': 'Our Gallery',
    'gallery.description': 'Explore the beauty of Armenian cuisine and our restaurant atmosphere through our carefully curated gallery',
    'gallery.image1.alt': 'Armenian Restaurant Interior',
    'gallery.image2.alt': 'Traditional Armenian Cuisine',
    'gallery.image3.alt': 'Armenian Chef Cooking',
    'gallery.image4.alt': 'Traditional Armenian Decoration',
    'gallery.image5.alt': 'Armenian Desserts',
    'gallery.image6.alt': 'Restaurant Atmosphere',
    'gallery.logo.background': 'Armenian Restaurant Logo Background',
    
    
    // Footer
    'footer.copyright': '© {year} Pigeon Armenian Restaurant. All rights reserved.',
    'footer.restaurant': 'Restaurant',
    'footer.description': 'Experience authentic Armenian cuisine in an elegant setting where tradition meets modern sophistication.',
    'footer.quickLinks': 'Quick Links',
    'footer.contactInfo': 'Contact Information',
    'footer.address.line1': '123 Armenian Street',
    'footer.address.line2': 'Downtown District',
    'footer.address.line3': 'City, State 12345',
    'footer.openingHours': 'Opening Hours',
    'footer.weAreOpen': 'We Are Open',
    'footer.days.monThurs': 'Monday - Thursday',
    'footer.days.friSat': 'Friday - Saturday',
    'footer.days.sunday': 'Sunday',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.termsOfService': 'Terms of Service',
  },
  
  am: {
    "hero.title": "Բարի եկէք մեր հայկական անկիւնը",
    "hero.description": "Զգացէք Հայաստանի իսկական համերը՝ նրբաճաշակ մթնոլորտի մը մէջ, ուր աւանդութիւնը կը հանդիպի արդի ժամանակներու նրբաճաշակութեան։",
    "hero.button.menu": "Տեսնել Ճաշացանկը",
    "hero.button.book": "Ամրագրել Սեղան",
    "hero.slide1.alt": "Հայկական Ճաշարանի Ներքին Տեսքը",
    "hero.slide2.alt": "Աւանդական Հայկական Խոհանոց",
    "hero.slide3.alt": "Հայ Խոհարար Մը Կը Եփէ",
    
    // Navigation
    "nav.home": "Գլխաւոր Էջ",
    "nav.menu": "Ճաշացանկ",
    "nav.about": "Մեր Մասին",
    "nav.gallery": "Պատկերասրահ",
    "nav.contact": "Կապ",
    "nav.book": "Ամրագրել Սեղան",
    "nav.language": "Լեզու",
    
    // Header
    "header.restaurant": "Restaurante Armenio Pigeon",
    
    // Menu Section
    "menu.title": "Մեր Ճաշացանկը",
    "menu.description": "Բացայայտեցէք իսկական հայկական համեր՝ պատրաստուած աւանդական բաղադրատոմսերով եւ ամենէն լաւ բաղադրիչներով։",
    "menu.category.appetizers": "Նախուտեստներ",
    "menu.category.main": "Հիմնական Ուտեստներ",
    "menu.category.desserts": "Աղանդերներ",
    
    // Menu Items
    "menu.items.dolma.name": "Տոլմա",
    "menu.items.dolma.description": "Աւանդական լցոնուած խաղողի տերեւներ՝ բրինձով, դեղաբոյսերով եւ համեմունքներով։",
    "menu.items.lavash.name": "Թարմ Լաւաշ",
    "menu.items.lavash.description": "Աւանդական հայկական բարակ հաց՝ մատուցուած տաք եւ դեղաբոյսերով։",
    "menu.items.babaGanoush.name": "Բաբա Ղանուշ",
    "menu.items.babaGanoush.description": "Ապխտած սմբուկի թանձրուկ՝ թահինով, սխտորով եւ ձիթապտուղի իւղով։",
    "menu.items.hummus.name": "Հումուս",
    "menu.items.hummus.description": "Քրեմային սիսեռի թանձրուկ՝ վրան սպրինքլուած պապրիկայով եւ ձիթապտուղի իւղով։",
    "menu.items.kebab.name": "Հայկական Քիւֆթա",
    "menu.items.kebab.description": "Խորոված խոզի եւ հորթի միս՝ անուշահոտ համեմունքներով։",
    "menu.items.khorovats.name": "Խորոված",
    "menu.items.khorovats.description": "Խառը խորոված՝ բանջարեղէններով եւ համեմուած միսերով։",
    "menu.items.manti.name": "Մանթի",
    "menu.items.manti.description": "Շոգեխաշած փոքրիկ խմորեղէններ լցոնուած համեմուած մսով, մատուցուած մածունով։",
    "menu.items.lahmacun.name": "Լահմաջուն",
    "menu.items.lahmacun.description": "Բարակ, փխրուն հաց՝ վրան համեմուած աղացած մսով եւ բանջարեղէններով։",
    "menu.items.pilaf.name": "Հայկական Փլաւ",
    "menu.items.pilaf.description": "Բուրումնաւոր բրինձ՝ եփուած ճենճիկով եւ կարագով։",
    "menu.items.baklava.name": "Հայկական Փախլավա",
    "menu.items.baklava.description": "Փխրուն շերտեր՝ միջուկով եւ մեղրի օշարակով։",
    "menu.items.gata.name": "Գաթա",
    "menu.items.gata.description": "Աւանդական հայկական քաղցր հաց՝ կարագի շերտերով։",
    "menu.items.coffee.name": "Հայկական Սուրճ",
    "menu.items.coffee.description": "Ուժեղ աւանդական սուրճ՝ մատուցուած հայկական քաղցրեղէններով։",
    
    // Contact Section
    "contact.title": "Կապ",
    "contact.description": "Կապ հաստատեցէք մեզի հետ",
    "contact.call": "Զանգահարել",
    "contact.email": "Եղել Մեզի",
    "contact.visit": "Այցելել Մեզի",
    "contact.whatsapp": "WhatsApp",
    "contact.viber": "Viber",
    "contact.telegram": "Telegram",
    "contact.form.name": "Անուն",
    "contact.form.email": "Էլ. փոստ",
    "contact.form.message": "Հաղորդագրութիւն",
    "contact.form.send": "Ուղարկել Հաղորդագրութիւն",
    "contact.form.placeholder.name": "Ձեր անունը",
    "contact.form.placeholder.email": "ձեր@փոստ.com",
    "contact.form.placeholder.message": "Գրեցէք ձեր հաղորդագրութիւնը...",
    "contact.form.error": "Պակաս Տեղեկութիւն",
    "contact.form.error.description": "Խնդրեմ լրացուցէք պահանջուող բոլոր դաշտերը։",
    "contact.form.success": "Հաղորդագրութիւնը Ուղարկուեցաւ։",
    "contact.form.success.description": "Մենք կը պատասխանենք յաջորդ 24 ժամուան ընթացքին։",
    
    // Booking Section
    "booking.title": "Ամրագրել Սեղան",
    "booking.description": "Ամրագրեցէք ձեր կատարեալ ճաշելու փորձը իսկական հայկական համերով։",
    "booking.restaurant.interior": "Ճաշարանի Ներքին Տեսքը",
    "booking.select.date": "Ընտրել Ամսաթիւ",
    "booking.selected.date": "Ընտրուած Ամսաթիւը",
    "booking.details": "Ամրագրման Մանրամասնութիւնները",
    "booking.form.name": "Ամբողջական Անուն",
    "booking.form.email": "Էլ. Փոստ",
    "booking.form.phone": "Հեռախօսահամար",
    "booking.form.time": "Նախընտրելի Ժամը",
    "booking.form.guests": "Հիւրերու Քանակը",
    "booking.form.requests": "Յատուկ Խնդրանքներ",
    "booking.form.placeholder.name": "Ձեր ամբողջական անունը",
    "booking.form.placeholder.email": "ձեր@փոստ.com",
    "booking.form.placeholder.phone": "Ձեր հեռախօսահամարը",
    "booking.form.placeholder.time": "Ընտրել ժամը",
    "booking.form.placeholder.guests": "Ընտրել հիւրերու քանակը",
    "booking.form.placeholder.requests": "Յատուկ խնդրանքներ կամ սննդային պահանջներ...",
    "booking.form.submit": "Ուղարկել Ամրագրման Խնդրանք",
    "booking.form.confirmation": "Մենք կը հաստատենք ձեր ամրագրումը յաջորդ 24 ժամուան ընթացքին էլ. փոստով կամ հեռախօսով։",
    "booking.form.error": "Պակաս Տեղեկութիւն",
    "booking.form.error.description": "Խնդրեմ լրացուցէք պահանջուող բոլոր դաշտերը։",
    "booking.form.success": "Ամրագրման Խնդրանքը Ուղարկուեցաւ։",
    "booking.form.success.description": "Մենք կը հաստատենք ձեր ամրագրումը յաջորդ 24 ժամուան ընթացքին։",
    "booking.guests.1": "1 Հիւր",
    "booking.guests.2": "2 Հիւրեր",
    "booking.guests.3": "3 Հիւրեր",
    "booking.guests.4": "4 Հիւրեր",
    "booking.guests.5": "5 Հիւրեր",
    "booking.guests.6": "6 Հիւրեր",
    "booking.guests.7": "7+ Հիւրեր",
    
    // About Section
    "about.title": "Մեր Պատմութիւնը",
    "about.description": "Ճամբորդութիւն հայկական ժառանգութեան միջոցով՝ բերելով իսկական համեր եւ ջերմ հիւրասիրութիւն ձեր սեղանին։",
    "about.subtitle": "Հայաստանը Ձեր Սկուտեղին Բերելով",
    "about.paragraph1": "Հիմնուած հայկական մշակոյթի եւ խոհանոցի նկատմամբ խոր սիրով, մեր ճաշարանը աւելի քան ուտելու վայր է. անիկա կամուրջ մըն է՝ հայկական հարուստ աւանդոյթներուն եւ արդի խոհարարական աշխարհին միջեւ։",
    "about.paragraph2": "Մեր շեֆ խոհարարները, որոնք մարզուած են հայկական խոհանոցի հին տեխնիքներուն մէջ, իւրաքանչիւր ճաշատեսակ խնամքով կը պատրաստեն՝ դարերու ընթացքին կատարելագործուած աւանդական բաղադրատոմսերով։ Մեր խորովածներուն ապխտած համերէն մինչեւ բուսական ճաշերուն նուրբ համեմունքները, իւրաքանչիւր պատառ մը պատմութիւն կը պատմէ։",
    "about.feature1.title": "Կիրք Իսկութեան Հանդէպ",
    "about.feature1.description": "Իւրաքանչիւր ճաշատեսակ սիրով կը պատրաստուի՝ օգտագործելով սերունդէ-սերունդ փոխանցուած հայկական աւանդական բաղադրատոմսեր։",
    "about.feature2.title": "Ընտանեկան Մթնոլորտ",
    "about.feature2.description": "Մենք կը ստեղծենք ջերմ եւ հիւրընկալ մթնոլորտ, ուր իւրաքանչիւր հիւր կը զգայ, թէ ինք մեր հայկական ընտանիքին անդամն է։",
    "about.feature3.title": "Բարձր Որակ",
    "about.feature3.description": "Մենք կ՚օգտագործենք միայն ամենէն լաւ բաղադրիչները՝ ապահովելու համար, որ իւրաքանչիւր ճաշ գերազանցէ ձեր սպասումները։",
    "about.stats.experience": "Տարիներու Փորձ",
    "about.stats.recipes": "Աւանդական Բաղադրատոմսեր",
    "about.stats.customers": "Գոհացած Հաճախորդներ",
    "about.button.menu": "Բացայայտել Մեր Ճաշացանկը",
    "about.button.book": "Ամրագրել Ձեր Սեղանը",
    "about.history.title": "Մեր Պատմութիւնը",
    "about.history.content": "Հիմնադրուելով 2010 թուականին, «Pigeon Armenian Restaurant»-ը կը բերէ Հայաստանի իսկական համերը ձեր սեղանին։ Մեր բաղադրատոմսերը սերունդէ-սերունդ փոխանցուած են՝ պահպանելով Հայաստանի հարուստ խոհարարական աւանդոյթները։",
    "about.mission.title": "Մեր Առաքելութիւնը",
    "about.mission.content": "Բաժնեկցել Հայաստանի հարուստ խոհարարական ժառանգութիւնը՝ իսկական ճաշատեսակներով, որոնք պատրաստուած են սիրով եւ աւանդութեամբ։",
    
    // Gallery Section
    "gallery.title": "Մեր Պատկերասրահը",
    "gallery.description": "Ուսումնասիրեցէք հայկական խոհանոցի գեղեցկութիւնը եւ մեր ճաշարանի մթնոլորտը՝ մեր խնամքով ընտրուած պատկերասրահին միջոցով։",
    "gallery.image1.alt": "Հայկական Ճաշարանի Ներքին Տեսքը",
    "gallery.image2.alt": "Աւանդական Հայկական Խոհանոց",
    "gallery.image3.alt": "Հայ Խոհարար Մը Կը Եփէ",
    "gallery.image4.alt": "Աւանդական Հայկական Զարդարանք",
    "gallery.image5.alt": "Հայկական Աղանդերներ",
    "gallery.image6.alt": "Ճաշարանի Մթնոլորտը",
    "gallery.logo.background": "Հայկական Ճաշարանի Լոկոյի Ֆոնը",
    
    // Footer
    "footer.copyright": "© {year} Pigeon Armenian Restaurant. Բոլոր իրաւունքները պաշտպանուած են։",
    "footer.restaurant": "Ճաշարան",
    "footer.description": "Զգացէք Հայաստանի իսկական խոհանոցը՝ նրբաճաշակ մթնոլորտի մը մէջ, ուր աւանդութիւնը կը հանդիպի արդի ժամանակներու նրբաճաշակութեան։",
    "footer.quickLinks": "Արագ Յղումներ",
    "footer.contactInfo": "Կապի Տեղեկութիւն",
    "footer.address.line1": "123 Armenian Street",
    "footer.address.line2": "Downtown District",
    "footer.address.line3": "City, State 12345",
    "footer.openingHours": "Բացման Ժամեր",
    "footer.weAreOpen": "Մենք Բաց Ենք",
    "footer.days.monThurs": "Երկուշաբթի - Հինգշաբթի",
    "footer.days.friSat": "Ուրբաթ - Շաբաթ",
    "footer.days.sunday": "Կիրակի",
    "footer.privacyPolicy": "Գաղտնիութեան Քաղաքականութիւն",
    "footer.termsOfService": "Ծառայութեան Պայմաններ"
  },
  
  es: {
    // Hero Section
    'hero.title': 'Bienvenidos a nuestro pequeño rincón armenio',
    'hero.description': 'Experimente los auténticos sabores de Armenia en un ambiente elegante donde la tradición se encuentra con la sofisticación moderna.',
    'hero.button.menu': 'Ver Menú',
    'hero.button.book': 'Reservar Mesa',
    'hero.slide1.alt': 'Interior del Restaurante Armenio',
    'hero.slide2.alt': 'Cocina Tradicional Armenia',
    'hero.slide3.alt': 'Chef Armenio Cocinando',
    
    // Navigation
    'nav.home': 'Inicio',
    'nav.menu': 'Menú',
    'nav.about': 'Nosotros',
    'nav.gallery': 'Galería',
    'nav.contact': 'Contacto',
    'nav.book': 'Reservar Mesa',
    'nav.language': 'Idioma',
    
    // Header
    'header.restaurant': 'Restaurante Armenio Pigeon',
    
    // Menu Section
    'menu.title': 'Nuestro Menú',
    'menu.description': 'Descubra auténticos sabores armenios elaborados con recetas tradicionales y los mejores ingredientes',
    'menu.category.appetizers': 'Entrantes',
    'menu.category.main': 'Platos Principales',
    'menu.category.desserts': 'Postres',
    
    // Menu Items
    'menu.items.dolma.name': 'Dolma',
    'menu.items.dolma.description': 'Hojas de parra rellenas tradicionales con arroz, hierbas y especias',
    'menu.items.lavash.name': 'Lavash Fresco',
    'menu.items.lavash.description': 'Pan plano armenio tradicional caliente servido con hierbas',
    'menu.items.babaGanoush.name': 'Baba Ganoush',
    'menu.items.babaGanoush.description': 'Dip de berenjena ahumada con tahini, ajo y aceite de oliva',
    'menu.items.hummus.name': 'Hummus',
    'menu.items.hummus.description': 'Dip cremoso de garbanzos cubierto con pimentón y aceite de oliva',
    'menu.items.kebab.name': 'Kebab Armenio',
    'menu.items.kebab.description': 'Brochetas de cordero y ternera a la parrilla con especias aromáticas',
    'menu.items.khorovats.name': 'Khorovats',
    'menu.items.khorovats.description': 'Parrillada mixta con verduras y carnes marinadas',
    'menu.items.manti.name': 'Manti',
    'menu.items.manti.description': 'Empanadillas al vapor rellenas de carne sazonada, servidas con yogur',
    'menu.items.lahmacun.name': 'Lahmacun',
    'menu.items.lahmacun.description': 'Pan plano fino y crujiente cubierto con carne picada especiada y verduras',
    'menu.items.pilaf.name': 'Pilaf Armenio',
    'menu.items.pilaf.description': 'Arroz fragante cocinado con fideos y mantequilla',
    'menu.items.baklava.name': 'Baklava Armenio',
    'menu.items.baklava.description': 'Capas de masa filo con frutos secos y almíbar de miel',
    'menu.items.gata.name': 'Gata',
    'menu.items.gata.description': 'Pan dulce armenio tradicional con capas de mantequilla',
    'menu.items.coffee.name': 'Café Armenio',
    'menu.items.coffee.description': 'Café tradicional intenso servido con delicias armenias',
    
    // About Section
    'about.title': 'Nuestra Historia',
    'about.description': 'Un viaje a través de la herencia armenia, llevando sabores auténticos y cálida hospitalidad a su mesa',
    'about.subtitle': 'Llevando Armenia a tu Plato',
    'about.paragraph1': 'Fundado con un profundo amor por la cultura y la cocina armenia, nuestro restaurante es más que un lugar para comer: es un puente entre las ricas tradiciones de Armenia y el mundo culinario moderno.',
    'about.paragraph2': 'Nuestros chefs, capacitados en las antiguas técnicas de la cocina armenia, preparan cuidadosamente cada plato utilizando recetas tradicionales que han sido perfeccionadas durante siglos. Desde los sabores ahumados de nuestras carnes a la parrilla hasta las especias delicadas en nuestros platos vegetarianos, cada bocado cuenta una historia.',
    'about.feature1.title': 'Pasión por la Autenticidad',
    'about.feature1.description': 'Cada plato está elaborado con amor utilizando recetas armenias tradicionales transmitidas de generación en generación.',
    'about.feature2.title': 'Ambiente Familiar',
    'about.feature2.description': 'Creamos un ambiente cálido y acogedor donde cada invitado se siente como parte de nuestra familia armenia.',
    'about.feature3.title': 'Calidad Premium',
    'about.feature3.description': 'Utilizamos solo los mejores ingredientes para garantizar que cada comida supere sus expectativas.',
    'about.stats.experience': 'Años de Experiencia',
    'about.stats.recipes': 'Recetas Tradicionales',
    'about.stats.customers': 'Clientes Satisfechos',
    'about.button.menu': 'Descubrir Nuestro Menú',
    'about.button.book': 'Reservar Su Mesa',
    'about.history.title': 'Nuestra Historia',
    'about.history.content': 'Fundado en 2010, el Restaurante Armenio Pigeon trae los auténticos sabores de Armenia a su mesa. Nuestras recetas han sido transmitidas a través de generaciones, preservando las ricas tradiciones culinarias de Armenia.',
    'about.mission.title': 'Nuestra Misión',
    'about.mission.content': 'Compartir el rico patrimonio culinario de Armenia a través de platos auténticos preparados con amor y tradición.',
    
    // Gallery Section
    'gallery.title': 'Nuestra Galería',
    'gallery.description': 'Explore la belleza de la cocina armenia y el ambiente de nuestro restaurante a través de nuestra galería cuidadosamente seleccionada',
    'gallery.image1.alt': 'Interior del Restaurante Armenio',
    'gallery.image2.alt': 'Cocina Tradicional Armenia',
    'gallery.image3.alt': 'Chef Armenio Cocinando',
    'gallery.image4.alt': 'Decoración Tradicional Armenia',
    'gallery.image5.alt': 'Postres Armenios',
    'gallery.image6.alt': 'Ambiente del Restaurante',
    'gallery.logo.background': 'Fondo del Logo del Restaurante Armenio',
    
    // Contact Section
    'contact.title': 'Contacto',
    'contact.description': 'Póngase en contacto con nosotros',
    'contact.call': 'Llámenos',
    'contact.email': 'Envíenos un Correo',
    'contact.visit': 'Visítenos',
    'contact.whatsapp': 'WhatsApp',
    'contact.viber': 'Viber',
    'contact.telegram': 'Telegram',
    'contact.form.name': 'Nombre',
    'contact.form.email': 'Correo Electrónico',
    'contact.form.message': 'Mensaje',
    'contact.form.send': 'Enviar Mensaje',
    'contact.form.placeholder.name': 'Su nombre',
    'contact.form.placeholder.email': 'su@correo.com',
    'contact.form.placeholder.message': 'Escriba su mensaje aquí...',
    'contact.form.error': 'Información Faltante',
    'contact.form.error.description': 'Por favor complete todos los campos requeridos',
    'contact.form.success': 'Mensaje Enviado!',
    'contact.form.success.description': 'Le responderemos dentro de las próximas 24 horas.',
    
    // Booking Section
    'booking.title': 'Reservar Mesa',
    'booking.description': 'Reserve su perfecta experiencia gastronómica con auténticos sabores armenios',
    'booking.restaurant.interior': 'Interior del Restaurante',
    'booking.select.date': 'Seleccionar Fecha',
    'booking.selected.date': 'Fecha Seleccionada',
    'booking.details': 'Detalles de la Reserva',
    'booking.form.name': 'Nombre Completo',
    'booking.form.email': 'Correo Electrónico',
    'booking.form.phone': 'Número de Teléfono',
    'booking.form.time': 'Hora Preferida',
    'booking.form.guests': 'Número de Invitados',
    'booking.form.requests': 'Solicitudes Especiales',
    'booking.form.placeholder.name': 'Su nombre',
    'booking.form.placeholder.email': 'su@correo.com',
    'booking.form.placeholder.phone': 'Su número de teléfono',
    'booking.form.placeholder.time': 'booking.form.placeholder.time',
    'booking.form.placeholder.guests': 'booking.form.placeholder.guests',
    'booking.form.placeholder.requests': 'booking.form.placeholder.requests',
    'booking.form.submit': 'Enviar Solicitud de Reserva',
    'booking.form.confirmation': 'Confirmaremos su reserva dentro de las próximas 24 horas por correo electrónico o teléfono',
    'booking.form.error': 'Información Faltante',
    'booking.form.error.description': 'Por favor complete todos los campos requeridos.',
    'booking.form.success': '¡Solicitud de Reserva Enviada!',
    'booking.form.success.description': 'Confirmaremos su reserva dentro de las próximas 24 horas.',
    'booking.guests.1': '1 Invitado',
    'booking.guests.2': '2 Invitados',
    'booking.guests.3': '3 Invitados',
    'booking.guests.4': '4 Invitados',
    'booking.guests.5': '5 Invitados',
    'booking.guests.6': '6 Invitados',
    'booking.guests.7': '7+ Invitados',
    
    // Footer
    'footer.copyright': '© {year} Pigeon Restaurante Armenio. Todos los derechos reservados.',
    'footer.restaurant': 'Restaurante',
    'footer.description': 'Experimente la auténtica cocina armenia en un ambiente elegante donde la tradición se encuentra con la sofisticación moderna.',
    'footer.quickLinks': 'Enlaces Rápidos',
    'footer.contactInfo': 'Información de Contacto',
    'footer.address.line1': '123 Calle Armenia',
    'footer.address.line2': 'Distrito Centro',
    'footer.address.line3': 'Ciudad, Estado 12345',
    'footer.openingHours': 'Horario de Apertura',
    'footer.weAreOpen': 'Estamos Abiertos',
    'footer.days.monThurs': 'Lunes - Jueves',
    'footer.days.friSat': 'Viernes - Sábado',
    'footer.days.sunday': 'Domingo',
    'footer.privacyPolicy': 'Política de Privacidad',
    'footer.termsOfService': 'Términos de Servicio',
  }
};

// Create the provider component
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Get initial language from localStorage or default to English
  const getInitialLanguage = (): Language => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language') as Language;
      return savedLanguage || 'en';
    }
    return 'en';
  };

  const [language, setLanguageState] = useState<Language>(getInitialLanguage());

  // Function to set language and save to localStorage
  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', newLanguage);
    }
  };

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
