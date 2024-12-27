import {createRoot} from "react-dom/client";
import './styles/index.scss'
import {App} from "./App";
import {BrowserRouter, Route, Routes} from "react-router";
const root = createRoot(document.getElementById('root'))

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);