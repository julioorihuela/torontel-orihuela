import { useEffect, useState } from 'react'
import './ItemListContainer.css'
//import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'
import { getProducts } from '../../asyncmock'



const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () =>  {
        getProducts().then( products => {  
                                console.log(products)
                                setProducts(products)
                    })
                    .catch( (error) => {
                                console.log(error)

                    })
                    .finally( () => {
                        setLoading(false);
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
        <>
        {loading 
        ? ( <h1>Cargando...</h1> ) 
        : ( 
                <div className="ItemListContainer">
                    <ItemList products={products}/>
                </div>  
            
         )}
      </>
    )
}

export default ItemListContainer