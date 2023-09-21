import React, { useContext } from "react";
import { CartContext } from "../context/Cartcontext";
import CartItem from "../CartItem/CartItem"; 
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext); // Cambiar "Cart" a "cart" para que coincida con el contexto

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No estás comprando nada... rata</h1>
                <Link to='/' className='Option'>Productos</Link> {/* Cambiar "link" a "Link" */}
            </div>
        );
    } 

    return (
        <div>
            {cart.map((p) => ( 
                <CartItem key={p.id} {...p} /> 
            ))}
            <h1>Total: ${total}</h1>
            <button onClick={() => clearCart()} className="Button">Limpiar carrito... ortiva</button>
            <Link to='/checkout' className="Option">Checkout</Link> 
        </div>
    );
}

export default Cart;
