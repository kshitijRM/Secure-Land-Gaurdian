import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { targetUsers } from '@/data/content';

export default function TargetUsers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="target-users" data-testid="target-users-section" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-neutral-500 mb-4">
            Who It's For
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white max-w-3xl">
            Built for <span className="text-gradient">everyone</span> in the chain.
          </h2>
        </motion.div>

        <div className="space-y-2">
          {targetUsers.map((user, i) => (
            <motion.div
              key={user.title}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <Link
                to={`/users/${user.slug}`}
                data-testid={`target-user-${i}`}
                className="group flex items-center gap-6 p-6 rounded-xl hover:bg-white/[0.03] border border-transparent hover:border-white/5 transition-all duration-300 cursor-pointer hover:translate-x-2"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0F0F0F] border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-[#007AFF]/30 group-hover:bg-[#007AFF]/5 transition-all duration-300">
                  <user.icon className="w-5 h-5 text-[#007AFF]" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium tracking-tight text-white mb-0.5 group-hover:text-[#007AFF] transition-colors duration-300">
                    {user.title}
                  </h3>
                  <p className="text-sm text-neutral-400">
                    {user.description}
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-700 opacity-0 group-hover:opacity-100 group-hover:text-[#007AFF] transition-all duration-300 flex-shrink-0" strokeWidth={1.5} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
