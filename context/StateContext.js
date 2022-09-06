import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    useRef,
} from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../themes/themes';

const useWidth = () => {
    const [width, setWidth] = useState(0);
    const handleResize = () => setWidth(window.innerWidth);
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return width;
};

const Context = createContext();
const FilterContext = createContext();
const DeviceContext = createContext();

export const StateContext = ({ children }) => {
    const [darkMode, setDarkmode] = useState(null);

    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [fullTime, setFullTime] = useState(false);
    const [checked, setChecked] = useState(false);

    const [mirrorTitle, setMirrorTitle] = useState('');
    const [mirrorLocation, setMirrorLocation] = useState('');
    const refLocation = useRef('');

    const [clear, setClear] = useState(false);

    const [mobile, setMobile] = useState(true);
    const [tablet, setTablet] = useState(false);
    const [desktop, setDesktop] = useState(false);
    const [screenWidth, setScreenWidth] = useState(0);
    const windowWidth = useWidth();

    const [page, setPage] = useState(0);
    const [pageBack, setPageBack] = useState(0);

    useEffect(() => {
        const themeLocalStorage = window.localStorage.getItem('theme');
        if (themeLocalStorage !== null) {
            setDarkmode(themeLocalStorage === 'dark');
        } else {
            setDarkmode(
                window.matchMedia &&
                    window.matchMedia('(prefers-color-scheme: dark)').matches
            );
        }

        const modeMe = (e) => {
            const dark = !!e.matches;
            setDarkmode(dark);
            window.localStorage.setItem('theme', dark ? 'dark' : 'light');
        };
        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', modeMe);
        return window
            .matchMedia('(prefers-color-scheme: dark)')
            .removeEventListener('change', modeMe);
    }, []);

    useEffect(() => {
        const sWidth = window.innerWidth;
        const wWidth = windowWidth === 0 ? sWidth : windowWidth;
        setMobile(wWidth < 768);
        setTablet(wWidth >= 768 && wWidth < 1440);
        setDesktop(wWidth >= 1440);
        setScreenWidth(wWidth);
        // console.log('menor a 500 - 90%');
        // setWidth('90%');
        // console.log('mayor a 500 - 36.6rem');
        // setWidth('36.6rem');
    }, [windowWidth]);

    useEffect(() => {
        const actualPage = window.sessionStorage.getItem('actualPage');
        if (actualPage !== null) {
            setPage(parseInt(actualPage));
        }
    });

    const setThemeLocalStorage = () => {
        const dark = !darkMode;
        window.localStorage.setItem('theme', dark ? 'dark' : 'light');
        setDarkmode(dark);
    };
    return (
        <div>
            {darkMode !== null && (
                <Context.Provider
                    value={{ darkMode, setDarkmode, setThemeLocalStorage }}
                >
                    <ThemeProvider theme={!darkMode ? lightTheme : darkTheme}>
                        <DeviceContext.Provider
                            value={{
                                mobile,
                                tablet,
                                desktop,
                                screenWidth,
                            }}
                        >
                            <FilterContext.Provider
                                value={{
                                    title,
                                    setTitle,
                                    location,
                                    setLocation,
                                    fullTime,
                                    setFullTime,
                                    checked,
                                    setChecked,
                                    mirrorTitle,
                                    setMirrorTitle,
                                    mirrorLocation,
                                    setMirrorLocation,
                                    refLocation,
                                    clear,
                                    setClear,
                                    page,
                                    setPage,
                                    pageBack,
                                    setPageBack,
                                }}
                            >
                                <GlobalStyles />
                                {children}
                            </FilterContext.Provider>
                        </DeviceContext.Provider>
                    </ThemeProvider>
                </Context.Provider>
            )}
        </div>
    );
};

export const useStateContext = () => useContext(Context);

export const useFilterContext = () => useContext(FilterContext);

export const useDeviceContext = () => useContext(DeviceContext);
