import React, { useEffect, useState } from 'react';
import Head from 'next/head';

import { useRouter } from 'next/router';

const HomePage = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/home');
        }, 500);
    }, []);

    return (
        <>
            <Head>
                <title>devjobs</title>
                <meta name="description" content="frontmentor challenge" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </>
    );
};

export default HomePage;
