import { motion } from 'motion/react';
import { SectionHeading } from './SectionHeading';
import { Github, Star, GitFork, Activity } from 'lucide-react';

const githubStats = {
  repos: 25,
  contributions: '500+',
  topLanguages: ['JavaScript', 'TypeScript', 'Java', 'Python']
};

export function GithubSection() {
  return (
    <section id="github" className="py-20 md:py-32 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="GitHub Activity" subtitle="Open source contributions and project repositories." />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#0d1117] border border-gray-800 rounded-3xl overflow-hidden shadow-2xl text-gray-300"
        >
          <div className="p-8 md:p-12 border-b border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center border-4 border-gray-700">
                <Github className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Ashish Kumar</h3>
                <p className="text-gray-400">@[YourGithubHandle]</p>
              </div>
            </div>
            <a 
              href="#" 
              className="px-6 py-3 bg-[#238636] hover:bg-[#2ea043] text-white font-medium rounded-xl transition-colors flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              View GitHub Profile
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-800">
            <div className="p-8 text-center hover:bg-gray-800/50 transition-colors">
              <div className="flex items-center justify-center gap-2 text-gray-400 mb-2">
                <Star className="w-5 h-5" />
                <span className="font-medium">Total Repositories</span>
              </div>
              <p className="text-4xl font-bold text-white">{githubStats.repos}</p>
            </div>
            <div className="p-8 text-center hover:bg-gray-800/50 transition-colors">
              <div className="flex items-center justify-center gap-2 text-gray-400 mb-2">
                <Activity className="w-5 h-5" />
                <span className="font-medium">Contributions</span>
              </div>
              <p className="text-4xl font-bold text-[#39d353]">{githubStats.contributions}</p>
            </div>
            <div className="p-8 text-center hover:bg-gray-800/50 transition-colors">
              <div className="flex items-center justify-center gap-2 text-gray-400 mb-4">
                <GitFork className="w-5 h-5" />
                <span className="font-medium">Top Languages</span>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {githubStats.topLanguages.map(lang => (
                  <span key={lang} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-medium border border-gray-700">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
