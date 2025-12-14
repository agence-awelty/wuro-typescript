// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'wuro-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'invoices',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/invoices/payments-waiting',
  operationId: 'getWaitingInvoicePayments',
};

export const tool: Tool = {
  name: 'list_waiting_payments_invoices',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRécupère les factures qui sont en attente de paiement (état waiting ou late).\n\n**Réponse:**\n- `invoices`: Liste des factures en attente\n- `total`: Nombre de factures\n- `totalAmount`: Somme des montants restant à payer (total_nettopay)\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/invoice_list_waiting_payments_response',\n  $defs: {\n    invoice_list_waiting_payments_response: {\n      type: 'object',\n      properties: {\n        invoices: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              _id: {\n                type: 'string'\n              },\n              client_name: {\n                type: 'string'\n              },\n              number: {\n                type: 'string'\n              },\n              payment_expiry_date: {\n                type: 'string',\n                format: 'date-time'\n              },\n              total_nettopay: {\n                type: 'number'\n              }\n            }\n          }\n        },\n        total: {\n          type: 'integer'\n        },\n        totalAmount: {\n          type: 'number',\n          description: 'Somme des montants restant à payer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
      },
      skip: {
        type: 'integer',
      },
      state: {
        type: 'array',
        description: 'Filtre par état (par défaut waiting et late)',
        items: {
          type: 'string',
          enum: ['waiting', 'late'],
        },
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.invoices.listWaitingPayments(body)));
  } catch (error) {
    if (error instanceof Wuro.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
