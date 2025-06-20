import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'Toutes les photos', icon: '📸' },
    { id: 'interior', name: 'Intérieur', icon: '🏨' },
    { id: 'events', name: 'Événements', icon: '🎉' },
    { id: 'cuisine', name: 'Cuisine', icon: '🍽️' },
    { id: 'rooms', name: 'Chambres', icon: '🛏️' },
    { id: 'exterior', name: 'Extérieur', icon: '🌴' },
  ];

  const galleryImages = [
    // Interior
    {
      id: 1,
      url: '/Bar2.webp',
      category: 'interior',
      title: 'Bar Le Crabe Poillu',
      description: 'Ambiance détendue dans notre bar climatisé'
    },
    {
      id: 2,
      url: '/bar.webp',
      category: 'interior',
      title: 'Espace bar',
      description: 'Vue alternative de notre bar'
    },
    {
      id: 3,
      url: '/SalleClim.webp',
      category: 'interior',
      title: 'Salle climatisée',
      description: 'Espace événementiel moderne et confortable'
    },

    // Events
    {
      id: 4,
      url: '/Pleinair.webp',
      category: 'events',
      title: 'Espace plein air',
      description: 'Événements en harmonie avec la nature'
    },
    {
      id: 5,
      url: '/Piscine.webp',
      category: 'events',
      title: 'Espace piscine',
      description: 'Événements au bord de la piscine'
    },
    {
      id: 6,
      url: '/Anniv.webp',
      category: 'events',
      title: 'Anniversaire',
      description: 'Célébrations spéciales'
    },
    {
      id: 7,
      url: '/Vueduciel.webp',
      category: 'events',
      title: 'Vue panoramique',
      description: 'Vue magnifique pour vos événements'
    },
    {
      id: 8,
      url: '/EvePerso.webp',
      category: 'events',
      title: 'Événement personnalisé',
      description: 'Événement sur mesure dans notre établissement'
    },
    {
      id: 9,
      url: '/EvePerso2.webp',
      category: 'events',
      title: 'Événement privé',
      description: 'Célébration privée dans un cadre tropical'
    },

    // Cuisine
    {
      id: 10,
      url: '/PouletRoti.webp',
      category: 'cuisine',
      title: 'Poulet rôti',
      description: 'Spécialité de la maison'
    },
    {
      id: 11,
      url: '/Attieke.webp',
      category: 'cuisine',
      title: 'Attieké traditionnel',
      description: 'Accompagnement typiquement ivoirien'
    },
    {
      id: 12,
      url: '/Attieketeinte.webp',
      category: 'cuisine',
      title: 'Attieké teinté',
      description: 'Variante colorée de l\'attieké'
    },
    {
      id: 13,
      url: '/Alloco.webp',
      category: 'cuisine',
      title: 'Alloco',
      description: 'Bananes plantains frites'
    },
    {
      id: 14,
      url: '/BrochetteMerou.webp',
      category: 'cuisine',
      title: 'Brochette de mérou',
      description: 'Poisson grillé à la perfection'
    },
    {
      id: 15,
      url: '/BoeuSteak.webp',
      category: 'cuisine',
      title: 'Steak de bœuf',
      description: 'Viande tendre et savoureuse'
    },
    {
      id: 16,
      url: '/BoeufSoupe.webp',
      category: 'cuisine',
      title: 'Soupe de bœuf',
      description: 'Bouillon traditionnel'
    },
    {
      id: 17,
      url: '/Cabri.webp',
      category: 'cuisine',
      title: 'Cabri',
      description: 'Viande de chèvre préparée'
    },
    {
      id: 16,
      url: '/Caillebraise.webp',
      category: 'cuisine',
      title: 'Caille braisée',
      description: 'Volaille délicatement préparée'
    },
    {
      id: 17,
      url: '/cailerotipetipois.webp',
      category: 'cuisine',
      title: 'Caille rôtie aux petits pois',
      description: 'Plat raffiné'
    },
    {
      id: 18,
      url: '/Calamar.webp',
      category: 'cuisine',
      title: 'Calamar',
      description: 'Fruits de mer frais'
    },
    {
      id: 19,
      url: '/Couscous.webp',
      category: 'cuisine',
      title: 'Couscous',
      description: 'Plat méditerranéen'
    },
    {
      id: 20,
      url: '/EscargoBrochette.webp',
      category: 'cuisine',
      title: 'Brochette d\'escargot',
      description: 'Spécialité locale'
    },
    {
      id: 21,
      url: '/Escargokedjenou.webp',
      category: 'cuisine',
      title: 'Escargot kedjenou',
      description: 'Plat traditionnel ivoirien'
    },
    {
      id: 22,
      url: '/Frite.webp',
      category: 'cuisine',
      title: 'Frites',
      description: 'Accompagnement croustillant'
    },
    {
      id: 23,
      url: '/GambaSaute.webp',
      category: 'cuisine',
      title: 'Gambas sautées',
      description: 'Crevettes fraîches'
    },
    {
      id: 24,
      url: '/GesierSaute.webp',
      category: 'cuisine',
      title: 'Gésiers sautés',
      description: 'Abats préparés avec soin'
    },
    {
      id: 25,
      url: '/GesiersBrochette.webp',
      category: 'cuisine',
      title: 'Brochette de gésiers',
      description: 'Grillades savoureuses'
    },
    {
      id: 26,
      url: '/Igname.webp',
      category: 'cuisine',
      title: 'Igname',
      description: 'Tubercule traditionnel'
    },
    {
      id: 27,
      url: '/IgnameArraigne.webp',
      category: 'cuisine',
      title: 'Igname à l\'araignée',
      description: 'Préparation spéciale'
    },
    {
      id: 28,
      url: '/LapinBraise.webp',
      category: 'cuisine',
      title: 'Lapin braisé',
      description: 'Viande tendre et parfumée'
    },
    {
      id: 29,
      url: '/Mouton.webp',
      category: 'cuisine',
      title: 'Mouton',
      description: 'Viande rouge savoureuse'
    },
    {
      id: 30,
      url: '/Patate.webp',
      category: 'cuisine',
      title: 'Patate douce',
      description: 'Légume sucré'
    },
    {
      id: 31,
      url: '/PintadeBraise.webp',
      category: 'cuisine',
      title: 'Pintade braisée',
      description: 'Volaille de qualité'
    },
    {
      id: 32,
      url: '/PoissonCarpe.webp',
      category: 'cuisine',
      title: 'Carpe',
      description: 'Poisson d\'eau douce'
    },
    {
      id: 33,
      url: '/PoissonSol.webp',
      category: 'cuisine',
      title: 'Poisson sole',
      description: 'Poisson plat délicat'
    },
    {
      id: 34,
      url: '/PoissonSosso.webp',
      category: 'cuisine',
      title: 'Poisson sosso',
      description: 'Spécialité locale'
    },
    {
      id: 35,
      url: '/PommeSaute.webp',
      category: 'cuisine',
      title: 'Pommes sautées',
      description: 'Accompagnement savoureux'
    },
    {
      id: 36,
      url: '/Pouletfourrépomme.webp',
      category: 'cuisine',
      title: 'Poulet fourré aux pommes',
      description: 'Plat raffiné'
    },
    {
      id: 37,
      url: '/pondeusekedjenou.webp',
      category: 'cuisine',
      title: 'Pondeuse kedjenou',
      description: 'Poule au kedjenou'
    },
    {
      id: 38,
      url: '/Riz.webp',
      category: 'cuisine',
      title: 'Riz',
      description: 'Accompagnement de base'
    },
    {
      id: 39,
      url: '/SaladeComposée.webp',
      category: 'cuisine',
      title: 'Salade composée',
      description: 'Fraîcheur et vitamines'
    },
    {
      id: 40,
      url: '/SaladeEcrevise.webp',
      category: 'cuisine',
      title: 'Salade aux écrevisses',
      description: 'Salade de fruits de mer'
    },
    {
      id: 41,
      url: '/SaladeGambas.webp',
      category: 'cuisine',
      title: 'Salade aux gambas',
      description: 'Salade aux crevettes'
    },
    {
      id: 42,
      url: '/SaladeNicoise.webp',
      category: 'cuisine',
      title: 'Salade niçoise',
      description: 'Salade méditerranéenne'
    },
    {
      id: 43,
      url: '/saladeGesiers.webp',
      category: 'cuisine',
      title: 'Salade de gésiers',
      description: 'Salade traditionnelle'
    },
    {
      id: 44,
      url: '/SoupeMachoiron.webp',
      category: 'cuisine',
      title: 'Soupe de machoiron',
      description: 'Bouillon de poisson'
    },
    {
      id: 45,
      url: '/Soupepecheur.webp',
      category: 'cuisine',
      title: 'Soupe de pêcheur',
      description: 'Soupe aux fruits de mer'
    },
    {
      id: 46,
      url: '/Flan.webp',
      category: 'cuisine',
      title: 'Flan',
      description: 'Dessert crémeux'
    },
    {
      id: 47,
      url: '/Gateau.webp',
      category: 'cuisine',
      title: 'Gâteau',
      description: 'Pâtisserie maison'
    },
    {
      id: 48,
      url: '/Glace.webp',
      category: 'cuisine',
      title: 'Glace',
      description: 'Dessert glacé'
    },
    {
      id: 49,
      url: '/Fruitsaison.webp',
      category: 'cuisine',
      title: 'Fruits de saison',
      description: 'Fruits frais tropicaux'
    },
    {
      id: 50,
      url: '/Cocktail.webp',
      category: 'cuisine',
      title: 'Cocktails',
      description: 'Boissons rafraîchissantes'
    },
    {
      id: 51,
      url: '/CocktailNonALCO.webp',
      category: 'cuisine',
      title: 'Cocktails sans alcool',
      description: 'Boissons pour tous'
    },
    {
      id: 52,
      url: '/heineken.webp',
      category: 'cuisine',
      title: 'Bières',
      description: 'Sélection de bières'
    },
    {
      id: 53,
      url: '/Despe.webp',
      category: 'cuisine',
      title: 'Bière locale',
      description: 'Bière ivoirienne'
    },
    {
      id: 54,
      url: '/BiereAutres.webp',
      category: 'cuisine',
      title: 'Autres bières',
      description: 'Variété de bières'
    },
    {
      id: 55,
      url: '/BierePression.webp',
      category: 'cuisine',
      title: 'Bières pression',
      description: 'Bières fraîches'
    },
    {
      id: 56,
      url: '/VinBouche.webp',
      category: 'cuisine',
      title: 'Vins',
      description: 'Sélection de vins'
    },
    {
      id: 57,
      url: '/Vodka.webp',
      category: 'cuisine',
      title: 'Spiritueux',
      description: 'Alcools forts'
    },
    {
      id: 58,
      url: '/Liqueur.webp',
      category: 'cuisine',
      title: 'Liqueurs',
      description: 'Liqueurs fines'
    },
    {
      id: 59,
      url: '/EauMinerale.webp',
      category: 'cuisine',
      title: 'Eau minérale',
      description: 'Boissons non alcoolisées'
    },
    {
      id: 60,
      url: '/Jus.webp',
      category: 'cuisine',
      title: 'Jus de fruits',
      description: 'Jus frais'
    },
    {
      id: 61,
      url: '/Sucrerie.webp',
      category: 'cuisine',
      title: 'Sucreries',
      description: 'Boissons sucrées'
    },
    {
      id: 62,
      url: '/CannetteEnergy.webp',
      category: 'cuisine',
      title: 'Boissons énergisantes',
      description: 'Energy drinks'
    },
    {
      id: 63,
      url: '/CafeThe.webp',
      category: 'cuisine',
      title: 'Café et thé',
      description: 'Boissons chaudes'
    },

    // Exterior
    {
      id: 65,
      url: '/hotel.webp',
      category: 'exterior',
      title: 'Vue extérieure',
      description: 'Façade de l\'établissement'
    },
    {
      id: 66,
      url: '/Vue3.webp',
      category: 'exterior',
      title: 'Espace extérieur',
      description: 'Aménagement extérieur'
    },
    {
      id: 67,
      url: '/Pleinair8.webp',
      category: 'events',
      title: 'Événement plein air 8',
      description: 'Espace événementiel en plein air'
    },
    {
      id: 68,
      url: '/nautique.webp',
      category: 'exterior',
      title: 'Activités nautiques',
      description: 'Espace dédié aux activités nautiques'
    },
    {
      id: 69,
      url: '/Littoral.webp',
      category: 'exterior',
      title: 'Vue littoral',
      description: 'Magnifique vue sur le littoral'
    },
    {
      id: 70,
      url: '/PleinaireNuit4.webp',
      category: 'events',
      title: 'Événement nocturne 4',
      description: 'Ambiance nocturne en plein air'
    },
    {
      id: 71,
      url: '/Parking.webp',
      category: 'exterior',
      title: 'Parking',
      description: 'Espace de stationnement'
    },
    {
      id: 72,
      url: '/Pleinair7.webp',
      category: 'events',
      title: 'Événement plein air 7',
      description: 'Espace événementiel extérieur'
    },
    {
      id: 73,
      url: '/AireDeJeux.webp',
      category: 'exterior',
      title: 'Aire de jeux',
      description: 'Espace de loisirs et de détente'
    },
    {
      id: 74,
      url: '/Pleinair6.webp',
      category: 'events',
      title: 'Événement plein air 6',
      description: 'Célébrations en plein air'
    },
    {
      id: 75,
      url: '/PleinaireNuit3.webp',
      category: 'events',
      title: 'Événement nocturne 3',
      description: 'Soirée événementielle sous les étoiles'
    },
    {
      id: 76,
      url: '/Vue3.webp',
      category: 'exterior',
      title: 'Vue panoramique 3',
      description: 'Perspective spectaculaire du complexe'
    },
    {
      id: 77,
      url: '/Vue4.webp',
      category: 'exterior',
      title: 'Vue panoramique 4',
      description: 'Panorama enchanteur de La Mangrove'
    },
    {
      id: 78,
      url: '/Pleinair2.webp',
      category: 'events',
      title: 'Événement plein air 2',
      description: 'Espace événementiel naturel'
    },
    {
      id: 79,
      url: '/Pleinair4.webp',
      category: 'events',
      title: 'Événement plein air 4',
      description: 'Cadre idéal pour vos événements'
    },
    {
      id: 80,
      url: '/Pleinair5.webp',
      category: 'events',
      title: 'Événement plein air 5',
      description: 'Espace de réception extérieur'
    },
    {
      id: 81,
      url: '/Evenementsurmesure.webp',
      category: 'events',
      title: 'Événements sur mesure',
      description: 'Événements personnalisés selon vos besoins'
    },
    {
      id: 82,
      url: '/FeuDeCamp.webp',
      category: 'events',
      title: 'Feu de camp',
      description: 'Soirées conviviales autour du feu'
    },
    {
      id: 83,
      url: '/Littoral2.webp',
      category: 'exterior',
      title: 'Vue littoral 2',
      description: 'Autre perspective du littoral'
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (imageId: number) => {
    setLightboxImage(imageId);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (lightboxImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === lightboxImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setLightboxImage(filteredImages[newIndex].id);
  };

  const currentLightboxImage = lightboxImage 
    ? filteredImages.find(img => img.id === lightboxImage)
    : null;

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-80 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-mangrove-600/80 to-lagoon-600/80" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-2xl"
          >
            <Camera className="h-16 w-16 mb-6 text-tropical-gold" />
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Galerie Photos
            </h1>
            <p className="text-xl text-gray-200">
              Découvrez l'atmosphère unique de La Mangrove à travers nos images
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-lagoon-400 to-lagoon-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
              onClick={() => openLightbox(image.id)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                <p className="text-sm text-gray-200">{image.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Aucune image dans cette catégorie.</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && currentLightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => navigateLightbox('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => navigateLightbox('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image */}
              <img
                src={currentLightboxImage.url}
                alt={currentLightboxImage.title}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-6 rounded-b-lg">
                <h3 className="text-xl font-semibold mb-2">{currentLightboxImage.title}</h3>
                <p className="text-gray-200">{currentLightboxImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;