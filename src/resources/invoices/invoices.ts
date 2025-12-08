// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as LineAPI from './line';
import {
  Invoice as LineAPIInvoice,
  InvoiceLine as LineAPIInvoiceLine,
  Line,
  LineAddParams,
  LineAddResponse,
  LineDeleteParams,
  LineUpdateParams,
  LineUpdateResponse,
  VatRate,
} from './line';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Invoices extends APIResource {
  line: LineAPI.Line = new LineAPI.Line(this._client);

  /**
   * Crée une nouvelle facture.
   *
   * **Numérotation automatique:**
   *
   * - Si l'état est 'waiting', 'paid', 'notpaid' ou 'late', un numéro est
   *   automatiquement attribué
   * - Le système verrouille la numérotation pendant l'attribution pour éviter les
   *   doublons
   * - Un numéro d'enregistrement FEC (numberRecord) est aussi généré
   *
   * **Types de factures:**
   *
   * - `invoice`: Facture standard
   * - `invoice_credit`: Avoir
   * - `external`: Facture externe (client fournisseur)
   * - `external_credit`: Avoir externe
   * - `proforma`: Facture proforma
   * - `advance`: Acompte
   *
   * **Calculs automatiques:**
   *
   * - Les totaux HT, TVA et TTC sont calculés automatiquement
   * - Les réductions globales sont appliquées
   * - La date d'échéance est calculée selon les paramètres de l'entreprise
   *
   * **Événements déclenchés:**
   *
   * - CREATE_INVOICE
   * - Mise à jour du stock si nécessaire
   *
   * **Réponse:**
   *
   * - Inclut les liens `pdf_link` et `html_link` pour accéder aux documents
   */
  create(body: InvoiceCreateParams, options?: RequestOptions): APIPromise<InvoiceCreateResponse> {
    return this._client.post('/invoice', { body, ...options });
  }

  /**
   * Récupère les détails complets d'une facture spécifique.
   *
   * Inclut toutes les informations: client, lignes, paiements, etc.
   */
  retrieve(
    uid: string,
    query: InvoiceRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InvoiceRetrieveResponse> {
    return this._client.get(path`/invoice/${uid}`, { query, ...options });
  }

  /**
   * Met à jour une facture existante.
   *
   * **Numérotation automatique:**
   *
   * - Si la facture passe de 'draft' à un état validé (waiting, paid, etc.), un
   *   numéro est automatiquement attribué
   * - Le numéro est verrouillé pendant l'attribution pour éviter les doublons
   * - Un numéro d'enregistrement FEC (numberRecord) est aussi généré
   *
   * **Restrictions:**
   *
   * - Une facture numérotée ne peut pas revenir en brouillon
   * - Certaines modifications sont interdites sur les factures validées
   *
   * **Événements déclenchés:**
   *
   * - Mise à jour du stock si nécessaire
   * - Logs de numérotation
   */
  update(
    uid: string,
    body: InvoiceUpdateParams,
    options?: RequestOptions,
  ): APIPromise<InvoiceUpdateResponse> {
    return this._client.patch(path`/invoice/${uid}`, { body, ...options });
  }

  /**
   * Récupère la liste des factures avec pagination, tri et filtres avancés.
   *
   * **Filtres disponibles:**
   *
   * - `state`: État de la facture (draft, waiting, paid, notpaid, late, inactive)
   * - `type`: Type de facture (invoice, invoice_credit, external, external_credit,
   *   proforma, advance)
   * - `client`: ID du client
   * - `minDate` / `maxDate`: Plage de dates
   * - `number`: Numéro de facture
   * - `search`: Recherche textuelle
   *
   * **Réponse:**
   *
   * - `invoices`: Liste des factures
   * - `total`: Nombre total de factures correspondantes
   * - `skip` et `limit`: Paramètres de pagination
   */
  list(
    query: InvoiceListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InvoiceListResponse> {
    return this._client.get('/invoices', { query, ...options });
  }

  /**
   * Supprime (désactive) une facture.
   *
   * **Restrictions:**
   *
   * - Seules les factures en brouillon non numérotées peuvent être supprimées
   * - Une facture avec un numéro ou un numberRecord ne peut pas être supprimée
   * - L'état passe à 'inactive' (soft delete)
   *
   * **Événement déclenché:** DELETE_INVOICE
   */
  delete(uid: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/invoice/${uid}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Crée un avoir (facture d'avoir) lié à une facture existante.
   *
   * L'avoir reprend les informations de la facture d'origine avec des montants
   * négatifs.
   */
  createCredit(uid: string, options?: RequestOptions): APIPromise<InvoiceCreateCreditResponse> {
    return this._client.post(path`/invoice/${uid}/credit`, options);
  }

  /**
   * Génère un bon de livraison (Receipt) à partir d'une facture.
   *
   * Le bon de livraison reprend les lignes de la facture.
   */
  createDeliveryReceipt(uid: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/invoice/${uid}/delivery-receipt`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Génère une archive ZIP contenant les PDFs de plusieurs factures.
   *
   * **Comportement:**
   *
   * - Si le nombre de factures > seuil configuré ou `DEFERRED=true`, l'archive est
   *   générée en arrière-plan
   * - Un objet Package est créé pour suivre la progression
   * - Une fois terminé, l'archive est téléchargeable via GET /package/{uid}/download
   *
   * **Mode différé:**
   *
   * - Retourne immédiatement avec `newPackage` et un message
   * - Le package passe par les états: created → finished (ou error)
   */
  createPackage(
    body: InvoiceCreatePackageParams,
    options?: RequestOptions,
  ): APIPromise<InvoiceCreatePackageResponse> {
    return this._client.post('/invoices/package', { body, ...options });
  }

  /**
   * Récupère les logs d'actions effectuées sur les factures (création, modification,
   * envoi, etc.).
   *
   * Utile pour l'audit et le suivi des modifications.
   */
  getLogs(
    query: InvoiceGetLogsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InvoiceGetLogsResponse> {
    return this._client.get('/invoices/logs', { query, ...options });
  }

  /**
   * Calcule et retourne des statistiques agrégées sur les factures.
   *
   * **Statistiques retournées:**
   *
   * - Totaux HT/TTC par état
   * - Montants min/max
   * - Répartition par type de facture
   *
   * Utilise les mêmes filtres que GET /invoices (state, type, client, dates, etc.)
   */
  getStats(
    query: InvoiceGetStatsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InvoiceGetStatsResponse> {
    return this._client.get('/invoices/stats', { query, ...options });
  }

  /**
   * Calcule le chiffre d'affaires sur une période donnée.
   *
   * Basé sur les factures validées (état waiting, paid, late, notpaid). Exclut les
   * avoirs et proformas.
   */
  getTurnover(
    query: InvoiceGetTurnoverParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InvoiceGetTurnoverResponse> {
    return this._client.get('/invoices/turnover', { query, ...options });
  }

  /**
   * Récupère la liste des paiements enregistrés sur les factures.
   *
   * **Filtres spécifiques aux paiements:**
   *
   * - `minDate` / `maxDate` / `date`: Date du paiement
   * - `amount`: Montant du paiement
   * - `method_name`: Nom du mode de paiement
   * - `mode`: ID du mode de paiement
   *
   * **Réponse agrégée:**
   *
   * - `payments`: Liste des paiements avec informations de la facture associée
   * - `count`: Nombre total de paiements
   * - `total`: Somme des montants
   * - `average`: Moyenne des montants
   */
  listPayments(
    query: InvoiceListPaymentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InvoiceListPaymentsResponse> {
    return this._client.get('/invoices/payments', { query, ...options });
  }

  /**
   * Récupère les factures qui sont en attente de paiement (état waiting ou late).
   *
   * **Réponse:**
   *
   * - `invoices`: Liste des factures en attente
   * - `total`: Nombre de factures
   * - `totalAmount`: Somme des montants restant à payer (total_nettopay)
   */
  listWaitingPayments(
    query: InvoiceListWaitingPaymentsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InvoiceListWaitingPaymentsResponse> {
    return this._client.get('/invoices/payments-waiting', { query, ...options });
  }

  /**
   * Enregistre un paiement sur une facture en attente.
   *
   * **Restrictions:**
   *
   * - La facture doit être en état 'waiting'
   * - Le mode de paiement doit exister et être actif
   *
   * **Comportement:**
   *
   * - Le paiement est ajouté à la liste `payments` de la facture
   * - Le `total_nettopay` (reste à payer) est recalculé
   * - Si le montant couvre le total, l'état passe à 'paid'
   * - La `payment_date` est mise à jour
   *
   * **Événement déclenché:** PAYMENT_INVOICE
   */
  recordPayment(
    uid: string,
    body: InvoiceRecordPaymentParams,
    options?: RequestOptions,
  ): APIPromise<InvoiceRecordPaymentResponse> {
    return this._client.post(path`/invoice/${uid}/payment`, { body, ...options });
  }

  /**
   * Récupère l'historique des actions sur une facture spécifique.
   *
   * Inclut: création, modifications, numérotations, envois par email, etc.
   */
  retrieveLogs(uid: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/invoice/${uid}/logs`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Envoie la facture par email au client.
   *
   * **Restrictions:**
   *
   * - La facture ne doit pas être en brouillon
   *
   * **Personnalisation:**
   *
   * - Utilise les modèles d'email configurés dans l'entreprise
   * - Variables disponibles: [lien-html], [lien-pdf], [facture-numero],
   *   [facture-date], [contact-nom], etc.
   *
   * **Options:**
   *
   * - `action`: 'send_invoice' (envoi standard) ou 'dunning_invoice' (relance)
   * - `joinPdf`: true pour joindre le PDF en pièce jointe
   * - Possibilité de personnaliser subject, content, to, copyto, replyTo
   */
  sendEmail(
    uid: string,
    body: InvoiceSendEmailParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InvoiceSendEmailResponse> {
    return this._client.post(path`/invoice/${uid}/mail`, { body, ...options });
  }
}

export interface InvoiceCreateResponse {
  newInvoice?: InvoiceCreateResponse.NewInvoice;
}

export namespace InvoiceCreateResponse {
  export interface NewInvoice extends LineAPI.Invoice {
    /**
     * Lien vers la version HTML
     */
    html_link?: string;

    /**
     * Lien vers le PDF
     */
    pdf_link?: string;
  }
}

export interface InvoiceRetrieveResponse {
  invoice?: LineAPI.Invoice;
}

export interface InvoiceUpdateResponse {
  updatedInvoice?: LineAPI.Invoice;
}

export interface InvoiceListResponse {
  invoices?: Array<LineAPI.Invoice>;

  limit?: number;

  skip?: number;

  /**
   * Nombre total de factures
   */
  total?: number;
}

export interface InvoiceCreateCreditResponse {
  newInvoice?: LineAPI.Invoice;
}

export interface InvoiceCreatePackageResponse {
  message?: string;

  /**
   * Objet Package avec état et URL
   */
  newPackage?: unknown;
}

export interface InvoiceGetLogsResponse {
  limit?: number;

  logs?: Array<unknown>;

  skip?: number;

  total?: number;
}

export interface InvoiceGetStatsResponse {
  /**
   * Montant maximum
   */
  max?: number;

  /**
   * Montant minimum
   */
  min?: number;

  /**
   * Statistiques agrégées
   */
  stats?: unknown;
}

export interface InvoiceGetTurnoverResponse {
  /**
   * Chiffre d'affaires total
   */
  turnover?: number;
}

export interface InvoiceListPaymentsResponse {
  /**
   * Moyenne des montants
   */
  average?: number;

  /**
   * Nombre total de paiements
   */
  count?: number;

  payments?: Array<InvoiceListPaymentsResponse.Payment>;

  /**
   * Somme des montants
   */
  total?: number;
}

export namespace InvoiceListPaymentsResponse {
  export interface Payment {
    amount?: number;

    date?: string;

    invoice?: Payment.Invoice;

    method_name?: string;
  }

  export namespace Payment {
    export interface Invoice {
      client_name?: string;

      invoice_id?: string;

      number?: string;
    }
  }
}

export interface InvoiceListWaitingPaymentsResponse {
  invoices?: Array<InvoiceListWaitingPaymentsResponse.Invoice>;

  total?: number;

  /**
   * Somme des montants restant à payer
   */
  totalAmount?: number;
}

export namespace InvoiceListWaitingPaymentsResponse {
  export interface Invoice {
    _id?: string;

    client_name?: string;

    number?: string;

    payment_expiry_date?: string;

    total_nettopay?: number;
  }
}

export interface InvoiceRecordPaymentResponse {
  updatedInvoice?: LineAPI.Invoice;
}

export interface InvoiceSendEmailResponse {
  /**
   * Contenu HTML de l'email
   */
  html?: string;

  /**
   * ID de l'email envoyé
   */
  resultId?: string;

  subject?: string;
}

export interface InvoiceCreateParams {
  /**
   * ID du client
   */
  client?: string;

  client_address?: string;

  client_city?: string;

  client_country?: string;

  /**
   * Email pour l'envoi de la facture
   */
  client_email?: string;

  /**
   * Nom du client (si pas de client référencé)
   */
  client_name?: string;

  client_zip_code?: string;

  /**
   * Date de la facture (défaut = maintenant)
   */
  date?: string;

  /**
   * Lignes de la facture
   */
  invoice_lines?: Array<InvoiceCreateParams.InvoiceLine>;

  /**
   * Date d'échéance (calculée automatiquement si non fournie)
   */
  payment_expiry_date?: string;

  /**
   * État initial (draft = brouillon sans numéro)
   */
  state?: 'draft' | 'waiting' | 'paid' | 'notpaid' | 'late';

  /**
   * Titre/objet de la facture
   */
  title?: string;

  type?: 'invoice' | 'invoice_credit' | 'external' | 'external_credit' | 'proforma' | 'advance';
}

export namespace InvoiceCreateParams {
  export interface InvoiceLine {
    /**
     * Description détaillée
     */
    description?: string;

    /**
     * Remise en pourcentage
     */
    discount?: number;

    /**
     * Prix unitaire HT
     */
    price_ht?: number;

    /**
     * ID du produit (optionnel)
     */
    product?: string;

    quantity?: number;

    /**
     * Référence produit
     */
    reference?: string;

    /**
     * Titre de la ligne
     */
    title?: string;

    /**
     * Taux de TVA (ex. 20 pour 20%)
     */
    tva_rate?: number;

    /**
     * Type de ligne
     */
    type?: 'product' | 'header' | 'subtotal' | 'globalDiscount';

    /**
     * Unité (pièce, heure, etc.)
     */
    unit?: string;
  }
}

export interface InvoiceRetrieveParams {
  /**
   * Champs à peupler (ex. "client,positionCreator")
   */
  populate?: string;
}

export interface InvoiceUpdateParams {
  /**
   * ID du client
   */
  client?: string;

  /**
   * Adresse du client
   */
  client_address?: string;

  client_city?: string;

  client_country?: string;

  client_email?: string;

  /**
   * Nom du client
   */
  client_name?: string;

  client_zip_code?: string;

  /**
   * Date de la facture
   */
  date?: string;

  /**
   * Lignes de la facture
   */
  invoice_lines?: Array<LineAPI.InvoiceLine>;

  /**
   * Date d'échéance de paiement
   */
  payment_expiry_date?: string;

  /**
   * État de la facture
   */
  state?: 'draft' | 'waiting' | 'paid' | 'notpaid' | 'late';

  /**
   * Titre/objet de la facture
   */
  title?: string;

  /**
   * Type de facture
   */
  type?: 'invoice' | 'invoice_credit' | 'external' | 'external_credit' | 'proforma' | 'advance';
}

export interface InvoiceListParams {
  /**
   * Filtre par ID du client
   */
  client?: string;

  /**
   * Nombre maximum de factures à retourner
   */
  limit?: number;

  /**
   * Date maximum (ISO 8601)
   */
  maxDate?: string;

  /**
   * Date minimum (ISO 8601)
   */
  minDate?: string;

  /**
   * Numéro de facture (recherche exacte)
   */
  number?: string;

  /**
   * Recherche textuelle dans les factures
   */
  search?: string;

  /**
   * Nombre de factures à ignorer (pagination)
   */
  skip?: number;

  /**
   * Champ de tri et direction (ex. "date:-1" pour tri décroissant par date)
   */
  sort?: string;

  /**
   * Filtre par état de la facture
   */
  state?: 'draft' | 'waiting' | 'paid' | 'notpaid' | 'late' | 'inactive';

  /**
   * Filtre par type de facture
   */
  type?: 'invoice' | 'invoice_credit' | 'external' | 'external_credit' | 'proforma' | 'advance';
}

export interface InvoiceCreatePackageParams {
  /**
   * Liste des IDs de factures à inclure
   */
  invoicesId: Array<string>;

  /**
   * Forcer le mode différé (génération en arrière-plan)
   */
  DEFERRED?: boolean;
}

export interface InvoiceGetLogsParams {
  /**
   * Filtre par ID de facture
   */
  invoice?: string;

  limit?: number;

  skip?: number;
}

export interface InvoiceGetStatsParams {
  maxDate?: string;

  minDate?: string;

  /**
   * Filtre par état
   */
  state?: string;
}

export interface InvoiceGetTurnoverParams {
  /**
   * Date de fin de la période
   */
  maxDate?: string;

  /**
   * Date de début de la période
   */
  minDate?: string;
}

export interface InvoiceListPaymentsParams {
  limit?: number;

  /**
   * Date maximum du paiement
   */
  maxDate?: string;

  /**
   * Date minimum du paiement
   */
  minDate?: string;

  /**
   * ID du mode de paiement
   */
  mode?: string;

  skip?: number;
}

export interface InvoiceListWaitingPaymentsParams {
  limit?: number;

  skip?: number;

  /**
   * Filtre par état (par défaut waiting et late)
   */
  state?: Array<'waiting' | 'late'>;
}

export interface InvoiceRecordPaymentParams {
  /**
   * Montant du paiement
   */
  amount: number;

  /**
   * ID du mode de paiement (PaymentMethod)
   */
  mode: string;
}

export interface InvoiceSendEmailParams {
  /**
   * Type d'envoi (envoi ou relance)
   */
  action?: 'send_invoice' | 'dunning_invoice';

  /**
   * Contenu personnalisé
   */
  content?: string;

  /**
   * Email en copie
   */
  copyto?: string;

  /**
   * Joindre le PDF en pièce jointe
   */
  joinPdf?: boolean;

  /**
   * Email pour les réponses
   */
  replyTo?: string;

  /**
   * Objet personnalisé
   */
  subject?: string;

  /**
   * Email du destinataire (défaut = email du client)
   */
  to?: string;
}

Invoices.Line = Line;

export declare namespace Invoices {
  export {
    type InvoiceCreateResponse as InvoiceCreateResponse,
    type InvoiceRetrieveResponse as InvoiceRetrieveResponse,
    type InvoiceUpdateResponse as InvoiceUpdateResponse,
    type InvoiceListResponse as InvoiceListResponse,
    type InvoiceCreateCreditResponse as InvoiceCreateCreditResponse,
    type InvoiceCreatePackageResponse as InvoiceCreatePackageResponse,
    type InvoiceGetLogsResponse as InvoiceGetLogsResponse,
    type InvoiceGetStatsResponse as InvoiceGetStatsResponse,
    type InvoiceGetTurnoverResponse as InvoiceGetTurnoverResponse,
    type InvoiceListPaymentsResponse as InvoiceListPaymentsResponse,
    type InvoiceListWaitingPaymentsResponse as InvoiceListWaitingPaymentsResponse,
    type InvoiceRecordPaymentResponse as InvoiceRecordPaymentResponse,
    type InvoiceSendEmailResponse as InvoiceSendEmailResponse,
    type InvoiceCreateParams as InvoiceCreateParams,
    type InvoiceRetrieveParams as InvoiceRetrieveParams,
    type InvoiceUpdateParams as InvoiceUpdateParams,
    type InvoiceListParams as InvoiceListParams,
    type InvoiceCreatePackageParams as InvoiceCreatePackageParams,
    type InvoiceGetLogsParams as InvoiceGetLogsParams,
    type InvoiceGetStatsParams as InvoiceGetStatsParams,
    type InvoiceGetTurnoverParams as InvoiceGetTurnoverParams,
    type InvoiceListPaymentsParams as InvoiceListPaymentsParams,
    type InvoiceListWaitingPaymentsParams as InvoiceListWaitingPaymentsParams,
    type InvoiceRecordPaymentParams as InvoiceRecordPaymentParams,
    type InvoiceSendEmailParams as InvoiceSendEmailParams,
  };

  export {
    Line as Line,
    type LineAPIInvoice as Invoice,
    type LineAPIInvoiceLine as InvoiceLine,
    type VatRate as VatRate,
    type LineUpdateResponse as LineUpdateResponse,
    type LineAddResponse as LineAddResponse,
    type LineUpdateParams as LineUpdateParams,
    type LineDeleteParams as LineDeleteParams,
    type LineAddParams as LineAddParams,
  };
}
