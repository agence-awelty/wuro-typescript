// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'wuro-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'absence_types',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/absence-types',
  operationId: 'getAllAbsenceTypes',
};

export const tool: Tool = {
  name: 'list_absence_types',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRécupère la liste de tous les types d'absence configurés pour l'entreprise.\n\nLes types d'absence permettent de catégoriser les absences (congés payés, RTT, maladie, télétravail, etc.).\nChaque type peut avoir une icône et des couleurs personnalisées pour une meilleure visualisation dans le calendrier.\n\nLes types peuvent être de deux catégories :\n- **absence** : Congés, RTT, maladie, etc.\n- **event** : Événements comme les formations, réunions, etc.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/absence_type_list_response',\n  $defs: {\n    absence_type_list_response: {\n      type: 'object',\n      properties: {\n        absenceTypes: {\n          type: 'array',\n          description: 'Tableau des types d\\'absence',\n          items: {\n            $ref: '#/$defs/absence_type'\n          }\n        },\n        limit: {\n          type: 'integer',\n          description: 'Limite utilisée pour la pagination'\n        },\n        skip: {\n          type: 'integer',\n          description: 'Offset utilisé pour la pagination'\n        },\n        total: {\n          type: 'integer',\n          description: 'Nombre total de types d\\'absence'\n        }\n      }\n    },\n    absence_type: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'Unique identifier for the absence type'\n        },\n        backgroundColor: {\n          type: 'string',\n          description: 'Background color for the absence type'\n        },\n        backgroundColorRgb: {\n          type: 'string',\n          description: 'Background color in RGB format'\n        },\n        color: {\n          type: 'string',\n          description: 'Text color for the absence type'\n        },\n        icon: {\n          type: 'string',\n          description: 'Icon for the absence type'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the absence type'\n        },\n        state: {\n          type: 'string',\n          description: 'State of the absence type',\n          enum: [            'active',\n            'inactive'\n          ]\n        },\n        type: {\n          type: 'string',\n          description: 'Type of the absence type',\n          enum: [            'absence',\n            'event'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
        description: "Nombre maximum de types d'absence à retourner",
      },
      skip: {
        type: 'integer',
        description: "Nombre de types d'absence à ignorer pour la pagination",
      },
      sort: {
        type: 'string',
        description: 'Champ et direction de tri (ex. "name:1" pour tri alphabétique ascendant)',
      },
      state: {
        type: 'string',
        description: 'Filtrer par état (active/inactive)',
        enum: ['active', 'inactive'],
      },
      type: {
        type: 'string',
        description: 'Filtrer par catégorie (absence ou event)',
        enum: ['absence', 'event'],
      },
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
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.absenceTypes.list(body)));
  } catch (error) {
    if (error instanceof Wuro.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
