// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'wuro-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'absence_types',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/absence-type',
  operationId: 'createAbsenceType',
};

export const tool: Tool = {
  name: 'create_absence_types',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCrée un nouveau type d'absence pour l'entreprise.\n\nLes types d'absence permettent de catégoriser les demandes d'absence des collaborateurs.\nExemples de types courants :\n- Congés payés\n- RTT\n- Congé maladie\n- Télétravail\n- Formation\n- Événement client\n\nVous pouvez personnaliser l'apparence de chaque type avec une icône et des couleurs\npour faciliter la lecture du calendrier d'équipe.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/absence_type_create_response',\n  $defs: {\n    absence_type_create_response: {\n      type: 'object',\n      properties: {\n        newAbsenceType: {\n          $ref: '#/$defs/absence_type'\n        }\n      }\n    },\n    absence_type: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'Unique identifier for the absence type'\n        },\n        backgroundColor: {\n          type: 'string',\n          description: 'Background color for the absence type'\n        },\n        backgroundColorRgb: {\n          type: 'string',\n          description: 'Background color in RGB format'\n        },\n        color: {\n          type: 'string',\n          description: 'Text color for the absence type'\n        },\n        icon: {\n          type: 'string',\n          description: 'Icon for the absence type'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the absence type'\n        },\n        state: {\n          type: 'string',\n          description: 'State of the absence type',\n          enum: [            'active',\n            'inactive'\n          ]\n        },\n        type: {\n          type: 'string',\n          description: 'Type of the absence type',\n          enum: [            'absence',\n            'event'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: "Nom du type d'absence (obligatoire)",
      },
      backgroundColor: {
        type: 'string',
        description: "Couleur de fond pour l'affichage calendrier",
      },
      backgroundColorRgb: {
        type: 'string',
        description: 'Couleur de fond en format RGB',
      },
      color: {
        type: 'string',
        description: 'Couleur du texte',
      },
      icon: {
        type: 'string',
        description: 'Icône Font Awesome (ex. "fa-umbrella-beach", "fa-briefcase-medical")',
      },
      state: {
        type: 'string',
        description: 'État initial (active par défaut)',
        enum: ['active', 'inactive'],
      },
      type: {
        type: 'string',
        description:
          'Catégorie du type :\n- **absence** : Congés, RTT, maladie (absence du collaborateur)\n- **event** : Formation, réunion (présent mais non disponible)',
        enum: ['absence', 'event'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['name'],
  },
  annotations: {},
};

export const handler = async (client: Wuro, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.absenceTypes.create(body)));
  } catch (error) {
    if (error instanceof Wuro.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
