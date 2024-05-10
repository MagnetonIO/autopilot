import React, { Suspense } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { useWakeLock } from "react-screen-wake-lock";
import Layout from "./components/ui/layout/layout";
import Home from "./pages/home/home";

function App() {
    const { isSupported, released, request } = useWakeLock({
        onError: () => console.error("Screen Wake Lock: Error!"),
        onRelease: () => console.log("Screen Wake Lock: released!"),
    });
    if (isSupported && released) {
        const promise = request();
        if (promise !== undefined) {
            promise.catch((error) => {
                console.error("Error occured while setting the screenlock");
            });
        }
    }

    const homeElement = <Home />;

    return (
        <Suspense fallback="loading">
            <Layout>
                <Routes>
                    <Route path="/" element={homeElement} />
                </Routes>
            </Layout>
        </Suspense>
    );
}

export default App;
