// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PositionAPI from './companies/position';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Users extends APIResource {
  /**
   * Retourne les informations de l'utilisateur actuellement authentifié. Utile pour
   * obtenir le profil de l'utilisateur après connexion.
   */
  retrieve(options?: RequestOptions): APIPromise<UserRetrieveResponse> {
    return this._client.get('/user', options);
  }

  /**
   * Met à jour les informations d'un utilisateur.
   *
   * **Restrictions:**
   *
   * - L'email ne peut pas être modifié via cette route
   * - Le mot de passe ne peut pas être modifié via cette route (utiliser
   *   /auth/password/reset)
   * - Déclenche un événement UPDATE_USER
   */
  update(uid: string, body: UserUpdateParams, options?: RequestOptions): APIPromise<UserUpdateResponse> {
    return this._client.patch(path`/user/${uid}`, { body, ...options });
  }

  /**
   * Désactive un utilisateur (soft delete).
   *
   * **Comportement:**
   *
   * - L'état de l'utilisateur passe à 'inactive'
   * - L'utilisateur n'est pas supprimé de la base de données
   * - Déclenche un événement DELETE_USER
   */
  deactivate(uid: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/user/${uid}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Récupère la liste des invitations en attente pour un utilisateur.
   *
   * **Types d'invitations:**
   *
   * - Invitation à rejoindre une entreprise
   * - Invitation à un projet ou équipe
   *
   * **États des invitations:**
   *
   * - `pending` : En attente de réponse
   * - `accepted` : Acceptée
   * - `refused` : Refusée
   * - `expired` : Expirée
   *
   * **Utilisation:**
   *
   * - Affichage des invitations en attente sur le dashboard utilisateur
   * - Gestion des demandes d'ajout à des entreprises
   */
  listInvitations(uid: string, options?: RequestOptions): APIPromise<UserListInvitationsResponse> {
    return this._client.get(path`/user/${uid}/invitations`, options);
  }

  /**
   * Récupère la liste des notifications pour un utilisateur.
   *
   * **Types de notifications:**
   *
   * - Factures en retard
   * - Devis en attente de validation
   * - Paiements reçus
   * - Invitations reçues
   * - Actions requises
   *
   * **Gestion des notifications:**
   *
   * - Les notifications non lues sont marquées comme telles
   * - Les notifications peuvent être archivées
   *
   * **Utilisation:**
   *
   * - Centre de notifications
   * - Badge de notifications non lues
   */
  listNotifications(uid: string, options?: RequestOptions): APIPromise<UserListNotificationsResponse> {
    return this._client.get(path`/user/${uid}/notifications`, options);
  }

  /**
   * Récupère la liste des postes (positions) d'un utilisateur dans les différentes
   * entreprises.
   *
   * **Informations retournées:**
   *
   * - Liste des entreprises où l'utilisateur a un poste
   * - Type de poste dans chaque entreprise
   * - Droits associés à chaque poste
   *
   * **Utilisation:**
   *
   * - Affichage du profil utilisateur multi-entreprises
   * - Vérification des accès utilisateur
   */
  listPositions(uid: string, options?: RequestOptions): APIPromise<UserListPositionsResponse> {
    return this._client.get(path`/user/${uid}/positions`, options);
  }

  /**
   * Récupère les détails d'un utilisateur spécifique.
   *
   * **Paramètre uid:**
   *
   * - Peut être un ObjectId MongoDB
   * - Ou une adresse email
   *
   * L'API détecte automatiquement le format.
   */
  retrieveByUid(uid: string, options?: RequestOptions): APIPromise<UserRetrieveByUidResponse> {
    return this._client.get(path`/user/${uid}`, options);
  }
}

export interface User {
  /**
   * Unique identifier for the user
   */
  _id?: string;

  address?: User.Address;

  /**
   * URL to user's avatar
   */
  avatar?: string;

  /**
   * User's birthdate
   */
  birthdate?: string;

  /**
   * Date when user was created
   */
  createdAt?: string;

  /**
   * User's email address
   */
  email?: string;

  /**
   * User's first name
   */
  first_name?: string;

  /**
   * User's gender
   */
  gender?: 'H' | 'F' | 'Other' | null;

  /**
   * User's last name
   */
  last_name?: string;

  phone?: User.Phone;

  /**
   * List of positions associated with the user
   */
  positions?: Array<string>;

  /**
   * User's state
   */
  state?: 'inactive' | 'created' | 'confirmed' | 'linkedin' | 'google' | 'deleted';

  /**
   * Date when user accepted terms of sale
   */
  terms_of_sale_signature?: string;

  /**
   * Date when user was last updated
   */
  updatedAt?: string;
}

export namespace User {
  export interface Address {
    /**
     * City
     */
    city?: string;

    /**
     * Country
     */
    country?: string;

    /**
     * Street address
     */
    street?: string;

    /**
     * Additional street address information
     */
    street_end?: string;

    /**
     * Zip code
     */
    zip_code?: string;
  }

  export interface Phone {
    /**
     * User's phone number
     */
    number?: string;
  }
}

export interface UserRetrieveResponse {
  user?: User;
}

export interface UserUpdateResponse {
  updatedUser?: User;
}

export interface UserListInvitationsResponse {
  invitations?: Array<UserListInvitationsResponse.Invitation>;
}

export namespace UserListInvitationsResponse {
  export interface Invitation {
    _id?: string;

    /**
     * Entreprise qui a envoyé l'invitation
     */
    company?: unknown;

    createdAt?: string;

    state?: 'pending' | 'accepted' | 'refused' | 'expired';
  }
}

export interface UserListNotificationsResponse {
  notifications?: Array<UserListNotificationsResponse.Notification>;

  /**
   * Nombre de notifications non lues
   */
  unreadCount?: number;
}

export namespace UserListNotificationsResponse {
  export interface Notification {
    _id?: string;

    createdAt?: string;

    /**
     * Message de la notification
     */
    message?: string;

    /**
     * Notification lue ou non
     */
    read?: boolean;

    /**
     * Type de notification
     */
    type?: string;
  }
}

export interface UserListPositionsResponse {
  positions?: Array<PositionAPI.Position>;
}

export interface UserRetrieveByUidResponse {
  user?: User;
}

export interface UserUpdateParams {
  /**
   * Adresse postale
   */
  address?: UserUpdateParams.Address;

  /**
   * URL ou fichier base64 de l'avatar
   */
  avatar?: string;

  /**
   * Date de naissance
   */
  birthdate?: string;

  /**
   * Prénom
   */
  first_name?: string;

  /**
   * Genre
   */
  gender?: 'H' | 'F' | 'Other';

  /**
   * Nom de famille
   */
  last_name?: string;

  personal_email?: string;

  personal_phone_fixe?: string;

  /**
   * Téléphone principal
   */
  phone?: UserUpdateParams.Phone;

  professional_email?: string;

  professional_phone?: string;

  professional_phone_fixe?: string;

  /**
   * Numéro de sécurité sociale
   */
  social_secu_number?: string;

  /**
   * Civilité (MR, MME, etc.)
   */
  title?: string;
}

export namespace UserUpdateParams {
  /**
   * Adresse postale
   */
  export interface Address {
    city?: string;

    country?: string;

    street?: string;

    street_end?: string;

    zip_code?: string;
  }

  /**
   * Téléphone principal
   */
  export interface Phone {
    number?: string;
  }
}

export declare namespace Users {
  export {
    type User as User,
    type UserRetrieveResponse as UserRetrieveResponse,
    type UserUpdateResponse as UserUpdateResponse,
    type UserListInvitationsResponse as UserListInvitationsResponse,
    type UserListNotificationsResponse as UserListNotificationsResponse,
    type UserListPositionsResponse as UserListPositionsResponse,
    type UserRetrieveByUidResponse as UserRetrieveByUidResponse,
    type UserUpdateParams as UserUpdateParams,
  };
}
