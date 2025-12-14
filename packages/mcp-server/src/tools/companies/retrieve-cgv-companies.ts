// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'wuro-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'companies',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/company/{uid}/cgv',
  operationId: 'getCompanyCgv',
};

export const tool: Tool = {
  name: 'retrieve_cgv_companies',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRécupère les conditions générales de vente (CGV) configurées pour l'entreprise.\n\n**Réponse:**\n- `cgv` : Texte des CGV personnalisées\n- `cgv_link` : Lien vers un document externe de CGV\n- `cgv_wuro` : Indique si les CGV par défaut de Wuro sont utilisées\n\n**Utilisation:**\n- Affichage sur les devis et factures\n- Page de mentions légales\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/company_retrieve_cgv_response',\n  $defs: {\n    company_retrieve_cgv_response: {\n      type: 'object',\n      properties: {\n        cgv: {\n          type: 'string',\n          description: 'Texte des conditions générales de vente'\n        },\n        cgv_link: {\n          type: 'string',\n          description: 'Lien vers le document des CGV'\n        },\n        cgv_wuro: {\n          type: 'boolean',\n          description: 'Utiliser les CGV par défaut de Wuro'\n        }\n      }\n    }\n  }\n}\n```",
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.companies.retrieveCgv(uid)));
  } catch (error) {
    if (error instanceof Wuro.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
