// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { IncomingMessage } from 'node:http';
import { ClientOptions } from 'wuro';

export const parseAuthHeaders = (req: IncomingMessage): Partial<ClientOptions> => {
  const apiKey =
    Array.isArray(req.headers['x-apikey']) ? req.headers['x-apikey'][0] : req.headers['x-apikey'];
  return { apiKey };
};
