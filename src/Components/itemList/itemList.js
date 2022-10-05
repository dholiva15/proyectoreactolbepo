import React from "react";
import { Item } from "../item/item"
import { Link } from "react-router-dom"

const ItemList = ({listProducts})=>{
    

    return (

   
        <div style={styles.container}>

        {listProducts.map((prod, i) => (

         <Link to={`/detail/${prod.id}`}> 
         <Item key={prod.id} product={prod}/>
         
         </Link>
         )




        )
               
        
     
        
        
}

        </div>

        
        
    )
}


const styles = {
    container:{
      display: "flex",
      flexDirection: 'column',
    
      justifyContent: "space-around",
    
      flexWrap: "wrap",
    }
  }

export { ItemList}