// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PayboxPaiementDone extends APIResource {
  /**
   * Traite le callback de notification de paiement envoyé par Paybox.
   *
   * **Comportement:**
   *
   * - Valide la signature de la requête Paybox
   * - Met à jour le statut de la commande/facture associée
   * - Déclenche les événements de paiement appropriés
   *
   * **Sécurité:**
   *
   * - Cette route est appelée serveur-à-serveur par Paybox
   * - La signature doit être validée avant traitement
   */
  processCallback(transactionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/paybox-paiement-done/${transactionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Vérifie le statut d'un paiement Paybox à partir de l'ID de transaction.
   *
   * **Utilisation:**
   *
   * - Appelé automatiquement par Paybox après un paiement
   * - Peut être utilisé pour vérifier manuellement le statut
   *
   * **Réponse:**
   *
   * - Retourne le statut actuel de la transaction (succès, échec, en attente)
   */
  retrieveStatus(transactionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/paybox-paiement-done/${transactionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
