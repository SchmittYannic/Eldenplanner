import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import charplannerReducer from "src/features/charplanner/charplannerSlice";
import authReducer from "src/features/auth/authSlice";
import toastReducer from "src/features/toasts/toastSlice";
import commentsReducer from "src/features/comments/commentsSlice";
import popupReducer from "src/features/popups/popupSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        charplanner: charplannerReducer,
        auth: authReducer,
        toast: toastReducer,
        comments: commentsReducer,
        popup: popupReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: process.env.NODE_ENV === "development" ? true : false,
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;