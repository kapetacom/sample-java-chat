//
// GENERATED SOURCE - DO NOT EDIT
//
import { Router } from 'express';
import { createProxyRoute } from '@kapeta/sdk-proxy-route';
import { ConfigProvider } from '@kapeta/sdk-config';

export const createMessagesRouter = async (provider: ConfigProvider) => {
    const router = Router();
    router.use('/api/rest/messages', await createProxyRoute(provider, 'messages', 'rest'));

    return router;
};
