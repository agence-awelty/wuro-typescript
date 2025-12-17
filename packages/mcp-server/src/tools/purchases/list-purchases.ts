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
  httpPath: '/purchases',
  operationId: 'getAllPurchases',
};

export const tool: Tool = {
  name: 'list_purchases',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRécupère la liste de tous les achats/factures fournisseurs avec pagination et filtres.\n\nLes achats permettent de suivre les dépenses de l'entreprise (factures fournisseurs,\nnotes de frais, etc.).\n\n## États disponibles\n\n- **draft** : Brouillon (pas encore validé)\n- **waiting** : En attente de paiement\n- **to_pay** : À payer\n- **paid** : Payé\n- **notpaid** : Impayé (échéance dépassée)\n- **inactive** : Supprimé (soft delete)\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/purchase_list_response',\n  $defs: {\n    purchase_list_response: {\n      type: 'object',\n      properties: {\n        limit: {\n          type: 'integer',\n          description: 'Limite utilisée'\n        },\n        purchases: {\n          type: 'array',\n          description: 'Tableau des achats',\n          items: {\n            $ref: '#/$defs/purchase'\n          }\n        },\n        skip: {\n          type: 'integer',\n          description: 'Offset utilisé'\n        },\n        total: {\n          type: 'integer',\n          description: 'Nombre total d\\'achats'\n        }\n      }\n    },\n    purchase: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'Unique identifier for the purchase'\n        },\n        analytical_code: {\n          type: 'string'\n        },\n        bank_reconciliate_total: {\n          type: 'number'\n        },\n        bank_reconciliation_status: {\n          type: 'string',\n          enum: [            'unreconciliated',\n            'reconciliated',\n            'partialreconciliated'\n          ]\n        },\n        bank_reconciliations: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        base_currency: {\n          type: 'string'\n        },\n        categories: {\n          type: 'array',\n          description: 'Purchase category references',\n          items: {\n            type: 'string'\n          }\n        },\n        company: {\n          type: 'string',\n          description: 'Reference to the company'\n        },\n        createdAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        creditForPurchase: {\n          type: 'string',\n          description: 'Reference to original purchase for credit notes'\n        },\n        currency: {\n          type: 'string'\n        },\n        date: {\n          type: 'string',\n          description: 'Purchase date',\n          format: 'date-time'\n        },\n        dateRecord: {\n          type: 'string',\n          description: 'Record date',\n          format: 'date-time'\n        },\n        exported: {\n          type: 'boolean'\n        },\n        exportedFEC: {\n          type: 'boolean'\n        },\n        exportedPDF: {\n          type: 'boolean'\n        },\n        invoiceNumber: {\n          type: 'string',\n          description: 'Supplier invoice number'\n        },\n        lines: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              title: {\n                type: 'string'\n              },\n              totalHt: {\n                type: 'number'\n              },\n              totalTtc: {\n                type: 'number'\n              },\n              totalTva: {\n                type: 'number'\n              },\n              tva: {\n                type: 'string'\n              },\n              tvaRate: {\n                type: 'number'\n              },\n              type: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        number: {\n          type: 'string',\n          description: 'Purchase number'\n        },\n        payment_date: {\n          type: 'string',\n          format: 'date-time'\n        },\n        payment_expiry_date: {\n          type: 'string',\n          format: 'date-time'\n        },\n        payment_methods: {\n          type: 'array',\n          items: {\n            type: 'string'\n          }\n        },\n        payments: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              amount: {\n                type: 'number'\n              },\n              check_number: {\n                type: 'string'\n              },\n              currency: {\n                type: 'string'\n              },\n              date: {\n                type: 'string',\n                format: 'date-time'\n              },\n              method_name: {\n                type: 'string'\n              },\n              mode: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        state: {\n          type: 'string',\n          enum: [            'draft',\n            'waiting',\n            'paid',\n            'to_pay',\n            'notpaid',\n            'inactive'\n          ]\n        },\n        supplier: {\n          type: 'string',\n          description: 'Reference to supplier (client)'\n        },\n        supplier_code: {\n          type: 'string',\n          description: 'Supplier code'\n        },\n        supplier_name: {\n          type: 'string',\n          description: 'Supplier name'\n        },\n        supplierReverseCharge: {\n          type: 'boolean',\n          description: 'Reverse charge applicable'\n        },\n        supplierTvaNumber: {\n          type: 'string',\n          description: 'Supplier VAT number'\n        },\n        total_ht: {\n          type: 'number',\n          description: 'Total without tax'\n        },\n        total_ttc: {\n          type: 'number',\n          description: 'Total with tax'\n        },\n        total_tva: {\n          type: 'number',\n          description: 'Total VAT amount'\n        },\n        type: {\n          type: 'string',\n          enum: [            'purchase_old',\n            'purchase',\n            'purchase_credit'\n          ]\n        },\n        updatedAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        url: {\n          type: 'string',\n          description: 'Attached file URL'\n        },\n        VatRates: {\n          type: 'array',\n          items: {\n            $ref: '#/$defs/vat_rate'\n          }\n        }\n      }\n    },\n    vat_rate: {\n      type: 'object',\n      properties: {\n        amount: {\n          type: 'number',\n          description: 'Amount of VAT'\n        },\n        rate: {\n          type: 'string',\n          description: 'VAT rate'\n        },\n        total: {\n          type: 'number',\n          description: 'Total amount with this VAT rate'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
        description: "Nombre maximum d'achats à retourner",
      },
      skip: {
        type: 'integer',
        description: "Nombre d'achats à ignorer (pagination)",
      },
      sort: {
        type: 'string',
        description: 'Champ et direction de tri (ex. "date:-1" pour les plus récents)',
      },
      state: {
        type: 'string',
        description: "Filtrer par état de l'achat",
        enum: ['draft', 'waiting', 'paid', 'to_pay', 'notpaid', 'inactive'],
      },
      supplier: {
        type: 'string',
        description: 'Filtrer par fournisseur (ID du fournisseur)',
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.purchases.list(body)));
  } catch (error) {
    if (error instanceof Wuro.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
