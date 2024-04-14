

function Product(props){
    console.log(props)
    
    
    return(
        <div className="product">
            <h3>{props.name}</h3>
            <h4>{props.price}</h4>
        </div>
    )
}


export default Product;