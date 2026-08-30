import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'Full Stack Development Intern',
    company: 'Intercede',
    duration: '[Start Date] – [End Date]',
    description: 'Worked on multiple websites and projects, gaining practical, hands-on development experience in a professional environment.',
    responsibilities: [
      'Developed and maintained full-stack web applications using modern technologies.',
      'Collaborated with the team to design scalable database schemas and API endpoints.',
      'Improved application performance and implemented responsive UI designs.',
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    achievements: [
      'Successfully delivered [Project Name] ahead of schedule.',
      'Optimized database queries reducing load time by 20%.',
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-gray-50 dark:bg-black/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Work Experience" subtitle="My professional journey and industry experience." />

        <div className="relative border-l-2 border-primary/30 ml-3 md:ml-6 mt-12 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center border-4 border-gray-50 dark:border-[#111827] shadow-lg">
                <Briefcase className="w-3.5 h-3.5 text-white" />
              </div>

              <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-lg font-medium text-primary">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/10 px-3 py-1.5 rounded-full w-fit">
                    <Calendar className="w-4 h-4" />
                    {exp.duration}
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                </div>

                {exp.achievements.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      {exp.achievements.map((ach, i) => (
                        <li key={i}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-white/10">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
