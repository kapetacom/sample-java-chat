import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { createRoot } from 'react-dom/client';
import { enableApiMocking } from "../../../mocks/.generated/enableApiMocking";
import { ChatPage } from './ChatPage';
import './index.less';

const container = document.createElement('div');
container.classList.add('application-container');
document.body.append(container);

const theme = createTheme({
    typography: {
        fontFamily: ["'Montserrat'", 'Verdana', 'serif'].join(','),
    },
});

enableApiMocking().then(() => {
    createRoot(container).render(
        <ThemeProvider theme={theme}>
            <ChatPage />
        </ThemeProvider>
    );
}).catch(console.error);


