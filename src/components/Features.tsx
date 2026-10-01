import { motion } from 'framer-motion'
import { useState, KeyboardEvent } from 'react'
import { Box, Clock, Headset, Users, Zap, Cpu, Move, Battery, MousePointer2, EyeOff, Maximize2, X } from 'lucide-react'
import { gameData } from '../data/gameData'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const BASE_URL = import.meta.env.BASE_URL || '/'
const getAssetUrl = (path: string) => `${BASE_URL}${path.replace(/^\//, '')}`

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

const glowColors = {
  red: 'rgba(255,51,51,0.3)',
  amber: 'rgba(255,170,0,0.3)',
}

export function Features() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: 'spring', stiffness: 100 } },
  }

  const openLightbox = (index: number) => {
    setCurrentFeatureIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = ''
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!lightboxOpen) return
    if (e.key === 'Escape') closeLightbox()
  }

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget
    target.src = getAssetUrl(gameData.placeholders.screenshot)
  }

  const currentFeature = gameData.features[currentFeatureIndex]

  return (
    <section
      ref={sectionRef}
      id="features"
      className="section relative"
      style={{ backgroundImage: 'url("/images/grid-pattern.svg")', backgroundSize: '80px 80px' }}
      onKeyDown={handleKeyDown}
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {gameData.features.map((feature, featureIndex) => {
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

                <div className="relative z-10 p-6 pb-0">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${colors.icon} bg-bomb-bg border ${colors.border} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="font-display text-xl font-bold text-text-primary mb-3 group-hover:text-accent-red transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-text-secondary leading-relaxed mb-4">
                    {feature.description}
                  </p>

                  <div className="relative aspect-square overflow-hidden rounded-lg cursor-zoom-in group"
                    onClick={() => openLightbox(featureIndex)}
                  >
                    <img
                      src={getAssetUrl(feature.image)}
                      alt={feature.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      onError={handleImageError}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bomb-bg/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-2 left-2 right-2 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Maximize2 className="w-5 h-5 text-text-primary bg-bomb-bg/80 p-1.5 rounded-full" />
                    </div>
                  </div>
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

        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-bomb-bg/98 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Vista ampliada de característica"
          >
            <button
              className="absolute top-6 right-6 z-10 p-2 rounded-full bg-bomb-surface/80 text-text-secondary hover:text-text-primary hover:bg-bomb-surfaceHover transition-colors"
              onClick={(e) => { e.stopPropagation(); closeLightbox() }}
              aria-label="Cerrar"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              className="relative max-w-5xl max-h-[90vh] w-full mx-4"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={getAssetUrl(currentFeature.image)}
                alt={`Tick Tock Boom - ${currentFeature.title}`}
                className="w-full h-auto rounded-lg shadow-2xl"
                onError={handleImageError}
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-text-secondary text-sm">
                <span className="font-mono text-accent-amber">{currentFeature.title.toUpperCase()}</span>
                <span>{currentFeatureIndex + 1} / {gameData.features.length}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}