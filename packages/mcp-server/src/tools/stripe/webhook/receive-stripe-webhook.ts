// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'stripe.webhook',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/stripe/webhook',
  operationId: 'stripeWebhook',
};

export const tool: Tool = {
  name: 'receive_stripe_webhook',
  description:
    'Reçoit et traite les événements webhook envoyés par Stripe.\n\n**Événements traités:**\n- `checkout.session.completed` : Paiement réussi\n- `payment_intent.succeeded` : Intention de paiement réussie\n- `payment_intent.payment_failed` : Échec de paiement\n- `invoice.paid` : Facture payée (abonnements)\n\n**Sécurité:**\n- La signature du webhook est validée avec le secret webhook Stripe\n- Seuls les événements signés correctement sont traités\n\n**Important:**\n- Cette route ne doit pas être modifiée (vérification du endpoint côté Stripe)\n',
  inputSchema: {
    type: 'object',
    properties: {},
    required: [],
  },
  annotations: {},
};

export const handler = async (client: Wuro, args: Record<string, unknown> | undefined) => {
  const response = await client.stripe.webhook.receive().asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
