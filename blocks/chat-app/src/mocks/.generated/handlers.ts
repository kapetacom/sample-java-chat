import { getMessagesHandler } from '../handlers/messages/getMessagesHandler';
import { addMessageHandler } from '../handlers/messages/addMessageHandler';
import { deleteMessageHandler } from '../handlers/messages/deleteMessageHandler';
import { deleteAllMessagesHandler } from '../handlers/messages/deleteAllMessagesHandler';

export const handlers = [getMessagesHandler, addMessageHandler, deleteMessageHandler, deleteAllMessagesHandler];
