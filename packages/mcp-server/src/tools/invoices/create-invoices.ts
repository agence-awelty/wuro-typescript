// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'invoices',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/invoice',
  operationId: 'createInvoice',
};

export const tool: Tool = {
  name: 'create_invoices',
  description:
    "Crée une nouvelle facture.\n\n**Numérotation automatique:**\n- Si l'état est 'waiting', 'paid', 'notpaid' ou 'late', un numéro est automatiquement attribué\n- Le système verrouille la numérotation pendant l'attribution pour éviter les doublons\n- Un numéro d'enregistrement FEC (numberRecord) est aussi généré\n\n**Types de factures:**\n- `invoice`: Facture standard\n- `invoice_credit`: Avoir\n- `external`: Facture externe (client fournisseur)\n- `external_credit`: Avoir externe\n- `proforma`: Facture proforma\n- `advance`: Acompte\n\n**Calculs automatiques:**\n- Les totaux HT, TVA et TTC sont calculés automatiquement\n- Les réductions globales sont appliquées\n- La date d'échéance est calculée selon les paramètres de l'entreprise\n\n**Événements déclenchés:**\n- CREATE_INVOICE\n- Mise à jour du stock si nécessaire\n\n**Réponse:**\n- Inclut les liens `pdf_link` et `html_link` pour accéder aux documents\n",
  inputSchema: {
    type: 'object',
    properties: {
      client: {
        type: 'string',
        description: 'ID du client',
      },
      client_address: {
        type: 'string',
      },
      client_city: {
        type: 'string',
      },
      client_country: {
        type: 'string',
      },
      client_email: {
        type: 'string',
        description: "Email pour l'envoi de la facture",
      },
      client_name: {
        type: 'string',
        description: 'Nom du client (si pas de client référencé)',
      },
      client_zip_code: {
        type: 'string',
      },
      date: {
        type: 'string',
        description: 'Date de la facture (défaut = maintenant)',
        format: 'date-time',
      },
      invoice_lines: {
        type: 'array',
        description: 'Lignes de la facture',
        items: {
          type: 'object',
          properties: {
            description: {
              type: 'string',
              description: 'Description détaillée',
            },
            discount: {
              type: 'number',
              description: 'Remise en pourcentage',
            },
            price_ht: {
              type: 'number',
              description: 'Prix unitaire HT',
            },
            product: {
              type: 'string',
              description: 'ID du produit (optionnel)',
            },
            quantity: {
              type: 'number',
            },
            reference: {
              type: 'string',
              description: 'Référence produit',
            },
            title: {
              type: 'string',
              description: 'Titre de la ligne',
            },
            tva_rate: {
              type: 'number',
              description: 'Taux de TVA (ex. 20 pour 20%)',
            },
            type: {
              type: 'string',
              description: 'Type de ligne',
              enum: ['product', 'header', 'subtotal', 'globalDiscount'],
            },
            unit: {
              type: 'string',
              description: 'Unité (pièce, heure, etc.)',
            },
          },
        },
      },
      payment_expiry_date: {
        type: 'string',
        description: "Date d'échéance (calculée automatiquement si non fournie)",
        format: 'date-time',
      },
      state: {
        type: 'string',
        description: 'État initial (draft = brouillon sans numéro)',
        enum: ['draft', 'waiting', 'paid', 'notpaid', 'late'],
      },
      title: {
        type: 'string',
        description: 'Titre/objet de la facture',
      },
      type: {
        type: 'string',
        enum: ['invoice', 'invoice_credit', 'external', 'external_credit', 'proforma', 'advance'],
      },
    },
    required: [],
  },
  annotations: {},
};

export const handler = async (client: Wuro, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  try {
    return asTextContentResult(await client.invoices.create(body));
  } catch (error) {
    if (error instanceof Wuro.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
