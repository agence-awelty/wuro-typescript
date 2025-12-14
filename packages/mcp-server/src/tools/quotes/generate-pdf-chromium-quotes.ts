// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'quotes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/quote/{uid}/pdf-chromium',
  operationId: 'generateQuotePDFChromium',
};

export const tool: Tool = {
  name: 'generate_pdf_chromium_quotes',
  description:
    "Génère et retourne le fichier PDF d'un devis en utilisant le moteur de rendu Chromium.\n\n**Différences avec /pdf:**\n- Rendu plus fidèle aux navigateurs modernes\n- Meilleure gestion des polices et des styles CSS complexes\n- Temps de génération légèrement plus long\n\n**Utilisation recommandée:**\n- Documents avec mise en page complexe\n- Besoin d'un rendu identique au navigateur\n",
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
  return asBinaryContentResult(await client.quotes.generatePdfChromium(uid).asResponse());
};

export default { metadata, tool, handler };
