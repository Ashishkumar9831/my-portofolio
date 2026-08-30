import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    name: 'Certification in Python',
    issuer: 'Infosys',
    date: '[Issue Date]',
    credentialId: '[Credential ID]',
    url: '#',
  },
  {
    name: 'Certificate in Data Science and Analytics',
    issuer: 'HP Foundation',
    date: '[Issue Date]',
    credentialId: '[Credential ID]',
    url: '#',
  },
  {
    name: 'Certification in Modern Database Management System',
    issuer: 'Saylor.org',
    date: '[Issue Date]',
    credentialId: '[Credential ID]',
    url: '#',
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-32 bg-gray-50 dark:bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Certifications" subtitle="Professional certifications and continuous learning." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 hover:shadow-xl hover:shadow-primary/5 transition-all group flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-400 to-primary text-white shadow-lg">
                  <Award className="w-6 h-6" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {cert.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium mb-1">
                {cert.issuer}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Issued: {cert.date}
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mb-8 font-mono">
                ID: {cert.credentialId}
              </p>
              
              <div className="mt-auto">
                <a 
                  href={cert.url}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  View Certificate
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
