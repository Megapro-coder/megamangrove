import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, MapPin, Snowflake, TreePine, Wine, Waves, Calendar, Star, Check, ChevronLeft, ChevronRight } from 'lucide-react';

const EventsPage = () => {
  const [selectedSpace, setSelectedSpace] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');
  const [currentImageIndexes, setCurrentImageIndexes] = useState<{[key: string]: number}>({});

  const eventSpaces = [
    {
      id: 'climatisee',
      name: 'Salle Climatisée',
      capacity: '80 personnes',
      icon: <Snowflake className="h-8 w-8" />,
      images: [
        '/SalleClim.webp'
      ],
      features: [
        'Climatisation performante',
        'Éclairage modulable',
        'Système de sonorisation',
        'Écran de projection',
        'Mobilier modulable'
      ],
      description: 'Espace intérieur climatisé parfait pour vos événements professionnels et privés.',
      idealFor: ['Mariages', 'Conférences', 'Anniversaires', 'Séminaires']
    },
    {
      id: 'plein-air',
      name: 'Espace Plein Air',
      capacity: '150 personnes',
      icon: <TreePine className="h-8 w-8" />,
      images: [
        '/Pleinair.webp',
        '/AireDeJeux.webp',
        '/Pleinair7.webp',
        '/Pleinair5.webp',
        '/PleinaireNuit2.webp',
        '/PleinaireNuit3.webp',
        '/PleinaireNuit4.webp',
        '/Pleinair2.webp',
        '/Pleinair8.webp'
      ],
      features: [
        'Environnement tropical naturel',
        'Éclairage d\'ambiance',
        'Tentes disponibles',
        'Configuration modulable',
        'Vue sur jardins'
      ],
      description: 'Cadre naturel exceptionnel pour des événements en harmonie avec la nature.',
      idealFor: ['Mariages tropicaux', 'Cocktails', 'Fêtes familiales', 'Événements culturels']
    },
    {
      id: 'bar-privatise',
      name: 'Bar Le Crabe Poillu',
      subtitle: '(Privatisation)',
      capacity: '60 personnes',
      icon: <Wine className="h-8 w-8" />,
      images: [
        '/bar.webp',
        '/Despe.webp',
        '/Vodka.webp',
        '/VinBouche.webp',
        '/Liqueur.webp',
        '/BierePression.webp'
      ],
      features: [
        'Bar complet privatisé',
        'Ambiance climatisée',
        'Service de barman',
        'Carte cocktails complète',
        'Musique d\'ambiance'
      ],
      description: 'Privatisez notre bar pour une soirée exclusive entre amis ou collègues.',
      idealFor: ['Soirées privées', 'After-work', 'Anniversaires', 'Événements d\'entreprise']
    },
    {
      id: 'piscine',
      name: 'Espace Piscine',
      capacity: '100 personnes',
      icon: <Waves className="h-8 w-8" />,
      images: [
        '/Piscine.webp'
      ],
      features: [
        'Piscine sécurisée',
        'Bar de piscine',
        'Zone barbecue',
        'Vestiaires équipés',
        'Transats et parasols'
      ],
      description: 'Espace aquatique idéal pour des événements estivaux rafraîchissants.',
      idealFor: ['Pool parties', 'Barbecues', 'Événements estivaux', 'Fêtes d\'enfants']
    },
    {
      id: 'packages',
      name: 'Packages Événements',
      capacity: 'Sur mesure',
      icon: <Calendar className="h-8 w-8" />,
      images: [
        '/Evenementsurmesure.webp',
        '/Pleinair4.webp',
        '/Anniv.webp',
        '/Pleinair8.webp',
        '/EvePerso2.webp',
        '/EvePerso.webp'
      ],
      features: [
        'Formules complètes',
        'Service traiteur inclus',
        'Décoration personnalisée',
        'Coordination événement',
        'Flexibilité totale'
      ],
      description: 'Formules complètes pour mariages, séminaires et anniversaires.',
      idealFor: ['Mariages', 'Séminaires', 'Anniversaires', 'Événements sur mesure']
    }
  ];

  const eventPackages = [
    {
      id: 'mariage',
      name: 'Mariage',
      price: 150000,
      duration: 'Journée complète',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      includes: [
        'Décoration florale tropicale',
        'Menu 3 services pour 50 personnes',
        'Cocktail de bienvenue',
        'Gâteau de mariage',
        'Service traiteur complet',
        'Coordination événement',
        'Photographe 4h incluses'
      ],
      description: 'Package complet pour un mariage inoubliable dans un cadre tropical unique.'
    },
    {
      id: 'seminaire',
      name: 'Séminaire Entreprise',
      price: 15000,
      duration: 'Par personne/jour',
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      includes: [
        'Salle climatisée équipée',
        'Matériel audiovisuel',
        'Pause café matin et après-midi',
        'Déjeuner d\'affaires',
        'Bloc-notes et stylos',
        'Wi-Fi haut débit',
        'Service de conciergerie'
      ],
      description: 'Solution professionnelle pour vos séminaires et réunions d\'entreprise.'
    },
    {
      id: 'anniversaire',
      name: 'Anniversaire',
      price: 75000,
      duration: 'Soirée (6h)',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      includes: [
        'Décoration personnalisée',
        'Buffet pour 30 personnes',
        'Gâteau d\'anniversaire',
        'Animation musicale',
        'Service de bar',
        'Photographe 2h',
        'Coordination complète'
      ],
      description: 'Célébrez votre anniversaire avec style dans notre cadre exceptionnel.'
    },
    {
      id: 'sur-mesure',
      name: 'Sur-Mesure',
      price: 0,
      duration: 'Selon vos besoins',
      image: 'https://images.pexels.com/photos/1684187/pexels-photo-1684187.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      includes: [
        'Consultation personnalisée',
        'Devis détaillé gratuit',
        'Services à la carte',
        'Flexibilité totale',
        'Accompagnement dédié',
        'Solutions créatives',
        'Budget adapté'
      ],
      description: 'Créons ensemble l\'événement de vos rêves avec un service entièrement personnalisé.'
    }
  ];

  // Initialize image indexes
  useEffect(() => {
    const initialIndexes: {[key: string]: number} = {};
    eventSpaces.forEach(space => {
      initialIndexes[space.id] = 0;
    });
    setCurrentImageIndexes(initialIndexes);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndexes(prev => {
        const newIndexes = { ...prev };
        eventSpaces.forEach(space => {
          newIndexes[space.id] = (prev[space.id] + 1) % space.images.length;
        });
        return newIndexes;
      });
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [eventSpaces]);

  const handleEventRequest = () => {
    const space = eventSpaces.find(s => s.id === selectedSpace);
    const package_ = eventPackages.find(p => p.id === selectedPackage);
    
    let message = 'Bonjour, je souhaite organiser un événement à La Mangrove.\n\n';
    
    if (space) {
      message += `Espace souhaité: ${space.name}\n`;
    }
    
    if (package_) {
      message += `Package: ${package_.name}\n`;
      if (package_.price > 0) {
        message += `Prix: ${package_.price.toLocaleString()} FCFA\n`;
      }
    }
    
    message += '\nMerci de me contacter pour discuter des détails.';
    
    window.open(`https://wa.me/22577487535?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleSpaceReservation = (spaceName: string) => {
    const message = `Bonjour, je souhaite réserver l'espace "${spaceName}" pour un événement. Merci de me contacter pour discuter des détails et de la disponibilité.`;
    window.open(`https://wa.me/22577487535?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handlePackageReservation = (packageName: string, packagePrice: number) => {
    let message = `Bonjour, je souhaite réserver le package "${packageName}" pour un événement.\n\n`;
    
    if (packagePrice > 0) {
      message += `Prix du package: ${packagePrice.toLocaleString()} FCFA\n\n`;
    } else {
      message += `Je souhaite obtenir un devis personnalisé.\n\n`;
    }
    
    message += 'Merci de me contacter pour discuter des détails, des dates disponibles et finaliser la réservation.';
    
    window.open(`https://wa.me/22577487535?text=${encodeURIComponent(message)}`, '_blank');
  };

  const nextImage = (spaceId: string) => {
    const space = eventSpaces.find(s => s.id === spaceId);
    if (space) {
      setCurrentImageIndexes(prev => ({
        ...prev,
        [spaceId]: (prev[spaceId] + 1) % space.images.length
      }));
    }
  };

  const prevImage = (spaceId: string) => {
    const space = eventSpaces.find(s => s.id === spaceId);
    if (space) {
      setCurrentImageIndexes(prev => ({
        ...prev,
        [spaceId]: (prev[spaceId] - 1 + space.images.length) % space.images.length
      }));
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1684187/pexels-photo-1684187.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-mangrove-600/80 to-lagoon-600/80" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-4">
              Espaces Événements
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-6">
              Célébrez vos moments uniques dans un cadre tropical exceptionnel
            </p>
            <div className="flex items-center space-x-6 text-tropical-gold">
              <div className="flex items-center space-x-2">
                <Users className="h-6 w-6" />
                <span>20 à 200 personnes</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-6 w-6" />
                <span>7j/7 disponible</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Event Spaces */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-playfair font-bold text-mangrove-500 mb-4 text-center">
            Nos Espaces
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Choisissez l'espace parfait pour votre événement parmi nos différents environnements
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventSpaces.map((space, index) => (
              <motion.div
                key={space.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all ${
                  selectedSpace === space.id ? 'ring-2 ring-lagoon-400' : ''
                }`}
              >
                {/* Image Carousel */}
                <div className="relative h-64 overflow-hidden group">
                  <img
                    src={space.images[currentImageIndexes[space.id] || 0]}
                    alt={space.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Carousel Navigation */}
                  <button
                    onClick={() => prevImage(space.id)}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-opacity-70"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => nextImage(space.id)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-opacity-70"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>

                  {/* Image Indicators */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                    {space.images.map((_, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`w-2 h-2 rounded-full transition-all ${
                          imgIndex === (currentImageIndexes[space.id] || 0)
                            ? 'bg-white'
                            : 'bg-white bg-opacity-50'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Space Icon and Capacity */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-mangrove-500 to-lagoon-400 text-white p-3 rounded-lg">
                    {space.icon}
                  </div>
                  <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm text-mangrove-500 px-3 py-1 rounded-full text-sm font-medium">
                    {space.capacity}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-playfair font-bold text-mangrove-500 mb-2">
                    {space.name}
                    {space.subtitle && (
                      <span className="block text-sm text-lagoon-400 font-normal">{space.subtitle}</span>
                    )}
                  </h3>
                  <p className="text-gray-600 mb-4">{space.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Équipements:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {space.features.slice(0, 3).map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2 text-sm text-gray-600">
                          <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {space.features.length > 3 && (
                        <p className="text-sm text-lagoon-500 font-medium">
                          +{space.features.length - 3} autres équipements
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Idéal pour:</h4>
                    <div className="flex flex-wrap gap-2">
                      {space.idealFor.slice(0, 2).map((type, i) => (
                        <span
                          key={i}
                          className="bg-lagoon-50 text-lagoon-600 px-3 py-1 rounded-full text-sm"
                        >
                          {type}
                        </span>
                      ))}
                      {space.idealFor.length > 2 && (
                        <span className="text-sm text-gray-500">
                          +{space.idealFor.length - 2} autres
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Bouton moderne avec dégradé bleu vers rose */}
                  <button
                    onClick={() => handleSpaceReservation(space.name)}
                    className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[2px] transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/25 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <div className="relative flex items-center justify-center space-x-2 rounded-[10px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-6 py-3 text-white font-semibold transition-all duration-300 group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600">
                      <Calendar className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                      <span className="relative z-10">Réserver cet espace</span>
                      
                      {/* Effet de brillance animé */}
                      <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700 ease-out" />
                    </div>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Event Packages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-playfair font-bold text-mangrove-500 mb-4 text-center">
            Packages Événements
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Des formules complètes pour tous vos événements spéciaux
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventPackages.map((package_, index) => (
              <motion.div
                key={package_.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer ${
                  selectedPackage === package_.id ? 'ring-2 ring-lagoon-400' : ''
                }`}
                onClick={() => setSelectedPackage(package_.id)}
              >
                <div className="relative">
                  <img
                    src={package_.image}
                    alt={package_.name}
                    className="w-full h-48 object-cover"
                  />
                  {package_.name === 'Mariage Tropical' && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-tropical-gold to-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Populaire
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-bold text-mangrove-500 mb-2">
                    {package_.name}
                  </h3>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-500">{package_.duration}</p>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">{package_.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {package_.includes.slice(0, 4).map((item, i) => (
                      <div key={i} className="flex items-center space-x-2 text-sm text-gray-600">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                    {package_.includes.length > 4 && (
                      <p className="text-sm text-lagoon-500 font-medium">
                        +{package_.includes.length - 4} autres services inclus
                      </p>
                    )}
                  </div>

                  {/* Bouton moderne avec dégradé bleu vers rose pour les packages */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePackageReservation(package_.name, package_.price);
                    }}
                    className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[2px] transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/25 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <div className="relative flex items-center justify-center space-x-2 rounded-[10px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-6 py-3 text-white font-semibold transition-all duration-300 group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600">
                      <Calendar className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                      <span className="relative z-10">Réserver ce package</span>
                      
                      {/* Effet de brillance animé */}
                      <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700 ease-out" />
                    </div>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section - Carte "Planifions Votre Événement" améliorée */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden"
        >
          {/* Conteneur principal avec design blanc cassé élégant */}
          <div className="relative bg-gradient-to-br from-stone-50 via-amber-50/30 to-orange-50/20 rounded-3xl shadow-2xl overflow-hidden border border-stone-200/50">
            {/* Motifs décoratifs subtils en arrière-plan */}
            <div className="absolute inset-0 opacity-[0.03]">
              <div className="absolute top-10 left-10 w-32 h-32 bg-mangrove-400 rounded-full blur-3xl" />
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-lagoon-300 rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-tropical-gold rounded-full blur-3xl" />
            </div>

            {/* Effet de texture subtile */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-white/20" />
            
            {/* Bordure dorée subtile */}
            <div className="absolute inset-0 rounded-3xl border-2 border-gradient-to-r from-tropical-gold/20 via-lagoon-300/20 to-mangrove-300/20" />

            {/* Contenu principal */}
            <div className="relative z-10 p-8 md:p-12">
              {/* En-tête avec icône élégante */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center mb-8"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-stone-100 to-stone-200 rounded-2xl mb-6 shadow-lg border border-stone-300/50">
                  <Calendar className="h-10 w-10 text-mangrove-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-mangrove-600 mb-4">
                  Planifions Votre Événement
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-mangrove-400 to-lagoon-400 mx-auto rounded-full" />
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl mb-8 text-gray-700 max-w-2xl mx-auto text-center leading-relaxed"
              >
                Notre équipe d'experts vous accompagne dans l'organisation de votre événement parfait
              </motion.p>
              
              {/* Sélection utilisateur */}
              {(selectedSpace || selectedPackage) && (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-md mx-auto border border-stone-200/50 shadow-lg"
                >
                  <h3 className="font-semibold mb-3 text-mangrove-600 text-center">Votre sélection:</h3>
                  <div className="space-y-2 text-center">
                    {selectedSpace && (
                      <div className="flex items-center justify-center space-x-2">
                        <MapPin className="h-4 w-4 text-lagoon-500" />
                        <p className="text-sm text-gray-700">
                          <span className="font-medium">Espace:</span> {eventSpaces.find(s => s.id === selectedSpace)?.name}
                        </p>
                      </div>
                    )}
                    {selectedPackage && (
                      <div className="flex items-center justify-center space-x-2">
                        <Star className="h-4 w-4 text-tropical-gold" />
                        <p className="text-sm text-gray-700">
                          <span className="font-medium">Package:</span> {eventPackages.find(p => p.id === selectedPackage)?.name}
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
              
              {/* Boutons d'action avec le nouveau design */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center"
              >
                <button
                  onClick={handleEventRequest}
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[2px] transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/25 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <div className="relative flex items-center justify-center space-x-2 rounded-[10px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-8 py-4 text-white font-semibold transition-all duration-300 group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600">
                    <Calendar className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                    <span className="relative z-10">Demander un devis</span>
                    
                    {/* Effet de brillance animé */}
                    <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700 ease-out" />
                  </div>
                </button>

                <button
                  onClick={() => window.open('tel:+22577487535', '_self')}
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-[2px] transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <div className="relative flex items-center justify-center space-x-2 rounded-[10px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 px-8 py-4 text-white font-semibold transition-all duration-300 group-hover:from-pink-600 group-hover:via-purple-600 group-hover:to-blue-600">
                    <span className="text-lg transition-transform duration-300 group-hover:scale-110">📞</span>
                    <span className="relative z-10">Appeler maintenant</span>
                    
                    {/* Effet de brillance animé */}
                    <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700 ease-out" />
                  </div>
                </button>
              </motion.div>

              {/* Note informative */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-sm text-gray-600 text-center mt-6 max-w-lg mx-auto"
              >
                Réponse garantie sous 24h • Devis personnalisé gratuit • Accompagnement complet
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EventsPage;