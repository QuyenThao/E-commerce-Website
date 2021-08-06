import userReducer from '../components/Auth/userSlice';
const { configureStore } = require('@reduxjs/toolkit');

const rootReduce = {
  user: userReducer,
};

const store = configureStore({
  reducer: rootReduce,
});

export default store;
