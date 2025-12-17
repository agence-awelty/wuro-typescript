// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'paybox.checkout.session',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/paybox/checkout/session',
  operationId: 'getPayboxCheckoutSession',
};

export const tool: Tool = {
  name: 'list_checkout_paybox_session',
  description:
    "Initialise une nouvelle session de paiement Paybox pour permettre au client de payer.\n\n**Utilisation:**\n- Retourne les informations nécessaires pour rediriger le client vers Paybox\n- La session contient l'URL de paiement et les paramètres de sécurité\n\n**Prérequis:**\n- L'entreprise doit avoir configuré ses identifiants Paybox\n",
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
  const response = await client.paybox.checkout.session.list().asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
