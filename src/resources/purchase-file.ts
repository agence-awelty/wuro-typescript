// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class PurchaseFile extends APIResource {
  /**
   * Analyse un fichier PDF de facture fournisseur via OCR et IA pour en extraire les
   * informations.
   *
   * **Utilisation:**
   *
   * - Envoyer le fichier PDF en base64 dans le corps de la requête
   * - L'IA extrait : fournisseur, date, numéro, lignes, totaux, TVA
   *
   * **Restrictions:**
   *
   * - La reconnaissance doit être activée pour l'entreprise (`visionAnalytic`)
   *
   * **Réponse:**
   *
   * - `purchase` : Données extraites du PDF
   * - `preSubmitPurchase` : Données avec totaux recalculés (pour vérification)
   */
  analyze(
    body: PurchaseFileAnalyzeParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PurchaseFileAnalyzeResponse> {
    return this._client.post('/purchase-file', { body, ...options });
  }
}

export interface PurchaseFileAnalyzeResponse {
  /**
   * Données avec totaux recalculés
   */
  preSubmitPurchase?: unknown;

  /**
   * Données brutes extraites
   */
  purchase?: unknown;
}

export interface PurchaseFileAnalyzeParams {
  /**
   * Fichier PDF encodé en base64
   */
  file?: string;
}

export declare namespace PurchaseFile {
  export {
    type PurchaseFileAnalyzeResponse as PurchaseFileAnalyzeResponse,
    type PurchaseFileAnalyzeParams as PurchaseFileAnalyzeParams,
  };
}
