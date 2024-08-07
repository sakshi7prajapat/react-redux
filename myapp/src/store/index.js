import { configureStore } from '@reduxjs/toolkit'
import userSlice from "./silces/UserSlices"
import logger from 'redux-logger'
const store = configureStore({
    reducer:{
        users : userSlice,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

export default store;