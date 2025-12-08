// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Order extends APIResource {
  /**
   * Récupère les informations de paiement associées à une commande.
   *
   * **Informations retournées:**
   *
   * - URL de paiement (si applicable)
   * - Statut du paiement
   * - Historique des tentatives de paiement
   * - Détails de la transaction
   *
   * **Utilisation:**
   *
   * - Affichage du statut de paiement au client
   * - Génération d'un nouveau lien de paiement si nécessaire
   */
  retrievePaymentInfos(uid: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/order/${uid}/payment-infos`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
