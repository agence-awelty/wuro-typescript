// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'product_categories',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/product-category/{uid}',
  operationId: 'deleteProductCategory',
};

export const tool: Tool = {
  name: 'delete_product_categories',
  description:
    'Supprime une catégorie de produit.\n\n**Attention:**\n- Les produits associés à cette catégorie ne seront plus catégorisés\n- Cette opération est irréversible\n',
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
    idempotentHint: true,
  },
};

export const handler = async (client: Wuro, args: Record<string, unknown> | undefined) => {
  const { uid, ...body } = args as any;
  const response = await client.productCategories.delete(uid).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
