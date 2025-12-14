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
  httpPath: '/invoices/payments',
  operationId: 'getInvoicePayments',
};

export const tool: Tool = {
  name: 'list_payments_invoices',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRécupère la liste des paiements enregistrés sur les factures.\n\n**Filtres spécifiques aux paiements:**\n- `minDate` / `maxDate` / `date`: Date du paiement\n- `amount`: Montant du paiement\n- `method_name`: Nom du mode de paiement\n- `mode`: ID du mode de paiement\n\n**Réponse agrégée:**\n- `payments`: Liste des paiements avec informations de la facture associée\n- `count`: Nombre total de paiements\n- `total`: Somme des montants\n- `average`: Moyenne des montants\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/invoice_list_payments_response',\n  $defs: {\n    invoice_list_payments_response: {\n      type: 'object',\n      properties: {\n        average: {\n          type: 'number',\n          description: 'Moyenne des montants'\n        },\n        count: {\n          type: 'integer',\n          description: 'Nombre total de paiements'\n        },\n        payments: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              amount: {\n                type: 'number'\n              },\n              date: {\n                type: 'string',\n                format: 'date-time'\n              },\n              invoice: {\n                type: 'object',\n                properties: {\n                  client_name: {\n                    type: 'string'\n                  },\n                  invoice_id: {\n                    type: 'string'\n                  },\n                  number: {\n                    type: 'string'\n                  }\n                }\n              },\n              method_name: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        total: {\n          type: 'number',\n          description: 'Somme des montants'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
      },
      maxDate: {
        type: 'string',
        description: 'Date maximum du paiement',
        format: 'date-time',
      },
      minDate: {
        type: 'string',
        description: 'Date minimum du paiement',
        format: 'date-time',
      },
      mode: {
        type: 'string',
        description: 'ID du mode de paiement',
      },
      skip: {
        type: 'integer',
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.invoices.listPayments(body)));
  } catch (error) {
    if (error instanceof Wuro.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
