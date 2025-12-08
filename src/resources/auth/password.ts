// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Password extends APIResource {
  /**
   * Définit un nouveau mot de passe après demande de réinitialisation.
   *
   * ## Sécurité
   *
   * - Le token de réinitialisation doit être valide
   * - Le nouveau mot de passe doit respecter les règles de sécurité
   * - Après confirmation, le token est invalidé
   */
  confirmReset(body: PasswordConfirmResetParams, options?: RequestOptions): APIPromise<void> {
    return this._client.patch('/auth/password/confirm', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Envoie un email de réinitialisation de mot de passe.
   *
   * ## Processus
   *
   * 1. L'utilisateur demande une réinitialisation avec son email
   * 2. Un email contenant un lien/token est envoyé
   * 3. L'utilisateur confirme via `/auth/password/confirm` avec le nouveau mot de
   *    passe
   *
   * ## Sécurité
   *
   * - Le token a une durée de validité limitée
   * - Le lien ne peut être utilisé qu'une seule fois
   * - Aucune information n'est divulguée sur l'existence de l'email
   */
  requestReset(body: PasswordRequestResetParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/auth/password/reset', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface PasswordConfirmResetParams {
  /**
   * Token de réinitialisation reçu par email
   */
  token: string;

  /**
   * Nouveau mot de passe
   */
  password: string;
}

export interface PasswordRequestResetParams {
  /**
   * Adresse email du compte
   */
  email: string;
}

export declare namespace Password {
  export {
    type PasswordConfirmResetParams as PasswordConfirmResetParams,
    type PasswordRequestResetParams as PasswordRequestResetParams,
  };
}
