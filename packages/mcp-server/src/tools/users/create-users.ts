// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'wuro-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'users',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/user',
  operationId: 'createUser',
};

export const tool: Tool = {
  name: 'create_users',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCrée un nouveau compte utilisateur.\n\n**Important:**\n- Le mot de passe est obligatoire\n- Par défaut, l'utilisateur sera automatiquement supprimé après 24h si `auto_deletion` n'est pas défini à 'migration'\n- L'état initial est 'created' (en attente de confirmation)\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/user_create_response',\n  $defs: {\n    user_create_response: {\n      type: 'object',\n      properties: {\n        newUser: {\n          $ref: '#/$defs/user'\n        }\n      }\n    },\n    user: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'Unique identifier for the user'\n        },\n        address: {\n          type: 'object',\n          properties: {\n            city: {\n              type: 'string',\n              description: 'City'\n            },\n            country: {\n              type: 'string',\n              description: 'Country'\n            },\n            street: {\n              type: 'string',\n              description: 'Street address'\n            },\n            street_end: {\n              type: 'string',\n              description: 'Additional street address information'\n            },\n            zip_code: {\n              type: 'string',\n              description: 'Zip code'\n            }\n          }\n        },\n        avatar: {\n          type: 'string',\n          description: 'URL to user\\'s avatar'\n        },\n        birthdate: {\n          type: 'string',\n          description: 'User\\'s birthdate',\n          format: 'date-time'\n        },\n        createdAt: {\n          type: 'string',\n          description: 'Date when user was created',\n          format: 'date-time'\n        },\n        email: {\n          type: 'string',\n          description: 'User\\'s email address'\n        },\n        first_name: {\n          type: 'string',\n          description: 'User\\'s first name'\n        },\n        gender: {\n          type: 'string',\n          description: 'User\\'s gender',\n          enum: [            'H',\n            'F',\n            'Other'\n          ]\n        },\n        last_name: {\n          type: 'string',\n          description: 'User\\'s last name'\n        },\n        phone: {\n          type: 'object',\n          properties: {\n            number: {\n              type: 'string',\n              description: 'User\\'s phone number'\n            }\n          }\n        },\n        positions: {\n          type: 'array',\n          description: 'List of positions associated with the user',\n          items: {\n            type: 'string',\n            description: 'Position ID'\n          }\n        },\n        state: {\n          type: 'string',\n          description: 'User\\'s state',\n          enum: [            'inactive',\n            'created',\n            'confirmed',\n            'linkedin',\n            'google',\n            'deleted'\n          ]\n        },\n        terms_of_sale_signature: {\n          type: 'string',\n          description: 'Date when user accepted terms of sale',\n          format: 'date-time'\n        },\n        updatedAt: {\n          type: 'string',\n          description: 'Date when user was last updated',\n          format: 'date-time'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      email: {
        type: 'string',
        description: "Email unique de l'utilisateur (immuable après création)",
      },
      password: {
        type: 'string',
        description: 'Mot de passe (obligatoire)',
      },
      auto_deletion: {
        type: 'string',
        description: "'migration' pour désactiver la suppression auto, sinon supprimé après 24h",
      },
      first_name: {
        type: 'string',
      },
      last_name: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['email', 'password'],
  },
  annotations: {},
};

export const handler = async (client: Wuro, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.users.create(body)));
  } catch (error) {
    if (error instanceof Wuro.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
