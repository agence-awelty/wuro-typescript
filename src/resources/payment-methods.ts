// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PaymentMethods extends APIResource {
  /**
   * Crée un nouveau moyen de paiement pour l'entreprise.
   *
   * ## Types de moyens de paiement
   *
   * Le champ `tag` définit le type de moyen de paiement et détermine les champs
   * additionnels requis :
   *
   * - **check** : Chèque (pas de champs supplémentaires)
   * - **transfer** : Virement bancaire (utilisez `modality` pour les coordonnées
   *   bancaires)
   * - **stripe** : Stripe (`public` pour la clé publique, `secret` pour la clé
   *   secrète)
   * - **paypal** : PayPal (`public` pour l'identifiant marchand)
   * - **paybox** : Paybox (`public`, `secret`, `rang`, `site`)
   * - **epayment** : Paiement électronique générique
   * - **other** : Autre
   *
   * ## Mode test
   *
   * Utilisez `isTest: true` pour créer un moyen de paiement en mode test. Les
   * paiements effectués avec ce moyen ne seront pas réellement débités.
   *
   * ## Moyen par défaut
   *
   * Si `default: true`, ce moyen sera automatiquement sélectionné pour les nouveaux
   * documents.
   *
   * @example
   * ```ts
   * const paymentMethod = await client.paymentMethods.create({
   *   name: 'Virement bancaire',
   * });
   * ```
   */
  create(body: PaymentMethodCreateParams, options?: RequestOptions): APIPromise<PaymentMethodCreateResponse> {
    return this._client.post('/payment-method', { body, ...options });
  }

  /**
   * Récupère les informations détaillées d'un moyen de paiement par son identifiant.
   *
   * Les informations incluent le nom, le type (tag), les modalités de paiement et si
   * c'est le moyen par défaut.
   *
   * @example
   * ```ts
   * const paymentMethod = await client.paymentMethods.retrieve(
   *   'uid',
   * );
   * ```
   */
  retrieve(uid: string, options?: RequestOptions): APIPromise<PaymentMethodRetrieveResponse> {
    return this._client.get(path`/payment-method/${uid}`, options);
  }

  /**
   * Met à jour un moyen de paiement existant.
   *
   * ## Définir comme défaut
   *
   * Si vous définissez `default: true`, ce moyen deviendra le moyen par défaut pour
   * les nouveaux documents. L'ancien moyen par défaut sera automatiquement
   * désélectionné.
   *
   * ## Désactivation
   *
   * Utilisez `state: "inactive"` pour masquer un moyen de paiement sans le
   * supprimer. Les documents existants utilisant ce moyen ne seront pas affectés.
   *
   * @example
   * ```ts
   * const paymentMethod = await client.paymentMethods.update(
   *   'uid',
   * );
   * ```
   */
  update(
    uid: string,
    body: PaymentMethodUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PaymentMethodUpdateResponse> {
    return this._client.patch(path`/payment-method/${uid}`, { body, ...options });
  }

  /**
   * Récupère la liste de tous les moyens de paiement configurés pour l'entreprise.
   *
   * Les moyens de paiement sont utilisés sur les factures et devis pour indiquer au
   * client comment régler sa facture.
   *
   * ## Types de moyens de paiement (tags)
   *
   * - **check** : Chèque
   * - **transfer** : Virement bancaire
   * - **paybox** : Paiement Paybox
   * - **stripe** : Paiement Stripe
   * - **paypal** : Paiement PayPal
   * - **epayment** : Paiement électronique générique
   * - **other** : Autre moyen de paiement
   *
   * ## Moyen de paiement par défaut
   *
   * Un seul moyen peut être défini comme "default" et sera automatiquement
   * sélectionné lors de la création de nouveaux documents.
   *
   * @example
   * ```ts
   * const paymentMethods = await client.paymentMethods.list();
   * ```
   */
  list(
    query: PaymentMethodListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PaymentMethodListResponse> {
    return this._client.get('/payment-methods', { query, ...options });
  }

  /**
   * Supprime un moyen de paiement (soft delete).
   *
   * Le moyen passe en état "inactive" et n'est plus proposé pour les nouveaux
   * documents.
   *
   * **Note** : Il est recommandé d'utiliser PATCH avec `state: "inactive"` plutôt
   * que DELETE pour conserver l'historique des documents utilisant ce moyen.
   *
   * @example
   * ```ts
   * const paymentMethod = await client.paymentMethods.delete(
   *   'uid',
   * );
   * ```
   */
  delete(uid: string, options?: RequestOptions): APIPromise<PaymentMethodDeleteResponse> {
    return this._client.delete(path`/payment-method/${uid}`, options);
  }
}

export interface PaymentMethod {
  /**
   * Unique identifier for the payment method
   */
  _id?: string;

  /**
   * Reference to the company
   */
  company?: string;

  /**
   * Whether this is the default payment method
   */
  default?: boolean;

  /**
   * Whether this is a test payment method
   */
  isTest?: boolean;

  /**
   * Additional information about the payment method
   */
  modality?: string;

  /**
   * Name of the payment method
   */
  name?: string;

  /**
   * Number of invoices using this payment method
   */
  nbInvoices?: number;

  /**
   * Number of quotes using this payment method
   */
  nbQuotes?: number;

  /**
   * Public information
   */
  public?: string;

  /**
   * Paybox specific field
   */
  rang?: string;

  /**
   * Secret information
   */
  secret?: string;

  /**
   * Paybox specific field
   */
  site?: string;

  /**
   * State of the payment method
   */
  state?: 'active' | 'inactive';

  /**
   * Type of payment method
   */
  tag?: 'paybox' | 'epayment' | 'check' | 'stripe' | 'paypal' | 'transfer' | 'other';
}

export interface PaymentMethodCreateResponse {
  newPaymentMethod?: PaymentMethod;
}

export interface PaymentMethodRetrieveResponse {
  paymentMethod?: PaymentMethod;
}

export interface PaymentMethodUpdateResponse {
  updatedPaymentMethod?: PaymentMethod;
}

export interface PaymentMethodListResponse {
  /**
   * Tableau des moyens de paiement
   */
  paymentMethods?: Array<PaymentMethod>;

  /**
   * Nombre total de moyens de paiement
   */
  total?: number;
}

export interface PaymentMethodDeleteResponse {
  paymentMethod?: PaymentMethod;
}

export interface PaymentMethodCreateParams {
  /**
   * Nom du moyen de paiement (obligatoire)
   */
  name: string;

  /**
   * Définir comme moyen par défaut
   */
  default?: boolean;

  /**
   * Mode test (pas de paiement réel)
   */
  isTest?: boolean;

  /**
   * Modalités de paiement affichées sur les documents. Ex. coordonnées bancaires,
   * délai de paiement, etc.
   */
  modality?: string;

  /**
   * Clé publique (Stripe, Paybox) ou identifiant marchand (PayPal)
   */
  public?: string;

  /**
   * Rang Paybox (spécifique Paybox)
   */
  rang?: string;

  /**
   * Clé secrète (Stripe, Paybox) - **Ne jamais exposer côté client**
   */
  secret?: string;

  /**
   * Numéro de site Paybox (spécifique Paybox)
   */
  site?: string;

  /**
   * Type de moyen de paiement
   */
  tag?: 'paybox' | 'epayment' | 'check' | 'stripe' | 'paypal' | 'transfer' | 'other';
}

export interface PaymentMethodUpdateParams {
  /**
   * Définir comme moyen de paiement par défaut
   */
  default?: boolean;

  /**
   * Modalités de paiement affichées sur les documents. Ex. "Paiement à 30 jours",
   * "RIB : FR76...", "Payable à réception"
   */
  modality?: string;

  /**
   * Nom du moyen de paiement (ex. "Virement bancaire", "Carte Bancaire")
   */
  name?: string;

  /**
   * État du moyen de paiement
   */
  state?: 'active' | 'inactive';

  /**
   * Type de moyen de paiement :
   *
   * - **check** : Chèque
   * - **transfer** : Virement bancaire
   * - **stripe** : Stripe
   * - **paypal** : PayPal
   * - **paybox** : Paybox
   * - **epayment** : Paiement électronique
   * - **other** : Autre
   */
  tag?: 'paybox' | 'epayment' | 'check' | 'stripe' | 'paypal' | 'transfer' | 'other';
}

export interface PaymentMethodListParams {
  /**
   * Filtrer par état (active/inactive)
   */
  state?: 'active' | 'inactive';

  /**
   * Filtrer par type de moyen de paiement
   */
  tag?: 'paybox' | 'epayment' | 'check' | 'stripe' | 'paypal' | 'transfer' | 'other';
}

export declare namespace PaymentMethods {
  export {
    type PaymentMethod as PaymentMethod,
    type PaymentMethodCreateResponse as PaymentMethodCreateResponse,
    type PaymentMethodRetrieveResponse as PaymentMethodRetrieveResponse,
    type PaymentMethodUpdateResponse as PaymentMethodUpdateResponse,
    type PaymentMethodListResponse as PaymentMethodListResponse,
    type PaymentMethodDeleteResponse as PaymentMethodDeleteResponse,
    type PaymentMethodCreateParams as PaymentMethodCreateParams,
    type PaymentMethodUpdateParams as PaymentMethodUpdateParams,
    type PaymentMethodListParams as PaymentMethodListParams,
  };
}
