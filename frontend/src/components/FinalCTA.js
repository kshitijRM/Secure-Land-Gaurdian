import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="cta" data-testid="cta-section" className="relative py-32 sm:py-40 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#007AFF]/5 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#5E5CE6]/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-none text-white mb-6">
            Secure Land.
            <br />
            <span className="text-gradient">Secure Future.</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed">
            Join the movement to end land fraud. Be part of the infrastructure that 
            protects property rights for generations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              data-testid="cta-get-started-button"
              className="bg-[#007AFF] text-white hover:bg-[#005bb5] shadow-[0_0_20px_rgba(0,122,255,0.3)] hover:shadow-[0_0_30px_rgba(0,122,255,0.5)] px-8 py-4 rounded-full transition-all font-medium text-sm flex items-center gap-2 hover:scale-105"
            >
              Get Started Now <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
            <button
              data-testid="cta-contact-button"
              className="bg-transparent text-white border border-white/20 hover:border-white/50 backdrop-blur-md transition-all px-8 py-4 rounded-full text-sm font-medium"
            >
              Contact Sales
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
