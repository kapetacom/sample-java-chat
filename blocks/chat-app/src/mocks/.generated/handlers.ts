import { messages_getMessagesHandler } from '../handlers/messages/getMessagesHandler';
import { messages_addMessageHandler } from '../handlers/messages/addMessageHandler';
import { messages_deleteMessageHandler } from '../handlers/messages/deleteMessageHandler';
import { messages_deleteAllMessagesHandler } from '../handlers/messages/deleteAllMessagesHandler';
export const handlers = [
    messages_getMessagesHandler,
    messages_addMessageHandler,
    messages_deleteMessageHandler,
    messages_deleteAllMessagesHandler,
];
