// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'wuro-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'statistics',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/statistics/payments',
  operationId: 'getPaymentStatistics',
};

export const tool: Tool = {
  name: 'retrieve_payments_statistics',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRécupère les statistiques globales des paiements reçus.\n\n**Statistiques retournées:**\n- Total des paiements par période\n- Répartition par mode de paiement\n- Évolution temporelle des encaissements\n- Moyenne des paiements\n\n**Filtres disponibles:**\n- Période (minDate, maxDate)\n- Mode de paiement\n\n**Utilisation:**\n- Tableau de bord financier\n- Rapports de trésorerie\n- Analyse des modes de paiement préférés\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/statistic_retrieve_payments_response',\n  $defs: {\n    statistic_retrieve_payments_response: {\n      type: 'object',\n      properties: {\n        average: {\n          type: 'number',\n          description: 'Montant moyen par paiement'\n        },\n        byMethod: {\n          type: 'object',\n          description: 'Répartition par mode de paiement',\n          additionalProperties: true\n        },\n        count: {\n          type: 'integer',\n          description: 'Nombre de paiements'\n        },\n        total: {\n          type: 'number',\n          description: 'Montant total des paiements'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Wuro, args: Record<string, unknown> | undefined) => {
  const { jq_filter } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.statistics.retrievePayments()));
  } catch (error) {
    if (error instanceof Wuro.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
