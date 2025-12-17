// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'users',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/user',
  operationId: 'deleteCurrentUser',
};

export const tool: Tool = {
  name: 'delete_users',
  description:
    "Supprime (désactive) l'utilisateur actuellement connecté.\n\n**Note:** L'utilisateur n'est pas réellement supprimé, son état passe à 'inactive'.\nRéservé à l'utilisateur système 'geswuro'.\n",
  inputSchema: {
    type: 'object',
    properties: {
      email: {
        type: 'string',
        description: "Email de l'utilisateur à supprimer",
      },
    },
    required: ['email'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Wuro, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.users.delete(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
