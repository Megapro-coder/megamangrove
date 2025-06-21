import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Facebook, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showReservationDropdown, setShowReservationDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Restaurant', path: '/restaurant' },
    { name: 'Hôtel', path: '/hotel' },
    { name: 'Bar', path: '/bar' },
    { name: 'Espaces Événements', path: '/events' },
    { name: 'Galerie', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const reservationSubmenu = [
    { name: 'Table Restaurant', href: 'https://wa.me/22577487535?text=Bonjour, je souhaite réserver une table pour...' },
    { name: 'Chambre Hôtel', href: 'https://wa.me/22577487535?text=Bonjour, je souhaite réserver une chambre...' },
    { name: 'Espace Bar', href: 'https://wa.me/22577487535?text=Bonjour, je souhaite réserver un espace au bar...' },
    { name: 'Événement Privé', href: 'https://wa.me/22577487535?text=Bonjour, je souhaite organiser un événement...' }
  ];

  const openWhatsApp = (message: string) => {
    window.open(`https://wa.me/22577487535?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo - Encore plus agrandi */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/Logo.webp" 
              alt="La Mangrove Logo" 
              className="h-24 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
            <div className="hidden sm:block">
              <h2 className="text-xl font-playfair font-bold text-mangrove-500">La Mangrove</h2>
              <p className="text-xs text-lagoon-400 -mt-1">Restaurant • Hôtel</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-lagoon-400'
                    : 'text-gray-700 hover:text-lagoon-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Social & Reservation */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=100064740911864&locale=fr_FR"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="tel:+22577487535"
              className="text-gray-600 hover:text-mangrove-500 transition-colors"
            >
              <Phone className="h-5 w-5" />
            </a>
            <div
              className="relative"
              onMouseEnter={() => setShowReservationDropdown(true)}
              onMouseLeave={() => setShowReservationDropdown(false)}
            >
              <button className="bg-gradient-to-r from-tropical-gold to-yellow-500 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all flex items-center space-x-1">
                <span>RÉSERVER</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <AnimatePresence>
                {showReservationDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2"
                  >
                    {reservationSubmenu.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-lagoon-50 hover:text-lagoon-600 transition-colors"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-lagoon-400 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-100"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2 text-base font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'text-lagoon-400 bg-lagoon-50'
                        : 'text-gray-700 hover:text-lagoon-400 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-4 py-2">
                  <button
                    onClick={() => openWhatsApp('Bonjour, je souhaite faire une réservation...')}
                    className="w-full bg-gradient-to-r from-tropical-gold to-yellow-500 text-white px-6 py-3 rounded-full font-medium"
                  >
                    RÉSERVER
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;