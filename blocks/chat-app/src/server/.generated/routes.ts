import { Router, Request, Response, NextFunction } from 'express';
import { ConfigProvider } from '@kapeta/sdk-config';
import { ProxyRouteOptions } from '@kapeta/sdk-proxy-route';

import { createMessagesRouter } from './proxies/rest/Messages-routes';

export const createRoutes = async (config: ConfigProvider, opts: ProxyRouteOptions = {}): Promise<Router> => {
    const routes = Router();
    const restApis = Router();
    restApis.use(await createMessagesRouter(config, opts));

    // Catch all unknown routes and return 418 I'm a teapot
    restApis.all('/*', (req: Request, res: Response, next: NextFunction) => {
        res.status(418).json({
            error: 'API endpoint not found',
        });
    });

    routes.use('/api/rest', restApis);

    return routes;
};
