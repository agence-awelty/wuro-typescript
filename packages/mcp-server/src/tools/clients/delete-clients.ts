// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'wuro-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'clients',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/client/{uid}',
  operationId: 'deleteClient',
};

export const tool: Tool = {
  name: 'delete_clients',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSupprime un client (soft delete).\n\nLe client passe en état \"inactive\" et n'apparaît plus dans les listes standards.\nLes documents existants (factures, devis) associés à ce client sont conservés.\n\n## Événement déclenché\n\nUn événement `DELETE_CLIENT` est émis après la suppression.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/client_delete_response',\n  $defs: {\n    client_delete_response: {\n      type: 'object',\n      properties: {\n        client: {\n          $ref: '#/$defs/client'\n        }\n      }\n    },\n    client: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'Unique identifier for the client'\n        },\n        address: {\n          type: 'string',\n          description: 'Street address'\n        },\n        address_complement: {\n          type: 'string',\n          description: 'Address complement'\n        },\n        address_end: {\n          type: 'string',\n          description: 'Additional address information'\n        },\n        analytical_code: {\n          type: 'string',\n          description: 'Analytical code'\n        },\n        avatar: {\n          type: 'object',\n          description: 'Client avatar image',\n          additionalProperties: true\n        },\n        category: {\n          type: 'string',\n          description: 'Client category'\n        },\n        city: {\n          type: 'string',\n          description: 'City'\n        },\n        client_code: {\n          type: 'string',\n          description: 'Client code for accounting'\n        },\n        client_contact: {\n          type: 'string',\n          description: 'Reference to main contact interlocutor'\n        },\n        company: {\n          type: 'string',\n          description: 'Reference to the company'\n        },\n        country: {\n          type: 'string',\n          description: 'Country'\n        },\n        createdAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        description: {\n          type: 'string',\n          description: 'Client description'\n        },\n        email: {\n          type: 'string',\n          description: 'Email of the client'\n        },\n        extraData: {\n          type: 'object',\n          description: 'Custom extra data',\n          additionalProperties: true\n        },\n        fax: {\n          type: 'string',\n          description: 'Fax number'\n        },\n        mainInterlocutor: {\n          type: 'string',\n          description: 'Reference to main interlocutor'\n        },\n        mobile: {\n          type: 'string',\n          description: 'Mobile phone number'\n        },\n        mobileFormat: {\n          type: 'string',\n          description: 'Formatted mobile number for search'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the client (required)'\n        },\n        nic: {\n          type: 'string',\n          description: 'NIC code'\n        },\n        notes: {\n          type: 'string',\n          description: 'Notes about the client'\n        },\n        phone: {\n          type: 'string',\n          description: 'Phone number'\n        },\n        phoneFormat: {\n          type: 'string',\n          description: 'Formatted phone number for search'\n        },\n        positionCreator: {\n          type: 'string',\n          description: 'Position that created this client'\n        },\n        positionLastUpdator: {\n          type: 'string',\n          description: 'Position that last updated this client'\n        },\n        positionsAssigned: {\n          type: 'array',\n          description: 'List of assigned positions',\n          items: {\n            type: 'string'\n          }\n        },\n        siren: {\n          type: 'string',\n          description: 'SIREN number'\n        },\n        state: {\n          type: 'string',\n          description: 'Client state',\n          enum: [            'active',\n            'inactive'\n          ]\n        },\n        stats: {\n          type: 'object',\n          properties: {\n            nbDeliveryReceipts: {\n              type: 'integer'\n            },\n            nbFiles: {\n              type: 'integer'\n            },\n            nbInvoices: {\n              type: 'integer'\n            },\n            nbNotes: {\n              type: 'integer'\n            },\n            nbPurchases: {\n              type: 'integer'\n            },\n            nbQuotes: {\n              type: 'integer'\n            },\n            nbReminders: {\n              type: 'integer'\n            }\n          }\n        },\n        tags: {\n          type: 'array',\n          description: 'List of tag references',\n          items: {\n            type: 'string'\n          }\n        },\n        tva_number: {\n          type: 'string',\n          description: 'VAT number'\n        },\n        updatedAt: {\n          type: 'string',\n          format: 'date-time'\n        },\n        website: {\n          type: 'string',\n          description: 'Website URL'\n        },\n        zip_code: {\n          type: 'string',\n          description: 'Zip code'\n        }\n      }\n    }\n  }\n}\n```",
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.clients.delete(uid)));
  } catch (error) {
    if (error instanceof Wuro.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
