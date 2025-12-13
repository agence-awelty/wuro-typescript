// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Variant extends APIResource {
  /**
   * Crée une nouvelle variante pour un produit existant.
   *
   * **Exemples de variantes:**
   *
   * - Tailles : S, M, L, XL
   * - Couleurs : Rouge, Bleu, Vert
   * - Options : Avec option A, Sans option A
   *
   * **Propriétés personnalisables:**
   *
   * - Prix spécifique à la variante
   * - Stock propre à la variante
   * - Référence distincte
   *
   * **Événement déclenché:** CREATE_PRODUCT_VARIANT
   */
  create(uid: string, body: VariantCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/product/${uid}/variant`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Récupère les détails d'une variante de produit spécifique.
   */
  retrieve(uid: string, params: VariantRetrieveParams, options?: RequestOptions): APIPromise<void> {
    const { productId } = params;
    return this._client.get(path`/product/${productId}/variant/${uid}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Met à jour une variante de produit existante.
   *
   * **Modifications possibles:**
   *
   * - Prix de la variante
   * - Stock
   * - Référence
   * - Attributs de la variante
   *
   * **Événement déclenché:** UPDATE_PRODUCT_VARIANT
   */
  update(uid: string, params: VariantUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { productId, ...body } = params;
    return this._client.patch(path`/product/${productId}/variant/${uid}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

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

  /**
   * Supprime une variante de produit.
   *
   * **Attention:**
   *
   * - Cette opération est irréversible
   * - La variante ne sera plus disponible à la vente
   *
   * **Événement déclenché:** DELETE_PRODUCT_VARIANT
   */
  delete(uid: string, params: VariantDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { productId } = params;
    return this._client.delete(path`/product/${productId}/variant/${uid}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ProductVariantInput {
  buying_price?: number;

  name?: string;

  options?: unknown;

  price_ht?: number;

  reference?: string;

  sku?: string;

  stock?: ProductVariantInput.Stock;

  tva_rate?: number;
}

export namespace ProductVariantInput {
  export interface Stock {
    nb_alert?: number;

    nb_min?: number;

    nb_stock?: number;
  }
}

export interface VariantCreateParams {
  buying_price?: number;

  name?: string;

  options?: unknown;

  price_ht?: number;

  reference?: string;

  sku?: string;

  stock?: VariantCreateParams.Stock;

  tva_rate?: number;
}

export namespace VariantCreateParams {
  export interface Stock {
    nb_alert?: number;

    nb_min?: number;

    nb_stock?: number;
  }
}

export interface VariantRetrieveParams {
  /**
   * Identifiant unique du produit parent
   */
  productId: string;
}

export interface VariantUpdateParams {
  /**
   * Path param: Identifiant unique du produit parent
   */
  productId: string;

  /**
   * Body param:
   */
  buying_price?: number;

  /**
   * Body param:
   */
  name?: string;

  /**
   * Body param:
   */
  options?: unknown;

  /**
   * Body param:
   */
  price_ht?: number;

  /**
   * Body param:
   */
  reference?: string;

  /**
   * Body param:
   */
  sku?: string;

  /**
   * Body param:
   */
  stock?: VariantUpdateParams.Stock;

  /**
   * Body param:
   */
  tva_rate?: number;
}

export namespace VariantUpdateParams {
  export interface Stock {
    nb_alert?: number;

    nb_min?: number;

    nb_stock?: number;
  }
}

export interface VariantDeleteParams {
  /**
   * Identifiant unique du produit parent
   */
  productId: string;
}

export declare namespace Variant {
  export {
    type ProductVariantInput as ProductVariantInput,
    type VariantCreateParams as VariantCreateParams,
    type VariantRetrieveParams as VariantRetrieveParams,
    type VariantUpdateParams as VariantUpdateParams,
    type VariantDeleteParams as VariantDeleteParams,
  };
}
