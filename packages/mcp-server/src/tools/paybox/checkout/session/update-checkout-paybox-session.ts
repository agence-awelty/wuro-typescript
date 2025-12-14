// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'paybox.checkout.session',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/paybox/checkout/session/{id}',
  operationId: 'getPayboxCheckoutSessionById',
};

export const tool: Tool = {
  name: 'update_checkout_paybox_session',
  description:
    "Récupère les détails d'une session de paiement Paybox existante.\n\n**Utilisation:**\n- Permet de vérifier l'état d'une session de paiement\n- Utile pour reprendre un paiement interrompu\n",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
    required: ['id'],
  },
  annotations: {},
};

export const handler = async (client: Wuro, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.paybox.checkout.session.update(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
