// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'wuro-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'absence_types',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/absence-type/{uid}',
  operationId: 'updateAbsenceType',
};

export const tool: Tool = {
  name: 'update_absence_types',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nMet à jour les informations d'un type d'absence existant.\n\nVous pouvez modifier :\n- Le nom affiché\n- L'icône représentative\n- Les couleurs (fond et texte) pour la visualisation calendrier\n- L'état (active/inactive) pour masquer sans supprimer\n\n**Note** : Désactiver un type n'affecte pas les absences déjà créées avec ce type.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/absence_type_update_response',\n  $defs: {\n    absence_type_update_response: {\n      type: 'object',\n      properties: {\n        absenceType: {\n          $ref: '#/$defs/absence_type'\n        }\n      }\n    },\n    absence_type: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'Unique identifier for the absence type'\n        },\n        backgroundColor: {\n          type: 'string',\n          description: 'Background color for the absence type'\n        },\n        backgroundColorRgb: {\n          type: 'string',\n          description: 'Background color in RGB format'\n        },\n        color: {\n          type: 'string',\n          description: 'Text color for the absence type'\n        },\n        icon: {\n          type: 'string',\n          description: 'Icon for the absence type'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the absence type'\n        },\n        state: {\n          type: 'string',\n          description: 'State of the absence type',\n          enum: [            'active',\n            'inactive'\n          ]\n        },\n        type: {\n          type: 'string',\n          description: 'Type of the absence type',\n          enum: [            'absence',\n            'event'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      uid: {
        type: 'string',
      },
      backgroundColor: {
        type: 'string',
        description: 'Couleur de fond hexadécimale (ex. "#3498db")',
      },
      backgroundColorRgb: {
        type: 'string',
        description: 'Couleur de fond en format RGB (ex. "52, 152, 219")',
      },
      color: {
        type: 'string',
        description: 'Couleur du texte hexadécimale (ex. "#ffffff")',
      },
      icon: {
        type: 'string',
        description: 'Icône Font Awesome ou autre (ex. "fa-umbrella-beach")',
      },
      name: {
        type: 'string',
        description: 'Nom du type d\'absence (ex. "Congés payés", "RTT", "Maladie")',
      },
      state: {
        type: 'string',
        description: 'État du type (inactive = masqué dans les choix)',
        enum: ['active', 'inactive'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['uid'],
  },
  annotations: {},
};

export const handler = async (client: Wuro, args: Record<string, unknown> | undefined) => {
  const { uid, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.absenceTypes.update(uid, body)));
  } catch (error) {
    if (error instanceof Wuro.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
