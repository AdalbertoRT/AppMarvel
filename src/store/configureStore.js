import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import heroes from './heroes';

const middleware = [...getDefaultMiddleware()];

const reducer = combineReducers({
  heroes,
});

const store = configureStore({reducer, middleware});

export default store;
