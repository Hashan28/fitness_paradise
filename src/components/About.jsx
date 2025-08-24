import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Users, Trophy, Heart, Clock, Shield } from 'lucide-react';

const About = () => {
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

  const features = [
    {
      icon: Target,
      title: 'Goal-Oriented Training',
      description: 'Personalized workout plans designed to help you achieve your specific fitness goals.'
    },
    {
      icon: Users,
      title: 'Expert Trainers',
      description: 'Certified professionals with years of experience in fitness and nutrition guidance.'
    },
    {
      icon: Trophy,
      title: 'Proven Results',
      description: 'Track record of helping thousands of members transform their bodies and lives.'
    },
    {
      icon: Heart,
      title: 'Holistic Wellness',
      description: 'Focus on complete well-being including physical, mental, and emotional health.'
    },
    {
      icon: Shield,
      title: 'Safe Environment',
      description: 'Clean, sanitized, and secure facility with top-notch safety protocols.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom" ref={ref}>
        <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 mb-6 text-sm font-semibold rounded-full bg-primary-100 text-primary-700"
            >
              About Fitness Elite
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl font-display"
            >
              Where Fitness
              <span className="text-primary-600"> Meets Elite</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="mb-8 text-lg leading-relaxed text-gray-600"
            >
              At Fitness Elite, we believe that fitness is not just about building muscles or losing weight—it's about creating a lifestyle that promotes overall well-being. Our state-of-the-art facility, combined with expert guidance and a supportive community, provides the perfect environment for your transformation journey.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="mb-8 text-lg leading-relaxed text-gray-600"
            >
              Since our founding, we've helped thousands of members achieve their fitness goals through personalized training programs, cutting-edge equipment, and unwavering support. Join us and discover why we're more than just a gym—we're your fitness paradise.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <button className="btn-primary"
                onClick={() => scrollToSection('#trainers')}>
                Learn More
              </button>
              <button className="btn-outline"
                onClick={() => scrollToSection('#pricing')}>
                Take a Tour
              </button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative overflow-hidden shadow-2xl rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
                alt="Modern gym equipment"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="absolute p-6 bg-white border border-gray-100 shadow-xl -bottom-6 -left-6 rounded-xl"
            >
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100">
                  <Trophy className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">10+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
              </div>
            </motion.div>

            {/* Floating Members Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1 }}
              className="absolute p-6 bg-white border border-gray-100 shadow-xl -top-6 -right-6 rounded-xl"
            >
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-100">
                  <Users className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Happy Members</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20"
        >
          <div className="mb-12 text-center">
            <h3 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl font-display">
              Why Choose Fitness Paradise?
            </h3>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              We offer everything you need to succeed on your fitness journey
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 + index * 0.1 }}
                className="p-8 transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-xl hover:shadow-xl group"
              >
                <div className="flex items-center justify-center w-12 h-12 mb-6 transition-colors rounded-lg bg-primary-100 group-hover:bg-primary-600">
                  <feature.icon className="w-6 h-6 transition-colors text-primary-600 group-hover:text-white" />
                </div>
                <h4 className="mb-3 text-xl font-semibold text-gray-900 font-display">
                  {feature.title}
                </h4>
                <p className="leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
