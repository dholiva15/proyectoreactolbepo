import React from "react";
import { Item } from "../item/item"

const ItemList = ({listProducts})=>{
    

    return (
        <div style={styles.container}>

        {listProducts.map((prod, i) => <Item key={`${prod.product}-${i}`} product={prod}/>)}

        </div>
        
    )
}


const styles = {
    container:{
      display: "flex",
      flexDirection: 'row',
    
      justifyContent: "space-around",
    
      flexWrap: "wrap",
    }
  }

export { ItemList}