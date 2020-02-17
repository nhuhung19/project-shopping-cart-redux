import React from 'react';
import Products from '../component/Products'
import { connect } from 'react-redux'
import Product from '../component/Product'
import PropTypes from 'prop-types';
import * as actions from '../actions/index'


class ProductContainer extends React.Component {
    render() {
        const { products, onAddToCart, messAddToCart } = this.props
        const productItem = products.map((product, index) => {
            return <Product product={product} key={index} addToCart={onAddToCart} messAddToCart={messAddToCart} />
        })
        return (
            <Products>
                {productItem}
            </Products>
        );
    }
}


function mapStateToProps(state) {
    return {
        products: state.products,

    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAddToCart: (product) => {
            dispatch(actions.addToCart(product, 1))
        },
        messAddToCart: (message) => {
            dispatch(actions.messBuyProduct(message))
        }
    }
}


ProductContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            ratingStar: PropTypes.number.isRequired,
        })
    ).isRequired
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
