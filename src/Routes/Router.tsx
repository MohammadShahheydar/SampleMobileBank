import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "../ui/layout/Layout";
import Home from "../pages/Home";
import Insert from "../pages/Insert";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path={'add'} element={<Insert/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;