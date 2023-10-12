//
// GENERATED SOURCE - DO NOT EDIT
//
import { RestRoute } from "@kapeta/sdk-rest-route";
import { IMessagesRouteService } from "./IMessagesRouteService";

export class MessagesRoute extends RestRoute {
    constructor(service: IMessagesRouteService) {
        super();
        this.initRoutes(service);
    }

    private initRoutes(service: IMessagesRouteService) {
        //getMessages: Verify the method is available
        if (!service.getMessages) {
            throw new Error(
                'REST resource service for "Messages" is missing method: "getMessages"'
            );
        }

        //getMessages: Verify the method is implemented correctly
        this.validateMethod(service.getMessages, "getMessages", []);

        //getMessages: Add route to server
        this.addEndpoint({
            method: "GET",
            path: "/messages",
            description: "Get all messages",
            arguments: [],
            handler: service.getMessages.bind(service),
        });

        //addMessage: Verify the method is available
        if (!service.addMessage) {
            throw new Error(
                'REST resource service for "Messages" is missing method: "addMessage"'
            );
        }

        //addMessage: Verify the method is implemented correctly
        this.validateMethod(service.addMessage, "addMessage", ["message"]);

        //addMessage: Add route to server
        this.addEndpoint({
            method: "POST",
            path: "/messages",
            description: "Add message",
            arguments: [{ name: "message", transport: "BODY" }],
            handler: service.addMessage.bind(service),
        });

        //deleteMessage: Verify the method is available
        if (!service.deleteMessage) {
            throw new Error(
                'REST resource service for "Messages" is missing method: "deleteMessage"'
            );
        }

        //deleteMessage: Verify the method is implemented correctly
        this.validateMethod(service.deleteMessage, "deleteMessage", ["id"]);

        //deleteMessage: Add route to server
        this.addEndpoint({
            method: "DELETE",
            path: "/messages/{id}",
            description: "Delete message",
            arguments: [{ name: "id", transport: "PATH" }],
            handler: service.deleteMessage.bind(service),
        });

        //deleteAllMessages: Verify the method is available
        if (!service.deleteAllMessages) {
            throw new Error(
                'REST resource service for "Messages" is missing method: "deleteAllMessages"'
            );
        }

        //deleteAllMessages: Verify the method is implemented correctly
        this.validateMethod(service.deleteAllMessages, "deleteAllMessages", []);

        //deleteAllMessages: Add route to server
        this.addEndpoint({
            method: "DELETE",
            path: "/messages",
            description: "Delete all messages",
            arguments: [],
            handler: service.deleteAllMessages.bind(service),
        });
    }
}
