import { useState, useEffect } from 'react'


import './App.css'
import { getProjects, getCertificates } from './services/api'
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { WelcomePreloader } from './components/Loading'
import { Background } from './components/Background'
import { Home } from './sections/Home'
import { About } from './sections/AboutMe'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'
import { Contact } from './sections/Contact'
import { ThemeProvider } from './components/ThemeProvider'
function App() {
  // 
  const [projects, setProjects] = useState([])
  const [certificates, setCertificates] = useState([])
  const [dataLoaded, setDataLoaded] = useState(false)
  const [entered, setEntered] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsData, certificatesData] = await Promise.all([
          getProjects(),
          getCertificates(),
        ])

        setProjects(projectsData)
        setCertificates(certificatesData)
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu:', error)
      } finally {
        setDataLoaded(true)
      }
    }

    fetchData();
  }, []);
  console.log("data:", projects);
  if (!entered) return <WelcomePreloader isReady={dataLoaded} onEnter={() => setEntered(true)} />
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-ui-theme">
      <>
        <Background />
        <Navbar />
        <main className="relative z-10">
          <section id="home">
            <Home />
          </section>
          <section id='about'>
            <About />
          </section>
          <section id="projects">
            <Projects projects={projects} certificates={certificates} />
          </section>

          <section id="skills">
            <Skills />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default App
