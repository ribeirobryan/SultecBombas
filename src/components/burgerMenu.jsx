import React, { useState } from 'react'
import './BurgerMenu.scss'
import { FaBars } from 'react-icons/fa'

export default function BurgerMenu() {

    const [isActive, setIsActive] = useState(false);

    function handleClick(){
        setIsActive(isActive => !isActive)
    
    }

    let isActiveCheck =  isActive ? null: 'deactive';

    return (
        <div className='burgerMenu'>
            <button onClick={handleClick} className='menuBtn'>
                <FaBars className='menuBars'/>
            </button>
            <div className={`optionWrapper ${isActiveCheck}`}>
                <div className='menuOptions'>
                    <a href="#">
                        <p>Produtos</p>
                    </a>
                    <a href="#">
                        <p>Projetos</p>
                    </a>
                    <a href="#">
                        <p>Contatos</p>
                    </a>
                    <a href="#">
                        <p>Downloads</p>
                    </a>
                </div>
            </div>
        </div>
    ) 
}