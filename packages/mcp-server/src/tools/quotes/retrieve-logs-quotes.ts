// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'quotes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/quote/{uid}/logs',
  operationId: 'getSpecificQuoteLogs',
};

export const tool: Tool = {
  name: 'retrieve_logs_quotes',
  description: "Récupère l'historique des actions sur un devis spécifique.\n",
  inputSchema: {
    type: 'object',
    properties: {
      uid: {
        type: 'string',
      },
    },
    required: ['uid'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Wuro, args: Record<string, unknown> | undefined) => {
  const { uid, ...body } = args as any;
  const response = await client.quotes.retrieveLogs(uid).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
