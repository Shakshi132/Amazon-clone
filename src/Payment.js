import React, {useState, useEffect} from 'react'
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';
import './Payment.css'
import { useStateValue } from './StateProvider'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import {getBasketTotal} from './reducer';
import {useNavigate} from 'react-router';
import axios from './Axios';
// import {db} from './firebase';

function Payment() {

     const navigate = useNavigate();

    const [{basket, user}, dispatch] = useStateValue();

     const stripe = useStripe();                                     /*POWERFUL HOOKS */
    const elements = useElements();                                 /*also CardElement adds many features just by importing it.*/

//     //two piece of state to handle the change: when the change is 
//     //done to disable/when or changes add some disability and one for when there's an error
     
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

     const [succeeded, setSucceeded] = useState(false);
     const [processing, setProcessing] = useState("");

     const [clientSecret, setClientSecret] = useState(true);                  /*Before payment processing, we should ask stripe to give us a 
                                                                               client secret, without this we can't do the further */


     //IMPORTANT-----FOR GENERATION OF CLIENT SECRET WHENEVER BASKET COUNT/VALUE CHANGES                                                                    
     useEffect(() => {

         const getClientSecret = async() => {
             const response = await axios({
                 method: 'post',
                 //stripe expects the totals in a subunits of the currency(expects 'cents' because we have $ in this case)
                 url: `/payments/create?total=${getBasketTotal(basket)*100}`                    /*a general kind of syntax for url in axios api because we dont have one, ?total is query param */             
             });
             setClientSecret(response.data.clientSecret)                                        /*when we get a response back, we set it as the clientSecret */

         }

         getClientSecret();

     }, [basket])   
    
     console.log('secret is >>>>', clientSecret)

    
  const handleSubmit = async (event)  => {                                    /*e here stands for event */
         //stripe

         event.preventDefault();
         setProcessing(true);                                                /*button gets disabled after the user submits the info. PREVENTION FROM SUBMITTING THE DETAILS MULTIPLE TIMES */

         const payload = await stripe.confirmCardPayment(clientSecret, {
             payment_method: {
                 card: elements.getElement(CardElement)
             }
         }).then(({ paymentIntent }) => {                                      /*we get a response, but we destructure it as paymentIntent */
             //paymentIntent similar to paymentConfirmation

//             db                                                                /*PUSHING INTO THE DATABASE */
//             .collection('users')
//             .doc(user?.uid)
//             .collection('orders')
//             .doc(paymentIntent.id)
//             .set({
//               basket: basket,
//               amount: paymentIntent.amount,
//               created: paymentIntent.created
//             })                                           


             setSucceeded(true);
             setError(null)
             setProcessing(false)
             

//             dispatch({                                                       /*to empty the basket after the order has been placed */
//               type:'EMPTY_BASKET',
          

//             })
             navigate('/orders')
         })


 }

  const handleChange = e => {
        //listen for any changes in the cardElement
       //and display any errors as the user enters its card details

         setDisabled(e.empty);                                        /*if event is empty, setDisable = true */
         setError(e.error? e.error.message : "")                      /*if event has error, setError to display a message */
     }


    return (
       <div className="payment">
        <div className="payment_container">
          <h1>
            Checkout(
            <Link className="payment_linkTitle" to="/checkout">
              {basket?.length}
            </Link>{" "}
            Items )
          </h1>

          {/*payment section - delivery */}
          <div className="payment_section">
            <div className="payment_title">
              <h3>Delivery address</h3>
            </div>
            <div className="payment_address">
              <p>{user?.email}</p>                                                     {/*Optional chaining */}
              <p>4th Street, Balinger Lane</p>
              <p>North Carolina</p>
            </div>
          </div>

          {/*payment section - review items */}
          <div className="payment_section">
            <div className="payment_title">
              <h3>Review item and delivery</h3>
            </div>
            <div className="payment_items">
              {basket.map((item /*REUSED COMPONENT */) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          </div>

          {/*payment section - payment method*/}
          <div className="payment_section">
            <div className="payment_title">
              <h3>Payment Method</h3>
            </div>
            <div className="payment_details">
              {/*stripe */}
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />

                <div className="payment_priceContainer">
                  <CurrencyFormat
                    renderText={(value) => (
                        <h3>Order Total: {value}</h3>
                    )}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  /> 
                       <button disabled={processing || disabled || succeeded}>          {/*button will be disabled based on the following states */}
                       <span>{processing? <p>Processing</p> : "Buy Now"}</span>
                  </button>          
                </div>

                {/*Error*/}
                 {error && <div>{error}</div>}                                  {/* when there is an error, only then show the error <div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Payment

