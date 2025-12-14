// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'wuro-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'companies.position',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/company/{uid}/position',
  operationId: 'addPositionToCompany',
};

export const tool: Tool = {
  name: 'create_companies_position',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCrée un nouveau poste (position) pour un utilisateur dans l'entreprise.\n\n**Concept de Position:**\n- Un poste représente le lien entre un utilisateur et une entreprise\n- Chaque poste définit un type (admin, collaborateur, etc.) et des droits spécifiques\n- Un utilisateur peut avoir des postes dans plusieurs entreprises\n\n**Champs requis:**\n- `user` : Identifiant de l'utilisateur à ajouter\n- `type` : Type de poste (référence vers un Type de droits)\n\n**Événement déclenché:** CREATE_POSITION\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/position',\n  $defs: {\n    position: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'Unique identifier for the position'\n        },\n        avatar: {\n          type: 'string',\n          description: 'URL to avatar'\n        },\n        company: {\n          type: 'string',\n          description: 'ID of the company'\n        },\n        createdAt: {\n          type: 'string',\n          description: 'Date when position was created',\n          format: 'date-time'\n        },\n        entry_date: {\n          type: 'string',\n          description: 'Date of entry',\n          format: 'date-time'\n        },\n        first_name: {\n          type: 'string',\n          description: 'First name'\n        },\n        last_name: {\n          type: 'string',\n          description: 'Last name'\n        },\n        release_date: {\n          type: 'string',\n          description: 'Date of release',\n          format: 'date-time'\n        },\n        rights: {\n          type: 'array',\n          description: 'List of rights',\n          items: {\n            type: 'object',\n            properties: {\n              checked: {\n                type: 'boolean',\n                description: 'Whether the right is checked'\n              },\n              group: {\n                type: 'string',\n                description: 'Group of the right'\n              },\n              name: {\n                type: 'string',\n                description: 'Name of the right'\n              }\n            }\n          }\n        },\n        state: {\n          type: 'string',\n          description: 'State of the position',\n          enum: [            'active',\n            'inactive'\n          ]\n        },\n        teams: {\n          type: 'array',\n          description: 'List of teams',\n          items: {\n            type: 'object',\n            properties: {\n              default: {\n                type: 'boolean',\n                description: 'Whether this is the default team'\n              },\n              rightType: {\n                type: 'string',\n                description: 'Type of rights'\n              },\n              team: {\n                type: 'string',\n                description: 'ID of the team'\n              }\n            }\n          }\n        },\n        type: {\n          type: 'string',\n          description: 'Type of the position'\n        },\n        updatedAt: {\n          type: 'string',\n          description: 'Date when position was last updated',\n          format: 'date-time'\n        },\n        user: {\n          type: 'string',\n          description: 'ID of the user'\n        },\n        userEmail: {\n          type: 'string',\n          description: 'Email of the user'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      uid: {
        type: 'string',
      },
      type: {
        type: 'string',
        description: 'Type de poste (ID du Type de droits)',
      },
      user: {
        type: 'string',
        description: "Identifiant de l'utilisateur",
      },
      rights: {
        type: 'array',
        description: 'Liste des droits spécifiques',
        items: {
          type: 'object',
          properties: {
            checked: {
              type: 'boolean',
              description: 'Droit activé ou non',
            },
            group: {
              type: 'string',
              description: 'Groupe du droit',
            },
            name: {
              type: 'string',
              description: 'Nom du droit',
            },
          },
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['uid', 'type', 'user'],
  },
  annotations: {},
};

export const handler = async (client: Wuro, args: Record<string, unknown> | undefined) => {
  const { uid, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.companies.position.create(uid, body)),
    );
  } catch (error) {
    if (error instanceof Wuro.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
