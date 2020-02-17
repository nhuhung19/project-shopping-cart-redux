import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Cart from '../component/Cart'
import CartItem from '../component/CartItem'
import CartResult from '../component/CartResult'
import * as messages from '../constants/Message'
import * as actions from '../actions/index'

class CartContainer extends React.Component {

    render() {
        const { cart } = this.props
        return (
            <Cart>
                {this.showCart(cart)}
                {this.showTotal(cart)}
            </Cart>
        );
    }

    showCart = (cart) => {
        const { messageDelete, onUpdateCart, messageUpdate } = this.props
        let result = <tr><td>{messages.MGS_EMPTY_CART}</td></tr>
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem
                        item={item}
                        key={index}
                        onDelCart={this.props.deleteCart}
                        messDelete={messageDelete}
                        messageUpdate={messageUpdate}
                        updateCart={onUpdateCart}

                    />
                )
            })
        }
        return result
    }

    showTotal = (cart) => {
        let result = null
        if (cart.length > 0) {
            result = <CartResult cart={cart} />
        }
        return result
    }

}


function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

function mapDispatchToProps(dispatch) {
    return {
        deleteCart: (product) => {
            dispatch(actions.deleteCart(product))
        },
        messageDelete: (message) => {
            dispatch(actions.messageDelete(message))
        },
        onUpdateCart: (product, quantity) => {
            dispatch(actions.updateCart(product, quantity))
        },
        messageUpdate: (message) => {
            dispatch(actions.messageUpdate(message))
        }
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            ratingStar: PropTypes.number.isRequired,
        }).isRequired,
        quantity: PropTypes.number.isRequired,
    })
    ).isRequired,
    deleteCart: PropTypes.func.isRequired,
    messageDelete: PropTypes.func.isRequired
}


export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
