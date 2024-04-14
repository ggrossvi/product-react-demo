

import PropTypes from 'prop-types';

function Product(props){
    console.log(props)
    
    
    return(
        <div className="product">
            <h3>{props.name}</h3>
            <h4>{props.price}</h4>
        </div>
    )
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};

export default Product;