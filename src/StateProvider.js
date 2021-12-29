//We push an item to data layer when 'Add to basket' is pressed. we are referring to 
//REACT CONTEXT API(or its similar friend, redux) when we say data layer. 
//when an item is in data layer, we can easily pull it to another component of the app. In our case
//item will be pulled into My Basket or checkout page.


import React, {createContext, useContext, useReducer} from "react";

//Prepares the dataLayer
export const StateContext = createContext();

//Wrap our app and provide the data layer
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>{children}</StateContext.Provider>
);

//pull information from the data layer
export const useStateValue = () => useContext(StateContext);