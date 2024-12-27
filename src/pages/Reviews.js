import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sophie Martin",
      rating: 5,
      date: "Décembre 2023",
      comment: "Une expérience gastronomique exceptionnelle ! Les saveurs sont parfaitement maîtrisées et le service est impeccable. Je recommande particulièrement le filet de bœuf Rossini.",
      image: "/images/avatars/avatar1.jpg"
    },
    {
      id: 2,
      name: "Jean Dupont",
      rating: 5,
      date: "Novembre 2023",
      comment: "Le cadre est magnifique et l'ambiance très raffinée. Les plats sont non seulement délicieux mais aussi présentés avec beaucoup d'élégance. Une soirée mémorable !",
      image: "/images/avatars/avatar2.jpg"
    },
    {
      id: 3,
      name: "Marie Lambert",
      rating: 5,
      date: "Octobre 2023",
      comment: "La carte des vins est impressionnante et le sommelier de très bon conseil. Le menu dégustation était une véritable découverte gustative.",
      image: "/images/avatars/avatar3.jpg"
    }
  ];

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <div className="pt-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-playfair text-center text-primary mb-16"
        >
          Avis de nos Clients
        </motion.h1>

        {/* Note moyenne */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center space-x-2 mb-4">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={index < Math.round(averageRating) ? "text-yellow-400" : "text-gray-300"}
                size={24}
              />
            ))}
          </div>
          <p className="text-lg text-smoke">
            Note moyenne : {averageRating.toFixed(1)}/5 basée sur {reviews.length} avis
          </p>
        </motion.div>

        {/* Liste des avis */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-playfair text-lg text-primary">{review.name}</h3>
                  <p className="text-smoke text-sm">{review.date}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-400" />
                ))}
              </div>

              <div className="relative">
                <FaQuoteLeft className="text-olive opacity-20 text-4xl absolute -top-2 -left-2" />
                <p className="text-smoke relative z-10 pl-8">
                  {review.comment}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
