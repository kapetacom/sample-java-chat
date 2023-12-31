import { useEffect, useMemo } from 'react';
import { useAsyncRetry } from 'react-use';
import { MessagesClient } from '../../.generated/clients/MessagesClient';
import { Message } from '../../../.generated/entities/Message';
import { uniqueNamesGenerator, Config, animals, adjectives } from 'unique-names-generator';
import { NonEmptyArray } from './types';

const uniqueNamesConfig: Config = {
    dictionaries: [adjectives, animals],
    separator: ' ',
    length: 2,
    style: 'capital',
};

export const useAuthorName = () => {
    const storedAuthorName = localStorage.getItem('authorName');
    if (storedAuthorName) {
        return storedAuthorName;
    }
    const authorName = uniqueNamesGenerator(uniqueNamesConfig);
    localStorage.setItem('authorName', authorName);
    return authorName;
};

export const useGetMessages = () => {
    const apiClient = useMemo(() => new MessagesClient(), []);
    const messagesLoader = useAsyncRetry(async () => apiClient.getMessages(), []);
    const refresh = messagesLoader.retry;
    const messages = useMemo(() => messagesLoader.value ?? [], [messagesLoader.value]);

    // Messages from the same author are grouped together if they were sent sequentially (i.e.
    // without another author's messages in between)
    const messageGroups = useMemo(() => {
        const groups: NonEmptyArray<Message>[] = [];

        for (const message of messages) {
            if (groups.length === 0) {
                groups.push([message]);
            } else {
                const lastGroup = groups[groups.length - 1];
                const lastMessage = lastGroup[lastGroup.length - 1];
                if (lastMessage.authorName === message.authorName) {
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
        const interval = setInterval(refresh, 3000);
        return () => {
            clearInterval(interval);
        };
    });

    return { messageGroups, refresh };
};
