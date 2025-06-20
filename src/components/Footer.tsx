import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-mangrove-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description - Logo encore plus agrandi */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/Logo.webp" 
                alt="La Mangrove Logo" 
                className="h-20 w-auto object-contain bg-white rounded-lg p-1 transition-transform duration-300 hover:scale-105"
              />
              <div>
                <h3 className="text-xl font-playfair font-bold">La Mangrove</h3>
                <p className="text-sm text-mangrove-200">Restaurant • Hôtel</p>
              </div>
            </div>
            <p className="text-mangrove-200 text-sm leading-relaxed">
              Où la nature rencontre l'excellence. Découvrez l'art de vivre tropical dans un cadre
              authentiquement ivoirien.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.facebook.com/profile.php?id=100064740911864&locale=fr_FR"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-mangrove-700 p-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-mangrove-700 p-2 rounded-lg hover:bg-pink-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-mangrove-200 hover:text-lagoon-300 transition-colors">Accueil</Link></li>
              <li><Link to="/restaurant" className="text-mangrove-200 hover:text-lagoon-300 transition-colors">Restaurant</Link></li>
              <li><Link to="/hotel" className="text-mangrove-200 hover:text-lagoon-300 transition-colors">Hôtel</Link></li>
              <li><Link to="/bar" className="text-mangrove-200 hover:text-lagoon-300 transition-colors">Bar Le Crabe Poillu</Link></li>
              <li><Link to="/events" className="text-mangrove-200 hover:text-lagoon-300 transition-colors">Espaces Événements</Link></li>
              <li><Link to="/gallery" className="text-mangrove-200 hover:text-lagoon-300 transition-colors">Galerie</Link></li>
              <li><Link to="/contact" className="text-mangrove-200 hover:text-lagoon-300 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-lagoon-400 mt-0.5 flex-shrink-0" />
                <p className="text-mangrove-200 text-sm">
                  Restaurant Hôtel La Mangrove<br />
                  Abatta Village, Abatta<br />
                  Côte d'Ivoire
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-lagoon-400" />
                <div className="text-mangrove-200 text-sm">
                  <p>+225 77 48 75 35</p>
                  <p>+225 05 850 90 464</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-lagoon-400" />
                <p className="text-mangrove-200 text-sm">hotelmangroveabatta@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Horaires</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-lagoon-400 mt-0.5" />
                <div className="text-mangrove-200 text-sm">
                  <p className="font-medium">Restaurant</p>
                  <p>11h00 - 23h00</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-lagoon-400 mt-0.5" />
                <div className="text-mangrove-200 text-sm">
                  <p className="font-medium">Bar Le Crabe Poillu</p>
                  <p>16h00 - 02h00</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-lagoon-400 mt-0.5" />
                <div className="text-mangrove-200 text-sm">
                  <p className="font-medium">Réception Hôtel</p>
                  <p>24h/24</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-mangrove-700 mt-8 pt-8 text-center">
          <p className="text-mangrove-300 text-sm">
            © 2024 Restaurant Hôtel La Mangrove. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;