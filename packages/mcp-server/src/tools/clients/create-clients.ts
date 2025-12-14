// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'wuro-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'clients',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/client',
  operationId: 'createClient',
};

export const tool: Tool = {
  name: 'create_clients',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCrée un nouveau client pour l'entreprise.\n\n## Champs obligatoires\n\nSeul le nom (`name`) est obligatoire. Tous les autres champs sont optionnels.\n\n## Code client automatique\n\nSi vous ne fournissez pas de code client (`code`), un code unique sera généré automatiquement.\n\n## Validation TVA\n\nSi vous fournissez un numéro de TVA intracommunautaire, celui-ci sera validé.\n\n## Événement déclenché\n\nUn événement `CREATE_CLIENT` est émis après la création.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/client_create_response',\n  $defs: {\n    client_create_response: {\n      type: 'object',\n      properties: {\n        newClient: {\n          $ref: '#/$defs/client'\n        }\n      }\n    },\n    client: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'Unique identifier for the client'\n        },\n        address: {\n          type: 'string',\n          description: 'Street address'\n        },\n        address_complement: {\n          type: 'string',\n          description: 'Address complement'\n        },\n        address_end: {\n          type: 'string',\n          description: 'Additional address information'\n        },\n        analytical_code: {\n          type: 'string',\n          description: 'Analytical code'\n        },\n        avatar: {\n          type: 'object',\n          description: 'Client avatar image',\n          additionalProperties: true\n        },\n        category: {\n          type: 'string',\n          description: 'Client category'\n        },\n        city: {\n          type: 'string',\n          description: 'City'\n        },\n        client_code: {\n          type: 'string',\n          description: 'Client code for accounting'\n        },\n        client_contact: {\n          type: 'string',\n          description: 'Reference to main contact interlocutor'\n        },\n        company: {\n          type: 'string',\n          description: 'Reference to the company'\n        },\n        country: {\n          type: 'string',\n          description: 'Country'\n        },\n        createdAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'Client description'\n        },\n        email: {\n          type: 'string',\n          description: 'Email of the client'\n        },\n        extraData: {\n          type: 'object',\n          description: 'Custom extra data',\n          additionalProperties: true\n        },\n        fax: {\n          type: 'string',\n          description: 'Fax number'\n        },\n        mainInterlocutor: {\n          type: 'string',\n          description: 'Reference to main interlocutor'\n        },\n        mobile: {\n          type: 'string',\n          description: 'Mobile phone number'\n        },\n        mobileFormat: {\n          type: 'string',\n          description: 'Formatted mobile number for search'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the client (required)'\n        },\n        nic: {\n          type: 'string',\n          description: 'NIC code'\n        },\n        notes: {\n          type: 'string',\n          description: 'Notes about the client'\n        },\n        phone: {\n          type: 'string',\n          description: 'Phone number'\n        },\n        phoneFormat: {\n          type: 'string',\n          description: 'Formatted phone number for search'\n        },\n        positionCreator: {\n          type: 'string',\n          description: 'Position that created this client'\n        },\n        positionLastUpdator: {\n          type: 'string',\n          description: 'Position that last updated this client'\n        },\n        positionsAssigned: {\n          type: 'array',\n          description: 'List of assigned positions',\n          items: {\n            type: 'string'\n          }\n        },\n        siren: {\n          type: 'string',\n          description: 'SIREN number'\n        },\n        state: {\n          type: 'string',\n          description: 'Client state',\n          enum: [            'active',\n            'inactive'\n          ]\n        },\n        stats: {\n          type: 'object',\n          properties: {\n            nbDeliveryReceipts: {\n              type: 'integer'\n            },\n            nbFiles: {\n              type: 'integer'\n            },\n            nbInvoices: {\n              type: 'integer'\n            },\n            nbNotes: {\n              type: 'integer'\n            },\n            nbPurchases: {\n              type: 'integer'\n            },\n            nbQuotes: {\n              type: 'integer'\n            },\n            nbReminders: {\n              type: 'integer'\n            }\n          }\n        },\n        tags: {\n          type: 'array',\n          description: 'List of tag references',\n          items: {\n            type: 'string'\n          }\n        },\n        tva_number: {\n          type: 'string',\n          description: 'VAT number'\n        },\n        updatedAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        website: {\n          type: 'string',\n          description: 'Website URL'\n        },\n        zip_code: {\n          type: 'string',\n          description: 'Zip code'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'Name of the client (required)',
      },
      address: {
        type: 'string',
      },
      address_complement: {
        type: 'string',
      },
      address_end: {
        type: 'string',
      },
      analytical_code: {
        type: 'string',
      },
      category: {
        type: 'string',
      },
      city: {
        type: 'string',
      },
      client_code: {
        type: 'string',
      },
      country: {
        type: 'string',
      },
      description: {
        type: 'string',
      },
      email: {
        type: 'string',
      },
      fax: {
        type: 'string',
      },
      mobile: {
        type: 'string',
      },
      nic: {
        type: 'string',
      },
      notes: {
        type: 'string',
      },
      phone: {
        type: 'string',
      },
      siren: {
        type: 'string',
      },
      tags: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      tva_number: {
        type: 'string',
      },
      website: {
        type: 'string',
      },
      zip_code: {
        type: 'string',
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.clients.create(body)));
  } catch (error) {
    if (error instanceof Wuro.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
