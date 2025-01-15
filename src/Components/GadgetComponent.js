import React from 'react'

const GadgetComponent = () => {

const MobileData = [
    {
        name : 'Samsung',
        img : 'https://images.samsung.com/is/image/samsung/p6pim/sa_en/2401/gallery/sa-en-galaxy-s24-s928-sm-s928bztcmea-539325245?$684_547_JPG$',
        cost : 10000
    },
    {
        name : 'iPhone',
        img : 'https://images.indianexpress.com/2024/07/iphone-17-slim.jpg',
        cost : 20000
    }
]



    return(
        <div className='Gadget-component'>
        
            {MobileData.map((e,index) => {
                return (
                <div className='item-container'>
                <h4 className='item-name' key={index}>{e.name}</h4>
                <img className='item-image' key={index} src={e.img} alt="No image found" />
                <h6 className='item-cost'>Cost - {e.cost}</h6>
                <button className='add-cart-btn'>Add to cart</button>
                <button className='buy-now-btn'>Buy Now</button>
                </div>
                )
            })}
        
        </div>
    )

}


export default GadgetComponent