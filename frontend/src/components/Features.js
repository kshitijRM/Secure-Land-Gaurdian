import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lock, Fingerprint, BrainCircuit, MapPin, QrCode } from 'lucide-react';

const features = [
  {
    icon: Lock,
    title: 'Blockchain Security',
    description: 'Immutable, tamper-proof land records stored on a decentralized ledger. Every transaction is permanently recorded and publicly verifiable.',
    span: 'md:col-span-8 md:row-span-2',
    highlight: true,
  },
  {
    icon: Fingerprint,
    title: 'Biometric Authentication',
    description: 'Multi-factor biometric verification ensures only verified owners can authorize land transfers.',
    span: 'md:col-span-4',
  },
  {
    icon: BrainCircuit,
    title: 'AI Fraud Detection',
    description: 'Machine learning models detect anomalous patterns and flag suspicious transactions in real-time.',
    span: 'md:col-span-4',
  },
  {
    icon: MapPin,
    title: 'GIS Mapping',
    description: 'Satellite-integrated Geographic Information System maps every parcel with precision coordinates.',
    span: 'md:col-span-6',
  },
  {
    icon: QrCode,
    title: 'QR Verification',
    description: 'Instant document authentication via unique QR codes linked to blockchain records.',
    span: 'md:col-span-6',
  },
];

function FeatureCard({ feature, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.08 * index, ease: [0.22, 1, 0.36, 1] }}
      data-testid={`feature-card-${index}`}
      className={`${feature.span} col-span-1 bg-[#0F0F0F] border border-white/5 rounded-2xl relative overflow-hidden group hover:border-white/20 transition-colors duration-500 ${
        feature.highlight ? 'p-10 sm:p-12' : 'p-8'
      }`}
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/5 via-transparent to-[#5E5CE6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className="relative z-10 h-full flex flex-col">
        <div className={`w-10 h-10 rounded-xl bg-[#1A1A1A] border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#007AFF]/30 transition-colors duration-500`}>
          <feature.icon className="w-5 h-5 text-[#007AFF]" strokeWidth={1.5} />
        </div>

        <h3 className={`${feature.highlight ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'} font-semibold tracking-tight text-white mb-3`}>
          {feature.title}
        </h3>

        <p className={`${feature.highlight ? 'text-base' : 'text-sm'} text-neutral-400 leading-relaxed max-w-md`}>
          {feature.description}
        </p>

        {feature.highlight && (
          <div className="mt-auto pt-8">
            <div className="flex items-center gap-4">
              {['Decentralized', 'Immutable', 'Transparent'].map((tag) => (
                <span
                  key={tag}
                  className="text-xs uppercase tracking-wider text-neutral-500 bg-white/5 px-3 py-1.5 rounded-full border border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section id="features" data-testid="features-section" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-neutral-500 mb-4">
            Features
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white max-w-3xl mb-16">
            Built with the most{' '}
            <span className="text-gradient">advanced technology</span> stack.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
