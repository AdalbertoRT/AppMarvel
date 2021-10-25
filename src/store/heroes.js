import {createSlice} from '@reduxjs/toolkit';
import md5 from 'md5';
import axios from 'axios';

// const PUBLIC_KEY = 'd2c23ab2d9aa451626cb51e3cffb8a24';
const PUBLIC_KEY = '1e1cd3a6c64cf13c967d9098a990fd3f';
// const PRIVATE_KEY = '7a7d719f066df6ced2c20281ca90d4547c70e6ad';
const PRIVATE_KEY = '4949dd854b89bc08fe4606ce0a19b8e9006e3ecd';
const timestamp = Number(new Date());
const hash = md5(timestamp + PRIVATE_KEY + PUBLIC_KEY);

// md5-hash = 9c0f7496cc43519d8f8abb124f79eb6

//Reducer (state, actions)
const slice = createSlice({
  name: 'heroes',
  initialState: {loading: false, data: null, error: null},
  reducers: {
    fetchStarted(state) {
      state.loading = true;
    },
    fetchSuccess(state, action) {
      (state.loading = false),
        (state.data = action.payload),
        (state.error = null);
    },
    fetchError(state, action) {
      (state.loading = false),
        (state.data = null),
        (state.error = action.payload);
    },
  },
});

export const {fetchStarted, fetchSuccess, fetchError} = slice.actions;

//Redux Thunk to Fetch Heroes API
export const fetchHeroes = offset => async dispatch => {
  try {
    dispatch(fetchStarted());
    const response = await axios.get(
      `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&limit=50&offset=${offset}&apikey=${PUBLIC_KEY}&hash=${hash}`,
    );
    return dispatch(fetchSuccess(response.data.data.results));
  } catch (error) {
    return dispatch(fetchError(error.message));
  }
};

//Redux Thunk to Fetch a Hero API
export const fetchHero = name => async dispatch => {
  try {
    dispatch(fetchStarted());
    const response = await axios.get(
      `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&nameStartsWith=${name}&orderBy=name&limit=100&apikey=${PUBLIC_KEY}&hash=${hash}`,
    );
    return dispatch(fetchSuccess(response.data.data.results));
  } catch (error) {
    return dispatch(fetchError(error.message));
  }
};

export default slice.reducer;
