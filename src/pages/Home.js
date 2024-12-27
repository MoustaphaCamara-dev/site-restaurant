import React from 'react';
import { motion } from 'framer-motion';
import { HOME_IMAGES } from '../assets/images';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HOME_IMAGES.hero})` }}
        >
          <div className="absolute inset-0 bg-midnight/50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-pearl px-4">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-playfair text-5xl md:text-7xl mb-6"
            >
              L'Essence
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl mb-8"
            >
              Une expérience gastronomique unique
            </motion.p>
          </div>
        </div>
      </section>

      {/* Notre Histoire Section */}
      <section className="py-20 px-4 bg-pearl">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-playfair text-4xl text-midnight mb-6">Notre Histoire</h2>
            <p className="text-slate">
              Au cœur de Paris, L'Essence incarne notre passion pour la gastronomie française.
              Chaque plat raconte une histoire, mêlant tradition et innovation.
            </p>
            <p className="text-slate">
              Notre chef et son équipe sélectionnent les meilleurs produits de saison
              pour vous offrir une expérience culinaire inoubliable.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px]"
          >
            <img 
              src={HOME_IMAGES.interior} 
              alt="Notre restaurant" 
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Notre Chef Section */}
      <section className="py-20 px-4 bg-midnight text-pearl">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[500px]"
          >
            <img 
              src={HOME_IMAGES.chef} 
              alt="Notre Chef" 
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-playfair text-4xl mb-6">Notre Chef</h2>
            <p>
              Avec plus de 15 ans d'expérience dans les plus grandes maisons,
              notre chef apporte sa vision unique de la cuisine française contemporaine.
            </p>
            <p>
              Sa philosophie : sublimer les produits de saison avec créativité
              tout en respectant les traditions culinaires françaises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-copper text-pearl text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="font-playfair text-4xl">Réservez Votre Table</h2>
            <p className="text-xl">
              Vivez une expérience gastronomique unique dans un cadre exceptionnel
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact" className="bg-midnight text-pearl px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors">
                Réserver une Table
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
