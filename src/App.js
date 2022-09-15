import React, {useState} from "react";
import NavBar from "./Components/NavBar/NavBar";
import { Boton } from "./Components/Boton";
import  ItemListenerContainer  from "./Components/ItemListenerContainer" ;
//import ItemCount from "./Components/ItemCounts"


const App = ()=> {
  const mensaje1= "No te pierdas las ofertas de esta primavera";
  const mensaje2= "Conoce los mejores destinos para ir en invierno";
  const mensaje3= "Disfruta el verano en Europa";
  const mensaje4= "Promo Mundial - Viajes a Qatar";
 const [show, setShow]= useState(true);
 const alternar = ()=>{
   setShow(!show)
 }

  return (
    <>
    <NavBar>
      
      
    

    </NavBar>

<ItemListenerContainer  greeting={mensaje1} greeting2={mensaje2} greeting3={mensaje3} greeting4={mensaje4}/>
 



 <button onClick={alternar}> Alternar </button>



   
    </>
    
  )
}

export default App;

