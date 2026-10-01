export const gameData = {
  title: "Tick, Tock, Boom!",
  tagline: "Una caja de regalo... una bomba... el tiempo corre. ¿Desactivarás a tiempo?",
  description: "Estás en una habitación —todo el mundo es una habitación, como un skyblock—. En el centro, una caja de regalo. La tocas y... ¡sorpresa! Es una bomba. El temporizador empieza a correr. La bomba tiene 5 caras, cada una con un puzzle único: 1) Simon Dice, 2) Unir cables a sockets, 3) Un laberinto que resuelves moviendo el cubo, 4) Una sección de baterías cerca de las paredes, 5) Un gran botón rojo. Cuidado: cuando estés concentrado resolviendo, tu pantalla se cegará y el cubo se pondrá de un color —debes presionar el botón de ese color en las paredes. Cada segundo cuenta.",
  genre: "VR Puzzle / Simulación de desactivación de bombas",
  platform: "Meta Quest / SteamVR / PICO",
  releaseDate: "Próximamente 2025",

  // Rutas de imágenes - REEMPLAZA ESTOS ARCHIVOS EN public/images/
  images: {
    heroBg: "/images/hero-bg.jpg",
    logo: "/images/logo.svg",
    ogImage: "/images/og-image.jpg",
    screenshots: [
      "/images/screenshots/captura1.png",
    ],
    team: [
      "/images/team/dev1.jpg",
      "/images/team/dev2.jpg",
      "/images/team/dev3.jpg",
      "/images/team/dev4.jpg",
    ],
    gameDesign: [
      "/images/design/diseño1.jpeg",
      "/images/design/diseño2.jpeg",
      "/images/design/diseño3.jpeg",
      "/images/design/diseño4.jpeg",
      "/images/design/diseño5.jpeg",
    ],
    brainstorm: "/images/brainstorm.jpg",
    maqueta: "/images/maqueta.jpeg",
  },

  // Placeholders generados (se usan si no existen las imágenes reales)
  placeholders: {
    heroBg: "/images/placeholders/hero-bg.svg",
    logo: "/images/placeholders/logo.svg",
    screenshot: "/images/placeholders/screenshot.svg",
    team: "/images/placeholders/team/avatar.svg",
    gameDesign: "/images/placeholders/design.svg",
  },

  features: [
    {
      id: "simon",
      icon: "cpu",
      title: "Simon Dice",
      description: "Memoriza y reproduce la secuencia de luces antes de que el tiempo se agote.",
      color: "red",
      image: "/images/simon dice.jpg",
    },
    {
      id: "cables",
      icon: "zap",
      title: "Cables y Sockets",
      description: "Conecta cada cable a su socket correcto. Un error y... boom.",
      color: "amber",
      image: "/images/cables y sockets.jpg",
    },
    {
      id: "maze",
      icon: "move",
      title: "Laberinto del Cubo",
      description: "Inclina y mueve el cubo para guiar la bola al centro.",
      color: "red",
      image: "/images/laberinto.jpg",
    },
    {
      id: "batteries",
      icon: "battery",
      title: "Sección de Baterías",
      description: "Localiza y coloca las baterías cerca de las paredes indicadas.",
      color: "amber",
      image: "/images/batería.jpg",
    },
    {
      id: "button",
      icon: "mouse-pointer-2",
      title: "Gran Botón Rojo",
      description: "El botón final. Presiónalo en el momento exacto.",
      color: "red",
      image: "/images/boton rojo.jpg",
    },
    {
      id: "blindness",
      icon: "eye-off",
      title: "Evento de Ceguera",
      description: "Tu pantalla se ciega, el cubo cambia de color. Presiona el botón de ese color en la pared.",
      color: "amber",
      image: "/images/ceguera.jpg",
    },
  ],

  team: [
    {
      name: "Alex Rivera",
      role: "Director Creativo / Lead Designer",
      bio: "Diseñador de puzzles y sistemas VR. Antes en estudios AAA.",
      social: { twitter: "#", linkedin: "#" },
      imageIndex: 0,
    },
    {
      name: "Maria Chen",
      role: "Programadora Principal VR",
      bio: "Especialista en interacción física y optimización Quest/PCVR.",
      social: { twitter: "#", github: "#" },
      imageIndex: 1,
    },
    {
      name: "James Okonkwo",
      role: "Artista Técnico 3D / VFX",
      bio: "Modelado, shaders y efectos de partículas para la bomba.",
      social: { artstation: "#", twitter: "#" },
      imageIndex: 2,
    },
    {
      name: "Sofia Andersson",
      role: "Sound Designer / Compositora",
      bio: "Audio espacial, tensión sonora y banda original adaptativa.",
      social: { soundcloud: "#", twitter: "#" },
      imageIndex: 3,
    },
  ],

  specs: {
    minimum: {
      headset: "Meta Quest 2 / Pico 4",
      cpu: "Snapdragon XR2 / equivalente PCVR",
      ram: "6 GB",
      storage: "2 GB",
    },
    recommended: {
      headset: "Meta Quest 3 / Valve Index / HTC Vive Pro 2",
      cpu: "Snapdragon XR2 Gen 2 / Intel i5-10400 / Ryzen 5 3600",
      ram: "8 GB+",
      storage: "3 GB",
      gpu: "RTX 3060 / RX 6600 XT (para PCVR)",
    },
  },

  faq: [
    {
      q: "¿Necesito experiencia en VR?",
      a: "No. El tutorial te guía paso a paso. Los controles son intuitivos: agarras objetos como en la vida real.",
    },
    {
      q: "¿Se puede jugar sentado?",
      a: "Sí. El área de juego es una mesa virtual frente a ti. Funciona perfecto sentado o de pie.",
    },
    {
      q: "¿Cuánto dura una partida?",
      a: "Entre 5 y 15 minutos por bomba, según dificultad. Hay bombas infinitas procedurales + campañas diseñadas.",
    },
  ],

  // Pruebas de usuarios reales - videos de playtesting
  userTesting: [
    {
      id: "test-1",
      thumbnail: "/images/testing/test-1-thumb.jpg",
      videoSrc: "/images/video usuario2.mp4",
    },
    {
      id: "test-2",
      thumbnail: "/images/testing/test-2-thumb.jpg",
      videoSrc: "/images/video usuario1.mp4",
    },
    {
      id: "test-3",
      thumbnail: "/images/testing/test-3-thumb.jpg",
      videoSrc: "/images/video usuario3.mp4",
    },
    {
      id: "test-4",
      thumbnail: "/images/testing/test-4-thumb.jpg",
      videoSrc: "/images/video usuario4.mp4",
    },
  ],
}

export type GameData = typeof gameData
