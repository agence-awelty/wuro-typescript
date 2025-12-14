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
  httpPath: '/company/{uid}/send-domain-confirm',
  operationId: 'sendConfirmDomain',
};

export const tool: Tool = {
  name: 'send_domain_confirmation_companies',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nEnvoie un email de confirmation pour vérifier le domaine personnalisé de l'entreprise.\n\n**Fonctionnement:**\n- Un email est envoyé à l'adresse associée au domaine\n- L'email contient un lien de confirmation\n- La confirmation permet d'activer le domaine personnalisé\n\n**Utilisation:**\n- Configuration initiale du domaine\n- Renvoi du mail de confirmation si expiré\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/company_send_domain_confirmation_response',\n  $defs: {\n    company_send_domain_confirmation_response: {\n      type: 'object',\n      properties: {\n        message: {\n          type: 'string',\n          description: 'Message de confirmation d\\'envoi'\n        }\n      }\n    }\n  }\n}\n```",
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
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.companies.sendDomainConfirmation(uid)),
    );
  } catch (error) {
    if (error instanceof Wuro.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
