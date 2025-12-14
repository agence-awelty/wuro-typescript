// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'wuro-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'product_categories',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/product-categories',
  operationId: 'getAllProductCategories',
};

export const tool: Tool = {
  name: 'list_product_categories',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRécupère la liste de toutes les catégories de produits de l'entreprise.\n\n**Utilisation:**\n- Organisation du catalogue produits\n- Filtrage des produits par catégorie\n- Rapports et statistiques par catégorie\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/product_category_list_response',\n  $defs: {\n    product_category_list_response: {\n      type: 'object',\n      properties: {\n        count: {\n          type: 'integer',\n          description: 'Nombre total de catégories'\n        },\n        data: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/product_category'\n          }\n        }\n      }\n    },\n    product_category: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string'\n        },\n        company: {\n          type: 'string'\n        },\n        createdAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string'\n        },\n        state: {\n          type: 'string',\n          enum: [            'active',\n            'inactive'\n          ]\n        },\n        updatedAt: {\n          type: 'string',\n          format: 'date-time'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Wuro, args: Record<string, unknown> | undefined) => {
  const { jq_filter } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.productCategories.list()));
  } catch (error) {
    if (error instanceof Wuro.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
