//
// GENERATED SOURCE - DO NOT EDIT
//
import { RestClient } from "@kapeta/sdk-rest-client";
import { Message } from "../../entities/Message";
import { CreateMessage } from "../../entities/CreateMessage";

class MessagesClient {
    private readonly client: RestClient;

    constructor() {
        this.client = new RestClient("messages");
    }

    /**
     * Get all messages
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: GET /messages
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
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: POST /messages
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
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: DELETE /messages/{id}
     */
    async deleteMessage(id: string): Promise<void> {
        await this.client.execute("DELETE", "/messages/{id}", [
            { name: "id", value: id, transport: "PATH" },
        ]);
    }

    /**
     * Delete all messages
     *
     * Throws if service responds with a status code higher than 399 and not 404.
     * For 404 responses, null is returned.
     *
     * HTTP: DELETE /messages
     */
    async deleteAllMessages(): Promise<void> {
        await this.client.execute("DELETE", "/messages", []);
    }
}

export default new MessagesClient();
