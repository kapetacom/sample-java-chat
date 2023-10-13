import React from 'react';
import { Box, Typography } from '@mui/material';
import { PersonLeft } from '../../components/illustrations/PersonLeft';
import { PersonRight } from '../../components/illustrations/PersonRight';

export const ChatHeader = () => {
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
                }}
            >
                Quick Chat!
            </Typography>
            <PersonRight
                sx={{
                    position: 'absolute',
                    bottom: '-32px',
                    right: '-37px',
                }}
            />
        </Box>
    );
};
