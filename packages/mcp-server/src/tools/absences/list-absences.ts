// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'wuro-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'absences',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/absences',
  operationId: 'getAllAbsences',
};

export const tool: Tool = {
  name: 'list_absences',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRécupère la liste des absences de l'entreprise avec de nombreuses options de filtrage.\n\nCette route est particulièrement utile pour :\n- Afficher le calendrier des absences d'équipe\n- Filtrer les absences par collaborateur ou période\n- Obtenir les absences du jour (pour un dashboard RH)\n\n## Filtres de période\n\nPlusieurs modes de filtrage temporel sont disponibles :\n\n- **month + year** : Absences sur un mois calendaire (avec marge du mois précédent/suivant)\n- **today** : Absences en cours aujourd'hui (distingue matin/après-midi)\n- **from / to** : Filtrer par date de début ou fin exacte\n- **inPeriod** : Absences chevauchant une période donnée\n\n## Gestion des demi-journées\n\nLes absences peuvent commencer ou finir en demi-journée :\n- **full** : Journée entière\n- **half-am** : Matin uniquement\n- **half-pm** : Après-midi uniquement\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/absence_list_response',\n  $defs: {\n    absence_list_response: {\n      type: 'object',\n      properties: {\n        absences: {\n          type: 'array',\n          description: 'Tableau des absences correspondant aux filtres',\n          items: {\n            $ref: '#/$defs/absence'\n          }\n        },\n        limit: {\n          type: 'integer',\n          description: 'Limite utilisée'\n        },\n        skip: {\n          type: 'integer',\n          description: 'Offset utilisé'\n        },\n        total: {\n          type: 'integer',\n          description: 'Nombre total d\\'absences (avant pagination)'\n        }\n      }\n    },\n    absence: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'Unique identifier for the absence'\n        },\n        company: {\n          type: 'string',\n          description: 'Reference to the company'\n        },\n        createdAt: {\n          type: 'string',\n          description: 'Date when the absence was created',\n          format: 'date-time'\n        },\n        decision_date: {\n          type: 'string',\n          description: 'Date when the state was changed',\n          format: 'date-time'\n        },\n        from: {\n          type: 'string',\n          description: 'Start date of the absence',\n          format: 'date-time'\n        },\n        from_moment: {\n          type: 'string',\n          description: 'Moment of the day when the absence starts',\n          enum: [            'half-am',\n            'half-pm',\n            'full'\n          ]\n        },\n        logs: {\n          type: 'array',\n          description: 'List of logs for the absence',\n          items: {\n            type: 'object',\n            properties: {\n              comment: {\n                type: 'string',\n                description: 'Comment added to the log'\n              },\n              date: {\n                type: 'string',\n                description: 'Date of the log',\n                format: 'date-time'\n              },\n              file: {\n                type: 'string',\n                description: 'File attached to the log'\n              },\n              fileInSafe: {\n                type: 'boolean',\n                description: 'Whether the file is stored in the safe'\n              },\n              method: {\n                type: 'string',\n                description: 'HTTP method used'\n              },\n              position: {\n                type: 'string',\n                description: 'Reference to the position'\n              },\n              state: {\n                type: 'string',\n                description: 'State of the absence at the time of the log'\n              },\n              stateItemRequested: {\n                type: 'string',\n                description: 'State of the item requested'\n              },\n              stateLog: {\n                type: 'string',\n                description: 'State of the log',\n                enum: [                  'active',\n                  'inactive'\n                ]\n              }\n            }\n          }\n        },\n        nbDays: {\n          type: 'number',\n          description: 'Number of days of absence'\n        },\n        period: {\n          type: 'string',\n          description: 'Period type of the absence',\n          enum: [            'period',\n            'full',\n            'half'\n          ]\n        },\n        positionDecider: {\n          type: 'string',\n          description: 'Reference to the position that made the decision'\n        },\n        positionFirstName: {\n          type: 'string',\n          description: 'First name of the position for search purposes'\n        },\n        positionFrom: {\n          type: 'string',\n          description: 'Reference to the position that created the absence'\n        },\n        positionLastName: {\n          type: 'string',\n          description: 'Last name of the position for search purposes'\n        },\n        positionTo: {\n          type: 'string',\n          description: 'Reference to the position for which the absence is created'\n        },\n        state: {\n          type: 'string',\n          description: 'State of the absence',\n          enum: [            'waiting',\n            'accepted',\n            'rejected',\n            'canceled',\n            'inactive'\n          ]\n        },\n        timezone: {\n          type: 'string',\n          description: 'Timezone for the absence dates'\n        },\n        to: {\n          type: 'string',\n          description: 'End date of the absence',\n          format: 'date-time'\n        },\n        to_moment: {\n          type: 'string',\n          description: 'Moment of the day when the absence ends',\n          enum: [            'half-am',\n            'half-pm',\n            'full'\n          ]\n        },\n        type: {\n          type: 'string',\n          description: 'Reference to the absence type'\n        },\n        updatedAt: {\n          type: 'string',\n          description: 'Date when the absence was last updated',\n          format: 'date-time'\n        },\n        userTo: {\n          type: 'string',\n          description: 'Reference to the user for which the absence is created'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      from: {
        type: 'string',
        description: 'Filtrer par date de début (format ISO)',
        format: 'date-time',
      },
      inPeriod: {
        type: 'array',
        description:
          'Tableau de 2 dates [début, fin] pour obtenir les absences chevauchant cette période.\nUtile pour le calendrier : récupère les absences qui commencent, finissent ou traversent la période.\n',
        items: {
          type: 'string',
          format: 'date-time',
        },
      },
      limit: {
        type: 'integer',
        description: "Nombre maximum d'absences à retourner",
      },
      month: {
        type: 'integer',
        description: 'Mois pour le filtre calendrier (1-12). Requiert year.',
      },
      positionTo: {
        anyOf: [
          {
            type: 'string',
          },
          {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        ],
        description:
          "Filtrer par poste concerné. Valeurs spéciales :\n- **all** : Tous les postes\n- **onlyActive** : Postes actifs uniquement\n- ID de poste pour un poste spécifique\n- Tableau d'IDs pour plusieurs postes\n",
      },
      skip: {
        type: 'integer',
        description: "Nombre d'absences à ignorer (pagination)",
      },
      sort: {
        type: 'string',
        description: 'Tri des résultats (ex. "from:-1" pour les plus récentes d\'abord)',
      },
      state: {
        type: 'string',
        description:
          "Filtrer par état de l'absence :\n- **waiting** : En attente de validation\n- **accepted** : Validée\n- **rejected** : Refusée\n- **canceled** : Annulée par le collaborateur\n- **inactive** : Supprimée (soft delete)",
        enum: ['waiting', 'accepted', 'rejected', 'canceled', 'inactive'],
      },
      to: {
        type: 'string',
        description: 'Filtrer par date de fin (format ISO)',
        format: 'date-time',
      },
      today: {
        type: 'boolean',
        description: 'Si true, retourne uniquement les absences du jour en cours',
      },
      type: {
        anyOf: [
          {
            type: 'string',
          },
          {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        ],
        description: "Filtrer par type d'absence (peut être un tableau)",
      },
      userTo: {
        type: 'string',
        description: 'Filtrer par utilisateur concerné',
      },
      year: {
        type: 'integer',
        description: 'Année pour le filtre calendrier. Requiert month.',
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.absences.list(body)));
  } catch (error) {
    if (error instanceof Wuro.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
