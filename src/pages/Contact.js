import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HOME_IMAGES } from '../assets/images';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire soumis:', formData);
    alert('Merci pour votre réservation ! Nous vous contacterons rapidement pour la confirmer.');
  };

  return (
    <div className={styles.container}>
      {/* En-tête avec image de fond */}
      <header className={styles.header}>
        <div className={styles.headerOverlay}></div>
        <div 
          className={styles.headerBackground}
          style={{ 
            backgroundImage: `url(${HOME_IMAGES.interior})`
          }}
        ></div>
        <div className={styles.headerContent}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={styles.headerContentInner}
          >
            <h1 className={styles.headerTitle}>
              Réservez Votre Table
            </h1>
            <p className={styles.headerSubtitle}>
              Laissez-nous créer une expérience gastronomique inoubliable pour vous et vos convives
            </p>
          </motion.div>
        </div>
      </header>

      {/* Conteneur principal avec effet de carte */}
      <div className={styles.formContainer}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.formCard}
        >
          {/* Introduction */}
          <div className={styles.formIntroduction}>
            <h2 className={styles.formTitle}>Informations de Réservation</h2>
            <p className={styles.formSubtitle}>Tous les champs marqués d'un * sont obligatoires</p>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className={styles.form}>
            {/* Informations personnelles */}
            <div className={styles.formGrid}>
              <div>
                <label htmlFor="name" className={styles.label}>
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="Jean Dupont"
                />
              </div>
              <div>
                <label htmlFor="email" className={styles.label}>
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="jean.dupont@email.com"
                />
              </div>
            </div>

            {/* Détails de réservation */}
            <div className={styles.formGrid}>
              <div>
                <label htmlFor="phone" className={styles.label}>
                  Téléphone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  placeholder="06 12 34 56 78"
                />
              </div>
              <div>
                <label htmlFor="guests" className={styles.label}>
                  Nombre de convives *
                </label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className={styles.input}
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'personne' : 'personnes'}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Date et heure */}
            <div className={styles.formGrid}>
              <div>
                <label htmlFor="date" className={styles.label}>
                  Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className={styles.input}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div>
                <label htmlFor="time" className={styles.label}>
                  Heure *
                </label>
                <select
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className={styles.input}
                >
                  <option value="">Sélectionnez une heure</option>
                  {['12:00', '12:30', '13:00', '13:30', '19:00', '19:30', '20:00', '20:30', '21:00'].map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className={styles.label}>
                Demandes particulières
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className={styles.input}
                placeholder="Allergies, préférences alimentaires, occasion spéciale..."
              ></textarea>
            </div>

            {/* Bouton de soumission */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className={styles.submitButton}
            >
              Confirmer la Réservation
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Section contact et horaires */}
      <section className={styles.contactSection}>
        <div className={styles.contactContainer}>
          <div className={styles.contactTitle}>
            <h2>Informations Pratiques</h2>
            <div className={styles.contactSubtitle}></div>
          </div>
          <div className={styles.contactGrid}>
            {/* Adresse */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={styles.contactItem}
            >
              <div className={styles.contactIcon}>
                <svg className={styles.contactSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className={styles.contactTitle}>Notre Adresse</h3>
              <p className={styles.contactText}>123 Avenue des Champs-Élysées</p>
              <p className={styles.contactText}>75008 Paris</p>
            </motion.div>

            {/* Horaires */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={styles.contactItem}
            >
              <div className={styles.contactIcon}>
                <svg className={styles.contactSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className={styles.contactTitle}>Nos Horaires</h3>
              <p className={styles.contactText}>Lundi - Samedi</p>
              <p className={styles.contactText}>12h00 - 14h30</p>
              <p className={styles.contactText}>19h00 - 22h30</p>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className={styles.contactItem}
            >
              <div className={styles.contactIcon}>
                <svg className={styles.contactSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className={styles.contactTitle}>Contact</h3>
              <p className={styles.contactText}>01 23 45 67 89</p>
              <p className={styles.contactText}>contact@lessence.fr</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
