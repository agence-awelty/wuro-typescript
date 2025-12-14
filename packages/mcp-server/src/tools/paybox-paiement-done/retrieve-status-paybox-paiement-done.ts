// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'paybox_paiement_done',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/paybox-paiement-done/{transactionId}',
  operationId: 'checkPaymentGet',
};

export const tool: Tool = {
  name: 'retrieve_status_paybox_paiement_done',
  description:
    "Vérifie le statut d'un paiement Paybox à partir de l'ID de transaction.\n\n**Utilisation:**\n- Appelé automatiquement par Paybox après un paiement\n- Peut être utilisé pour vérifier manuellement le statut\n\n**Réponse:**\n- Retourne le statut actuel de la transaction (succès, échec, en attente)\n",
  inputSchema: {
    type: 'object',
    properties: {
      transactionId: {
        type: 'string',
      },
    },
    required: ['transactionId'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Wuro, args: Record<string, unknown> | undefined) => {
  const { transactionId, ...body } = args as any;
  const response = await client.payboxPaiementDone.retrieveStatus(transactionId).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
