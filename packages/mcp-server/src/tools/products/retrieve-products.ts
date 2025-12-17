// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'wuro-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'products',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/product/{uid}',
  operationId: 'getProduct',
};

export const tool: Tool = {
  name: 'retrieve_products',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRécupère les informations détaillées d'un produit par son identifiant.\n\nLes informations incluent :\n- Informations de base (nom, référence, description)\n- Prix et TVA\n- Unités de vente et conditionnement\n- Catégorie(s) associée(s)\n- Variantes si existantes\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/product_retrieve_response',\n  $defs: {\n    product_retrieve_response: {\n      type: 'object',\n      properties: {\n        product: {\n          $ref: '#/$defs/product'\n        }\n      }\n    },\n    product: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'Unique identifier for the product'\n        },\n        analytical_code: {\n          type: 'string',\n          description: 'Analytical code'\n        },\n        buying_price: {\n          type: 'number',\n          description: 'Buying/cost price'\n        },\n        category: {\n          type: 'string',\n          description: 'Reference to product category'\n        },\n        commercial_margin: {\n          type: 'number',\n          description: 'Commercial margin (price_ht - buying_price)'\n        },\n        company: {\n          type: 'string',\n          description: 'Reference to the company'\n        },\n        cost_price: {\n          type: 'number',\n          description: 'Cost price (coût de revient)'\n        },\n        createdAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'Product description'\n        },\n        ecotax: {\n          type: 'number',\n          description: 'Ecotax amount'\n        },\n        electronic: {\n          type: 'boolean',\n          description: 'Is electronic product'\n        },\n        files: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string'\n              },\n              filename: {\n                type: 'string'\n              },\n              mime: {\n                type: 'string'\n              },\n              size: {\n                type: 'number'\n              },\n              url: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        gross_margin: {\n          type: 'number',\n          description: 'Gross margin (price_ht - cost_price)'\n        },\n        hasSpecifications: {\n          type: 'boolean',\n          description: 'Has specifications'\n        },\n        hasStockManagement: {\n          type: 'boolean',\n          description: 'Stock management enabled'\n        },\n        hasVariations: {\n          type: 'boolean',\n          description: 'Has product variations'\n        },\n        images: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string'\n              },\n              filename: {\n                type: 'string'\n              },\n              mime: {\n                type: 'string'\n              },\n              size: {\n                type: 'number'\n              },\n              url: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        is_marchandise: {\n          type: 'boolean',\n          description: 'Is merchandise'\n        },\n        mandatory_mentions: {\n          type: 'string',\n          description: 'Mandatory legal mentions'\n        },\n        name: {\n          type: 'string',\n          description: 'Product name (required)'\n        },\n        options: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              name: {\n                type: 'string'\n              },\n              values: {\n                type: 'array',\n                items: {\n                  type: 'string'\n                }\n              }\n            }\n          }\n        },\n        price_ht: {\n          type: 'number',\n          description: 'Price without tax'\n        },\n        reference: {\n          type: 'string',\n          description: 'Product reference'\n        },\n        sku: {\n          type: 'string',\n          description: 'Stock Keeping Unit'\n        },\n        specifications: {\n          type: 'object',\n          properties: {\n            depth: {\n              type: 'number'\n            },\n            height: {\n              type: 'number'\n            },\n            weight: {\n              type: 'number'\n            },\n            width: {\n              type: 'number'\n            }\n          }\n        },\n        state: {\n          type: 'string',\n          enum: [            'active',\n            'inactive'\n          ]\n        },\n        stock: {\n          type: 'object',\n          properties: {\n            forceSell: {\n              type: 'boolean'\n            },\n            nb_alert: {\n              type: 'number'\n            },\n            nb_min: {\n              type: 'number'\n            },\n            nb_stock: {\n              type: 'number'\n            },\n            sell_value_ht: {\n              type: 'number'\n            },\n            sell_value_ttc: {\n              type: 'number'\n            },\n            value_ht: {\n              type: 'number'\n            },\n            value_ttc: {\n              type: 'number'\n            }\n          }\n        },\n        suppliers: {\n          type: 'array',\n          description: 'List of supplier (client) references',\n          items: {\n            type: 'string'\n          }\n        },\n        tva: {\n          type: 'string',\n          description: 'Reference to VAT rate'\n        },\n        tva_rate: {\n          type: 'number',\n          description: 'VAT rate value'\n        },\n        unit: {\n          type: 'string',\n          description: 'Unit of measurement'\n        },\n        updatedAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        url_ext: {\n          type: 'string',\n          description: 'External URL'\n        },\n        variants: {\n          type: 'array',\n          description: 'List of variant references',\n          items: {\n            type: 'string'\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      uid: {
        type: 'string',
      },
      populate: {
        type: 'string',
        description: 'Relations à inclure (ex. "category", "variants")',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['uid'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Wuro, args: Record<string, unknown> | undefined) => {
  const { uid, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.products.retrieve(uid, body)));
  } catch (error) {
    if (error instanceof Wuro.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
