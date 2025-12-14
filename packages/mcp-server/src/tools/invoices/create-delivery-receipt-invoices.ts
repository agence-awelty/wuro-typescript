// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'invoices',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/invoice/{uid}/delivery-receipt',
  operationId: 'createDeliveryReceiptFromInvoice',
};

export const tool: Tool = {
  name: 'create_delivery_receipt_invoices',
  description:
    "Génère un bon de livraison (Receipt) à partir d'une facture.\n\nLe bon de livraison reprend les lignes de la facture.\n",
  inputSchema: {
    type: 'object',
    properties: {
      uid: {
        type: 'string',
      },
    },
    required: ['uid'],
  },
  annotations: {},
};

export const handler = async (client: Wuro, args: Record<string, unknown> | undefined) => {
  const { uid, ...body } = args as any;
  const response = await client.invoices.createDeliveryReceipt(uid).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
