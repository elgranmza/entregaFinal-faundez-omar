import React from "react";
import './Item.css';

const Item = ({ name, img, price, stock }) => {

    return (
        <article className="card-item">
            <div className="card-header">
                <h2 className="item-header">
                    {name}
                </h2>
            </div>
            <div>
                <img src={img} alt={name} className="item-img" />
            </div>
            <div>
                <p className="item-info">
                    Precio: ${price}
                </p>
                <p className="item-info">
                    Stock disponible: {stock}
                </p>
            </div>
        </article>
    );
};

export default Item;
