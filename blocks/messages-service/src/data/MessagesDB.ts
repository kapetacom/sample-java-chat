//
// GENERATED SOURCE - DO NOT EDIT
//

import { MongoDB } from "@kapeta/sdk-nosql-mongodb";
import { Prisma, PrismaClient } from "./clients/messages";

export class MessagesDB extends MongoDB<PrismaClient> {
    constructor() {
        super("messages");
    }

    createClient(opts: Prisma.PrismaClientOptions): PrismaClient {
        return new PrismaClient(opts);
    }
}
