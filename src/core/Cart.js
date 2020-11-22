import React, { useEffect, useState } from "react";
import "../styles.css";
import Base from "./Base";
import Card from "./Card"
// import { loadCart } from "./helper/cartHelper";

const Cart = () => {
    const [products, setProducts] = useState([])

    const loadCart = () => {
        if (typeof window != undefined) {
            if (localStorage.getItem("cart")) {
                return JSON.parse(localStorage.getItem("cart"));
            }
        }
    }

    useEffect(() => {
        setProducts(loadCart())
    }, [])

    const loadAllProducts = () => {
        return (<div>
            <h2>This section to load products</h2>

            {
                products.map((product, index) => (
                    <Card
                        key={index}
                        product={product}
                        removeFromCart={true}
                        addtoCart={false}
                    />

                ))
            }

        </div>)
    }

    const loadChackOut = () => {
        return (<div>
            <h2>This section for checkout</h2>
        </div>)
    }

    return (
        <Base title="Cart Page" description="ready to checkout">
            <div className="row text-center">
                <div className="col-6">{loadAllProducts()}</div>
                <div className="col-6">{loadChackOut()}</div>

            </div>
        </Base>
    );
}
export default Cart