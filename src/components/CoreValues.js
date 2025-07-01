import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheckIcon, SparklesIcon, BuildingOffice2Icon, UsersIcon } from '@heroicons/react/24/outline';

export default function CoreValues() {
  const values = [
    {
      icon: ShieldCheckIcon,
      title: "Quality",
      description: "We maintain the highest standards of quality in all our work, ensuring excellence in every project."
    },
    {
      icon: SparklesIcon,
      title: "Innovation",
      description: "We constantly innovate to deliver cutting-edge solutions and stay ahead of industry trends."
    },
    {
      icon: BuildingOffice2Icon,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from project management to execution."
    },
    {
      icon: UsersIcon,
      title: "Teamwork",
      description: "We believe in the power of collaboration and work together to achieve outstanding results."
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The principles that guide our every action and decision
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl text-accent-500 dark:text-accent-400 mb-4">
                <value.icon className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
