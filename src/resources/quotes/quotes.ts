// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as LineAPI from '../invoices/line';
import * as QuotesLineAPI from './line';
import {
  Line,
  LineAddParams,
  LineAddResponse,
  LineDeleteParams,
  LineUpdateParams,
  LineUpdateResponse,
  Quote as LineAPIQuote,
  QuoteLine as LineAPIQuoteLine,
} from './line';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Quotes extends APIResource {
  line: QuotesLineAPI.Line = new QuotesLineAPI.Line(this._client);

  /**
   * Crée un nouveau devis.
   *
   * **Numérotation automatique:**
   *
   * - Si l'état est 'pending', 'waiting', 'accepted', 'refused', 'invoiced' ou
   *   'canceled', un numéro est automatiquement attribué
   * - Le créateur (positionCreator) et l'assigné (positionAssigned) sont
   *   automatiquement définis
   *
   * **Types de documents:**
   *
   * - `quote`: Devis standard
   * - `proforma`: Facture proforma
   * - `bdc`: Bon de commande
   *
   * **Calculs automatiques:**
   *
   * - Les totaux HT, TVA et TTC sont calculés automatiquement
   *
   * **Événement déclenché:** CREATE_QUOTE
   */
  create(body: QuoteCreateParams, options?: RequestOptions): APIPromise<QuoteCreateResponse> {
    return this._client.post('/quote', { body, ...options });
  }

  /**
   * Récupère les détails complets d'un devis spécifique.
   *
   * **Réponse enrichie:**
   *
   * - Inclut les liens `pdf_link` et `html_link` pour accéder aux documents
   */
  retrieve(
    uid: string,
    query: QuoteRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<QuoteRetrieveResponse> {
    return this._client.get(path`/quote/${uid}`, { query, ...options });
  }

  /**
   * Met à jour un devis existant.
   *
   * **Numérotation automatique:**
   *
   * - Si le devis passe de 'draft' à un état validé (pending, waiting, accepted,
   *   etc.), un numéro est automatiquement attribué
   * - La date est mise à jour automatiquement lors de la numérotation
   *
   * **Événement déclenché:** UPDATE_QUOTE
   */
  update(uid: string, body: QuoteUpdateParams, options?: RequestOptions): APIPromise<QuoteUpdateResponse> {
    return this._client.patch(path`/quote/${uid}`, { body, ...options });
  }

  /**
   * Récupère la liste des devis avec pagination, tri et filtres.
   *
   * **Filtres disponibles:**
   *
   * - `state`: État du devis (draft, pending, waiting, accepted, refused, invoiced,
   *   canceled, inactive)
   * - `type`: Type de document (quote, proforma, bdc)
   * - `client`: ID du client
   * - `minDate` / `maxDate`: Plage de dates
   * - `number`: Numéro du devis
   * - `search`: Recherche textuelle
   *
   * **Réponse:**
   *
   * - `quotes`: Liste des devis
   * - `total`: Nombre total de devis correspondants
   * - `skip` et `limit`: Paramètres de pagination
   */
  list(
    query: QuoteListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<QuoteListResponse> {
    return this._client.get('/quotes', { query, ...options });
  }

  /**
   * Supprime (désactive) un devis.
   *
   * **Comportement:**
   *
   * - L'état passe à 'inactive' (soft delete)
   * - Déclenche un événement DELETE_QUOTE
   */
  delete(uid: string, options?: RequestOptions): APIPromise<QuoteDeleteResponse> {
    return this._client.delete(path`/quote/${uid}`, options);
  }

  /**
   * Génère une facture d'acompte à partir d'un devis.
   *
   * **Options:**
   *
   * - Spécifier un montant ou un pourcentage de l'acompte
   * - L'acompte est lié au devis d'origine
   */
  createAdvanceInvoice(
    uid: string,
    body: QuoteCreateAdvanceInvoiceParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<QuoteCreateAdvanceInvoiceResponse> {
    return this._client.post(path`/quote/${uid}/advance`, { body, ...options });
  }

  /**
   * Génère un bon de livraison à partir d'un devis.
   *
   * Le bon de livraison reprend les lignes du devis.
   */
  createDeliveryReceipt(uid: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/quote/${uid}/delivery-receipt`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Transforme un devis en facture.
   *
   * **Comportement:**
   *
   * - Crée une facture reprenant toutes les informations du devis
   * - Le devis passe à l'état 'invoiced'
   * - La facture est créée avec numérotation automatique
   */
  createInvoice(uid: string, options?: RequestOptions): APIPromise<QuoteCreateInvoiceResponse> {
    return this._client.post(path`/quote/${uid}/invoice`, options);
  }

  /**
   * Génère une facture de solde à partir d'un devis.
   *
   * **Comportement:**
   *
   * - Crée une facture reprenant les lignes du devis
   * - Déduit les acomptes déjà facturés
   * - Le devis passe à l'état 'invoiced'
   */
  createInvoiceFromQuote(
    uid: string,
    options?: RequestOptions,
  ): APIPromise<QuoteCreateInvoiceFromQuoteResponse> {
    return this._client.post(path`/quote/${uid}/sold`, options);
  }

  /**
   * Génère une archive ZIP contenant les PDFs de plusieurs devis.
   *
   * **Comportement:**
   *
   * - Si le nombre de devis > seuil configuré ou `DEFERRED=true`, l'archive est
   *   générée en arrière-plan
   * - Un objet Package est créé pour suivre la progression
   * - Une fois terminé, l'archive est téléchargeable via GET /package/{uid}/download
   */
  createPackage(
    body: QuoteCreatePackageParams,
    options?: RequestOptions,
  ): APIPromise<QuoteCreatePackageResponse> {
    return this._client.post('/quotes/package', { body, ...options });
  }

  /**
   * Génère une facture proforma à partir d'un devis.
   *
   * La proforma est une facture sans valeur comptable utilisée comme document
   * préliminaire.
   */
  createProformaInvoice(
    uid: string,
    options?: RequestOptions,
  ): APIPromise<QuoteCreateProformaInvoiceResponse> {
    return this._client.post(path`/quote/${uid}/proforma`, options);
  }

  /**
   * Transforme un devis en bon de commande (BDC).
   *
   * Le bon de commande est un document confirmant la commande avant facturation.
   */
  createPurchaseOrder(uid: string, options?: RequestOptions): APIPromise<QuoteCreatePurchaseOrderResponse> {
    return this._client.post(path`/quote/${uid}/bdc`, options);
  }

  /**
   * Génère et retourne le contenu HTML d'un devis.
   *
   * **Utilisation:**
   *
   * - Prévisualisation dans un navigateur
   * - Intégration dans une iframe
   * - Base pour la génération PDF
   *
   * **Format de réponse:**
   *
   * - Type MIME: text/html
   * - HTML complet avec styles CSS intégrés
   */
  generateHTML(uid: string, options?: RequestOptions): APIPromise<string> {
    return this._client.get(path`/quote/${uid}/html`, {
      ...options,
      headers: buildHeaders([{ Accept: 'text/html' }, options?.headers]),
    });
  }

  /**
   * Génère et retourne le fichier PDF d'un devis.
   *
   * **Comportement:**
   *
   * - Utilise le modèle de document configuré pour l'entreprise
   * - Le PDF inclut toutes les informations du devis (client, lignes, totaux)
   * - Le rendu est optimisé pour l'impression
   *
   * **Format de réponse:**
   *
   * - Type MIME: application/pdf
   * - Le fichier est retourné en téléchargement direct
   */
  generatePdf(uid: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/quote/${uid}/pdf`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/pdf' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Génère et retourne le fichier PDF d'un devis en utilisant le moteur de rendu
   * Chromium.
   *
   * **Différences avec /pdf:**
   *
   * - Rendu plus fidèle aux navigateurs modernes
   * - Meilleure gestion des polices et des styles CSS complexes
   * - Temps de génération légèrement plus long
   *
   * **Utilisation recommandée:**
   *
   * - Documents avec mise en page complexe
   * - Besoin d'un rendu identique au navigateur
   */
  generatePdfChromium(uid: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/quote/${uid}/pdf-chromium`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/pdf' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Récupère les logs d'actions effectuées sur tous les devis.
   */
  getLogs(
    query: QuoteGetLogsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<QuoteGetLogsResponse> {
    return this._client.get('/quotes/logs', { query, ...options });
  }

  /**
   * Calcule et retourne des statistiques agrégées sur les devis.
   *
   * **Statistiques retournées:**
   *
   * - Totaux HT/TTC par état
   * - Montants min/max
   * - Répartition par type de devis
   *
   * Utilise les mêmes filtres que GET /quotes.
   */
  getStats(
    query: QuoteGetStatsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<QuoteGetStatsResponse> {
    return this._client.get('/quotes/stats', { query, ...options });
  }

  /**
   * Récupère l'historique des actions sur un devis spécifique.
   */
  retrieveLogs(uid: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/quote/${uid}/logs`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface QuoteCreateResponse {
  newQuote?: QuotesLineAPI.Quote;
}

export interface QuoteRetrieveResponse {
  quote?: QuoteRetrieveResponse.Quote;
}

export namespace QuoteRetrieveResponse {
  export interface Quote extends QuotesLineAPI.Quote {
    html_link?: string;

    pdf_link?: string;
  }
}

export interface QuoteUpdateResponse {
  updatedQuote?: QuotesLineAPI.Quote;
}

export interface QuoteListResponse {
  limit?: number;

  quotes?: Array<QuotesLineAPI.Quote>;

  skip?: number;

  /**
   * Nombre total de devis
   */
  total?: number;
}

export interface QuoteDeleteResponse {
  quote?: QuotesLineAPI.Quote;
}

export interface QuoteCreateAdvanceInvoiceResponse {
  newInvoice?: LineAPI.Invoice;
}

export interface QuoteCreateInvoiceResponse {
  newInvoice?: LineAPI.Invoice;
}

export interface QuoteCreateInvoiceFromQuoteResponse {
  newInvoice?: LineAPI.Invoice;
}

export interface QuoteCreatePackageResponse {
  message?: string;

  newPackage?: unknown;
}

export interface QuoteCreateProformaInvoiceResponse {
  newInvoice?: LineAPI.Invoice;
}

export interface QuoteCreatePurchaseOrderResponse {
  newQuote?: QuotesLineAPI.Quote;
}

export type QuoteGenerateHTMLResponse = string;

export interface QuoteGetLogsResponse {
  logs?: Array<unknown>;

  total?: number;
}

export interface QuoteGetStatsResponse {
  max?: number;

  min?: number;

  stats?: unknown;
}

export interface QuoteCreateParams {
  /**
   * ID du client
   */
  client?: string;

  client_address?: string;

  client_city?: string;

  client_country?: string;

  client_email?: string;

  /**
   * Nom du client (si pas de client référencé)
   */
  client_name?: string;

  client_zip_code?: string;

  /**
   * Date du devis (défaut = maintenant)
   */
  date?: string;

  /**
   * Date de validité
   */
  expiry_date?: string;

  /**
   * Lignes du devis
   */
  quote_lines?: Array<QuoteCreateParams.QuoteLine>;

  /**
   * État initial
   */
  state?: 'draft' | 'pending' | 'waiting' | 'accepted' | 'refused';

  /**
   * Titre/objet du devis
   */
  title?: string;

  /**
   * Type de document
   */
  type?: 'quote' | 'proforma' | 'bdc';
}

export namespace QuoteCreateParams {
  export interface QuoteLine {
    description?: string;

    discount?: number;

    price_ht?: number;

    /**
     * ID du produit (optionnel)
     */
    product?: string;

    quantity?: number;

    reference?: string;

    title?: string;

    tva_rate?: number;

    type?: 'product' | 'header' | 'subtotal' | 'globalDiscount';

    unit?: string;
  }
}

export interface QuoteRetrieveParams {
  /**
   * Champs à peupler (ex. "client,documentModel")
   */
  populate?: string;
}

export interface QuoteUpdateParams {
  /**
   * ID du client
   */
  client?: string;

  client_address?: string;

  client_city?: string;

  client_country?: string;

  client_email?: string;

  client_name?: string;

  client_zip_code?: string;

  /**
   * Date du devis
   */
  date?: string;

  /**
   * Date de validité
   */
  expiry_date?: string;

  quote_lines?: Array<QuotesLineAPI.QuoteLine>;

  /**
   * État du devis
   */
  state?: 'draft' | 'pending' | 'waiting' | 'accepted' | 'refused' | 'invoiced' | 'canceled';

  /**
   * Titre/objet du devis
   */
  title?: string;

  type?: 'quote' | 'proforma' | 'bdc';
}

export interface QuoteListParams {
  /**
   * Filtre par ID du client
   */
  client?: string;

  /**
   * Nombre maximum de devis à retourner
   */
  limit?: number;

  /**
   * Date maximum
   */
  maxDate?: string;

  /**
   * Date minimum
   */
  minDate?: string;

  /**
   * Nombre de devis à ignorer (pagination)
   */
  skip?: number;

  /**
   * Champ de tri et direction (ex. "date:-1")
   */
  sort?: string;

  /**
   * Filtre par état du devis
   */
  state?: 'draft' | 'pending' | 'waiting' | 'accepted' | 'refused' | 'invoiced' | 'canceled' | 'inactive';

  /**
   * Filtre par type de document
   */
  type?: 'quote' | 'proforma' | 'bdc';
}

export interface QuoteCreateAdvanceInvoiceParams {
  /**
   * Montant de l'acompte
   */
  amount?: number;

  /**
   * Pourcentage de l'acompte
   */
  percentage?: number;
}

export interface QuoteCreatePackageParams {
  /**
   * Liste des IDs de devis à inclure
   */
  quotesId: Array<string>;

  /**
   * Forcer le mode différé
   */
  DEFERRED?: boolean;
}

export interface QuoteGetLogsParams {
  limit?: number;

  skip?: number;
}

export interface QuoteGetStatsParams {
  maxDate?: string;

  minDate?: string;

  state?: string;
}

Quotes.Line = Line;

export declare namespace Quotes {
  export {
    type QuoteCreateResponse as QuoteCreateResponse,
    type QuoteRetrieveResponse as QuoteRetrieveResponse,
    type QuoteUpdateResponse as QuoteUpdateResponse,
    type QuoteListResponse as QuoteListResponse,
    type QuoteDeleteResponse as QuoteDeleteResponse,
    type QuoteCreateAdvanceInvoiceResponse as QuoteCreateAdvanceInvoiceResponse,
    type QuoteCreateInvoiceResponse as QuoteCreateInvoiceResponse,
    type QuoteCreateInvoiceFromQuoteResponse as QuoteCreateInvoiceFromQuoteResponse,
    type QuoteCreatePackageResponse as QuoteCreatePackageResponse,
    type QuoteCreateProformaInvoiceResponse as QuoteCreateProformaInvoiceResponse,
    type QuoteCreatePurchaseOrderResponse as QuoteCreatePurchaseOrderResponse,
    type QuoteGenerateHTMLResponse as QuoteGenerateHTMLResponse,
    type QuoteGetLogsResponse as QuoteGetLogsResponse,
    type QuoteGetStatsResponse as QuoteGetStatsResponse,
    type QuoteCreateParams as QuoteCreateParams,
    type QuoteRetrieveParams as QuoteRetrieveParams,
    type QuoteUpdateParams as QuoteUpdateParams,
    type QuoteListParams as QuoteListParams,
    type QuoteCreateAdvanceInvoiceParams as QuoteCreateAdvanceInvoiceParams,
    type QuoteCreatePackageParams as QuoteCreatePackageParams,
    type QuoteGetLogsParams as QuoteGetLogsParams,
    type QuoteGetStatsParams as QuoteGetStatsParams,
  };

  export {
    Line as Line,
    type LineAPIQuote as Quote,
    type LineAPIQuoteLine as QuoteLine,
    type LineUpdateResponse as LineUpdateResponse,
    type LineAddResponse as LineAddResponse,
    type LineUpdateParams as LineUpdateParams,
    type LineDeleteParams as LineDeleteParams,
    type LineAddParams as LineAddParams,
  };
}
