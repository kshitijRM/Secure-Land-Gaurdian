import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { impacts } from '@/data/content';

export default function Impact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="impact" data-testid="impact-section" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#007AFF]/3 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-neutral-500 mb-4">
            Impact
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white max-w-3xl mx-auto">
            Transforming land ownership for{' '}
            <span className="text-gradient">billions</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {impacts.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.12 * i, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to={`/impact/${item.slug}`}
                data-testid={`impact-card-${i}`}
                className="block bg-[#0F0F0F] border border-white/5 rounded-2xl p-8 sm:p-10 text-center group hover:border-[#007AFF]/30 transition-all duration-500 relative overflow-hidden cursor-pointer hover:-translate-y-1 h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#007AFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 right-4">
                  <ArrowUpRight className="w-4 h-4 text-neutral-600 opacity-0 group-hover:opacity-100 group-hover:text-[#007AFF] transition-all duration-300" strokeWidth={1.5} />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-white/10 flex items-center justify-center mx-auto mb-6 group-hover:border-[#007AFF]/30 group-hover:bg-[#007AFF]/5 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-[#007AFF]" strokeWidth={1.5} />
                  </div>
                  <p className="text-5xl sm:text-6xl font-bold tracking-tighter text-white stat-glow mb-2">
                    {item.stat}
                  </p>
                  <h3 className="text-lg font-medium tracking-tight text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
