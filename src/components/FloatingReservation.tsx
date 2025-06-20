import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Phone, Mail } from 'lucide-react';

const FloatingReservation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const reservationOptions = [
    {
      title: 'Table Restaurant',
      description: 'Réservez votre table',
      icon: '🍽️',
      message: 'Bonjour, je souhaite réserver une table pour...'
    },
    {
      title: 'Chambre Hôtel',
      description: 'Réservez votre séjour',
      icon: '🏨',
      message: 'Bonjour, je souhaite réserver une chambre...'
    },
    {
      title: 'Espace Bar',
      description: 'Le Crabe Poillu',
      icon: '🍹',
      message: 'Bonjour, je souhaite réserver un espace au bar Le Crabe Poillu...'
    },
    {
      title: 'Événement Privé',
      description: 'Organisez votre événement',
      icon: '🎉',
      message: 'Bonjour, je souhaite organiser un événement privé...'
    }
  ];

  const openWhatsApp = (message: string) => {
    window.open(`https://wa.me/22577487535?text=${encodeURIComponent(message)}`, '_blank');
  };

  const callPhone = () => {
    window.open('tel:+22577487535', '_self');
  };

  const sendEmail = () => {
    window.open('mailto:hotelmangroveabatta@gmail.com?subject=Demande de réservation', '_self');
  };

  return (
    <>
      {/* Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-playfair font-bold text-mangrove-500">
                  Réservation Rapide
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="space-y-4">
                {/* WhatsApp Options */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                    Via WhatsApp
                  </h4>
                  {reservationOptions.map((option) => (
                    <button
                      key={option.title}
                      onClick={() => {
                        openWhatsApp(option.message);
                        setIsOpen(false);
                      }}
                      className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-green-400 hover:bg-green-50 transition-all group"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{option.icon}</span>
                        <div>
                          <h5 className="font-medium text-gray-900 group-hover:text-green-600">
                            {option.title}
                          </h5>
                          <p className="text-sm text-gray-500">{option.description}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Divider */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Ou contactez-nous</span>
                  </div>
                </div>

                {/* Other Contact Options */}
                <div className="space-y-3">
                  <button
                    onClick={() => {
                      callPhone();
                      setIsOpen(false);
                    }}
                    className="w-full flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all"
                  >
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">+225 77 48 75 35</span>
                  </button>
                  <button
                    onClick={() => {
                      sendEmail();
                      setIsOpen(false);
                    }}
                    className="w-full flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:border-purple-400 hover:bg-purple-50 transition-all"
                  >
                    <Mail className="h-5 w-5 text-purple-600" />
                    <span className="text-gray-700">hotelmangroveabatta@gmail.com</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingReservation;