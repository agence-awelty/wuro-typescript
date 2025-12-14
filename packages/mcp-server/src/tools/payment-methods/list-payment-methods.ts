// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'wuro-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'payment_methods',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/payment-methods',
  operationId: 'getAllPaymentMethods',
};

export const tool: Tool = {
  name: 'list_payment_methods',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRécupère la liste de tous les moyens de paiement configurés pour l'entreprise.\n\nLes moyens de paiement sont utilisés sur les factures et devis pour indiquer\nau client comment régler sa facture.\n\n## Types de moyens de paiement (tags)\n\n- **check** : Chèque\n- **transfer** : Virement bancaire\n- **paybox** : Paiement Paybox\n- **stripe** : Paiement Stripe\n- **paypal** : Paiement PayPal\n- **epayment** : Paiement électronique générique\n- **other** : Autre moyen de paiement\n\n## Moyen de paiement par défaut\n\nUn seul moyen peut être défini comme \"default\" et sera automatiquement\nsélectionné lors de la création de nouveaux documents.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/payment_method_list_response',\n  $defs: {\n    payment_method_list_response: {\n      type: 'object',\n      properties: {\n        paymentMethods: {\n          type: 'array',\n          description: 'Tableau des moyens de paiement',\n          items: {\n            $ref: '#/$defs/payment_method'\n          }\n        },\n        total: {\n          type: 'integer',\n          description: 'Nombre total de moyens de paiement'\n        }\n      }\n    },\n    payment_method: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'Unique identifier for the payment method'\n        },\n        company: {\n          type: 'string',\n          description: 'Reference to the company'\n        },\n        default: {\n          type: 'boolean',\n          description: 'Whether this is the default payment method'\n        },\n        isTest: {\n          type: 'boolean',\n          description: 'Whether this is a test payment method'\n        },\n        modality: {\n          type: 'string',\n          description: 'Additional information about the payment method'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the payment method'\n        },\n        nbInvoices: {\n          type: 'integer',\n          description: 'Number of invoices using this payment method'\n        },\n        nbQuotes: {\n          type: 'integer',\n          description: 'Number of quotes using this payment method'\n        },\n        public: {\n          type: 'string',\n          description: 'Public information'\n        },\n        rang: {\n          type: 'string',\n          description: 'Paybox specific field'\n        },\n        secret: {\n          type: 'string',\n          description: 'Secret information'\n        },\n        site: {\n          type: 'string',\n          description: 'Paybox specific field'\n        },\n        state: {\n          type: 'string',\n          description: 'State of the payment method',\n          enum: [            'active',\n            'inactive'\n          ]\n        },\n        tag: {\n          type: 'string',\n          description: 'Type of payment method',\n          enum: [            'paybox',\n            'epayment',\n            'check',\n            'stripe',\n            'paypal',\n            'transfer',\n            'other'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      state: {
        type: 'string',
        description: 'Filtrer par état (active/inactive)',
        enum: ['active', 'inactive'],
      },
      tag: {
        type: 'string',
        description: 'Filtrer par type de moyen de paiement',
        enum: ['paybox', 'epayment', 'check', 'stripe', 'paypal', 'transfer', 'other'],
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.paymentMethods.list(body)));
  } catch (error) {
    if (error instanceof Wuro.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
