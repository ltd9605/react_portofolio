import { useState, useEffect } from 'react'


import './App.css'
import { supabase } from './config/supabaseClient'
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"
import { WelcomePreloader } from './components/loading'
import { Background } from './components/Background'
import { Home } from './sections/Home'
import { About } from './sections/AboutMe'
import { Projects } from './sections/Projects'
import { Skills } from './sections/Skills'
import { Contact } from './sections/Contact'
function App() {
  // 
  const [projects, setProjects] = useState([])
  const [certificates, setCertificates] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectRes, certificateRes] = await Promise.all([
          supabase.from('projects').select('*'),
          supabase.from('certificates').select('*'),
        ])

        if (projectRes.error) throw projectRes.error
        if (certificateRes.error) throw certificateRes.error

        setProjects(projectRes.data)
        setCertificates(certificateRes.data)
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu:', error)
      } finally {
        setTimeout(() => {
          setLoading(false)
        }, 1500);
      }
    }

    fetchData();
  }, []);

  if (loading) return <WelcomePreloader />
  return (
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
          <Contact supabase={supabase} />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
