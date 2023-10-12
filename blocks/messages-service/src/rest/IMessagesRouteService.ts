//
// GENERATED SOURCE - DO NOT EDIT
//
import { Message } from "../entities/Message";
import { CreateMessage } from "../entities/CreateMessage";

export interface IMessagesRouteService {
    /**
     * Get all messages
     * HTTP: GET /messages
     */
    getMessages(): Promise<Message[]>;

    /**
     * Add message
     * HTTP: POST /messages
     */
    addMessage(message: CreateMessage): Promise<Message>;

    /**
     * Delete message
     * HTTP: DELETE /messages/{id}
     */
    deleteMessage(id: string): Promise<void>;

    /**
     * Delete all messages
     * HTTP: DELETE /messages
     */
    deleteAllMessages(): Promise<void>;
}
