import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal';
import ad from './images/ad.svg';

function Checkout() {
   const [{basket, user}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src={ad}></img>
                <div>
                <h2>Hello! {user?.email}</h2>
                <h2 className="checkout_title">ITEMS IN YOUR BASKET</h2>

                    {basket.map(item => (                          /* RENDERING THE SELECTED PRODUCTS: for every item in the basket, we return a checkout product*/
                      <CheckoutProduct                             /*this code will pull the items from the data layer to the checkout page */
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating} />
                    ))}
                </div>
            </div>

            <div className="checkout_right">
                <Subtotal />

            </div>
        </div>
    )
}

export default Checkout
