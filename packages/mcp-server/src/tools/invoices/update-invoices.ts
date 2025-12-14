// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'invoices',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/invoice/{uid}',
  operationId: 'updateInvoice',
};

export const tool: Tool = {
  name: 'update_invoices',
  description:
    "Met à jour une facture existante.\n\n**Numérotation automatique:**\n- Si la facture passe de 'draft' à un état validé (waiting, paid, etc.), un numéro est automatiquement attribué\n- Le numéro est verrouillé pendant l'attribution pour éviter les doublons\n- Un numéro d'enregistrement FEC (numberRecord) est aussi généré\n\n**Restrictions:**\n- Une facture numérotée ne peut pas revenir en brouillon\n- Certaines modifications sont interdites sur les factures validées\n\n**Événements déclenchés:**\n- Mise à jour du stock si nécessaire\n- Logs de numérotation\n",
  inputSchema: {
    type: 'object',
    properties: {
      uid: {
        type: 'string',
      },
      client: {
        type: 'string',
        description: 'ID du client',
      },
      client_address: {
        type: 'string',
        description: 'Adresse du client',
      },
      client_city: {
        type: 'string',
      },
      client_country: {
        type: 'string',
      },
      client_email: {
        type: 'string',
      },
      client_name: {
        type: 'string',
        description: 'Nom du client',
      },
      client_zip_code: {
        type: 'string',
      },
      date: {
        type: 'string',
        description: 'Date de la facture',
        format: 'date-time',
      },
      invoice_lines: {
        type: 'array',
        description: 'Lignes de la facture',
        items: {
          $ref: '#/$defs/invoice_line',
        },
      },
      payment_expiry_date: {
        type: 'string',
        description: "Date d'échéance de paiement",
        format: 'date-time',
      },
      state: {
        type: 'string',
        description: 'État de la facture',
        enum: ['draft', 'waiting', 'paid', 'notpaid', 'late'],
      },
      title: {
        type: 'string',
        description: 'Titre/objet de la facture',
      },
      type: {
        type: 'string',
        description: 'Type de facture',
        enum: ['invoice', 'invoice_credit', 'external', 'external_credit', 'proforma', 'advance'],
      },
    },
    required: ['uid'],
    $defs: {
      invoice_line: {
        type: 'object',
        properties: {
          _id: {
            type: 'string',
            description: 'Unique identifier for the line',
          },
          description: {
            type: 'string',
            description: 'Description of the line',
          },
          price_ht: {
            type: 'number',
            description: 'Price without tax',
          },
          quantity: {
            type: 'number',
            description: 'Quantity',
          },
          reference: {
            type: 'string',
            description: 'Reference of the product',
          },
          title: {
            type: 'string',
            description: 'Title of the line',
          },
          total_ht: {
            type: 'number',
            description: 'Total amount without tax',
          },
          total_ttc: {
            type: 'number',
            description: 'Total amount with tax',
          },
          tva_rate: {
            type: 'number',
            description: 'VAT rate',
          },
          type: {
            type: 'string',
            description: 'Type of the line',
            enum: ['product', 'header', 'subtotal', 'globalDiscount'],
          },
          unit: {
            type: 'string',
            description: 'Unit of measurement',
          },
        },
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Wuro, args: Record<string, unknown> | undefined) => {
  const { uid, ...body } = args as any;
  try {
    return asTextContentResult(await client.invoices.update(uid, body));
  } catch (error) {
    if (error instanceof Wuro.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
