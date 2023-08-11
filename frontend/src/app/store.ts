import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from './api/apiSlice';
import charplannerReducer from "../features/charplanner/charplannerSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        charplanner: charplannerReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
});
export type RootState = ReturnType<typeof store.getState>;