import React from 'react';
import { StateContext } from '../context/StateContext';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
    return (
        <StateContext>
            <NextNProgress
                color="orange"
                startPosition={0.1}
                stopDelayMs={20}
                height={5}
            />
            <Component {...pageProps} />
        </StateContext>
    );
}
export default MyApp;
