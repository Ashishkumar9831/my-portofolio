import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { Code2, Target, Cloud, Lightbulb } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" subtitle="Get to know me and what drives my passion for software development." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image / Abstract visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 rounded-3xl transform rotate-3 scale-105 opacity-20 blur-lg dark:opacity-40"></div>
            <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 flex items-center justify-center backdrop-blur-sm">
                <div className="text-center p-8">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-tr from-primary to-purple-500 mx-auto flex items-center justify-center">
                    <span className="text-4xl text-white font-bold">AK</span>
                  </div>
                </div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-white dark:bg-[#0f172a] p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-white/10 hidden md:block backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Problem Solver</p>
                  <p className="font-bold text-gray-900 dark:text-white">100% Focused</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Turning complex problems into elegant solutions.
            </h3>
            
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              <p>
                Hello! I'm Ashish Kumar, a passionate Full Stack Developer with a strong foundation in building modern, responsive, and scalable web applications. My journey in software development is driven by a deep curiosity for how things work and a desire to create impactful digital experiences.
              </p>
              <p>
                I thrive on the challenges of full-stack development, seamlessly navigating between frontend aesthetics and backend architecture. My problem-solving mindset allows me to break down complex requirements into robust, efficient, and maintainable code.
              </p>
              <p>
                Beyond traditional web development, I have a keen interest in Cloud Computing and Artificial Intelligence. I am constantly exploring how AI and cloud services can be leveraged to build smarter, more capable applications. My career goal is to continue growing as a versatile engineer, contributing to innovative projects that make a difference.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg text-primary shrink-0">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Full Stack Focus</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Frontend to Database</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-purple-500/10 rounded-lg text-purple-500 shrink-0">
                  <Cloud className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Cloud & AI</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Modern Architecture</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500 shrink-0">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Problem Solving</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Analytical Approach</p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>


      </div>
    </section>
  );
}
