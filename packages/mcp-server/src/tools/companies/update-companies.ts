// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'wuro-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'companies',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/company/{uid}',
  operationId: 'updateCompany',
};

export const tool: Tool = {
  name: 'update_companies',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nMet à jour les informations d'une entreprise.\n\n**Restrictions:**\n- Le domaine d'envoi d'email est automatiquement extrait de emailExpeditor\n\n**Événement déclenché:** UPDATE_COMPANY\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/company_update_response',\n  $defs: {\n    company_update_response: {\n      type: 'object',\n      properties: {\n        updatedCompany: {\n          $ref: '#/$defs/company'\n        }\n      }\n    },\n    company: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'Unique identifier for the company'\n        },\n        addresses: {\n          type: 'array',\n          description: 'List of company addresses',\n          items: {\n            type: 'object',\n            properties: {\n              city: {\n                type: 'string',\n                description: 'City'\n              },\n              country: {\n                type: 'string',\n                description: 'Country'\n              },\n              street: {\n                type: 'string',\n                description: 'Street address'\n              },\n              street_end: {\n                type: 'string',\n                description: 'Additional street address information'\n              },\n              zip_code: {\n                type: 'string',\n                description: 'Zip code'\n              }\n            }\n          }\n        },\n        cgv: {\n          type: 'string',\n          description: 'Terms and conditions text'\n        },\n        cgv_link: {\n          type: 'string',\n          description: 'Link to terms and conditions'\n        },\n        cgv_wuro: {\n          type: 'boolean',\n          description: 'Whether to use Wuro\\'s terms and conditions'\n        },\n        commercial_court: {\n          type: 'string',\n          description: 'Commercial court'\n        },\n        company_include_cgv: {\n          type: 'boolean',\n          description: 'Whether to include terms and conditions in documents'\n        },\n        company_include_cgv_physical: {\n          type: 'boolean',\n          description: 'Whether to include physical terms and conditions in documents'\n        },\n        company_type: {\n          type: 'string',\n          description: 'Reference to company type'\n        },\n        company_type_name: {\n          type: 'string',\n          description: 'Name of the company type'\n        },\n        createdAt: {\n          type: 'string',\n          description: 'Date when the company was created',\n          format: 'date-time'\n        },\n        domain: {\n          type: 'string',\n          description: 'Company domain'\n        },\n        email: {\n          type: 'string',\n          description: 'Company email'\n        },\n        emailExpeditor: {\n          type: 'string',\n          description: 'Email used as sender for communications'\n        },\n        logo: {\n          type: 'string',\n          description: 'URL to company logo'\n        },\n        mobiles: {\n          type: 'array',\n          description: 'List of company mobile numbers',\n          items: {\n            type: 'object',\n            properties: {\n              active: {\n                type: 'boolean',\n                description: 'Whether this mobile number is active'\n              },\n              main: {\n                type: 'boolean',\n                description: 'Whether this is the main mobile number'\n              },\n              number: {\n                type: 'string',\n                description: 'Mobile number'\n              },\n              type: {\n                type: 'string',\n                description: 'Type of mobile number'\n              }\n            }\n          }\n        },\n        naf_ape: {\n          type: 'string',\n          description: 'NAF/APE code'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the company'\n        },\n        nic: {\n          type: 'string',\n          description: 'NIC code'\n        },\n        num_rcs: {\n          type: 'string',\n          description: 'RCS registration number'\n        },\n        num_trade_directory: {\n          type: 'string',\n          description: 'Trade directory number'\n        },\n        payment_delay_default: {\n          type: 'number',\n          description: 'Default payment delay in days'\n        },\n        phones: {\n          type: 'array',\n          description: 'List of company phone numbers',\n          items: {\n            type: 'object',\n            properties: {\n              active: {\n                type: 'boolean',\n                description: 'Whether this phone number is active'\n              },\n              main: {\n                type: 'boolean',\n                description: 'Whether this is the main phone number'\n              },\n              number: {\n                type: 'string',\n                description: 'Phone number'\n              },\n              type: {\n                type: 'string',\n                description: 'Type of phone number'\n              }\n            }\n          }\n        },\n        rate_late_penalties: {\n          type: 'number',\n          description: 'Late payment penalty rate'\n        },\n        share_capital: {\n          type: 'number',\n          description: 'Share capital amount'\n        },\n        siren: {\n          type: 'string',\n          description: 'SIREN number'\n        },\n        siret: {\n          type: 'string',\n          description: 'SIRET number'\n        },\n        state: {\n          type: 'string',\n          description: 'State of the company',\n          enum: [            'active',\n            'inactive',\n            'deleted'\n          ]\n        },\n        tva_number: {\n          type: 'string',\n          description: 'VAT number'\n        },\n        updatedAt: {\n          type: 'string',\n          description: 'Date when the company was last updated',\n          format: 'date-time'\n        },\n        url: {\n          type: 'string',\n          description: 'Unique URL identifier for the company'\n        },\n        validity_delay_default: {\n          type: 'number',\n          description: 'Default validity delay for quotes in days'\n        },\n        website: {\n          type: 'string',\n          description: 'Company website URL'\n        }\n      }\n    }\n  }\n}\n```",
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
  annotations: {},
};

export const handler = async (client: Wuro, args: Record<string, unknown> | undefined) => {
  const { uid, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.companies.update(uid)));
  } catch (error) {
    if (error instanceof Wuro.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
