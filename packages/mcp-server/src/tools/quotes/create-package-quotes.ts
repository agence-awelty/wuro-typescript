// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'wuro-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'quotes',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/quotes/package',
  operationId: 'generateQuotePackage',
};

export const tool: Tool = {
  name: 'create_package_quotes',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGénère une archive ZIP contenant les PDFs de plusieurs devis.\n\n**Comportement:**\n- Si le nombre de devis > seuil configuré ou `DEFERRED=true`, l'archive est générée en arrière-plan\n- Un objet Package est créé pour suivre la progression\n- Une fois terminé, l'archive est téléchargeable via GET /package/{uid}/download\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/quote_create_package_response',\n  $defs: {\n    quote_create_package_response: {\n      type: 'object',\n      properties: {\n        message: {\n          type: 'string'\n        },\n        newPackage: {\n          type: 'object',\n          additionalProperties: true\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      quotesId: {
        type: 'array',
        description: 'Liste des IDs de devis à inclure',
        items: {
          type: 'string',
        },
      },
      DEFERRED: {
        type: 'boolean',
        description: 'Forcer le mode différé',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['quotesId'],
  },
  annotations: {},
};

export const handler = async (client: Wuro, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.quotes.createPackage(body)));
  } catch (error) {
    if (error instanceof Wuro.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
