import React from 'react';
import { Box } from '@mui/material';
import { ChatHeader } from './ChatHeader';
import { Messages } from './Messages';
import { SendMessage } from './SendMessage';
import { useGetMessages } from './hooks';

export const ChatPage = () => {
    const { messageGroups, refresh } = useGetMessages();

    return (
        <Box sx={{ p: 10, pb: 16, display: 'flex', justifyContent: 'center', height: '100%' }}>
            <Box sx={{ width: 600, height: '100%', display: 'flex', flexDirection: 'column' }}>
                <ChatHeader />

                <Box
                    sx={{
                        backgroundColor: 'background.paper',
                        borderRadius: 1.5,
                        boxShadow: '0px 35px 50px -15px #C2C3D680',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        flex: 1,
                        justifyContent: 'space-between',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            px: 2,
                            pt: 4,
                            pb: 6,
                            overflow: 'auto',
                        }}
                    >
                        {messageGroups.map((group) => (
                            <Messages key={group[0].id} messages={group} onDelete={refresh} />
                        ))}
                    </Box>

                    <SendMessage onSend={refresh} />
                </Box>
            </Box>
        </Box>
    );
};
