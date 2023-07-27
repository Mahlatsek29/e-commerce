import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActionTypes";

const initialState = {
    cartItems: [],
    totalAmount: 0,
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        const newItem = {
          ...action.payload.item,
          quantity: action.payload.quantity,
        };
        return {
          ...state,
          cartItems: [...state.cartItems, newItem],
          totalAmount: state.totalAmount + newItem.price * newItem.quantity,
        };
      case REMOVE_FROM_CART:
        const itemIdToRemove = action.payload;
        const updatedCartItems = state.cartItems.filter((item) => item.id !== itemIdToRemove);
        const removedItem = state.cartItems.find((item) => item.id === itemIdToRemove);
        const updatedTotalAmount = state.totalAmount - removedItem.price * removedItem.quantity;
        return {
          ...state,
          cartItems: updatedCartItems,
          totalAmount: updatedTotalAmount,
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;