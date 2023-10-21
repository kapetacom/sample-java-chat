//
// GENERATED SOURCE - DO NOT EDIT
//

import { RestClient } from "@kapeta/sdk-web-rest-client";
import { Message } from "../../entities/Message";
import { CreateMessage } from "../../entities/CreateMessage";

export class MessagesClient {
    private client: RestClient;

    constructor() {
        this.client = new RestClient("api/rest/messages");
    }

    /**
     * Get all messages
     * HTTP: GET /api/messages
     */
    async getMessages(): Promise<Message[] | null> {
        const result = await this.client.execute("GET", "/messages", []);

        if (result === null) {
            return null;
        }
        return result as Message[];
    }

    /**
     * Add message
     * HTTP: POST /api/messages
     */
    async addMessage(message: CreateMessage): Promise<Message | null> {
        const result = await this.client.execute("POST", "/messages", [
            { name: "message", value: message, transport: "BODY" },
        ]);

        if (result === null) {
            return null;
        }
        return result as Message;
    }

    /**
     * Delete message
     * HTTP: DELETE /api/messages/{id}
     */
    async deleteMessage(id: string): Promise<void> {
        await this.client.execute("DELETE", "/messages/{id}", [
            { name: "id", value: id, transport: "PATH" },
        ]);
    }

    /**
     * Delete all messages
     * HTTP: DELETE /api/messages
     */
    async deleteAllMessages(): Promise<void> {
        await this.client.execute("DELETE", "/messages", []);
    }
}
