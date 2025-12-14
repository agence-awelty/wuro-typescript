// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'paybox_paiement_done',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/paybox-paiement-done/{transactionId}',
  operationId: 'checkPaymentPost',
};

export const tool: Tool = {
  name: 'process_callback_paybox_paiement_done',
  description:
    'Traite le callback de notification de paiement envoyé par Paybox.\n\n**Comportement:**\n- Valide la signature de la requête Paybox\n- Met à jour le statut de la commande/facture associée\n- Déclenche les événements de paiement appropriés\n\n**Sécurité:**\n- Cette route est appelée serveur-à-serveur par Paybox\n- La signature doit être validée avant traitement\n',
  inputSchema: {
    type: 'object',
    properties: {
      transactionId: {
        type: 'string',
      },
    },
    required: ['transactionId'],
  },
  annotations: {},
};

export const handler = async (client: Wuro, args: Record<string, unknown> | undefined) => {
  const { transactionId, ...body } = args as any;
  const response = await client.payboxPaiementDone.processCallback(transactionId).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
