// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'wuro-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'users',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/user/{uid}/invitations',
  operationId: 'getUserInvitations',
};

export const tool: Tool = {
  name: 'list_invitations_users',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRécupère la liste des invitations en attente pour un utilisateur.\n\n**Types d'invitations:**\n- Invitation à rejoindre une entreprise\n- Invitation à un projet ou équipe\n\n**États des invitations:**\n- `pending` : En attente de réponse\n- `accepted` : Acceptée\n- `refused` : Refusée\n- `expired` : Expirée\n\n**Utilisation:**\n- Affichage des invitations en attente sur le dashboard utilisateur\n- Gestion des demandes d'ajout à des entreprises\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/user_list_invitations_response',\n  $defs: {\n    user_list_invitations_response: {\n      type: 'object',\n      properties: {\n        invitations: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              _id: {\n                type: 'string'\n              },\n              company: {\n                type: 'object',\n                description: 'Entreprise qui a envoyé l\\'invitation',\n                additionalProperties: true\n              },\n              createdAt: {\n                type: 'string',\n                format: 'date-time'\n              },\n              state: {\n                type: 'string',\n                enum: [                  'pending',\n                  'accepted',\n                  'refused',\n                  'expired'\n                ]\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.users.listInvitations(uid)));
  } catch (error) {
    if (error instanceof Wuro.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
