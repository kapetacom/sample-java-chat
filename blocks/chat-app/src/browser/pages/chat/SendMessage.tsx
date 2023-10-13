import React, { FormEvent, useMemo, useRef, useState } from 'react';
import { Box, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { MessagesClient } from '../../clients/MessagesClient';
import { useAuthorName } from './hooks';

export interface SendMessageProps {
    onSend: () => void;
}

export const SendMessage = (props: SendMessageProps) => {
    const { onSend } = props;

    const authorName = useAuthorName();
    const apiClient = useMemo(() => new MessagesClient(), []);
    const inputRef = useRef<HTMLInputElement>(null);
    const [text, setText] = useState('');
    const isButtonDisabled = text === '';

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const value = formData.get('message') as string;
        if (!value) {
            return;
        }
        apiClient
            .addMessage({ text: value, authorName })
            .then(() => setText(''))
            .then(onSend)
            .catch(console.error);
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ m: 0, p: 2, backgroundColor: '#E0E0E0' }}>
            <TextField
                type="text"
                name="message"
                inputRef={inputRef}
                fullWidth
                value={text}
                onChange={(e) => setText(e.target.value)}
                InputProps={{
                    placeholder: 'Send a message',
                    sx: {
                        backgroundColor: 'white',
                        borderRadius: '56px',
                    },
                    endAdornment: (
                        <IconButton type="submit" disabled={isButtonDisabled}>
                            <SendIcon
                                sx={{
                                    color: isButtonDisabled ? 'action.disabled' : 'action.active',
                                }}
                            />
                        </IconButton>
                    ),
                }}
                autoComplete="off"
            />
        </Box>
    );
};
