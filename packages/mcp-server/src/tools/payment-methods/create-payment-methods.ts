// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'wuro-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'payment_methods',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/payment-method',
  operationId: 'createPaymentMethod',
};

export const tool: Tool = {
  name: 'create_payment_methods',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCrée un nouveau moyen de paiement pour l'entreprise.\n\n## Types de moyens de paiement\n\nLe champ `tag` définit le type de moyen de paiement et détermine les champs additionnels requis :\n\n- **check** : Chèque (pas de champs supplémentaires)\n- **transfer** : Virement bancaire (utilisez `modality` pour les coordonnées bancaires)\n- **stripe** : Stripe (`public` pour la clé publique, `secret` pour la clé secrète)\n- **paypal** : PayPal (`public` pour l'identifiant marchand)\n- **paybox** : Paybox (`public`, `secret`, `rang`, `site`)\n- **epayment** : Paiement électronique générique\n- **other** : Autre\n\n## Mode test\n\nUtilisez `isTest: true` pour créer un moyen de paiement en mode test.\nLes paiements effectués avec ce moyen ne seront pas réellement débités.\n\n## Moyen par défaut\n\nSi `default: true`, ce moyen sera automatiquement sélectionné pour les nouveaux documents.\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/payment_method_create_response',\n  $defs: {\n    payment_method_create_response: {\n      type: 'object',\n      properties: {\n        newPaymentMethod: {\n          $ref: '#/$defs/payment_method'\n        }\n      }\n    },\n    payment_method: {\n      type: 'object',\n      properties: {\n        _id: {\n          type: 'string',\n          description: 'Unique identifier for the payment method'\n        },\n        company: {\n          type: 'string',\n          description: 'Reference to the company'\n        },\n        default: {\n          type: 'boolean',\n          description: 'Whether this is the default payment method'\n        },\n        isTest: {\n          type: 'boolean',\n          description: 'Whether this is a test payment method'\n        },\n        modality: {\n          type: 'string',\n          description: 'Additional information about the payment method'\n        },\n        name: {\n          type: 'string',\n          description: 'Name of the payment method'\n        },\n        nbInvoices: {\n          type: 'integer',\n          description: 'Number of invoices using this payment method'\n        },\n        nbQuotes: {\n          type: 'integer',\n          description: 'Number of quotes using this payment method'\n        },\n        public: {\n          type: 'string',\n          description: 'Public information'\n        },\n        rang: {\n          type: 'string',\n          description: 'Paybox specific field'\n        },\n        secret: {\n          type: 'string',\n          description: 'Secret information'\n        },\n        site: {\n          type: 'string',\n          description: 'Paybox specific field'\n        },\n        state: {\n          type: 'string',\n          description: 'State of the payment method',\n          enum: [            'active',\n            'inactive'\n          ]\n        },\n        tag: {\n          type: 'string',\n          description: 'Type of payment method',\n          enum: [            'paybox',\n            'epayment',\n            'check',\n            'stripe',\n            'paypal',\n            'transfer',\n            'other'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'Nom du moyen de paiement (obligatoire)',
      },
      default: {
        type: 'boolean',
        description: 'Définir comme moyen par défaut',
      },
      isTest: {
        type: 'boolean',
        description: 'Mode test (pas de paiement réel)',
      },
      modality: {
        type: 'string',
        description:
          'Modalités de paiement affichées sur les documents.\nEx. coordonnées bancaires, délai de paiement, etc.\n',
      },
      public: {
        type: 'string',
        description: 'Clé publique (Stripe, Paybox) ou identifiant marchand (PayPal)',
      },
      rang: {
        type: 'string',
        description: 'Rang Paybox (spécifique Paybox)',
      },
      secret: {
        type: 'string',
        description: 'Clé secrète (Stripe, Paybox) - **Ne jamais exposer côté client**',
      },
      site: {
        type: 'string',
        description: 'Numéro de site Paybox (spécifique Paybox)',
      },
      tag: {
        type: 'string',
        description: 'Type de moyen de paiement',
        enum: ['paybox', 'epayment', 'check', 'stripe', 'paypal', 'transfer', 'other'],
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.paymentMethods.create(body)));
  } catch (error) {
    if (error instanceof Wuro.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
