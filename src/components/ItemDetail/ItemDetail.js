import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { Link } from 'react-router-dom';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quatityAdded, setQuantityAdded] = useState(0)
    const handleOnAdd =(quantity) => {
        setQuantityAdded(quantity)
    }
    const Item = { id, name, price}

    addItem(Item, quantity)
    
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    Categoría: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
                
                
            </section>
            <footer className='itemFooter'>
                {
                    quantityAdded > 0 ? (
                        <link to = '/cart' className='Option'>Finalizar Compra</link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    )
                }
            </footer>
        </article>
    );
}

export default ItemDetail;

