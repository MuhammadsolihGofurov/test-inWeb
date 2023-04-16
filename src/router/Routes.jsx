import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home, CataloguePage, Product } from '../pages/'
import { Loading, Footer, Header, NavbarFixed, Scroll, BarsMenu } from '../components';

const Router = ({
    ...rest
}) => {
    return (
        <BrowserRouter>
            {/* header */}
            <Header />
            {/* header */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalogue" element={<CataloguePage />} />
                <Route path="/product/:id" element={<Product />} />
            </Routes>

            {/* navbar fixed */}
            <NavbarFixed />
            {/* navbar fixed */}
            {/* offcanvas */}
            <BarsMenu />
            {/* offcanvas */}
            {/* loading */}
            <Loading />
            {/* loading */}
            {/* Footer */}
            <Footer />
            {/* Footer */}
            {/* Scroll if pathname change */}
            <Scroll />
            {/* Scroll if pathname change */}

        </BrowserRouter>
    );
};

export default Router;