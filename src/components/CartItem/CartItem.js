import React from "react";
import "./CartItem.css"
const CartItem = ({ id, name, price, quantity }) => {
    return (
        <div className="cart-item">
            <div className="item-details">
                <h3>{name}</h3>
                <p>Precio: ${price}</p>
                <p>Cantidad: {quantity}</p>
            </div>
            <div className="item-actions">
                <button className="remove-button">Eliminar</button>
            </div>
        </div>
    );
};

export default CartItem;
