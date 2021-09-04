import React from 'react';
import { Link } from "react-router-dom";

export default function CartTotal({value}) {
    const {cartSubtotal, cartTax, cartTotal, clearCart} = value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ms-sm-5 ms-md-auto col-sm-8 text-capitalize text-end">
                        <Link to="/">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={()=>clearCart()}>
                                Clear cart
                            </button>
                        </Link>
                        <h5>
                            <span className="text-title">Subtotal :</span>
                            <strong>Rp. {cartSubtotal}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">Tax :</span>
                            <strong>Rp. {cartTax}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">Total :</span>
                            <strong>Rp. {cartTotal}</strong>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}