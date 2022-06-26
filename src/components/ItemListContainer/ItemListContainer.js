import React, { useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import ItemList from './ItemList/ItemList';

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);

  // Se declaró tanto los items, la condición de la promesa, e inclusive la promesa dentro del hook useEffect, debido al error...
  // React Hook useEffect has a missing dependency
  // https://bobbyhadz.com/blog/react-hook-useeffect-has-missing-dependency
  // No tiene mucha diferencia con declararlo fuera, ya que el useEffect solamente se ejecutaría una única vez

  useEffect(() => {
    const items = [
      {
        id: 1,
        name: "Jean Oxfford",
        price: 7500,
        stock: 20
      },
      {
        id: 2,
        name: "Remera Batik",
        price: 3500,
        stock: 45
      },
      {
        id: 3,
        name: "Buzo Oversize",
        price: 5500,
        stock: 35
      }
    ]

    const cond = true;

    const prom = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (cond) {
          resolve(items)
        } else {
          reject("Algo salio mal :(")
        }
      }, 2000);
    });

    prom
      .then((res) => {
        setProducts(res);
        setLoader(false);
      })
      .catch((res) => {
        alert(res);
        setLoader(false);
      });
  }, []);



  return (
    <>
      {loader ? <BeatLoader /> : <ItemList products={products} />}
    </>
  );
}

export default ItemListContainer;
