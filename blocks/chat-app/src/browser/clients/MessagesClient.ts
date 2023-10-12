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
    getMessages(): Promise<Message[]> {
        return this.client.execute("GET", "/messages", []);
    }

    /**
     * Add message
     * HTTP: POST /api/messages
     */
    addMessage(message: CreateMessage): Promise<Message> {
        return this.client.execute("POST", "/messages", [
            { name: "message", value: message, transport: "BODY" },
        ]);
    }

    /**
     * Delete message
     * HTTP: DELETE /api/messages/{id}
     */
    deleteMessage(id: string): Promise<void> {
        return this.client.execute("DELETE", "/messages/{id}", [
            { name: "id", value: id, transport: "PATH" },
        ]);
    }

    /**
     * Delete all messages
     * HTTP: DELETE /api/messages
     */
    deleteAllMessages(): Promise<void> {
        return this.client.execute("DELETE", "/messages", []);
    }
}
