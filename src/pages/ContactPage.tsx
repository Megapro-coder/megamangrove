import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, MessageCircle } from 'lucide-react';

const ContactPage = () => {
  const [formDataWhatsApp, setFormDataWhatsApp] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'general',
    message: ''
  });

  const [formDataEmail, setFormDataEmail] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'general',
    message: ''
  });

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Adresse',
      details: [
        'Restaurant Hôtel La Mangrove',
        'Abatta Village, Abatta',
        'Côte d\'Ivoire'
      ]
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Téléphones',
      details: [
        '+225 77 48 75 35',
        '+225 05 850 90 464'
      ]
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      details: [
        'hotelmangroveabatta@gmail.com'
      ]
    }
  ];

  const schedules = [
    {
      service: 'Restaurant',
      hours: '11h00 - 23h00',
      icon: '🍽️'
    },
    {
      service: 'Bar Le Crabe Poillu',
      hours: '16h00 - 02h00',
      icon: '🍹'
    },
    {
      service: 'Réception Hôtel',
      hours: '24h/24',
      icon: '🏨'
    }
  ];

  const inquiryTypes = [
    { value: 'general', label: 'Information générale' },
    { value: 'restaurant', label: 'Réservation restaurant' },
    { value: 'hotel', label: 'Réservation hôtel' },
    { value: 'event', label: 'Événement privé' }
  ];

  const handleInputChangeWhatsApp = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormDataWhatsApp({
      ...formDataWhatsApp,
      [e.target.name]: e.target.value
    });
  };

  const handleInputChangeEmail = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormDataEmail({
      ...formDataEmail,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Bonjour,

Nom: ${formDataWhatsApp.name}
Email: ${formDataWhatsApp.email}
Téléphone: ${formDataWhatsApp.phone}
Type de demande: ${inquiryTypes.find(type => type.value === formDataWhatsApp.type)?.label}

Message:
${formDataWhatsApp.message}

Merci de me recontacter.`;

    window.open(`https://wa.me/22577487535?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleSubmitEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = `Demande: ${inquiryTypes.find(type => type.value === formDataEmail.type)?.label}`;
    const body = `Bonjour,

Nom: ${formDataEmail.name}
Email: ${formDataEmail.email}
Téléphone: ${formDataEmail.phone}
Type de demande: ${inquiryTypes.find(type => type.value === formDataEmail.type)?.label}

Message:
${formDataEmail.message}

Cordialement,
${formDataEmail.name}`;

    window.open(`mailto:hotelmangroveabatta@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_self');
  };

  const openGoogleMaps = () => {
    // Using the Google Maps Plus Code: 83JX+V6 Abidjan
    const plusCode = '83JX+V6 Abidjan';
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(plusCode)}`, '_blank');
  };

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
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Contactez-nous
            </h1>
            <p className="text-xl text-gray-200">
              Nous sommes là pour répondre à toutes vos questions et vous accompagner
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h2 className="text-3xl font-playfair font-bold text-mangrove-500 mb-6">
                Informations de Contact
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md"
                  >
                    <div className="bg-gradient-to-r from-lagoon-400 to-lagoon-500 text-white p-3 rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Horaires */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-playfair font-bold text-mangrove-500 mb-6">
                Nos Horaires
              </h3>
              
              <div className="space-y-4">
                {schedules.map((schedule, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{schedule.icon}</span>
                      <span className="font-medium text-gray-900">{schedule.service}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-lagoon-400" />
                      <span className="text-lagoon-600 font-medium">{schedule.hours}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-playfair font-bold text-mangrove-500 mb-6">
                Suivez-nous
              </h3>
              
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/profile.php?id=100064740911864&locale=fr_FR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-lg hover:shadow-lg transition-all"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </motion.div>

            {/* Map with Google Maps Screenshot */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 p-6 pb-4">Notre Localisation</h3>
              
              {/* Google Maps Screenshot as Background */}
              <div 
                className="relative h-64 bg-cover bg-center cursor-pointer group"
                style={{
                  backgroundImage: 'url(/Vue3.webp)'
                }}
                onClick={openGoogleMaps}
              >
                {/* Overlay with hover effect */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-4 text-center">
                    <MapPin className="h-8 w-8 text-lagoon-500 mx-auto mb-2" />
                    <p className="text-gray-800 font-medium">Cliquez pour ouvrir dans Google Maps</p>
                  </div>
                </div>
                
                {/* Location marker overlay */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-red-500 text-white p-2 rounded-full shadow-lg animate-pulse">
                    <MapPin className="h-6 w-6" />
                  </div>
                </div>
              </div>
              
              {/* Information below the map */}
              <div className="p-6 pt-4">
                <p className="text-gray-700 mb-4">
                  Restaurant Hôtel La Mangrove, situé au cœur d'Abatta Village, facilement accessible depuis les principales routes.
                </p>
                <button
                  onClick={openGoogleMaps}
                  className="w-full bg-gradient-to-r from-lagoon-400 to-lagoon-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                >
                  <MapPin className="h-5 w-5" />
                  <span>Voir l'itinéraire complet</span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Contact Forms */}
          <div className="space-y-6">
            {/* WhatsApp Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-green-500 p-2 rounded-lg">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-playfair font-bold text-mangrove-500">
                  Message via WhatsApp
                </h2>
              </div>
              <p className="text-gray-600 mb-6">Envoyez-nous un message directement sur WhatsApp pour une réponse rapide</p>
              
              <form onSubmit={handleSubmitWhatsApp} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name-wa" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name-wa"
                      name="name"
                      required
                      value={formDataWhatsApp.name}
                      onChange={handleInputChangeWhatsApp}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all text-sm"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email-wa" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email-wa"
                      name="email"
                      required
                      value={formDataWhatsApp.email}
                      onChange={handleInputChangeWhatsApp}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all text-sm"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone-wa" className="block text-sm font-medium text-gray-700 mb-1">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone-wa"
                      name="phone"
                      value={formDataWhatsApp.phone}
                      onChange={handleInputChangeWhatsApp}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all text-sm"
                      placeholder="+225 XX XX XX XX"
                    />
                  </div>
                  <div>
                    <label htmlFor="type-wa" className="block text-sm font-medium text-gray-700 mb-1">
                      Type de demande *
                    </label>
                    <select
                      id="type-wa"
                      name="type"
                      required
                      value={formDataWhatsApp.type}
                      onChange={handleInputChangeWhatsApp}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all appearance-none text-sm"
                    >
                      {inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message-wa" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message-wa"
                    name="message"
                    required
                    rows={4}
                    value={formDataWhatsApp.message}
                    onChange={handleInputChangeWhatsApp}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all resize-none text-sm"
                    placeholder="Décrivez votre demande en détail..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Envoyer via WhatsApp</span>
                </button>
              </form>
            </motion.div>

            {/* Email Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-500 p-2 rounded-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-playfair font-bold text-mangrove-500">
                  Message par Email
                </h2>
              </div>
              <p className="text-gray-600 mb-6">Envoyez-nous un email pour une demande formelle ou détaillée</p>
              
              <form onSubmit={handleSubmitEmail} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name-email" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name-email"
                      name="name"
                      required
                      value={formDataEmail.name}
                      onChange={handleInputChangeEmail}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all text-sm"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email-email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email-email"
                      name="email"
                      required
                      value={formDataEmail.email}
                      onChange={handleInputChangeEmail}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all text-sm"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone-email" className="block text-sm font-medium text-gray-700 mb-1">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone-email"
                      name="phone"
                      value={formDataEmail.phone}
                      onChange={handleInputChangeEmail}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all text-sm"
                      placeholder="+225 XX XX XX XX"
                    />
                  </div>
                  <div>
                    <label htmlFor="type-email" className="block text-sm font-medium text-gray-700 mb-1">
                      Type de demande *
                    </label>
                    <select
                      id="type-email"
                      name="type"
                      required
                      value={formDataEmail.type}
                      onChange={handleInputChangeEmail}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all appearance-none text-sm"
                    >
                      {inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message-email" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message-email"
                    name="message"
                    required
                    rows={4}
                    value={formDataEmail.message}
                    onChange={handleInputChangeEmail}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all resize-none text-sm"
                    placeholder="Décrivez votre demande en détail..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2"
                >
                  <Mail className="h-5 w-5" />
                  <span>Envoyer par Email</span>
                </button>
              </form>
            </motion.div>

            {/* Note informative */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-lagoon-50 rounded-lg p-4"
            >
              <p className="text-sm text-lagoon-700">
                <strong>💡 Conseil :</strong> Pour une réponse plus rapide, utilisez WhatsApp. 
                Pour les demandes formelles ou détaillées, privilégiez l'email.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;