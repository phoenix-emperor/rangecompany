import React from 'react';
import { motion } from 'framer-motion';
import { TruckIcon, ClipboardDocumentListIcon, BuildingOfficeIcon, WrenchScrewdriverIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export default function Services() {
  const services = [
    {
      icon: BuildingOfficeIcon,
      title: "Construction",
      description: "Professional construction services for commercial and industrial projects"
    },
    {
      icon: TruckIcon,
      title: "Procurement",
      description: "Efficient and cost-effective procurement solutions"
    },
    {
      icon: ClipboardDocumentListIcon,
      title: "Project Management",
      description: "Expert project management and coordination"
    },
    {
      icon: BuildingOfficeIcon,
      title: "Consulting",
      description: "Strategic consulting for construction and procurement"
    },
    {
      icon: WrenchScrewdriverIcon,
      title: "Engineering",
      description: "Specialized engineering services and solutions"
    },
    {
      icon: ChartBarIcon,
      title: "Training",
      description: "Professional development and training programs"
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
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive solutions for all your construction and procurement needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl text-primary-600 dark:text-primary-400 mb-4">
                <service.icon className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
