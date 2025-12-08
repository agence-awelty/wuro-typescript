// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Register extends APIResource {
  /**
   * Crée un nouveau compte utilisateur.
   *
   * ## Processus d'inscription
   *
   * 1. L'utilisateur s'inscrit avec son email et mot de passe
   * 2. Un email de confirmation est envoyé
   * 3. L'utilisateur confirme son inscription via `/auth/register/confirm`
   *
   * ## Validation du mot de passe
   *
   * Le mot de passe doit respecter certaines règles de sécurité (longueur minimale,
   * caractères spéciaux, etc.).
   *
   * ## Email unique
   *
   * L'email doit être unique dans le système. Si l'email existe déjà, une erreur
   * sera retournée.
   */
  create(body: RegisterCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/auth/register', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Confirme l'inscription d'un utilisateur avec le token reçu par email.
   *
   * ## Activation du compte
   *
   * Après confirmation, le compte devient actif et l'utilisateur peut se connecter.
   *
   * ## Token unique
   *
   * Le token de confirmation ne peut être utilisé qu'une seule fois.
   */
  confirm(body: RegisterConfirmParams, options?: RequestOptions): APIPromise<void> {
    return this._client.patch('/auth/register/confirm', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface RegisterCreateParams {
  /**
   * Adresse email (obligatoire, unique)
   */
  email: string;

  /**
   * Mot de passe (obligatoire)
   */
  password: string;

  /**
   * Prénom
   */
  first_name?: string;

  /**
   * Nom
   */
  last_name?: string;
}

export interface RegisterConfirmParams {
  /**
   * Token de confirmation reçu par email
   */
  token: string;
}

export declare namespace Register {
  export {
    type RegisterCreateParams as RegisterCreateParams,
    type RegisterConfirmParams as RegisterConfirmParams,
  };
}
