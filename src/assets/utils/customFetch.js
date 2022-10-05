
export const customFetch = (products, id)=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try{ 
                if(products){
                    if(id){
                        const producto = products.find((producto) => producto.id === id);
                        resolve(producto)
                    }

            else {
                resolve(products)
            }

                }


            } catch(err){
                reject(err);
            }

           
            
        }, 1000);
        

    })
}