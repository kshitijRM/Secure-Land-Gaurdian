import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const teamMembers = [
  {
    name: 'Dr. A. Sharma',
    role: 'Lead Architect',
    image: 'https://images.unsplash.com/photo-1765776830139-72b2184dae5a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGRhcmslMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTc3NTYzMTY1NHww&ixlib=rb-4.1.0&q=85',
  },
  {
    name: 'R. Patel',
    role: 'Blockchain Lead',
    image: 'https://images.unsplash.com/photo-1764545973653-94c40d993495?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGRhcmslMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTc3NTYzMTY1NHww&ixlib=rb-4.1.0&q=85',
  },
  {
    name: 'S. Nair',
    role: 'AI & ML Engineer',
    image: 'https://images.unsplash.com/photo-1758600587730-a11917c13b85?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGRhcmslMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTc3NTYzMTY1NHww&ixlib=rb-4.1.0&q=85',
  },
  {
    name: 'K. Verma',
    role: 'Full-Stack Developer',
    image: 'https://images.pexels.com/photos/5349053/pexels-photo-5349053.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
];

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="team" data-testid="team-section" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] font-bold text-neutral-500 mb-4">
            The Team
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white max-w-3xl">
            People behind the <span className="text-gradient">vision</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              data-testid={`team-member-${i}`}
              className="group text-center"
            >
              <div className="relative w-28 h-28 mx-auto mb-5 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-[#007AFF]/40 transition-colors duration-500">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <h3 className="text-base font-medium tracking-tight text-white mb-0.5">
                {member.name}
              </h3>
              <p className="text-sm text-neutral-500">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
