import Footer from "./components/StyledButton/Footer/footer"
import NavBar from "./components/StyledButton/NavBar/NavBar"
import AboutSection from "./pages/Home/sections/AboutSection/AboutSection"
import HeroSection from "./pages/Home/sections/HeroSection/HeroSection"
import ProjectsSection from "./pages/Home/sections/ProjectsSection/ProjectsSection"


const App: React.FC = () => {

  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <Footer />
    </>
  )
}

export default App
