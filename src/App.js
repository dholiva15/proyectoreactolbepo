import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import { Boton } from "./Components/Boton";
import  ItemListenerContainer  from "./Components/ItemListenerContainer" ;


const App = ()=> {
  const nombre = "Pepe"
  const apellido ="Perez"

  return (
    <>
    <NavBar>
      
      
    

    </NavBar>

<ItemListenerContainer  nombre={nombre} id="1" apellido ={apellido}/>
   
    </>
    
  )
}

export default App;

