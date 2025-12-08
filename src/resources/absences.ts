// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Absences extends APIResource {
  /**
   * Crée une nouvelle demande d'absence pour un collaborateur.
   *
   * ## Workflow de validation
   *
   * Par défaut, l'absence est créée en état "waiting" (en attente de validation). Le
   * responsable peut ensuite la valider ("accepted") ou la refuser ("rejected").
   *
   * ## Gestion des demi-journées
   *
   * Les absences supportent les demi-journées :
   *
   * - Utilisez `from_moment` et `to_moment` avec les valeurs "full", "half-am" ou
   *   "half-pm"
   * - Exemple : absence du lundi après-midi au mercredi matin
   *
   * ## Résolution automatique du collaborateur
   *
   * Si vous fournissez uniquement `positionTo` sans `userTo`, l'API récupère
   * automatiquement l'utilisateur associé au poste.
   *
   * ## Événement déclenché
   *
   * Un événement `CREATE_ABSENCE` est émis après la création, permettant de notifier
   * les responsables de la nouvelle demande.
   *
   * @example
   * ```ts
   * const absence = await client.absences.create({
   *   from: '2024-12-23T00:00:00.000Z',
   *   to: '2024-12-27T00:00:00.000Z',
   *   type: 'type',
   * });
   * ```
   */
  create(body: AbsenceCreateParams, options?: RequestOptions): APIPromise<AbsenceCreateResponse> {
    return this._client.post('/absence', { body, ...options });
  }

  /**
   * Récupère les informations détaillées d'une absence spécifique.
   *
   * Les informations incluent :
   *
   * - Les dates et moments (matin/après-midi/journée entière)
   * - Le type d'absence
   * - L'état actuel (en attente, validée, refusée, etc.)
   * - L'historique complet des actions (logs)
   * - Le collaborateur et son poste concernés
   *
   * @example
   * ```ts
   * const absence = await client.absences.retrieve('uid');
   * ```
   */
  retrieve(
    uid: string,
    query: AbsenceRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AbsenceRetrieveResponse> {
    return this._client.get(path`/absence/${uid}`, { query, ...options });
  }

  /**
   * Met à jour une absence existante.
   *
   * ## Cas d'utilisation courants
   *
   * - **Validation/Refus** : Changer le state vers "accepted" ou "rejected"
   * - **Modification des dates** : Ajuster la période d'absence
   * - **Annulation** : Passer en state "canceled"
   *
   * ## Système de logs
   *
   * Chaque modification est tracée dans l'historique (logs). Vous pouvez ajouter un
   * commentaire et/ou une pièce jointe à chaque action.
   *
   * Les logs enregistrent automatiquement :
   *
   * - La date de l'action
   * - Le poste ayant effectué l'action
   * - La méthode HTTP utilisée
   * - L'état résultant
   *
   * ## Événement déclenché
   *
   * Un événement `UPDATE_ABSENCE` est émis après la mise à jour, permettant de
   * notifier le collaborateur des changements.
   *
   * @example
   * ```ts
   * const absence = await client.absences.update('uid');
   * ```
   */
  update(
    uid: string,
    body: AbsenceUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AbsenceUpdateResponse> {
    return this._client.patch(path`/absence/${uid}`, { body, ...options });
  }

  /**
   * Récupère la liste des absences de l'entreprise avec de nombreuses options de
   * filtrage.
   *
   * Cette route est particulièrement utile pour :
   *
   * - Afficher le calendrier des absences d'équipe
   * - Filtrer les absences par collaborateur ou période
   * - Obtenir les absences du jour (pour un dashboard RH)
   *
   * ## Filtres de période
   *
   * Plusieurs modes de filtrage temporel sont disponibles :
   *
   * - **month + year** : Absences sur un mois calendaire (avec marge du mois
   *   précédent/suivant)
   * - **today** : Absences en cours aujourd'hui (distingue matin/après-midi)
   * - **from / to** : Filtrer par date de début ou fin exacte
   * - **inPeriod** : Absences chevauchant une période donnée
   *
   * ## Gestion des demi-journées
   *
   * Les absences peuvent commencer ou finir en demi-journée :
   *
   * - **full** : Journée entière
   * - **half-am** : Matin uniquement
   * - **half-pm** : Après-midi uniquement
   *
   * @example
   * ```ts
   * const absences = await client.absences.list();
   * ```
   */
  list(
    query: AbsenceListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AbsenceListResponse> {
    return this._client.get('/absences', { query, ...options });
  }

  /**
   * Supprime une absence (soft delete).
   *
   * L'absence n'est pas physiquement supprimée mais passe en état "inactive". Un log
   * de suppression est automatiquement ajouté à l'historique.
   *
   * ## Traçabilité
   *
   * La suppression enregistre :
   *
   * - La date de suppression
   * - Le poste ayant effectué l'action
   * - L'état précédent de l'absence
   *
   * ## Événement déclenché
   *
   * Un événement `DELETE_ABSENCE` est émis, permettant de notifier le collaborateur
   * de l'annulation de sa demande.
   *
   * @example
   * ```ts
   * const absence = await client.absences.delete('uid');
   * ```
   */
  delete(uid: string, options?: RequestOptions): APIPromise<AbsenceDeleteResponse> {
    return this._client.delete(path`/absence/${uid}`, options);
  }
}

export interface Absence {
  /**
   * Unique identifier for the absence
   */
  _id?: string;

  /**
   * Reference to the company
   */
  company?: string;

  /**
   * Date when the absence was created
   */
  createdAt?: string;

  /**
   * Date when the state was changed
   */
  decision_date?: string;

  /**
   * Start date of the absence
   */
  from?: string;

  /**
   * Moment of the day when the absence starts
   */
  from_moment?: 'half-am' | 'half-pm' | 'full';

  /**
   * List of logs for the absence
   */
  logs?: Array<Absence.Log>;

  /**
   * Number of days of absence
   */
  nbDays?: number;

  /**
   * Period type of the absence
   */
  period?: 'period' | 'full' | 'half';

  /**
   * Reference to the position that made the decision
   */
  positionDecider?: string;

  /**
   * First name of the position for search purposes
   */
  positionFirstName?: string;

  /**
   * Reference to the position that created the absence
   */
  positionFrom?: string;

  /**
   * Last name of the position for search purposes
   */
  positionLastName?: string;

  /**
   * Reference to the position for which the absence is created
   */
  positionTo?: string;

  /**
   * State of the absence
   */
  state?: 'waiting' | 'accepted' | 'rejected' | 'canceled' | 'inactive';

  /**
   * Timezone for the absence dates
   */
  timezone?: string;

  /**
   * End date of the absence
   */
  to?: string;

  /**
   * Moment of the day when the absence ends
   */
  to_moment?: 'half-am' | 'half-pm' | 'full';

  /**
   * Reference to the absence type
   */
  type?: string;

  /**
   * Date when the absence was last updated
   */
  updatedAt?: string;

  /**
   * Reference to the user for which the absence is created
   */
  userTo?: string;
}

export namespace Absence {
  export interface Log {
    /**
     * Comment added to the log
     */
    comment?: string;

    /**
     * Date of the log
     */
    date?: string;

    /**
     * File attached to the log
     */
    file?: string;

    /**
     * Whether the file is stored in the safe
     */
    fileInSafe?: boolean;

    /**
     * HTTP method used
     */
    method?: string;

    /**
     * Reference to the position
     */
    position?: string;

    /**
     * State of the absence at the time of the log
     */
    state?: string;

    /**
     * State of the item requested
     */
    stateItemRequested?: string;

    /**
     * State of the log
     */
    stateLog?: 'active' | 'inactive';
  }
}

export interface AbsenceCreateResponse {
  newAbsence?: Absence;
}

export interface AbsenceRetrieveResponse {
  absence?: Absence;
}

export interface AbsenceUpdateResponse {
  updatedAbsence?: Absence;
}

export interface AbsenceListResponse {
  /**
   * Tableau des absences correspondant aux filtres
   */
  absences?: Array<Absence>;

  /**
   * Limite utilisée
   */
  limit?: number;

  /**
   * Offset utilisé
   */
  skip?: number;

  /**
   * Nombre total d'absences (avant pagination)
   */
  total?: number;
}

export interface AbsenceDeleteResponse {
  absence?: Absence;
}

export interface AbsenceCreateParams {
  /**
   * Date de début de l'absence (obligatoire)
   */
  from: string;

  /**
   * Date de fin de l'absence (obligatoire)
   */
  to: string;

  /**
   * Référence vers le type d'absence (obligatoire)
   */
  type: string;

  /**
   * Moment de début :
   *
   * - **full** : Journée entière (défaut)
   * - **half-am** : Matin uniquement
   * - **half-pm** : Après-midi uniquement
   */
  from_moment?: 'half-am' | 'half-pm' | 'full';

  /**
   * Historique initial (généralement vide à la création)
   */
  logs?: Array<AbsenceCreateParams.Log>;

  /**
   * Poste concerné par l'absence. Si fourni sans userTo, l'utilisateur est résolu
   * automatiquement.
   */
  positionTo?: string;

  /**
   * État initial de l'absence (waiting par défaut)
   */
  state?: 'waiting' | 'accepted' | 'rejected' | 'canceled';

  /**
   * Moment de fin :
   *
   * - **full** : Journée entière (défaut)
   * - **half-am** : Matin uniquement
   * - **half-pm** : Après-midi uniquement
   */
  to_moment?: 'half-am' | 'half-pm' | 'full';

  /**
   * Utilisateur concerné par l'absence. Optionnel si positionTo est fourni (résolu
   * automatiquement).
   */
  userTo?: string;
}

export namespace AbsenceCreateParams {
  export interface Log {
    /**
     * Commentaire (motif de l'absence, etc.)
     */
    comment?: string;

    /**
     * Pièce jointe (justificatif, certificat médical, etc.)
     */
    file?: string;
  }
}

export interface AbsenceRetrieveParams {
  /**
   * Relations à inclure (ex. "type", "positionTo", "userTo")
   */
  populate?: string;
}

export interface AbsenceUpdateParams {
  /**
   * Date de début de l'absence
   */
  from?: string;

  /**
   * Moment de début :
   *
   * - **full** : Journée entière
   * - **half-am** : Matin uniquement
   * - **half-pm** : Après-midi uniquement
   */
  from_moment?: 'half-am' | 'half-pm' | 'full';

  /**
   * Ajouter des entrées à l'historique de l'absence
   */
  logs?: Array<AbsenceUpdateParams.Log>;

  /**
   * Nouvel état de l'absence :
   *
   * - **waiting** : En attente de validation
   * - **accepted** : Validée par le responsable
   * - **rejected** : Refusée par le responsable
   * - **canceled** : Annulée par le collaborateur
   */
  state?: 'waiting' | 'accepted' | 'rejected' | 'canceled' | 'inactive';

  /**
   * Date de fin de l'absence
   */
  to?: string;

  /**
   * Moment de fin :
   *
   * - **full** : Journée entière
   * - **half-am** : Matin uniquement
   * - **half-pm** : Après-midi uniquement
   */
  to_moment?: 'half-am' | 'half-pm' | 'full';

  /**
   * Référence vers le type d'absence
   */
  type?: string;
}

export namespace AbsenceUpdateParams {
  export interface Log {
    /**
     * Commentaire (motif de refus, remarque, etc.)
     */
    comment?: string;

    /**
     * Date de l'action
     */
    date?: string;

    /**
     * Pièce jointe (justificatif, certificat médical, etc.)
     */
    file?: string;

    /**
     * Méthode HTTP (GET, PATCH, DELETE)
     */
    method?: string;

    /**
     * Poste ayant effectué l'action
     */
    position?: string;

    /**
     * État après l'action
     */
    state?: string;
  }
}

export interface AbsenceListParams {
  /**
   * Filtrer par date de début (format ISO)
   */
  from?: string;

  /**
   * Tableau de 2 dates [début, fin] pour obtenir les absences chevauchant cette
   * période. Utile pour le calendrier : récupère les absences qui commencent,
   * finissent ou traversent la période.
   */
  inPeriod?: Array<string>;

  /**
   * Nombre maximum d'absences à retourner
   */
  limit?: number;

  /**
   * Mois pour le filtre calendrier (1-12). Requiert year.
   */
  month?: number;

  /**
   * Filtrer par poste concerné. Valeurs spéciales :
   *
   * - **all** : Tous les postes
   * - **onlyActive** : Postes actifs uniquement
   * - ID de poste pour un poste spécifique
   * - Tableau d'IDs pour plusieurs postes
   */
  positionTo?: string | Array<string>;

  /**
   * Nombre d'absences à ignorer (pagination)
   */
  skip?: number;

  /**
   * Tri des résultats (ex. "from:-1" pour les plus récentes d'abord)
   */
  sort?: string;

  /**
   * Filtrer par état de l'absence :
   *
   * - **waiting** : En attente de validation
   * - **accepted** : Validée
   * - **rejected** : Refusée
   * - **canceled** : Annulée par le collaborateur
   * - **inactive** : Supprimée (soft delete)
   */
  state?: 'waiting' | 'accepted' | 'rejected' | 'canceled' | 'inactive';

  /**
   * Filtrer par date de fin (format ISO)
   */
  to?: string;

  /**
   * Si true, retourne uniquement les absences du jour en cours
   */
  today?: boolean;

  /**
   * Filtrer par type d'absence (peut être un tableau)
   */
  type?: string | Array<string>;

  /**
   * Filtrer par utilisateur concerné
   */
  userTo?: string;

  /**
   * Année pour le filtre calendrier. Requiert month.
   */
  year?: number;
}

export declare namespace Absences {
  export {
    type Absence as Absence,
    type AbsenceCreateResponse as AbsenceCreateResponse,
    type AbsenceRetrieveResponse as AbsenceRetrieveResponse,
    type AbsenceUpdateResponse as AbsenceUpdateResponse,
    type AbsenceListResponse as AbsenceListResponse,
    type AbsenceDeleteResponse as AbsenceDeleteResponse,
    type AbsenceCreateParams as AbsenceCreateParams,
    type AbsenceRetrieveParams as AbsenceRetrieveParams,
    type AbsenceUpdateParams as AbsenceUpdateParams,
    type AbsenceListParams as AbsenceListParams,
  };
}
