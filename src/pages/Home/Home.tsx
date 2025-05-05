import Hero from "./sections/Hero/Hero"
import NavBar from "../../components/NavBar/NavBar"
import About from "./sections/About/About"
import HardSkills from "./sections/About/Skills/HardSkills"
import Projects from "./sections/About/Projects/Projects"

const Home = () => {

  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <HardSkills />
      <Projects />
    </>
  )
}

export default Home
