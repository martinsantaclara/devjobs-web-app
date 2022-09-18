import styled from 'styled-components';

export const JobOfferWrapper = styled.div`
    width: 100%;
    padding: 0 1rem 2.25rem clamp(2rem, 8.14vw + 0.09rem, 4rem);
    background-color: ${({ theme }) => theme.surface};
    border-radius: 0.375rem;

    @media ${({ theme }) => theme.breakpoints.md} {
        padding: 0 1rem 2.25rem 2rem;
    }
`;

export const JobOffer = styled.article`
    margin-top: -1.5625rem;
`;

export const CompanyLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ mobile, details }) =>
        details && !mobile ? '8.75rem' : '3.125rem'};
    height: ${({ mobile, details }) =>
        details && !mobile ? '8.75rem' : '3.125rem'};
    background-color: ${({ logoBackground }) => logoBackground};
    border-radius: ${({ mobile, details }) =>
        details && !mobile ? 0 : '0.9375rem'};
`;

export const Logo = styled.img.attrs((props) => ({
    src: props.logo,
    alt: `${props.company} logo`,
}))``;

export const OverTitle = styled.div`
    margin: ${({ details }) => (details ? 0 : '1.5rem 0 1rem')};
`;

export const TimeAgoAndContract = styled.span`
    color: ${({ theme }) => theme.onSurface2};
    font-size: ${({ theme }) => theme.fsText_lg}rem;
    font-weight: ${({ theme }) => theme.fwRegular};
    line-height: 1.25;
`;

export const Oval = styled.div`
    display: inline-block;
    width: 0.25rem;
    height: 0.25rem;
    border-radius: 50%;
    background-color: ${({ theme, details }) =>
        details ? theme.primary : theme.onSurface2};
    margin: ${({ details }) => (details ? '0.5rem 2rem 0 0' : '0 0.75rem')};
    min-width: ${({ details }) => (details ? '0.25rem' : '')};
`;

export const Position = styled.h2`
    color: ${({ theme }) => theme.onSurface1};
    font-size: ${({ theme, details, mobile, footer }) =>
        details
            ? mobile || footer
                ? theme.fsHeading_sm
                : theme.fsHeading_lg
            : theme.fsHeading_sm}rem;
    font-weight: ${({ theme }) => theme.fwHeading_sm};
    line-height: ${({ footer }) => (footer ? 1 : 1.25)};
    margin: ${({ details, footer }) =>
        details ? (footer ? '0 0 0.5rem' : '0.5rem 0') : '0 0 1rem'};

    :hover {
        color: ${({ theme, details }) => (!details ? theme.onSurface2 : '')};
    }
`;

export const Company = styled.h3`
    color: ${({ theme, details }) =>
        details ? theme.onSurface1 : theme.onSurface2};
    font-size: ${({ theme, details, mobile }) =>
        details
            ? mobile
                ? theme.fsHeading_sm
                : theme.fsHeading_md
            : theme.fsHeading_xs}rem;
    font-weight: ${({ theme, details }) =>
        details ? theme.fwHeading_sm : theme.fwHeading_xs};
    line-height: 1.25;
    margin: ${({ details }) => (details ? '1.5rem 0 0' : '0 0 2.5rem')};
`;

export const Location = styled.h3`
    color: ${({ theme }) => theme.primary};
    font-size: ${({ theme }) => theme.fsHeading_xxs}rem;
    font-weight: ${({ theme }) => theme.fwHeading_xxs};
    line-height: 1.25;
`;
