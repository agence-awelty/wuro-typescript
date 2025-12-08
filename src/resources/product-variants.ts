// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class ProductVariants extends APIResource {
  /**
   * Récupère la liste de toutes les variantes de produits de l'entreprise.
   *
   * **Concept de variante:**
   *
   * - Une variante est une déclinaison d'un produit (taille, couleur, etc.)
   * - Chaque variante peut avoir son propre prix et stock
   * - Les variantes héritent des propriétés du produit parent
   *
   * **Utilisation:**
   *
   * - Gestion des déclinaisons produit
   * - Suivi du stock par variante
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/product-variants', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
