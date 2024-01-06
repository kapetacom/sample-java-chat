//
// GENERATED SOURCE - DO NOT EDIT
//
import { Router, Request, Response, NextFunction } from 'express';
import { createProxyRoute, ProxyRouteOptions } from '@kapeta/sdk-proxy-route';
import { ConfigProvider } from '@kapeta/sdk-config';

export const createMessagesRouter = async (provider: ConfigProvider, opts: ProxyRouteOptions = {}) => {
    const router = Router();
    router.use('/messages', await createProxyRoute(provider, 'messages', 'rest', opts));

    return router;
};
