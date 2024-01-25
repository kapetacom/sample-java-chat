//
// GENERATED SOURCE - DO NOT EDIT
//

import { useMemo } from 'react';
import { RestClient } from '@kapeta/sdk-web-rest-client';
import { RestClientRequest } from '@kapeta/sdk-rest';
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
     *
     * HTTP: GET /api/rest/messages/messages/
     */
    async getAll(): Promise<Message[] | null> {
        const result = await this.$execute<Message[]>('GET', '/messages/', []);

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
     * HTTP: GET /api/rest/messages/messages/
     */
    getAllRequest(): RestClientRequest<Message[] | null> {
        return this.$create<Message[]>('GET', '/messages/', []);
    }

    /**
     * Add message
     *
     * HTTP: POST /api/rest/messages/messages/
     */
    async add(message: CreateMessage): Promise<Message | null> {
        const result = await this.$execute<Message>('POST', '/messages/', [
            { name: 'message', value: message, transport: 'BODY', typeName: 'CreateMessage' },
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
     * HTTP: POST /api/rest/messages/messages/
     */
    addRequest(message: CreateMessage): RestClientRequest<Message | null> {
        return this.$create<Message>('POST', '/messages/', [
            { name: 'message', value: message, transport: 'BODY', typeName: 'CreateMessage' },
        ]);
    }

    /**
     * Delete message
     *
     * HTTP: DELETE /api/rest/messages/messages/{id}
     */
    async delete(id: string): Promise<void> {
        await this.$execute<void>('DELETE', '/messages/{id}', [
            { name: 'id', value: id, transport: 'PATH', typeName: 'string' },
        ]);
    }

    /**
     * Delete message
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: DELETE /api/rest/messages/messages/{id}
     */
    deleteRequest(id: string): RestClientRequest<void> {
        return this.$create<void>('DELETE', '/messages/{id}', [
            { name: 'id', value: id, transport: 'PATH', typeName: 'string' },
        ]);
    }

    /**
     * Delete all messages
     *
     * HTTP: DELETE /api/rest/messages/messages/
     */
    async deleteAll(): Promise<void> {
        await this.$execute<void>('DELETE', '/messages/', []);
    }

    /**
     * Delete all messages
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: DELETE /api/rest/messages/messages/
     */
    deleteAllRequest(): RestClientRequest<void> {
        return this.$create<void>('DELETE', '/messages/', []);
    }
}
