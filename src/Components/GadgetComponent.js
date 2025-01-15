import React from 'react'

//const GadgetComponent = ( {Data} ) => {
const GadgetComponent = ( props ) => {
    return(
        <div className='Gadget-component'>
            {props.Data.map((e,index) => {
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