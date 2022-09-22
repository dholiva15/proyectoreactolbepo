import React from "react";
import { Item } from "../item/item"

export const ItemDetail = ({ producto }) => {
  return (
    <div style={styles.container}>
      <img style={styles.img} src={producto.image} alt="" />
      <div style={styles.Infocontainer}>
        <h1>{producto.product}</h1>
        <span>${producto.price}</span>
        <p>{producto.description}</p>
      </div>
    </div>
  );
};




const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  Infocontainer:{
    display: "flex",
    flexDirection: "column",
  },
  img:{
    maxWidth: "20%"
  }
};