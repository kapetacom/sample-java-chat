import React from 'react';
import { MessagesClient } from '../../clients/MessagesClient';
import { useAsyncRetry } from 'react-use';
import {
    Box,
    Button,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    TextField,
    Typography,
} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';

export const ChatPage = () => {
    const apiClient = React.useMemo(() => new MessagesClient(), []);
    const inputRef = React.useRef<HTMLInputElement>(null);

    const messagesLoader = useAsyncRetry(async () => apiClient.getMessages(), []);
    const messages = messagesLoader.value ?? [];

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const value = formData.get('message') as string;
        if (!value) {
            return;
        }
        apiClient
            .addMessage({ text: value })
            .then(() => {
                if (inputRef.current) {
                    inputRef.current.value = '';
                }
            })
            .then(messagesLoader.retry)
            .catch(console.error);
    };

    const handleDelete = (id: string) => {
        apiClient.deleteMessage(id).then(messagesLoader.retry).catch(console.error);
    };

    const handleClearHistory = () => {
        apiClient.deleteAllMessages().then(messagesLoader.retry).catch(console.error);
    };

    return (
        <Box p={4} maxWidth="sm" border="1px solid #ccc" borderRadius={1} display="flex" flexDirection="column" gap={2}>
            <Box display="flex" flexDirection="row">
                <Typography variant="h4" component="h1">
                    Quick Chat
                </Typography>
                <Button
                    variant="text"
                    color="error"
                    size="small"
                    onClick={handleClearHistory}
                    sx={{ ml: 'auto', textTransform: 'none', cursor: 'pointer' }}
                >
                    Clear history
                </Button>
            </Box>

            <List sx={{ minHeight: 300, maxHeight: 'calc(100vh - 200px)', overflow: 'auto' }}>
                {messages.map((message) => (
                    <ListItem key={message.id} sx={{ p: 0 }}>
                        <ListItemIcon>
                            <ChatIcon fontSize="small" color="success" />
                        </ListItemIcon>
                        <ListItemText>{message.text}</ListItemText>
                        <ListItemSecondaryAction>
                            <IconButton
                                onClick={() => handleDelete(message.id)}
                                edge="end"
                                aria-label="delete"
                                size="small"
                            >
                                <CloseIcon fontSize="small" />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>

            <Box component="form" onSubmit={handleSubmit} sx={{ m: 0, p: 0 }}>
                <TextField
                    type="text"
                    name="message"
                    inputRef={inputRef}
                    fullWidth
                    InputProps={{ placeholder: 'Send a message...' }}
                />
            </Box>
        </Box>
    );
};
