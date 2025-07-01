import React from 'react';
import { motion } from 'framer-motion';
import { BuildingOffice2Icon, AcademicCapIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function About() {
  const aboutData = [
    {
      icon: BuildingOffice2Icon,
      title: "Expertise & Experience",
      description: "With over 20 years of experience in the construction and procurement industry, we bring unparalleled expertise to every project."
    },
    {
      icon: AcademicCapIcon,
      title: "Leadership & Innovation",
      description: "Our team of industry leaders constantly innovates to deliver cutting-edge solutions and best practices."
    },
    {
      icon: SparklesIcon,
      title: "Quality & Excellence",
      description: "We maintain the highest standards of quality and excellence in all our projects, ensuring client satisfaction."
    }
  ];

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
            About Range Construction & Procurement
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We are a leading construction and procurement company dedicated to delivering exceptional results through innovation, expertise, and unwavering commitment to excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl text-primary-600 dark:text-primary-400 mb-4">
                <item.icon className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
