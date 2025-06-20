import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Wifi, Car, Coffee, Bath, Bed, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

const HotelPage = () => {
  const [currentImageIndexes, setCurrentImageIndexes] = useState<{[key: string]: number}>({});

  const roomCategories = [
    {
      id: 'mangrove',
      name: 'Chambre standard',
      subtitle: 'Avec petit déjeuner inclus',
      price: 30000,
      images: [
        'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      features: ['Vue jardin tropical', 'Climatisation', 'Wi-Fi gratuit', 'Salle de bain privée'],
      description: 'Chambre confortable avec vue sur nos jardins tropicaux luxuriants.',
      amenities: [
        { icon: <Bed className="h-5 w-5" />, text: 'Lit double confortable' },
        { icon: <Bath className="h-5 w-5" />, text: 'Salle de bain avec douche' },
        { icon: <Wifi className="h-5 w-5" />, text: 'Wi-Fi haut débit' },
        { icon: <Coffee className="h-5 w-5" />, text: 'Coin café/thé' },
      ]
    },
    {
      id: 'lagune',
      name: 'Chambre Suite',
      subtitle: 'Avec petit déjeuner inclus',
      price: 60000,
      images: [
        'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      features: ['Balcon privé', 'Salon séparé', 'Mini-bar', 'Vue panoramique'],
      description: 'Suite spacieuse avec balcon privé et vue imprenable sur les environs.',
      amenities: [
        { icon: <Bed className="h-5 w-5" />, text: 'Chambre avec salon séparé' },
        { icon: <Bath className="h-5 w-5" />, text: 'Salle de bain de luxe' },
        { icon: <Wifi className="h-5 w-5" />, text: 'Wi-Fi premium' },
        { icon: <MapPin className="h-5 w-5" />, text: 'Balcon avec vue' },
      ]
    }
  ];

  // Initialize image indexes
  useEffect(() => {
    const initialIndexes: {[key: string]: number} = {};
    roomCategories.forEach(room => {
      initialIndexes[room.id] = 0;
    });
    setCurrentImageIndexes(initialIndexes);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndexes(prev => {
        const newIndexes = { ...prev };
        roomCategories.forEach(room => {
          newIndexes[room.id] = (prev[room.id] + 1) % room.images.length;
        });
        return newIndexes;
      });
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [roomCategories]);

  const handleReservation = (roomName: string, roomPrice: number) => {
    const message = `Bonjour, je souhaite réserver une ${roomName} à ${roomPrice.toLocaleString()} FCFA par nuit. Merci de me contacter pour discuter des dates et de la disponibilité.`;
    window.open(`https://wa.me/22577487535?text=${encodeURIComponent(message)}`, '_blank');
  };

  const nextImage = (roomId: string) => {
    const room = roomCategories.find(r => r.id === roomId);
    if (room) {
      setCurrentImageIndexes(prev => ({
        ...prev,
        [roomId]: (prev[roomId] + 1) % room.images.length
      }));
    }
  };

  const prevImage = (roomId: string) => {
    const room = roomCategories.find(r => r.id === roomId);
    if (room) {
      setCurrentImageIndexes(prev => ({
        ...prev,
        [roomId]: (prev[roomId] - 1 + room.images.length) % room.images.length
      }));
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-r from-mangrove-500 to-lagoon-400">
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
            }}
          />
          <div className="absolute inset-0 bg-mangrove-600 bg-opacity-70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Hôtel La Mangrove
            </h1>
            <p className="text-xl text-gray-200 mb-6">
              Hébergement de luxe dans un cadre tropical authentique
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-sm">Hôtel 5 étoiles</span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Room Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-playfair font-bold text-mangrove-500 mb-6 text-center">
            Nos Chambres & Suites
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Découvrez nos hébergements de luxe conçus pour votre confort et votre détente
          </p>
        </motion.div>

        <div className="space-y-8">
          {roomCategories.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
            >
              <div className="md:flex">
                {/* Image Carousel */}
                <div className="md:w-1/2 relative group">
                  <div className="relative h-64 md:h-full overflow-hidden">
                    <img
                      src={room.images[currentImageIndexes[room.id] || 0]}
                      alt={`${room.name} - Image ${(currentImageIndexes[room.id] || 0) + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Carousel Navigation */}
                    <button
                      onClick={() => prevImage(room.id)}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-opacity-70"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => nextImage(room.id)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-opacity-70"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>

                    {/* Image Indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {room.images.map((_, imgIndex) => (
                        <button
                          key={imgIndex}
                          onClick={() => setCurrentImageIndexes(prev => ({ ...prev, [room.id]: imgIndex }))}
                          className={`w-2 h-2 rounded-full transition-all ${
                            imgIndex === (currentImageIndexes[room.id] || 0)
                              ? 'bg-white'
                              : 'bg-white bg-opacity-50'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Image Counter */}
                    <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                      {(currentImageIndexes[room.id] || 0) + 1} / {room.images.length}
                    </div>
                  </div>
                </div>

                <div className="md:w-1/2 p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-playfair font-bold text-mangrove-500">
                        {room.name}
                      </h3>
                      <p className="text-lagoon-400 font-medium">{room.subtitle}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-lagoon-500">
                        {room.price.toLocaleString()} FCFA
                      </div>
                      <p className="text-sm text-gray-500">par nuit</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{room.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {room.amenities.map((amenity, i) => (
                      <div key={i} className="flex items-center space-x-3 text-sm text-gray-600">
                        <span className="text-lagoon-400">{amenity.icon}</span>
                        <span>{amenity.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {room.features.map((feature, i) => (
                      <span
                        key={i}
                        className="bg-lagoon-50 text-lagoon-600 px-3 py-1 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Bouton de réservation intégré */}
                  <button
                    onClick={() => handleReservation(room.name, room.price)}
                    className="w-full bg-gradient-to-r from-lagoon-400 to-lagoon-500 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                  >
                    <Bed className="h-5 w-5" />
                    <span>Réserver cette chambre</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Services Information Section - Améliorée avec design 3D */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 relative"
        >
          {/* Conteneur principal avec perspective 3D */}
          <div className="perspective-1000">
            <motion.div
              initial={{ rotateX: 10, opacity: 0 }}
              whileInView={{ rotateX: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-stone-50 via-amber-50 to-orange-50 rounded-3xl shadow-2xl overflow-hidden transform-gpu"
              style={{
                background: 'linear-gradient(135deg, #fafaf9 0%, #fef7cd 25%, #fed7aa 50%, #fef3c7 75%, #fafaf9 100%)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              }}
            >
              {/* Effet de brillance animé */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] animate-[shimmer_3s_ease-in-out_infinite]" />
              
              {/* Motifs décoratifs en arrière-plan */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-32 h-32 bg-tropical-gold rounded-full blur-3xl" />
                <div className="absolute bottom-10 right-10 w-40 h-40 bg-lagoon-400 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-mangrove-300 rounded-full blur-3xl" />
              </div>

              {/* Contenu principal */}
              <div className="relative z-10 p-8 md:p-12">
                {/* En-tête avec animation */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-center mb-12"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-tropical-gold to-yellow-500 rounded-2xl mb-6 shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <Star className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-4xl md:text-5xl font-playfair font-bold bg-gradient-to-r from-mangrove-600 via-lagoon-500 to-tropical-gold bg-clip-text text-transparent mb-4">
                    Services Inclus dans Votre Séjour
                  </h3>
                  <div className="w-24 h-1 bg-gradient-to-r from-tropical-gold to-lagoon-400 mx-auto rounded-full" />
                </motion.div>

                {/* Grille des services avec cartes 3D */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {[
                    {
                      icon: Coffee,
                      title: "Petit-déjeuner",
                      subtitle: "Buffet continental inclus",
                      color: "from-amber-500 to-orange-500",
                      delay: 0.2
                    },
                    {
                      icon: Wifi,
                      title: "Wi-Fi Gratuit",
                      subtitle: "Haut débit dans tout l'hôtel",
                      color: "from-blue-500 to-cyan-500",
                      delay: 0.3
                    },
                    {
                      icon: Car,
                      title: "Parking",
                      subtitle: "Gratuit et sécurisé",
                      color: "from-green-500 to-emerald-500",
                      delay: 0.4
                    },
                    {
                      icon: Bath,
                      title: "Ménage",
                      subtitle: "Service quotidien",
                      color: "from-purple-500 to-pink-500",
                      delay: 0.5
                    }
                  ].map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ y: 30, opacity: 0, rotateY: -15 }}
                      whileInView={{ y: 0, opacity: 1, rotateY: 0 }}
                      transition={{ duration: 0.8, delay: service.delay }}
                      viewport={{ once: true }}
                      whileHover={{ 
                        y: -10, 
                        rotateY: 5,
                        transition: { duration: 0.3 }
                      }}
                      className="group relative"
                    >
                      {/* Carte avec effet 3D */}
                      <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 transform-gpu transition-all duration-300 group-hover:shadow-2xl">
                        {/* Effet de lueur au survol */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Icône avec animation */}
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                          className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-6 shadow-lg relative z-10`}
                        >
                          <service.icon className="h-8 w-8 text-white" />
                        </motion.div>
                        
                        {/* Contenu */}
                        <div className="relative z-10">
                          <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                            {service.title}
                          </h4>
                          <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                            {service.subtitle}
                          </p>
                        </div>

                        {/* Bordure animée */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-tropical-gold via-lagoon-400 to-mangrove-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-sm" />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Message de conclusion avec animation */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                    Profitez d'un séjour{' '}
                    <span className="font-bold bg-gradient-to-r from-tropical-gold to-lagoon-500 bg-clip-text text-transparent">
                      tout compris
                    </span>{' '}
                    avec nos services premium inclus dans le prix de votre chambre
                  </p>
                  
                  {/* Étoiles décoratives */}
                  <div className="flex justify-center space-x-2 mt-6">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: 180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Star className="h-6 w-6 text-tropical-gold fill-current" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Styles CSS personnalisés pour les animations */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
      `}</style>
    </div>
  );
};

export default HotelPage;