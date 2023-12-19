import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { PersonLeft } from '../../components/illustrations/PersonLeft';
import { PersonRight } from '../../components/illustrations/PersonRight';

export const ChatHeader = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <PersonLeft
                sx={{
                    position: 'absolute',
                    bottom: '-32px',
                    left: '-37px',
                    [theme.breakpoints.down('sm')]: {
                        left: '0',
                        bottom: '-39px',
                        transform: 'scale(0.8)',
                    },
                }}
            />
            <Typography
                variant="h4"
                component="h1"
                sx={{
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    fontSize: '50px',
                    px: 8,
                    pb: 2,
                    color: 'white',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                    [theme.breakpoints.down('sm')]: {
                        fontSize: 'clamp(16px, 7vw, 50px)',
                        px: 11,
                        whiteSpace: 'normal',
                    },
                }}
            >
                Quick Chat!
            </Typography>
            <PersonRight
                sx={{
                    position: 'absolute',
                    bottom: '-32px',
                    right: '-37px',
                    [theme.breakpoints.down('sm')]: {
                        right: '0',
                        bottom: '-39px',
                        transform: 'scale(0.8)',
                    },
                }}
            />
        </Box>
    );
};
