import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./app/store.ts";
import { registerServiceWorker } from "./service-worker.js";
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

registerServiceWorker();