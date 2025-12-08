// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class InvoiceFile extends APIResource {
  /**
   * Analyse un fichier PDF de facture via OCR et IA (Mistral) pour en extraire les
   * informations.
   *
   * **Utilisation:**
   *
   * - Envoyer le fichier PDF en base64 dans le champ `file`
   * - L'IA extrait: fournisseur, date, numéro, lignes, totaux, TVA
   *
   * **Restrictions:**
   *
   * - La reconnaissance doit être activée pour l'entreprise (`visionAnalytic`)
   *
   * **Réponse:**
   *
   * - `invoice`: Données extraites du PDF
   * - `preSubmitInvoice`: Données avec totaux recalculés (pour vérification)
   */
  analyze(body: InvoiceFileAnalyzeParams, options?: RequestOptions): APIPromise<InvoiceFileAnalyzeResponse> {
    return this._client.post('/invoice-file', { body, ...options });
  }
}

export interface InvoiceFileAnalyzeResponse {
  /**
   * Données brutes extraites
   */
  invoice?: unknown;

  /**
   * Données avec totaux recalculés
   */
  preSubmitInvoice?: unknown;
}

export interface InvoiceFileAnalyzeParams {
  /**
   * Fichier PDF encodé en base64
   */
  file: string;
}

export declare namespace InvoiceFile {
  export {
    type InvoiceFileAnalyzeResponse as InvoiceFileAnalyzeResponse,
    type InvoiceFileAnalyzeParams as InvoiceFileAnalyzeParams,
  };
}
