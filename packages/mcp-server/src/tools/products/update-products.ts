// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'wuro-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'products',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/product/{uid}',
  operationId: 'updateProduct',
};

export const tool: Tool = {
  name: 'update_products',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nMet à jour les informations d'un produit existant.\n\nVous pouvez modifier :\n- Les informations de base (nom, référence, description)\n- Les prix et TVA\n- Les unités de vente\n- Les catégories\n\n## Événement déclenché\n\nUn événement `UPDATE_PRODUCT` est émis après la mise à jour.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/product_update_response',\n  $defs: {\n    product_update_response: {\n      type: 'object',\n      properties: {\n        updatedProduct: {\n          $ref: '#/$defs/product'\n        }\n      }\n    },\n    product: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'Unique identifier for the product'\n        },\n        analytical_code: {\n          type: 'string',\n          description: 'Analytical code'\n        },\n        buying_price: {\n          type: 'number',\n          description: 'Buying/cost price'\n        },\n        category: {\n          type: 'string',\n          description: 'Reference to product category'\n        },\n        commercial_margin: {\n          type: 'number',\n          description: 'Commercial margin (price_ht - buying_price)'\n        },\n        company: {\n          type: 'string',\n          description: 'Reference to the company'\n        },\n        cost_price: {\n          type: 'number',\n          description: 'Cost price (coût de revient)'\n        },\n        createdAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'Product description'\n        },\n        ecotax: {\n          type: 'number',\n          description: 'Ecotax amount'\n        },\n        electronic: {\n          type: 'boolean',\n          description: 'Is electronic product'\n        },\n        files: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string'\n              },\n              filename: {\n                type: 'string'\n              },\n              mime: {\n                type: 'string'\n              },\n              size: {\n                type: 'number'\n              },\n              url: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        gross_margin: {\n          type: 'number',\n          description: 'Gross margin (price_ht - cost_price)'\n        },\n        hasSpecifications: {\n          type: 'boolean',\n          description: 'Has specifications'\n        },\n        hasStockManagement: {\n          type: 'boolean',\n          description: 'Stock management enabled'\n        },\n        hasVariations: {\n          type: 'boolean',\n          description: 'Has product variations'\n        },\n        images: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string'\n              },\n              filename: {\n                type: 'string'\n              },\n              mime: {\n                type: 'string'\n              },\n              size: {\n                type: 'number'\n              },\n              url: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        is_marchandise: {\n          type: 'boolean',\n          description: 'Is merchandise'\n        },\n        mandatory_mentions: {\n          type: 'string',\n          description: 'Mandatory legal mentions'\n        },\n        name: {\n          type: 'string',\n          description: 'Product name (required)'\n        },\n        options: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              name: {\n                type: 'string'\n              },\n              values: {\n                type: 'array',\n                items: {\n                  type: 'string'\n                }\n              }\n            }\n          }\n        },\n        price_ht: {\n          type: 'number',\n          description: 'Price without tax'\n        },\n        reference: {\n          type: 'string',\n          description: 'Product reference'\n        },\n        sku: {\n          type: 'string',\n          description: 'Stock Keeping Unit'\n        },\n        specifications: {\n          type: 'object',\n          properties: {\n            depth: {\n              type: 'number'\n            },\n            height: {\n              type: 'number'\n            },\n            weight: {\n              type: 'number'\n            },\n            width: {\n              type: 'number'\n            }\n          }\n        },\n        state: {\n          type: 'string',\n          enum: [            'active',\n            'inactive'\n          ]\n        },\n        stock: {\n          type: 'object',\n          properties: {\n            forceSell: {\n              type: 'boolean'\n            },\n            nb_alert: {\n              type: 'number'\n            },\n            nb_min: {\n              type: 'number'\n            },\n            nb_stock: {\n              type: 'number'\n            },\n            sell_value_ht: {\n              type: 'number'\n            },\n            sell_value_ttc: {\n              type: 'number'\n            },\n            value_ht: {\n              type: 'number'\n            },\n            value_ttc: {\n              type: 'number'\n            }\n          }\n        },\n        suppliers: {\n          type: 'array',\n          description: 'List of supplier (client) references',\n          items: {\n            type: 'string'\n          }\n        },\n        tva: {\n          type: 'string',\n          description: 'Reference to VAT rate'\n        },\n        tva_rate: {\n          type: 'number',\n          description: 'VAT rate value'\n        },\n        unit: {\n          type: 'string',\n          description: 'Unit of measurement'\n        },\n        updatedAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        url_ext: {\n          type: 'string',\n          description: 'External URL'\n        },\n        variants: {\n          type: 'array',\n          description: 'List of variant references',\n          items: {\n            type: 'string'\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      uid: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
      analytical_code: {
        type: 'string',
      },
      buying_price: {
        type: 'number',
      },
      category: {
        type: 'string',
      },
      cost_price: {
        type: 'number',
      },
      description: {
        type: 'string',
      },
      ecotax: {
        type: 'number',
      },
      electronic: {
        type: 'boolean',
      },
      hasSpecifications: {
        type: 'boolean',
      },
      hasStockManagement: {
        type: 'boolean',
      },
      hasVariations: {
        type: 'boolean',
      },
      is_marchandise: {
        type: 'boolean',
      },
      mandatory_mentions: {
        type: 'string',
      },
      options: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
            },
            values: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
          },
        },
      },
      price_ht: {
        type: 'number',
      },
      reference: {
        type: 'string',
      },
      sku: {
        type: 'string',
      },
      specifications: {
        type: 'object',
        properties: {
          depth: {
            type: 'number',
          },
          height: {
            type: 'number',
          },
          weight: {
            type: 'number',
          },
          width: {
            type: 'number',
          },
        },
      },
      stock: {
        type: 'object',
        properties: {
          forceSell: {
            type: 'boolean',
          },
          nb_alert: {
            type: 'number',
          },
          nb_min: {
            type: 'number',
          },
          nb_stock: {
            type: 'number',
          },
        },
      },
      suppliers: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      tva: {
        type: 'string',
      },
      tva_rate: {
        type: 'number',
      },
      unit: {
        type: 'string',
      },
      url_ext: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['uid', 'name'],
  },
  annotations: {},
};

export const handler = async (client: Wuro, args: Record<string, unknown> | undefined) => {
  const { uid, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.products.update(uid, body)));
  } catch (error) {
    if (error instanceof Wuro.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
