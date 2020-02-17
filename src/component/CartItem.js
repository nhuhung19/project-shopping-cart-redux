import React from 'react';
import * as messages from '../constants/Message'


class CartItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: 1
        }
    }
    render() {
        const { item: { product: { name, img, price } } } = this.props
        const { quantity } = this.props.item.quantity > 0 ? this.props.item : this.state
        return (
            <tr>
                <th scope="row">
                    <img src={img}
                        alt="" className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{name}</strong>
                    </h5>
                </td>
                <td>{price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{quantity} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick={() => this.updateQuantity(this.props.item.product, quantity - 1)}
                        >
                            <a href="/#">—</a>
                        </label>
                        <label
                            className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick={() => this.updateQuantity(this.props.item.product, quantity + 1)}
                        >
                            <a href="/#">+</a>
                        </label>
                    </div>
                </td>
                <td>{this.showTotal(price, quantity)}$</td>
                <td>
                    <button
                        type="button"
                        className="btn btn-sm btn-primary waves-effect waves-light"
                        data-toggle="tooltip"
                        data-placement="top"
                        title=""
                        data-original-title="Remove item"
                        onClick={() => this.deleteCart(this.props.item.product)}
                    >
                        X
                    </button>
                </td>
            </tr>
        );
    }
    showTotal = (price, quantity) => {
        return price * quantity
    }

    deleteCart = (product) => {
        this.props.onDelCart(product)
        this.props.messDelete(messages.MSG_DELETE_CART_SUCCESS)
    }

    updateQuantity = (product, quantity) => {
        this.props.updateCart(product, quantity)
        this.props.messageUpdate(messages.MSG_UPDATE_CART_SUCCESS)
    }
}

export default CartItem;
