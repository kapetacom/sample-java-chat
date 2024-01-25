import { http, passthrough } from 'msw';

/**
 * Add message
 *
 * HTTP: POST /api/rest/messages/messages/
 * Response type: Message
 */
export const Messages_addHandler = http.post(
    '*/api/rest/messages/messages/',

    () => {
        // TODO: Return a response of type Message
        return passthrough();
    }
);
