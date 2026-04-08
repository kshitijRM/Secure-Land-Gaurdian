import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, ShieldAlert, Target, Lightbulb } from 'lucide-react';

const swotData = [
  {
    icon: TrendingUp,
    title: 'Strengths',
    color: '#007AFF',
    items: [
      'First-mover advantage in blockchain land registry',
      'AI + Blockchain dual-layer security',
      'Government partnership pipeline',
    ],
  },
  {
    icon: ShieldAlert,
    title: 'Weaknesses',
    color: '#FF6B6B',
    items: [
      'High initial infrastructure cost',
      'Requires government regulatory approval',
      'Digital literacy barriers in rural areas',
    ],
  },
  {
    icon: Target,
    title: 'Opportunities',
    color: '#4ECB71',
    items: [
      'Global land registry digitization trend',
      'Growing blockchain adoption in government',
      'UN Sustainable Development Goals alignment',
    ],
  },
  {
    icon: Lightbulb,
    title: 'Threats',
    color: '#FFB84D',
    items: [
      'Competing government-led digitization efforts',
      'Blockchain regulatory uncertainty',
      'Resistance from legacy system stakeholders',
    ],
  },
];

export default function Swot() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="swot" data-testid="swot-section" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-neutral-500 mb-4">
            Analysis
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white max-w-3xl">
            SWOT <span className="text-gradient">overview</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {swotData.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              data-testid={`swot-card-${i}`}
              className="glass-card rounded-2xl p-8 sm:p-10 group transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <item.icon className="w-4 h-4" style={{ color: item.color }} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-medium tracking-tight text-white">
                  {item.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {item.items.map((point, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-neutral-400 leading-relaxed">
                    <span
                      className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: item.color }}
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
