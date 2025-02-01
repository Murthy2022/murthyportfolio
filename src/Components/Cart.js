import React, { useContext } from "react";
import { CartContext } from "./Contexts";
import CartView from "./CartView";

const Cart = () => {

    const { cartItem } = useContext(CartContext)

    return(
        <>
        <h4>Items added in the cart</h4>
        <ul>
        {
            cartItem.map((e) => {
               return <li key={e.id}>
                    <CartView cartItem = {e} />
                    </li>
        })
        }
        </ul>
        </>
    )
}

export default Cart