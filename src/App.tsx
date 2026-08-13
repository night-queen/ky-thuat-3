import Hero from './components/Hero'
import Introduction from './components/Introduction'
import EyesSection from './components/EyesSection'
import HandsSection from './components/HandsSection'
import FeetSection from './components/FeetSection'
import HorseSection from './components/HorseSection'
import BeardSection from './components/BeardSection'
import References from './components/References'
import Navigation from './components/Navigation'

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: '#0F1830' }}>
      <Navigation />
      <Hero />
      <Introduction />
      <EyesSection />
      <HandsSection />
      <FeetSection />
      <HorseSection />
      <BeardSection />
      <References />
    </div>
  )
}
