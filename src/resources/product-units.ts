// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class ProductUnits extends APIResource {
  /**
   * Récupère la liste des unités de mesure utilisables pour les produits.
   *
   * **Unités standard:**
   *
   * - Pièce, Unité
   * - Heure, Jour, Mois
   * - Kilogramme, Litre, Mètre
   * - Forfait
   *
   * **Utilisation:**
   *
   * - Sélection de l'unité lors de la création/modification d'un produit
   * - Affichage sur les devis et factures
   */
  list(options?: RequestOptions): APIPromise<ProductUnitListResponse> {
    return this._client.get('/product-units', options);
  }
}

export type ProductUnitListResponse = Array<ProductUnitListResponse.ProductUnitListResponseItem>;

export namespace ProductUnitListResponse {
  export interface ProductUnitListResponseItem {
    /**
     * Libellé affiché
     */
    label?: string;

    /**
     * Valeur technique de l'unité
     */
    value?: string;
  }
}

export declare namespace ProductUnits {
  export { type ProductUnitListResponse as ProductUnitListResponse };
}
