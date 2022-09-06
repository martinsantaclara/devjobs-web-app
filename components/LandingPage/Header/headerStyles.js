import styled from 'styled-components';

export const HeaderContainer = styled.header`
    padding: 2rem 0 4.5rem;
    position: relative;

    @media ${({ theme }) => theme.breakpoints.md} {
        padding: 2.625rem 0 5.375rem;
    }

    ::before {
        content: '';
        position: absolute;
        top: 0;
        background: url(/assets/bg-pattern-header-mobile.svg) no-repeat center
            center;
        background-size: cover;
        width: 100%;
        height: 100%;
        @media ${({ theme }) => theme.breakpoints.md} {
            background: url(/assets/bg-pattern-header-tablet.svg) no-repeat
                center center;
            background-size: cover;
        }

        @media ${({ theme }) => theme.breakpoints.xxl} {
            background: url(/assets/bg-pattern-header-desktop.svg) no-repeat
                center center;
            background-size: cover;
        }
    }
`;

export const Logo = styled.img``;
export const DarkLightTheme = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 7rem;
    height: 1.25rem;
`;
export const Sun = styled.img`
    width: 1.25rem;
`;
export const ThemeToggle = styled.div`
    display: flex;
    align-items: center;
    width: 3rem;
    height: 1.5rem;
    background-color: ${({ theme }) => theme.btnClr};
    border-radius: 0.75rem;
    position: relative;
    cursor: pointer;
`;
export const SwitchTheme = styled.button`
    position: absolute;
    left: ${({ darkMode }) => (darkMode ? '' : '5px')};
    right: ${({ darkMode }) => (darkMode ? '5px' : '')};
    width: 0.875rem;
    height: 0.875rem;
    background-color: ${({ theme }) => theme.btnBg};
    border: none;
    border-radius: 50%;
    cursor: pointer;
    :hover {
        background-color: ${({ theme }) => theme.btnHoverBg};
    }
`;
export const Moon = styled.img`
    width: 0.75rem;
`;
