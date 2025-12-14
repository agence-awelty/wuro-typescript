// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'wuro-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'invoice_file',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/invoice-file',
  operationId: 'getInvoiceFileInfo',
};

export const tool: Tool = {
  name: 'analyze_invoice_file',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nAnalyse un fichier PDF de facture via OCR et IA (Mistral) pour en extraire les informations.\n\n**Utilisation:**\n- Envoyer le fichier PDF en base64 dans le champ `file`\n- L'IA extrait: fournisseur, date, numéro, lignes, totaux, TVA\n\n**Restrictions:**\n- La reconnaissance doit être activée pour l'entreprise (`visionAnalytic`)\n\n**Réponse:**\n- `invoice`: Données extraites du PDF\n- `preSubmitInvoice`: Données avec totaux recalculés (pour vérification)\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/invoice_file_analyze_response',\n  $defs: {\n    invoice_file_analyze_response: {\n      type: 'object',\n      properties: {\n        invoice: {\n          type: 'object',\n          description: 'Données brutes extraites',\n          additionalProperties: true\n        },\n        preSubmitInvoice: {\n          type: 'object',\n          description: 'Données avec totaux recalculés',\n          additionalProperties: true\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      file: {
        type: 'string',
        description: 'Fichier PDF encodé en base64',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['file'],
  },
  annotations: {},
};

export const handler = async (client: Wuro, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.invoiceFile.analyze(body)));
  } catch (error) {
    if (error instanceof Wuro.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
