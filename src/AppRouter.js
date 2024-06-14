import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GuestRoutes from './routes';
import GlobalStyles, { DarkTheme, LightTheme } from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

const AppRouter = () => {
    const currentTheme = useSelector((state) => state.theme.currentTheme);

    return (
        <ThemeProvider theme={currentTheme === 'light' ? LightTheme : DarkTheme}>
            <GlobalStyles />
            <BrowserRouter>
                <GuestRoutes />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default AppRouter;