// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class CompanyMails extends APIResource {
  /**
   * Récupère la liste des adresses email configurées pour l'entreprise.
   *
   * **Utilisation:**
   *
   * - Sélection de l'expéditeur pour l'envoi de documents
   * - Configuration des réponses automatiques
   */
  list(options?: RequestOptions): APIPromise<CompanyMailListResponse> {
    return this._client.get('/company-mails', options);
  }
}

export interface CompanyMailListResponse {
  emails?: Array<string>;
}

export declare namespace CompanyMails {
  export { type CompanyMailListResponse as CompanyMailListResponse };
}
