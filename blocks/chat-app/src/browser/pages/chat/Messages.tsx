import React, { useMemo } from 'react';
import { Message } from '../../../entities/Message';
import { Box, IconButton, Typography } from '@mui/material';
import { UserAvatar } from './UserAvatar';
import { MessagesClient } from '../../clients/MessagesClient';
import { useAuthorId } from './hooks';
import CloseIcon from '@mui/icons-material/Close';

export interface ChatMessageGroupProps {
    messages: Message[];
    onDelete: () => void;
}

export const Messages = (props: ChatMessageGroupProps) => {
    const { messages, onDelete } = props;
    const authorId = messages[0].authorId;
    const isMe = messages[0].authorId === useAuthorId();
    const messageColor = isMe ? '#E4E4E4' : '#E1F5FE';
    const apiClient = useMemo(() => new MessagesClient(), []);

    const handleDelete = (id: string) => {
        apiClient.deleteMessage(id).then(onDelete).catch(console.error);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                gap: 1.5,
                justifyContent: isMe ? 'flex-end' : 'flex-start',
                alignItems: 'flex-end',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 0.5,
                    order: isMe ? 1 : 2,
                    width: '60%',
                }}
            >
                {messages.map((message) => (
                    <Box
                        key={message.id}
                        sx={{
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 0.75,
                            backgroundColor: messageColor,
                            py: 1,
                            px: 1.5,
                            borderRadius: 1,
                            '&:hover': {
                                button: {
                                    opacity: 0.5,
                                    '&:hover': {
                                        opacity: 1,
                                    },
                                },
                            },
                            // Message arrow
                            '&:last-child:after': {
                                content: '""',
                                position: 'absolute',
                                bottom: 0,
                                width: 0,
                                height: 0,
                                borderWidth: 10,
                                borderColor: isMe
                                    ? `transparent transparent ${messageColor} ${messageColor}`
                                    : `transparent ${messageColor} ${messageColor} transparent`,
                                borderStyle: 'solid',
                                ...(isMe ? { right: -8 } : { left: -8 }),
                                borderRadius: 1,
                            },
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <IconButton
                                onClick={() => handleDelete(message.id)}
                                size="small"
                                sx={{
                                    opacity: 0,
                                    transition: 'opacity 0.2s',
                                    ...(isMe
                                        ? { order: 1, mr: 'auto', ml: -0.75 }
                                        : { order: 2, ml: 'auto', mr: -0.75 }),
                                }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                            <Box sx={{ display: 'flex', gap: 1, order: isMe ? 2 : 1 }}>
                                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                    {isMe ? 'You' : 'Anonymous'}
                                </Typography>
                                <Typography variant="body2">
                                    {new Date(message.createdAt).toLocaleTimeString(undefined, {
                                        hour: '2-digit',
                                        minute: '2-digit',
                                    })}
                                </Typography>
                            </Box>
                        </Box>
                        <Typography variant="body1">{message.text}</Typography>
                    </Box>
                ))}
            </Box>
            <UserAvatar authorId={authorId} sx={{ order: isMe ? 2 : 1 }} />
        </Box>
    );
};
