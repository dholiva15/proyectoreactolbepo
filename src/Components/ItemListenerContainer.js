import { margin } from "@mui/system";
import React from "react";


const ItemListenerContainer = ({greeting, greeting2, greeting3, greeting4}) => {
    
   
    return(
        
        <div style= {style.container}>
        <h2 >{greeting}</h2>
       
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