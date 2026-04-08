import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PageLayout({ children, backLabel = 'Back to Home' }) {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />
      <div className="pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="max-w-7xl mx-auto px-6 py-8">
            <Link
              to="/"
              data-testid="back-to-home"
              className="group inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" strokeWidth={1.5} />
              {backLabel}
            </Link>
          </div>
          {children}
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export function DetailHero({ icon: Icon, title, tagline, heroImage }) {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden" data-testid="detail-hero">
      {/* Background image */}
      {heroImage && (
        <div className="absolute inset-0">
          <img src={heroImage} alt="" className="w-full h-full object-cover opacity-10" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-[#050505]" />
        </div>
      )}
      <div className="absolute inset-0 hero-radial" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-14 h-14 rounded-2xl bg-[#0F0F0F] border border-white/10 flex items-center justify-center mb-8">
            <Icon className="w-7 h-7 text-[#007AFF]" strokeWidth={1.5} />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-none text-white mb-4">
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl leading-relaxed">
            {tagline}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function DetailContent({ overview, keyPoints, stats, techStack, revenue }) {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-neutral-500 mb-4">
            Overview
          </p>
          <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed max-w-3xl">
            {overview}
          </p>
        </motion.div>

        {/* Stats row */}
        {stats && stats.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20"
          >
            {stats.map((s, i) => (
              <div key={i} className="bg-[#0F0F0F] border border-white/5 rounded-2xl p-8 text-center group hover:border-[#007AFF]/20 transition-all duration-300" data-testid={`detail-stat-${i}`}>
                <p className="text-4xl sm:text-5xl font-bold tracking-tighter text-white stat-glow mb-2">{s.value}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">{s.label}</p>
              </div>
            ))}
          </motion.div>
        )}

        {/* Revenue highlight */}
        {revenue && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-r from-[#007AFF]/10 to-[#5E5CE6]/10 border border-[#007AFF]/20 rounded-2xl p-8 sm:p-10">
              <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#007AFF] mb-2">Revenue Projection</p>
              <p className="text-2xl sm:text-3xl font-bold tracking-tight text-white">{revenue}</p>
            </div>
          </motion.div>
        )}

        {/* Key Points */}
        {keyPoints && (
          <div className="mb-20">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-neutral-500 mb-8"
            >
              Key Capabilities
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {keyPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.08 * i }}
                  data-testid={`detail-point-${i}`}
                  className="bg-[#0F0F0F] border border-white/5 rounded-2xl p-6 sm:p-8 group hover:border-[#007AFF]/20 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <h3 className="text-base sm:text-lg font-medium tracking-tight text-white mb-2 group-hover:text-[#007AFF] transition-colors duration-300">
                    {point.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {point.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Tech stack */}
        {techStack && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-neutral-500 mb-4">
              Technology Stack
            </p>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-sm text-neutral-400 bg-white/5 px-4 py-2 rounded-full border border-white/5 hover:border-[#007AFF]/20 hover:text-white transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export function RelatedLinks({ items, basePath, currentSlug }) {
  const related = items.filter(item => item.slug !== currentSlug).slice(0, 3);
  if (related.length === 0) return null;

  return (
    <section className="py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-neutral-500 mb-8">
          Explore More
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {related.map((item, i) => (
            <Link
              key={item.slug}
              to={`${basePath}/${item.slug}`}
              data-testid={`related-link-${i}`}
              className="group bg-[#0F0F0F] border border-white/5 rounded-2xl p-6 hover:border-[#007AFF]/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <item.icon className="w-5 h-5 text-[#007AFF]" strokeWidth={1.5} />
                <ArrowUpRight className="w-4 h-4 text-neutral-600 opacity-0 group-hover:opacity-100 group-hover:text-[#007AFF] transition-all duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-medium text-white mb-1 group-hover:text-[#007AFF] transition-colors duration-300">{item.title}</h3>
              <p className="text-xs text-neutral-500">{item.description || item.tagline}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
