import React, { useContext, useState } from 'react'
import { CartContext } from './Contexts'
import Notification from './Notification'

//const GadgetComponent = ( {Data} ) => {
const GadgetComponent = ( props ) => {

    var { cartItem } = useContext(CartContext)
    const [notification , setNotification] = useState(false)
    const [notificationStatus,setNotificationStatus] = useState(false)
    const [notificationMessage,setNotificationMessage] = useState('')



    const handleAddCart = (item,category) => {
        let timer;
        console.log('Clicked Handle Cart')
        console.log(item)
        console.log(category)
        console.log("Cart Item")
        console.log(cartItem)
        const newCartItem = {
            id : item.id,
            name : item.name,
            img : item.img,
            cost : item.cost
        }
        try {
            cartItem.push(newCartItem)
            setNotification(true)
            setNotificationStatus(true)
            setNotificationMessage('Item Added sucessfully!!!!')
            setTimeout(() => {
                setNotification(false)
            }, 5000);

        } catch (error) {
            setNotification(true)
            setNotificationStatus(false)
            setNotificationMessage('Item Not added')
            setTimeout(() => {
                setNotification(false)
            }, 5000);
            
        }
    }

    const handleBuyNow = (item,category) => {
        console.log('Clicked Handle BuyNow')
        console.log(item)
        console.log(category)

    }


    return(
        <div className='Gadget-component'>
            {props.data.map((e) => {
                return (
                <div key={e.id} className='item-container'>
                <h4 className='item-name'>{e.name}</h4>
                <img className='item-image' src={e.img} alt="No image found" />
                <h6 className='item-cost'>Cost - {e.cost}</h6>
                <button className='add-cart-btn' onClick={() => handleAddCart(e,props.category)}>Add to cart</button>
                <button className='buy-now-btn' onClick={() => handleBuyNow(e,props.category)}>Buy Now</button>
                </div>
                )
            })}
            {notification ? <Notification status={notificationStatus} message={notificationMessage} /> : ''}
        
        </div>
    )

}


export default GadgetComponent