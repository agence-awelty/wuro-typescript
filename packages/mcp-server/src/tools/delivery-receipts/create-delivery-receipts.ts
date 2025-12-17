// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'wuro-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'delivery_receipts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/delivery-receipt',
  operationId: 'createReceipt',
};

export const tool: Tool = {
  name: 'create_delivery_receipts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCrée un nouveau bon de livraison.\n\n## Numérotation automatique\n\nLe numéro est attribué automatiquement lorsque le bon passe en état validé\n(waiting, shipped, delivered). Un bon en brouillon (draft) n'a pas de numéro.\n\n## Structure des lignes\n\nLes lignes peuvent être de deux types :\n- **product** : Ligne produit avec quantité, référence, poids\n- **header** : Ligne de séparation/titre pour organiser le bon\n\n## Lien avec devis/facture\n\nVous pouvez créer un bon de livraison depuis un devis via `/quote/{uid}/delivery-receipt`\nou depuis une facture via `/invoice/{uid}/delivery-receipt`.\n\n## Événement déclenché\n\nUn événement `CREATE_RECEIPT` est émis après la création.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/delivery_receipt_create_response',\n  $defs: {\n    delivery_receipt_create_response: {\n      type: 'object',\n      properties: {\n        newReceipt: {\n          $ref: '#/$defs/receipt'\n        }\n      }\n    },\n    receipt: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'Unique identifier for the delivery receipt'\n        },\n        client: {\n          type: 'string',\n          description: 'Reference to the client'\n        },\n        client_contact: {\n          type: 'string',\n          description: 'Contact person at the client'\n        },\n        client_email: {\n          type: 'string',\n          description: 'Email of the client'\n        },\n        client_mobile: {\n          type: 'string',\n          description: 'Mobile phone of the client'\n        },\n        client_name: {\n          type: 'string',\n          description: 'Name of the client'\n        },\n        comment: {\n          type: 'string',\n          description: 'Additional comments'\n        },\n        company: {\n          type: 'string',\n          description: 'Reference to the company'\n        },\n        company_name: {\n          type: 'string',\n          description: 'Name of the company'\n        },\n        date: {\n          type: 'string',\n          description: 'Date of the delivery receipt',\n          format: 'date-time'\n        },\n        delivery_address: {\n          type: 'string',\n          description: 'Delivery address'\n        },\n        delivery_city: {\n          type: 'string',\n          description: 'Delivery city'\n        },\n        delivery_country: {\n          type: 'string',\n          description: 'Delivery country'\n        },\n        delivery_date: {\n          type: 'string',\n          description: 'Delivery date'\n        },\n        delivery_zip_code: {\n          type: 'string',\n          description: 'Delivery zip code'\n        },\n        fromInvoice: {\n          type: 'string',\n          description: 'Reference to the invoice if created from an invoice'\n        },\n        fromQuote: {\n          type: 'string',\n          description: 'Reference to the quote if created from a quote'\n        },\n        lines: {\n          type: 'array',\n          description: 'List of delivery receipt lines',\n          items: {\n            type: 'object',\n            properties: {\n              description: {\n                type: 'string',\n                description: 'Description of the line'\n              },\n              quantity: {\n                type: 'number',\n                description: 'Quantity'\n              },\n              reference: {\n                type: 'string',\n                description: 'Reference of the product'\n              },\n              title: {\n                type: 'string',\n                description: 'Title of the line'\n              },\n              type: {\n                type: 'string',\n                description: 'Type of the line',\n                enum: [                  'product',\n                  'header'\n                ]\n              },\n              weight: {\n                type: 'number',\n                description: 'Weight of the product'\n              }\n            }\n          }\n        },\n        notes: {\n          type: 'string',\n          description: 'Additional notes'\n        },\n        number: {\n          type: 'string',\n          description: 'Receipt number'\n        },\n        numberOrder: {\n          type: 'string',\n          description: 'Order number'\n        },\n        shipping_date: {\n          type: 'string',\n          description: 'Shipping date',\n          format: 'date-time'\n        },\n        shipping_method: {\n          type: 'string',\n          description: 'Shipping method'\n        },\n        shippingNbPackages: {\n          type: 'number',\n          description: 'Number of packages'\n        },\n        state: {\n          type: 'string',\n          description: 'State of the delivery receipt',\n          enum: [            'draft',\n            'waiting',\n            'shipped',\n            'delivered',\n            'refused',\n            'canceled',\n            'inactive'\n          ]\n        },\n        title: {\n          type: 'string',\n          description: 'Short description or label of the delivery receipt'\n        },\n        totalQuantity: {\n          type: 'number',\n          description: 'Total quantity of all products'\n        },\n        totalWeight: {\n          type: 'number',\n          description: 'Total weight of all products'\n        },\n        type: {\n          type: 'string',\n          description: 'Type of the receipt',\n          enum: [            'delivery'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      client: {
        type: 'string',
        description: 'Référence du client (obligatoire)',
      },
      client_address: {
        type: 'string',
        description: 'Adresse de livraison',
      },
      client_city: {
        type: 'string',
        description: 'Ville de livraison',
      },
      client_country: {
        type: 'string',
        description: 'Pays de livraison',
      },
      client_email: {
        type: 'string',
        description: 'Email du client (pour envoi du bon)',
      },
      client_name: {
        type: 'string',
        description: 'Nom du client (copié du client si non fourni)',
      },
      client_zip_code: {
        type: 'string',
        description: 'Code postal',
      },
      date: {
        type: 'string',
        description: "Date du bon (par défaut aujourd'hui)",
        format: 'date-time',
      },
      lines: {
        type: 'array',
        description: 'Lignes du bon de livraison',
        items: {
          type: 'object',
          properties: {
            description: {
              type: 'string',
              description: 'Description détaillée',
            },
            order: {
              type: 'integer',
              description: "Ordre d'affichage de la ligne",
            },
            quantity: {
              type: 'number',
              description: 'Quantité',
            },
            reference: {
              type: 'string',
              description: 'Référence produit',
            },
            title: {
              type: 'string',
              description: 'Titre de la ligne',
            },
            type: {
              type: 'string',
              description:
                'Type de ligne :\n- **product** : Ligne produit standard\n- **header** : Ligne de titre/séparation',
              enum: ['product', 'header'],
            },
            weight: {
              type: 'number',
              description: 'Poids unitaire (en kg)',
            },
          },
        },
      },
      shipping_date: {
        type: 'string',
        description: "Date d'expédition prévue",
        format: 'date-time',
      },
      state: {
        type: 'string',
        description: 'État initial du bon',
        enum: ['draft', 'waiting', 'shipped', 'delivered'],
      },
      title: {
        type: 'string',
        description: 'Description courte ou libellé du bon',
      },
      type: {
        type: 'string',
        description: 'Type de document (delivery par défaut)',
        enum: ['delivery'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['client'],
  },
  annotations: {},
};

export const handler = async (client: Wuro, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.deliveryReceipts.create(body)));
  } catch (error) {
    if (error instanceof Wuro.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
