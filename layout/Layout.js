import React from 'react';
import Header from '../components/LandingPage/Header/header';

export const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <footer></footer>
        </>
    );
};
