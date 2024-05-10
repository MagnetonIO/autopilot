import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import store from "./redux/store";

import "./i18n";
import "./index.css";

const container = document.getElementById("root") ?? null;

if (container === null) {
    console.error("Could not launch app, failed in index.tsx");
} else {
    const root = createRoot(container);
    root.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    );
}
