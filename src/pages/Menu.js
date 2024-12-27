import React from 'react';
import { motion } from 'framer-motion';
import { MENU_IMAGES } from '../assets/images';
import { Link } from 'react-router-dom';

const Menu = () => {
  const menuItems = [
    {
      category: "Entrées",
      items: [
        {
          name: "Foie Gras Maison",
          description: "Foie gras mi-cuit, chutney de figues et pain brioché toasté",
          price: "28€",
          image: MENU_IMAGES.entree
        },
        {
          name: "Carpaccio de Saint-Jacques",
          description: "Saint-Jacques fraîches, huile d'olive citronnée, fleur de sel",
          price: "26€"
        },
        {
          name: "Velouté de Saison",
          description: "Légumes de saison, crème fouettée aux herbes",
          price: "18€"
        }
      ]
    },
    {
      category: "Plats",
      items: [
        {
          name: "Filet de Bœuf Rossini",
          description: "Filet de bœuf, foie gras poêlé, sauce aux truffes",
          price: "42€",
          image: MENU_IMAGES.plat
        },
        {
          name: "Homard Bleu en Deux Services",
          description: "Bisque crémeuse et queue rôtie au beurre demi-sel",
          price: "48€"
        },
        {
          name: "Risotto aux Truffes",
          description: "Riz carnaroli, truffe noire, parmesan 24 mois",
          price: "36€"
        }
      ]
    },
    {
      category: "Desserts",
      items: [
        {
          name: "Soufflé au Chocolat",
          description: "Chocolat grand cru, glace vanille bourbon",
          price: "16€",
          image: MENU_IMAGES.dessert
        },
        {
          name: "Tarte au Citron Meringuée",
          description: "Citron de Menton, meringue française",
          price: "14€"
        },
        {
          name: "Mille-Feuille Vanille",
          description: "Crème vanille de Madagascar, caramel au beurre salé",
          price: "15€"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-pearl pt-20">
      {/* En-tête */}
      <header className="text-center py-16 bg-midnight text-pearl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-playfair text-5xl mb-4"
        >
          Notre Carte
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl"
        >
          Une cuisine raffinée aux saveurs authentiques
        </motion.p>
      </header>

      {/* Menu */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {menuItems.map((section, index) => (
          <motion.section
            key={section.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="mb-16"
          >
            <h2 className="font-playfair text-3xl text-midnight mb-8 text-center">
              {section.category}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {section.items.map((item, itemIndex) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: itemIndex * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-playfair text-xl text-midnight">
                        {item.name}
                      </h3>
                      <span className="text-copper font-semibold">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-slate text-sm">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>

      {/* Boissons */}
      <section className="bg-midnight text-pearl py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-3xl mb-4">Notre Cave</h2>
            <p>Une sélection raffinée de vins et spiritueux</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-pearl/10 rounded-lg p-6 backdrop-blur-sm"
            >
              <img
                src={MENU_IMAGES.cocktail}
                alt="Notre sélection de vins"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="font-playfair text-xl mb-4">Carte des Vins</h3>
              <p className="text-pearl/80">
                Découvrez notre cave exceptionnelle, avec plus de 200 références
                soigneusement sélectionnées par notre sommelier.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-pearl/10 rounded-lg p-6 backdrop-blur-sm"
            >
              <h3 className="font-playfair text-xl mb-4">Cocktails Signature</h3>
              <ul className="space-y-4">
                <li>
                  <div className="flex justify-between mb-1">
                    <span>L'Essence Royale</span>
                    <span>16€</span>
                  </div>
                  <p className="text-pearl/80 text-sm">
                    Champagne, liqueur de violette, essence de rose
                  </p>
                </li>
                <li>
                  <div className="flex justify-between mb-1">
                    <span>Le Secret du Chef</span>
                    <span>14€</span>
                  </div>
                  <p className="text-pearl/80 text-sm">
                    Gin infusé aux herbes du jardin, tonic artisanal
                  </p>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      <div className="text-center mb-12">
        <Link to="/contact" className="bg-midnight text-pearl px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors">
          Réserver une Table
        </Link>
      </div>
    </div>
  );
};

export default Menu;
