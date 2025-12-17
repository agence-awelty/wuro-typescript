// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'invoices',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/invoice/{uid}',
  operationId: 'deleteInvoice',
};

export const tool: Tool = {
  name: 'delete_invoices',
  description:
    "Supprime (désactive) une facture.\n\n**Restrictions:**\n- Seules les factures en brouillon non numérotées peuvent être supprimées\n- Une facture avec un numéro ou un numberRecord ne peut pas être supprimée\n- L'état passe à 'inactive' (soft delete)\n\n**Événement déclenché:** DELETE_INVOICE\n",
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
  const response = await client.invoices.delete(uid).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
