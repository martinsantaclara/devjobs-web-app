import styled from 'styled-components';
import { GlobalContainer } from '../../../styles/globals';
import { SharedMobileFilter } from '../Filter/filterStyles';

export const JobOffersContainer = styled.section`
    ${GlobalContainer}
    margin: 4.375rem auto 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
    justify-content: center;
    row-gap: 3rem;
    @media ${({ theme }) => theme.breakpoints.md} {
        row-gap: 4rem;
        column-gap: 0.6875rem;
    }

    @media ${({ theme }) => theme.breakpoints.xxl} {
        column-gap: 1.875rem;
    }
`;

export const OfferNotFound = styled.div`
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
    // margin: 10rem auto;
    // padding: 2.5rem 0;
    // width: 85%;
    // max-width: 500px;

    // width: 100%;
    // border-radius: 0.375rem;
    // padding: 1.5rem;
    // background-color: ${({ theme }) => theme.surface};

    ${SharedMobileFilter};
    padding: clamp(1.5rem, 4.76vw - 0.79rem, 3.5rem);
    margin: 10rem auto;
    max-width: 500px;
`;

export const NotFoundMessage = styled.h2`
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.onError};
    margin-bottom: 2rem;
    text-align: center;
`;
