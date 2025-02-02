import { useContext, useEffect } from "react"
import { CartContext } from "./Contexts"



const CartView = (props) => {
    console.log("In Cart View")
console.log(props)
console.log("-----")
console.log(props.cartItem.name)

const {cartItem} = useContext(CartContext)




// useEffect(() => {
// console.log('In useEffect')
// },[cartItem])

    return(
        <div className="cart-view-container">   
            <h2>{props.cartItem.id}</h2>
            <h4 className='item-name-cart'>{props.cartItem.name}</h4>
            <img className='item-image-cart' src={props.cartItem.img} alt="No image found" />
            <h6 className='item-cost-cart'>Cost - {props.cartItem.cost}</h6>
            <button onClick={props.handleRemoveItem}>&#x274C;</button>
        </div>
    )
}

export default CartView