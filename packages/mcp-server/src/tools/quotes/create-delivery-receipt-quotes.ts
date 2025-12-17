// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'quotes',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/quote/{uid}/delivery-receipt',
  operationId: 'createDeliveryReceiptFromQuote',
};

export const tool: Tool = {
  name: 'create_delivery_receipt_quotes',
  description:
    "Génère un bon de livraison à partir d'un devis.\n\nLe bon de livraison reprend les lignes du devis.\n",
  inputSchema: {
    type: 'object',
    properties: {
      uid: {
        type: 'string',
      },
    },
    required: ['uid'],
  },
  annotations: {},
};

export const handler = async (client: Wuro, args: Record<string, unknown> | undefined) => {
  const { uid, ...body } = args as any;
  const response = await client.quotes.createDeliveryReceipt(uid).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
