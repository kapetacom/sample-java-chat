import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
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

async function enableApiMocking() {
    if (process.env.NODE_ENV !== 'development') {
        return;
    }

    const { worker } = await import('../../../mocks/browser');
    await worker.start();
}

void (async () => {
    try {
        await enableApiMocking();
    } catch (error) {
        console.error('Failed to enable API mocking', error);
    }

    createRoot(container).render(
        <ThemeProvider theme={theme}>
            <ChatPage />
        </ThemeProvider>
    );
})();
