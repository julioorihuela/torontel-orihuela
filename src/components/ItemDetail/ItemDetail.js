import React from 'react';

const ItemDetail = ({ product }) => {

    console.log(product?.name); 

    return new Promise ((resolve) => {        
    setTimeout( () => {resolve (
                
        <div>
            <h1>{product?.name}</h1>
            <img src={product?.img} />
            <h2>{product?.price}</h2>
            <button>Agregar</button> 
        </div>
                    
        )}, 2000 )
})

}

export default ItemDetail