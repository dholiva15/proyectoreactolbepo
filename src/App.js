import React, {useState} from "react";
import NavBar from "./Components/NavBar/NavBar";

import  ItemListenerContainer  from "./Components/ItemListenerContainer" ;
import { BrowserRouter , Route, Routes} from "react-router-dom";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetalContainer"
import { rootShouldForwardProp } from "@mui/material/styles/styled";
import {Cart} from "./Components/NavBar/Nav/Cart"
import { Card } from "@mui/material";
import { ComponenteEventos } from "./Components/ComponenteEventos.js/ComponenteEventos";
import CustomProvider from "./Context/CustomContext"


//import ItemCount from "./Components/ItemCounts";



const App = ()=> {
  const mensaje1= "No te pierdas las ofertas de esta primavera";
  const mensaje2= "LLego el invierno y las mejores ofertas en Guitarras";
  const mensaje3= "Conoce las ofertas en pianos y teclados";
  const mensaje4= "Promo Mundial - Relaja de los nervios del mundial y empeza a tocar bateria";



  return (
    <>

    <BrowserRouter> 
    <CustomProvider> 
    

    <NavBar/>

    <Routes>
      <Route path="/" element={ <ItemListenerContainer  greeting={mensaje1} greeting2={mensaje2} greeting3={mensaje3} greeting4={mensaje4}/>} />
     <Route path="/category/:Id" element={<ItemListenerContainer  greeting={mensaje1} greeting2={mensaje2} greeting3={mensaje3} greeting4={mensaje4}/>} />
     <Route  path= "/detail/:id" element={<ItemDetailContainer/>}  />
     <Route path="/cart"  element={ <Cart condicion={true}/>} />
 
   </Routes>

   </CustomProvider>



</BrowserRouter>
 







   
    </>
    
  )
}

export default App;

