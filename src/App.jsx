import { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Stats from './components/Stats/Stats'
import About from './components/About/About'
import Programs from './components/Programs/Programs'
import Coaches from './components/Coaches/Coaches'
import Gallery from './components/Gallery/Gallery'
import Pricing from './components/Pricing/Pricing'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'
import WhatsappFloat from './components/WhatsappFloat/WhatsappFloat'

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12 }
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Programs />
      <Coaches />
      <Gallery />
      <Pricing />
      <Testimonials />
      <Footer />
      <WhatsappFloat />
      
    </>
  )
}