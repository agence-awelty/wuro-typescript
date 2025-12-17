// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'wuro-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'delivery_receipts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/delivery-receipts',
  operationId: 'getAllReceipts',
};

export const tool: Tool = {
  name: 'list_delivery_receipts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRécupère la liste des bons de livraison avec pagination, tri et filtres.\n\n**Filtres disponibles:**\n- `state`: État du bon de livraison\n- `client`: ID du client\n- `minDate` / `maxDate`: Plage de dates\n\n**Réponse:**\n- `receipts`: Liste des bons de livraison\n- `total`: Nombre total\n- `skip` et `limit`: Paramètres de pagination\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/delivery_receipt_list_response',\n  $defs: {\n    delivery_receipt_list_response: {\n      type: 'object',\n      properties: {\n        limit: {\n          type: 'integer'\n        },\n        receipts: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/receipt'\n          }\n        },\n        skip: {\n          type: 'integer'\n        },\n        total: {\n          type: 'integer'\n        }\n      }\n    },\n    receipt: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'Unique identifier for the delivery receipt'\n        },\n        client: {\n          type: 'string',\n          description: 'Reference to the client'\n        },\n        client_contact: {\n          type: 'string',\n          description: 'Contact person at the client'\n        },\n        client_email: {\n          type: 'string',\n          description: 'Email of the client'\n        },\n        client_mobile: {\n          type: 'string',\n          description: 'Mobile phone of the client'\n        },\n        client_name: {\n          type: 'string',\n          description: 'Name of the client'\n        },\n        comment: {\n          type: 'string',\n          description: 'Additional comments'\n        },\n        company: {\n          type: 'string',\n          description: 'Reference to the company'\n        },\n        company_name: {\n          type: 'string',\n          description: 'Name of the company'\n        },\n        date: {\n          type: 'string',\n          description: 'Date of the delivery receipt',\n          format: 'date-time'\n        },\n        delivery_address: {\n          type: 'string',\n          description: 'Delivery address'\n        },\n        delivery_city: {\n          type: 'string',\n          description: 'Delivery city'\n        },\n        delivery_country: {\n          type: 'string',\n          description: 'Delivery country'\n        },\n        delivery_date: {\n          type: 'string',\n          description: 'Delivery date'\n        },\n        delivery_zip_code: {\n          type: 'string',\n          description: 'Delivery zip code'\n        },\n        fromInvoice: {\n          type: 'string',\n          description: 'Reference to the invoice if created from an invoice'\n        },\n        fromQuote: {\n          type: 'string',\n          description: 'Reference to the quote if created from a quote'\n        },\n        lines: {\n          type: 'array',\n          description: 'List of delivery receipt lines',\n          items: {\n            type: 'object',\n            properties: {\n              description: {\n                type: 'string',\n                description: 'Description of the line'\n              },\n              quantity: {\n                type: 'number',\n                description: 'Quantity'\n              },\n              reference: {\n                type: 'string',\n                description: 'Reference of the product'\n              },\n              title: {\n                type: 'string',\n                description: 'Title of the line'\n              },\n              type: {\n                type: 'string',\n                description: 'Type of the line',\n                enum: [                  'product',\n                  'header'\n                ]\n              },\n              weight: {\n                type: 'number',\n                description: 'Weight of the product'\n              }\n            }\n          }\n        },\n        notes: {\n          type: 'string',\n          description: 'Additional notes'\n        },\n        number: {\n          type: 'string',\n          description: 'Receipt number'\n        },\n        numberOrder: {\n          type: 'string',\n          description: 'Order number'\n        },\n        shipping_date: {\n          type: 'string',\n          description: 'Shipping date',\n          format: 'date-time'\n        },\n        shipping_method: {\n          type: 'string',\n          description: 'Shipping method'\n        },\n        shippingNbPackages: {\n          type: 'number',\n          description: 'Number of packages'\n        },\n        state: {\n          type: 'string',\n          description: 'State of the delivery receipt',\n          enum: [            'draft',\n            'waiting',\n            'shipped',\n            'delivered',\n            'refused',\n            'canceled',\n            'inactive'\n          ]\n        },\n        title: {\n          type: 'string',\n          description: 'Short description or label of the delivery receipt'\n        },\n        totalQuantity: {\n          type: 'number',\n          description: 'Total quantity of all products'\n        },\n        totalWeight: {\n          type: 'number',\n          description: 'Total weight of all products'\n        },\n        type: {\n          type: 'string',\n          description: 'Type of the receipt',\n          enum: [            'delivery'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      client: {
        type: 'string',
        description: 'Filtre par ID du client',
      },
      limit: {
        type: 'integer',
        description: 'Nombre maximum de bons à retourner',
      },
      skip: {
        type: 'integer',
        description: 'Nombre de bons à ignorer (pagination)',
      },
      sort: {
        type: 'string',
        description: 'Champ de tri et direction',
      },
      state: {
        type: 'string',
        description: 'Filtre par état',
        enum: ['draft', 'waiting', 'shipped', 'delivered', 'refused', 'canceled', 'inactive'],
      },
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
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.deliveryReceipts.list(body)));
  } catch (error) {
    if (error instanceof Wuro.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
