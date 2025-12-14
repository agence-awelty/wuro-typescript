// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'wuro-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'companies.app_infos',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/company/{uid}/app-infos',
  operationId: 'getCompanyAppInfos',
};

export const tool: Tool = {
  name: 'retrieve_by_id_companies_app_infos',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRécupère les informations applicatives (CompanyApp) d'une entreprise spécifique.\n\n**Informations retournées:**\n- Configuration de l'application\n- Modules activés\n- Limites et quotas\n- Paramètres de personnalisation\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/company_app',\n  $defs: {\n    company_app: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'Unique identifier for the company app'\n        },\n        company: {\n          type: 'string',\n          description: 'Reference to the company'\n        },\n        containerId: {\n          type: 'string',\n          description: 'Container ID for storage'\n        },\n        containerPrivateId: {\n          type: 'string',\n          description: 'Private container ID for storage'\n        },\n        containerPrivateSize: {\n          type: 'number',\n          description: 'Size of the private container'\n        },\n        containerSize: {\n          type: 'number',\n          description: 'Size of the container'\n        },\n        createdAt: {\n          type: 'string',\n          description: 'Date when the company app was created',\n          format: 'date-time'\n        },\n        domainVerify: {\n          type: 'string',\n          description: 'Domain verification status',\n          enum: [            'waiting',\n            'verify',\n            'none'\n          ]\n        },\n        nbCreatedInvoices: {\n          type: 'number',\n          description: 'Number of invoices created'\n        },\n        nbCreatedQuotes: {\n          type: 'number',\n          description: 'Number of quotes created'\n        },\n        nbCreatedReceipts: {\n          type: 'number',\n          description: 'Number of receipts created'\n        },\n        nbMailsSent: {\n          type: 'number',\n          description: 'Number of emails sent'\n        },\n        options: {\n          type: 'object',\n          description: 'Company options',\n          properties: {\n            api: {\n              type: 'boolean',\n              description: 'Whether API access is enabled'\n            },\n            fec: {\n              type: 'boolean',\n              description: 'Whether FEC export is enabled'\n            }\n          }\n        },\n        stripeCustomerId: {\n          type: 'object',\n          properties: {\n            dev: {\n              type: 'string',\n              description: 'Development Stripe customer ID'\n            },\n            preprod: {\n              type: 'string',\n              description: 'Pre-production Stripe customer ID'\n            },\n            prod: {\n              type: 'string',\n              description: 'Production Stripe customer ID'\n            }\n          }\n        },\n        subscribedSince: {\n          type: 'string',\n          description: 'Date when the company subscribed',\n          format: 'date-time'\n        },\n        updatedAt: {\n          type: 'string',\n          description: 'Date when the company app was last updated',\n          format: 'date-time'\n        },\n        versionPackActive: {\n          type: 'string',\n          description: 'Reference to active version pack'\n        },\n        versions: {\n          type: 'array',\n          description: 'List of version references',\n          items: {\n            type: 'string'\n          }\n        }\n      }\n    }\n  }\n}\n```",
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
    readOnlyHint: true,
  },
};

export const handler = async (client: Wuro, args: Record<string, unknown> | undefined) => {
  const { uid, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.companies.appInfos.retrieveByID(uid)),
    );
  } catch (error) {
    if (error instanceof Wuro.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
