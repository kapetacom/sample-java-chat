import { HttpResponse, http } from 'msw';
import { Message } from '../../entities/Message';
import { CreateMessage } from '../../entities/CreateMessage';

export const messagesHandlers = [
    /**
     * Get all messages
     * HTTP: GET /api/messages
     */
    http.get('*/messages/messages', () => {
        return HttpResponse.json([
            {
                id: 'msg001',
                text: 'Hello, welcome to our chat!',
                createdAt: 1668349200,
                authorName: 'Alice',
            },
            {
                id: 'msg002',
                text: 'Thanks! Happy to be here.',
                createdAt: 1668349260,
                authorName: 'Bob',
            },
            {
                id: 'msg003',
                text: "Hey everyone, what's the topic today?",
                createdAt: 1668349320,
                authorName: 'Charlie',
            },
        ] satisfies Message[]);
    }),

    /**
     * Add message
     * HTTP: POST /api/messages
     */
    http.post('*/messages/messages', async ({ request }) => {
        const message = (await request.json()) as CreateMessage;
        return HttpResponse.json({
            id: 'msg004',
            text: message.text,
            createdAt: Date.now(),
            authorName: message.authorName,
        } satisfies Message);
    }),
];
