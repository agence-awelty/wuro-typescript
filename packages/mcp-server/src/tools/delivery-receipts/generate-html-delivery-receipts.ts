// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'wuro-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'delivery_receipts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/delivery-receipt/{uid}/html',
  operationId: 'generateReceiptHTML',
};

export const tool: Tool = {
  name: 'generate_html_delivery_receipts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGénère et retourne le rendu HTML du bon de livraison.\n\nCette route est utile pour :\n- Prévisualiser le bon avant génération PDF\n- Intégrer le contenu dans une page web\n- Personnaliser l'affichage\n\n## Réponse\n\nLa réponse inclut :\n- **template** : Le HTML complet du bon de livraison\n- **metadata** : Les informations clés du bon (client, numéro, dates, etc.)\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/delivery_receipt_generate_html_response',\n  $defs: {\n    delivery_receipt_generate_html_response: {\n      type: 'object',\n      properties: {\n        metadata: {\n          type: 'object',\n          description: 'Informations clés du bon',\n          properties: {\n            _id: {\n              type: 'string'\n            },\n            client_name: {\n              type: 'string'\n            },\n            date: {\n              type: 'string',\n              format: 'date-time'\n            },\n            number: {\n              type: 'string'\n            }\n          }\n        },\n        template: {\n          type: 'string',\n          description: 'Rendu HTML complet du bon de livraison'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      uid: {
        type: 'string',
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.deliveryReceipts.generateHTML(uid)));
  } catch (error) {
    if (error instanceof Wuro.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
