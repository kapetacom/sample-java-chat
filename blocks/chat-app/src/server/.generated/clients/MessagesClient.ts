//
// GENERATED SOURCE - DO NOT EDIT
//
import { RestClient } from '@kapeta/sdk-rest-client';
import { RestClientRequest } from '@kapeta/sdk-rest';
import { ConfigProvider } from '@kapeta/sdk-config';
import { Message } from '../../../.generated/entities/Message';
import { CreateMessage } from '../../../.generated/entities/CreateMessage';

/**
 * Creates a new ready MessagesClient.
 *
 * See https://github.com/kapetacom/sdk-nodejs-rest-client for more information.
 */
export async function createMessagesClient(configProvider: ConfigProvider): Promise<MessagesClient> {
    return new MessagesClient(false).$withConfigProvider(configProvider);
}

/**
 * A client for the Messages API.
 *
 * Note that this client is not ready to use until it is configured with a ```ConfigProvider```.
 * This happens automatically when using the ```createMessagesClient``` function or
 * setting ```autoInit``` to true (the default).
 *
 * If you want to configure the client manually, set autoInit to false and call ```$withConfigProvider```.
 *
 * Recommended method is using ```createMessagesClient(configProvider:ConfigProvider)```;
 *
 * See https://github.com/kapetacom/sdk-nodejs-rest-client for more information.
 */
export class MessagesClient extends RestClient {
    constructor(autoInit: boolean = true) {
        super('messages', autoInit);
    }

    /**
     * Get all messages
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: GET /messages/
     */
    async getAll(): Promise<Message[] | null> {
        const result = await this.$execute('GET', '/messages/', []);

        if (result === null) {
            return null;
        }
        return result as Message[];
    }

    /**
     * Get all messages
     *
     * Creates a request that can be manipulated before sending it with the ```call()``` method.
     *
     * HTTP: GET /messages/
     */
    getAllRequest(): RestClientRequest<Message[] | null> {
        return this.$create('GET', '/messages/', []);
    }

    /**
     * Add message
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: POST /messages/
     */
    async add(message: CreateMessage): Promise<Message | null> {
        const result = await this.$execute('POST', '/messages/', [
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
     * Creates a request that can be manipulated before sending it with the ```call()``` method.
     *
     * HTTP: POST /messages/
     */
    addRequest(message: CreateMessage): RestClientRequest<Message | null> {
        return this.$create('POST', '/messages/', [
            { name: 'message', value: message, transport: 'BODY', typeName: 'CreateMessage' },
        ]);
    }

    /**
     * Delete message
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: DELETE /messages/{id}
     */
    async delete(id: string): Promise<void> {
        await this.$execute('DELETE', '/messages/{id}', [
            { name: 'id', value: id, transport: 'PATH', typeName: 'string' },
        ]);
    }

    /**
     * Delete message
     *
     * Creates a request that can be manipulated before sending it with the ```call()``` method.
     *
     * HTTP: DELETE /messages/{id}
     */
    deleteRequest(id: string): RestClientRequest<void> {
        return this.$create('DELETE', '/messages/{id}', [
            { name: 'id', value: id, transport: 'PATH', typeName: 'string' },
        ]);
    }

    /**
     * Delete all messages
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: DELETE /messages/
     */
    async deleteAll(): Promise<void> {
        await this.$execute('DELETE', '/messages/', []);
    }

    /**
     * Delete all messages
     *
     * Creates a request that can be manipulated before sending it with the ```call()``` method.
     *
     * HTTP: DELETE /messages/
     */
    deleteAllRequest(): RestClientRequest<void> {
        return this.$create('DELETE', '/messages/', []);
    }
}
