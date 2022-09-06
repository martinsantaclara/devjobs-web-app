import React from 'react';
import { useFilterContext } from '../../../context/StateContext';
import { Container } from '../../../styles/globals';
import { clearParameters } from '../../../utils/clearParameters';
import { BgMobileFilter, SubmitButton } from '../Filter/filterStyles';
import { Offer } from '../Offer/offer';
import {
    JobOffersContainer,
    NotFoundMessage,
    OfferNotFound,
} from './jobOffersStyles';

// export const JobOffers = ({ Offers, pageBack }) => {
export const JobOffers = ({ Offers }) => {
    const {
        setTitle,
        setLocation,
        setFullTime,
        setChecked,
        setMirrorTitle,
        setMirrorLocation,
        setClear,
        page,
        setPage,
        pageBack,
    } = useFilterContext();

    const handleNewSearch = () => {
        clearParameters(
            setTitle,
            setLocation,
            setFullTime,
            setChecked,
            setMirrorTitle,
            setMirrorLocation,
            setClear,
            pageBack,
            setPage
        );
    };

    return (
        <>
            {Offers.length > 0 ? (
                <JobOffersContainer>
                    {Offers[page].map((offer, index) => {
                        return <Offer key={index} offer={offer}></Offer>;
                    })}
                </JobOffersContainer>
            ) : (
                <BgMobileFilter>
                    <Container>
                        <OfferNotFound>
                            <NotFoundMessage>
                                No Offers for this search!!!
                            </NotFoundMessage>
                            <SubmitButton fluid onClick={handleNewSearch}>
                                New Search
                            </SubmitButton>
                        </OfferNotFound>
                    </Container>
                </BgMobileFilter>
            )}
        </>
    );
};
