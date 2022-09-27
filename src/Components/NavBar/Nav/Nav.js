import React from "react";
import {Link, NavLink} from "react-router-dom"

export const Nav = ( {categorias} ) =>{
    return(

        <nav >
        {categorias.map((categoria)=>{
            return <Link key={categoria.id} to={categoria.route}>{categoria.nombre}</Link>
        })}

         </nav>



    )
}

