// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'order',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/order/{uid}/payment-infos',
  operationId: 'getOrderPaymentInfos',
};

export const tool: Tool = {
  name: 'retrieve_payment_infos_order',
  description:
    "Récupère les informations de paiement associées à une commande.\n\n**Informations retournées:**\n- URL de paiement (si applicable)\n- Statut du paiement\n- Historique des tentatives de paiement\n- Détails de la transaction\n\n**Utilisation:**\n- Affichage du statut de paiement au client\n- Génération d'un nouveau lien de paiement si nécessaire\n",
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
    readOnlyHint: true,
  },
};

export const handler = async (client: Wuro, args: Record<string, unknown> | undefined) => {
  const { uid, ...body } = args as any;
  const response = await client.order.retrievePaymentInfos(uid).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
