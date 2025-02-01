const CartView = (props) => {
    console.log("In Cart View")
console.log(props)
console.log("-----")
console.log(props.cartItem.name)

    return(
        <div className="cart-view-container">
            <h2>{props.id}</h2>
            <h4 className='item-name-cart'>{props.cartItem.name}</h4>
            <img className='item-image-cart' src={props.cartItem.img} alt="No image found" />
            <h6 className='item-cost-cart'>Cost - {props.cartItem.cost}</h6>
        </div>
    )
}

export default CartView