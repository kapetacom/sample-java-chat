import { Router } from 'express';
import { ConfigProvider } from '@kapeta/sdk-config';

import { createMessagesRouter } from './proxies/rest/Messages-routes';

export const createRoutes = async (config: ConfigProvider): Promise<Router> => {
    const routes = Router();
    routes.use(await createMessagesRouter(config));
    return routes;
};
