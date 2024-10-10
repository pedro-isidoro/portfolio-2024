import { Header } from '@/components/Header/Header'
import { Home } from '@/components/Home/Home'
import { Skills } from '@/components/Skills/Skills'
import { Projects } from '@/components/Projects/Projects'
import { Faq } from '@/components/Faq/Faq'
import { Footer } from '@/components/Footer/Footer'
import { Contact } from '@/components/Contact/Contact'

export function App() {

  return (
    <div className='main_content'>
      <Header />
      <main>
        <Home />
        <Skills />
        <Projects />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}