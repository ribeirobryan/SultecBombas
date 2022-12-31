import './App.scss'
import BurgerMenu from './components/BurgerMenu.jsx'
import ImageSlider from './components/ImageSlider'
import Projects from './components/Projects'

export default function App() {

  return (
    <div className="wrapper">
      <header className='topBar'>
        <img src="src\assets\logoSultec.png" alt="Sultecbombas Logo" />
        <BurgerMenu />
      </header>
      <main>
        <a href="">
          <h1>Produtos</h1>
        </a>
        <div className="imageWrapper"><ImageSlider/></div>
        <div className="projectWrapper">
          <h2>Projetos</h2>
          <Projects />
        </div>
      </main>
    </div>
  )
}
