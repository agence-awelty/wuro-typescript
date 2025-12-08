// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AppInfosAPI from './app-infos';
import { AppInfos, CompanyApp } from './app-infos';
import * as PositionAPI from './position';
import { Position, PositionCreateParams, PositionResource, PositionUpdateParams } from './position';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Companies extends APIResource {
  appInfos: AppInfosAPI.AppInfos = new AppInfosAPI.AppInfos(this._client);
  position: PositionAPI.PositionResource = new PositionAPI.PositionResource(this._client);

  /**
   * Crée une nouvelle entreprise.
   *
   * **Comportement:**
   *
   * - L'URL est rendue unique automatiquement si elle existe déjà
   * - Un CompanyApp est créé automatiquement avec des options par défaut
   * - Si créée via une application, une Application d'accès est automatiquement
   *   générée
   *
   * **Restrictions:**
   *
   * - Ne peut pas être créée depuis une version API
   *
   * **Événement déclenché:** CREATE_COMPANY
   */
  create(body: CompanyCreateParams, options?: RequestOptions): APIPromise<CompanyCreateResponse> {
    return this._client.post('/company', { body, ...options });
  }

  /**
   * Retourne les informations de l'entreprise associée à la requête authentifiée.
   */
  retrieve(options?: RequestOptions): APIPromise<CompanyRetrieveResponse> {
    return this._client.get('/company', options);
  }

  /**
   * Met à jour les informations d'une entreprise.
   *
   * **Restrictions:**
   *
   * - Le domaine d'envoi d'email est automatiquement extrait de emailExpeditor
   *
   * **Événement déclenché:** UPDATE_COMPANY
   */
  update(uid: string, options?: RequestOptions): APIPromise<CompanyUpdateResponse> {
    return this._client.patch(path`/company/${uid}`, options);
  }

  /**
   * Récupère la liste des entreprises avec pagination, tri et filtres.
   *
   * **Filtres disponibles:**
   *
   * - `search`: Recherche par nom d'entreprise
   * - `version` / `versions`: Filtre par version(s)
   * - `email`: Filtre par email
   * - `url`: Filtre par URL unique
   * - `createdAt` / `createdAtMin` / `createdAtMax`: Filtre par date de création
   */
  list(
    query: CompanyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CompanyListResponse> {
    return this._client.get('/companies', { query, ...options });
  }

  /**
   * Supprime (désactive) une entreprise.
   *
   * **Restrictions:**
   *
   * - L'utilisateur doit être administrateur de l'entreprise
   * - L'état passe à 'inactive' (soft delete)
   *
   * **Événement déclenché:** DELETE_COMPANY
   */
  delete(uid: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/company/${uid}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Confirme la vérification du domaine personnalisé pour l'entreprise.
   *
   * **Prérequis:**
   *
   * - Un email de confirmation a été envoyé via `/send-domain-confirm`
   * - L'utilisateur doit cliquer sur le lien de confirmation
   *
   * **Comportement:**
   *
   * - Marque le domaine comme vérifié
   * - Active les fonctionnalités liées au domaine personnalisé (envoi d'emails,
   *   etc.)
   */
  confirmDomain(uid: string, options?: RequestOptions): APIPromise<CompanyConfirmDomainResponse> {
    return this._client.patch(path`/company/${uid}/domain-confirm`, options);
  }

  /**
   * Récupère la liste de tous les postes (positions) d'une entreprise.
   *
   * **Informations retournées:**
   *
   * - Liste des postes avec utilisateur, type et droits
   * - Inclut les postes actifs et inactifs
   *
   * **Utilisation:**
   *
   * - Administration des accès utilisateurs
   * - Gestion des droits et permissions
   */
  listPositions(uid: string, options?: RequestOptions): APIPromise<CompanyListPositionsResponse> {
    return this._client.get(path`/company/${uid}/positions`, options);
  }

  /**
   * Récupère les détails d'une entreprise spécifique.
   */
  retrieveByID(uid: string, options?: RequestOptions): APIPromise<CompanyRetrieveByIDResponse> {
    return this._client.get(path`/company/${uid}`, options);
  }

  /**
   * Récupère les conditions générales de vente (CGV) configurées pour l'entreprise.
   *
   * **Réponse:**
   *
   * - `cgv` : Texte des CGV personnalisées
   * - `cgv_link` : Lien vers un document externe de CGV
   * - `cgv_wuro` : Indique si les CGV par défaut de Wuro sont utilisées
   *
   * **Utilisation:**
   *
   * - Affichage sur les devis et factures
   * - Page de mentions légales
   */
  retrieveCgv(uid: string, options?: RequestOptions): APIPromise<CompanyRetrieveCgvResponse> {
    return this._client.get(path`/company/${uid}/cgv`, options);
  }

  /**
   * Récupère les statistiques d'utilisation du stockage pour l'entreprise courante.
   *
   * **Informations retournées:**
   *
   * - `containerSize` : Taille totale du conteneur de stockage (en octets)
   * - `containerPrivateSize` : Taille du stockage privé (en octets)
   *
   * **Utilisation:**
   *
   * - Affichage de l'espace utilisé
   * - Gestion des quotas de stockage
   */
  retrieveContainerStats(options?: RequestOptions): APIPromise<CompanyRetrieveContainerStatsResponse> {
    return this._client.get('/company/container-stats', options);
  }

  /**
   * Récupère les informations complètes d'une entreprise, incluant les données
   * Company et CompanyApp.
   *
   * **Informations retournées:**
   *
   * - `company` : Données de l'entreprise (coordonnées, paramètres légaux, etc.)
   * - `companyApp` : Données applicatives (modules, quotas, configuration)
   *
   * **Utilisation:**
   *
   * - Affichage complet des paramètres entreprise
   * - Administration et configuration
   */
  retrieveExtraInfos(uid: string, options?: RequestOptions): APIPromise<CompanyRetrieveExtraInfosResponse> {
    return this._client.get(path`/company/${uid}/extra-infos`, options);
  }

  /**
   * Recherche une entreprise française via l'API SIRENE de l'INSEE.
   *
   * **Utilisation:**
   *
   * - Permet de pré-remplir les informations d'une entreprise à partir de son nom
   * - Retourne les établissements actifs correspondant à la recherche
   *
   * **Données retournées:**
   *
   * - SIREN, SIRET, NIC
   * - Raison sociale
   * - Adresse complète
   * - Code NAF/APE
   */
  searchBySirene(
    query: CompanySearchBySireneParams,
    options?: RequestOptions,
  ): APIPromise<CompanySearchBySireneResponse> {
    return this._client.get('/companies/sirene', { query, ...options });
  }

  /**
   * Envoie un email de confirmation pour vérifier le domaine personnalisé de
   * l'entreprise.
   *
   * **Fonctionnement:**
   *
   * - Un email est envoyé à l'adresse associée au domaine
   * - L'email contient un lien de confirmation
   * - La confirmation permet d'activer le domaine personnalisé
   *
   * **Utilisation:**
   *
   * - Configuration initiale du domaine
   * - Renvoi du mail de confirmation si expiré
   */
  sendDomainConfirmation(
    uid: string,
    options?: RequestOptions,
  ): APIPromise<CompanySendDomainConfirmationResponse> {
    return this._client.patch(path`/company/${uid}/send-domain-confirm`, options);
  }
}

export interface Company {
  /**
   * Unique identifier for the company
   */
  _id?: string;

  /**
   * List of company addresses
   */
  addresses?: Array<Company.Address>;

  /**
   * Terms and conditions text
   */
  cgv?: string;

  /**
   * Link to terms and conditions
   */
  cgv_link?: string;

  /**
   * Whether to use Wuro's terms and conditions
   */
  cgv_wuro?: boolean;

  /**
   * Commercial court
   */
  commercial_court?: string;

  /**
   * Whether to include terms and conditions in documents
   */
  company_include_cgv?: boolean;

  /**
   * Whether to include physical terms and conditions in documents
   */
  company_include_cgv_physical?: boolean;

  /**
   * Reference to company type
   */
  company_type?: string;

  /**
   * Name of the company type
   */
  company_type_name?: string;

  /**
   * Date when the company was created
   */
  createdAt?: string;

  /**
   * Company domain
   */
  domain?: string;

  /**
   * Company email
   */
  email?: string;

  /**
   * Email used as sender for communications
   */
  emailExpeditor?: string;

  /**
   * URL to company logo
   */
  logo?: string;

  /**
   * List of company mobile numbers
   */
  mobiles?: Array<Company.Mobile>;

  /**
   * NAF/APE code
   */
  naf_ape?: string;

  /**
   * Name of the company
   */
  name?: string;

  /**
   * NIC code
   */
  nic?: string;

  /**
   * RCS registration number
   */
  num_rcs?: string;

  /**
   * Trade directory number
   */
  num_trade_directory?: string;

  /**
   * Default payment delay in days
   */
  payment_delay_default?: number;

  /**
   * List of company phone numbers
   */
  phones?: Array<Company.Phone>;

  /**
   * Late payment penalty rate
   */
  rate_late_penalties?: number;

  /**
   * Share capital amount
   */
  share_capital?: number;

  /**
   * SIREN number
   */
  siren?: string;

  /**
   * SIRET number
   */
  siret?: string;

  /**
   * State of the company
   */
  state?: 'active' | 'inactive' | 'deleted';

  /**
   * VAT number
   */
  tva_number?: string;

  /**
   * Date when the company was last updated
   */
  updatedAt?: string;

  /**
   * Unique URL identifier for the company
   */
  url?: string;

  /**
   * Default validity delay for quotes in days
   */
  validity_delay_default?: number;

  /**
   * Company website URL
   */
  website?: string;
}

export namespace Company {
  export interface Address {
    /**
     * City
     */
    city?: string;

    /**
     * Country
     */
    country?: string;

    /**
     * Street address
     */
    street?: string;

    /**
     * Additional street address information
     */
    street_end?: string;

    /**
     * Zip code
     */
    zip_code?: string;
  }

  export interface Mobile {
    /**
     * Whether this mobile number is active
     */
    active?: boolean;

    /**
     * Whether this is the main mobile number
     */
    main?: boolean;

    /**
     * Mobile number
     */
    number?: string;

    /**
     * Type of mobile number
     */
    type?: string;
  }

  export interface Phone {
    /**
     * Whether this phone number is active
     */
    active?: boolean;

    /**
     * Whether this is the main phone number
     */
    main?: boolean;

    /**
     * Phone number
     */
    number?: string;

    /**
     * Type of phone number
     */
    type?: string;
  }
}

export interface CompanyCreateResponse {
  /**
   * Application d'accès créée (si créée via une app)
   */
  application?: unknown;

  newCompany?: Company;
}

export interface CompanyRetrieveResponse {
  company?: Company;
}

export interface CompanyUpdateResponse {
  updatedCompany?: Company;
}

export interface CompanyListResponse {
  companies?: Array<Company>;

  limit?: number;

  skip?: number;

  total?: number;
}

export interface CompanyConfirmDomainResponse {
  company?: Company;

  companyApp?: AppInfosAPI.CompanyApp;
}

export interface CompanyListPositionsResponse {
  positions?: Array<PositionAPI.Position>;
}

export interface CompanyRetrieveByIDResponse {
  company?: Company;
}

export interface CompanyRetrieveCgvResponse {
  /**
   * Texte des conditions générales de vente
   */
  cgv?: string;

  /**
   * Lien vers le document des CGV
   */
  cgv_link?: string;

  /**
   * Utiliser les CGV par défaut de Wuro
   */
  cgv_wuro?: boolean;
}

export interface CompanyRetrieveContainerStatsResponse {
  /**
   * Taille du stockage privé (en octets)
   */
  containerPrivateSize?: number;

  /**
   * Taille totale du conteneur (en octets)
   */
  containerSize?: number;
}

export interface CompanyRetrieveExtraInfosResponse {
  company?: Company;

  companyApp?: AppInfosAPI.CompanyApp;
}

export interface CompanySearchBySireneResponse {
  etablissements?: Array<CompanySearchBySireneResponse.Etablissement>;
}

export namespace CompanySearchBySireneResponse {
  export interface Etablissement {
    address?: unknown;

    naf_ape?: string;

    nic?: string;

    siren?: string;

    siret?: string;

    uniteLegale?: Etablissement.UniteLegale;
  }

  export namespace Etablissement {
    export interface UniteLegale {
      denominationUniteLegale?: string;
    }
  }
}

export interface CompanySendDomainConfirmationResponse {
  /**
   * Message de confirmation d'envoi
   */
  message?: string;
}

export interface CompanyCreateParams {
  /**
   * Nom de l'entreprise (obligatoire)
   */
  name: string;

  /**
   * URL unique pour l'entreprise (obligatoire)
   */
  url: string;

  addresses?: Array<CompanyCreateParams.Address>;

  /**
   * Tribunal de commerce
   */
  commercial_court?: string;

  /**
   * ID du type d'entreprise (SARL, SAS, etc.)
   */
  company_type?: string;

  /**
   * Email principal de l'entreprise
   */
  email?: string;

  /**
   * Code NAF/APE
   */
  naf_ape?: string;

  /**
   * Code NIC
   */
  nic?: string;

  /**
   * Numéro d'inscription au RCS
   */
  num_rcs?: string;

  /**
   * Numéro au répertoire des métiers
   */
  num_trade_directory?: string;

  /**
   * Capital social
   */
  share_capital?: number;

  /**
   * Numéro SIREN (9 chiffres)
   */
  siren?: string;

  /**
   * Numéro SIRET (14 chiffres)
   */
  siret?: string;

  /**
   * Numéro de TVA intracommunautaire
   */
  tva_number?: string;

  /**
   * Site web de l'entreprise
   */
  website?: string;
}

export namespace CompanyCreateParams {
  export interface Address {
    city?: string;

    country?: string;

    street?: string;

    zip_code?: string;
  }
}

export interface CompanyListParams {
  /**
   * Filtre par email
   */
  email?: string;

  /**
   * Nombre maximum d'entreprises à retourner
   */
  limit?: number;

  /**
   * Recherche par nom d'entreprise (insensible à la casse)
   */
  search?: string;

  /**
   * Nombre d'entreprises à ignorer (pagination)
   */
  skip?: number;

  /**
   * Champ de tri et direction
   */
  sort?: string;

  /**
   * Filtre par URL unique
   */
  url?: string;
}

export interface CompanySearchBySireneParams {
  /**
   * Nom de l'entreprise à rechercher
   */
  name: string;
}

Companies.AppInfos = AppInfos;
Companies.PositionResource = PositionResource;

export declare namespace Companies {
  export {
    type Company as Company,
    type CompanyCreateResponse as CompanyCreateResponse,
    type CompanyRetrieveResponse as CompanyRetrieveResponse,
    type CompanyUpdateResponse as CompanyUpdateResponse,
    type CompanyListResponse as CompanyListResponse,
    type CompanyConfirmDomainResponse as CompanyConfirmDomainResponse,
    type CompanyListPositionsResponse as CompanyListPositionsResponse,
    type CompanyRetrieveByIDResponse as CompanyRetrieveByIDResponse,
    type CompanyRetrieveCgvResponse as CompanyRetrieveCgvResponse,
    type CompanyRetrieveContainerStatsResponse as CompanyRetrieveContainerStatsResponse,
    type CompanyRetrieveExtraInfosResponse as CompanyRetrieveExtraInfosResponse,
    type CompanySearchBySireneResponse as CompanySearchBySireneResponse,
    type CompanySendDomainConfirmationResponse as CompanySendDomainConfirmationResponse,
    type CompanyCreateParams as CompanyCreateParams,
    type CompanyListParams as CompanyListParams,
    type CompanySearchBySireneParams as CompanySearchBySireneParams,
  };

  export { AppInfos as AppInfos, type CompanyApp as CompanyApp };

  export {
    PositionResource as PositionResource,
    type Position as Position,
    type PositionCreateParams as PositionCreateParams,
    type PositionUpdateParams as PositionUpdateParams,
  };
}
