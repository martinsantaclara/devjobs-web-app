import React, { useEffect } from 'react';
import { useDeviceContext, useFilterContext } from '../context/StateContext';
import { Layout } from '../layout/Layout';
import Filter from '../components/LandingPage/Filter/filter';
import { JobOffers } from '../components/LandingPage/JobOffers/jobOffers';
import { Pagination } from '../components/LandingPage/Pagination/pagination';

import db from '../utils/db';
import Offer from '../models/Offer';

const Home = ({ Offers }) => {
    const { title, location, fullTime } = useFilterContext();
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

    useEffect(() => {
        console.log('use Effect Home Page');
    }, []);

    return (
        <>
            {screenWidth !== 0 && Offers && (
                <Layout>
                    <Filter></Filter>

                    <JobOffers Offers={FilteredOffersSplit}></JobOffers>
                    <Pagination
                        offersLength={FilteredOffersSplit.length}
                    ></Pagination>
                </Layout>
            )}
        </>
    );
};

export default Home;

export const getStaticProps = async ({ params }) => {
    // const { data } = await axios.get('http://localhost:3000/api/offers');
    // const Offers = data;
    // return { props: { Offers }, revalidate: 60 };

    await db.connect();
    const OffersDocs = await Offer.find({}).lean();
    await db.disconnect();
    return {
        props: {
            Offers: OffersDocs.map(db.convertDocToObj),
            revalidate: 60,
        },
    };
};
