import React from 'react';
import * as messages from '../constants/Message'
class Product extends React.Component {
    render() {
        const { product } = this.props
        return (
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={product.img}
                            className="img-fluid" alt={product.name} />
                        <a href="/#">
                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a href="/#">{product.name}</a>
                            </strong>
                        </h4>
                        <ul className="rating">
                            <li>
                                {this.showRating(product.ratingStar)}
                            </li>

                        </ul>
                        <p className="card-text">
                            {product.description}
                        </p>
                        <div className="card-footer">
                            <span className="left">{product.price}$</span>
                            <span className="right">
                                <a
                                    className="btn-floating blue-gradient"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title=""
                                    data-original-title="Add to Cart"
                                    onClick={() => this.onAddToCart(product)}
                                >
                                    <i className="fa fa-shopping-cart"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    showRating(rating) {
        const result = []
        const i = 1;
        for (let i = 1; i <= rating; i++) {
            return result.push(<i key={i} className="fa fa-star"></i>);
        }
        for (let j = 1; j <= 5 - rating; j++) {

            return result.push(<i key={i + j} className="fa fa-star-o"></i>);
        }
        return result
    }

    onAddToCart = (product) => {
        this.props.addToCart(product)
        this.props.messAddToCart(messages.MSG_ADD_TO_CART_SUCCESS)
    }

}

export default Product;
