import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { enableApiMocking } from '../../../mocks/enableApiMocking';
import { createRoot } from 'react-dom/client';
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

void (async () => {
    await enableApiMocking();

    createRoot(container).render(
        <ThemeProvider theme={theme}>
            <ChatPage />
        </ThemeProvider>
    );
})();
