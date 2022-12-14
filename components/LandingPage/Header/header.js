import React from 'react';
import Link from 'next/link';
import { useStateContext } from '../../../context/StateContext';
import { Container } from '../../../styles/globals';
import {
    DarkLightTheme,
    HeaderContainer,
    Logo,
    Moon,
    Sun,
    SwitchTheme,
    ThemeToggle,
} from './headerStyles';

function Header() {
    const { darkMode, setDarkmode, setThemeLocalStorage } = useStateContext();

    const handleThemeToggle = () => {
        setDarkmode(!darkMode);
        setThemeLocalStorage();
    };

    return (
        <HeaderContainer>
            <Container flxdirection={'row'} align={'center'}>
                <Link href={'/home'} passHref prefetch={false}>
                    <a>
                        <Logo src={`/assets/logo.svg`} alt={'devjobs logo'} />
                    </a>
                </Link>
                <DarkLightTheme>
                    <Sun
                        src={`/assets/icon-sun.svg`}
                        alt={'Light Theme Icon'}
                    />
                    <ThemeToggle onClick={handleThemeToggle}>
                        <SwitchTheme
                            darkMode={darkMode}
                            aria-label="switch theme"
                        ></SwitchTheme>
                    </ThemeToggle>
                    <Moon
                        src={`/assets/icon-moon.svg`}
                        alt={'Dark Theme Icon'}
                    />
                </DarkLightTheme>
            </Container>
        </HeaderContainer>
    );
}

export default Header;
