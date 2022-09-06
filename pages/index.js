import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';
import Filter from '../components/LandingPage/Filter/filter';
import { JobOffers } from '../components/LandingPage/JobOffers/jobOffers';
import { Pagination } from '../components/LandingPage/Pagination/pagination';
import { Layout } from '../layout/Layout';
import { useFilterContext, useDeviceContext } from '../context/StateContext';

import db from '../utils/db';
import Offer from '../models/Offer';

export default function Home({ Offers }) {
    const { title, location, fullTime, page, setPage } = useFilterContext();
    const { screenWidth } = useDeviceContext();

    const FilteredOffers = Offers.filter(
        (offer) =>
            offer.location.toUpperCase().includes(location.toUpperCase()) &&
            (offer.position.toUpperCase().includes(title.toUpperCase()) ||
                (screenWidth >= 1440
                    ? offer.company
                          .toUpperCase()
                          .includes(title.toUpperCase()) ||
                      offer.requirements.items.some((item) =>
                          item.toUpperCase().includes(title.toUpperCase())
                      )
                    : false)) &&
            (fullTime ? offer.contract === 'Full Time' : true)
    );

    const FilteredOffersSplit = new Array(Math.ceil(FilteredOffers.length / 12))
        .fill()
        .map((_) => FilteredOffers.splice(0, 12));

    /* test with axios */
    // const fetchProducts = async () => {
    //     try {
    //         const { data } = await axios.get(`/api/offers`);
    //         console.log(data);
    //     } catch (err) {
    //         console.log('error');
    //     }
    // };

    // useEffect(() => {
    //     fetchProducts();
    // }, []);

    return (
        <>
            {screenWidth !== 0 && (
                <>
                    <Head>
                        <title>devjobs</title>
                        <meta
                            name="description"
                            content="frontmentor challenge"
                        />
                        <link rel="icon" href="/favicon.ico" />
                    </Head>

                    <Layout>
                        <Filter></Filter>

                        <JobOffers Offers={FilteredOffersSplit}></JobOffers>
                        <Pagination
                            offersLength={FilteredOffersSplit.length}
                        ></Pagination>
                    </Layout>
                </>
            )}
        </>
    );
}

export const getStaticProps = async ({ params }) => {
    // const { data } = await axios.get('http://localhost:3000/api/offers');
    // const Offers = data;
    // return { props: { Offers }, revalidate: 60 };

    await db.connect();
    const OffersDocs = await Offer.find({}).lean();
    // console.log(OffersDocs);
    await db.disconnect();
    return {
        props: {
            Offers: OffersDocs.map(db.convertDocToObj),
            revalidate: 60,
        },
    };
};
