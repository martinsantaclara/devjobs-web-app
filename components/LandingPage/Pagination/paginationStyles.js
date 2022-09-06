import styled from 'styled-components';
import { sharedStyleButtons } from '../../../styles/globals';

export const PaginationContainer = styled.section`
    display: flex;
    justify-content: center;
    padding-bottom: 62px;
`;

export const FixedButton = styled.div`
    ${sharedStyleButtons}
    padding: 1rem 0;
    width: 8.8125rem;
    text-align: center;
    margin: 0 1rem;
`;
