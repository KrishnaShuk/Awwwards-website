
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Features from './components/Features'
import Footer from './components/Footer'
import { Hero } from './components/hero'
import NavBar from './components/Navbar'
import FloatingImage from './components/story'

function App() {

  return (
    <>
    <NavBar/>
    <Hero/>
    <About/>
    <Features/>
    <FloatingImage/>
    <Contact />
    <Footer />
    </>
  )
}

export default App
