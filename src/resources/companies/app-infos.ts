// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AppInfos extends APIResource {
  /**
   * Récupère les informations applicatives (CompanyApp) de l'entreprise actuellement
   * sélectionnée.
   *
   * **Informations retournées:**
   *
   * - Configuration de l'application
   * - Modules activés
   * - Limites et quotas
   * - Paramètres de personnalisation
   */
  retrieve(options?: RequestOptions): APIPromise<CompanyApp> {
    return this._client.get('/company/app-infos', options);
  }

  /**
   * Récupère les informations applicatives (CompanyApp) d'une entreprise spécifique.
   *
   * **Informations retournées:**
   *
   * - Configuration de l'application
   * - Modules activés
   * - Limites et quotas
   * - Paramètres de personnalisation
   */
  retrieveByID(uid: string, options?: RequestOptions): APIPromise<CompanyApp> {
    return this._client.get(path`/company/${uid}/app-infos`, options);
  }
}

export interface CompanyApp {
  /**
   * Unique identifier for the company app
   */
  _id?: string;

  /**
   * Reference to the company
   */
  company?: string;

  /**
   * Container ID for storage
   */
  containerId?: string;

  /**
   * Private container ID for storage
   */
  containerPrivateId?: string;

  /**
   * Size of the private container
   */
  containerPrivateSize?: number;

  /**
   * Size of the container
   */
  containerSize?: number;

  /**
   * Date when the company app was created
   */
  createdAt?: string;

  /**
   * Domain verification status
   */
  domainVerify?: 'waiting' | 'verify' | 'none';

  /**
   * Number of invoices created
   */
  nbCreatedInvoices?: number;

  /**
   * Number of quotes created
   */
  nbCreatedQuotes?: number;

  /**
   * Number of receipts created
   */
  nbCreatedReceipts?: number;

  /**
   * Number of emails sent
   */
  nbMailsSent?: number;

  /**
   * Company options
   */
  options?: CompanyApp.Options;

  stripeCustomerId?: CompanyApp.StripeCustomerID;

  /**
   * Date when the company subscribed
   */
  subscribedSince?: string;

  /**
   * Date when the company app was last updated
   */
  updatedAt?: string;

  /**
   * Reference to active version pack
   */
  versionPackActive?: string;

  /**
   * List of version references
   */
  versions?: Array<string>;
}

export namespace CompanyApp {
  /**
   * Company options
   */
  export interface Options {
    /**
     * Whether API access is enabled
     */
    api?: boolean;

    /**
     * Whether FEC export is enabled
     */
    fec?: boolean;
  }

  export interface StripeCustomerID {
    /**
     * Development Stripe customer ID
     */
    dev?: string;

    /**
     * Pre-production Stripe customer ID
     */
    preprod?: string;

    /**
     * Production Stripe customer ID
     */
    prod?: string;
  }
}

export declare namespace AppInfos {
  export { type CompanyApp as CompanyApp };
}
