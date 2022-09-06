import React from 'react';
import axios from 'axios';
import Head from 'next/head';
import { Layout } from '../../layout/Layout';
import { HeaderDetails } from '../../components/DetailsPage/HeaderDetails/headerDetails';
import { BodyDetails } from '../../components/DetailsPage/BodyDetails/bodyDetails';
import { FooterDetails } from '../../components/DetailsPage/FooterDetails/footerDetails';

import db from '../../utils/db';
import Offer from '../../models/Offer';

export const OfferDetails = ({ offer }) => {
    return (
        <>
            <Head>
                <title>{offer.company}</title>

                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Layout>
                <HeaderDetails offer={offer} />
                <BodyDetails offer={offer}></BodyDetails>
                <FooterDetails offer={offer} />
            </Layout>
        </>
    );
};

export default OfferDetails;

export const getServerSideProps = async (ctx) => {
    const { id } = ctx.params; // Use `context.params` to get dynamic params
    // const { data } = await axios.get(`http://localhost:3001/offers/?id=${id}`);
    // const offer = data[0];
    // return { props: { offer } };

    await db.connect();
    const offer = await Offer.findOne({ id }).lean();
    await db.disconnect();
    return {
        props: {
            offer: db.convertDocToObj(offer),
        },
    };
};
