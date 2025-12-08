// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class AbsenceTypes extends APIResource {
  /**
   * Crée un nouveau type d'absence pour l'entreprise.
   *
   * Les types d'absence permettent de catégoriser les demandes d'absence des
   * collaborateurs. Exemples de types courants :
   *
   * - Congés payés
   * - RTT
   * - Congé maladie
   * - Télétravail
   * - Formation
   * - Événement client
   *
   * Vous pouvez personnaliser l'apparence de chaque type avec une icône et des
   * couleurs pour faciliter la lecture du calendrier d'équipe.
   *
   * @example
   * ```ts
   * const absenceType = await client.absenceTypes.create({
   *   name: 'Congés payés',
   * });
   * ```
   */
  create(body: AbsenceTypeCreateParams, options?: RequestOptions): APIPromise<AbsenceTypeCreateResponse> {
    return this._client.post('/absence-type', { body, ...options });
  }

  /**
   * Récupère les informations détaillées d'un type d'absence spécifique par son
   * identifiant.
   *
   * Les informations incluent le nom, l'icône, les couleurs d'affichage et la
   * catégorie (absence ou event).
   *
   * @example
   * ```ts
   * const absenceType = await client.absenceTypes.retrieve(
   *   'uid',
   * );
   * ```
   */
  retrieve(uid: string, options?: RequestOptions): APIPromise<AbsenceTypeRetrieveResponse> {
    return this._client.get(path`/absence-type/${uid}`, options);
  }

  /**
   * Met à jour les informations d'un type d'absence existant.
   *
   * Vous pouvez modifier :
   *
   * - Le nom affiché
   * - L'icône représentative
   * - Les couleurs (fond et texte) pour la visualisation calendrier
   * - L'état (active/inactive) pour masquer sans supprimer
   *
   * **Note** : Désactiver un type n'affecte pas les absences déjà créées avec ce
   * type.
   *
   * @example
   * ```ts
   * const absenceType = await client.absenceTypes.update('uid');
   * ```
   */
  update(
    uid: string,
    body: AbsenceTypeUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AbsenceTypeUpdateResponse> {
    return this._client.patch(path`/absence-type/${uid}`, { body, ...options });
  }

  /**
   * Récupère la liste de tous les types d'absence configurés pour l'entreprise.
   *
   * Les types d'absence permettent de catégoriser les absences (congés payés, RTT,
   * maladie, télétravail, etc.). Chaque type peut avoir une icône et des couleurs
   * personnalisées pour une meilleure visualisation dans le calendrier.
   *
   * Les types peuvent être de deux catégories :
   *
   * - **absence** : Congés, RTT, maladie, etc.
   * - **event** : Événements comme les formations, réunions, etc.
   *
   * @example
   * ```ts
   * const absenceTypes = await client.absenceTypes.list();
   * ```
   */
  list(
    query: AbsenceTypeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AbsenceTypeListResponse> {
    return this._client.get('/absence-types', { query, ...options });
  }

  /**
   * Supprime un type d'absence.
   *
   * **Attention** : Cette action est définitive. Pour masquer un type sans le
   * supprimer, utilisez plutôt PATCH avec `state: "inactive"`.
   *
   * La suppression peut échouer si des absences sont liées à ce type.
   *
   * @example
   * ```ts
   * const absenceType = await client.absenceTypes.delete('uid');
   * ```
   */
  delete(uid: string, options?: RequestOptions): APIPromise<AbsenceTypeDeleteResponse> {
    return this._client.delete(path`/absence-type/${uid}`, options);
  }
}

export interface AbsenceType {
  /**
   * Unique identifier for the absence type
   */
  _id?: string;

  /**
   * Background color for the absence type
   */
  backgroundColor?: string;

  /**
   * Background color in RGB format
   */
  backgroundColorRgb?: string;

  /**
   * Text color for the absence type
   */
  color?: string;

  /**
   * Icon for the absence type
   */
  icon?: string;

  /**
   * Name of the absence type
   */
  name?: string;

  /**
   * State of the absence type
   */
  state?: 'active' | 'inactive';

  /**
   * Type of the absence type
   */
  type?: 'absence' | 'event';
}

export interface AbsenceTypeCreateResponse {
  newAbsenceType?: AbsenceType;
}

export interface AbsenceTypeRetrieveResponse {
  absenceType?: AbsenceType;
}

export interface AbsenceTypeUpdateResponse {
  absenceType?: AbsenceType;
}

export interface AbsenceTypeListResponse {
  /**
   * Tableau des types d'absence
   */
  absenceTypes?: Array<AbsenceType>;

  /**
   * Limite utilisée pour la pagination
   */
  limit?: number;

  /**
   * Offset utilisé pour la pagination
   */
  skip?: number;

  /**
   * Nombre total de types d'absence
   */
  total?: number;
}

export interface AbsenceTypeDeleteResponse {
  absenceType?: AbsenceType;
}

export interface AbsenceTypeCreateParams {
  /**
   * Nom du type d'absence (obligatoire)
   */
  name: string;

  /**
   * Couleur de fond pour l'affichage calendrier
   */
  backgroundColor?: string;

  /**
   * Couleur de fond en format RGB
   */
  backgroundColorRgb?: string;

  /**
   * Couleur du texte
   */
  color?: string;

  /**
   * Icône Font Awesome (ex. "fa-umbrella-beach", "fa-briefcase-medical")
   */
  icon?: string;

  /**
   * État initial (active par défaut)
   */
  state?: 'active' | 'inactive';

  /**
   * Catégorie du type :
   *
   * - **absence** : Congés, RTT, maladie (absence du collaborateur)
   * - **event** : Formation, réunion (présent mais non disponible)
   */
  type?: 'absence' | 'event';
}

export interface AbsenceTypeUpdateParams {
  /**
   * Couleur de fond hexadécimale (ex. "#3498db")
   */
  backgroundColor?: string;

  /**
   * Couleur de fond en format RGB (ex. "52, 152, 219")
   */
  backgroundColorRgb?: string;

  /**
   * Couleur du texte hexadécimale (ex. "#ffffff")
   */
  color?: string;

  /**
   * Icône Font Awesome ou autre (ex. "fa-umbrella-beach")
   */
  icon?: string;

  /**
   * Nom du type d'absence (ex. "Congés payés", "RTT", "Maladie")
   */
  name?: string;

  /**
   * État du type (inactive = masqué dans les choix)
   */
  state?: 'active' | 'inactive';
}

export interface AbsenceTypeListParams {
  /**
   * Nombre maximum de types d'absence à retourner
   */
  limit?: number;

  /**
   * Nombre de types d'absence à ignorer pour la pagination
   */
  skip?: number;

  /**
   * Champ et direction de tri (ex. "name:1" pour tri alphabétique ascendant)
   */
  sort?: string;

  /**
   * Filtrer par état (active/inactive)
   */
  state?: 'active' | 'inactive';

  /**
   * Filtrer par catégorie (absence ou event)
   */
  type?: 'absence' | 'event';
}

export declare namespace AbsenceTypes {
  export {
    type AbsenceType as AbsenceType,
    type AbsenceTypeCreateResponse as AbsenceTypeCreateResponse,
    type AbsenceTypeRetrieveResponse as AbsenceTypeRetrieveResponse,
    type AbsenceTypeUpdateResponse as AbsenceTypeUpdateResponse,
    type AbsenceTypeListResponse as AbsenceTypeListResponse,
    type AbsenceTypeDeleteResponse as AbsenceTypeDeleteResponse,
    type AbsenceTypeCreateParams as AbsenceTypeCreateParams,
    type AbsenceTypeUpdateParams as AbsenceTypeUpdateParams,
    type AbsenceTypeListParams as AbsenceTypeListParams,
  };
}
