import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 hero-grid" />
      <div className="absolute inset-0 hero-radial" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#007AFF]/5 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#5E5CE6]/5 blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] font-bold text-neutral-500 mb-6">
            AI + Blockchain Powered
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-none mb-6"
        >
          End Land Fraud
          <br />
          <span className="text-gradient">Forever.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A next-generation land verification system that combines artificial intelligence 
          with blockchain technology to eliminate property fraud at its source.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#cta"
            data-testid="hero-cta-button"
            className="bg-white text-black hover:bg-gray-200 transition-all font-medium px-8 py-3.5 rounded-full text-sm flex items-center gap-2 hover:scale-105"
          >
            Get Started <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </a>
          <button
            data-testid="hero-demo-button"
            className="bg-transparent text-white border border-white/20 hover:border-white/50 backdrop-blur-md transition-all px-8 py-3.5 rounded-full text-sm flex items-center gap-2"
          >
            <Play className="w-4 h-4" strokeWidth={1.5} /> Watch Demo
          </button>
        </motion.div>

        {/* Bottom fade */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 flex justify-center"
        >
          <div className="w-px h-16 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
