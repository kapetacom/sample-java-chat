import React, { FormEvent, useRef, useState } from 'react';
import { Box, TextField, IconButton, useTheme } from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';
import { useMessagesClient} from '../../.generated/clients/MessagesClient';
import { useAuthorName } from './hooks';
import { useMedia } from 'react-use';

export interface SendMessageProps {
    onSend: () => void;
}

export const SendMessage = (props: SendMessageProps) => {
    const { onSend } = props;

    const authorName = useAuthorName();
    const messagesClient = useMessagesClient();
    const inputRef = useRef<HTMLInputElement>(null);
    const [text, setText] = useState('');
    const isButtonDisabled = text === '';

    const theme = useTheme();
    const isMobile = useMedia('(max-width: 600px)');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const value = formData.get('message') as string;
        if (!value) {
            return;
        }
        messagesClient
            .add({ text: value, authorName })
            .then(() => setText(''))
            .then(onSend)
            .catch(console.error);
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
                m: 0,
                p: 2,
                backgroundColor: '#E0E0E0',
                [theme.breakpoints.down('sm')]: {
                    input: {
                        fontSize: '1.5rem',
                        pl: 3,
                        py: 3,
                    },
                },
            }}
        >
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
                        <IconButton type="submit" disabled={isButtonDisabled} size={isMobile ? 'large' : 'medium'}>
                            <SendIcon
                                fontSize={isMobile ? 'large' : 'medium'}
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
