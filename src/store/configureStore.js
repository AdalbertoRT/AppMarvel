import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import heroes from './heroes';
import editHeroes from './heroes';

const middleware = [
  ...getDefaultMiddleware({
    immutableCheck: {warnAfter: 128},
    serializableCheck: {warnAfter: 128},
  }),
];

const reducer = combineReducers({
  heroes,
  editHeroes,
});

const store = configureStore({reducer, middleware});

export default store;
