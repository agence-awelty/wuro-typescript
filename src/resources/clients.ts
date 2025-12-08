// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { type Uploadable } from '../core/uploads';
import { RequestOptions } from '../internal/request-options';
import { multipartFormRequestOptions } from '../internal/uploads';
import { path } from '../internal/utils/path';

export class Clients extends APIResource {
  /**
   * Crée un nouveau client pour l'entreprise.
   *
   * ## Champs obligatoires
   *
   * Seul le nom (`name`) est obligatoire. Tous les autres champs sont optionnels.
   *
   * ## Code client automatique
   *
   * Si vous ne fournissez pas de code client (`code`), un code unique sera généré
   * automatiquement.
   *
   * ## Validation TVA
   *
   * Si vous fournissez un numéro de TVA intracommunautaire, celui-ci sera validé.
   *
   * ## Événement déclenché
   *
   * Un événement `CREATE_CLIENT` est émis après la création.
   */
  create(body: ClientCreateParams, options?: RequestOptions): APIPromise<ClientCreateResponse> {
    return this._client.post('/client', { body, ...options });
  }

  /**
   * Récupère les informations détaillées d'un client par son identifiant.
   *
   * Les informations incluent :
   *
   * - Coordonnées (nom, adresse, email, téléphone)
   * - Informations fiscales (SIRET, TVA intracommunautaire)
   * - Conditions commerciales (remise par défaut, délai de paiement)
   * - Statistiques (CA, nombre de factures, etc.)
   */
  retrieve(
    uid: string,
    query: ClientRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ClientRetrieveResponse> {
    return this._client.get(path`/client/${uid}`, { query, ...options });
  }

  /**
   * Met à jour les informations d'un client existant.
   *
   * Vous pouvez modifier :
   *
   * - Les coordonnées (nom, adresse, contacts)
   * - Les informations fiscales (SIRET, TVA)
   * - Les conditions commerciales
   * - L'état (active/inactive pour archiver)
   *
   * ## Événement déclenché
   *
   * Un événement `UPDATE_CLIENT` est émis après la mise à jour.
   */
  update(uid: string, body: ClientUpdateParams, options?: RequestOptions): APIPromise<ClientUpdateResponse> {
    return this._client.patch(path`/client/${uid}`, { body, ...options });
  }

  /**
   * Récupère la liste de tous les clients de l'entreprise avec pagination, tri et
   * recherche.
   *
   * ## Recherche
   *
   * Le paramètre `search` permet une recherche textuelle dans :
   *
   * - Le nom du client
   * - L'email
   * - Le numéro de téléphone
   * - Le code client
   *
   * ## Tri
   *
   * Utilisez `sort` avec le format `champ:direction` où direction est 1 (asc) ou -1
   * (desc). Exemples : "name:1", "createdAt:-1"
   */
  list(
    query: ClientListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ClientListResponse> {
    return this._client.get('/clients', { query, ...options });
  }

  /**
   * Supprime un client (soft delete).
   *
   * Le client passe en état "inactive" et n'apparaît plus dans les listes standards.
   * Les documents existants (factures, devis) associés à ce client sont conservés.
   *
   * ## Événement déclenché
   *
   * Un événement `DELETE_CLIENT` est émis après la suppression.
   */
  delete(uid: string, options?: RequestOptions): APIPromise<ClientDeleteResponse> {
    return this._client.delete(path`/client/${uid}`, options);
  }

  /**
   * Importe une liste de clients à partir d'un fichier CSV.
   *
   * **Format du fichier CSV:**
   *
   * - Le fichier doit être encodé en UTF-8
   * - La première ligne doit contenir les en-têtes des colonnes
   * - Séparateur de colonnes : point-virgule (;) ou virgule (,)
   *
   * **Colonnes supportées:**
   *
   * - `name` : Nom du client (obligatoire)
   * - `email` : Adresse email
   * - `phone` : Numéro de téléphone
   * - `address` : Adresse postale
   * - `city` : Ville
   * - `zip_code` : Code postal
   * - `country` : Pays
   * - `code` : Code client
   * - `siren` : Numéro SIREN
   * - `tva_intracom` : Numéro de TVA intracommunautaire
   *
   * **Comportement:**
   *
   * - Les clients existants (basé sur l'email ou le code) sont mis à jour
   * - Les nouveaux clients sont créés
   * - Un rapport d'import est retourné
   *
   * **Télécharger un modèle:**
   *
   * - GET /files/clients.csv pour obtenir un fichier modèle
   */
  importFromCsv(
    body: ClientImportFromCsvParams,
    options?: RequestOptions,
  ): APIPromise<ClientImportFromCsvResponse> {
    return this._client.post('/clients/csv', multipartFormRequestOptions({ body, ...options }, this._client));
  }

  /**
   * Fusionne deux fiches clients en une seule.
   *
   * **Fonctionnement:**
   *
   * - Le client `source` est fusionné dans le client `target`
   * - Toutes les factures, devis et documents du client source sont transférés au
   *   client cible
   * - Le client source est supprimé après la fusion
   *
   * **Transfert des données:**
   *
   * - Factures et devis
   * - Historique des paiements
   * - Notes et commentaires
   * - Interlocuteurs
   *
   * **Attention:**
   *
   * - Cette opération est irréversible
   * - Les informations du client source qui diffèrent ne sont pas copiées (seuls les
   *   documents sont transférés)
   *
   * **Événement déclenché:** MERGE_CLIENT
   */
  merge(body: ClientMergeParams, options?: RequestOptions): APIPromise<ClientMergeResponse> {
    return this._client.post('/clients/merge', { body, ...options });
  }
}

export interface Client {
  /**
   * Unique identifier for the client
   */
  _id?: string;

  /**
   * Street address
   */
  address?: string;

  /**
   * Address complement
   */
  address_complement?: string;

  /**
   * Additional address information
   */
  address_end?: string;

  /**
   * Analytical code
   */
  analytical_code?: string;

  /**
   * Client avatar image
   */
  avatar?: unknown;

  /**
   * Client category
   */
  category?: string;

  /**
   * City
   */
  city?: string;

  /**
   * Client code for accounting
   */
  client_code?: string;

  /**
   * Reference to main contact interlocutor
   */
  client_contact?: string;

  /**
   * Reference to the company
   */
  company?: string;

  /**
   * Country
   */
  country?: string;

  createdAt?: string;

  /**
   * Client description
   */
  description?: string;

  /**
   * Email of the client
   */
  email?: string;

  /**
   * Custom extra data
   */
  extraData?: unknown;

  /**
   * Fax number
   */
  fax?: string;

  /**
   * Reference to main interlocutor
   */
  mainInterlocutor?: string;

  /**
   * Mobile phone number
   */
  mobile?: string;

  /**
   * Formatted mobile number for search
   */
  mobileFormat?: string;

  /**
   * Name of the client (required)
   */
  name?: string;

  /**
   * NIC code
   */
  nic?: string;

  /**
   * Notes about the client
   */
  notes?: string;

  /**
   * Phone number
   */
  phone?: string;

  /**
   * Formatted phone number for search
   */
  phoneFormat?: string;

  /**
   * Position that created this client
   */
  positionCreator?: string;

  /**
   * Position that last updated this client
   */
  positionLastUpdator?: string;

  /**
   * List of assigned positions
   */
  positionsAssigned?: Array<string>;

  /**
   * SIREN number
   */
  siren?: string;

  /**
   * Client state
   */
  state?: 'active' | 'inactive';

  stats?: Client.Stats;

  /**
   * List of tag references
   */
  tags?: Array<string>;

  /**
   * VAT number
   */
  tva_number?: string;

  updatedAt?: string;

  /**
   * Website URL
   */
  website?: string;

  /**
   * Zip code
   */
  zip_code?: string;
}

export namespace Client {
  export interface Stats {
    nbDeliveryReceipts?: number;

    nbFiles?: number;

    nbInvoices?: number;

    nbNotes?: number;

    nbPurchases?: number;

    nbQuotes?: number;

    nbReminders?: number;
  }
}

export interface ClientInput {
  /**
   * Name of the client (required)
   */
  name: string;

  address?: string;

  address_complement?: string;

  address_end?: string;

  analytical_code?: string;

  category?: string;

  city?: string;

  client_code?: string;

  country?: string;

  description?: string;

  email?: string;

  fax?: string;

  mobile?: string;

  nic?: string;

  notes?: string;

  phone?: string;

  siren?: string;

  tags?: Array<string>;

  tva_number?: string;

  website?: string;

  zip_code?: string;
}

export interface ClientCreateResponse {
  newClient?: Client;
}

export interface ClientRetrieveResponse {
  client?: Client;
}

export interface ClientUpdateResponse {
  updatedClient?: Client;
}

export interface ClientListResponse {
  /**
   * Tableau des clients
   */
  clients?: Array<Client>;

  /**
   * Limite utilisée
   */
  limit?: number;

  /**
   * Offset utilisé
   */
  skip?: number;

  /**
   * Nombre total de clients
   */
  total?: number;
}

export interface ClientDeleteResponse {
  client?: Client;
}

export interface ClientImportFromCsvResponse {
  /**
   * Nombre de clients créés
   */
  created?: number;

  /**
   * Liste des erreurs rencontrées
   */
  errors?: Array<ClientImportFromCsvResponse.Error>;

  /**
   * Nombre de clients mis à jour
   */
  updated?: number;
}

export namespace ClientImportFromCsvResponse {
  export interface Error {
    /**
     * Numéro de ligne en erreur
     */
    line?: number;

    /**
     * Message d'erreur
     */
    message?: string;
  }
}

export interface ClientMergeResponse {
  client?: Client;

  /**
   * Nombre de documents transférés
   */
  documentsTransferred?: number;
}

export interface ClientCreateParams {
  /**
   * Name of the client (required)
   */
  name: string;

  address?: string;

  address_complement?: string;

  address_end?: string;

  analytical_code?: string;

  category?: string;

  city?: string;

  client_code?: string;

  country?: string;

  description?: string;

  email?: string;

  fax?: string;

  mobile?: string;

  nic?: string;

  notes?: string;

  phone?: string;

  siren?: string;

  tags?: Array<string>;

  tva_number?: string;

  website?: string;

  zip_code?: string;
}

export interface ClientRetrieveParams {
  /**
   * Relations à inclure
   */
  populate?: string;
}

export interface ClientUpdateParams {
  /**
   * Name of the client (required)
   */
  name: string;

  address?: string;

  address_complement?: string;

  address_end?: string;

  analytical_code?: string;

  category?: string;

  city?: string;

  client_code?: string;

  country?: string;

  description?: string;

  email?: string;

  fax?: string;

  mobile?: string;

  nic?: string;

  notes?: string;

  phone?: string;

  siren?: string;

  tags?: Array<string>;

  tva_number?: string;

  website?: string;

  zip_code?: string;
}

export interface ClientListParams {
  /**
   * Nombre maximum de clients à retourner
   */
  limit?: number;

  /**
   * Recherche textuelle dans nom, email, téléphone, code client
   */
  search?: string;

  /**
   * Nombre de clients à ignorer (pagination)
   */
  skip?: number;

  /**
   * Champ et direction de tri (ex. "name:1" pour tri alphabétique)
   */
  sort?: string;

  /**
   * Filtrer par état (active = visible, inactive = archivé)
   */
  state?: 'active' | 'inactive';
}

export interface ClientImportFromCsvParams {
  /**
   * Fichier CSV à importer
   */
  file?: Uploadable;
}

export interface ClientMergeParams {
  /**
   * ID du client à fusionner (sera supprimé)
   */
  source: string;

  /**
   * ID du client cible (recevra les documents)
   */
  target: string;
}

export declare namespace Clients {
  export {
    type Client as Client,
    type ClientInput as ClientInput,
    type ClientCreateResponse as ClientCreateResponse,
    type ClientRetrieveResponse as ClientRetrieveResponse,
    type ClientUpdateResponse as ClientUpdateResponse,
    type ClientListResponse as ClientListResponse,
    type ClientDeleteResponse as ClientDeleteResponse,
    type ClientImportFromCsvResponse as ClientImportFromCsvResponse,
    type ClientMergeResponse as ClientMergeResponse,
    type ClientCreateParams as ClientCreateParams,
    type ClientRetrieveParams as ClientRetrieveParams,
    type ClientUpdateParams as ClientUpdateParams,
    type ClientListParams as ClientListParams,
    type ClientImportFromCsvParams as ClientImportFromCsvParams,
    type ClientMergeParams as ClientMergeParams,
  };
}
