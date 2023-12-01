import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "../ui/layout/Layout";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Layout/>}>

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;