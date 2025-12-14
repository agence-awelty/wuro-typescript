// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'wuro-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'purchases',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/purchase/{uid}',
  operationId: 'updatePurchase',
};

export const tool: Tool = {
  name: 'update_purchases',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nMet à jour un achat existant.\n\nVous pouvez modifier :\n- Les informations fournisseur\n- Les lignes de l'achat\n- Les dates et échéances\n- L'état (pour marquer comme payé, etc.)\n\n## Événement déclenché\n\nUn événement `UPDATE_PURCHASE` est émis après la mise à jour.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/purchase_update_response',\n  $defs: {\n    purchase_update_response: {\n      type: 'object',\n      properties: {\n        updatedPurchase: {\n          $ref: '#/$defs/purchase'\n        }\n      }\n    },\n    purchase: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'Unique identifier for the purchase'\n        },\n        analytical_code: {\n          type: 'string'\n        },\n        bank_reconciliate_total: {\n          type: 'number'\n        },\n        bank_reconciliation_status: {\n          type: 'string',\n          enum: [            'unreconciliated',\n            'reconciliated',\n            'partialreconciliated'\n          ]\n        },\n        bank_reconciliations: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        base_currency: {\n          type: 'string'\n        },\n        categories: {\n          type: 'array',\n          description: 'Purchase category references',\n          items: {\n            type: 'string'\n          }\n        },\n        company: {\n          type: 'string',\n          description: 'Reference to the company'\n        },\n        createdAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        creditForPurchase: {\n          type: 'string',\n          description: 'Reference to original purchase for credit notes'\n        },\n        currency: {\n          type: 'string'\n        },\n        date: {\n          type: 'string',\n          description: 'Purchase date',\n          format: 'date-time'\n        },\n        dateRecord: {\n          type: 'string',\n          description: 'Record date',\n          format: 'date-time'\n        },\n        exported: {\n          type: 'boolean'\n        },\n        exportedFEC: {\n          type: 'boolean'\n        },\n        exportedPDF: {\n          type: 'boolean'\n        },\n        invoiceNumber: {\n          type: 'string',\n          description: 'Supplier invoice number'\n        },\n        lines: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              title: {\n                type: 'string'\n              },\n              totalHt: {\n                type: 'number'\n              },\n              totalTtc: {\n                type: 'number'\n              },\n              totalTva: {\n                type: 'number'\n              },\n              tva: {\n                type: 'string'\n              },\n              tvaRate: {\n                type: 'number'\n              },\n              type: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        number: {\n          type: 'string',\n          description: 'Purchase number'\n        },\n        payment_date: {\n          type: 'string',\n          format: 'date-time'\n        },\n        payment_expiry_date: {\n          type: 'string',\n          format: 'date-time'\n        },\n        payment_methods: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        payments: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              amount: {\n                type: 'number'\n              },\n              check_number: {\n                type: 'string'\n              },\n              currency: {\n                type: 'string'\n              },\n              date: {\n                type: 'string',\n                format: 'date-time'\n              },\n              method_name: {\n                type: 'string'\n              },\n              mode: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        state: {\n          type: 'string',\n          enum: [            'draft',\n            'waiting',\n            'paid',\n            'to_pay',\n            'notpaid',\n            'inactive'\n          ]\n        },\n        supplier: {\n          type: 'string',\n          description: 'Reference to supplier (client)'\n        },\n        supplier_code: {\n          type: 'string',\n          description: 'Supplier code'\n        },\n        supplier_name: {\n          type: 'string',\n          description: 'Supplier name'\n        },\n        supplierReverseCharge: {\n          type: 'boolean',\n          description: 'Reverse charge applicable'\n        },\n        supplierTvaNumber: {\n          type: 'string',\n          description: 'Supplier VAT number'\n        },\n        total_ht: {\n          type: 'number',\n          description: 'Total without tax'\n        },\n        total_ttc: {\n          type: 'number',\n          description: 'Total with tax'\n        },\n        total_tva: {\n          type: 'number',\n          description: 'Total VAT amount'\n        },\n        type: {\n          type: 'string',\n          enum: [            'purchase_old',\n            'purchase',\n            'purchase_credit'\n          ]\n        },\n        updatedAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        url: {\n          type: 'string',\n          description: 'Attached file URL'\n        },\n        VatRates: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/vat_rate'\n          }\n        }\n      }\n    },\n    vat_rate: {\n      type: 'object',\n      properties: {\n        amount: {\n          type: 'number',\n          description: 'Amount of VAT'\n        },\n        rate: {\n          type: 'string',\n          description: 'VAT rate'\n        },\n        total: {\n          type: 'number',\n          description: 'Total amount with this VAT rate'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      uid: {
        type: 'string',
      },
      analytical_code: {
        type: 'string',
      },
      categories: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      currency: {
        type: 'string',
      },
      date: {
        type: 'string',
        format: 'date-time',
      },
      invoiceNumber: {
        type: 'string',
      },
      lines: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            title: {
              type: 'string',
            },
            totalHt: {
              type: 'number',
            },
            totalTtc: {
              type: 'number',
            },
            totalTva: {
              type: 'number',
            },
            tvaRate: {
              type: 'number',
            },
            type: {
              type: 'string',
            },
          },
        },
      },
      payment_date: {
        type: 'string',
        format: 'date-time',
      },
      payment_expiry_date: {
        type: 'string',
        format: 'date-time',
      },
      payments: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            amount: {
              type: 'number',
            },
            date: {
              type: 'string',
              format: 'date-time',
            },
            mode: {
              type: 'string',
            },
          },
        },
      },
      state: {
        type: 'string',
        enum: ['draft', 'waiting', 'paid', 'to_pay', 'notpaid'],
      },
      supplier: {
        type: 'string',
      },
      supplier_code: {
        type: 'string',
      },
      supplier_name: {
        type: 'string',
      },
      supplierReverseCharge: {
        type: 'boolean',
      },
      supplierTvaNumber: {
        type: 'string',
      },
      total_ht: {
        type: 'number',
      },
      total_ttc: {
        type: 'number',
      },
      total_tva: {
        type: 'number',
      },
      type: {
        type: 'string',
        enum: ['purchase', 'purchase_credit'],
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
  annotations: {},
};

export const handler = async (client: Wuro, args: Record<string, unknown> | undefined) => {
  const { uid, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.purchases.update(uid, body)));
  } catch (error) {
    if (error instanceof Wuro.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
