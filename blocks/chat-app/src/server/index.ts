import Path from "path";
import FS from "fs";
import { Server } from "@kapeta/sdk-server";
const server = new Server(
    "kapeta/sample-java-chat-chat-app",
    Path.resolve(__dirname, "../..")
);
import express from "express";
import history from "connect-history-api-fallback";
import { MessagesProxyRoute } from "./proxies/rest/MessagesProxyRoute";

const devMode =
    process.env.NODE_ENV &&
    process.env.NODE_ENV.toLowerCase() === "development";

server.addRoute(new MessagesProxyRoute());

const BASE_DIR = Path.resolve(__dirname, "../../dist");
const webpackConfig = require("../../webpack.development.config");
server.configureAssets(BASE_DIR, webpackConfig);

server.start("web");
