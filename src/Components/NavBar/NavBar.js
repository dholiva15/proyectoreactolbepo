import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../../assets/LOGOVIAJES.png';

import "./Header.css"
import { CartWidget } from './Nav/CartWidget';
import { Nav } from './Nav/Nav';


const NavBar = ({nombre, apellido, id, children}) => {
    
    const categorias = [
        {id:1, nombre:"Guitarras", route: '/category/guitarras'},
        {id:2, nombre:"Instrumento de viento", route: '/category/viento'},
        {id:3, nombre:"Baterias y Percusión" , route: '/category/percusion'},
        {id:4, nombre:"Teclados y Pianos", route: '/category/teclados'}


    ]
    return(
        <header> 
    <Link to= "/"> 
        <img src={logo} alt="logo" />
    </Link>

<Link to="/">
    <h1 className='texto'> Casa de Musicos</h1>
</Link>


        
       <Nav categorias={categorias}/>
        {children}
<Link to= "/Cart">

        <CartWidget />
</Link>

        </header>
   
        
    )
}

export default NavBar