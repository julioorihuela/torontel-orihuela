const Item = ({product}) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', border: '1px solid black', margin: '10px'}}>
          
        <img src={product.img} width="150px" alt={product.name}/> 
        <h2>{product.name}</h2>

        </div>
    );
};

export default Item