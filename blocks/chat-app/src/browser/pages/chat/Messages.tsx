import React from 'react';
import { Message } from '../../../.generated/entities/Message';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { UserAvatar } from './UserAvatar';
import { useMessagesClient} from '../../.generated/clients/MessagesClient';
import { useAuthorName } from './hooks';
import { Close as CloseIcon } from '@mui/icons-material';
import { NonEmptyArray } from './types';

export interface ChatMessageGroupProps {
    messages: NonEmptyArray<Message>;
    onDelete: () => void;
}

export const Messages = (props: ChatMessageGroupProps) => {
    const { messages, onDelete } = props;
    const authorName = messages[0].authorName;
    const isMe = messages[0].authorName === useAuthorName();
    const messageColor = isMe ? '#E4E4E4' : '#E1F5FE';
    const messagesClient = useMessagesClient();

    const handleDelete = (id: string) => {
        messagesClient.delete(id).then(onDelete).catch(console.error);
    };

    const theme = useTheme();

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
                    [theme.breakpoints.down('sm')]: {
                        width: 'calc(100% - 105px)',
                    },
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

                            [theme.breakpoints.down('sm')]: {
                                py: 2,
                                px: 3,
                            },

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
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
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
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: 1,
                                    order: isMe ? 2 : 1,
                                }}
                            >
                                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                    {`${authorName}${isMe ? ' (You)' : ''}`}
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
            <UserAvatar authorName={authorName} sx={{ order: isMe ? 2 : 1 }} />
        </Box>
    );
};
