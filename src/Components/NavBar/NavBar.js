import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../../assets/LOGOVIAJES.png';

import "./Header.css"
import { CartWidget } from './Nav/CartWidget';
import { Nav } from './Nav/Nav';


const NavBar = ({nombre, apellido, id, children}) => {
    
    const categorias = [
        {id:1, nombre:"Guitarras", ruta: '/categoria/Guitarras'},
        {id:2, nombre:"Instrumento de viento", ruta: '/categoria/InstrumentodeViento'},
        {id:3, nombre:"Baterias y Percusión" , ruta: '/categoria/BateriasyPercusion'},
        {id:4, nombre:"Teclados y Pianos", ruta: '/categoria/TecladosyPianos'}


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