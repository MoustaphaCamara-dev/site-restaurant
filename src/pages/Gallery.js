import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_IMAGES } from '../assets/images';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const experiences = [
    {
      title: "L'Ambiance",
      description: "Une atmosphère élégante et chaleureuse, où chaque détail a été pensé pour votre confort",
      image: EXPERIENCE_IMAGES.salle
    },
    {
      title: "La Terrasse",
      description: "Un espace extérieur paisible pour profiter des beaux jours",
      image: EXPERIENCE_IMAGES.terrasse
    },
    {
      title: "Les Détails",
      description: "Une décoration raffinée qui sublime votre expérience",
      image: EXPERIENCE_IMAGES.detail
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
          L'Expérience
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl"
        >
          Découvrez l'art de vivre à la française
        </motion.p>
      </header>

      {/* Galerie d'expériences */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-lg shadow-xl"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="font-playfair text-2xl text-pearl mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-pearl/90">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Section Citation */}
      <section className="bg-copper text-pearl py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <blockquote className="font-playfair text-3xl italic">
              "La gastronomie est l'art de transformer des moments en souvenirs"
            </blockquote>
            <p className="text-xl">
              - L'équipe de L'Essence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section Réservation */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="font-playfair text-4xl text-midnight">
              Vivez l'Expérience
            </h2>
            <p className="text-slate text-xl">
              Réservez votre table et laissez-nous créer un moment inoubliable
            </p>
            <Link to="/contact" className="bg-midnight text-pearl px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors">
              Réserver une Table
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
