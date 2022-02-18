
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
    

export const getProducts = () => { 
    return new Promise ((resolve) => {        
            setTimeout( () => {resolve (products)}, 2000 )
    })
}
    
