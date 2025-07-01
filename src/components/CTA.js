import React from 'react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <motion.section
      className="py-20 bg-primary-600 text-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-8">
            Let's work together to bring your vision to life with our expert construction and procurement services.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a
              href="#contact"
              className="btn-primary bg-white text-primary-600 hover:bg-primary-50 px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
