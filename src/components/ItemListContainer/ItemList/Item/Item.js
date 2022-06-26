import React from "react";
import './Item.scss'
const Item = ({ id, name, stock, price}) => {
    return (
        <>
            <div className="item">
                <p className="itemName">{name}</p>
                <p>Precio: {price}</p>
                <p>Stock: {stock}</p>
                <p>Id: {id}</p>
            </div>
        </>
    )
}

export default Item;