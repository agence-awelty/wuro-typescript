// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Session extends APIResource {
  /**
   * Récupère les détails d'une session de paiement Paybox existante.
   *
   * **Utilisation:**
   *
   * - Permet de vérifier l'état d'une session de paiement
   * - Utile pour reprendre un paiement interrompu
   */
  update(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/paybox/checkout/session/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Initialise une nouvelle session de paiement Paybox pour permettre au client de
   * payer.
   *
   * **Utilisation:**
   *
   * - Retourne les informations nécessaires pour rediriger le client vers Paybox
   * - La session contient l'URL de paiement et les paramètres de sécurité
   *
   * **Prérequis:**
   *
   * - L'entreprise doit avoir configuré ses identifiants Paybox
   */
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/paybox/checkout/session', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
