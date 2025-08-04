import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, Star, Crown, Zap } from 'lucide-react';

const Pricing = () => {
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

  const plans = [
    {
      name: 'Starter',
      price: 2500.00,
      period: 'monthly',
      description: 'Perfect for beginners starting their fitness journey',
      icon: Zap,
      popular: false,
      features: [
        'Access to gym equipment',
        'Locker room access',
        'Basic workout plans',
        'Nutrition guidance',
        'Free parking',
        '24/7 gym access',

      ],
      buttonText: 'Get Started',
      color: 'gray'
    },
    {
      name: 'Premium',
      price: 13500.00,
      period: '6-months',
      description: 'Most popular choice for serious fitness enthusiasts',
      icon: Star,
      popular: true,
      features: [
        'Access to gym equipment',
        'Locker room access',
        'Basic workout plans',
        'Nutrition guidance',
        'Free parking',
        '24/7 gym access',
      ],
      buttonText: 'Most Popular',
      color: 'primary'
    },
    {
      name: 'Elite',
      price: 27500.00,
      period: 'yearly',
      description: 'Ultimate fitness experience with premium perks',
      icon: Crown,
      popular: false,
      features: [
        'Access to gym equipment',
        'Locker room access',
        'Basic workout plans',
        'Nutrition guidance',
        'Free parking',
        '24/7 gym access'
      ],
      buttonText: 'Go Elite',
      color: 'primary'
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-gray-50">
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
            Membership Plans
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl font-display"
          >
            Choose Your
            <span className="text-primary-600"> Perfect Plan</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="max-w-3xl mx-auto text-lg text-gray-600"
          >
            Whether you're just starting out or you're a fitness enthusiast, we have the perfect membership plan to fit your needs and budget.
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
              className={`relative bg-white rounded-2xl shadow-lg border-2 overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                plan.popular 
                  ? 'border-primary-500 ring-4 ring-primary-100' 
                  : 'border-gray-200 hover:border-primary-300'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 transform -translate-x-1/2 -translate-y-1/2 left-1/2">
                  <div className="px-6 py-2 text-sm font-semibold text-white rounded-full shadow-lg bg-primary-600">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="mb-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    plan.popular ? 'bg-primary-100' : 'bg-gray-100'
                  }`}>
                    <plan.icon className={`w-8 h-8 ${
                      plan.popular ? 'text-primary-600' : 'text-gray-600'
                    }`} />
                  </div>
                  
                  <h3 className="mb-2 text-2xl font-bold text-gray-900 font-display">
                    {plan.name}
                  </h3>
                  
                  <p className="mb-6 text-sm text-gray-600">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900 md:text-5xl font-display">
                      Rs:{plan.price}
                    </span>
                    <span className=" block ml-2 text-gray-600">
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.8 + index * 0.1 + featureIndex * 0.05 }}
                      className="flex items-center space-x-3"
                    >
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.popular ? 'bg-primary-100' : 'bg-gray-100'
                      }`}>
                        <Check className={`w-3 h-3 ${
                          plan.popular ? 'text-primary-600' : 'text-gray-600'
                        }`} />
                      </div>
                      <span className="text-sm text-gray-700">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                >
                  {plan.buttonText}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="max-w-4xl p-8 mx-auto bg-white border border-gray-200 shadow-lg rounded-2xl">
            <h3 className="mb-4 text-2xl font-bold text-gray-900 font-display">
              All Plans Include
            </h3>
            <div className="grid grid-cols-1 gap-6 text-center md:grid-cols-2 lg:grid-cols-4">
              <div>
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-lg bg-primary-100">
                  <Check className="w-6 h-6 text-primary-600" />
                </div>
                <div className="font-semibold text-gray-900">No Setup Fee</div>
                <div className="text-sm text-gray-600">Get started immediately</div>
              </div>
              <div>
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-lg bg-primary-100">
                  <Check className="w-6 h-6 text-primary-600" />
                </div>
                <div className="font-semibold text-gray-900">Cancel Anytime</div>
                <div className="text-sm text-gray-600">No long-term commitment</div>
              </div>
              <div>
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-lg bg-primary-100">
                  <Check className="w-6 h-6 text-primary-600" />
                </div>
                <div className="font-semibold text-gray-900">Clean Facilities</div>
                <div className="text-sm text-gray-600">Sanitized equipment daily</div>
              </div>
              <div>
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-3 rounded-lg bg-primary-100">
                  <Check className="w-6 h-6 text-primary-600" />
                </div>
                <div className="font-semibold text-gray-900">Money Back</div>
                <div className="text-sm text-gray-600">30-day guarantee</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact for Custom Plans */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4 }}
          className="mt-12 text-center"
        >
          <p className="mb-6 text-lg text-gray-600">
            Need a custom plan for your business or group?
          </p>
          <button className="btn-outline"
          onClick={() => scrollToSection('#contact')}>
            Contact Us for Corporate Plans
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
