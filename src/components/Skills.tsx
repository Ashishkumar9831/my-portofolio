import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { Layout, Server, Database, Code, Cloud, BrainCircuit } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Layout,
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Responsive Design', 'Tailwind CSS'],
    color: 'from-blue-400 to-cyan-400',
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Java', 'Spring Boot', 'Node.js', 'REST APIs', 'Spring Security'],
    color: 'from-green-400 to-emerald-500',
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL'],
    color: 'from-orange-400 to-red-500',
  },
  {
    title: 'Programming',
    icon: Code,
    skills: ['Java', 'Python', 'JavaScript', 'C'],
    color: 'from-purple-400 to-indigo-500',
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: ['AWS', 'Docker', 'Git', 'GitHub', 'CI/CD'],
    color: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'AI & Data',
    icon: BrainCircuit,
    skills: ['Python', 'Data Science', 'Machine Learning', 'Generative AI', 'APIs'],
    color: 'from-pink-500 to-rose-500',
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-gray-50 dark:bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Technical Skills" subtitle="A comprehensive overview of my technical expertise and the tools I use." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-8 hover:shadow-xl hover:shadow-primary/5 transition-all group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-2xl bg-gradient-to-br ${category.color} text-white shadow-lg`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200/50 dark:border-white/5 group-hover:border-primary/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
