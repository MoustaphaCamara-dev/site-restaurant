import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1A202C] text-[#F7F5E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div>
            <h3 className="text-xl font-playfair mb-4">Le Restaurant</h3>
            <p className="text-sm text-[#A9A9A9]">
              Une expérience gastronomique unique au cœur de Paris
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-playfair mb-4">Contact</h3>
            <address className="text-sm text-[#A9A9A9] not-italic">
              <p>123 Avenue des Champs-Élysées</p>
              <p>75008 Paris, France</p>
              <p className="mt-2">Tél : 01 23 45 67 89</p>
              <p>Email : contact@lerestaurant.fr</p>
            </address>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-playfair mb-4">Horaires</h3>
            <ul className="text-sm text-[#A9A9A9]">
              <li>Lundi - Vendredi : 12h - 14h30</li>
              <li>19h - 22h30</li>
              <li>Samedi : 19h - 23h</li>
              <li>Dimanche : Fermé</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-playfair mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="hover:text-[#A3C1AD] transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                 className="hover:text-[#A3C1AD] transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                 className="hover:text-[#A3C1AD] transition-colors">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-[#A9A9A9]">
              © 2024 Le Restaurant. Tous droits réservés.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/mentions-legales" className="text-sm text-[#A9A9A9] hover:text-[#A3C1AD]">
                Mentions légales
              </Link>
              <Link to="/politique-confidentialite" className="text-sm text-[#A9A9A9] hover:text-[#A3C1AD]">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
