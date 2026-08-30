import { motion } from 'motion/react';
import { Linkedin, ArrowRight } from 'lucide-react';

export function LinkedinSection() {
  return (
    <section className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-[#0077b5] to-[#005582] rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden"
        >
          {/* Abstract circles */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-black/10 blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <Linkedin className="w-8 h-8 text-[#0077b5]" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Connect Professionally</h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
              Connect with me on LinkedIn to discuss opportunities, collaborations, technology, and exciting projects.
            </p>
            
            <a 
              href="#"
              className="group flex items-center gap-2 px-8 py-4 bg-white text-[#0077b5] rounded-full font-bold hover:bg-gray-50 transition-colors shadow-lg"
            >
              Visit My LinkedIn
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
