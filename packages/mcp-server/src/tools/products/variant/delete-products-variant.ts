// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'products.variant',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/product/{productId}/variant/{uid}',
  operationId: 'deleteProductVariant',
};

export const tool: Tool = {
  name: 'delete_products_variant',
  description:
    'Supprime une variante de produit.\n\n**Attention:**\n- Cette opération est irréversible\n- La variante ne sera plus disponible à la vente\n\n**Événement déclenché:** DELETE_PRODUCT_VARIANT\n',
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
    idempotentHint: true,
  },
};

export const handler = async (client: Wuro, args: Record<string, unknown> | undefined) => {
  const { uid, ...body } = args as any;
  const response = await client.products.variant.delete(uid, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
