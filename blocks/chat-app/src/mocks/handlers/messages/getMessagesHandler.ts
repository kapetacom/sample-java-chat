import { http, passthrough } from 'msw';

/**
 * Get all messages
 * HTTP: GET /api/rest/messages/messages
 * Response type: Message[]
 */
export const messages_getMessagesHandler = http.get('*/api/rest/messages/messages', () => {
    // TODO: Return a response of type Message[]
    return passthrough();
});
