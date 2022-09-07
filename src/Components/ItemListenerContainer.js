import { margin } from "@mui/system";
import React from "react";


const ItemListenerContainer = ({nombre, apellido, id, children}) => {
    
   
    return(
        
        <div style= {style.container}>
        <h2 >Bienvenido {nombre} {apellido}</h2>
       
        </div>
    )
}


const style = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        color: 'green',
        alignItems: 'center',
        marginTop:'5%'
    }
}
export default ItemListenerContainer