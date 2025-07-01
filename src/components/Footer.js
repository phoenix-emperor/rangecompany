import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Range Construction & Procurement</h3>
            <p className="text-gray-400">
              Building excellence through innovation and expertise
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white">
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">info@rangeconstruction.com</li>
              <li className="text-gray-400">+234 123 456 7890</li>
              <li className="text-gray-400">Lagos, Nigeria</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/your-range-page"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Range Construction & Procurement. All rights reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
}
