// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Export extends APIResource {
  /**
   * Export absences
   */
  exportAbsences(
    body: ExportExportAbsencesParams,
    options?: RequestOptions,
  ): APIPromise<ExportExportAbsencesResponse> {
    return this._client.post('/export/absences', { body, ...options });
  }
}

export interface ExportExportAbsencesResponse {
  /**
   * Success message
   */
  message?: string;

  /**
   * Package information
   */
  package?: unknown;
}

export interface ExportExportAbsencesParams {
  /**
   * Reference to the company
   */
  company?: string;

  /**
   * Filters to apply to the export
   */
  filters?: unknown;
}

export declare namespace Export {
  export {
    type ExportExportAbsencesResponse as ExportExportAbsencesResponse,
    type ExportExportAbsencesParams as ExportExportAbsencesParams,
  };
}
