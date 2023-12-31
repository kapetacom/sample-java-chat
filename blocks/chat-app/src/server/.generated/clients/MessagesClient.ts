//
// GENERATED SOURCE - DO NOT EDIT
//
import { RestClient, RestClientRequest } from '@kapeta/sdk-rest-client';
import { Message } from '../../../.generated/entities/Message';
import { CreateMessage } from '../../../.generated/entities/CreateMessage';

export class MessagesClient extends RestClient {
    constructor() {
        super('messages');
    }

    /**
     * Get all messages
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: GET /messages
     */
    async getMessages(): Promise<Message[] | null> {
        const result = await this.execute('GET', '/messages', []);

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
     * HTTP: GET /messages
     */
    getMessagesRequest(): RestClientRequest<Message[] | null> {
        return this.create('GET', '/messages', []);
    }

    /**
     * Add message
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: POST /messages
     */
    async addMessage(message: CreateMessage): Promise<Message | null> {
        const result = await this.execute('POST', '/messages', [
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
     * HTTP: POST /messages
     */
    addMessageRequest(message: CreateMessage): RestClientRequest<Message | null> {
        return this.create('POST', '/messages', [{ name: 'message', value: message, transport: 'BODY' }]);
    }

    /**
     * Delete message
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: DELETE /messages/{id}
     */
    async deleteMessage(id: string): Promise<void> {
        await this.execute('DELETE', '/messages/{id}', [{ name: 'id', value: id, transport: 'PATH' }]);
    }

    /**
     * Delete message
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: DELETE /messages/{id}
     */
    deleteMessageRequest(id: string): RestClientRequest<void> {
        return this.create('DELETE', '/messages/{id}', [{ name: 'id', value: id, transport: 'PATH' }]);
    }

    /**
     * Delete all messages
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: DELETE /messages
     */
    async deleteAllMessages(): Promise<void> {
        await this.execute('DELETE', '/messages', []);
    }

    /**
     * Delete all messages
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: DELETE /messages
     */
    deleteAllMessagesRequest(): RestClientRequest<void> {
        return this.create('DELETE', '/messages', []);
    }
}
