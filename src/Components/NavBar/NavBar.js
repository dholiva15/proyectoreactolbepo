import React from 'react';
import logo from '../../assets/LOGOVIAJES.png';

import "./Header.css"
import { CartWidget } from './Nav/CartWidget';
import { Nav } from './Nav/Nav';


const NavBar = ({nombre, apellido, id, children}) => {
    
    const categorias = [
        {id:1, nombre:"Viajes por Argentina" },
        {id:2, nombre:"Viajes por Latinoamerica"},
        {id:3, nombre:"Viaje por Europa"}
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