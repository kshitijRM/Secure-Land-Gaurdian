import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { problems } from '@/data/content';

function AnimatedCard({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Problem() {
  return (
    <section id="problem" data-testid="problem-section" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedCard>
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-neutral-500 mb-4">
            The Problem
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white max-w-3xl mb-16">
            Land fraud is a{' '}
            <span className="text-gradient">trillion-dollar crisis</span> hiding in plain sight.
          </h2>
        </AnimatedCard>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {problems.map((stat, i) => (
            <AnimatedCard
              key={stat.label}
              delay={0.1 * (i + 1)}
              className={`${stat.span} col-span-1`}
            >
              <Link
                to={`/problem/${stat.slug}`}
                data-testid={`problem-stat-${i}`}
                className="block bg-[#0F0F0F] border border-white/5 rounded-2xl p-8 sm:p-10 group hover:border-[#007AFF]/30 transition-all duration-500 relative overflow-hidden h-full cursor-pointer hover:-translate-y-0.5"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <stat.icon className="w-5 h-5 text-[#007AFF]" strokeWidth={1.5} />
                    <ExternalLink className="w-4 h-4 text-neutral-600 opacity-0 group-hover:opacity-100 group-hover:text-[#007AFF] transition-all duration-300 -translate-y-1 group-hover:translate-y-0" strokeWidth={1.5} />
                  </div>
                  <p className="text-4xl sm:text-5xl font-bold text-white tracking-tighter stat-glow mb-3">
                    {stat.number}
                  </p>
                  <p className="text-sm uppercase tracking-[0.15em] text-neutral-500 font-medium">
                    {stat.label}
                  </p>
                </div>
              </Link>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
