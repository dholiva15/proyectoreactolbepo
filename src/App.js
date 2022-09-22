import React, {useState} from "react";
import NavBar from "./Components/NavBar/NavBar";
import { Boton } from "./Components/Boton";
import  ItemListenerContainer  from "./Components/ItemListenerContainer" ;
//import ItemCount from "./Components/ItemCounts"


const App = ()=> {
  const mensaje1= "No te pierdas las ofertas de esta primavera";
  const mensaje2= "LLego el invierno y las mejores ofertas en Guitarras";
  const mensaje3= "Conoce las ofertas en pianos y teclados";
  const mensaje4= "Promo Mundial - Relaja de los nervios del mundial y empeza a tocar bateria";
 const [show, setShow]= useState(true);
 const alternar = ()=>{
   setShow(!show)
 }

  return (
    <>
    <NavBar>
      
      
    

    </NavBar>

<ItemListenerContainer  greeting={mensaje1} greeting2={mensaje2} greeting3={mensaje3} greeting4={mensaje4}/>
 







   
    </>
    
  )
}

export default App;

