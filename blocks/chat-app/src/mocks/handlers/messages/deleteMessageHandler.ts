import { http, HttpResponse } from 'msw';

/**
 * Delete message
 * HTTP: DELETE /api/rest/messages/messages/:id
 * Response type: void
 */
export const deleteMessageHandler = http.delete('*/api/rest/messages/messages/:id', () => {
    return new HttpResponse(null, { status: 200 });
});
