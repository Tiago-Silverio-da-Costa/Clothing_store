import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductsList from "./pages/ProductsList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={Product} path="/product" />
            <Route component={ProductsList} path="/prodlist" />
            <Route component={Register} path="/register" />
            <Route component={Login} path="/log" />
            <Route component={Cart} path="/cart" />
        </BrowserRouter>
    )
}

export default Routes;