import React from 'react';
import logo from '../../assets/LOGOVIAJES.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Header.css"

const Header = () => {
    return(
        <header> 
        <img src={logo} alt="logo" />
        <h1>Titulo</h1>
        <nav>
            <a href=''> Viajes Nacionales </a>
            <a href=''> Viajes Latinoamerica </a>
            <a href=''> Viajes Europa </a>


        </nav>

        <ShoppingCartIcon />

        </header>
        
    )
}

export default Header