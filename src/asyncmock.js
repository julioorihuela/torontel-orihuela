export const products = [
    {
        id: 1, 
        name: 'Coto de Imaz', 
        stock: 2,
        price: '20', 
        category: 'vino tinto', 
        description: 'Elaborado con una selección de uvas de la variedad Tempranillo se guarda en barricas de roble americano y francés donde permanece durante 12 meses.',
        img: 'https://dsg.pe/coder/coto.png'
    },
    {
        id: 2, 
        name: 'El Enemigo', 
        stock: 5,
        price: '25', 
        category: 'vino blanco',
        description: 'Este vino tinto es perfecto para acompañar con carne a la brasa como una paletilla de cordero con patatas a las hierbas provenzales',
        img: 'https://dsg.pe/coder/enemigo.png'
    },
    {
        id: 3, 
        name: 'Escorihuela', 
        stock: 10,
        price: '23', 
        category: 'vino tinto', 
        description: 'Presenta un perfil aromático intenso y complejo de moca, casis y ciruela además de notas de caja de puros',
        img: 'https://www.dsg.pe/coder/esco.png'
    },
    {
        id: 4, 
        name: 'Piatelli', 
        stock: 4,
        price: '45', 
        category: 'vino blanco',
        description: 'En boca es redondo e intenso, con buena estructura y taninos aterciopelados; deja un sabor a fruta negra y moca con un retrogusto tostado',
        img: 'https://dsg.pe/coder/piatelli.png'
    },
    {
        id: 5, 
        name: 'Haza', 
        stock: 12,
        price: '25', 
        category: 'vino tinto',
        description: 'Para disfrutar de sus cualidades óptimas, recomendamos su consumo a 18 ºC y conservarlo en un lugar fresco y seco',
        img: 'https://dsg.pe/coder/haza.png'
    },
    {
        id: 6, 
        name: 'Lan', 
        stock: 15,
        price: '35', 
        category: 'vino blanco',
        description: 'Criado 14 meses en barricas nuevas de roble francés y 10 meses en botella',
        img: 'https://dsg.pe/coder/lan.png'
    }
]
const categories = [
    {id: 'vinos_a', description: 'Vinos Argentinos'},
    {id: 'vinos_e', description: 'Vinos Españoles'},
    {id: 'rones', description: 'Rones '}

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

export const getCategories =  () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(categories)
        }, 1000)
    })
}