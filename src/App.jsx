import './App.scss'
import BurgerMenu from './components/BurgerMenu.jsx'
import ImageSlider, { ButtonSlider } from './components/ImageSlider'

export default function App() {

  return (
    <div className="wrapper">
      <header className='topBar'>
        <img src="src\assets\logoSultec.png" alt="Sultecbombas Logo" />
        <BurgerMenu />
      </header>
      <main>
        <div className="imgWrapper">
          <ImageSlider />
        </div>
        <div className="buttons">
          <ButtonSlider />
        </div>
      </main>
    </div>
  )
}
