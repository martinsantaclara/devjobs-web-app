import styled from 'styled-components';
import { GlobalContainer, sharedStyleButtons } from '../../../styles/globals';

export const HeaderDetailsContainer = styled.section`
    ${GlobalContainer}
    background-color: ${({ theme }) => theme.surface};
    padding: 1rem 1rem 2rem 1rem;
    margin: -0.625rem auto 0;
    border-radius: 0.375rem;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: ${({ mobile }) => (mobile ? 'center' : 'flex-start')};
    @media ${({ theme }) => theme.breakpoints.md} {
        padding: 0 2.5rem 0 0;
        margin: -2.5rem auto 0;
        min-width: 689px;
        max-width: 730px;
    }

    @media ${({ theme }) => theme.breakpoints.xxl} {
        padding-right: 43px;
    }
`;

export const HeaderDetailsContent = styled.div`
    margin-top: ${({ mobile }) => (mobile ? '-2.5625rem' : 0)};
    display: flex;
    flex-direction: ${({ mobile }) => (mobile ? 'column' : 'row')};
    align-items: center;
    width: 100%;
`;

export const CompanyData = styled.div`
    margin-left: ${({ mobile }) => (!mobile ? '2.5rem' : 0)};
    text-align: ${({ mobile }) => (mobile ? 'center' : '')};
`;

export const CompanyDetails = styled.h1`
    color: ${({ theme }) => theme.onSurface1};
    font-size: ${({ theme, mobile }) =>
        mobile ? theme.fsHeading_sm : theme.fsHeading_md}rem;
    font-weight: ${({ theme }) => theme.fwHeading_sm};
    line-height: 1.25;
    margin: 1.5rem 0 0;
`;

export const CompanyName = styled.h2`
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.onSurface1};
`;

export const CompanyWeb = styled.h2`
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.onSurface2};
    margin: 0.5rem 0 1.5rem;
`;

export const SiteButtonWrapper = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
`;

export const CompanySiteButton = styled.a`
    ${sharedStyleButtons}
    padding: 1rem 0;
    width: 9.1875rem;
    text-align: center;
`;

export const OfferCompany = styled.h2`
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.onSurface1};
`;

export const OfferPosition = styled.p`
    font-size: 28px;
    font-wight: 700;
    color: ${({ theme }) => theme.onSurface1};
`;
