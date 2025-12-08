// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Session extends APIResource {
  /**
   * Initialise une nouvelle session de paiement Stripe (Checkout Session).
   *
   * **Utilisation:**
   *
   * - Retourne une URL de redirection vers la page de paiement Stripe
   * - La session est valide pour une durée limitée
   *
   * **Prérequis:**
   *
   * - L'entreprise doit avoir configuré ses clés API Stripe
   */
  create(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/stripe/checkout/session', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Récupère les détails d'une session de paiement Stripe existante.
   *
   * **Informations retournées:**
   *
   * - Statut du paiement (paid, unpaid, expired)
   * - Détails du client et de la transaction
   * - Montant et devise
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/stripe/checkout/session/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
