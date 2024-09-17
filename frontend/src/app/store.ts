import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import { staticDataSlice } from "./api/staticDataSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import charplannerReducer from "src/features/charplanner/charplannerSlice";
import charplannerDataReducer from "src/features/charplanner/charplannerDataSlice";
import authReducer from "src/features/auth/authSlice";
import buildsReducer from "src/features/builds/buildsSlice";
import toastReducer from "src/features/toasts/toastSlice";
import commentsReducer from "src/features/comments/commentsSlice";
import popupReducer from "src/features/popups/popupSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        [staticDataSlice.reducerPath]: staticDataSlice.reducer,
        charplanner: charplannerReducer,
        charplannerData: charplannerDataReducer,
        auth: authReducer,
        builds: buildsReducer,
        toast: toastReducer,
        comments: commentsReducer,
        popup: popupReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware()
            .concat(apiSlice.middleware)
            .concat(staticDataSlice.middleware),
    devTools: process.env.NODE_ENV === "development" ? {
        // DevTools options to improve performance
        stateSanitizer: state => ({
            ...state,
            charplannerData: "long-blob",
            staticData: "long-blob",
        }),
        actionsDenylist: ["charplannerData/*", "staticData/*"],
        trace: true,        // Enable tracing for better debugging
        traceLimit: 25,     // Limit the trace stack to avoid performance overhead
    } : false,
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;