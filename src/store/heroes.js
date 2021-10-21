import {createSlice} from '@reduxjs/toolkit';
import md5 from 'md5';
import axios from 'axios';

const PUBLIC_KEY = 'd2c23ab2d9aa451626cb51e3cffb8a24';
const PRIVATE_KEY = '7a7d719f066df6ced2c20281ca90d4547c70e6ad';
const timestamp = Number(new Date());
const hash = md5(timestamp + PRIVATE_KEY + PUBLIC_KEY);

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
    dispatch(fetchStarted);
    const response = await axios.get(
      `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&limit=20&offset=${offset}&apikey=${PUBLIC_KEY}&hash=${hash}`,
    );
    return dispatch(fetchSuccess(response.data.data.results));
  } catch (error) {
    return dispatch(fetchError(error.message));
  }
};

export default slice.reducer;
