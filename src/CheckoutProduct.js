import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({id, title, price, rating, image}) {

    const[{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        //remove item from basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image} />

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                {Array(rating)                              /*We take a rating in no. from 1 to 5, make an array of off it */
                .fill()                                     /*fill it in */
                .map((_, i) => (                            /*And then we map through it from that many times */
                   <p>⭐</p>))}
                </div>
                <button onClick={removeFromBasket}>remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
