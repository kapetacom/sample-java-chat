import { http, HttpResponse } from 'msw';

/**
 * Delete all messages
 *
 * HTTP: DELETE /api/rest/messages/messages/
 * Response type: void
 */
export const Messages_deleteAllHandler = http.delete(
    '*/api/rest/messages/messages/',

    () => {
        return new HttpResponse(null, { status: 200 });
    }
);
