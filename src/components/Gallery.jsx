import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import equipement1 from '../assets/equipement1.jpg'
import equipement2 from '../assets/equipement2.jpg'
import members1 from '../assets/members1.jpg'
import members2 from '../assets/member2.jpg'
import members3 from '../assets/members3.jpg'
import members4 from '../assets/members4.jpg'
import members5 from '../assets/members5.jpg'
import goal1 from '../assets/goal1.jpg'
import goal2 from '../assets/goal2.jpg'
import goal3 from '../assets/goal3.jpg'
import goal4 from '../assets/goal4.jpg'
import goal5 from '../assets/goal5.jpg'
import goal6 from '../assets/goal6.jpg'

const Gallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      src: equipement1,
      alt: 'Modern gym equipment area',
      category: 'Equipment'
    },
     {
      id: 2,
      src: equipement2,
      alt: 'Modern gym equipment area',
      category: 'Equipment'
    },
     {
      id: 3,
      src: members1,
      alt: 'happy clinet',
      category: 'Members'
    },
     {
      id: 4,
      src: members2,
      alt: 'happy clinet',
      category: 'Members'
    },
     {
      id: 5,
      src: members3,
      alt: 'happy clinet',
      category: 'Members'
    },
     {
      id: 6,
      src: members4,
      alt: 'happy clinet',
      category: 'Members'
    },
     {
      id: 7,
      src: members5,
      alt: 'happy clinet',
      category: 'Members'
    },
     {
      id: 8,
      src: goal1,
      alt: 'tranform',
      category: 'Transforms'
    },
     {
      id: 9,
      src: goal2,
      alt: 'tranform',
      category: 'Transforms'
    },
       {
      id: 10,
      src: goal3,
      alt: 'tranform',
      category: 'Transforms'
    },
       {
      id: 11,
      src: goal4,
      alt: 'tranform',
      category: 'Transforms'
    },
       {
      id: 12,
      src: goal5,
      alt: 'tranform',
      category: 'Transforms'
    },
       {
      id: 13,
      src: goal6,
      alt: 'tranform',
      category: 'Transforms'
    }
  ];

  const categories = ['All', ...new Set(images.map(img => img.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <section id="gallery" className="bg-white section-padding">
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
            Our Facility
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl font-display"
          >
            Explore Our
            <span className="text-primary-600"> Fitness Elite</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="max-w-3xl mx-auto text-lg text-gray-600"
          >
            Take a virtual tour of our state-of-the-art facility. From cutting-edge equipment to relaxing spaces, see what makes Fitness Paradise special.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Image Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="relative overflow-hidden transition-all duration-300 shadow-lg cursor-pointer group rounded-xl hover:shadow-xl"
                onClick={() => openModal(image)}
              >
                <div className="overflow-hidden aspect-w-4 aspect-h-3">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:opacity-100">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white">
                      <div className="mb-1 text-xs font-semibold tracking-wide uppercase text-primary-300">
                        {image.category}
                      </div>
                      <div className="font-semibold">
                        {image.alt}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 transition-opacity duration-300 border-2 opacity-0 border-primary-600 rounded-xl group-hover:opacity-100"></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
              onClick={closeModal}
            >
              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute z-10 flex items-center justify-center w-10 h-10 text-white transition-colors rounded-full top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30"
                onClick={closeModal}
              >
                <X className="w-6 h-6" />
              </motion.button>

              {/* Navigation Buttons */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="absolute flex items-center justify-center w-12 h-12 text-white transition-colors transform -translate-y-1/2 rounded-full left-4 top-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('prev');
                }}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="absolute flex items-center justify-center w-12 h-12 text-white transition-colors transform -translate-y-1/2 rounded-full right-4 top-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30"
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage('next');
                }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="max-w-4xl max-h-[80vh] mx-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="object-contain w-full h-full rounded-lg"
                />
                <div className="mt-4 text-center text-white">
                  <div className="text-sm font-semibold tracking-wide uppercase text-primary-300">
                    {selectedImage.category}
                  </div>
                  <div className="mt-1 text-lg font-semibold">
                    {selectedImage.alt}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="p-8 text-white bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl">
            <h3 className="mb-4 text-2xl font-bold md:text-3xl font-display">
              Ready to Experience It Yourself?
            </h3>
            <p className="mb-6 text-lg opacity-90">
              Schedule a free tour and see why Fitness Elite is the perfect place for your fitness journey.
            </p>
            <button className="px-8 py-3 font-semibold transition-colors bg-white rounded-lg text-primary-600 hover:bg-gray-100">
              Schedule Your Tour
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
