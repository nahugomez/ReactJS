import { useState } from 'react';
import './ItemCount.scss';

const ItemCount = ({ product, stock, func }) => {

  const [units, setUnits] = useState(1);
  const [current, setCurrent] = useState(stock);

  const addUnits = () => {
    if (units < current) {
      setUnits(units + 1);
    }
  }

  const discountUnits = () => {
    if (units > 1) {
      setUnits(units - 1);
    }
  }

  const addCart = () => {
    setCurrent(current - units);
    setUnits(1);
    func(units);
  }

  return (
    <div className="itemCountContent">
      <div className='itemCount'>
        <p className='itemCountName'>{product}</p>
        <p>Stock: {current}</p>
        <div className="itemCountControls">
          <button onClick={discountUnits}>-</button>
          <p className='itemCountUnits'>{units}</p>
          <button onClick={addUnits}>+</button>
        </div>
        {current == 0 ?
          <p>No hay stock del producto</p> :
          <button onClick={addCart} className='itemCountButton'>Añadir al carrito</button>
        }
      </div>
    </div>
  )
}

export default ItemCount
