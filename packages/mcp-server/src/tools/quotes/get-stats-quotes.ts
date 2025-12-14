// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'wuro-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'quotes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/quotes/stats',
  operationId: 'getQuoteStats',
};

export const tool: Tool = {
  name: 'get_stats_quotes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCalcule et retourne des statistiques agrégées sur les devis.\n\n**Statistiques retournées:**\n- Totaux HT/TTC par état\n- Montants min/max\n- Répartition par type de devis\n\nUtilise les mêmes filtres que GET /quotes.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/quote_get_stats_response',\n  $defs: {\n    quote_get_stats_response: {\n      type: 'object',\n      properties: {\n        max: {\n          type: 'number'\n        },\n        min: {\n          type: 'number'\n        },\n        stats: {\n          type: 'object',\n          additionalProperties: true\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      maxDate: {
        type: 'string',
        format: 'date-time',
      },
      minDate: {
        type: 'string',
        format: 'date-time',
      },
      state: {
        type: 'string',
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.quotes.getStats(body)));
  } catch (error) {
    if (error instanceof Wuro.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
