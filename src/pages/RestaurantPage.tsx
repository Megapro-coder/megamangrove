import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Plus, Minus, ShoppingCart, Star, ChevronDown, ChevronUp, X, MessageCircle } from 'lucide-react';

interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
  description?: string;
  image?: string;
  popular?: boolean;
}

const RestaurantPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 20000 });
  const [cart, setCart] = useState<{[key: string]: number}>({});
  const [showCart, setShowCart] = useState(false);
  const [showFloatingCart, setShowFloatingCart] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<{[key: string]: boolean}>({
    entrees: true,
    plats: true,
    garnitures: true,
    desserts: true,
    boissons: true,
  })

  const menuItems: MenuItem[] = [
    // ENTRÉES & SALADES
    { id: '1', name: 'Salade Niçoise', price: 4000, category: 'entrees', image: '/SaladeNicoise.webp' },
    { id: '2', name: 'Salade Composée', price: 3000, category: 'entrees', image: '/SaladeComposée.webp' },
    { id: '3', name: 'Gambas', price: 8000, category: 'entrees', popular: true, image: '/SaladeGambas.webp' },
    { id: '4', name: 'Écrevisses', price: 6000, category: 'entrees', image: '/SaladeEcrevise.webp' },
    { id: '5', name: 'Gésier', price: 5000, category: 'entrees', image: '/saladeGesiers.webp' },

    // PLATS DE RÉSISTANCES
    { id: '6', name: 'Poulet Rôti', price: 8000, category: 'plats', image: '/PouletRoti.webp' },
    { id: '7', name: 'Poulet fourré aux pommes de terre', price: 12000, category: 'plats', image: '/Pouletfourrépomme.webp' },
    { id: '8', name: 'Soupe du pêcheur', price: 12000, category: 'plats', popular: true, image: '/Soupepecheur.webp' },
    { id: '9', name: 'Caille (Braisé / Sauté)', price: 6000, category: 'plats', image: '/Caillebraise.webp' },
    { id: '10', name: 'Caille rôtie aux petits pois', price: 7000, category: 'plats', image: '/cailerotipetipois.webp' },
    { id: '11', name: 'Escargot Kedjénou / Soutrou / Sauté', price: 8000, category: 'plats', image: '/Escargokedjenou.webp' },
    { id: '12', name: 'Escargot Brochette', price: 6000, category: 'plats', description: '4000 / 8000 FCFA', image: '/EscargoBrochette.webp' },
    { id: '13', name: 'Brochette de filet de Mérou', price: 6000, category: 'plats', description: '4000 / 8000 FCFA', image: '/BrochetteMerou.webp' },
    { id: '14', name: 'Lapin Entier (Kedjénou / Braisé / Sauté / au four)', price: 15000, category: 'plats', image: '/LapinBraise.webp' },
    { id: '15', name: '1/2 Lapin (Kedjénou / Braisé / Sauté / au four)', price: 8000, category: 'plats', image: '/LapinBraise.webp' },
    { id: '16', name: 'Pintade (Kedjénou / Braisé / Sauté / Frit)', price: 10000, category: 'plats', image: '/PintadeBraise.webp' },
    { id: '17', name: '1/2 Pintade (Kedjénou / Braisé / Sauté / Frit)', price: 5000, category: 'plats', image: '/PintadeBraise.webp' },
    { id: '18', name: 'Pondeuse (Kedjénou / Braisé / Sauté / Frit)', price: 10000, category: 'plats', image: '/pondeusekedjenou.webp' },
    { id: '19', name: '1/2 Pondeuse (Kedjénou / Braisé / Sauté / Frit)', price: 5000, category: 'plats', image: '/pondeusekedjenou.webp' },
    { id: '20', name: 'Poulet (Kedjénou / Braisé / Sauté / Frit / Pané)', price: 8000, category: 'plats', image: '/pondeusekedjenou.webp' },
    { id: '21', name: 'Poisson Mâchoiron Soupe / Braisé', price: 9500, category: 'plats', description: '7000 / 12000 FCFA', image: '/SoupeMachoiron.webp' },
    { id: '22', name: 'Poisson Sole (Frit / Braisé)', price: 11000, category: 'plats', description: '7000 / 15000 FCFA', image: '/PoissonSol.webp' },
    { id: '23', name: 'Poisson Sosso (Frit / Braisé / soupe)', price: 11500, category: 'plats', description: '8000 / 15000 FCFA', image: '/PoissonSosso.webp' },
    { id: '24', name: 'Poisson Carpe (Frit / Braisé / soupe)', price: 11000, category: 'plats', description: '7000 / 15000 FCFA', image: '/PoissonCarpe.webp' },
    { id: '25', name: 'Bœuf (Sauté / Braisé / soupe)', price: 6000, category: 'plats', image: '/BoeufSoupe.webp' },
    { id: '26', name: 'Steak de Boeuf', price: 7000, category: 'plats', image: '/BoeuSteak.webp' },
    { id: '27', name: 'Soupe de Boeuf', price: 7000, category: 'plats', image: '/BoeufSoupe.webp' },
    { id: '28', name: 'Cabri (Sauté / Braisé / soupe)', price: 6000, category: 'plats', image: '/Cabri.webp' },
    { id: '29', name: 'Mouton (Sauté / Braisé / soupe)', price: 6000, category: 'plats', image: '/Mouton.webp' },
    { id: '30', name: 'Calamar (Sauté / Frit)', price: 8000, category: 'plats', image: '/Calamar.webp' },
    { id: '31', name: 'Gambas (Sauté / Braisé / Grillé)', price: 8000, category: 'plats', popular: true, image: '/GambaSaute.webp' },
    { id: '32', name: 'Brochette de Gesier', price: 6000, category: 'plats', description: '4000 / 8000 FCFA', image: '/GesiersBrochette.webp' },
    { id: '33', name: 'Sauté de Gesier', price: 8000, category: 'plats', image: '/GesierSaute.webp' },





    // GARNITURES
    { id: '37', name: 'Alloco', price: 1000, category: 'garnitures', image: '/Alloco.webp' },
    { id: '38', name: 'Riz', price: 1000, category: 'garnitures', image: '/Riz.webp' },
    { id: '39', name: 'Patate', price: 1000, category: 'garnitures', image: '/Patate.webp' },
    { id: '40', name: 'Couscous', price: 1000, category: 'garnitures', image: '/Couscous.webp' },
    { id: '41', name: 'Frite', price: 1000, category: 'garnitures', image: '/Frite.webp' },
    { id: '42', name: 'Pomme de terre sautée', price: 1000, category: 'garnitures', image: '/PommeSaute.webp' },
    { id: '43', name: 'Attiéké', price: 500, category: 'garnitures', image: '/Attieke.webp' },
    { id: '44', name: 'Attiéké teinté', price: 1000, category: 'garnitures', image: '/Attieketeinte.webp' },
    { id: '45', name: 'Igname (Frit / Vapeur)', price: 1000, category: 'garnitures', image: '/Igname.webp' },
    { id: '46', name: 'Igname arraignée', price: 2000, category: 'garnitures', image: '/IgnameArraigne.webp' },

    // DESSERTS & SWEETS
    { id: '47', name: 'Fruit de saison', price: 1000, category: 'desserts', image: '/Fruitsaison.webp' },
    { id: '48', name: 'Flan', price: 1000, category: 'desserts', image: '/Flan.webp' },
    { id: '49', name: 'Gateau', price: 1500, category: 'desserts', image: '/Gateau.webp' },
    { id: '50', name: 'Glace', price: 1000, category: 'desserts', image: '/Glace.webp' },

    // BOISSONS
    { id: '61', name: 'Café/Thé', price: 500, category: 'boissons', image: '/CafeThe.webp' },
    { id: '62', name: 'Heineken', price: 1500, category: 'boissons', image: '/heineken.webp' },
    { id: '63', name: 'Despe', price: 1500, category: 'boissons', image: '/Despe.webp' },
    { id: '64', name: 'Autres Bières', price: 1000, category: 'boissons', image: '/BiereAutres.webp' },
    { id: '65', name: 'Sucrerie', price: 1000, category: 'boissons', image: '/Sucrerie.webp' },
    { id: '66', name: 'Cannette Energy', price: 1000, category: 'boissons', image: '/CannetteEnergy.webp' },
    { id: '67', name: 'Eau Minérale', price: 1000, category: 'boissons', image: '/EauMinerale.webp' },
    { id: '68', name: 'Vin bouché', price: 10500, category: 'boissons', description: 'de 9000 à 12000 FCFA', image: '/VinBouche.webp' },
    { id: '69', name: 'Bières à pression', price: 2000, category: 'boissons', image: '/BierePression.webp' },
    { id: '70', name: 'Cocktail alcoolisé', price: 2500, category: 'boissons', image: '/Cocktail.webp' },
    { id: '71', name: 'Cocktail non alcoolisé', price: 2000, category: 'boissons', image: '/CocktailNonALCO.webp' },
    { id: '72', name: 'Vodka', price: 3000, category: 'boissons', image: '/Vodka.webp' },
    { id: '73', name: 'Liqueur', price: 2500, category: 'boissons', description: 'à partir de 2500 FCFA', image: '/Liqueur.webp' },
    { id: '74', name: 'Jus', price: 1000, category: 'boissons', popular: true, image: '/Jus.webp' }
  ];

  const categories = [
    { id: 'all', name: 'Tous les plats', icon: '🍽️' },
    { id: 'entrees', name: 'Entrées & Salades', icon: '🥗' },
    { id: 'plats', name: 'Plats de Résistances', icon: '🍲' },
    { id: 'garnitures', name: 'Garnitures', icon: '🥘' },
    { id: 'desserts', name: 'Desserts & Sweets', icon: '🍰' },
    { id: 'boissons', name: 'Boissons', icon: '🥤' },
  ]

  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesPrice = item.price >= priceRange.min && item.price <= priceRange.max;
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchTerm, selectedCategory, priceRange, menuItems]);

  // Group items by category for organized display
  const itemsByCategory = useMemo(() => {
    const grouped: {[key: string]: MenuItem[]} = {};
    
    // If showing all categories or searching, group all filtered items
    if (selectedCategory === 'all' || searchTerm) {
      categories.forEach(category => {
        if (category.id !== 'all') {
          grouped[category.id] = filteredItems.filter(item => item.category === category.id);
        }
      });
    } else {
      // If a specific category is selected, only show that category
      grouped[selectedCategory] = filteredItems;
    }
    
    return grouped;
  }, [filteredItems, selectedCategory, searchTerm, categories]);

  const addToCart = (itemId: string) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
    
    // Show floating cart briefly when item is added
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
      const item = menuItems.find(item => item.id === itemId);
      return total + (item ? item.price * quantity : 0);
    }, 0);
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((total, quantity) => total + quantity, 0);
  };

  const handleOrder = () => {
    const orderText = Object.entries(cart).map(([itemId, quantity]) => {
      const item = menuItems.find(item => item.id === itemId);
      return `${quantity}x ${item?.name} (${item?.price} FCFA)`;
    }).join('\n');
    
    const totalPrice = getTotalPrice();
    const message = `Bonjour, je souhaite commander:\n\n${orderText}\n\nTotal: ${totalPrice.toLocaleString()} FCFA\n\nMerci !`;
    
    window.open(`https://wa.me/22577487535?text=${encodeURIComponent(message)}`, '_blank');
  };

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const getCategoryName = (categoryId: string) => {
    return categories.find(cat => cat.id === categoryId)?.name || categoryId;
  };

  const getCategoryIcon = (categoryId: string) => {
    return categories.find(cat => cat.id === categoryId)?.icon || '🍽️';
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-r from-mangrove-500 to-lagoon-400">
        <div className="absolute inset-0 bg-black bg-opacity-30" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Notre Restaurant
            </h1>
            <p className="text-xl text-gray-200">
              Découvrez les saveurs authentiques de la Côte d'Ivoire
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Filters Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-6 shadow-lg mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un plat..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lagoon-400 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lagoon-400 focus:border-transparent appearance-none"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.icon} {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Prix max: {priceRange.max.toLocaleString()} FCFA
              </label>
              <input
                type="range"
                min="0"
                max="20000"
                step="500"
                value={priceRange.max}
                onChange={(e) => setPriceRange(prev => ({ ...prev, max: parseInt(e.target.value) }))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Menu Items - Organized by Category */}
          <div className="lg:w-2/3">
            {selectedCategory === 'all' || searchTerm ? (
              // Show all categories when "all" is selected or when searching
              <div className="space-y-8">
                {Object.entries(itemsByCategory).map(([categoryId, items]) => {
                  if (items.length === 0) return null;
                  
                  return (
                    <motion.div
                      key={categoryId}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden"
                    >
                      {/* Category Header */}
                      <div 
                        className="bg-gradient-to-r from-mangrove-500 to-lagoon-400 text-white p-6 cursor-pointer"
                        onClick={() => toggleCategory(categoryId)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{getCategoryIcon(categoryId)}</span>
                            <h2 className="text-2xl font-playfair font-bold">
                              {getCategoryName(categoryId)}
                            </h2>
                            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                              {items.length} plat{items.length > 1 ? 's' : ''}
                            </span>
                          </div>
                          {expandedCategories[categoryId] ? (
                            <ChevronUp className="h-6 w-6" />
                          ) : (
                            <ChevronDown className="h-6 w-6" />
                          )}
                        </div>
                      </div>

                      {/* Category Items */}
                      {expandedCategories[categoryId] && (
                        <div className="p-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {items.map((item, index) => (
                              <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                              >
                                <div className="relative">
                                  <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-40 object-cover"
                                  />
                                  {item.popular && (
                                    <div className="absolute top-3 left-3 bg-gradient-to-r from-tropical-gold to-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                                      <Star className="h-3 w-3 mr-1" />
                                      Populaire
                                    </div>
                                  )}
                                </div>
                                <div className="p-4">
                                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
                                  {item.description && (
                                    <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                                  )}
                                  <div className="flex items-center justify-between">
                                    <span className="text-xl font-bold text-lagoon-500">
                                      {item.price.toLocaleString()} FCFA
                                    </span>
                                    <div className="flex items-center space-x-2">
                                      {cart[item.id] > 0 && (
                                        <>
                                          <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="bg-gray-200 text-gray-700 p-2 rounded-full hover:bg-gray-300 transition-colors"
                                          >
                                            <Minus className="h-4 w-4" />
                                          </button>
                                          <span className="text-lg font-semibold min-w-[2rem] text-center">
                                            {cart[item.id]}
                                          </span>
                                        </>
                                      )}
                                      <button
                                        onClick={() => addToCart(item.id)}
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
                      )}
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              // Show single category when specific category is selected
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-48 object-cover"
                      />
                      {item.popular && (
                        <div className="absolute top-4 left-4 bg-gradient-to-r from-tropical-gold to-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                          <Star className="h-4 w-4 mr-1" />
                          Populaire
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h3>
                      {item.description && (
                        <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                      )}
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-lagoon-500">
                          {item.price.toLocaleString()} FCFA
                        </span>
                        <div className="flex items-center space-x-2">
                          {cart[item.id] > 0 && (
                            <>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="bg-gray-200 text-gray-700 p-2 rounded-full hover:bg-gray-300 transition-colors"
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <span className="text-lg font-semibold min-w-[2rem] text-center">
                                {cart[item.id]}
                              </span>
                            </>
                          )}
                          <button
                            onClick={() => addToCart(item.id)}
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
            )}

            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">Aucun plat ne correspond à vos critères.</p>
              </div>
            )}
          </div>

          {/* Cart Sidebar - Desktop */}
          <div className="hidden lg:block lg:w-1/3">
            <div className="sticky top-24">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold flex items-center">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Panier ({getTotalItems()})
                  </h3>
                </div>

                {Object.entries(cart).length === 0 ? (
                  <p className="text-gray-500 text-center py-8">Votre panier est vide</p>
                ) : (
                  <>
                    <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                      {Object.entries(cart).map(([itemId, quantity]) => {
                        const item = menuItems.find(item => item.id === itemId);
                        if (!item) return null;
                        
                        return (
                          <div key={itemId} className="flex items-center justify-between py-3 border-b border-gray-100">
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900">{item.name}</h4>
                              <p className="text-sm text-gray-500">
                                {item.price.toLocaleString()} FCFA × {quantity}
                              </p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => removeFromCart(itemId)}
                                className="text-gray-400 hover:text-red-500 transition-colors p-1"
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <span className="text-sm font-medium min-w-[1.5rem] text-center">
                                {quantity}
                              </span>
                              <button
                                onClick={() => addToCart(itemId)}
                                className="text-gray-400 hover:text-lagoon-500 transition-colors p-1"
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-lg font-semibold">Total:</span>
                        <span className="text-2xl font-bold text-lagoon-500">
                          {getTotalPrice().toLocaleString()} FCFA
                        </span>
                      </div>
                      <button
                        onClick={handleOrder}
                        className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                      >
                        <span>Commander via WhatsApp</span>
                      </button>
                    </div>
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Cart Button - Mobile */}
      {getTotalItems() > 0 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="lg:hidden fixed bottom-32 right-6 z-40"
        >
          <div className="relative">
            <button
              onClick={() => setShowCart(true)}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              className="bg-gradient-to-r from-lagoon-400 to-lagoon-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all relative"
            >
              <ShoppingCart className="h-6 w-6" />
              {/* Badge avec couleur plus incitative */}
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold border-2 border-white shadow-lg animate-pulse">
                {getTotalItems()}
              </div>
            </button>

            {/* Tooltip explicatif amélioré */}
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
                  {/* Flèche du tooltip */}
                  <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}

      {/* Floating Cart Notification - Mobile améliorée */}
      <AnimatePresence>
        {showFloatingCart && getTotalItems() > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="lg:hidden fixed bottom-48 right-6 z-30 bg-white rounded-2xl shadow-xl border border-gray-200 p-4 max-w-xs"
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

      {/* Mobile Cart Modal améliorée */}
      <AnimatePresence>
        {showCart && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end"
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
                    <p className="text-gray-400 text-sm">Ajoutez des plats pour commencer</p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-4 mb-6 max-h-60 overflow-y-auto">
                      {Object.entries(cart).map(([itemId, quantity]) => {
                        const item = menuItems.find(item => item.id === itemId);
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

export default RestaurantPage;