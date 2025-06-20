import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Users, 
  Award, 
  Calendar,
  MapPin,
  Thermometer,
  Sun,
  Utensils,
  Bed,
  Wine,
  PartyPopper,
  Camera,
  Clock,
  Phone,
  Mail,
  Wifi,
  Car,
  Coffee,
  Bath,
  Snowflake,
  TreePine,
  Waves,
  Check,
  ArrowRight,
  Play
} from 'lucide-react';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const heroImages = [
    {
      url: '/Vue4.webp',
      title: 'Panorama Enchanteur',
      subtitle: 'Admirez la splendeur de La Mangrove sous tous ses angles'
    },
    {
      url: '/hotel.webp',
      title: 'Hébergement de Charme',
      subtitle: 'Chambres confortables dans un cadre tropical authentique'
    },
    {
      url: '/Piscine.webp',
      title: 'Espace Piscine Illuminé',
      subtitle: 'Détente et rafraîchissement dans une ambiance magique'
    },
    {
      url: '/Pleinair.webp',
      title: 'Événements en Plein Air',
      subtitle: 'Célébrez vos moments précieux face à la lagune'
    },
    {
      url: '/AireDeJeux.webp',
      title: 'Aire de Jeux',
      subtitle: 'Espace de divertissement pour toute la famille'
    },
    {
      url: '/bar.webp',
      title: 'Bar Le Crabe Poillu',
      subtitle: 'Ambiance nocturne et cocktails dans un cadre moderne'
    }
  ];

  // Restaurant Featured Dishes - 4 par catégorie
  const featuredDishes = [
    // Entrées & Salades (4 plats)
    {
      name: 'Gambas',
      price: 8000,
      image: '/SaladeGambas.webp',
      description: 'Entrée premium aux fruits de mer',
      category: 'Entrées'
    },
    {
      name: 'Salade Niçoise',
      price: 4000,
      image: '/SaladeNicoise.webp',
      description: 'Salade fraîche et colorée',
      category: 'Entrées'
    },
    {
      name: 'Écrevisses',
      price: 6000,
      image: '/SaladeEcrevise.webp',
      description: 'Délicieuses écrevisses fraîches',
      category: 'Entrées'
    },
    {
      name: 'Gésier',
      price: 5000,
      image: '/saladeGesiers.webp',
      description: 'Salade de gésiers traditionnelle',
      category: 'Entrées'
    },
    // Plats de Résistances (4 plats)
    {
      name: 'Soupe du pêcheur',
      price: 12000,
      image: '/Soupepecheur.webp',
      description: 'Spécialité de la maison',
      category: 'Plats'
    },
    {
      name: 'Poulet fourré aux pommes de terre',
      price: 12000,
      image: '/Pouletfourrépomme.webp',
      description: 'Recette traditionnelle revisitée',
      category: 'Plats'
    },
    {
      name: 'Lapin Entier (Kedjénou / Braisé / Sauté / au four)',
      price: 15000,
      image: '/LapinBraise.webp',
      description: 'Spécialité locale authentique',
      category: 'Plats'
    },
    {
      name: 'Gambas (Sauté / Braisé / Grillé)',
      price: 8000,
      image: '/GambaSaute.webp',
      description: 'Fruits de mer premium',
      category: 'Plats'
    },
    // Garnitures (4 plats)
    {
      name: 'Attiéké teinté',
      price: 1000,
      image: '/Attieketeinte.webp',
      description: 'Accompagnement traditionnel coloré',
      category: 'Garnitures'
    },
    {
      name: 'Igname arraignée',
      price: 2000,
      image: '/IgnameArraigne.webp',
      description: 'Spécialité d\'igname préparée',
      category: 'Garnitures'
    },
    {
      name: 'Alloco',
      price: 1000,
      image: '/Alloco.webp',
      description: 'Bananes plantains frites',
      category: 'Garnitures'
    },
    {
      name: 'Attiéké',
      price: 500,
      image: '/Attieke.webp',
      description: 'Accompagnement traditionnel ivoirien',
      category: 'Garnitures'
    },
    // Desserts (4 plats)
    {
      name: 'Gateau',
      price: 1500,
      image: '/Gateau.webp',
      description: 'Dessert maison',
      category: 'Desserts'
    },
    {
      name: 'Fruit de saison',
      price: 1000,
      image: '/Fruitsaison.webp',
      description: 'Fruits frais locaux',
      category: 'Desserts'
    },
    {
      name: 'Flan',
      price: 1000,
      image: '/Flan.webp',
      description: 'Flan crémeux maison',
      category: 'Desserts'
    },
    {
      name: 'Glace',
      price: 1000,
      image: '/Glace.webp',
      description: 'Glace artisanale',
      category: 'Desserts'
    },
    // Boissons (4 plats)
    {
      name: 'Jus',
      price: 1000,
      image: '/Jus.webp',
      description: 'Jus de fruits frais',
      category: 'Boissons'
    },
    {
      name: 'Cocktail alcoolisé',
      price: 2500,
      image: '/Cocktail.webp',
      description: 'Cocktail signature',
      category: 'Boissons'
    },
    {
      name: 'Heineken',
      price: 1500,
      image: '/heineken.webp',
      description: 'Bière blonde premium',
      category: 'Boissons'
    },
    {
      name: 'Vodka',
      price: 3000,
      image: '/Vodka.webp',
      description: 'Vodka premium',
      category: 'Boissons'
    }
  ];

  // Hotel Room Types
  const roomTypes = [
    {
      name: 'Chambre standard',
      subtitle: 'Avec petit déjeuner inclus',
      price: 30000,
      image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      features: ['Vue jardin tropical', 'Climatisation', 'Wi-Fi gratuit', 'Salle de bain privée']
    },
    {
      name: 'Chambre Suite',
      subtitle: 'Avec petit déjeuner inclus',
      price: 60000,
      image: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      features: ['Balcon privé', 'Salon séparé', 'Mini-bar', 'Vue panoramique']
    }
  ];

  // Bar Cocktails
  const cocktails = [
    {
      name: 'Heineken',
      price: 2500,
      image: '/heineken.webp',
      description: 'Bière blonde premium'
    },
    {
      name: 'Vodka',
      price: 3000,
      image: '/Vodka.webp',
      description: 'Vodka premium'
    },
    {
      name: 'Liqueur',
      price: 2500,
      image: '/Liqueur.webp',
      description: 'Liqueur de qualité'
    }
  ];

  // Event Spaces
  const eventSpaces = [
    {
      name: 'Salle Climatisée',
      capacity: '80 personnes',
      image: '/SalleClim.webp',
      icon: <Snowflake className="h-6 w-6" />,
      description: 'Espace intérieur climatisé parfait pour vos événements professionnels et privés.',
      features: ['Climatisation performante', 'Éclairage modulable', 'Système de sonorisation']
    },
    {
      name: 'Espace Plein Air',
      capacity: '150 personnes',
      image: '/Pleinair7.webp',
      icon: <TreePine className="h-6 w-6" />,
      description: 'Cadre naturel exceptionnel pour des événements en harmonie avec la nature.',
      features: ['Environnement tropical naturel', 'Éclairage d\'ambiance', 'Configuration modulable']
    },
    {
      name: 'Bar Le Crabe Poillu',
      subtitle: '(Privatisation)',
      capacity: '60 personnes',
      image: '/bar.webp',
      icon: <Wine className="h-6 w-6" />,
      description: 'Privatisez notre bar pour une soirée exclusive entre amis ou collègues.',
      features: ['Bar complet privatisé', 'Ambiance climatisée', 'Service de barman']
    },
    {
      name: 'Espace Piscine',
      capacity: '100 personnes',
      image: '/Piscine.webp',
      icon: <Waves className="h-6 w-6" />,
      description: 'Espace aquatique idéal pour des événements estivaux rafraîchissants.',
      features: ['Piscine sécurisée', 'Bar de piscine', 'Zone barbecue']
    }
  ];

  // Gallery Preview
  const galleryPreview = [
    {
      url: '/Vueduciel.webp',
      title: 'Vue panoramique',
      category: 'Extérieur'
    },
    {
      url: '/bar.webp',
      title: 'Bar Le Crabe Poillu',
      category: 'Intérieur'
    },
    {
      url: '/Piscine.webp',
      title: 'Espace piscine',
      category: 'Événements'
    },
    {
      url: '/SalleClim.webp',
      title: 'Salle climatisée',
      category: 'Intérieur'
    },
    {
      url: '/PouletRoti.webp',
      title: 'Poulet rôti',
      category: 'Cuisine'
    },
    {
      url: '/hotel.webp',
      title: 'Hébergement',
      category: 'Chambres'
    },
    {
      url: '/Pleinair7.webp',
      title: 'Espace plein air',
      category: 'Événements'
    },
    {
      url: '/Attieke.webp',
      title: 'Attieké traditionnel',
      category: 'Cuisine'
    },
    {
      url: '/Anniv.webp',
      title: 'Célébrations',
      category: 'Événements'
    },
    {
      url: '/BrochetteMerou.webp',
      title: 'Brochette de mérou',
      category: 'Cuisine'
    },
    {
      url: '/EvePerso.webp',
      title: 'Événement personnalisé',
      category: 'Événements'
    },
    {
      url: '/GambaSaute.webp',
      title: 'Gambas sautées',
      category: 'Cuisine'
    }
  ];

  const testimonials = [
    {
      name: 'Marie Kouassi',
      text: 'Un endroit magique ! La cuisine est exceptionnelle et l\'ambiance tropicale unique. Le service est impeccable.',
      rating: 5,
      image: '/Temoin1.webp',
      service: 'Restaurant'
    },
    {
      name: 'Jean-Baptiste Traoré',
      text: 'Service impeccable, chambres confortables. Parfait pour un séjour d\'affaires ou de détente.',
      rating: 5,
      image: '/Temoin2.webp',
      service: 'Hôtel'
    },
    {
      name: 'Fatou Diallo',
      text: 'Notre mariage était parfait grâce à l\'équipe de La Mangrove. Un cadre de rêve !',
      rating: 5,
      image: '/Temoin3.webp',
      service: 'Événements'
    },
    {
      name: 'Amadou Sanogo',
      text: 'Le bar Le Crabe Poillu est l\'endroit parfait pour se détendre. Cocktails délicieux !',
      rating: 5,
      image: '/Temoin4.webp',
      service: 'Bar'
    }
  ];

  const stats = [
    { number: '500+', label: 'Clients satisfaits', icon: <Users className="h-8 w-8" /> },
    { number: '15+', label: 'Spécialités culinaires', icon: <Utensils className="h-8 w-8" /> },
    { number: '24/7', label: 'Service disponible', icon: <Clock className="h-8 w-8" /> },
    { number: '5★', label: 'Note moyenne', icon: <Star className="h-8 w-8" /> }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentSlide ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image.url})` }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40" />
            </motion.div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <div className="max-w-4xl px-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-4xl md:text-6xl font-playfair font-bold mb-4"
            >
              Restaurant Hôtel La Mangrove
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-xl md:text-2xl mb-8 text-gray-200"
            >
              Où la nature rencontre l'excellence
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center"
            >
              <Link
                to="/restaurant"
                className="inline-block bg-gradient-to-r from-lagoon-400 to-lagoon-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Découvrir nos services
              </Link>
              <button
                onClick={() => window.open('https://wa.me/22577487535?text=Bonjour, je souhaite faire une réservation...', '_blank')}
                className="inline-block bg-gradient-to-r from-tropical-gold to-yellow-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Réserver maintenant
              </button>
            </motion.div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>

        {/* Weather Widget */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute top-32 right-4 bg-white bg-opacity-20 backdrop-blur-sm text-white p-4 rounded-lg"
        >
          <div className="flex items-center space-x-2 text-sm">
            <Thermometer className="h-4 w-4" />
            <span>Abatta</span>
          </div>
          <div className="flex items-center space-x-2 mt-1">
            <Sun className="h-5 w-5 text-yellow-300" />
            <span className="text-lg font-semibold">28°C</span>
          </div>
          <p className="text-xs opacity-90">Ensoleillé</p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-lagoon-400 to-lagoon-500 text-white p-4 rounded-full w-fit mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-mangrove-500 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurant Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Utensils className="h-12 w-12 text-tropical-gold mr-4" />
              <h2 className="text-4xl font-playfair font-bold text-mangrove-500">
                Restaurant Gastronomique
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez les saveurs authentiques de la Côte d'Ivoire dans un cadre tropical unique
            </p>
          </motion.div>

          {/* Organize dishes by category */}
          {['Entrées', 'Plats', 'Garnitures', 'Desserts', 'Boissons'].map((category, categoryIndex) => {
            const categoryDishes = featuredDishes.filter(dish => dish.category === category);
            if (categoryDishes.length === 0) return null;
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h3 className="text-2xl font-playfair font-bold text-mangrove-500 mb-6 text-center">
                  {category === 'Plats' ? 'Plats de Résistances' : category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {categoryDishes.map((dish, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
                    >
                      <div className="relative">
                         <img
                           src={dish.image}
                           alt={dish.name}
                           className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                         />
                         <div className="absolute top-3 left-3 bg-black bg-opacity-60 text-white px-2 py-1 rounded-full text-xs">
                           {dish.category}
                         </div>
                       </div>
                      <div className="p-3">
                        <h4 className="font-semibold text-gray-900 mb-1 text-sm leading-tight">{dish.name}</h4>
                        <p className="text-gray-600 text-xs">{dish.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}

          <div className="text-center">
            <Link
              to="/restaurant"
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Voir le menu complet
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Hotel Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Bed className="h-12 w-12 text-tropical-gold mr-4" />
              <h2 className="text-4xl font-playfair font-bold text-mangrove-500">
                Hôtel de Charme
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hébergement de luxe dans un cadre tropical authentique avec tout le confort moderne
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            {roomTypes.map((room, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{room.name}</h3>
                      {room.subtitle && (
                        <p className="text-sm text-tropical-gold font-medium mt-1">{room.subtitle}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-lagoon-500">
                        {room.price.toLocaleString()} FCFA
                      </div>
                      <p className="text-sm text-gray-500">par nuit</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {room.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-600">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/hotel"
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Réserver une chambre
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Bar Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Wine className="h-12 w-12 text-tropical-gold mr-4" />
              <h2 className="text-4xl font-playfair font-bold text-mangrove-500">
                Bar Le Crabe Poillu
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cocktails tropicaux dans une ambiance climatisée et détendue
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {cocktails.map((cocktail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <img
                  src={cocktail.image}
                  alt={cocktail.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{cocktail.name}</h3>
                  <p className="text-gray-600 text-sm">{cocktail.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/bar"
              className="inline-flex items-center bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Découvrir notre carte
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <PartyPopper className="h-12 w-12 text-tropical-gold mr-4" />
              <h2 className="text-4xl font-playfair font-bold text-mangrove-500">
                Espaces Événements
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Célébrez vos moments uniques dans un cadre tropical exceptionnel
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {eventSpaces.map((space, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
              >
                <div className="relative">
                  <img
                    src={space.image}
                    alt={space.name}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-mangrove-500 to-lagoon-400 text-white p-2 rounded-lg">
                    {space.icon}
                  </div>
                  <div className="absolute top-3 right-3 bg-white bg-opacity-90 backdrop-blur-sm text-mangrove-500 px-2 py-1 rounded-full text-xs font-medium">
                    {space.capacity}
                  </div>
                </div>
                <div className="p-4">
                  <div className="mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{space.name}</h3>
                    {space.subtitle && (
                      <p className="text-sm text-tropical-gold font-medium">{space.subtitle}</p>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{space.description}</p>
                  <div className="space-y-1 mb-4">
                    {space.features.slice(0, 2).map((feature, i) => (
                      <div key={i} className="flex items-center text-xs text-gray-600">
                        <Check className="h-3 w-3 text-green-500 mr-1 flex-shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => window.open('https://wa.me/22577487535?text=Bonjour, je souhaite organiser un événement...', '_blank')}
                    className="w-full bg-gradient-to-r from-lagoon-400 to-lagoon-500 text-white py-2 px-3 rounded-lg text-sm font-medium hover:shadow-lg transition-all"
                  >
                    Demander un devis
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/events"
              className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Voir tous nos espaces
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Camera className="h-12 w-12 text-tropical-gold mr-4" />
              <h2 className="text-4xl font-playfair font-bold text-mangrove-500">
                Galerie Photos
              </h2>
            </div>
            <p className="text-xl text-gray-600">
              Découvrez l'atmosphère unique de La Mangrove à travers nos images
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {galleryPreview.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl group cursor-pointer bg-white shadow-lg hover:shadow-xl transition-all"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                  <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Camera className="h-4 w-4 text-mangrove-500" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center bg-gradient-to-r from-lagoon-400 to-lagoon-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Voir toute la galerie
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-playfair font-bold text-mangrove-500 mb-4">
              Témoignages Clients
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez ce que nos clients pensent de leurs expériences à La Mangrove
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg text-center"
            >
              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-xl text-gray-700 mb-8 italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              <div className="flex items-center justify-center">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-sm text-lagoon-500">
                    {testimonials[currentTestimonial].service}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-lagoon-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Image de fond avec overlay */}
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
            }}
          />
          <div className="absolute inset-0 bg-white bg-opacity-85 backdrop-blur-sm" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <MapPin className="h-12 w-12 text-tropical-gold mb-6" />
              <h2 className="text-4xl font-playfair font-bold mb-6 text-mangrove-500">
                Au Cœur d'Abatta Village
              </h2>
              <p className="text-xl mb-6 text-gray-700">
                Situé dans le charmant village d'Abatta en Côte d'Ivoire, La Mangrove vous offre 
                une expérience authentique dans un environnement naturel préservé.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-tropical-gold" />
                  <span className="text-gray-700">Abatta Village, Abatta, Côte d'Ivoire</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-tropical-gold" />
                  <span className="text-gray-700">+225 77 48 75 35</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-tropical-gold" />
                  <span className="text-gray-700">hotelmangroveabatta@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-3 text-tropical-gold" />
                  <span className="text-gray-700">Ouvert 7j/7 - Réception 24h/24</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100"
            >
              <h3 className="text-2xl font-semibold mb-6 text-mangrove-500">Réservation Rapide</h3>
              <div className="space-y-4">
                <button
                  onClick={() => window.open('https://wa.me/22577487535?text=Bonjour, je souhaite réserver une table...', '_blank')}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all flex items-center justify-center"
                >
                  <Utensils className="h-5 w-5 mr-2" />
                  Réserver une table
                </button>
                <button
                  onClick={() => window.open('https://wa.me/22577487535?text=Bonjour, je souhaite réserver une chambre...', '_blank')}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all flex items-center justify-center"
                >
                  <Bed className="h-5 w-5 mr-2" />
                  Réserver une chambre
                </button>
                <button
                  onClick={() => window.open('https://wa.me/22577487535?text=Bonjour, je souhaite organiser un événement...', '_blank')}
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all flex items-center justify-center"
                >
                  <PartyPopper className="h-5 w-5 mr-2" />
                  Organiser un événement
                </button>
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-tropical-gold to-yellow-500 text-white py-3 px-6 rounded-lg font-medium hover:shadow-lg transition-all flex items-center justify-center"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Nous contacter
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;