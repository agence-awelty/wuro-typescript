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
  httpPath: '/company/container-stats',
  operationId: 'getCompanyContainerStats',
};

export const tool: Tool = {
  name: 'retrieve_container_stats_companies',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRécupère les statistiques d'utilisation du stockage pour l'entreprise courante.\n\n**Informations retournées:**\n- `containerSize` : Taille totale du conteneur de stockage (en octets)\n- `containerPrivateSize` : Taille du stockage privé (en octets)\n\n**Utilisation:**\n- Affichage de l'espace utilisé\n- Gestion des quotas de stockage\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/company_retrieve_container_stats_response',\n  $defs: {\n    company_retrieve_container_stats_response: {\n      type: 'object',\n      properties: {\n        containerPrivateSize: {\n          type: 'number',\n          description: 'Taille du stockage privé (en octets)'\n        },\n        containerSize: {\n          type: 'number',\n          description: 'Taille totale du conteneur (en octets)'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
  const { jq_filter } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.companies.retrieveContainerStats()));
  } catch (error) {
    if (error instanceof Wuro.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
