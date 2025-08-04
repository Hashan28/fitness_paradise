import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6"
          >
            Contact Us
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6"
          >
            Get in touch
            <span className="text-primary-600"> with us</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="max-w-3xl mx-auto text-lg text-gray-600"
          >
            Whether you're just starting out or you're a fitness enthusiast, we’re here to support your journey.
          </motion.p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center text-sm mt-12"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
            <div className="w-full">
              <label className="text-md text-gray-600" htmlFor="name">Your Name</label>
              <input
                className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-primary-300"
                type="text"
                required
              />
            </div>
            <div className="w-full">
              <label className="text-md text-gray-600" htmlFor="email">Your Email</label>
              <input
                className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-primary-300"
                type="email"
                required
              />
            </div>
          </div>

          <div className="mt-6 w-[350px] md:w-[700px]">
            <label className="text-md text-gray-600" htmlFor="message">Message</label>
            <textarea
              className="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-primary-300"
              required
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="mt-6 py-3 px-8 rounded-lg bg-primary-600 text-white font-semibold shadow-md hover:bg-primary-700 transition-all"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
