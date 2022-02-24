import { useEffect, useState } from 'react'
import './ItemListContainer.css'
//import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'
import { getProducts } from '../../asyncmock'



const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);

    useEffect( () =>  {
        getProducts().then( products => {  
            console.log(products)
            setProducts(products)
     })
                    .catch( (error) => {
                        console.log(error)

                    })
                    return (() => {
                        setProducts()
                    
                    } )

    }, [] )


    const handleOnAdd = (quantity) => {
        console.log(`Se agregaron ${quantity} productos`)  
        // comillas invertidas      
    }

    return (       
        <div className="ItemListContainer">
            {/* <h2>{greeting}</h2> */}
            {/* <ItemCount stock={10} initial={2} onAdd={handleOnAdd}/>  */}
            <ItemList products={products}/>
        </div>        
    )
}

export default ItemListContainer