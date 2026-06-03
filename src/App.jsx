import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Offerings from './components/Offerings'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Offerings />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  )
}