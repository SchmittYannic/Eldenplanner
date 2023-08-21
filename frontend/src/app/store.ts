import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import charplannerReducer from "../features/charplanner/charplannerSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        charplanner: charplannerReducer,
        auth: authReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;