import { motion } from 'framer-motion'
import { Box, Clock, Headset, Users, Zap, Shield, Cpu, Move, Battery, MousePointer2, EyeOff } from 'lucide-react'
import { gameData } from '../data/gameData'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const iconMap = {
  cube: Box,
  clock: Clock,
  headset: Headset,
  users: Users,
  cpu: Cpu,
  zap: Zap,
  move: Move,
  battery: Battery,
  'mouse-pointer-2': MousePointer2,
  'eye-off': EyeOff,
}

const colorStyles = {
  red: { icon: 'text-accent-red', border: 'border-accent-red/30', glow: 'glow-red' },
  amber: { icon: 'text-accent-amber', border: 'border-accent-amber/30', glow: 'glow-amber' },
}

export function Features() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: 'spring', stiffness: 100 } },
  }

  const glowColors = {
    red: 'rgba(255,51,51,0.3)',
    amber: 'rgba(255,170,0,0.3)',
  }

  return (
    <section
      ref={sectionRef}
      id="features"
      className="section relative"
      style={{ backgroundImage: 'url("/images/grid-pattern.svg")', backgroundSize: '80px 80px' }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,51,51,0.08)_0%,transparent_70%)]" />
      <div className="container relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-accent-red/10 text-accent-red text-sm font-mono tracking-wider mb-4">
            CARACTERÍSTICAS PRINCIPALES
          </span>
          <h2 className="section-title">Todo lo que necesitas saber</h2>
          <p className="section-subtitle">
            Diseñado desde cero para VR. Cada mecánica aprovecha la inmersión total y el tracking de manos.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {gameData.features.map((feature) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap] || Box
            const colors = colorStyles[feature.color as keyof typeof colorStyles] || colorStyles.red

            return (
              <motion.article
                key={feature.id}
                variants={itemVariants}
                className={`card relative overflow-hidden group ${colors.border} ${colors.glow}`}
                style={{ '--glow-color': glowColors[feature.color as keyof typeof glowColors] || glowColors.red } as React.CSSProperties}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent-red/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent-amber/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${colors.icon} bg-bomb-bg border ${colors.border} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-text-primary mb-3 group-hover:text-accent-red transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-red to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ type: 'spring', stiffness: 500 }}
                  style={{ transformOrigin: 'left' }}
                />
              </motion.article>
            )
          })}
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {[
            { icon: Zap, title: 'Física Realista', desc: 'Cables que se cortan, botones que se presionan, teclados que responden al tacto.' },
            { icon: Shield, title: 'Accesibilidad VR', desc: 'Opciones de confort, turn snap, height adjustment, modo zurdo.' },
            { icon: Cpu, title: 'Optimizado Quest', desc: '90 FPS estables en Quest 2/3. Gráficos escalables para PCVR.' },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              className="card text-center p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent-red/10 flex items-center justify-center mx-auto mb-4 text-accent-red">
                <item.icon className="w-6 h-6" />
              </div>
              <h4 className="font-display text-lg font-bold mb-2">{item.title}</h4>
              <p className="text-text-secondary text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}