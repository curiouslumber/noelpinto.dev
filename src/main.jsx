import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import MusicPlayer from "./components/MusicPlayer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <App />
        <MusicPlayer />
    </>
);
