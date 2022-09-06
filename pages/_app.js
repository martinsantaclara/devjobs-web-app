import React from 'react';
import { StateContext } from '../context/StateContext';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
    return (
        <StateContext>
            <NextNProgress />
            <Component {...pageProps} />
        </StateContext>
    );
}
export default MyApp;
