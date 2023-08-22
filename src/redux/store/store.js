import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../reducers/cartReducer'; // Adjust the path to your cartReducer file

const store = configureStore({
  reducer: {
    cart: cartReducer,
    // Add other reducers here if needed
  },
});

export default store;
