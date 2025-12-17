// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'purchases',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/purchases/stats',
  operationId: 'getPurchaseStats',
};

export const tool: Tool = {
  name: 'get_stats_purchases',
  description:
    "Récupère des statistiques agrégées sur les achats de l'entreprise.\n\nLes statistiques incluent généralement :\n- Total des achats par période\n- Répartition par fournisseur\n- Montants en attente de paiement\n",
  inputSchema: {
    type: 'object',
    properties: {},
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Wuro, args: Record<string, unknown> | undefined) => {
  const response = await client.purchases.getStats().asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
