// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'products.variant',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/product/{uid}/variant',
  operationId: 'createProductVariant',
};

export const tool: Tool = {
  name: 'create_products_variant',
  description:
    'Crée une nouvelle variante pour un produit existant.\n\n**Exemples de variantes:**\n- Tailles : S, M, L, XL\n- Couleurs : Rouge, Bleu, Vert\n- Options : Avec option A, Sans option A\n\n**Propriétés personnalisables:**\n- Prix spécifique à la variante\n- Stock propre à la variante\n- Référence distincte\n\n**Événement déclenché:** CREATE_PRODUCT_VARIANT\n',
  inputSchema: {
    type: 'object',
    properties: {
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
    required: ['uid'],
  },
  annotations: {},
};

export const handler = async (client: Wuro, args: Record<string, unknown> | undefined) => {
  const { uid, ...body } = args as any;
  const response = await client.products.variant.create(uid, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
