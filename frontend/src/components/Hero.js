import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

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
      <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] rounded-full bg-[#007AFF]/3 blur-[80px] animate-float" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm uppercase tracking-[0.2em] font-medium text-neutral-400 mb-8">
            <Sparkles className="w-3.5 h-3.5 text-[#007AFF]" strokeWidth={1.5} />
            AI + Blockchain Powered
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-8"
        >
          End Land Fraud
          <br />
          <span className="text-gradient">Forever.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed"
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
            href="https://ethereum.org/en/web3/"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="hero-cta-button"
            className="group bg-white text-black hover:bg-gray-100 transition-all font-medium px-8 py-3.5 rounded-full text-sm flex items-center gap-2 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          >
            Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
          </a>
          <a
            href="https://www.youtube.com/watch?v=SSo_EIwHSd4"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="hero-demo-button"
            className="group bg-transparent text-white border border-white/20 hover:border-white/50 backdrop-blur-md transition-all px-8 py-3.5 rounded-full text-sm flex items-center gap-2 hover:bg-white/5"
          >
            <Play className="w-4 h-4 group-hover:scale-110 transition-transform" strokeWidth={1.5} /> Watch Demo
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-24 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-600">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
