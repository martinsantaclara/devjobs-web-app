import styled, { css } from 'styled-components';
import { GlobalContainer, sharedStyleButtons } from '../../../styles/globals';
import { SubmitButton } from '../../LandingPage/Filter/filterStyles';

export const BodyDetailsContainer = styled.section`
    ${GlobalContainer}
    background-color: ${({ theme }) => theme.surface};
    padding: 2.5rem 1.5rem 2.5rem;
    margin: ${({ mobile }) => (mobile ? '1.5rem' : '2rem')} auto 0;
    border-radius: 0.375rem;
    z-index: 1;
    display: flex;
    flex-direction: column;
    // align-items: flex-start;
    @media ${({ theme }) => theme.breakpoints.md} {
        padding: 3rem;
        min-width: 689px;
        max-width: 730px;
    }

    @media ${({ theme }) => theme.breakpoints.xxl} {
        padding-right: 43px;
    }
`;

export const BodyDetailsHeader = styled.div`
    display: flex;
    flex-direction: ${({ mobile }) => (mobile ? 'column' : 'row')};
    justify-content: ${({ mobile }) => (!mobile ? 'space-between' : '')};
    align-items: ${({ mobile }) => (!mobile ? 'center' : '')};
    margin-bottom: ${({ mobile }) => (mobile ? '2rem' : '2.5rem')};
`;

export const BodyHeaderLeft = styled.div``;

export const ApplyButton = styled.a`
    ${sharedStyleButtons}
    justify-self: flex-end;
    text-align: center;
    padding: 1rem;
    margin: ${({ body, mobile }) => (body && mobile ? '3.125rem 0 0' : 0)};
    width: ${({ mobile, fluid }) => (!mobile ? '141px' : fluid ? '100%' : '')};
    max-width: ${({ fluid }) => (fluid ? '500px' : '')};
`;

export const Description = styled.p`
    font-size: ${({ theme }) => theme.fsText_lg}rem;
    font-weight: ${({ theme }) => theme.fwRegular};
    color: ${({ theme }) => theme.onSurface3};
    line-height: 1.625;
    padding-bottom: 2.5rem;
`;

export const DetailsBodySection = css`
    padding-bottom: ${({ desktop }) => (desktop ? '3rem' : '2.5rem')};
`;

export const DetailsBodyTitle = css`
    font-size: ${({ theme }) => theme.fsHeading_sm}rem;
    font-weight: ${({ theme }) => theme.fwHeading_sm};
    color: ${({ theme }) => theme.onSurface1};
    line-height: 1.25;
    margin-bottom: 24px;
`;

export const DetailsBodyContent = css`
    font-size: ${({ theme }) => theme.fsText_lg}rem;
    font-weight: ${({ theme }) => theme.fwRegular};
    color: ${({ theme }) => theme.onSurface3};
    line-height: 1.625;
    padding-bottom: ${({ mobile }) => (mobile ? '2rem' : '1.5rem')};
`;

export const DetailsListItems = css`
    padding-inline: 0;
    margin-block: 0;
    list-style: none;
`;
export const DetailsListItem = css`
    display: flex;
    :not(:nth-last-child(1)) {
        margin-bottom: 0.5rem;
    }
`;
export const RequirementsSection = styled.div`
    ${DetailsBodySection}
`;

export const RequirementsTitle = styled.h2`
    ${DetailsBodyTitle}
`;

export const RequirementsContent = styled.p`
    ${DetailsBodyContent}
`;

export const RequirementsItems = styled.ul`
    ${DetailsListItems}// margin-left: 14px;
    // font-size: ${({ theme }) => theme.fsText_lg}rem;
    // font-weight: ${({ theme }) => theme.fwRegular};
    // color: ${({ theme }) => theme.onSurface3};
    // line-height: 1.625;
`;

export const RequirementsListItem = styled.div`
    // list-style-position: inside;

    // padding-left: 24px;

    ${DetailsListItem}// ::marker {
    //     font-size: 14px;
    //     color: ${({ theme }) => theme.primary};
    // }
`;

export const RoleSection = styled.div``;

export const RoleTitle = styled.h2`
    ${DetailsBodyTitle}
`;

export const RoleContent = styled.p`
    ${DetailsBodyContent}
`;

export const RoleItems = styled.ol`
    ${DetailsListItems}
`;
export const RoleListItem = styled.div`
    ${DetailsListItem}
`;

export const ItemNumberWrapper = styled.div`
    min-width: 36px;
`;

export const ItemNumber = styled.div`
    font-size: 16px;
    font-weight: 700;
    line-height: 1.625;
    color: ${({ theme }) => theme.primary};
`;
export const ItemContent = styled.li`
    // padding-left: 32px;
    font-size: ${({ theme }) => theme.fsText_lg}rem;
    font-weight: ${({ theme }) => theme.fwRegular};
    color: ${({ theme }) => theme.onSurface3};
    line-height: 1.625;

    // display: block;

    // counter-increment: listStyle;
    // counter-increment: item;

    // ::before {
    //     font-size: 16px;
    //     font-weight: 700;
    //     line-height: 1.625;
    //     color: ${({ theme }) => theme.primary};
    //     // margin-right: 1em;
    //     // content: counter(listStyle, decimal);
    //     // content: counter(item) ' ';
    // }
`;
