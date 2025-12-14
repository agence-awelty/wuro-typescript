// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'quotes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/quote/{uid}/pdf',
  operationId: 'generateQuotePDF',
};

export const tool: Tool = {
  name: 'generate_pdf_quotes',
  description:
    "Génère et retourne le fichier PDF d'un devis.\n\n**Comportement:**\n- Utilise le modèle de document configuré pour l'entreprise\n- Le PDF inclut toutes les informations du devis (client, lignes, totaux)\n- Le rendu est optimisé pour l'impression\n\n**Format de réponse:**\n- Type MIME: application/pdf\n- Le fichier est retourné en téléchargement direct\n",
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
  return asBinaryContentResult(await client.quotes.generatePdf(uid).asResponse());
};

export default { metadata, tool, handler };
