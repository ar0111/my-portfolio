import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes'
import Header from './Pages/Shared/Header/Header'
import Hero from './Pages/Home/Hero'
import Skills from './Pages/Skills/Skills'
import About from './Pages/About/About'
import Projects from './Pages/Projects/Projects'
import ContactMe from './Pages/ContactMe/ContactMe';
import toast, { Toaster } from 'react-hot-toast';

function App() {

  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Skills></Skills>
      <About></About>
      <Projects></Projects>
      <ContactMe></ContactMe>
      <Toaster />
    </div>
  )
}

export default App
