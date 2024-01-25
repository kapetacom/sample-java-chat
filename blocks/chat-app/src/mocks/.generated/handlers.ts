import { sortHandlersByPathSpecificity } from './sortHandlers';
import { Messages_getAllHandler } from '../handlers/messages/getAllHandler';
import { Messages_addHandler } from '../handlers/messages/addHandler';
import { Messages_deleteHandler } from '../handlers/messages/deleteHandler';
import { Messages_deleteAllHandler } from '../handlers/messages/deleteAllHandler';

export const handlers = sortHandlersByPathSpecificity([
    Messages_getAllHandler,
    Messages_addHandler,
    Messages_deleteHandler,
    Messages_deleteAllHandler,
]);
