// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as LineAPI from '../invoices/line';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Line extends APIResource {
  /**
   * Met à jour une ligne existante d'un devis.
   *
   * **Comportement:**
   *
   * - Les totaux du devis sont automatiquement recalculés après modification
   * - Seuls les champs fournis sont modifiés (mise à jour partielle)
   *
   * **Types de lignes:**
   *
   * - **product** : Ligne produit standard avec prix et quantité
   * - **header** : Ligne de titre/séparation
   * - **subtotal** : Sous-total automatique
   * - **globalDiscount** : Remise globale
   *
   * **Événement déclenché:** UPDATE_QUOTE
   */
  update(
    lineUuid: string,
    params: LineUpdateParams,
    options?: RequestOptions,
  ): APIPromise<LineUpdateResponse> {
    const { uid, ...body } = params;
    return this._client.patch(path`/quote/${uid}/line/${lineUuid}`, { body, ...options });
  }

  /**
   * Supprime une ligne d'un devis existant.
   *
   * **Comportement:**
   *
   * - Les totaux du devis sont automatiquement recalculés après suppression
   * - La ligne est définitivement supprimée (pas de soft delete)
   *
   * **Événement déclenché:** UPDATE_QUOTE
   */
  delete(lineUuid: string, params: LineDeleteParams, options?: RequestOptions): APIPromise<Quote> {
    const { uid } = params;
    return this._client.delete(path`/quote/${uid}/line/${lineUuid}`, options);
  }

  /**
   * Ajoute une nouvelle ligne à un devis existant.
   *
   * Les totaux sont automatiquement recalculés après l'ajout.
   */
  add(uid: string, body: LineAddParams, options?: RequestOptions): APIPromise<LineAddResponse> {
    return this._client.post(path`/quote/${uid}/line`, { body, ...options });
  }
}

export interface Quote {
  /**
   * Unique identifier for the quote
   */
  _id?: string;

  /**
   * Date when the quote was accepted
   */
  accept_date?: string;

  /**
   * List of advance payments
   */
  acomptes?: Array<Quote.Acompte>;

  /**
   * The currency with which the company works for this quote
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
   * Date of the quote
   */
  date?: string;

  /**
   * Expiry date of the quote
   */
  expiry_date?: string;

  /**
   * Quote number
   */
  number?: string;

  /**
   * List of quote lines
   */
  quote_lines?: Array<QuoteLine>;

  /**
   * State of the quote
   */
  state?: 'invoiced' | 'refused' | 'accepted' | 'waiting' | 'draft' | 'canceled' | 'inactive';

  /**
   * Short description or label of the quote
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
   * Type of the quote
   */
  type?: 'quote' | 'proforma' | 'bdc';

  /**
   * List of VAT rates applied to the quote
   */
  VATRates?: Array<LineAPI.VatRate>;
}

export namespace Quote {
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

    /**
     * If it's a credit note
     */
    credit?: boolean;

    date?: string;

    number?: string;

    sold?: boolean;

    /**
     * Type of payment
     */
    type?: 'advance' | 'sold' | 'credit' | 'invoice';
  }
}

export interface QuoteLine {
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

export interface LineUpdateResponse {
  line?: QuoteLine;

  quote?: Quote;
}

export interface LineAddResponse {
  line?: QuoteLine;

  updatedQuote?: Quote;
}

export interface LineUpdateParams {
  /**
   * Path param: Identifiant unique du devis
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
   * Identifiant unique du devis
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
    type Quote as Quote,
    type QuoteLine as QuoteLine,
    type LineUpdateResponse as LineUpdateResponse,
    type LineAddResponse as LineAddResponse,
    type LineUpdateParams as LineUpdateParams,
    type LineDeleteParams as LineDeleteParams,
    type LineAddParams as LineAddParams,
  };
}
