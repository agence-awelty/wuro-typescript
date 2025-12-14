// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'purchase_categories',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/purchase-category/{uid}',
  operationId: 'deletePurchaseCategory',
};

export const tool: Tool = {
  name: 'delete_purchase_categories',
  description:
    "Supprime une catégorie d'achat.\n\n**Attention:**\n- Les achats associés à cette catégorie ne seront plus catégorisés\n- Cette opération est irréversible\n",
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
  const response = await client.purchaseCategories.delete(uid).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
