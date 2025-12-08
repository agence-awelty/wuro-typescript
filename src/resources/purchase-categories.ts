// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PurchaseCategories extends APIResource {
  /**
   * Crée une nouvelle catégorie pour organiser les achats/dépenses.
   *
   * **Exemples de catégories:**
   *
   * - Fournitures de bureau
   * - Services externes
   * - Frais de déplacement
   * - Abonnements
   *
   * **Champs requis:**
   *
   * - `name` : Nom de la catégorie
   *
   * **Événement déclenché:** CREATE_PURCHASE_CATEGORY
   */
  create(body: PurchaseCategoryCreateParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post('/purchase-category', { body, ...options });
  }

  /**
   * Récupère les détails d'une catégorie d'achat spécifique.
   */
  retrieve(uid: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/purchase-category/${uid}`, options);
  }

  /**
   * Met à jour une catégorie d'achat existante.
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
  update(uid: string, body: PurchaseCategoryUpdateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/purchase-category/${uid}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Récupère la liste de toutes les catégories d'achats de l'entreprise.
   *
   * **Utilisation:**
   *
   * - Organisation des dépenses par type (fournitures, services, etc.)
   * - Ventilation comptable des achats
   * - Rapports et statistiques par catégorie
   */
  list(options?: RequestOptions): APIPromise<PurchaseCategoryListResponse> {
    return this._client.get('/purchase-categories', options);
  }

  /**
   * Supprime une catégorie d'achat.
   *
   * **Attention:**
   *
   * - Les achats associés à cette catégorie ne seront plus catégorisés
   * - Cette opération est irréversible
   */
  delete(uid: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/purchase-category/${uid}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type PurchaseCategoryCreateResponse = unknown;

export type PurchaseCategoryRetrieveResponse = unknown;

export interface PurchaseCategoryListResponse {
  /**
   * Nombre total de catégories
   */
  count?: number;

  data?: Array<unknown>;
}

export interface PurchaseCategoryCreateParams {
  /**
   * Nom de la catégorie
   */
  name: string;

  /**
   * ID de l'entreprise (optionnel, défaut = entreprise courante)
   */
  company?: string;
}

export interface PurchaseCategoryUpdateParams {
  /**
   * Nouveau nom de la catégorie
   */
  name?: string;

  /**
   * État de la catégorie
   */
  state?: 'active' | 'inactive';
}

export declare namespace PurchaseCategories {
  export {
    type PurchaseCategoryCreateResponse as PurchaseCategoryCreateResponse,
    type PurchaseCategoryRetrieveResponse as PurchaseCategoryRetrieveResponse,
    type PurchaseCategoryListResponse as PurchaseCategoryListResponse,
    type PurchaseCategoryCreateParams as PurchaseCategoryCreateParams,
    type PurchaseCategoryUpdateParams as PurchaseCategoryUpdateParams,
  };
}
