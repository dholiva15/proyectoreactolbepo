import React from 'react';
import logo from '../../assets/LOGOVIAJES.png';

import "./Header.css"
import { CartWidget } from './Nav/CartWidget';
import { Nav } from './Nav/Nav';


const NavBar = ({nombre, apellido, id, children}) => {
    
    const categorias = [
        {id:1, nombre:"Guitarras" },
        {id:2, nombre:"Instrumento de viento"},
        {id:3, nombre:"Baterias y Percusión"},
        {id:4, nombre:"Teclados y Pianos"}


    ]
    return(
        <header> 
        <img src={logo} alt="logo" />
        
       <Nav categorias={categorias}/>
        {children}

        <CartWidget />

        </header>
   
        
    )
}

export default NavBar