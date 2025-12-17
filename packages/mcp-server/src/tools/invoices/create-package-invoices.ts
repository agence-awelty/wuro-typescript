// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'wuro-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'invoices',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/invoices/package',
  operationId: 'generateInvoicePackage',
};

export const tool: Tool = {
  name: 'create_package_invoices',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGénère une archive ZIP contenant les PDFs de plusieurs factures.\n\n**Comportement:**\n- Si le nombre de factures > seuil configuré ou `DEFERRED=true`, l'archive est générée en arrière-plan\n- Un objet Package est créé pour suivre la progression\n- Une fois terminé, l'archive est téléchargeable via GET /package/{uid}/download\n\n**Mode différé:**\n- Retourne immédiatement avec `newPackage` et un message\n- Le package passe par les états: created → finished (ou error)\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/invoice_create_package_response',\n  $defs: {\n    invoice_create_package_response: {\n      type: 'object',\n      properties: {\n        message: {\n          type: 'string'\n        },\n        newPackage: {\n          type: 'object',\n          description: 'Objet Package avec état et URL',\n          additionalProperties: true\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      invoicesId: {
        type: 'array',
        description: 'Liste des IDs de factures à inclure',
        items: {
          type: 'string',
        },
      },
      DEFERRED: {
        type: 'boolean',
        description: 'Forcer le mode différé (génération en arrière-plan)',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['invoicesId'],
  },
  annotations: {},
};

export const handler = async (client: Wuro, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.invoices.createPackage(body)));
  } catch (error) {
    if (error instanceof Wuro.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
