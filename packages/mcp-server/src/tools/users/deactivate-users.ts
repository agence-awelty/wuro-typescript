// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'users',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/user/{uid}',
  operationId: 'deleteUser',
};

export const tool: Tool = {
  name: 'deactivate_users',
  description:
    "Désactive un utilisateur (soft delete).\n\n**Comportement:**\n- L'état de l'utilisateur passe à 'inactive'\n- L'utilisateur n'est pas supprimé de la base de données\n- Déclenche un événement DELETE_USER\n",
  inputSchema: {
    type: 'object',
    properties: {
      uid: {
        type: 'string',
      },
    },
    required: ['uid'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Wuro, args: Record<string, unknown> | undefined) => {
  const { uid, ...body } = args as any;
  const response = await client.users.deactivate(uid).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
