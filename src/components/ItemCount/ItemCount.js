import {Component} from "react";

// onAdd
// const ItemCount ({ stock, initial, OnAdd })  {
const stock = 10

class ItemCount extends Component {
    constructor(props) {
        super(props)
        this.state = { count:1 }
    }

increment = () => {
    if (this.state.count<stock) {       
        this.setState({  
            count: this.state.count + 1 
        })
    } 
}

decrement = () => {
    if (this.state.count>1) {
        this.setState({  
            count: this.state.count - 1 
        })
    }   
}

render () {
    return(
        <>
            <h2>Counter</h2>
            <h2>{this.state.count}</h2>
            <button onClick={this.decrement}>-</button>
            <button onClick={this.increment}>+</button>
            <p />
            <button onClick={console.log(this.state.count)}>Agregar al carrito</button>

        </>
)
             
}
}

// poner luego: () => onAdd(this.state.count)
export default ItemCount