// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Line extends APIResource {
  /**
   * Met à jour une ligne existante d'une facture.
   *
   * **Restrictions:**
   *
   * - La facture ne doit pas être numérotée (en brouillon uniquement)
   * - Une facture validée ne peut pas être modifiée
   *
   * **Comportement:**
   *
   * - Les totaux de la facture sont automatiquement recalculés après modification
   * - Seuls les champs fournis sont modifiés (mise à jour partielle)
   *
   * **Types de lignes:**
   *
   * - **product** : Ligne produit standard avec prix et quantité
   * - **header** : Ligne de titre/séparation
   * - **subtotal** : Sous-total automatique
   * - **globalDiscount** : Remise globale
   *
   * **Événement déclenché:** UPDATE_INVOICE
   */
  update(
    lineUuid: string,
    params: LineUpdateParams,
    options?: RequestOptions,
  ): APIPromise<LineUpdateResponse> {
    const { uid, ...body } = params;
    return this._client.patch(path`/invoice/${uid}/line/${lineUuid}`, { body, ...options });
  }

  /**
   * Supprime une ligne d'une facture existante.
   *
   * **Restrictions:**
   *
   * - La facture ne doit pas être numérotée (en brouillon uniquement)
   * - Une facture validée ne peut pas être modifiée
   *
   * **Comportement:**
   *
   * - Les totaux de la facture sont automatiquement recalculés après suppression
   * - La ligne est définitivement supprimée (pas de soft delete)
   *
   * **Événement déclenché:** UPDATE_INVOICE
   */
  delete(lineUuid: string, params: LineDeleteParams, options?: RequestOptions): APIPromise<Invoice> {
    const { uid } = params;
    return this._client.delete(path`/invoice/${uid}/line/${lineUuid}`, options);
  }

  /**
   * Ajoute une nouvelle ligne à une facture existante.
   *
   * Les totaux sont automatiquement recalculés après l'ajout.
   */
  add(uid: string, body: LineAddParams, options?: RequestOptions): APIPromise<LineAddResponse> {
    return this._client.post(path`/invoice/${uid}/line`, { body, ...options });
  }
}

export interface Invoice {
  /**
   * Unique identifier for the invoice
   */
  _id?: string;

  /**
   * List of advance payments
   */
  acomptes?: Array<Invoice.Acompte>;

  /**
   * The currency with which the company works for this invoice
   */
  base_currency?: string;

  /**
   * Reference to the client
   */
  client?: string;

  /**
   * Address of the client
   */
  client_address?: string;

  /**
   * City of the client
   */
  client_city?: string;

  /**
   * Country of the client
   */
  client_country?: string;

  /**
   * Email of the client
   */
  client_email?: string;

  /**
   * Name of the client
   */
  client_name?: string;

  /**
   * Phone number of the client
   */
  client_phone?: string;

  /**
   * Zip code of the client
   */
  client_zip_code?: string;

  /**
   * Reference to the company
   */
  company?: string;

  /**
   * Name of the company
   */
  company_name?: string;

  /**
   * Date of the invoice
   */
  date?: string;

  /**
   * List of invoice lines
   */
  invoice_lines?: Array<InvoiceLine>;

  /**
   * Invoice number
   */
  number?: string;

  /**
   * Expiry date for payment
   */
  payment_expiry_date?: string;

  /**
   * List of payments
   */
  payments?: Array<Invoice.Payment>;

  /**
   * State of the invoice
   */
  state?: 'draft' | 'waiting' | 'paid' | 'notpaid' | 'late' | 'inactive';

  /**
   * Short description or label of the invoice
   */
  title?: string;

  /**
   * Total amount without tax
   */
  total_ht?: number;

  /**
   * Total amount with tax
   */
  total_ttc?: number;

  /**
   * Total tax amount
   */
  total_tva?: number;

  /**
   * Type of the invoice
   */
  type?: 'invoice' | 'credit' | 'sold' | 'advance' | 'external' | 'external_credit';

  /**
   * List of VAT rates applied to the invoice
   */
  VATRates?: Array<VatRate>;
}

export namespace Invoice {
  export interface Acompte {
    _id?: string;

    /**
     * Amount of the advance payment
     */
    amount?: number;

    /**
     * Amount without tax
     */
    amount_ht?: number;

    credit?: boolean;

    date?: string;
  }

  export interface Payment {
    /**
     * Unique identifier for the payment
     */
    _id?: string;

    /**
     * Amount of the payment
     */
    amount?: number;

    /**
     * Check number if applicable
     */
    check_number?: string;

    /**
     * Date of the payment
     */
    date?: string;

    /**
     * Name of the payment method
     */
    method_name?: string;

    /**
     * Reference to the payment method
     */
    mode?: string;
  }
}

export interface InvoiceLine {
  /**
   * Unique identifier for the line
   */
  _id?: string;

  /**
   * Description of the line
   */
  description?: string;

  /**
   * Price without tax
   */
  price_ht?: number;

  /**
   * Quantity
   */
  quantity?: number;

  /**
   * Reference of the product
   */
  reference?: string;

  /**
   * Title of the line
   */
  title?: string;

  /**
   * Total amount without tax
   */
  total_ht?: number;

  /**
   * Total amount with tax
   */
  total_ttc?: number;

  /**
   * VAT rate
   */
  tva_rate?: number;

  /**
   * Type of the line
   */
  type?: 'product' | 'header' | 'subtotal' | 'globalDiscount';

  /**
   * Unit of measurement
   */
  unit?: string;
}

export interface VatRate {
  /**
   * Amount of VAT
   */
  amount?: number;

  /**
   * VAT rate
   */
  rate?: string;

  /**
   * Total amount with this VAT rate
   */
  total?: number;
}

export interface LineUpdateResponse {
  invoice?: Invoice;

  line?: InvoiceLine;
}

export interface LineAddResponse {
  invoice?: Invoice;

  line?: InvoiceLine;
}

export interface LineUpdateParams {
  /**
   * Path param: Identifiant unique de la facture
   */
  uid: string;

  /**
   * Body param: Description détaillée
   */
  description?: string;

  /**
   * Body param: Remise en pourcentage
   */
  discount?: number;

  /**
   * Body param: Prix unitaire HT
   */
  price_ht?: number;

  /**
   * Body param: Quantité
   */
  quantity?: number;

  /**
   * Body param: Référence produit
   */
  reference?: string;

  /**
   * Body param: Titre de la ligne
   */
  title?: string;

  /**
   * Body param: Taux de TVA (ex. 20 pour 20%)
   */
  tva_rate?: number;

  /**
   * Body param: Unité de mesure (pièce, heure, kg, etc.)
   */
  unit?: string;
}

export interface LineDeleteParams {
  /**
   * Identifiant unique de la facture
   */
  uid: string;
}

export interface LineAddParams {
  /**
   * Unique identifier for the line
   */
  _id?: string;

  /**
   * Description of the line
   */
  description?: string;

  /**
   * Price without tax
   */
  price_ht?: number;

  /**
   * Quantity
   */
  quantity?: number;

  /**
   * Reference of the product
   */
  reference?: string;

  /**
   * Title of the line
   */
  title?: string;

  /**
   * Total amount without tax
   */
  total_ht?: number;

  /**
   * Total amount with tax
   */
  total_ttc?: number;

  /**
   * VAT rate
   */
  tva_rate?: number;

  /**
   * Type of the line
   */
  type?: 'product' | 'header' | 'subtotal' | 'globalDiscount';

  /**
   * Unit of measurement
   */
  unit?: string;
}

export declare namespace Line {
  export {
    type Invoice as Invoice,
    type InvoiceLine as InvoiceLine,
    type VatRate as VatRate,
    type LineUpdateResponse as LineUpdateResponse,
    type LineAddResponse as LineAddResponse,
    type LineUpdateParams as LineUpdateParams,
    type LineDeleteParams as LineDeleteParams,
    type LineAddParams as LineAddParams,
  };
}
