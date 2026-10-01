import { motion } from 'framer-motion'
import { useState, KeyboardEvent } from 'react'
import { X, ChevronLeft, ChevronRight, Play, User } from 'lucide-react'
import { gameData } from '../data/gameData'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const BASE_URL = import.meta.env.BASE_URL || '/'
const getAssetUrl = (path: string) => `${BASE_URL}${path.replace(/^\//, '')}`

interface VideoItem {
  id: string
  title: string
  videoSrc: string
  poster: string
  isDemo: boolean
}

export function UserTesting() {
  const [sectionRef, isVisible] = useScrollAnimation(0.1)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const tests = gameData.userTesting
  const demoVideo: VideoItem = {
    id: 'demo',
    title: 'Demostración',
    videoSrc: gameData.images.demoVideo,
    poster: gameData.images.demoPoster,
    isDemo: true,
  }
  const allVideos: VideoItem[] = [
    demoVideo,
    ...tests.map((t) => ({
      id: t.id,
      title: `Test ${t.id.split('-')[1]}`,
      videoSrc: t.videoSrc,
      poster: t.thumbnail,
      isDemo: false,
    })),
  ]

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = ''
  }

  const next = () => setCurrentIndex((prev) => (prev + 1) % allVideos.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + allVideos.length) % allVideos.length)

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!lightboxOpen) return
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowRight') next()
    if (e.key === 'ArrowLeft') prev()
  }

  const currentVideo = allVideos[currentIndex]

  return (
    <section
      ref={sectionRef}
      id="usertesting"
      className="section relative"
      onKeyDown={handleKeyDown}
    >
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-accent-red/10 text-accent-red text-sm font-mono tracking-wider mb-4">
            <User className="w-4 h-4" />
            PRUEBAS DE USUARIOS
          </span>
          <h2 className="section-title">Playtesting Real</h2>
          <p className="section-subtitle">
            Mira a jugadores reales enfrentándose a la bomba por primera vez. Sin guiones, sin ediciones: reacciones genuinas.
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Large Demo Video - Full Width */}
          <motion.div
            className="relative aspect-video overflow-hidden rounded-xl cursor-pointer group"
            whileHover={{ scale: 1.01 }}
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            onClick={() => openLightbox(0)}
          >
            <video
              src={getAssetUrl(demoVideo.videoSrc)}
              poster={getAssetUrl(demoVideo.poster)}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              muted
              preload="metadata"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bomb-bg/90 via-bomb-bg/30 to-transparent group-hover:opacity-0 transition-opacity duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                className="w-24 h-24 rounded-full bg-accent-red/90 flex items-center justify-center text-white scale-95 group-hover:scale-100 transition-transform duration-300 shadow-2xl shadow-accent-red/50"
                whileTap={{ scale: 0.9 }}
                aria-label="Ver demostración"
              >
                <Play className="w-10 h-10 ml-1" />
              </motion.button>
            </div>
            <div className="absolute top-4 right-4">
              <span className="bg-accent-red/90 text-white px-4 py-1.5 rounded-full text-sm font-mono tracking-wider">
                DEMOSTRACIÓN
              </span>
            </div>
          </motion.div>

          {/* Existing 4-test grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {tests.map((test, index) => (
              <motion.article
                key={test.id}
                className="card relative overflow-hidden group p-0"
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                onClick={() => openLightbox(index + 1)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <video
                    src={getAssetUrl(test.videoSrc)}
                    poster={getAssetUrl(test.thumbnail)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    muted
                    preload="metadata"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bomb-bg/90 via-bomb-bg/30 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button
                      className="w-20 h-20 rounded-full bg-accent-red/90 flex items-center justify-center text-white scale-95 group-hover:scale-100 transition-transform duration-300 shadow-2xl shadow-accent-red/50"
                      whileTap={{ scale: 0.9 }}
                      aria-label={`Ver video ${index + 1}`}
                    >
                      <Play className="w-8 h-8 ml-1" />
                    </motion.button>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-accent-red/90 text-white px-3 py-1 rounded-full text-xs font-mono">
                      Test {index + 1}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>

        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Reproductor de video de playtesting"
          >
            <button
              className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-colors"
              onClick={(e) => { e.stopPropagation(); closeLightbox() }}
              aria-label="Cerrar"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              className="absolute left-6 z-10 p-3 rounded-full bg-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-colors hidden md:flex"
              onClick={(e) => { e.stopPropagation(); prev() }}
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              className="absolute right-6 z-10 p-3 rounded-full bg-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-colors hidden md:flex"
              onClick={(e) => { e.stopPropagation(); next() }}
              aria-label="Siguiente"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              className="relative max-w-5xl max-h-[85vh] w-full mx-4"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
                <video
                  src={getAssetUrl(currentVideo.videoSrc)}
                  className="w-full h-full object-contain"
                  controls
                  autoPlay
                  playsInline
                  muted={!currentVideo.isDemo}
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white/70 text-sm mt-2">
                <span className="font-mono text-accent-red">{currentVideo.title.toUpperCase()}</span>
                <span>{currentIndex + 1} / {allVideos.length}</span>
              </div>
            </motion.div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 md:hidden">
              <button onClick={(e) => { e.stopPropagation(); prev() }} className="p-2 rounded-full bg-white/10 text-white/70" aria-label="Anterior"><ChevronLeft className="w-5 h-5" /></button>
              <span className="px-4 text-white/70">{currentIndex + 1} / {allVideos.length}</span>
              <button onClick={(e) => { e.stopPropagation(); next() }} className="p-2 rounded-full bg-white/10 text-white/70" aria-label="Siguiente"><ChevronRight className="w-5 h-5" /></button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}