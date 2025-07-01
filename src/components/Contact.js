import React from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Contact() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get in touch with us for your construction and procurement needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <EnvelopeIcon className="h-6 w-6 text-primary-600 dark:text-primary-400 mr-4" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    Email
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    info@rangeconstruction.com
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <PhoneIcon className="h-6 w-6 text-primary-600 dark:text-primary-400 mr-4" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    Phone
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    +234 123 456 7890
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPinIcon className="h-6 w-6 text-primary-600 dark:text-primary-400 mr-4" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    Address
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    123 Construction Street<br />
                    Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Send us a Message
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="form-input"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Project Type
                </label>
                <select
                  className="form-input"
                >
                  <option value="">Select Project Type</option>
                  <option value="construction">Construction</option>
                  <option value="procurement">Procurement</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="form-input"
                  placeholder="Enter your message"
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full px-4 py-3 text-center"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
