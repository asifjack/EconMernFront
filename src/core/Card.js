import React, { useState } from "react";
import { Link, Redirect } from 'react-router-dom';
import ImageHelper from "./helper/ImageHelper"
import { addItemToCart ,removeItemFromCart} from "./helper/cartHelper";

const Card = ({ product, addtoCart = true, removeFromCart = false }) => {

    const [redirect, setRedirect] = useState(false);
    const [count, setCount] = useState(product.count);

    const addToCart = () => {
        addItemToCart(product, () => setRedirect(true));
    };

    const getARedirect = redirect => {
        if (redirect) {
            return <Redirect to="/cart" />;
        }
    };

    const cardTitle = product ? product.name : "A Photo From pexial"
    const cardDescription = product ? product.description : "Default"
    const cardPrice = product ? product.price : "Default"

    const showRemoveFromCart = () => {
        return (
            removeFromCart &&
            <button
                onClick={()=>{removeItemFromCart(product._id)}}
                className="btn btn-block btn-outline-danger mt-2 mb-2"
            >
                Remove from cart
            </button>
        )
    }

    const showAddToCart = (addtoCart) => {
        return (
            addtoCart &&
            <button
                onClick={() => {
                    addToCart(product._id)
                }}
                className="btn btn-block btn-outline-success mt-2 mb-2"
            >
                Add to Cart
            </button>
        )
    }

    return (
        <div className="card text-white bg-dark border border-info ">
            <div className="card-header lead">{cardTitle}</div>
            <div className="card-body">
                {getARedirect(redirect)}
                <ImageHelper product={product} />
                <p className="lead bg-success font-weight-normal text-wrap">{cardTitle}</p>
                <p className="btn btn-success rounded  btn-sm px-4">$ {cardPrice}</p>
                <div className="row">
                    <div className="col-12">{showAddToCart(addtoCart)}</div>
                    <div className="col-12">{showRemoveFromCart(removeFromCart)}</div>
                </div>
            </div>
        </div>
    );
}

export default Card;