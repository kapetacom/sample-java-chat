import { IMessagesRouteService } from '../rest/IMessagesRouteService';
import { Message } from '../entities/Message';
import { CreateMessage } from '../entities/CreateMessage';
import { MessagesDB } from '../data/MessagesDB';

export class MessagesRouteService implements IMessagesRouteService {
    private readonly db: MessagesDB;

    constructor() {
        this.db = new MessagesDB();
    }

    /**
     * Get all messages
     * HTTP: GET /messages
     */
    getMessages(): Promise<Message[]> {
        return this.db.client.message.findMany();
    }

    /**
     * Add message
     * HTTP: POST /messages
     */
    addMessage(message: CreateMessage): Promise<Message> {
        return this.db.client.message.create({
            data: message,
        });
    }

    /**
     * Delete message
     * HTTP: DELETE /messages/{id}
     */
    async deleteMessage(id: string): Promise<void> {
        await this.db.client.message.deleteMany({
            where: {
                id,
            },
        });
    }

    /**
     * Delete all messages
     * HTTP: DELETE /messages
     */
    async deleteAllMessages(): Promise<void> {
        await this.db.client.message.deleteMany();
    }
}
