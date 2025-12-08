// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Webhook extends APIResource {
  /**
   * Reçoit et traite les événements webhook envoyés par Stripe.
   *
   * **Événements traités:**
   *
   * - `checkout.session.completed` : Paiement réussi
   * - `payment_intent.succeeded` : Intention de paiement réussie
   * - `payment_intent.payment_failed` : Échec de paiement
   * - `invoice.paid` : Facture payée (abonnements)
   *
   * **Sécurité:**
   *
   * - La signature du webhook est validée avec le secret webhook Stripe
   * - Seuls les événements signés correctement sont traités
   *
   * **Important:**
   *
   * - Cette route ne doit pas être modifiée (vérification du endpoint côté Stripe)
   */
  receive(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/stripe/webhook', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
