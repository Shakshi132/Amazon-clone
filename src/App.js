import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Payment from './Payment';
// import Orders from './Orders';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51K3zErSFmMKMZumAOKcCIiqkQfJTP4nEo4TnpUJE1wTehmi8Go17BhDugXyhALQgaarVjCeZdmZq88HjCz6UpLj200PAoQmtDn');       /*loads stripe and stores it into a promise  */

function App() {

    const[{}, dispatch] = useStateValue();                                       /*For shooting the authencated user details in the data layer */

    //To keep a track of who is signed in, we use useEffect
    useEffect(() => {
      auth.onAuthStateChanged(authUser => {                                       /*when the authentication changes, it'll give a authenticated user */
         console.log('the user is>>>>', authUser);

         if(authUser){
             //the user is/was logged in

             dispatch({                                                           /*if the authUser is returned, i.e. user logged in, that authUser is set as the USER */
               type: 'SET_USER',
               user: authUser
             })
         }else{
             //the user logged out

             dispatch({
              type: 'SET_USER',
              user: null

            })
         }
      })

  }, [])                                                                       /*The event listener will only run once, when the app component is re-loaded */


  return (
    <Router>
      <div className="app">
        
        {/*BEM convention 'A' to 'a'*/}
        <Routes>
          
          {/*In the video, 'Switch' has been used. But we use 'Routes' acc to the latest version} */}
          {/* <Route path="/orders" element= {<><Header /><Orders /></>}></Route> */}
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          ></Route>
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  
                  {/*a higher order function: wraps the payment element */}
                  <Payment />
                </Elements>
              </>
            }
          ></Route>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          ></Route>
          {/*default route should be always placed at the bottom} */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
