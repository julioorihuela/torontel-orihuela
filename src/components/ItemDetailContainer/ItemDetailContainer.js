import { useState, useEffect } from 'react'
import { getProduct } from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'

//llamar a un asynmock con promise en 2 segundos devuelve un item

const ItemDetailContainer = ({ id }) => {
    const [product, setProduct] = useState()

    useEffect(() => {
        getProduct(id).then((item) => {
            setProduct(item)
        }).catch(err  => {
            console.log(err)
        })

        return (() => {
            setProduct()
        })
    }, [id])

return (
    <div>
    <ItemDetail product = {product} />
    </div>
    )
}

export default ItemDetailContainer
