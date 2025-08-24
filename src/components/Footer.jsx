import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Dumbbell, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Personal Training',
    'Group Fitness Classes',
    'Nutritional Counseling',
    'Strength Training',
    'Cardio Training',
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://web.facebook.com/FitnessparadiseN/photos', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="text-white bg-gray-900">
      {/* Newsletter Section */}
      <div className="bg-primary-600" ref={ref}>
        <div className="py-16 container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center"
          >
            <h3 className="mb-4 text-2xl font-bold md:text-3xl font-display">
              Stay Updated with Fitness Elite
            </h3>
            <p className="max-w-2xl mx-auto mb-8 text-lg opacity-90">
              Get the latest fitness tips, workout routines, and exclusive offers delivered to your inbox.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="flex flex-col max-w-md gap-4 mx-auto sm:flex-row"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 text-gray-900 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 space-x-2 font-semibold transition-colors bg-white rounded-lg text-primary-600 hover:bg-gray-100"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16 container-custom">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center mb-6 space-x-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-600">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold font-display">
                Fitness Elite
              </span>
            </div>
            
            <p className="mb-6 leading-relaxed text-gray-400">
              Transform your body and mind at Fitness Elite. Join our community of fitness enthusiasts and start your journey to a healthier, stronger you.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="flex items-center justify-center w-10 h-10 text-gray-400 transition-colors bg-gray-800 rounded-lg hover:bg-primary-600 hover:text-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h4 className="mb-6 text-lg font-semibold font-display">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.05 }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="flex items-center space-x-2 text-gray-400 transition-colors duration-200 transform hover:text-white hover:translate-x-1 group"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 transition-opacity opacity-0 group-hover:opacity-100" />
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <h4 className="mb-6 text-lg font-semibold font-display">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.05 }}
                  className="text-gray-400 transition-colors cursor-pointer hover:text-white"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <h4 className="mb-6 text-lg font-semibold font-display">Contact Info</h4>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="flex items-start space-x-3"
              >
                <MapPin className="flex-shrink-0 w-5 h-5 mt-1 text-primary-500" />
                <div className="text-gray-400">
                  <div>123 Colombo Street</div>
                  <div>mulgampola City, Kandy </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.7 }}
                className="flex items-center space-x-3"
              >
                <Phone className="flex-shrink-0 w-5 h-5 text-primary-500" />
                <div className="text-gray-400">
                  <a href="tel:+1234567890" className="transition-colors hover:text-white">
                    +94 758988061
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="flex items-center space-x-3"
              >
                <Mail className="flex-shrink-0 w-5 h-5 text-primary-500" />
                <div className="text-gray-400">
                  <a href="mailto:info@fitnessparadise.com" className="transition-colors hover:text-white">
                    info@fitnesselite.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.9 }}
                className="flex items-start space-x-3"
              >
                <Clock className="flex-shrink-0 w-5 h-5 mt-1 text-primary-500" />
                <div className="text-gray-400">
                  <div className="mb-1 font-semibold text-white">Operating Hours:</div>
                  <div>Mon - Fri: 6:00 AM - 10:00 PM</div>
                  <div>Sat - Sun: 6.30:00 AM - 10:00 PM</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="py-6 container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 }}
            className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0"
          >
            <div className="text-sm text-gray-400">
              © 2025 Fitness Elite. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 transition-colors hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-white">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-white">
                Cookie Policy
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
