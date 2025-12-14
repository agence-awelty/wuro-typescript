// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'products.variant',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/product/{productId}/variant/{uid}',
  operationId: 'updateProductVariant',
};

export const tool: Tool = {
  name: 'update_products_variant',
  description:
    'Met à jour une variante de produit existante.\n\n**Modifications possibles:**\n- Prix de la variante\n- Stock\n- Référence\n- Attributs de la variante\n\n**Événement déclenché:** UPDATE_PRODUCT_VARIANT\n',
  inputSchema: {
    type: 'object',
    properties: {
      productId: {
        type: 'string',
      },
      uid: {
        type: 'string',
      },
      buying_price: {
        type: 'number',
      },
      name: {
        type: 'string',
      },
      options: {
        type: 'object',
        additionalProperties: true,
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
      stock: {
        type: 'object',
        properties: {
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
      tva_rate: {
        type: 'number',
      },
    },
    required: ['productId', 'uid'],
  },
  annotations: {},
};

export const handler = async (client: Wuro, args: Record<string, unknown> | undefined) => {
  const { uid, ...body } = args as any;
  const response = await client.products.variant.update(uid, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
