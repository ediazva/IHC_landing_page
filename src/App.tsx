import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Gallery } from './components/Gallery'
import { GameDesign } from './components/GameDesign'
import { UserTesting } from './components/UserTesting'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <GameDesign />
        <UserTesting />
      </main>
    </div>
  )
}

export default App
