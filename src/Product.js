import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({id, title, price, rating, image}) {

    const[{basket}, dispatch] = useStateValue();              /*Mentioned in StateProvider, {Basket} is the obtained by destructuring the state*/

    console.log(basket);

    const addToBasket = () => {
        //dispatch the item to data layer, it works as a gun that shoots the item with its properties
        //to a data layer.
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                image: image,
            },
        });
    };
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {Array(rating).fill().map((_, i) => (<p>⭐</p>))}   {/*Trick to handle to stars */}
                </div>
            </div>
            <img src={image}></img>
            <button onClick={addToBasket}>Add To Basket</button>
        </div>
    )
}

export default Product

