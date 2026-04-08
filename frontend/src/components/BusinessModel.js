import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Handshake, CreditCard, Globe } from 'lucide-react';

const models = [
  {
    icon: Building2,
    title: 'Government Licensing',
    description: 'SaaS licensing to state and central land registry authorities for digitization of existing records.',
  },
  {
    icon: Handshake,
    title: 'Strategic Partnerships',
    description: 'Revenue-sharing with real estate firms, banks, and insurance providers for integrated verification.',
  },
  {
    icon: CreditCard,
    title: 'Per-Transaction Fees',
    description: 'Micro-fees on each verification, transfer, or QR scan — scalable with adoption.',
  },
  {
    icon: Globe,
    title: 'International Expansion',
    description: 'White-label solutions for developing nations with high land fraud rates and fragmented registries.',
  },
];

export default function BusinessModel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="business-model" data-testid="business-model-section" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-neutral-500 mb-4">
            Business Model
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white max-w-3xl">
            Revenue <span className="text-gradient">streams</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {models.map((model, i) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              data-testid={`business-card-${i}`}
              className="bg-[#0F0F0F] p-8 sm:p-10 group hover:bg-[#111111] transition-colors duration-300"
            >
              <model.icon className="w-5 h-5 text-[#007AFF] mb-5" strokeWidth={1.5} />
              <h3 className="text-lg font-medium tracking-tight text-white mb-2">
                {model.title}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {model.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
