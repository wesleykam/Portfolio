import Intro from './sections/intro/intro'
import TopNav from './components/topnav/topnav'
import About from './sections/about/about' 
import Skills from './sections/skills/skills'
import Projects from './sections/projects/projects'
import Experience from './sections/experience/experience'
import Education from './sections/education/education'

function App() {

  return (
      <>
          <TopNav />
          <Intro />
          <About />
          <Skills />
          <Education />
          <Experience />
          <Projects />
      </>
  );
}

export default App
