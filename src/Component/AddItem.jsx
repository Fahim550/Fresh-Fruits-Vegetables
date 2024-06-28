import React, { useContext } from 'react'
import { ProductArray } from '../App'

const style={
    
}
export default function AddItem(item) {
const [selectedProduct,setSelectedProduct] = useContext(ProductArray);
console.log("💕💕",selectedProduct.cart);
  const addItem=()=>{
    // selectedProduct.cart.quantity=1;
    let tempCart = Object.assign([],{...selectedProduct.cart});
    tempCart.push(item);
    setSelectedProduct({...selectedProduct,cart:tempCart})
    console.log("selectedProduct",selectedProduct);
  }
  const increaseQty = () => {
    selectedProduct.cart.quantity = item.quantity + 1;
    let tempCart = [...selectedProduct.cart];
    let index = tempCart.findIndex((cartItem) => cartItem.id === item.id);
    if (index > -1) {
        tempCart[index].quantity = item.quantity;
    }
    setSelectedProduct({ ...selectedProduct, cart: tempCart });
  }
  const decreaseQty = () => {
    item.quantity = item.quantity - 1;
    let tempCart = [...selectedProduct.cart];
    let index = tempCart.findIndex((cartItem) => cartItem.id === item.id);
    if (index > -1) {
        tempCart[index].quantity = item.quantity;
    }
    setSelectedProduct({ ...selectedProduct, cart: tempCart });
  }

  return (
    <div className={style.addCartContainer}>
      {/* {
        item.quantity===0 ?(<button className={style.addCartBtn} onClick={addItem} >
       
      </button>)
      :(<div className={style.addItem}>
            <button className={style.minusBtn} onClick={decreaseQty}>-</button>
            <div className={style.qty}>{item.quantity}</div>
            <button className={style.plusBtn} onClick={increaseQty}>+</button>
        </div>)
      } */}
      
      <button className={style.addCartBtn} onClick={addItem}>
        Add
      </button>
      {/* <p>{selectedProduct.cart}</p> */}
    </div>
  )
}
