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
  httpPath: '/invoices/logs',
  operationId: 'getInvoiceLogs',
};

export const tool: Tool = {
  name: 'get_logs_invoices',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRécupère les logs d'actions effectuées sur les factures (création, modification, envoi, etc.).\n\nUtile pour l'audit et le suivi des modifications.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/invoice_get_logs_response',\n  $defs: {\n    invoice_get_logs_response: {\n      type: 'object',\n      properties: {\n        limit: {\n          type: 'integer'\n        },\n        logs: {\n          type: 'array',\n          items: {\n            type: 'object',\n            additionalProperties: true\n          }\n        },\n        skip: {\n          type: 'integer'\n        },\n        total: {\n          type: 'integer'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      invoice: {
        type: 'string',
        description: 'Filtre par ID de facture',
      },
      limit: {
        type: 'integer',
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.invoices.getLogs(body)));
  } catch (error) {
    if (error instanceof Wuro.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
