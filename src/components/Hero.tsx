import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] mix-blend-screen opacity-50 dark:opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[120px] mix-blend-screen opacity-50 dark:opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] mix-blend-screen opacity-50 dark:opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-400 mb-2">
                Hello, I'm
              </h2>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
                Ashish Kumar
              </h1>
              <h2 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-secondary mb-6">
                Full Stack Developer
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto md:mx-0 mb-8 leading-relaxed font-medium"
            >
              "Building scalable applications. Creating seamless digital experiences."
              <span className="block mt-4 text-base md:text-lg font-normal text-gray-600 dark:text-gray-400">
                Full Stack Developer passionate about building modern, responsive, and scalable web applications using frontend, backend, databases, cloud technologies, and AI.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-10"
            >
              <a
                href="#projects"
                className="group flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/50"
              >
                View My Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-8 py-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white rounded-full font-medium hover:bg-gray-50 dark:hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center justify-center md:justify-start gap-6"
            >
              <a href="#" className="p-3 bg-gray-100 dark:bg-white/5 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-gray-200 dark:hover:bg-white/10 transition-colors border border-gray-200 dark:border-white/10">
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="p-3 bg-gray-100 dark:bg-white/5 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-gray-200 dark:hover:bg-white/10 transition-colors border border-gray-200 dark:border-white/10">
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="p-3 bg-gray-100 dark:bg-white/5 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-gray-200 dark:hover:bg-white/10 transition-colors border border-gray-200 dark:border-white/10">
                <Mail className="w-6 h-6" />
                <span className="sr-only">Email</span>
              </a>
            </motion.div>
          </div>
          
          {/* Optional: Add a hero graphic or illustration if wanted, or just keep text focused. The prompt mentioned "animated developer-themed background". */}
          <div className="hidden lg:block flex-1">
             <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="relative w-full max-w-lg mx-auto aspect-square"
             >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="w-full h-full rounded-[2rem] border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-black/20 backdrop-blur-xl shadow-2xl flex items-center justify-center overflow-hidden">
                    {/* Decorative Code Block Window */}
                    <div className="w-full h-full p-6 flex flex-col">
                      <div className="flex gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="font-mono text-sm md:text-base text-gray-700 dark:text-gray-300 flex-1 flex flex-col justify-center">
                        <p className="text-purple-600 dark:text-purple-400">const <span className="text-blue-600 dark:text-blue-400">developer</span> = {'{'}</p>
                        <p className="ml-4">name: <span className="text-green-600 dark:text-green-400">'Ashish Kumar'</span>,</p>
                        <p className="ml-4">role: <span className="text-green-600 dark:text-green-400">'Full Stack Developer'</span>,</p>
                        <p className="ml-4">skills: [<span className="text-green-600 dark:text-green-400">'React'</span>, <span className="text-green-600 dark:text-green-400">'Node.js'</span>, <span className="text-green-600 dark:text-green-400">'Java'</span>, <span className="text-green-600 dark:text-green-400">'Spring Boot'</span>],</p>
                        <p className="ml-4">passion: <span className="text-green-600 dark:text-green-400">'Building scalable apps'</span></p>
                        <p className="text-purple-600 dark:text-purple-400">{'}'};</p>
                        <br/>
                        <p><span className="text-blue-600 dark:text-blue-400">developer</span>.<span className="text-yellow-600 dark:text-yellow-400">code</span>();</p>
                      </div>
                    </div>
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
