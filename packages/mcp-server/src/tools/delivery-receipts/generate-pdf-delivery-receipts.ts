// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'delivery_receipts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/delivery-receipt/{uid}/pdf',
  operationId: 'generateReceiptPDF',
};

export const tool: Tool = {
  name: 'generate_pdf_delivery_receipts',
  description:
    "Génère et retourne le PDF du bon de livraison.\n\nLe PDF est généré à partir du modèle de document configuré pour l'entreprise\net inclut toutes les informations du bon : client, lignes, dates, etc.\n\n## Paramètres de téléchargement\n\n- Par défaut, le PDF s'affiche dans le navigateur (inline)\n- Utilisez `force_download=true` pour forcer le téléchargement\n\n## Format de sortie\n\n- Content-Type: application/pdf\n- Content-Disposition: filename={numero_bon}.pdf\n",
  inputSchema: {
    type: 'object',
    properties: {
      uid: {
        type: 'string',
      },
      force_download: {
        type: 'boolean',
        description: "Si true, force le téléchargement du fichier au lieu de l'afficher",
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
  return asBinaryContentResult(await client.deliveryReceipts.generatePdf(uid, body).asResponse());
};

export default { metadata, tool, handler };
