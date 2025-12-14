// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'wuro-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'invoices',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/invoice/{uid}/mail',
  operationId: 'sendInvoiceByEmail',
};

export const tool: Tool = {
  name: 'send_email_invoices',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nEnvoie la facture par email au client.\n\n**Restrictions:**\n- La facture ne doit pas être en brouillon\n\n**Personnalisation:**\n- Utilise les modèles d'email configurés dans l'entreprise\n- Variables disponibles: [lien-html], [lien-pdf], [facture-numero], [facture-date], [contact-nom], etc.\n\n**Options:**\n- `action`: 'send_invoice' (envoi standard) ou 'dunning_invoice' (relance)\n- `joinPdf`: true pour joindre le PDF en pièce jointe\n- Possibilité de personnaliser subject, content, to, copyto, replyTo\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/invoice_send_email_response',\n  $defs: {\n    invoice_send_email_response: {\n      type: 'object',\n      properties: {\n        html: {\n          type: 'string',\n          description: 'Contenu HTML de l\\'email'\n        },\n        resultId: {\n          type: 'string',\n          description: 'ID de l\\'email envoyé'\n        },\n        subject: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      uid: {
        type: 'string',
      },
      action: {
        type: 'string',
        description: "Type d'envoi (envoi ou relance)",
        enum: ['send_invoice', 'dunning_invoice'],
      },
      content: {
        type: 'string',
        description: 'Contenu personnalisé',
      },
      copyto: {
        type: 'string',
        description: 'Email en copie',
      },
      joinPdf: {
        type: 'boolean',
        description: 'Joindre le PDF en pièce jointe',
      },
      replyTo: {
        type: 'string',
        description: 'Email pour les réponses',
      },
      subject: {
        type: 'string',
        description: 'Objet personnalisé',
      },
      to: {
        type: 'string',
        description: 'Email du destinataire (défaut = email du client)',
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.invoices.sendEmail(uid, body)));
  } catch (error) {
    if (error instanceof Wuro.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
