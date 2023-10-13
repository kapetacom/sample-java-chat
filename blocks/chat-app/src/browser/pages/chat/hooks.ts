import { useEffect, useMemo } from 'react';
import { useAsyncRetry } from 'react-use';
import { MessagesClient } from '../../clients/MessagesClient';
import { Message } from '../../../entities/Message';

export const useAuthorId = () => {
    const storedAuthorId = localStorage.getItem('authorId');
    if (storedAuthorId) {
        return storedAuthorId;
    }
    const authorId = new Date().getTime().toString();
    localStorage.setItem('authorId', authorId);
    return authorId;
};

export const useGetMessages = () => {
    const apiClient = useMemo(() => new MessagesClient(), []);
    const messagesLoader = useAsyncRetry(async () => apiClient.getMessages(), []);
    const refresh = messagesLoader.retry;
    const messages = useMemo(() => messagesLoader.value ?? [], [messagesLoader.value]);

    // Messages from the same author are grouped together if they were sent sequentially (i.e.
    // without another author's messages in between)
    const messageGroups = useMemo(() => {
        const groups: Message[][] = [];

        for (const message of messages) {
            if (groups.length === 0) {
                groups.push([message]);
            } else {
                const lastGroup = groups[groups.length - 1];
                const lastMessage = lastGroup[lastGroup.length - 1];
                if (lastMessage.authorId === message.authorId) {
                    lastGroup.push(message);
                } else {
                    groups.push([message]);
                }
            }
        }
        return groups;
    }, [messages]);

    // Poll for new messages
    useEffect(() => {
        const interval = setInterval(refresh, 5000);
        return () => {
            clearInterval(interval);
        };
    });

    return { messageGroups, refresh };
};
