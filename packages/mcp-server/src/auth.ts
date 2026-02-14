// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { IncomingMessage } from 'node:http';
import { ClientOptions } from 'wuro';

export const parseAuthHeaders = (req: IncomingMessage, required?: boolean): Partial<ClientOptions> => {
  const appID = Array.isArray(req.headers['x-app-id']) ? req.headers['x-app-id'][0] : req.headers['x-app-id'];
  const appSecret =
    Array.isArray(req.headers['x-app-secret']) ? req.headers['x-app-secret'][0] : req.headers['x-app-secret'];
  return { appID, appSecret };
};
