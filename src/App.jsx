import { Routes, Route, BrowserRouter } from "react-router-dom"
import Layout from "./pages/Layout/Layout";
import Uikit from "./pages/Uikit/Uikit"
import Home from "./pages/Home/Home"

import "./App.scss"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />} >
                    <Route path="/" element={<Home />} />
                    <Route path="/uikit" element={<Uikit />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}