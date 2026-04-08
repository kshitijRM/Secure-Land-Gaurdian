import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Upload, Search, ShieldCheck, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Upload Document',
    description: 'Property owner uploads land documents and identity verification through our secure portal.',
    step: '01',
  },
  {
    icon: Search,
    title: 'AI Analysis',
    description: 'Our AI engine scans for inconsistencies, cross-references government databases, and detects forgery patterns.',
    step: '02',
  },
  {
    icon: ShieldCheck,
    title: 'Blockchain Registration',
    description: 'Verified documents are hashed and recorded on an immutable blockchain ledger with timestamp proof.',
    step: '03',
  },
  {
    icon: CheckCircle2,
    title: 'Verified & Secure',
    description: 'Land record is now tamper-proof. Any future verification happens instantly via QR code or digital lookup.',
    step: '04',
  },
];

function TimelineStep({ step, index, total }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.15 * index, ease: [0.22, 1, 0.36, 1] }}
      data-testid={`timeline-step-${index}`}
      className="relative flex gap-6 sm:gap-8"
    >
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-[#0F0F0F] border border-[#007AFF]/40 flex items-center justify-center flex-shrink-0 relative">
          <div className="absolute inset-0 rounded-full bg-[#007AFF]/10 animate-pulse-glow" />
          <span className="text-xs font-bold text-[#007AFF] relative z-10">{step.step}</span>
        </div>
        {index < total - 1 && (
          <div className="w-px flex-1 min-h-[60px] timeline-line opacity-40" />
        )}
      </div>

      {/* Content */}
      <div className="pb-12">
        <div className="w-10 h-10 rounded-xl bg-[#1A1A1A] border border-white/10 flex items-center justify-center mb-4">
          <step.icon className="w-5 h-5 text-[#007AFF]" strokeWidth={1.5} />
        </div>
        <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white mb-2">
          {step.title}
        </h3>
        <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-md">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" data-testid="how-it-works-section" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-neutral-500 mb-4">
            Process
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white max-w-3xl">
            How it <span className="text-gradient">works</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl">
          {steps.map((step, i) => (
            <TimelineStep key={step.step} step={step} index={i} total={steps.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
