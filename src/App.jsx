import './App.scss'
import BurgerMenu from './components/BurgerMenu.jsx'

export default function App() {

  return (
    <div className="wrapper">
      <header className='topBar'>
        <img src="src\assets\logoSultec.png" alt="Sultecbombas Logo" />
        <BurgerMenu />
      </header>
      <main className='main'>
        <div className='productDisplay'><img src="src\assets\logoSultec.png" alt="" /></div>
        <div className='productDisplay'><img src="src\assets\logoSultec.png" alt="" /></div>
        <div className='productDisplay'><img src="src\assets\logoSultec.png" alt="" /></div>
      </main>
    </div>
  )
}
