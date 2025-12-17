// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'wuro-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'payment_methods',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/payment-method/{uid}',
  operationId: 'deletePaymentMethod',
};

export const tool: Tool = {
  name: 'delete_payment_methods',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSupprime un moyen de paiement (soft delete).\n\nLe moyen passe en état \"inactive\" et n'est plus proposé pour les nouveaux documents.\n\n**Note** : Il est recommandé d'utiliser PATCH avec `state: \"inactive\"` plutôt que DELETE\npour conserver l'historique des documents utilisant ce moyen.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/payment_method_delete_response',\n  $defs: {\n    payment_method_delete_response: {\n      type: 'object',\n      properties: {\n        paymentMethod: {\n          $ref: '#/$defs/payment_method'\n        }\n      }\n    },\n    payment_method: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'Unique identifier for the payment method'\n        },\n        company: {\n          type: 'string',\n          description: 'Reference to the company'\n        },\n        default: {\n          type: 'boolean',\n          description: 'Whether this is the default payment method'\n        },\n        isTest: {\n          type: 'boolean',\n          description: 'Whether this is a test payment method'\n        },\n        modality: {\n          type: 'string',\n          description: 'Additional information about the payment method'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the payment method'\n        },\n        nbInvoices: {\n          type: 'integer',\n          description: 'Number of invoices using this payment method'\n        },\n        nbQuotes: {\n          type: 'integer',\n          description: 'Number of quotes using this payment method'\n        },\n        public: {\n          type: 'string',\n          description: 'Public information'\n        },\n        rang: {\n          type: 'string',\n          description: 'Paybox specific field'\n        },\n        secret: {\n          type: 'string',\n          description: 'Secret information'\n        },\n        site: {\n          type: 'string',\n          description: 'Paybox specific field'\n        },\n        state: {\n          type: 'string',\n          description: 'State of the payment method',\n          enum: [            'active',\n            'inactive'\n          ]\n        },\n        tag: {\n          type: 'string',\n          description: 'Type of payment method',\n          enum: [            'paybox',\n            'epayment',\n            'check',\n            'stripe',\n            'paypal',\n            'transfer',\n            'other'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.paymentMethods.delete(uid)));
  } catch (error) {
    if (error instanceof Wuro.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
