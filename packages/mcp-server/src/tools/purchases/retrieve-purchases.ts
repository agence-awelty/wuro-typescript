// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'wuro-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'purchases',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/purchase/{uid}',
  operationId: 'getPurchase',
};

export const tool: Tool = {
  name: 'retrieve_purchases',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRécupère les informations détaillées d'un achat par son identifiant.\n\nLes informations incluent :\n- Informations du fournisseur\n- Lignes de l'achat (produits/services, quantités, prix)\n- Montants (HT, TVA, TTC)\n- État et échéances de paiement\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/purchase_retrieve_response',\n  $defs: {\n    purchase_retrieve_response: {\n      type: 'object',\n      properties: {\n        purchase: {\n          $ref: '#/$defs/purchase'\n        }\n      }\n    },\n    purchase: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'Unique identifier for the purchase'\n        },\n        analytical_code: {\n          type: 'string'\n        },\n        bank_reconciliate_total: {\n          type: 'number'\n        },\n        bank_reconciliation_status: {\n          type: 'string',\n          enum: [            'unreconciliated',\n            'reconciliated',\n            'partialreconciliated'\n          ]\n        },\n        bank_reconciliations: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        base_currency: {\n          type: 'string'\n        },\n        categories: {\n          type: 'array',\n          description: 'Purchase category references',\n          items: {\n            type: 'string'\n          }\n        },\n        company: {\n          type: 'string',\n          description: 'Reference to the company'\n        },\n        createdAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        creditForPurchase: {\n          type: 'string',\n          description: 'Reference to original purchase for credit notes'\n        },\n        currency: {\n          type: 'string'\n        },\n        date: {\n          type: 'string',\n          description: 'Purchase date',\n          format: 'date-time'\n        },\n        dateRecord: {\n          type: 'string',\n          description: 'Record date',\n          format: 'date-time'\n        },\n        exported: {\n          type: 'boolean'\n        },\n        exportedFEC: {\n          type: 'boolean'\n        },\n        exportedPDF: {\n          type: 'boolean'\n        },\n        invoiceNumber: {\n          type: 'string',\n          description: 'Supplier invoice number'\n        },\n        lines: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              title: {\n                type: 'string'\n              },\n              totalHt: {\n                type: 'number'\n              },\n              totalTtc: {\n                type: 'number'\n              },\n              totalTva: {\n                type: 'number'\n              },\n              tva: {\n                type: 'string'\n              },\n              tvaRate: {\n                type: 'number'\n              },\n              type: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        number: {\n          type: 'string',\n          description: 'Purchase number'\n        },\n        payment_date: {\n          type: 'string',\n          format: 'date-time'\n        },\n        payment_expiry_date: {\n          type: 'string',\n          format: 'date-time'\n        },\n        payment_methods: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        payments: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              amount: {\n                type: 'number'\n              },\n              check_number: {\n                type: 'string'\n              },\n              currency: {\n                type: 'string'\n              },\n              date: {\n                type: 'string',\n                format: 'date-time'\n              },\n              method_name: {\n                type: 'string'\n              },\n              mode: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        state: {\n          type: 'string',\n          enum: [            'draft',\n            'waiting',\n            'paid',\n            'to_pay',\n            'notpaid',\n            'inactive'\n          ]\n        },\n        supplier: {\n          type: 'string',\n          description: 'Reference to supplier (client)'\n        },\n        supplier_code: {\n          type: 'string',\n          description: 'Supplier code'\n        },\n        supplier_name: {\n          type: 'string',\n          description: 'Supplier name'\n        },\n        supplierReverseCharge: {\n          type: 'boolean',\n          description: 'Reverse charge applicable'\n        },\n        supplierTvaNumber: {\n          type: 'string',\n          description: 'Supplier VAT number'\n        },\n        total_ht: {\n          type: 'number',\n          description: 'Total without tax'\n        },\n        total_ttc: {\n          type: 'number',\n          description: 'Total with tax'\n        },\n        total_tva: {\n          type: 'number',\n          description: 'Total VAT amount'\n        },\n        type: {\n          type: 'string',\n          enum: [            'purchase_old',\n            'purchase',\n            'purchase_credit'\n          ]\n        },\n        updatedAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        url: {\n          type: 'string',\n          description: 'Attached file URL'\n        },\n        VatRates: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/vat_rate'\n          }\n        }\n      }\n    },\n    vat_rate: {\n      type: 'object',\n      properties: {\n        amount: {\n          type: 'number',\n          description: 'Amount of VAT'\n        },\n        rate: {\n          type: 'string',\n          description: 'VAT rate'\n        },\n        total: {\n          type: 'number',\n          description: 'Total amount with this VAT rate'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      uid: {
        type: 'string',
      },
      populate: {
        type: 'string',
        description: 'Relations à inclure (ex. "supplier")',
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.purchases.retrieve(uid, body)));
  } catch (error) {
    if (error instanceof Wuro.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
