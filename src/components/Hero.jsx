import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Star, Users, Award, Target } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { number: '500+', label: 'Happy Members', icon: Users },
    { number: '50+', label: 'Expert Trainers', icon: Award },
    { number: '10+', label: 'Years Experience', icon: Target },
    { number: '24/7', label: 'Gym Access', icon: Star }
  ];

  return (
    <section id="home" className="relative flex items-center min-h-screen px-4 overflow-hidden sm:px-6 lg:px-12">
      {/* Background Image with Subtle Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          alt="Fitness Paradise Gym"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30"></div>
      </div>

      <div className="relative z-10 w-full container-custom">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
  

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-4 text-3xl font-bold leading-tight sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display"
            >
              Transform Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
                Body & Mind
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="max-w-xl mb-8 text-base leading-relaxed text-gray-200 sm:mb-10 sm:text-lg md:text-xl"
            >
              Join Fitness Elite and embark on your fitness journey with state-of-the-art equipment,
              expert trainers, and a supportive community that will help you achieve your goals.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col gap-4 mb-12 sm:flex-row"
            >
              <motion.button
                onClick={() => scrollToSection('#pricing')}
                className="inline-flex items-center px-8 py-4 space-x-2 font-semibold text-white transition-all duration-300 transform rounded-lg bg-primary-600 hover:bg-primary-700 hover:scale-105 hover:shadow-xl group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.button>

              <motion.button
                className="inline-flex items-center px-8 py-4 space-x-3 font-semibold text-white transition-all duration-300 border-2 rounded-lg border-white/40 hover:bg-white/10 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20">
                  <Play className="w-5 h-5 ml-1" />
                </div>
                <span>Watch Our Story</span>
              </motion.button>
            </motion.div>

          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Feature Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="p-8 border bg-white/10 backdrop-blur-md rounded-2xl border-white/20"
              >
                <div className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary-600">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white font-display">
                    Personalized Training
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-300">
                    Get customized workout plans designed specifically for your fitness goals and current level.
                  </p>
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="absolute p-4 text-white shadow-xl -top-6 -right-6 bg-primary-600 rounded-xl"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-xs">Success Rate</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute p-4 text-gray-900 bg-white shadow-xl -bottom-6 -left-6 rounded-xl"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">4.9</div>
                  <div className="text-xs">⭐ Rating</div>
                </div>
              </motion.div>

              {/* Animated Ring */}
              <motion.div
                className="absolute inset-0 border-2 rounded-2xl border-primary-400/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        className="absolute transform -translate-x-1/2 bottom-8 left-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center w-6 h-10 border-2 rounded-full cursor-pointer border-white/50"
          onClick={() => scrollToSection('#about')}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 mt-2 bg-white rounded-full"
          />
        </motion.div>
        <div className="mt-2 text-xs text-center text-white opacity-70">Scroll Down</div>
      </motion.div>
    </section>
  );
};

export default Hero;
