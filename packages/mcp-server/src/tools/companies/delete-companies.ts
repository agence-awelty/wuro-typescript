// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'companies',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/company/{uid}',
  operationId: 'deleteCompany',
};

export const tool: Tool = {
  name: 'delete_companies',
  description:
    "Supprime (désactive) une entreprise.\n\n**Restrictions:**\n- L'utilisateur doit être administrateur de l'entreprise\n- L'état passe à 'inactive' (soft delete)\n\n**Événement déclenché:** DELETE_COMPANY\n",
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
  const response = await client.companies.delete(uid).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
