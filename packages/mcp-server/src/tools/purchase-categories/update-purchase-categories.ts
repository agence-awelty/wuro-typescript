// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'purchase_categories',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/purchase-category/{uid}',
  operationId: 'updatePurchaseCategory',
};

export const tool: Tool = {
  name: 'update_purchase_categories',
  description:
    "Met à jour une catégorie d'achat existante.\n\n**Modifications possibles:**\n- Renommer la catégorie\n- Activer/désactiver la catégorie\n\n**États:**\n- `active` : Catégorie visible et utilisable\n- `inactive` : Catégorie masquée\n",
  inputSchema: {
    type: 'object',
    properties: {
      uid: {
        type: 'string',
      },
      name: {
        type: 'string',
        description: 'Nouveau nom de la catégorie',
      },
      state: {
        type: 'string',
        description: 'État de la catégorie',
        enum: ['active', 'inactive'],
      },
    },
    required: ['uid'],
  },
  annotations: {},
};

export const handler = async (client: Wuro, args: Record<string, unknown> | undefined) => {
  const { uid, ...body } = args as any;
  const response = await client.purchaseCategories.update(uid, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
