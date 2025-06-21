import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Wine, ShoppingCart, Plus, Minus, X, MessageCircle } from 'lucide-react';

const BarPage = () => {
  // États pour le panier
  const [cart, setCart] = useState<{[key: string]: number}>({});
  const [showCart, setShowCart] = useState(false);
  const [showFloatingCart, setShowFloatingCart] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const cocktails = [
    {
      id: '1',
      name: 'Heineken',
      price: 1500,
      description: 'Bière blonde premium importée',
      image: '/heineken.webp',
      signature: true
    },
    {
      id: '2',
      name: 'Despe',
      price: 1500,
      description: 'Bière locale de qualité supérieure',
      image: '/Despe.webp',
      signature: true
    },
    {
      id: '3',
      name: 'Autres Bières',
      price: 1000,
      description: 'Sélection de bières variées',
      image: '/BiereAutres.webp',
      signature: true
    },
    {
      id: '4',
      name: 'Sucrerie',
      price: 1000,
      description: 'Boissons sucrées et rafraîchissantes',
      image: '/Sucrerie.webp',
      signature: true
    },
    {
      id: '5',
      name: 'Cannette Energy',
      price: 1000,
      description: 'Boissons énergisantes en cannette',
      image: '/CannetteEnergy.webp',
      signature: true
    },
    {
      id: '6',
      name: 'Eau Minérale',
      price: 1000,
      description: 'Eau minérale pure et rafraîchissante',
      image: '/EauMinerale.webp',
      signature: true
    },
    {
      id: '7',
      name: 'Vin bouché',
      price: 10500,
      description: 'Sélection de vins de qualité (9000 à 12000 FCFA)',
      image: '/VinBouche.webp',
      signature: true
    },
    {
      id: '8',
      name: 'Bières à pression',
      price: 2000,
      description: 'Bières fraîches servies à la pression',
      image: '/BierePression.webp',
      signature: true
    },
    {
      id: '9',
      name: 'Cocktail alcoolisé',
      price: 2500,
      description: 'Cocktails signature avec alcool',
      image: '/Cocktail.webp',
      signature: true
    },
    {
      id: '10',
      name: 'Cocktail non alcoolisé',
      price: 2000,
      description: 'Cocktails rafraîchissants sans alcool',
      image: '/CocktailNonALCO.webp',
      nonAlcoholic: true
    },
    {
      id: '11',
      name: 'Vodka',
      price: 3000,
      description: 'Vodka premium de qualité supérieure',
      image: '/Vodka.webp',
      signature: true
    },
    {
      id: '12',
      name: 'Liqueur',
      price: 2500,
      description: 'Liqueurs fines (à partir de 2500 FCFA)',
      image: '/Liqueur.webp',
      signature: true
    }
  ];

  const galleryImages = [
    '/heineken.webp',
    '/Despe.webp',
    '/BiereAutres.webp',
    '/Cocktail.webp',
    '/VinBouche.webp',
    '/bar.webp'
  ];

  // Fonctions de gestion du panier
  const addToCart = (itemId: string) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
    
    // Afficher la notification flottante
    setShowFloatingCart(true);
    setTimeout(() => setShowFloatingCart(false), 3000);
  };

  const removeFromCart = (itemId: string) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId]--;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  const getTotalPrice = () => {
    return Object.entries(cart).reduce((total, [itemId, quantity]) => {
      const item = cocktails.find(item => item.id === itemId);
      return total + (item ? item.price * quantity : 0);
    }, 0);
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  };

  const handleOrder = () => {
    const orderText = Object.entries(cart).map(([itemId, quantity]) => {
      const item = cocktails.find(item => item.id === itemId);
      return `${quantity}x ${item?.name} (${item?.price} FCFA)`;
    }).join('\n');
    
    const totalPrice = getTotalPrice();
    const message = `Bonjour, je souhaite commander:\n\n${orderText}\n\nTotal: ${totalPrice.toLocaleString()} FCFA\n\nMerci !`;
    
    window.open(`https://wa.me/22577487535?text=${encodeURIComponent(message)}`, '_blank');
  };

  const orderCocktail = (cocktailName: string) => {
    const message = `Bonjour, je souhaite commander un ${cocktailName} au Bar Le Crabe Poillu. Merci !`;
    window.open(`https://wa.me/22577487535?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
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
            <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-4">
              Bar Le Crabe Poillu
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-6">
              Cocktails tropicaux dans une ambiance climatisée et détendue
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bar Description - Carte 3D */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-lagoon-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative perspective-1000"
            >
              {/* Carte 3D principale - Format rectangulaire */}
               <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden transform-gpu hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 aspect-[16/9] max-w-7xl mx-auto">
                 {/* Effet de brillance */}
                 <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-lagoon-100/10 pointer-events-none" />
                 
                 {/* Bordure décorative */}
                 <div className="absolute inset-0 rounded-xl border-2 border-gradient-to-r from-lagoon-200 via-mangrove-200 to-tropical-gold/30" />
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 h-full">
                  {/* Section texte avec effet de profondeur - 2 colonnes */}
                   <motion.div
                     initial={{ opacity: 0, x: -30 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.8, delay: 0.2 }}
                     viewport={{ once: true }}
                     className="lg:col-span-2 p-6 lg:p-8 relative z-10 flex flex-col justify-center"
                   >
                    {/* Badge décoratif */}
                    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-lagoon-100 to-mangrove-100 rounded-full mb-6">
                      <div className="w-2 h-2 bg-lagoon-400 rounded-full mr-2 animate-pulse" />
                      <span className="text-sm font-medium text-lagoon-700">Espace Climatisé Premium</span>
                    </div>
                    
                    <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-mangrove-600 to-lagoon-600 mb-4 leading-tight">
                       Un Refuge Tropical Climatisé
                     </h2>
                    
                    <div className="space-y-3 mb-6">
                       <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                         Notre bar climatisé vous offre un <span className="font-semibold text-lagoon-600">refuge parfait</span> contre la chaleur tropicale. 
                         Détendez-vous dans un environnement confortable tout en savourant notre large 
                         sélection de boissons rafraîchissantes, de cocktails signature et de spécialités locales.
                       </p>
                       <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                         Que vous souhaitiez vous détendre après une journée d'exploration ou profiter 
                         d'une soirée entre amis, <span className="font-semibold text-mangrove-600">Le Crabe Poillu</span> est l'endroit idéal pour créer des 
                         souvenirs inoubliables dans une ambiance chaleureuse et accueillante.
                       </p>
                     </div>
                    
                    {/* Caractéristiques avec icônes */}
                     <div className="grid grid-cols-2 gap-3 mb-6">
                       <div className="flex items-center space-x-2 p-2 bg-lagoon-50 rounded-lg">
                         <div className="w-8 h-8 bg-lagoon-100 rounded-full flex items-center justify-center">
                           <span className="text-lagoon-600 text-lg">❄️</span>
                         </div>
                         <span className="text-xs font-medium text-gray-700">Climatisation</span>
                       </div>
                       <div className="flex items-center space-x-2 p-2 bg-mangrove-50 rounded-lg">
                         <div className="w-8 h-8 bg-mangrove-100 rounded-full flex items-center justify-center">
                           <span className="text-mangrove-600 text-lg">🍹</span>
                         </div>
                         <span className="text-xs font-medium text-gray-700">Cocktails Premium</span>
                       </div>
                     </div>
                    
                    <motion.button
                       whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(32, 178, 170, 0.3)" }}
                       whileTap={{ scale: 0.95 }}
                       onClick={() => window.open('https://wa.me/22577487535?text=Bonjour, je souhaite réserver une table au Bar Le Crabe Poillu...', '_blank')}
                       className="group relative bg-gradient-to-r from-lagoon-500 via-lagoon-400 to-mangrove-400 text-white px-6 py-3 rounded-xl font-semibold overflow-hidden transition-all duration-300 w-fit"
                     >
                       <span className="relative z-10 flex items-center text-sm">
                         Réserver une table
                         <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                       </span>
                       <div className="absolute inset-0 bg-gradient-to-r from-lagoon-600 to-mangrove-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                     </motion.button>
                  </motion.div>
                  
                  {/* Section image avec effet 3D - 1 colonne */}
                   <motion.div
                     initial={{ opacity: 0, x: 30, rotateY: -15 }}
                     whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                     transition={{ duration: 0.8, delay: 0.4 }}
                     viewport={{ once: true }}
                     className="relative p-4 flex items-center"
                   >
                     <div className="relative group w-full">
                       {/* Image principale avec effet de profondeur */}
                       <div className="relative overflow-hidden rounded-xl transform-gpu group-hover:scale-105 transition-transform duration-500">
                         <img
                           src="/bar.webp"
                           alt="Intérieur du bar Le Crabe Poillu"
                           className="w-full h-full object-cover aspect-[4/3]"
                         />
                         {/* Overlay gradient */}
                         <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10" />
                       </div>
                       
                       {/* Badge flottant avec animation - plus petit */}
                       <motion.div
                         initial={{ opacity: 0, scale: 0.8, y: 20 }}
                         whileInView={{ opacity: 1, scale: 1, y: 0 }}
                         transition={{ duration: 0.6, delay: 0.8 }}
                         viewport={{ once: true }}
                         className="absolute -bottom-2 -right-2 bg-white p-3 rounded-xl shadow-xl border border-gray-100 transform-gpu hover:scale-105 transition-transform duration-300"
                       >
                         <div className="flex items-center space-x-1 mb-1">
                           {[...Array(5)].map((_, i) => (
                             <motion.div
                               key={i}
                               initial={{ opacity: 0, scale: 0 }}
                               whileInView={{ opacity: 1, scale: 1 }}
                               transition={{ duration: 0.3, delay: 1 + i * 0.1 }}
                               viewport={{ once: true }}
                             >
                               <Star className="h-3 w-3 text-yellow-400 fill-current" />
                             </motion.div>
                           ))}
                         </div>
                         <p className="text-gray-700 font-semibold text-xs">Ambiance exceptionnelle</p>
                       </motion.div>
                       
                       {/* Éléments décoratifs flottants */}
                       <div className="absolute top-2 left-2 w-2 h-2 bg-lagoon-400 rounded-full animate-pulse" />
                       <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-tropical-gold rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                     </div>
                   </motion.div>
                </div>
                
                {/* Effet de lueur en bas */}
                 <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-lagoon-300 to-transparent opacity-50" />
               </div>
               
               {/* Ombre portée personnalisée */}
               <div className="absolute inset-0 bg-gradient-to-br from-lagoon-200/20 to-mangrove-200/20 rounded-xl transform translate-y-4 translate-x-2 -z-10 blur-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cocktails Menu */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-playfair font-bold text-mangrove-500 mb-4">
              Nos Cocktails Signature
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez nos créations uniques inspirées des saveurs tropicales
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cocktails.map((cocktail, index) => (
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
                    src={cocktail.image}
                    alt={cocktail.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {cocktail.signature && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-tropical-gold to-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Signature
                    </div>
                  )}
                  {cocktail.nonAlcoholic && (
                    <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Sans alcool
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{cocktail.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{cocktail.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-lagoon-500">
                      {cocktail.price.toLocaleString()} FCFA
                    </span>
                    <div className="flex items-center space-x-2">
                      {cart[cocktail.id] > 0 && (
                        <>
                          <button
                            onClick={() => removeFromCart(cocktail.id)}
                            className="bg-gray-200 text-gray-700 p-2 rounded-full hover:bg-gray-300 transition-colors"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="text-lg font-semibold min-w-[2rem] text-center">
                            {cart[cocktail.id]}
                          </span>
                        </>
                      )}
                      <button
                        onClick={() => addToCart(cocktail.id)}
                        className="bg-gradient-to-r from-lagoon-400 to-lagoon-500 text-white p-2 rounded-full hover:shadow-lg transition-all"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-playfair font-bold text-mangrove-500 mb-4">
              Ambiance du Bar
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez l'atmosphère unique du Crabe Poillu
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Ambiance bar ${index + 1}`}
                  className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Wine className="h-16 w-16 mx-auto mb-6 text-mangrove-500" />
            <h2 className="text-4xl font-playfair font-bold mb-4 text-mangrove-500">
              Rejoignez-nous au Crabe Poillu
            </h2>
            <p className="text-xl mb-8 text-gray-700 max-w-2xl mx-auto">
              Réservez votre table ou privatisez notre espace pour vos événements spéciaux
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <button
                onClick={() => window.open('https://wa.me/22577487535?text=Bonjour, je souhaite réserver une table au Bar Le Crabe Poillu...', '_blank')}
                className="inline-block bg-gradient-to-r from-mangrove-500 to-lagoon-400 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Réserver une table
              </button>
              <button
                onClick={() => window.open('https://wa.me/22577487535?text=Bonjour, je souhaite privatiser le Bar Le Crabe Poillu pour un événement...', '_blank')}
                className="inline-block bg-gradient-to-r from-tropical-gold to-yellow-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Privatisation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bouton Panier Flottant - Mobile */}
      {getTotalItems() > 0 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="fixed bottom-32 right-6 z-40"
        >
          <div className="relative">
            <button
              onClick={() => setShowCart(true)}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              className="bg-gradient-to-r from-lagoon-400 to-lagoon-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all relative"
            >
              <ShoppingCart className="h-6 w-6" />
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold border-2 border-white shadow-lg animate-pulse">
                {getTotalItems()}
              </div>
            </button>

            {/* Tooltip */}
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 10 }}
                  className="absolute bottom-full right-0 mb-3 bg-gray-900 text-white text-xs rounded-lg px-3 py-2 whitespace-nowrap shadow-lg z-50"
                >
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="h-3 w-3" />
                    <span>Finaliser ma commande</span>
                  </div>
                  <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}

      {/* Notification Panier Flottante */}
      <AnimatePresence>
        {showFloatingCart && getTotalItems() > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-48 right-6 z-30 bg-white rounded-2xl shadow-xl border border-gray-200 p-4 max-w-xs"
          >
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 p-2 rounded-full">
                <ShoppingCart className="h-5 w-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Ajouté au panier !</p>
                <p className="text-xs text-gray-500">
                  {getTotalItems()} article{getTotalItems() > 1 ? 's' : ''} • {getTotalPrice().toLocaleString()} FCFA
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Panier - Mobile */}
      <AnimatePresence>
        {showCart && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end"
            onClick={() => setShowCart(false)}
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 500 }}
              className="bg-white w-full max-h-[85vh] rounded-t-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header du modal */}
              <div className="bg-gradient-to-r from-lagoon-400 to-lagoon-500 text-white p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold flex items-center">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Mon Panier ({getTotalItems()})
                  </h3>
                  <button
                    onClick={() => setShowCart(false)}
                    className="text-white hover:text-gray-200 transition-colors p-1"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>

              {/* Contenu du panier */}
              <div className="p-6">
                {Object.entries(cart).length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingCart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500 text-lg">Votre panier est vide</p>
                    <p className="text-gray-400 text-sm">Ajoutez des boissons pour commencer</p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-4 mb-6 max-h-60 overflow-y-auto">
                      {Object.entries(cart).map(([itemId, quantity]) => {
                        const item = cocktails.find(item => item.id === itemId);
                        if (!item) return null;
                        
                        return (
                          <div key={itemId} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                            <div className="flex-1 pr-4">
                              <h4 className="font-medium text-gray-900 text-sm">{item.name}</h4>
                              <p className="text-sm text-gray-500">
                                {item.price.toLocaleString()} FCFA × {quantity}
                              </p>
                              <p className="text-sm font-medium text-lagoon-600">
                                = {(item.price * quantity).toLocaleString()} FCFA
                              </p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => removeFromCart(itemId)}
                                className="bg-gray-200 text-gray-700 p-2 rounded-full hover:bg-gray-300 transition-colors"
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <span className="text-sm font-medium min-w-[1.5rem] text-center">
                                {quantity}
                              </span>
                              <button
                                onClick={() => addToCart(itemId)}
                                className="bg-lagoon-500 text-white p-2 rounded-full hover:bg-lagoon-600 transition-colors"
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Total et bouton de commande */}
                    <div className="border-t border-gray-200 pt-4">
                      <div className="bg-gray-50 rounded-lg p-4 mb-4">
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-semibold text-gray-900">Total:</span>
                          <span className="text-2xl font-bold text-lagoon-500">
                            {getTotalPrice().toLocaleString()} FCFA
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          handleOrder();
                          setShowCart(false);
                        }}
                        className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                      >
                        <MessageCircle className="h-5 w-5" />
                        <span>Commander via WhatsApp</span>
                      </button>
                      <p className="text-xs text-gray-500 text-center mt-2">
                        Vous serez redirigé vers WhatsApp pour finaliser votre commande
                      </p>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BarPage;