//
// GENERATED SOURCE - DO NOT EDIT
//
import { Server } from "@kapeta/sdk-server";

import { MessagesRoute } from "./src/rest/MessagesRoute";
import { MessagesRouteService } from "./src/service/MessagesRouteService";

const server = new Server(
    "kapeta/sample-java-chat-messages-service",
    __dirname
);

server.addRoute(new MessagesRoute(new MessagesRouteService()));

server.start("rest");
