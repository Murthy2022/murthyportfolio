import React, { useContext , useEffect, useState } from "react";
import { CartContext } from "./Contexts";
import CartView from "./CartView";

const Cart = () => {

    const { cartItem , setCartItem } = useContext(CartContext)
   // console.log('Hi')
   // console.log(cartItem)

    const [cartSize,setCartSize] = useState(0)

    const handleRemoveItem = (deleteItem) => {
        console.log('In Handle remove')
        const updatedItems = cartItem.filter(item => item.id !== deleteItem.id);
        console.log(cartItem)
        console.log(updatedItems)
        setCartItem(updatedItems)
    }


    return(
       <>
        {cartItem.length ? 
            <>
        <h4 className="cart-heading">Number of Items added in the cart : {cartItem.length}</h4>
        
        <ul>
        {
            cartItem.map((e) => {
               return <li key={e.id}>
                    <CartView cartItem = {e} handleRemoveItem={() => handleRemoveItem(e)} />
                    </li>
        })
        }
        </ul> 
        </> :
        
        <h3 className="cart-heading">No Items Added in the cart!!!!</h3>
        }
        </>
        
    )
}

export default Cart