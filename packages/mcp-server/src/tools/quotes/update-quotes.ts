// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'wuro-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'quotes',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/quote/{uid}',
  operationId: 'updateQuote',
};

export const tool: Tool = {
  name: 'update_quotes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nMet à jour un devis existant.\n\n**Numérotation automatique:**\n- Si le devis passe de 'draft' à un état validé (pending, waiting, accepted, etc.), un numéro est automatiquement attribué\n- La date est mise à jour automatiquement lors de la numérotation\n\n**Événement déclenché:** UPDATE_QUOTE\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/quote_update_response',\n  $defs: {\n    quote_update_response: {\n      type: 'object',\n      properties: {\n        updatedQuote: {\n          $ref: '#/$defs/quote'\n        }\n      }\n    },\n    quote: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'Unique identifier for the quote'\n        },\n        accept_date: {\n          type: 'string',\n          description: 'Date when the quote was accepted',\n          format: 'date-time'\n        },\n        acomptes: {\n          type: 'array',\n          description: 'List of advance payments',\n          items: {\n            type: 'object',\n            properties: {\n              _id: {\n                type: 'string'\n              },\n              amount: {\n                type: 'number',\n                description: 'Amount of the advance payment'\n              },\n              amount_ht: {\n                type: 'number',\n                description: 'Amount without tax'\n              },\n              credit: {\n                type: 'boolean',\n                description: 'If it\\'s a credit note'\n              },\n              date: {\n                type: 'string',\n                format: 'date-time'\n              },\n              number: {\n                type: 'string'\n              },\n              sold: {\n                type: 'boolean'\n              },\n              type: {\n                type: 'string',\n                description: 'Type of payment',\n                enum: [                  'advance',\n                  'sold',\n                  'credit',\n                  'invoice'\n                ]\n              }\n            }\n          }\n        },\n        base_currency: {\n          type: 'string',\n          description: 'The currency with which the company works for this quote'\n        },\n        client: {\n          type: 'string',\n          description: 'Reference to the client'\n        },\n        client_address: {\n          type: 'string',\n          description: 'Address of the client'\n        },\n        client_city: {\n          type: 'string',\n          description: 'City of the client'\n        },\n        client_country: {\n          type: 'string',\n          description: 'Country of the client'\n        },\n        client_email: {\n          type: 'string',\n          description: 'Email of the client'\n        },\n        client_name: {\n          type: 'string',\n          description: 'Name of the client'\n        },\n        client_phone: {\n          type: 'string',\n          description: 'Phone number of the client'\n        },\n        client_zip_code: {\n          type: 'string',\n          description: 'Zip code of the client'\n        },\n        company: {\n          type: 'string',\n          description: 'Reference to the company'\n        },\n        company_name: {\n          type: 'string',\n          description: 'Name of the company'\n        },\n        date: {\n          type: 'string',\n          description: 'Date of the quote',\n          format: 'date-time'\n        },\n        expiry_date: {\n          type: 'string',\n          description: 'Expiry date of the quote',\n          format: 'date-time'\n        },\n        number: {\n          type: 'string',\n          description: 'Quote number'\n        },\n        quote_lines: {\n          type: 'array',\n          description: 'List of quote lines',\n          items: {\n            $ref: '#/$defs/quote_line'\n          }\n        },\n        state: {\n          type: 'string',\n          description: 'State of the quote',\n          enum: [            'invoiced',\n            'refused',\n            'accepted',\n            'waiting',\n            'draft',\n            'canceled',\n            'inactive'\n          ]\n        },\n        title: {\n          type: 'string',\n          description: 'Short description or label of the quote'\n        },\n        total_ht: {\n          type: 'number',\n          description: 'Total amount without tax'\n        },\n        total_ttc: {\n          type: 'number',\n          description: 'Total amount with tax'\n        },\n        total_tva: {\n          type: 'number',\n          description: 'Total tax amount'\n        },\n        type: {\n          type: 'string',\n          description: 'Type of the quote',\n          enum: [            'quote',\n            'proforma',\n            'bdc'\n          ]\n        },\n        VATRates: {\n          type: 'array',\n          description: 'List of VAT rates applied to the quote',\n          items: {\n            $ref: '#/$defs/vat_rate'\n          }\n        }\n      }\n    },\n    quote_line: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'Unique identifier for the line'\n        },\n        description: {\n          type: 'string',\n          description: 'Description of the line'\n        },\n        price_ht: {\n          type: 'number',\n          description: 'Price without tax'\n        },\n        quantity: {\n          type: 'number',\n          description: 'Quantity'\n        },\n        reference: {\n          type: 'string',\n          description: 'Reference of the product'\n        },\n        title: {\n          type: 'string',\n          description: 'Title of the line'\n        },\n        total_ht: {\n          type: 'number',\n          description: 'Total amount without tax'\n        },\n        total_ttc: {\n          type: 'number',\n          description: 'Total amount with tax'\n        },\n        tva_rate: {\n          type: 'number',\n          description: 'VAT rate'\n        },\n        type: {\n          type: 'string',\n          description: 'Type of the line',\n          enum: [            'product',\n            'header',\n            'subtotal',\n            'globalDiscount'\n          ]\n        },\n        unit: {\n          type: 'string',\n          description: 'Unit of measurement'\n        }\n      }\n    },\n    vat_rate: {\n      type: 'object',\n      properties: {\n        amount: {\n          type: 'number',\n          description: 'Amount of VAT'\n        },\n        rate: {\n          type: 'string',\n          description: 'VAT rate'\n        },\n        total: {\n          type: 'number',\n          description: 'Total amount with this VAT rate'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      uid: {
        type: 'string',
      },
      client: {
        type: 'string',
        description: 'ID du client',
      },
      client_address: {
        type: 'string',
      },
      client_city: {
        type: 'string',
      },
      client_country: {
        type: 'string',
      },
      client_email: {
        type: 'string',
      },
      client_name: {
        type: 'string',
      },
      client_zip_code: {
        type: 'string',
      },
      date: {
        type: 'string',
        description: 'Date du devis',
        format: 'date-time',
      },
      expiry_date: {
        type: 'string',
        description: 'Date de validité',
        format: 'date-time',
      },
      quote_lines: {
        type: 'array',
        items: {
          $ref: '#/$defs/quote_line',
        },
      },
      state: {
        type: 'string',
        description: 'État du devis',
        enum: ['draft', 'pending', 'waiting', 'accepted', 'refused', 'invoiced', 'canceled'],
      },
      title: {
        type: 'string',
        description: 'Titre/objet du devis',
      },
      type: {
        type: 'string',
        enum: ['quote', 'proforma', 'bdc'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['uid'],
    $defs: {
      quote_line: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
            description: 'Unique identifier for the line',
          },
          description: {
            type: 'string',
            description: 'Description of the line',
          },
          price_ht: {
            type: 'number',
            description: 'Price without tax',
          },
          quantity: {
            type: 'number',
            description: 'Quantity',
          },
          reference: {
            type: 'string',
            description: 'Reference of the product',
          },
          title: {
            type: 'string',
            description: 'Title of the line',
          },
          total_ht: {
            type: 'number',
            description: 'Total amount without tax',
          },
          total_ttc: {
            type: 'number',
            description: 'Total amount with tax',
          },
          tva_rate: {
            type: 'number',
            description: 'VAT rate',
          },
          type: {
            type: 'string',
            description: 'Type of the line',
            enum: ['product', 'header', 'subtotal', 'globalDiscount'],
          },
          unit: {
            type: 'string',
            description: 'Unit of measurement',
          },
        },
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Wuro, args: Record<string, unknown> | undefined) => {
  const { uid, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.quotes.update(uid, body)));
  } catch (error) {
    if (error instanceof Wuro.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
