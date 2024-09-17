import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./app/store.ts";
import ScrollToTop from "./components/ScrollToTop.tsx";
import App from "./App.tsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <ScrollToTop>
                    <Routes>
                        <Route path="/*" element={<App />} />
                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
);

function registerServiceWorker() {
    if (import.meta.env.MODE === "production" && "serviceWorker" in navigator) {
        window.addEventListener("load", () => {
            navigator.serviceWorker.register("/service-worker.js", { scope: "/" })
                .then((_registration) => {
                    //console.log("Service Worker registered with scope:", registration.scope);
                })
                .catch((_error) => {
                    //console.error("Service Worker registration failed:", error);
                });
        });
    }
}

registerServiceWorker();