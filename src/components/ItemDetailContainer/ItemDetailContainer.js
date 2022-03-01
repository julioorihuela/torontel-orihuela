import { useState, useEffect } from 'react'
import { getProduct } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom'

//llamar a un asynmock con promise en 2 segundos devuelve un item

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const {productId} = useParams();

    useEffect(() => {
        getProduct(productId)
            .then((item) => { setProduct(item) })
            .catch(err  => { console.log(err) })

        return (() => {  setProduct()   })
    }, [productId])

return (
    <div className="ItemDetailContainer">
        <ItemDetail product = {product} />
    </div>
    )
}

export default ItemDetailContainer
