// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as LineAPI from './invoices/line';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class DeliveryReceipts extends APIResource {
  /**
   * Crée un nouveau bon de livraison.
   *
   * ## Numérotation automatique
   *
   * Le numéro est attribué automatiquement lorsque le bon passe en état validé
   * (waiting, shipped, delivered). Un bon en brouillon (draft) n'a pas de numéro.
   *
   * ## Structure des lignes
   *
   * Les lignes peuvent être de deux types :
   *
   * - **product** : Ligne produit avec quantité, référence, poids
   * - **header** : Ligne de séparation/titre pour organiser le bon
   *
   * ## Lien avec devis/facture
   *
   * Vous pouvez créer un bon de livraison depuis un devis via
   * `/quote/{uid}/delivery-receipt` ou depuis une facture via
   * `/invoice/{uid}/delivery-receipt`.
   *
   * ## Événement déclenché
   *
   * Un événement `CREATE_RECEIPT` est émis après la création.
   */
  create(
    body: DeliveryReceiptCreateParams,
    options?: RequestOptions,
  ): APIPromise<DeliveryReceiptCreateResponse> {
    return this._client.post('/delivery-receipt', { body, ...options });
  }

  /**
   * Récupère les informations détaillées d'un bon de livraison par son identifiant.
   *
   * Les informations retournées incluent :
   *
   * - Les informations client (nom, adresse, email, etc.)
   * - Les lignes du bon (produits, quantités, poids)
   * - L'état actuel du bon (brouillon, en attente, expédié, livré, etc.)
   * - Les dates importantes (création, expédition)
   * - Les liens vers le PDF et la version HTML
   */
  retrieve(
    uid: string,
    query: DeliveryReceiptRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DeliveryReceiptRetrieveResponse> {
    return this._client.get(path`/delivery-receipt/${uid}`, { query, ...options });
  }

  /**
   * Met à jour un bon de livraison existant.
   *
   * ## Gestion de la numérotation
   *
   * Si le bon passe à un état "validé" (waiting, shipped, delivered) et n'a pas
   * encore de numéro, un numéro officiel est automatiquement attribué via le système
   * de numérotation.
   *
   * ## États disponibles
   *
   * - **draft** : Brouillon (modifiable librement)
   * - **waiting** : En attente d'expédition
   * - **shipped** : Expédié
   * - **delivered** : Livré
   * - **refused** : Refusé par le client
   * - **canceled** : Annulé
   * - **inactive** : Supprimé (soft delete)
   *
   * ## Événement déclenché
   *
   * Un événement `UPDATE_RECEIPT` est émis après la mise à jour.
   */
  update(
    uid: string,
    body: DeliveryReceiptUpdateParams,
    options?: RequestOptions,
  ): APIPromise<DeliveryReceiptUpdateResponse> {
    return this._client.patch(path`/delivery-receipt/${uid}`, { body, ...options });
  }

  /**
   * Récupère la liste des bons de livraison avec pagination, tri et filtres.
   *
   * **Filtres disponibles:**
   *
   * - `state`: État du bon de livraison
   * - `client`: ID du client
   * - `minDate` / `maxDate`: Plage de dates
   *
   * **Réponse:**
   *
   * - `receipts`: Liste des bons de livraison
   * - `total`: Nombre total
   * - `skip` et `limit`: Paramètres de pagination
   */
  list(
    query: DeliveryReceiptListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DeliveryReceiptListResponse> {
    return this._client.get('/delivery-receipts', { query, ...options });
  }

  /**
   * Supprime un bon de livraison (soft delete).
   *
   * Le bon passe en état "inactive" et n'est plus visible dans les listes standards.
   *
   * ## Événement déclenché
   *
   * Un événement `DELETE_RECEIPT` est émis après la suppression.
   */
  delete(uid: string, options?: RequestOptions): APIPromise<DeliveryReceiptDeleteResponse> {
    return this._client.delete(path`/delivery-receipt/${uid}`, options);
  }

  /**
   * Transforme un bon de livraison en facture.
   *
   * ## Processus de transformation
   *
   * Cette route crée une nouvelle facture en copiant les informations du bon de
   * livraison :
   *
   * - Informations client (nom, adresse, etc.)
   * - Lignes du bon (produits, quantités)
   *
   * ## Cas d'usage
   *
   * Utile pour facturer après livraison :
   *
   * 1. Créer un devis
   * 2. Créer un bon de livraison depuis le devis
   * 3. Livrer au client
   * 4. Créer la facture depuis le bon de livraison
   *
   * ## Événement déclenché
   *
   * Un événement `CREATE_INVOICE` est émis après la création de la facture.
   */
  createInvoice(uid: string, options?: RequestOptions): APIPromise<DeliveryReceiptCreateInvoiceResponse> {
    return this._client.post(path`/delivery-receipt/${uid}/invoice`, options);
  }

  /**
   * Génère et retourne le rendu HTML du bon de livraison.
   *
   * Cette route est utile pour :
   *
   * - Prévisualiser le bon avant génération PDF
   * - Intégrer le contenu dans une page web
   * - Personnaliser l'affichage
   *
   * ## Réponse
   *
   * La réponse inclut :
   *
   * - **template** : Le HTML complet du bon de livraison
   * - **metadata** : Les informations clés du bon (client, numéro, dates, etc.)
   */
  generateHTML(uid: string, options?: RequestOptions): APIPromise<DeliveryReceiptGenerateHTMLResponse> {
    return this._client.get(path`/delivery-receipt/${uid}/html`, options);
  }

  /**
   * Génère et retourne le PDF du bon de livraison.
   *
   * Le PDF est généré à partir du modèle de document configuré pour l'entreprise et
   * inclut toutes les informations du bon : client, lignes, dates, etc.
   *
   * ## Paramètres de téléchargement
   *
   * - Par défaut, le PDF s'affiche dans le navigateur (inline)
   * - Utilisez `force_download=true` pour forcer le téléchargement
   *
   * ## Format de sortie
   *
   * - Content-Type: application/pdf
   * - Content-Disposition: filename={numero_bon}.pdf
   */
  generatePdf(
    uid: string,
    query: DeliveryReceiptGeneratePdfParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get(path`/delivery-receipt/${uid}/pdf`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/pdf' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export interface Receipt {
  /**
   * Unique identifier for the delivery receipt
   */
  _id?: string;

  /**
   * Reference to the client
   */
  client?: string;

  /**
   * Contact person at the client
   */
  client_contact?: string;

  /**
   * Email of the client
   */
  client_email?: string;

  /**
   * Mobile phone of the client
   */
  client_mobile?: string;

  /**
   * Name of the client
   */
  client_name?: string;

  /**
   * Additional comments
   */
  comment?: string;

  /**
   * Reference to the company
   */
  company?: string;

  /**
   * Name of the company
   */
  company_name?: string;

  /**
   * Date of the delivery receipt
   */
  date?: string;

  /**
   * Delivery address
   */
  delivery_address?: string;

  /**
   * Delivery city
   */
  delivery_city?: string;

  /**
   * Delivery country
   */
  delivery_country?: string;

  /**
   * Delivery date
   */
  delivery_date?: string;

  /**
   * Delivery zip code
   */
  delivery_zip_code?: string;

  /**
   * Reference to the invoice if created from an invoice
   */
  fromInvoice?: string;

  /**
   * Reference to the quote if created from a quote
   */
  fromQuote?: string;

  /**
   * List of delivery receipt lines
   */
  lines?: Array<Receipt.Line>;

  /**
   * Additional notes
   */
  notes?: string;

  /**
   * Receipt number
   */
  number?: string;

  /**
   * Order number
   */
  numberOrder?: string;

  /**
   * Shipping date
   */
  shipping_date?: string;

  /**
   * Shipping method
   */
  shipping_method?: string;

  /**
   * Number of packages
   */
  shippingNbPackages?: number;

  /**
   * State of the delivery receipt
   */
  state?: 'draft' | 'waiting' | 'shipped' | 'delivered' | 'refused' | 'canceled' | 'inactive';

  /**
   * Short description or label of the delivery receipt
   */
  title?: string;

  /**
   * Total quantity of all products
   */
  totalQuantity?: number;

  /**
   * Total weight of all products
   */
  totalWeight?: number;

  /**
   * Type of the receipt
   */
  type?: 'delivery';
}

export namespace Receipt {
  export interface Line {
    /**
     * Description of the line
     */
    description?: string;

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
     * Type of the line
     */
    type?: 'product' | 'header';

    /**
     * Weight of the product
     */
    weight?: number;
  }
}

export interface DeliveryReceiptCreateResponse {
  newReceipt?: Receipt;
}

export interface DeliveryReceiptRetrieveResponse {
  receipt?: Receipt;
}

export interface DeliveryReceiptUpdateResponse {
  updatedReceipt?: Receipt;
}

export interface DeliveryReceiptListResponse {
  limit?: number;

  receipts?: Array<Receipt>;

  skip?: number;

  total?: number;
}

export interface DeliveryReceiptDeleteResponse {
  receipt?: Receipt;
}

export interface DeliveryReceiptCreateInvoiceResponse {
  newInvoice?: LineAPI.Invoice;
}

export interface DeliveryReceiptGenerateHTMLResponse {
  /**
   * Informations clés du bon
   */
  metadata?: DeliveryReceiptGenerateHTMLResponse.Metadata;

  /**
   * Rendu HTML complet du bon de livraison
   */
  template?: string;
}

export namespace DeliveryReceiptGenerateHTMLResponse {
  /**
   * Informations clés du bon
   */
  export interface Metadata {
    _id?: string;

    client_name?: string;

    date?: string;

    number?: string;
  }
}

export interface DeliveryReceiptCreateParams {
  /**
   * Référence du client (obligatoire)
   */
  client: string;

  /**
   * Adresse de livraison
   */
  client_address?: string;

  /**
   * Ville de livraison
   */
  client_city?: string;

  /**
   * Pays de livraison
   */
  client_country?: string;

  /**
   * Email du client (pour envoi du bon)
   */
  client_email?: string;

  /**
   * Nom du client (copié du client si non fourni)
   */
  client_name?: string;

  /**
   * Code postal
   */
  client_zip_code?: string;

  /**
   * Date du bon (par défaut aujourd'hui)
   */
  date?: string;

  /**
   * Lignes du bon de livraison
   */
  lines?: Array<DeliveryReceiptCreateParams.Line>;

  /**
   * Date d'expédition prévue
   */
  shipping_date?: string;

  /**
   * État initial du bon
   */
  state?: 'draft' | 'waiting' | 'shipped' | 'delivered';

  /**
   * Description courte ou libellé du bon
   */
  title?: string;

  /**
   * Type de document (delivery par défaut)
   */
  type?: 'delivery';
}

export namespace DeliveryReceiptCreateParams {
  export interface Line {
    /**
     * Description détaillée
     */
    description?: string;

    /**
     * Ordre d'affichage de la ligne
     */
    order?: number;

    /**
     * Quantité
     */
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
     * Type de ligne :
     *
     * - **product** : Ligne produit standard
     * - **header** : Ligne de titre/séparation
     */
    type?: 'product' | 'header';

    /**
     * Poids unitaire (en kg)
     */
    weight?: number;
  }
}

export interface DeliveryReceiptRetrieveParams {
  /**
   * Relations à inclure (ex. "client", "documentModel")
   */
  populate?: string;
}

export interface DeliveryReceiptUpdateParams {
  /**
   * Adresse du client
   */
  client_address?: string;

  /**
   * Ville du client
   */
  client_city?: string;

  /**
   * Pays du client
   */
  client_country?: string;

  /**
   * Email du client
   */
  client_email?: string;

  /**
   * Nom du client
   */
  client_name?: string;

  /**
   * Code postal du client
   */
  client_zip_code?: string;

  /**
   * Date du bon de livraison
   */
  date?: string;

  /**
   * Lignes du bon de livraison
   */
  lines?: Array<DeliveryReceiptUpdateParams.Line>;

  /**
   * Date d'expédition
   */
  shipping_date?: string;

  /**
   * État du bon de livraison :
   *
   * - **draft** : Brouillon
   * - **waiting** : En attente d'expédition
   * - **shipped** : Expédié
   * - **delivered** : Livré
   * - **refused** : Refusé
   * - **canceled** : Annulé
   */
  state?: 'draft' | 'waiting' | 'shipped' | 'delivered' | 'refused' | 'canceled' | 'inactive';

  /**
   * Description courte ou libellé du bon
   */
  title?: string;
}

export namespace DeliveryReceiptUpdateParams {
  export interface Line {
    /**
     * Description détaillée
     */
    description?: string;

    /**
     * Quantité
     */
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
     * Poids (en kg)
     */
    weight?: number;
  }
}

export interface DeliveryReceiptListParams {
  /**
   * Filtre par ID du client
   */
  client?: string;

  /**
   * Nombre maximum de bons à retourner
   */
  limit?: number;

  /**
   * Nombre de bons à ignorer (pagination)
   */
  skip?: number;

  /**
   * Champ de tri et direction
   */
  sort?: string;

  /**
   * Filtre par état
   */
  state?: 'draft' | 'waiting' | 'shipped' | 'delivered' | 'refused' | 'canceled' | 'inactive';
}

export interface DeliveryReceiptGeneratePdfParams {
  /**
   * Si true, force le téléchargement du fichier au lieu de l'afficher
   */
  force_download?: boolean;
}

export declare namespace DeliveryReceipts {
  export {
    type Receipt as Receipt,
    type DeliveryReceiptCreateResponse as DeliveryReceiptCreateResponse,
    type DeliveryReceiptRetrieveResponse as DeliveryReceiptRetrieveResponse,
    type DeliveryReceiptUpdateResponse as DeliveryReceiptUpdateResponse,
    type DeliveryReceiptListResponse as DeliveryReceiptListResponse,
    type DeliveryReceiptDeleteResponse as DeliveryReceiptDeleteResponse,
    type DeliveryReceiptCreateInvoiceResponse as DeliveryReceiptCreateInvoiceResponse,
    type DeliveryReceiptGenerateHTMLResponse as DeliveryReceiptGenerateHTMLResponse,
    type DeliveryReceiptCreateParams as DeliveryReceiptCreateParams,
    type DeliveryReceiptRetrieveParams as DeliveryReceiptRetrieveParams,
    type DeliveryReceiptUpdateParams as DeliveryReceiptUpdateParams,
    type DeliveryReceiptListParams as DeliveryReceiptListParams,
    type DeliveryReceiptGeneratePdfParams as DeliveryReceiptGeneratePdfParams,
  };
}
