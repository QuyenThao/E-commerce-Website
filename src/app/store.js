import userReducer from '../components/Auth/userSlice';
import cartReducer from '../components/Auth/cartSlice';
const { configureStore } = require('@reduxjs/toolkit');

const rootReduce = {
  user: userReducer,
  cart: cartReducer,
};

const store = configureStore({
  reducer: rootReduce,
});

export default store;
