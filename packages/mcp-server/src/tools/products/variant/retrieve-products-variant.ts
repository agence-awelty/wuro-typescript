// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'products.variant',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/product/{productId}/variant/{uid}',
  operationId: 'getProductVariant',
};

export const tool: Tool = {
  name: 'retrieve_products_variant',
  description: "Récupère les détails d'une variante de produit spécifique.\n",
  inputSchema: {
    type: 'object',
    properties: {
      productId: {
        type: 'string',
      },
      uid: {
        type: 'string',
      },
    },
    required: ['productId', 'uid'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Wuro, args: Record<string, unknown> | undefined) => {
  const { uid, ...body } = args as any;
  const response = await client.products.variant.retrieve(uid, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
