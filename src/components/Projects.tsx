import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { ExternalLink, Github, Plus } from 'lucide-react';

const initialProjects = [
  {
    title: 'Maa Annapurna Tiffin Service',
    description: 'A full-stack food/tiffin service website designed to allow customers to explore meal plans, view services, and contact the business easily.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Database'],
    features: ['Responsive UI', 'Service listings', 'Contact functionality', 'Customer-friendly interface', 'Mobile responsive design'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Lovely Professional University Platform',
    description: 'A comprehensive university-related web application built to streamline academic processes and enhance student engagement.',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Spring Boot', 'MySQL', 'Tailwind CSS'],
    features: ['Student Portal', 'Course Management', 'Secure Authentication', 'Real-time Updates'],
    githubUrl: '#',
    liveUrl: '#',
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Featured Projects" subtitle="A selection of my best work and technical achievements." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {initialProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group rounded-3xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all flex flex-col"
            >
              <div className="relative h-64 md:h-72 overflow-hidden bg-gray-200 dark:bg-gray-800">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                <div className="absolute bottom-4 left-6 right-6 flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 text-xs font-semibold bg-white/20 backdrop-blur-md text-white rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100 dark:border-white/10">
                  <a 
                    href={project.githubUrl}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 text-gray-900 dark:text-white rounded-xl font-medium transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a 
                    href={project.liveUrl}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <button className="flex items-center gap-2 px-8 py-4 border-2 border-dashed border-gray-300 dark:border-white/20 hover:border-primary dark:hover:border-primary rounded-2xl text-gray-600 dark:text-gray-400 hover:text-primary transition-colors font-medium group">
            <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
            Add More Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}
