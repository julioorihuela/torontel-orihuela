
const products = [
    {
        id: 1, 
        name: 'Tempranillo', 
        stock: 2,
        price: 'usd 20', 
        category: 'vino tinto', 
        img: 'https://dsg.pe/coder/tempranillo.jpg'
    },
    {
        id: 2, 
        name: 'Crianza', 
        stock: 5,
        price: 'usd 25', 
        category: 'vino blanco', 
        img: 'https://dsg.pe/coder/crianza.jpg'
    },
    {
        id: 3, 
        name: 'Reserva', 
        stock: 10,
        price: 'usd 23', 
        category: 'vino tinto', 
        img: 'https://www.dsg.pe/coder/reserva.jpg'
    }
]

// devuelve array con todos los productos
export const getProducts = () => { 
    return new Promise ((resolve) => {        
            setTimeout( () => {resolve (products)}, 2000 )
    })
}


export const getProduct = (id) => { 
    return new Promise ((resolve) => {   
        const prod = products.find(p => p.id === id)
        setTimeout( () => {resolve (prod)}, 2000 )
    })
}