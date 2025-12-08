// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class ProductCategories extends APIResource {
  /**
   * Crée une nouvelle catégorie pour organiser les produits.
   *
   * **Champs requis:**
   *
   * - `name` : Nom de la catégorie
   *
   * **Événement déclenché:** CREATE_PRODUCT_CATEGORY
   */
  create(body: ProductCategoryCreateParams, options?: RequestOptions): APIPromise<ProductCategory> {
    return this._client.post('/product-category', { body, ...options });
  }

  /**
   * Récupère les détails d'une catégorie de produit spécifique.
   */
  retrieve(uid: string, options?: RequestOptions): APIPromise<ProductCategory> {
    return this._client.get(path`/product-category/${uid}`, options);
  }

  /**
   * Met à jour une catégorie de produit existante.
   *
   * **Modifications possibles:**
   *
   * - Renommer la catégorie
   * - Activer/désactiver la catégorie
   *
   * **États:**
   *
   * - `active` : Catégorie visible et utilisable
   * - `inactive` : Catégorie masquée
   */
  update(uid: string, body: ProductCategoryUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/product-category/${uid}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Récupère la liste de toutes les catégories de produits de l'entreprise.
   *
   * **Utilisation:**
   *
   * - Organisation du catalogue produits
   * - Filtrage des produits par catégorie
   * - Rapports et statistiques par catégorie
   */
  list(options?: RequestOptions): APIPromise<ProductCategoryListResponse> {
    return this._client.get('/product-categories', options);
  }

  /**
   * Supprime une catégorie de produit.
   *
   * **Attention:**
   *
   * - Les produits associés à cette catégorie ne seront plus catégorisés
   * - Cette opération est irréversible
   */
  delete(uid: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/product-category/${uid}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ProductCategory {
  _id?: string;

  company?: string;

  createdAt?: string;

  name?: string;

  state?: 'active' | 'inactive';

  updatedAt?: string;
}

export interface ProductCategoryListResponse {
  /**
   * Nombre total de catégories
   */
  count?: number;

  data?: Array<ProductCategory>;
}

export interface ProductCategoryCreateParams {
  /**
   * Nom de la catégorie
   */
  name: string;

  /**
   * ID de l'entreprise (optionnel, défaut = entreprise courante)
   */
  company?: string;
}

export interface ProductCategoryUpdateParams {
  /**
   * Nouveau nom de la catégorie
   */
  name?: string;

  /**
   * État de la catégorie
   */
  state?: 'active' | 'inactive';
}

export declare namespace ProductCategories {
  export {
    type ProductCategory as ProductCategory,
    type ProductCategoryListResponse as ProductCategoryListResponse,
    type ProductCategoryCreateParams as ProductCategoryCreateParams,
    type ProductCategoryUpdateParams as ProductCategoryUpdateParams,
  };
}
