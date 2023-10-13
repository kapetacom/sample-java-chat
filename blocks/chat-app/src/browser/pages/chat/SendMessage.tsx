import React, { FormEvent, useEffect, useMemo, useRef, useState } from 'react';
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
    const [isButtonDisabled, setButtonDisabled] = useState(true);

    useEffect(() => {
        const checkInputValue = () => {
            const value = inputRef.current?.value;
            setButtonDisabled(!value);
        };

        const input = inputRef.current;

        input?.addEventListener('input', checkInputValue);
        return () => {
            input?.removeEventListener('input', checkInputValue);
        };
    }, []);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const value = formData.get('message') as string;
        if (!value) {
            return;
        }
        apiClient
            .addMessage({ text: value, authorName })
            .then(() => {
                if (inputRef.current) {
                    inputRef.current.value = '';
                    setButtonDisabled(true);
                }
            })
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
