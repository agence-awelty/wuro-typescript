// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as LineAPI from './invoices/line';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Purchases extends APIResource {
  /**
   * Crée un nouvel achat (facture fournisseur).
   *
   * ## Champs principaux
   *
   * - **supplier** : Référence du fournisseur
   * - **supplier_name** : Nom du fournisseur
   * - **date** : Date de l'achat
   * - **lines** : Lignes de l'achat (produits/services)
   *
   * ## États disponibles
   *
   * L'achat peut être créé directement en état :
   *
   * - **draft** : Brouillon
   * - **waiting** : En attente
   * - **paid** : Déjà payé
   *
   * ## Événement déclenché
   *
   * Un événement `CREATE_PURCHASE` est émis après la création.
   */
  create(body: PurchaseCreateParams, options?: RequestOptions): APIPromise<PurchaseCreateResponse> {
    return this._client.post('/purchase', { body, ...options });
  }

  /**
   * Récupère les informations détaillées d'un achat par son identifiant.
   *
   * Les informations incluent :
   *
   * - Informations du fournisseur
   * - Lignes de l'achat (produits/services, quantités, prix)
   * - Montants (HT, TVA, TTC)
   * - État et échéances de paiement
   */
  retrieve(
    uid: string,
    query: PurchaseRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PurchaseRetrieveResponse> {
    return this._client.get(path`/purchase/${uid}`, { query, ...options });
  }

  /**
   * Met à jour un achat existant.
   *
   * Vous pouvez modifier :
   *
   * - Les informations fournisseur
   * - Les lignes de l'achat
   * - Les dates et échéances
   * - L'état (pour marquer comme payé, etc.)
   *
   * ## Événement déclenché
   *
   * Un événement `UPDATE_PURCHASE` est émis après la mise à jour.
   */
  update(
    uid: string,
    body: PurchaseUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PurchaseUpdateResponse> {
    return this._client.patch(path`/purchase/${uid}`, { body, ...options });
  }

  /**
   * Récupère la liste de tous les achats/factures fournisseurs avec pagination et
   * filtres.
   *
   * Les achats permettent de suivre les dépenses de l'entreprise (factures
   * fournisseurs, notes de frais, etc.).
   *
   * ## États disponibles
   *
   * - **draft** : Brouillon (pas encore validé)
   * - **waiting** : En attente de paiement
   * - **to_pay** : À payer
   * - **paid** : Payé
   * - **notpaid** : Impayé (échéance dépassée)
   * - **inactive** : Supprimé (soft delete)
   */
  list(
    query: PurchaseListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PurchaseListResponse> {
    return this._client.get('/purchases', { query, ...options });
  }

  /**
   * Supprime un achat (soft delete).
   *
   * L'achat passe en état "inactive" et n'apparaît plus dans les listes standards.
   *
   * ## Événement déclenché
   *
   * Un événement `DELETE_PURCHASE` est émis après la suppression.
   */
  delete(uid: string, options?: RequestOptions): APIPromise<PurchaseDeleteResponse> {
    return this._client.delete(path`/purchase/${uid}`, options);
  }

  /**
   * Crée un avoir (note de crédit) lié à un achat existant.
   *
   * **Fonctionnement:**
   *
   * - L'avoir reprend les informations de l'achat d'origine avec des montants
   *   négatifs
   * - L'avoir est automatiquement lié à l'achat parent
   * - Le solde de l'achat est recalculé
   *
   * **Utilisation:**
   *
   * - Remboursement d'une facture fournisseur
   * - Correction d'une erreur de facturation
   *
   * **Événement déclenché:** CREATE_PURCHASE_CREDIT
   */
  createCredit(uid: string, options?: RequestOptions): APIPromise<PurchaseCreateCreditResponse> {
    return this._client.post(path`/purchase/${uid}/credit`, options);
  }

  /**
   * Récupère des statistiques agrégées sur les achats de l'entreprise.
   *
   * Les statistiques incluent généralement :
   *
   * - Total des achats par période
   * - Répartition par fournisseur
   * - Montants en attente de paiement
   */
  getStats(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/purchases/stats', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface Purchase {
  /**
   * Unique identifier for the purchase
   */
  _id?: string;

  analytical_code?: string;

  bank_reconciliate_total?: number;

  bank_reconciliation_status?: 'unreconciliated' | 'reconciliated' | 'partialreconciliated';

  bank_reconciliations?: Array<string>;

  base_currency?: string;

  /**
   * Purchase category references
   */
  categories?: Array<string>;

  /**
   * Reference to the company
   */
  company?: string;

  createdAt?: string;

  /**
   * Reference to original purchase for credit notes
   */
  creditForPurchase?: string;

  currency?: string;

  /**
   * Purchase date
   */
  date?: string;

  /**
   * Record date
   */
  dateRecord?: string;

  exported?: boolean;

  exportedFEC?: boolean;

  exportedPDF?: boolean;

  /**
   * Supplier invoice number
   */
  invoiceNumber?: string;

  lines?: Array<Purchase.Line>;

  /**
   * Purchase number
   */
  number?: string;

  payment_date?: string;

  payment_expiry_date?: string;

  payment_methods?: Array<string>;

  payments?: Array<Purchase.Payment>;

  state?: 'draft' | 'waiting' | 'paid' | 'to_pay' | 'notpaid' | 'inactive';

  /**
   * Reference to supplier (client)
   */
  supplier?: string;

  /**
   * Supplier code
   */
  supplier_code?: string;

  /**
   * Supplier name
   */
  supplier_name?: string;

  /**
   * Reverse charge applicable
   */
  supplierReverseCharge?: boolean;

  /**
   * Supplier VAT number
   */
  supplierTvaNumber?: string;

  /**
   * Total without tax
   */
  total_ht?: number;

  /**
   * Total with tax
   */
  total_ttc?: number;

  /**
   * Total VAT amount
   */
  total_tva?: number;

  type?: 'purchase_old' | 'purchase' | 'purchase_credit';

  updatedAt?: string;

  /**
   * Attached file URL
   */
  url?: string;

  VatRates?: Array<LineAPI.VatRate>;
}

export namespace Purchase {
  export interface Line {
    title?: string;

    totalHt?: number;

    totalTtc?: number;

    totalTva?: number;

    tva?: string;

    tvaRate?: number;

    type?: string;
  }

  export interface Payment {
    amount?: number;

    check_number?: string;

    currency?: string;

    date?: string;

    method_name?: string;

    mode?: string;
  }
}

export interface PurchaseInput {
  analytical_code?: string;

  categories?: Array<string>;

  currency?: string;

  date?: string;

  invoiceNumber?: string;

  lines?: Array<PurchaseInput.Line>;

  payment_date?: string;

  payment_expiry_date?: string;

  payments?: Array<PurchaseInput.Payment>;

  state?: 'draft' | 'waiting' | 'paid' | 'to_pay' | 'notpaid';

  supplier?: string;

  supplier_code?: string;

  supplier_name?: string;

  supplierReverseCharge?: boolean;

  supplierTvaNumber?: string;

  total_ht?: number;

  total_ttc?: number;

  total_tva?: number;

  type?: 'purchase' | 'purchase_credit';
}

export namespace PurchaseInput {
  export interface Line {
    title?: string;

    totalHt?: number;

    totalTtc?: number;

    totalTva?: number;

    tvaRate?: number;

    type?: string;
  }

  export interface Payment {
    amount?: number;

    date?: string;

    mode?: string;
  }
}

export interface PurchaseCreateResponse {
  newPurchase?: Purchase;
}

export interface PurchaseRetrieveResponse {
  purchase?: Purchase;
}

export interface PurchaseUpdateResponse {
  updatedPurchase?: Purchase;
}

export interface PurchaseListResponse {
  /**
   * Limite utilisée
   */
  limit?: number;

  /**
   * Tableau des achats
   */
  purchases?: Array<Purchase>;

  /**
   * Offset utilisé
   */
  skip?: number;

  /**
   * Nombre total d'achats
   */
  total?: number;
}

export interface PurchaseDeleteResponse {
  purchase?: Purchase;
}

export interface PurchaseCreateCreditResponse {
  newPurchase?: Purchase;
}

export interface PurchaseCreateParams {
  analytical_code?: string;

  categories?: Array<string>;

  currency?: string;

  date?: string;

  invoiceNumber?: string;

  lines?: Array<PurchaseCreateParams.Line>;

  payment_date?: string;

  payment_expiry_date?: string;

  payments?: Array<PurchaseCreateParams.Payment>;

  state?: 'draft' | 'waiting' | 'paid' | 'to_pay' | 'notpaid';

  supplier?: string;

  supplier_code?: string;

  supplier_name?: string;

  supplierReverseCharge?: boolean;

  supplierTvaNumber?: string;

  total_ht?: number;

  total_ttc?: number;

  total_tva?: number;

  type?: 'purchase' | 'purchase_credit';
}

export namespace PurchaseCreateParams {
  export interface Line {
    title?: string;

    totalHt?: number;

    totalTtc?: number;

    totalTva?: number;

    tvaRate?: number;

    type?: string;
  }

  export interface Payment {
    amount?: number;

    date?: string;

    mode?: string;
  }
}

export interface PurchaseRetrieveParams {
  /**
   * Relations à inclure (ex. "supplier")
   */
  populate?: string;
}

export interface PurchaseUpdateParams {
  analytical_code?: string;

  categories?: Array<string>;

  currency?: string;

  date?: string;

  invoiceNumber?: string;

  lines?: Array<PurchaseUpdateParams.Line>;

  payment_date?: string;

  payment_expiry_date?: string;

  payments?: Array<PurchaseUpdateParams.Payment>;

  state?: 'draft' | 'waiting' | 'paid' | 'to_pay' | 'notpaid';

  supplier?: string;

  supplier_code?: string;

  supplier_name?: string;

  supplierReverseCharge?: boolean;

  supplierTvaNumber?: string;

  total_ht?: number;

  total_ttc?: number;

  total_tva?: number;

  type?: 'purchase' | 'purchase_credit';
}

export namespace PurchaseUpdateParams {
  export interface Line {
    title?: string;

    totalHt?: number;

    totalTtc?: number;

    totalTva?: number;

    tvaRate?: number;

    type?: string;
  }

  export interface Payment {
    amount?: number;

    date?: string;

    mode?: string;
  }
}

export interface PurchaseListParams {
  /**
   * Nombre maximum d'achats à retourner
   */
  limit?: number;

  /**
   * Nombre d'achats à ignorer (pagination)
   */
  skip?: number;

  /**
   * Champ et direction de tri (ex. "date:-1" pour les plus récents)
   */
  sort?: string;

  /**
   * Filtrer par état de l'achat
   */
  state?: 'draft' | 'waiting' | 'paid' | 'to_pay' | 'notpaid' | 'inactive';

  /**
   * Filtrer par fournisseur (ID du fournisseur)
   */
  supplier?: string;
}

export declare namespace Purchases {
  export {
    type Purchase as Purchase,
    type PurchaseInput as PurchaseInput,
    type PurchaseCreateResponse as PurchaseCreateResponse,
    type PurchaseRetrieveResponse as PurchaseRetrieveResponse,
    type PurchaseUpdateResponse as PurchaseUpdateResponse,
    type PurchaseListResponse as PurchaseListResponse,
    type PurchaseDeleteResponse as PurchaseDeleteResponse,
    type PurchaseCreateCreditResponse as PurchaseCreateCreditResponse,
    type PurchaseCreateParams as PurchaseCreateParams,
    type PurchaseRetrieveParams as PurchaseRetrieveParams,
    type PurchaseUpdateParams as PurchaseUpdateParams,
    type PurchaseListParams as PurchaseListParams,
  };
}
