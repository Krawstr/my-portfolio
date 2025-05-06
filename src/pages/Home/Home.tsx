import Hero from "./sections/Hero/Hero"
import NavBar from "../../components/NavBar/NavBar"
import About from "./sections/About/About"
import Projects from "./sections/About/Projects/Projects"
import ContactMe from "./sections/ContactMe/ContactMe"
import Footer from "../../components/Footer/Footer"

const Home = () => {

  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <ContactMe />
      <Footer/>
    </>
  )
}

export default Home
