// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'products.variant',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/product-variants',
  operationId: 'getAllProductVariants',
};

export const tool: Tool = {
  name: 'list_products_variant',
  description:
    "Récupère la liste de toutes les variantes de produits de l'entreprise.\n\n**Concept de variante:**\n- Une variante est une déclinaison d'un produit (taille, couleur, etc.)\n- Chaque variante peut avoir son propre prix et stock\n- Les variantes héritent des propriétés du produit parent\n\n**Utilisation:**\n- Gestion des déclinaisons produit\n- Suivi du stock par variante\n",
  inputSchema: {
    type: 'object',
    properties: {},
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Wuro, args: Record<string, unknown> | undefined) => {
  const response = await client.products.variant.list().asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
