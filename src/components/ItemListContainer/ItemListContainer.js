import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = ({greeting}) => {

    const handleOnAdd = (quantity) => {
        console.log(`Se agregaron ${quantity} productos`)  
        // comillas inveetidas      
    }

    return (       
        <div className="ItemListContainer">
            <h2>{greeting}</h2>
            <ItemCount stock={10} initial={2} onAdd={handleOnAdd}/> 
        </div>        
    )
}

export default ItemListContainer