//
// GENERATED SOURCE - DO NOT EDIT
//

import { useMemo } from 'react';
import { RestClient, RestClientRequest } from '@kapeta/sdk-web-rest-client';
import { Message } from '../../../.generated/entities/Message';
import { CreateMessage } from '../../../.generated/entities/CreateMessage';

export type ConfigureMessagesClient = (client: MessagesClient) => MessagesClient;

/**
 * Creates a new MessagesClient for React components.
 * The client is configured with the provided configuration function.
 *
 * It is wrapped in a useMemo hook to ensure that the client is only created once.
 */
export const useMessagesClient = (configure?: ConfigureMessagesClient): MessagesClient => {
    return useMemo(() => {
        const client = new MessagesClient();
        if (configure) {
            return configure(client);
        }
        return client;
    }, [configure]);
};

/**
 * A client for the Messages API.
 * Use the useMessagesClient hook to create a client in React.
 *
 * Use the MessagesClient directly in other contexts.
 */
export class MessagesClient extends RestClient {
    constructor() {
        super('api/rest/messages');
    }

    /**
     * Get all messages
     * HTTP: GET /api/rest/messages/messages
     */
    async getMessages(): Promise<Message[] | null> {
        const result = await this.$execute<Message[]>('GET', '/messages', []);

        if (result === null) {
            return null;
        }
        return result as Message[];
    }

    /**
     * Get all messages
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: GET /api/rest/messages/messages
     */
    getMessagesRequest(): RestClientRequest<Message[] | null> {
        return this.$create<Message[]>('GET', '/messages', []);
    }

    /**
     * Add message
     * HTTP: POST /api/rest/messages/messages
     */
    async addMessage(message: CreateMessage): Promise<Message | null> {
        const result = await this.$execute<Message>('POST', '/messages', [
            { name: 'message', value: message, transport: 'BODY' },
        ]);

        if (result === null) {
            return null;
        }
        return result as Message;
    }

    /**
     * Add message
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: POST /api/rest/messages/messages
     */
    addMessageRequest(message: CreateMessage): RestClientRequest<Message | null> {
        return this.$create<Message>('POST', '/messages', [{ name: 'message', value: message, transport: 'BODY' }]);
    }

    /**
     * Delete message
     * HTTP: DELETE /api/rest/messages/messages/{id}
     */
    async deleteMessage(id: string): Promise<void> {
        await this.$execute<void>('DELETE', '/messages/{id}', [{ name: 'id', value: id, transport: 'PATH' }]);
    }

    /**
     * Delete message
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: DELETE /api/rest/messages/messages/{id}
     */
    deleteMessageRequest(id: string): RestClientRequest<void> {
        return this.$create<void>('DELETE', '/messages/{id}', [{ name: 'id', value: id, transport: 'PATH' }]);
    }

    /**
     * Delete all messages
     * HTTP: DELETE /api/rest/messages/messages
     */
    async deleteAllMessages(): Promise<void> {
        await this.$execute<void>('DELETE', '/messages', []);
    }

    /**
     * Delete all messages
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: DELETE /api/rest/messages/messages
     */
    deleteAllMessagesRequest(): RestClientRequest<void> {
        return this.$create<void>('DELETE', '/messages', []);
    }
}
