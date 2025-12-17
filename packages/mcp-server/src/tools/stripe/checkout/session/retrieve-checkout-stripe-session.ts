// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'stripe.checkout.session',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/stripe/checkout/session/{id}',
  operationId: 'getStripeCheckoutSessionById',
};

export const tool: Tool = {
  name: 'retrieve_checkout_stripe_session',
  description:
    "Récupère les détails d'une session de paiement Stripe existante.\n\n**Informations retournées:**\n- Statut du paiement (paid, unpaid, expired)\n- Détails du client et de la transaction\n- Montant et devise\n",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Wuro, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.stripe.checkout.session.retrieve(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
