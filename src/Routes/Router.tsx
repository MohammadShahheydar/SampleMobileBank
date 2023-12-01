import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "../ui/layout/Layout";
import Home from "../pages/Home";
import Insert from "../pages/Insert";
import Filter from "../pages/Filter";
import {routes} from "../utils/routes";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path={routes.add()} element={<Insert/>}/>
                    <Route path={routes.filter()} element={<Filter/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;