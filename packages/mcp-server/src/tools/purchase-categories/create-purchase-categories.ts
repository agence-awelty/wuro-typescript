// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'wuro-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'purchase_categories',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/purchase-category',
  operationId: 'createPurchaseCategory',
};

export const tool: Tool = {
  name: 'create_purchase_categories',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCrée une nouvelle catégorie pour organiser les achats/dépenses.\n\n**Exemples de catégories:**\n- Fournitures de bureau\n- Services externes\n- Frais de déplacement\n- Abonnements\n\n**Champs requis:**\n- `name` : Nom de la catégorie\n\n**Événement déclenché:** CREATE_PURCHASE_CATEGORY\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/purchase_category_create_response',\n  $defs: {\n    purchase_category_create_response: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string'\n        },\n        company: {\n          type: 'string'\n        },\n        createdAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string'\n        },\n        state: {\n          type: 'string',\n          enum: [            'active',\n            'inactive'\n          ]\n        },\n        updatedAt: {\n          type: 'string',\n          format: 'date-time'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'Nom de la catégorie',
      },
      company: {
        type: 'string',
        description: "ID de l'entreprise (optionnel, défaut = entreprise courante)",
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['name'],
  },
  annotations: {},
};

export const handler = async (client: Wuro, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.purchaseCategories.create(body)));
  } catch (error) {
    if (error instanceof Wuro.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
