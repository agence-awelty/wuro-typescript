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
  httpPath: '/user/{uid}/notifications',
  operationId: 'getUserNotifications',
};

export const tool: Tool = {
  name: 'list_notifications_users',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRécupère la liste des notifications pour un utilisateur.\n\n**Types de notifications:**\n- Factures en retard\n- Devis en attente de validation\n- Paiements reçus\n- Invitations reçues\n- Actions requises\n\n**Gestion des notifications:**\n- Les notifications non lues sont marquées comme telles\n- Les notifications peuvent être archivées\n\n**Utilisation:**\n- Centre de notifications\n- Badge de notifications non lues\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/user_list_notifications_response',\n  $defs: {\n    user_list_notifications_response: {\n      type: 'object',\n      properties: {\n        notifications: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              _id: {\n                type: 'string'\n              },\n              createdAt: {\n                type: 'string',\n                format: 'date-time'\n              },\n              message: {\n                type: 'string',\n                description: 'Message de la notification'\n              },\n              read: {\n                type: 'boolean',\n                description: 'Notification lue ou non'\n              },\n              type: {\n                type: 'string',\n                description: 'Type de notification'\n              }\n            }\n          }\n        },\n        unreadCount: {\n          type: 'integer',\n          description: 'Nombre de notifications non lues'\n        }\n      }\n    }\n  }\n}\n```",
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.users.listNotifications(uid)));
  } catch (error) {
    if (error instanceof Wuro.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
