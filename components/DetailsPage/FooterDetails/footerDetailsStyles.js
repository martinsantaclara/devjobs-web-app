import styled from 'styled-components';
import { Container } from '../../../styles/globals';

export const FooterDetailsContainer = styled(Container)`
    padding: 1.5rem 0;
    border-radius: 0.375rem;
    width: 100%;
    background-color: ${({ theme }) => theme.surface};
    margin: 4rem 0 0;
    max-width: 100vw;
    justify-content: ${({ mobile }) => (mobile ? 'center' : 'space-between')};
    align-items: center;
    @media ${({ theme }) => theme.breakpoints.md} {
        // padding: 1.5rem 2.5rem;
    }
`;

export const FooterDetailsWrapper = styled(Container)`
    width: ${({ mobile }) => (mobile ? '87.2%' : '89.71%')};
    justify-content: ${({ mobile }) => (mobile ? 'center' : 'space-between')};
    align-items: center;
    max-width: 730px;
`;

export const FooterDetailsTablet = styled.div`
    display: flex;
    flex-direction: column;
`;

export const DigitalInc = styled.div`
    font-size: ${({ theme }) => theme.fsText_lg}rem;
    font-weight: ${({ theme }) => theme.fwRegular};
    line-height: 1.25;
    color: ${({ theme }) => theme.onSurface2};
`;
