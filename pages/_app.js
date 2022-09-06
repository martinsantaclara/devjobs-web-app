import React from 'react';
import { StateContext } from '../context/StateContext';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
    return (
        <StateContext>
            <NextNProgress color="orange" stopDelayMs={50} height={5} />
            <Component {...pageProps} />
        </StateContext>
    );
}
export default MyApp;
