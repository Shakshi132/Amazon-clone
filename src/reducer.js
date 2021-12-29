//'reducer' deals with how we dispatch/push the item to the data layer

export const initialState={
    basket: [],
    user: null,                                                /* empty basket to start with, exporting it in index.js*/
};


//Selector to show total value on checkout page(Using this method is a professional practice)

export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);  /*amount is initial amt/price of basket, newly added 'item.price' is added to it */

const reducer = (state, action) => {                          /*reducer takes a 'state' of the app and what 'action' you're trying to perform */
console.log(action)
      switch (action.type){                                   /*Add button is pressed, an action with this certain type is dispatched */
      case "ADD_TO_BASKET":
      return {                                                 
          ...state,                                           
          basket: [...state.basket, action.item],             /*returns the current state of basket plus whatever's been decided to add*/
      };


      case "EMPTY_BASKET":
          return{
              ...state,
              basket: [...state.basket, action.item],
          };


      case "REMOVE_FROM_BASKET":
                                                              //we can proceed with item id here but it'll pose a issue with same items
                                                              //hence, we'll find the index of the item and then work with the same.
      const index = state.basket.findIndex(
          (basketItem) => basketItem.id === action.id         /*'findIndex' helps in finding the action product from basket by matching its its ids, returns the first matched one, it then gets an index */
      );
      let newBasket = [...state.basket];                      /*copy the basket into a temporary variable */

      if(index>=0){                                           /*if = true, a product matched with id */
          newBasket.splice(index, 1);                         /*pass the index and splice it by 1, chops the array/basket by 1 */ 
      } 
      else{
          console.warn('Cant remove product (id: ${action.id}) as it is not in basket')
      }

      return{
          ...state,
          basket: newBasket
       }

       case "SET_USER":
           return{
               ...state,
               user: action.user,
           };

      default:
          return state;
    }
};

export default reducer;