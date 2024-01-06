//
// GENERATED SOURCE - DO NOT EDIT
//

import { RestClient, RestClientRequest } from '@kapeta/sdk-web-rest-client';
import { Message } from '../../../.generated/entities/Message';
import { CreateMessage } from '../../../.generated/entities/CreateMessage';

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
