import React, { Component } from 'react'

export default class burgerMenu extends Component {

    render() {
        return (
            <>
                <div className='sandwichSelector'>
                    <span className='selector bar1'></span>
                    <span className='selector bar2'></span>
                    <span className='selector bar3'></span>
                </div>
                <nav className='sandwichMenu active'>
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
                </nav>
            </>
        )
    }
}