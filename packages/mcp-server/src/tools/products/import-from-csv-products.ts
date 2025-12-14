// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'wuro-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'products',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/products/csv',
  operationId: 'importProductsCSV',
};

export const tool: Tool = {
  name: 'import_from_csv_products',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nImporte une liste de produits à partir d'un fichier CSV.\n\n**Format du fichier CSV:**\n- Le fichier doit être encodé en UTF-8\n- La première ligne doit contenir les en-têtes des colonnes\n- Séparateur de colonnes : point-virgule (;) ou virgule (,)\n\n**Colonnes supportées:**\n- `name` : Nom du produit (obligatoire)\n- `reference` : Référence produit\n- `description` : Description\n- `price_ht` : Prix unitaire HT\n- `tva_rate` : Taux de TVA\n- `unit` : Unité de mesure\n- `category` : Nom de la catégorie\n- `stock` : Quantité en stock\n\n**Comportement:**\n- Les produits existants (basé sur la référence) sont mis à jour\n- Les nouveaux produits sont créés\n- Les catégories inexistantes sont créées automatiquement\n\n**Télécharger un modèle:**\n- GET /files/products.csv pour obtenir un fichier modèle\n\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/product_import_from_csv_response',\n  $defs: {\n    product_import_from_csv_response: {\n      type: 'object',\n      properties: {\n        created: {\n          type: 'integer',\n          description: 'Nombre de produits créés'\n        },\n        errors: {\n          type: 'array',\n          description: 'Liste des erreurs rencontrées',\n          items: {\n            type: 'object',\n            additionalProperties: true\n          }\n        },\n        updated: {\n          type: 'integer',\n          description: 'Nombre de produits mis à jour'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      file: {
        type: 'string',
        description: 'Fichier CSV à importer',
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
  annotations: {},
};

export const handler = async (client: Wuro, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.products.importFromCsv(body)));
  } catch (error) {
    if (error instanceof Wuro.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
