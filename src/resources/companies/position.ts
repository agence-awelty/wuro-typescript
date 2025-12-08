// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class PositionResource extends APIResource {
  /**
   * Crée un nouveau poste (position) pour un utilisateur dans l'entreprise.
   *
   * **Concept de Position:**
   *
   * - Un poste représente le lien entre un utilisateur et une entreprise
   * - Chaque poste définit un type (admin, collaborateur, etc.) et des droits
   *   spécifiques
   * - Un utilisateur peut avoir des postes dans plusieurs entreprises
   *
   * **Champs requis:**
   *
   * - `user` : Identifiant de l'utilisateur à ajouter
   * - `type` : Type de poste (référence vers un Type de droits)
   *
   * **Événement déclenché:** CREATE_POSITION
   */
  create(uid: string, body: PositionCreateParams, options?: RequestOptions): APIPromise<Position> {
    return this._client.post(path`/company/${uid}/position`, { body, ...options });
  }

  /**
   * Met à jour un poste (position) existant dans une entreprise.
   *
   * **Modifications possibles:**
   *
   * - Changer le type de poste
   * - Modifier les droits spécifiques
   * - Activer/désactiver le poste
   *
   * **États du poste:**
   *
   * - `active` : Poste actif, l'utilisateur a accès à l'entreprise
   * - `inactive` : Poste désactivé, accès révoqué
   *
   * **Événement déclenché:** UPDATE_POSITION
   */
  update(uid: string, params: PositionUpdateParams, options?: RequestOptions): APIPromise<Position> {
    const { company, ...body } = params;
    return this._client.patch(path`/company/${company}/position/${uid}`, { body, ...options });
  }
}

export interface Position {
  /**
   * Unique identifier for the position
   */
  _id?: string;

  /**
   * URL to avatar
   */
  avatar?: string;

  /**
   * ID of the company
   */
  company?: string;

  /**
   * Date when position was created
   */
  createdAt?: string;

  /**
   * Date of entry
   */
  entry_date?: string;

  /**
   * First name
   */
  first_name?: string;

  /**
   * Last name
   */
  last_name?: string;

  /**
   * Date of release
   */
  release_date?: string;

  /**
   * List of rights
   */
  rights?: Array<Position.Right>;

  /**
   * State of the position
   */
  state?: 'active' | 'inactive';

  /**
   * List of teams
   */
  teams?: Array<Position.Team>;

  /**
   * Type of the position
   */
  type?: string;

  /**
   * Date when position was last updated
   */
  updatedAt?: string;

  /**
   * ID of the user
   */
  user?: string;

  /**
   * Email of the user
   */
  userEmail?: string;
}

export namespace Position {
  export interface Right {
    /**
     * Whether the right is checked
     */
    checked?: boolean;

    /**
     * Group of the right
     */
    group?: string;

    /**
     * Name of the right
     */
    name?: string;
  }

  export interface Team {
    /**
     * Whether this is the default team
     */
    default?: boolean;

    /**
     * Type of rights
     */
    rightType?: string;

    /**
     * ID of the team
     */
    team?: string;
  }
}

export interface PositionCreateParams {
  /**
   * Type de poste (ID du Type de droits)
   */
  type: string;

  /**
   * Identifiant de l'utilisateur
   */
  user: string;

  /**
   * Liste des droits spécifiques
   */
  rights?: Array<PositionCreateParams.Right>;
}

export namespace PositionCreateParams {
  export interface Right {
    /**
     * Droit activé ou non
     */
    checked?: boolean;

    /**
     * Groupe du droit
     */
    group?: string;

    /**
     * Nom du droit
     */
    name?: string;
  }
}

export interface PositionUpdateParams {
  /**
   * Path param: Identifiant unique de l'entreprise
   */
  company: string;

  /**
   * Body param: Liste des droits spécifiques
   */
  rights?: Array<PositionUpdateParams.Right>;

  /**
   * Body param: État du poste
   */
  state?: 'active' | 'inactive';

  /**
   * Body param: Type de poste (ID du Type de droits)
   */
  type?: string;
}

export namespace PositionUpdateParams {
  export interface Right {
    /**
     * Droit activé ou non
     */
    checked?: boolean;

    /**
     * Groupe du droit
     */
    group?: string;

    /**
     * Nom du droit
     */
    name?: string;
  }
}

export declare namespace PositionResource {
  export {
    type Position as Position,
    type PositionCreateParams as PositionCreateParams,
    type PositionUpdateParams as PositionUpdateParams,
  };
}
