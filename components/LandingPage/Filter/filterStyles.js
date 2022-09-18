import styled, { css } from 'styled-components';
import { GlobalContainer, sharedStyleButtons } from '../../../styles/globals';

export const SharedMobileFilter = css`
    width: 100%;
    border-radius: 0.375rem;
    padding: 1.5rem;
    background-color: ${({ theme }) => theme.surface};
`;

export const FilterContainer = styled.section`
    ${GlobalContainer}
    height: 5rem;
    background-color: ${({ theme }) => theme.surface};
    padding: 1rem 1rem 1rem 1.5rem;
    margin: -2.5rem auto 0;
    border-radius: 0.375rem;
    z-index: 1;
    @media ${({ theme }) => theme.breakpoints.md} {
        padding: 1rem 1rem 1rem clamp(1.5rem, 1.19vw + 0.93rem, 2rem);
        min-width: 689px;
    }
`;

export const FilterForm = styled.form`
    position: relative;
    display: flex;
    align-items: center;
`;

export const Input = styled.div`
    position: relative;
    display: flex;
    margin-left: ${({ location }) => (location ? '1.5rem' : '')};
    flex-grow: 1;
`;

export const SearchIcon = styled.div`
    margin-right: ${({ xlScreen }) => (xlScreen ? '1rem' : '0')};
`;

export const InputFilter = styled.input.attrs((props) => ({
    name: props.nameAttr || 'title',
    type: 'text',
    placeholder: props.placeAttr || 'Filter by title...',
}))`
    font-size: ${({ theme }) => theme.fsText_lg}rem;
    font-weight: ${({ theme }) => theme.fwRegular};
    line-height: 1.25;
    color: ${({ theme }) => theme.onSurface1};
    background-color: transparent;
    outline: none;
    border: none;
    width: ${({ mobile, location }) =>
        mobile
            ? '100%'
            : location
            ? `clamp(9.75rem, 12.95vw + 3.54rem, 15.1875rem)`
            : `clamp(9.875rem, 34.67vw - 6.77rem, 24.44rem)`};
    ::placeholder {
        opacity: 0.7;
    }

    :hover {
        cursor: pointer;
    }

    :active,
    :focus {
        cursor: text;
    }
`;

export const HiddenTitle = styled.span`
    position: fixed;
    font-size: ${({ theme }) => theme.fsText_lg}rem;
    font-weight: ${({ theme }) => theme.fwRegular};
    line-height: 1.25;
    visibility: hidden;
    top: 0;
    right: 0;
`;
export const HiddenLocation = styled.span`
    position: fixed;
    font-size: ${({ theme }) => theme.fsText_lg}rem;
    font-weight: ${({ theme }) => theme.fwRegular};
    line-height: 1.25;
    visibility: hidden;
    top: 0;
    right: 0;
`;

export const InputRightBar_Horizontal = styled.div`
    background-color: ${({ theme }) => theme.primary};
    position: absolute;
    height: 2px;
    bottom: -5px;
    left: ${({ mobile, location }) => (location ? 33 : mobile ? 0 : 40)}px;
    width: ${({ barWidth, mobile, location }) =>
        barWidth + (barWidth !== 0 ? 10 : 0)}px;
    transition: width 0.5s linear;
    z-index: 9999;
`;

export const InputRightBar = styled.div`
    width: 2px;
    height: 19px;
    background-color: ${({ theme }) => theme.primary};
    position: absolute;
    top: 5px;
    left: ${({ barWidth, mobile, location }) =>
        barWidth + (location ? 45 : mobile ? 12 : 52)}px;
`;

export const MobileRightFilter = styled.div`
    display: flex;
    align-items: center;
`;

export const FilterIcon = styled.div`
    margin: 0 1.5rem;
    cursor: pointer;
    @media ${({ theme }) => theme.breakpoints.md} {
        display: none;
    }
`;

export const BgMobileFilter = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background: linear-gradient(
        hsla(0, 0%, 0%, 0),
        hsla(0, 0%, 0%, 0.6),
        hsla(0, 0%, 59%, 0.8)
    );
    z-index: 1;
`;

export const MobileFilter = styled.div`
    ${SharedMobileFilter}
`;

export const LocationIcon = styled.img.attrs({
    src: '/assets/icon-location.svg',
    alt: 'location',
})`
    margin-right: 1rem;
`;

export const HLine = styled.hr`
    position: relative;
    left: -1.5rem;
    width: calc(100% + 3rem);
    height: 1px;
    background-color: ${({ theme }) => theme.onSurface2};
    opacity: 20%;
    margin: 1.5rem 0;
`;

export const VLine = styled.hr`
    position: absolute;
    width: 1px;
    right: 0;
    height: 5rem;
    top: -2.1875rem;
    background-color: ${({ theme }) => theme.onSurface2};
    opacity: 20%;
`;

export const FulltimeCheck = styled.img.attrs({
    alt: 'checkbox',
})`
    cursor: pointer;
    margin-right: 1rem;
`;

export const FullTime = styled.div`
    display: flex;
    align-items: center;
    margin: ${({ xlScreen }) =>
        xlScreen ? '0 0 0 clamp(1.25rem, 1.79vw + 0.39rem, 2rem)' : '1.5rem 0'};
    justify-content: ${({ xlScreen }) => (xlScreen ? 'flex-end' : '')};
`;

export const FullTimeText = styled.p`
    font-size: ${({ theme }) => theme.fsText_lg}rem;
    font-weight: ${({ theme }) => theme.fwBold};
    color: ${({ theme }) => theme.onSurface1};
    line-height: 1.25;
    min-width: 70px;
`;

export const SubmitButton = styled.button`
    ${sharedStyleButtons}
    width: ${({ fluid }) => (fluid ? '100%' : '')};
    padding: ${({ mobileSearch, mobile }) =>
        mobileSearch && mobile
            ? '0.75rem 0.75rem 0.5rem'
            : '1rem clamp(0.875rem, 3.15vw - 0.64rem, 2.2rem)'};
    margin-left: ${({ fluid, mobile }) => (!fluid && !mobile ? '1.7rem' : '')};
    justify-self: flex-end;
`;

export const DesktopRightFilter = styled.div`
    display: flex;
    justify-content: flex-end;
`;
