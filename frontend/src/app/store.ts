import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import charplannerReducer from "src/features/charplanner/charplannerSlice";
import authReducer from "src/features/auth/authSlice";
import toastReducer from "src/features/toasts/toastSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        charplanner: charplannerReducer,
        auth: authReducer,
        toast: toastReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;