import { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount'

const products = [
    {id: 1, name: 'malbec', price: 'usd 20', category: 'vino tinto', img: 'https://www.dsg.pe'},
    {id: 2, name: 'merlot', price: 'usd 25', category: 'vino blanco', img: 'https://www.dsg.pe'},
    {id: 3, name: 'cavernet sauvignon', price: 'usd 23', category: 'vino tinto', img: 'https://www.dsg.pe'}
]
/*
const getProducts = () => { 
    return new Promise ((resolve, reject) => {
        if(onSuccess) {
            setTimeout( () => resolve ( products), 3000 )
        }  else { 
            setTimeout( () => reject('No hay respuesta'), 2000 )
        }
    })
} */
    

const getProducts = () => { 
    return new Promise ((resolve) => {
        
            setTimeout( () => resolve ( products), 3000 )
        }  
    )
}
    


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    useEffect( () =>  {
        getProducts().then(products => {  
            console.log(products)
            setProducts(products)
     })
    }, [] )
    
    


    const handleOnAdd = (quantity) => {
        console.log(`Se agregaron ${quantity} productos`)  
        // comillas invertidas      
    }

    return (       
        <div className="ItemListContainer">
            <h2>{greeting}</h2>
            <ItemCount stock={10} initial={2} onAdd={handleOnAdd}/> 
            <ul>
                {products.map(product => {
                    return <li key={product.id}>{product.name}</li>
                })}
            </ul>
        </div>        
    )
}

export default ItemListContainer