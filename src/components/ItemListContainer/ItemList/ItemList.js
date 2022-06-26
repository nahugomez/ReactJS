import React from 'react';
import Item from './Item/Item'
import './ItemList.scss'


const ItemList = ({ products }) => {
  return (
    <>
      <div className="container itemList">
        {products.map((product) => {
          return (
            <Item key={product.id} id={product.id} name={product.name} stock={product.stock} price={product.price} />
          );
        })}
      </div>
    </>
  )
}

export default ItemList;
