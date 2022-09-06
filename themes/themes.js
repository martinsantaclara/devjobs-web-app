import { createGlobalStyle } from 'styled-components';

const shared = {
    // Temp fonts
    ffPrimary: 'Kumbh Sans, sans-serif',

    // Colors for layout
    primary: 'hsl(235 69% 61%)',
    primaryOpacity1: 'hsla(235 69% 61% / .3512)',
    primaryOpacity2: 'hsla(235 69% 61% / .1)',
    primaryLight: 'hsl(235 82% 77%)',
    primaryHover: 'hsl(235 82% 77%)',
    onPrimary: 'hsl(0 0% 100%)',
    onPrimaryOpacity1: 'hsla(0 0% 100% / .25)',
    onPrimaryOpacity2: 'hsla(0 0% 100% / .1)',
    onError: 'hsl(0 88% 59%)',

    // font sizes
    fs200: '0.625', // 10px
    fs300: '0.8125', // 13px
    fs400: '0.875', // 14px
    fs500: '0.9375', // 15px
    fs600: '1', // 16px
    fs700: '1.25', // 20px
    fs800: '1.5', // 24px
    fs900: '1.75', // 28px

    // font weight
    fwThin: '100',
    fwUltraLight: '200',
    fwLight: '300',
    fwRegular: '400',
    fwMedium: '500',
    fwSemiBold: '600',
    fwBold: '700',
    fwUltraBold: '800',
    fwBlack: '900',
    // Breakpoints for responsive design
    breakpoints: {
        sm: 'screen and (min-width: 640px)',
        md: 'screen and (min-width: 768px)',
        lg: 'screen and (min-width: 1024px)',
        xl: 'screen and (min-width: 1280px)',
        xxl: 'screen and (min-width: 1440px)',
    },
};

const utility = {
    // fonts
    ffBody: shared.ffPrimary,
    ffHeading: shared.ffPrimary,
    // btns
    btnBg: shared.primary,
    btnClr: shared.onPrimary,
    btnHoverBg: shared.primaryHover,
    btnHoverClr: shared.onPrimary,
    // btns inverted
    btnInvertedBg: shared.primaryOpacity2,
    btnInvertedClr: shared.primary,
    btnDarkInvertedBg: shared.onPrimaryOpacity2,
    btnDarkInvertedClr: shared.onPrimary,
    btnInvertedShadow: shared.shadow2,
    btnInvertedHoverBg: shared.primaryOpacity1,
    btnInvertedHoverClr: shared.primary,
    btnInvertedHoverShadow: shared.shadow2,
    btnDarkInvertedHoverBg: shared.onPrimaryOpacity1,
    btnDarkInvertedHoverClr: shared.onPrimary,
    // input
    onInputActive: shared.onError,
    onSecondaryHover: shared.primary,
    // font sizes headings
    fsHeading_xxs: shared.fs400,
    fsHeading_xs: shared.fs600,
    fsHeading_sm: shared.fs700,
    fsHeading_md: shared.fs800,
    fsHeading_lg: shared.fs900,
    fsHeading_xl: shared.fs950,
    // font weight Heading
    fwHeading_xxs: shared.fwBold,
    fwHeading_xs: shared.fwRegular,
    fwHeading_sm: shared.fwUBold,
    fwHeading_md: shared.fwUltraBold,
    fwHeading_lg: shared.fwBold,
    fwHeading_xl: shared.fwBold,
    // font sizes Text
    fsText_xxs: shared.fs200,
    fsText_xs: shared.fs300,
    fsText_s: shared.fs400,
    fsText_md: shared.fs500,
    fsText_lg: shared.fs600,
};

const light = {
    background: 'hsl(210 22% 96%)',
    surface: 'hsl(0 0% 100%)',
    onSurface1: 'hsl(219 29% 14%)',
    onSurface2: 'hsl(214 17% 51%)',
    onSurface3: 'hsl(214 17% 51%)',
    onFilter: 'hsl(214 17% 51%)',
    clrHeading: 'hsl(214 17% 51%)',
};

const dark = {
    background: 'hsl(219 29% 10%)',
    surface: 'hsl(219 29% 14%)',
    onSurface1: 'hsl(0 0% 100%)',
    onSurface2: 'hsl(214 17% 51%)',
    onSurface3: 'hsla(212 23% 69% / 1)',
    onFilter: 'hsl(0 0% 100%)',
    onBackgroundOpacity: 'hsla(0 0% 100% / .5)',
    clrHeading: 'hsl(0 0% 100%)',
};

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html,
    body {
        padding: 0;
        margin: 0;
        font-family: ${({ theme }) => theme.ffBody};
        font-size: 1rem;
        overflow-x: hidden;
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.onBackground};
    }

    h1,
    h2,
    h3,
    p {
        margin: 0;
        padding: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    input, button {
        font-family: ${({ theme }) => theme.ffBody};
    }
`;

export const lightTheme = { ...shared, ...utility, ...light };
export const darkTheme = { ...shared, ...utility, ...dark };
