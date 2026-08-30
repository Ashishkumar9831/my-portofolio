import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { GraduationCap, Calendar } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Data Science and Artificial Intelligence',
    institution: 'Lovely Professional University',
    duration: '[Start Year] – [Expected Graduation Year]',
    coursework: ['Data Structures and Algorithms', 'Database Management Systems', 'Machine Learning', 'Artificial Intelligence', 'Web Development'],
    achievements: ['Maintained a CGPA of [Your CGPA]', 'Active member of [Club/Organization]'],
  }
];

export function Education() {
  return (
    <section id="education" className="py-20 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Education" subtitle="My academic background and qualifications." />

        <div className="relative border-l-2 border-purple-500/30 ml-3 md:ml-6 mt-12 space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center border-4 border-white dark:border-[#0f172a] shadow-lg">
                <GraduationCap className="w-3.5 h-3.5 text-white" />
              </div>

              <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-lg font-medium text-purple-600 dark:text-purple-400">
                      {edu.institution}
                    </p>
                    <p className="text-md text-gray-600 dark:text-gray-300 mt-1">
                      {edu.field}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/10 px-3 py-1.5 rounded-full w-fit">
                    <Calendar className="w-4 h-4" />
                    {edu.duration}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, i) => (
                      <span key={i} className="px-3 py-1 bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium border border-purple-100 dark:border-purple-500/20">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {edu.achievements.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      {edu.achievements.map((ach, i) => (
                        <li key={i}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
