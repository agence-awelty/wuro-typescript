// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Statistics extends APIResource {
  /**
   * Récupère les statistiques globales des paiements reçus.
   *
   * **Statistiques retournées:**
   *
   * - Total des paiements par période
   * - Répartition par mode de paiement
   * - Évolution temporelle des encaissements
   * - Moyenne des paiements
   *
   * **Filtres disponibles:**
   *
   * - Période (minDate, maxDate)
   * - Mode de paiement
   *
   * **Utilisation:**
   *
   * - Tableau de bord financier
   * - Rapports de trésorerie
   * - Analyse des modes de paiement préférés
   */
  retrievePayments(options?: RequestOptions): APIPromise<StatisticRetrievePaymentsResponse> {
    return this._client.get('/statistics/payments', options);
  }
}

export interface StatisticRetrievePaymentsResponse {
  /**
   * Montant moyen par paiement
   */
  average?: number;

  /**
   * Répartition par mode de paiement
   */
  byMethod?: unknown;

  /**
   * Nombre de paiements
   */
  count?: number;

  /**
   * Montant total des paiements
   */
  total?: number;
}

export declare namespace Statistics {
  export { type StatisticRetrievePaymentsResponse as StatisticRetrievePaymentsResponse };
}
