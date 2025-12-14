// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'wuro-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'invoices.line',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/invoice/{uid}/line/{lineUuid}',
  operationId: 'updateInvoiceLine',
};

export const tool: Tool = {
  name: 'update_invoices_line',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nMet à jour une ligne existante d'une facture.\n\n**Restrictions:**\n- La facture ne doit pas être numérotée (en brouillon uniquement)\n- Une facture validée ne peut pas être modifiée\n\n**Comportement:**\n- Les totaux de la facture sont automatiquement recalculés après modification\n- Seuls les champs fournis sont modifiés (mise à jour partielle)\n\n**Types de lignes:**\n- **product** : Ligne produit standard avec prix et quantité\n- **header** : Ligne de titre/séparation\n- **subtotal** : Sous-total automatique\n- **globalDiscount** : Remise globale\n\n**Événement déclenché:** UPDATE_INVOICE\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/line_update_response',\n  $defs: {\n    line_update_response: {\n      type: 'object',\n      properties: {\n        invoice: {\n          $ref: '#/$defs/invoice'\n        },\n        line: {\n          $ref: '#/$defs/invoice_line'\n        }\n      }\n    },\n    invoice: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'Unique identifier for the invoice'\n        },\n        acomptes: {\n          type: 'array',\n          description: 'List of advance payments',\n          items: {\n            type: 'object',\n            properties: {\n              _id: {\n                type: 'string'\n              },\n              amount: {\n                type: 'number',\n                description: 'Amount of the advance payment'\n              },\n              amount_ht: {\n                type: 'number',\n                description: 'Amount without tax'\n              },\n              credit: {\n                type: 'boolean'\n              },\n              date: {\n                type: 'string',\n                format: 'date-time'\n              }\n            }\n          }\n        },\n        base_currency: {\n          type: 'string',\n          description: 'The currency with which the company works for this invoice'\n        },\n        client: {\n          type: 'string',\n          description: 'Reference to the client'\n        },\n        client_address: {\n          type: 'string',\n          description: 'Address of the client'\n        },\n        client_city: {\n          type: 'string',\n          description: 'City of the client'\n        },\n        client_country: {\n          type: 'string',\n          description: 'Country of the client'\n        },\n        client_email: {\n          type: 'string',\n          description: 'Email of the client'\n        },\n        client_name: {\n          type: 'string',\n          description: 'Name of the client'\n        },\n        client_phone: {\n          type: 'string',\n          description: 'Phone number of the client'\n        },\n        client_zip_code: {\n          type: 'string',\n          description: 'Zip code of the client'\n        },\n        company: {\n          type: 'string',\n          description: 'Reference to the company'\n        },\n        company_name: {\n          type: 'string',\n          description: 'Name of the company'\n        },\n        date: {\n          type: 'string',\n          description: 'Date of the invoice',\n          format: 'date-time'\n        },\n        invoice_lines: {\n          type: 'array',\n          description: 'List of invoice lines',\n          items: {\n            $ref: '#/$defs/invoice_line'\n          }\n        },\n        number: {\n          type: 'string',\n          description: 'Invoice number'\n        },\n        payment_expiry_date: {\n          type: 'string',\n          description: 'Expiry date for payment',\n          format: 'date-time'\n        },\n        payments: {\n          type: 'array',\n          description: 'List of payments',\n          items: {\n            type: 'object',\n            properties: {\n              _id: {\n                type: 'string',\n                description: 'Unique identifier for the payment'\n              },\n              amount: {\n                type: 'number',\n                description: 'Amount of the payment'\n              },\n              check_number: {\n                type: 'string',\n                description: 'Check number if applicable'\n              },\n              date: {\n                type: 'string',\n                description: 'Date of the payment',\n                format: 'date-time'\n              },\n              method_name: {\n                type: 'string',\n                description: 'Name of the payment method'\n              },\n              mode: {\n                type: 'string',\n                description: 'Reference to the payment method'\n              }\n            }\n          }\n        },\n        state: {\n          type: 'string',\n          description: 'State of the invoice',\n          enum: [            'draft',\n            'waiting',\n            'paid',\n            'notpaid',\n            'late',\n            'inactive'\n          ]\n        },\n        title: {\n          type: 'string',\n          description: 'Short description or label of the invoice'\n        },\n        total_ht: {\n          type: 'number',\n          description: 'Total amount without tax'\n        },\n        total_ttc: {\n          type: 'number',\n          description: 'Total amount with tax'\n        },\n        total_tva: {\n          type: 'number',\n          description: 'Total tax amount'\n        },\n        type: {\n          type: 'string',\n          description: 'Type of the invoice',\n          enum: [            'invoice',\n            'credit',\n            'sold',\n            'advance',\n            'external',\n            'external_credit'\n          ]\n        },\n        VATRates: {\n          type: 'array',\n          description: 'List of VAT rates applied to the invoice',\n          items: {\n            $ref: '#/$defs/vat_rate'\n          }\n        }\n      }\n    },\n    invoice_line: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'Unique identifier for the line'\n        },\n        description: {\n          type: 'string',\n          description: 'Description of the line'\n        },\n        price_ht: {\n          type: 'number',\n          description: 'Price without tax'\n        },\n        quantity: {\n          type: 'number',\n          description: 'Quantity'\n        },\n        reference: {\n          type: 'string',\n          description: 'Reference of the product'\n        },\n        title: {\n          type: 'string',\n          description: 'Title of the line'\n        },\n        total_ht: {\n          type: 'number',\n          description: 'Total amount without tax'\n        },\n        total_ttc: {\n          type: 'number',\n          description: 'Total amount with tax'\n        },\n        tva_rate: {\n          type: 'number',\n          description: 'VAT rate'\n        },\n        type: {\n          type: 'string',\n          description: 'Type of the line',\n          enum: [            'product',\n            'header',\n            'subtotal',\n            'globalDiscount'\n          ]\n        },\n        unit: {\n          type: 'string',\n          description: 'Unit of measurement'\n        }\n      }\n    },\n    vat_rate: {\n      type: 'object',\n      properties: {\n        amount: {\n          type: 'number',\n          description: 'Amount of VAT'\n        },\n        rate: {\n          type: 'string',\n          description: 'VAT rate'\n        },\n        total: {\n          type: 'number',\n          description: 'Total amount with this VAT rate'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      uid: {
        type: 'string',
      },
      lineUuid: {
        type: 'string',
      },
      description: {
        type: 'string',
        description: 'Description détaillée',
      },
      discount: {
        type: 'number',
        description: 'Remise en pourcentage',
      },
      price_ht: {
        type: 'number',
        description: 'Prix unitaire HT',
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
      tva_rate: {
        type: 'number',
        description: 'Taux de TVA (ex. 20 pour 20%)',
      },
      unit: {
        type: 'string',
        description: 'Unité de mesure (pièce, heure, kg, etc.)',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['uid', 'lineUuid'],
  },
  annotations: {},
};

export const handler = async (client: Wuro, args: Record<string, unknown> | undefined) => {
  const { lineUuid, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.invoices.line.update(lineUuid, body)),
    );
  } catch (error) {
    if (error instanceof Wuro.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
