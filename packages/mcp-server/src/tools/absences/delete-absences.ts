// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'wuro-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'absences',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/absence/{uid}',
  operationId: 'deleteAbsence',
};

export const tool: Tool = {
  name: 'delete_absences',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSupprime une absence (soft delete).\n\nL'absence n'est pas physiquement supprimée mais passe en état \"inactive\".\nUn log de suppression est automatiquement ajouté à l'historique.\n\n## Traçabilité\n\nLa suppression enregistre :\n- La date de suppression\n- Le poste ayant effectué l'action\n- L'état précédent de l'absence\n\n## Événement déclenché\n\nUn événement `DELETE_ABSENCE` est émis, permettant de notifier\nle collaborateur de l'annulation de sa demande.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/absence_delete_response',\n  $defs: {\n    absence_delete_response: {\n      type: 'object',\n      properties: {\n        absence: {\n          $ref: '#/$defs/absence'\n        }\n      }\n    },\n    absence: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'Unique identifier for the absence'\n        },\n        company: {\n          type: 'string',\n          description: 'Reference to the company'\n        },\n        createdAt: {\n          type: 'string',\n          description: 'Date when the absence was created',\n          format: 'date-time'\n        },\n        decision_date: {\n          type: 'string',\n          description: 'Date when the state was changed',\n          format: 'date-time'\n        },\n        from: {\n          type: 'string',\n          description: 'Start date of the absence',\n          format: 'date-time'\n        },\n        from_moment: {\n          type: 'string',\n          description: 'Moment of the day when the absence starts',\n          enum: [            'half-am',\n            'half-pm',\n            'full'\n          ]\n        },\n        logs: {\n          type: 'array',\n          description: 'List of logs for the absence',\n          items: {\n            type: 'object',\n            properties: {\n              comment: {\n                type: 'string',\n                description: 'Comment added to the log'\n              },\n              date: {\n                type: 'string',\n                description: 'Date of the log',\n                format: 'date-time'\n              },\n              file: {\n                type: 'string',\n                description: 'File attached to the log'\n              },\n              fileInSafe: {\n                type: 'boolean',\n                description: 'Whether the file is stored in the safe'\n              },\n              method: {\n                type: 'string',\n                description: 'HTTP method used'\n              },\n              position: {\n                type: 'string',\n                description: 'Reference to the position'\n              },\n              state: {\n                type: 'string',\n                description: 'State of the absence at the time of the log'\n              },\n              stateItemRequested: {\n                type: 'string',\n                description: 'State of the item requested'\n              },\n              stateLog: {\n                type: 'string',\n                description: 'State of the log',\n                enum: [                  'active',\n                  'inactive'\n                ]\n              }\n            }\n          }\n        },\n        nbDays: {\n          type: 'number',\n          description: 'Number of days of absence'\n        },\n        period: {\n          type: 'string',\n          description: 'Period type of the absence',\n          enum: [            'period',\n            'full',\n            'half'\n          ]\n        },\n        positionDecider: {\n          type: 'string',\n          description: 'Reference to the position that made the decision'\n        },\n        positionFirstName: {\n          type: 'string',\n          description: 'First name of the position for search purposes'\n        },\n        positionFrom: {\n          type: 'string',\n          description: 'Reference to the position that created the absence'\n        },\n        positionLastName: {\n          type: 'string',\n          description: 'Last name of the position for search purposes'\n        },\n        positionTo: {\n          type: 'string',\n          description: 'Reference to the position for which the absence is created'\n        },\n        state: {\n          type: 'string',\n          description: 'State of the absence',\n          enum: [            'waiting',\n            'accepted',\n            'rejected',\n            'canceled',\n            'inactive'\n          ]\n        },\n        timezone: {\n          type: 'string',\n          description: 'Timezone for the absence dates'\n        },\n        to: {\n          type: 'string',\n          description: 'End date of the absence',\n          format: 'date-time'\n        },\n        to_moment: {\n          type: 'string',\n          description: 'Moment of the day when the absence ends',\n          enum: [            'half-am',\n            'half-pm',\n            'full'\n          ]\n        },\n        type: {\n          type: 'string',\n          description: 'Reference to the absence type'\n        },\n        updatedAt: {\n          type: 'string',\n          description: 'Date when the absence was last updated',\n          format: 'date-time'\n        },\n        userTo: {\n          type: 'string',\n          description: 'Reference to the user for which the absence is created'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      uid: {
        type: 'string',
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
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Wuro, args: Record<string, unknown> | undefined) => {
  const { uid, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.absences.delete(uid)));
  } catch (error) {
    if (error instanceof Wuro.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
