// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'stripe.checkout.session',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/stripe/checkout/session',
  operationId: 'getStripeCheckoutSession',
};

export const tool: Tool = {
  name: 'create_checkout_stripe_session',
  description:
    "Initialise une nouvelle session de paiement Stripe (Checkout Session).\n\n**Utilisation:**\n- Retourne une URL de redirection vers la page de paiement Stripe\n- La session est valide pour une durée limitée\n\n**Prérequis:**\n- L'entreprise doit avoir configuré ses clés API Stripe\n",
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
  const response = await client.stripe.checkout.session.create().asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
