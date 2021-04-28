import React from 'react';
import About from './pages/About';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Detail from './pages/Detail';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Product from './pages/Product';


const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/product',
        exact: true,
        main: ({match}) => <Product match={match} />
    },
    {
        path: '/product/:id',
        exact: true,
        main: ({match}) => <Detail match={match} />
    },
    {
        path: '/contact',
        exact: true,
        main: () => <Contact />
    },
    {
        path: '/about',
        exact: true,
        main: () => <About />
    },
    {
        path: '/cart',
        exact: true,
        main: ({match}) => <Cart match={match} />
    },
    {
        path: '',
        exact: true,
        main: () => <NotFound />
    },
]

export default routes
