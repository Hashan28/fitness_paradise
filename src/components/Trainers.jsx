import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Instagram, Music2, Facebook, Star } from 'lucide-react';
import { faker } from '@faker-js/faker';
import sibi from '../assets/sibi.jpg'
import chathu from '../assets/chathu.jpg'

const Trainers = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  // Generate trainer data with faker
  const trainers = [
    {
      id: 1,
      name: 'Mr. Chathuranaga Kumara',
      specialty: 'Strength, Bodybuilding & Nutrition',
      experience: '8 Years',
      image: chathu,
      description: 'Certified personal trainer specializing in strength training and nutritional guidance. Helped 200+ clients achieve their fitness goals.',
      rating: 4.9,
      certifications: ['NASM-CPT', 'Nutrition Coach', 'Corrective Exercise'],
      social: {
        instagram: 'https://www.instagram.com/chathurangamk1/',
        tiktok: 'https://www.tiktok.com/@chathuranga___',
        facebook: 'https://web.facebook.com/chathuranga.kumara.146'
      }
    },
    {
      id: 2,
      name: 'Mr. Segar Sibishan ',
      specialty: 'Cardio Training & Strength Training',
      experience: '5 Years',
      image: sibi,
      description: 'High-intensity interval training expert with a passion for helping clients build endurance and burn fat effectively.',
      rating: 4.8,
      certifications: ['ACSM-CPT', 'HIIT Specialist', 'Group Fitness'],
      social: {
        instagram: 'https://www.instagram.com/sibishan23/',
        tiktok: 'https://www.tiktok.com/@sibishan23',
        facebook: 'https://web.facebook.com/segarsibishan.segarsibishan'
      }
    },

  ];

  return (
    <section id="trainers" className="bg-white section-padding">
      <div className="container-custom" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 mb-6 text-sm font-semibold rounded-full bg-primary-100 text-primary-700"
          >
            Our Expert Trainers
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl font-display"
          >
            Meet Your
            <span className="text-primary-600"> Fitness Experts</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="max-w-3xl mx-auto text-lg text-gray-600"
          >
            Our certified trainers are passionate about helping you achieve your fitness goals. Each brings unique expertise and years of experience to guide you on your journey.
          </motion.p>
        </motion.div>

        {/* Trainers Grid */}

        <div className="grid grid-cols-1  gap-8 md:grid-cols-2 lg:grid-cols-3">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-2xl hover:shadow-xl group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="object-cover w-full transition-transform duration-500 h-80 group-hover:scale-110"
                />
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/50 to-transparent group-hover:opacity-100"></div>

                {/* Social Links */}
                <div className="absolute flex justify-center space-x-3 transition-opacity duration-300 opacity-0 bottom-4 left-4 right-4 group-hover:opacity-100">
                  <a
                    href={trainer.social.instagram}
                    className="flex items-center justify-center w-10 h-10 text-white transition-colors rounded-full bg-white/20 backdrop-blur-sm hover:bg-primary-600"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={trainer.social.tiktok}
                    className="flex items-center justify-center w-10 h-10 text-white transition-colors rounded-full bg-white/20 backdrop-blur-sm hover:bg-primary-600"
                  >
                    <Music2 className="w-5 h-5" />
                  </a>
                  <a
                    href={trainer.social.facebook}
                    className="flex items-center justify-center w-10 h-10 text-white transition-colors rounded-full bg-white/20 backdrop-blur-sm hover:bg-primary-600"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>

                {/* Rating Badge */}
                <div className="absolute flex items-center px-3 py-1 space-x-1 rounded-full top-4 right-4 bg-white/90 backdrop-blur-sm">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold text-gray-900">{trainer.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900 font-display">
                  {trainer.name}
                </h3>
                <div className="mb-2 font-semibold text-primary-600">
                  {trainer.specialty}
                </div>
                <div className="mb-4 text-sm text-gray-500">
                  {trainer.experience} Experience
                </div>
                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                  {trainer.description}
                </p>

                {/* Certifications */}


                {/* Book Session Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 mt-6 font-semibold text-white transition-colors rounded-lg bg-primary-600 hover:bg-primary-700"
                  onClick={() => scrollToSection('#contact')}
                >
                  Book Session
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="mt-16 text-center"
        >
          <p className="mb-6 text-lg text-gray-600">
            Ready to start training with our experts?
          </p>
          <button className="btn-primary"
            onClick={() => scrollToSection('#contact')}>
            Schedule a Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Trainers;
