// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as UsersAPI from '../users';
import * as PasswordAPI from './password';
import { Password, PasswordConfirmResetParams, PasswordRequestResetParams } from './password';
import * as RegisterAPI from './register';
import { Register, RegisterConfirmParams, RegisterCreateParams } from './register';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Auth extends APIResource {
  register: RegisterAPI.Register = new RegisterAPI.Register(this._client);
  password: PasswordAPI.Password = new PasswordAPI.Password(this._client);

  /**
   * Authentifie un utilisateur avec son email et mot de passe.
   *
   * ## Token JWT
   *
   * En cas de succès, un token JWT est retourné. Ce token doit être utilisé dans le
   * header `Authorization: Bearer {token}` pour les requêtes authentifiées.
   *
   * ## Sélection d'entreprise
   *
   * Après connexion, si l'utilisateur a accès à plusieurs entreprises, utilisez
   * `/auth/company` pour sélectionner l'entreprise active.
   *
   * ## Expiration du token
   *
   * Le token a une durée de validité limitée. Après expiration, l'utilisateur doit
   * se reconnecter.
   */
  login(body: AuthLoginParams, options?: RequestOptions): APIPromise<AuthLoginResponse> {
    return this._client.post('/auth/login', { body, ...options });
  }

  /**
   * Authentifie un utilisateur via Google OAuth.
   *
   * ## Processus OAuth
   *
   * 1. L'application obtient un token Google
   * 2. Le token est envoyé à cette route
   * 3. L'API valide le token auprès de Google
   * 4. Un token JWT Wuro est retourné
   *
   * ## Création de compte automatique
   *
   * Si l'utilisateur n'existe pas, un compte est automatiquement créé avec les
   * informations récupérées depuis Google.
   */
  loginWithGoogle(
    body: AuthLoginWithGoogleParams,
    options?: RequestOptions,
  ): APIPromise<AuthLoginWithGoogleResponse> {
    return this._client.post('/auth/google', { body, ...options });
  }

  /**
   * Authentifie un utilisateur via LinkedIn OAuth.
   *
   * ## Processus OAuth
   *
   * 1. L'application obtient un code d'autorisation LinkedIn
   * 2. Le code est envoyé à cette route
   * 3. L'API échange le code contre un token d'accès
   * 4. Un token JWT Wuro est retourné
   *
   * ## Création de compte automatique
   *
   * Si l'utilisateur n'existe pas, un compte est automatiquement créé avec les
   * informations récupérées depuis LinkedIn.
   */
  loginWithLinkedin(
    body: AuthLoginWithLinkedinParams,
    options?: RequestOptions,
  ): APIPromise<AuthLoginWithLinkedinResponse> {
    return this._client.post('/auth/linkedin', { body, ...options });
  }

  /**
   * Sélectionne l'entreprise active pour la session.
   *
   * ## Contexte multi-entreprise
   *
   * Un utilisateur peut avoir accès à plusieurs entreprises. Cette route permet de
   * basculer entre les entreprises.
   *
   * ## Nouveau token
   *
   * Un nouveau token JWT est retourné avec le contexte de l'entreprise sélectionnée.
   * Ce nouveau token doit être utilisé pour les requêtes suivantes.
   */
  selectCompany(
    body: AuthSelectCompanyParams,
    options?: RequestOptions,
  ): APIPromise<AuthSelectCompanyResponse> {
    return this._client.post('/auth/company', { body, ...options });
  }
}

export interface AuthLoginResponse {
  /**
   * Token JWT d'authentification
   */
  token?: string;

  user?: UsersAPI.User;
}

export interface AuthLoginWithGoogleResponse {
  /**
   * Token JWT d'authentification
   */
  token?: string;

  user?: UsersAPI.User;
}

export interface AuthLoginWithLinkedinResponse {
  /**
   * Token JWT d'authentification
   */
  token?: string;

  user?: UsersAPI.User;
}

export interface AuthSelectCompanyResponse {
  /**
   * Nouveau token JWT avec le contexte entreprise
   */
  token?: string;
}

export interface AuthLoginParams {
  /**
   * Adresse email
   */
  email: string;

  /**
   * Mot de passe
   */
  password: string;
}

export interface AuthLoginWithGoogleParams {
  /**
   * Token OAuth Google
   */
  token: string;
}

export interface AuthLoginWithLinkedinParams {
  /**
   * Code d'autorisation OAuth LinkedIn
   */
  code: string;
}

export interface AuthSelectCompanyParams {
  /**
   * ID de l'entreprise à sélectionner
   */
  company: string;
}

Auth.Register = Register;
Auth.Password = Password;

export declare namespace Auth {
  export {
    type AuthLoginResponse as AuthLoginResponse,
    type AuthLoginWithGoogleResponse as AuthLoginWithGoogleResponse,
    type AuthLoginWithLinkedinResponse as AuthLoginWithLinkedinResponse,
    type AuthSelectCompanyResponse as AuthSelectCompanyResponse,
    type AuthLoginParams as AuthLoginParams,
    type AuthLoginWithGoogleParams as AuthLoginWithGoogleParams,
    type AuthLoginWithLinkedinParams as AuthLoginWithLinkedinParams,
    type AuthSelectCompanyParams as AuthSelectCompanyParams,
  };

  export {
    Register as Register,
    type RegisterCreateParams as RegisterCreateParams,
    type RegisterConfirmParams as RegisterConfirmParams,
  };

  export {
    Password as Password,
    type PasswordConfirmResetParams as PasswordConfirmResetParams,
    type PasswordRequestResetParams as PasswordRequestResetParams,
  };
}
