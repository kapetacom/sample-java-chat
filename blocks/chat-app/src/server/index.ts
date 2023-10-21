import Path from "path";
import { Server } from "@kapeta/sdk-server";
const server = new Server(
    "kapeta/sample-java-chat-chat-app",
    Path.resolve(__dirname, "../..")
);
import { MessagesProxyRoute } from "./proxies/rest/MessagesProxyRoute";

server.addRoute(new MessagesProxyRoute());

const BASE_DIR = Path.resolve(__dirname, "../../dist");
const webpackConfig = require("../../webpack.development.config");
server.configureAssets(BASE_DIR, webpackConfig);

server.start("web");
