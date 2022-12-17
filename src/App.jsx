import css from './App.css'
import Main from './components/burgerMenu.jsx'

export default function App() {

  return (
    <header className='topBar'>
      <div className='uncollapsedMenu'>
        <img src="src\assets\logoSultec.png" alt="Sultecbombas Logo" />
        <Main />
      </div>
    </header>
  )
}
