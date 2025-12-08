// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as VariantAPI from './variant';
import {
  ProductVariantInput,
  Variant,
  VariantCreateParams,
  VariantDeleteParams,
  VariantRetrieveParams,
  VariantUpdateParams,
} from './variant';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class Products extends APIResource {
  variant: VariantAPI.Variant = new VariantAPI.Variant(this._client);

  /**
   * Crée un nouveau produit dans le catalogue.
   *
   * ## Champs principaux
   *
   * - **name** : Nom du produit (obligatoire)
   * - **reference** : Référence/code article
   * - **price** : Prix unitaire HT
   * - **vat** : Taux de TVA (ex. 20, 10, 5.5)
   * - **unit** : Unité de vente (ex. "pièce", "heure", "kg")
   *
   * ## Catégories
   *
   * Vous pouvez associer le produit à une ou plusieurs catégories en utilisant le
   * champ `categories` (tableau d'IDs).
   *
   * ## Variantes
   *
   * Les produits peuvent avoir des variantes (taille, couleur, etc.) qui sont gérées
   * séparément via `/product-variants`.
   *
   * ## Événement déclenché
   *
   * Un événement `CREATE_PRODUCT` est émis après la création.
   */
  create(body: ProductCreateParams, options?: RequestOptions): APIPromise<ProductCreateResponse> {
    return this._client.post('/product', { body, ...options });
  }

  /**
   * Récupère les informations détaillées d'un produit par son identifiant.
   *
   * Les informations incluent :
   *
   * - Informations de base (nom, référence, description)
   * - Prix et TVA
   * - Unités de vente et conditionnement
   * - Catégorie(s) associée(s)
   * - Variantes si existantes
   */
  retrieve(
    uid: string,
    query: ProductRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProductRetrieveResponse> {
    return this._client.get(path`/product/${uid}`, { query, ...options });
  }

  /**
   * Met à jour les informations d'un produit existant.
   *
   * Vous pouvez modifier :
   *
   * - Les informations de base (nom, référence, description)
   * - Les prix et TVA
   * - Les unités de vente
   * - Les catégories
   *
   * ## Événement déclenché
   *
   * Un événement `UPDATE_PRODUCT` est émis après la mise à jour.
   */
  update(
    uid: string,
    body: ProductUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ProductUpdateResponse> {
    return this._client.patch(path`/product/${uid}`, { body, ...options });
  }

  /**
   * Récupère la liste de tous les produits du catalogue avec pagination, tri et
   * recherche.
   *
   * ## Recherche
   *
   * Le paramètre `search` permet une recherche textuelle dans :
   *
   * - Le nom du produit
   * - La référence
   * - La description
   *
   * ## Filtrage par catégorie
   *
   * Utilisez `category` pour filtrer par catégorie de produit.
   *
   * ## Tri
   *
   * Utilisez `sort` avec le format `champ:direction` où direction est 1 (asc) ou -1
   * (desc).
   */
  list(
    query: ProductListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProductListResponse> {
    return this._client.get('/products', { query, ...options });
  }

  /**
   * Supprime un produit (soft delete).
   *
   * Le produit passe en état "inactive" et n'apparaît plus dans les listes
   * standards. Les documents existants (factures, devis) utilisant ce produit
   * conservent les informations.
   *
   * ## Événement déclenché
   *
   * Un événement `DELETE_PRODUCT` est émis après la suppression.
   */
  delete(uid: string, options?: RequestOptions): APIPromise<ProductDeleteResponse> {
    return this._client.delete(path`/product/${uid}`, options);
  }

  /**
   * Importe une liste de produits à partir d'un fichier CSV.
   *
   * **Format du fichier CSV:**
   *
   * - Le fichier doit être encodé en UTF-8
   * - La première ligne doit contenir les en-têtes des colonnes
   * - Séparateur de colonnes : point-virgule (;) ou virgule (,)
   *
   * **Colonnes supportées:**
   *
   * - `name` : Nom du produit (obligatoire)
   * - `reference` : Référence produit
   * - `description` : Description
   * - `price_ht` : Prix unitaire HT
   * - `tva_rate` : Taux de TVA
   * - `unit` : Unité de mesure
   * - `category` : Nom de la catégorie
   * - `stock` : Quantité en stock
   *
   * **Comportement:**
   *
   * - Les produits existants (basé sur la référence) sont mis à jour
   * - Les nouveaux produits sont créés
   * - Les catégories inexistantes sont créées automatiquement
   *
   * **Télécharger un modèle:**
   *
   * - GET /files/products.csv pour obtenir un fichier modèle
   */
  importFromCsv(
    body: ProductImportFromCsvParams,
    options?: RequestOptions,
  ): APIPromise<ProductImportFromCsvResponse> {
    return this._client.post(
      '/products/csv',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Récupère la liste des variantes associées à un produit spécifique.
   */
  listVariants(uid: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/product/${uid}/variants`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface Product {
  /**
   * Unique identifier for the product
   */
  _id?: string;

  /**
   * Analytical code
   */
  analytical_code?: string;

  /**
   * Buying/cost price
   */
  buying_price?: number;

  /**
   * Reference to product category
   */
  category?: string;

  /**
   * Commercial margin (price_ht - buying_price)
   */
  commercial_margin?: number;

  /**
   * Reference to the company
   */
  company?: string;

  /**
   * Cost price (coût de revient)
   */
  cost_price?: number;

  createdAt?: string;

  /**
   * Product description
   */
  description?: string;

  /**
   * Ecotax amount
   */
  ecotax?: number;

  /**
   * Is electronic product
   */
  electronic?: boolean;

  files?: Array<Product.File>;

  /**
   * Gross margin (price_ht - cost_price)
   */
  gross_margin?: number;

  /**
   * Has specifications
   */
  hasSpecifications?: boolean;

  /**
   * Stock management enabled
   */
  hasStockManagement?: boolean;

  /**
   * Has product variations
   */
  hasVariations?: boolean;

  images?: Array<Product.Image>;

  /**
   * Is merchandise
   */
  is_marchandise?: boolean;

  /**
   * Mandatory legal mentions
   */
  mandatory_mentions?: string;

  /**
   * Product name (required)
   */
  name?: string;

  options?: Array<Product.Option>;

  /**
   * Price without tax
   */
  price_ht?: number;

  /**
   * Product reference
   */
  reference?: string;

  /**
   * Stock Keeping Unit
   */
  sku?: string;

  specifications?: Product.Specifications;

  state?: 'active' | 'inactive';

  stock?: Product.Stock;

  /**
   * List of supplier (client) references
   */
  suppliers?: Array<string>;

  /**
   * Reference to VAT rate
   */
  tva?: string;

  /**
   * VAT rate value
   */
  tva_rate?: number;

  /**
   * Unit of measurement
   */
  unit?: string;

  updatedAt?: string;

  /**
   * External URL
   */
  url_ext?: string;

  /**
   * List of variant references
   */
  variants?: Array<string>;
}

export namespace Product {
  export interface File {
    id?: string;

    filename?: string;

    mime?: string;

    size?: number;

    url?: string;
  }

  export interface Image {
    id?: string;

    filename?: string;

    mime?: string;

    size?: number;

    url?: string;
  }

  export interface Option {
    name?: string;

    values?: Array<string>;
  }

  export interface Specifications {
    depth?: number;

    height?: number;

    weight?: number;

    width?: number;
  }

  export interface Stock {
    forceSell?: boolean;

    nb_alert?: number;

    nb_min?: number;

    nb_stock?: number;

    sell_value_ht?: number;

    sell_value_ttc?: number;

    value_ht?: number;

    value_ttc?: number;
  }
}

export interface ProductInput {
  name: string;

  analytical_code?: string;

  buying_price?: number;

  category?: string;

  cost_price?: number;

  description?: string;

  ecotax?: number;

  electronic?: boolean;

  hasSpecifications?: boolean;

  hasStockManagement?: boolean;

  hasVariations?: boolean;

  is_marchandise?: boolean;

  mandatory_mentions?: string;

  options?: Array<ProductInput.Option>;

  price_ht?: number;

  reference?: string;

  sku?: string;

  specifications?: ProductInput.Specifications;

  stock?: ProductInput.Stock;

  suppliers?: Array<string>;

  tva?: string;

  tva_rate?: number;

  unit?: string;

  url_ext?: string;
}

export namespace ProductInput {
  export interface Option {
    name?: string;

    values?: Array<string>;
  }

  export interface Specifications {
    depth?: number;

    height?: number;

    weight?: number;

    width?: number;
  }

  export interface Stock {
    forceSell?: boolean;

    nb_alert?: number;

    nb_min?: number;

    nb_stock?: number;
  }
}

export interface ProductCreateResponse {
  newProduct?: Product;
}

export interface ProductRetrieveResponse {
  product?: Product;
}

export interface ProductUpdateResponse {
  updatedProduct?: Product;
}

export interface ProductListResponse {
  /**
   * Limite utilisée
   */
  limit?: number;

  /**
   * Tableau des produits
   */
  products?: Array<Product>;

  /**
   * Offset utilisé
   */
  skip?: number;

  /**
   * Nombre total de produits
   */
  total?: number;
}

export interface ProductDeleteResponse {
  product?: Product;
}

export interface ProductImportFromCsvResponse {
  /**
   * Nombre de produits créés
   */
  created?: number;

  /**
   * Liste des erreurs rencontrées
   */
  errors?: Array<unknown>;

  /**
   * Nombre de produits mis à jour
   */
  updated?: number;
}

export interface ProductCreateParams {
  name: string;

  analytical_code?: string;

  buying_price?: number;

  category?: string;

  cost_price?: number;

  description?: string;

  ecotax?: number;

  electronic?: boolean;

  hasSpecifications?: boolean;

  hasStockManagement?: boolean;

  hasVariations?: boolean;

  is_marchandise?: boolean;

  mandatory_mentions?: string;

  options?: Array<ProductCreateParams.Option>;

  price_ht?: number;

  reference?: string;

  sku?: string;

  specifications?: ProductCreateParams.Specifications;

  stock?: ProductCreateParams.Stock;

  suppliers?: Array<string>;

  tva?: string;

  tva_rate?: number;

  unit?: string;

  url_ext?: string;
}

export namespace ProductCreateParams {
  export interface Option {
    name?: string;

    values?: Array<string>;
  }

  export interface Specifications {
    depth?: number;

    height?: number;

    weight?: number;

    width?: number;
  }

  export interface Stock {
    forceSell?: boolean;

    nb_alert?: number;

    nb_min?: number;

    nb_stock?: number;
  }
}

export interface ProductRetrieveParams {
  /**
   * Relations à inclure (ex. "category", "variants")
   */
  populate?: string;
}

export interface ProductUpdateParams {
  name: string;

  analytical_code?: string;

  buying_price?: number;

  category?: string;

  cost_price?: number;

  description?: string;

  ecotax?: number;

  electronic?: boolean;

  hasSpecifications?: boolean;

  hasStockManagement?: boolean;

  hasVariations?: boolean;

  is_marchandise?: boolean;

  mandatory_mentions?: string;

  options?: Array<ProductUpdateParams.Option>;

  price_ht?: number;

  reference?: string;

  sku?: string;

  specifications?: ProductUpdateParams.Specifications;

  stock?: ProductUpdateParams.Stock;

  suppliers?: Array<string>;

  tva?: string;

  tva_rate?: number;

  unit?: string;

  url_ext?: string;
}

export namespace ProductUpdateParams {
  export interface Option {
    name?: string;

    values?: Array<string>;
  }

  export interface Specifications {
    depth?: number;

    height?: number;

    weight?: number;

    width?: number;
  }

  export interface Stock {
    forceSell?: boolean;

    nb_alert?: number;

    nb_min?: number;

    nb_stock?: number;
  }
}

export interface ProductListParams {
  /**
   * Filtrer par catégorie de produit
   */
  category?: string;

  /**
   * Nombre maximum de produits à retourner
   */
  limit?: number;

  /**
   * Recherche textuelle dans nom, référence, description
   */
  search?: string;

  /**
   * Nombre de produits à ignorer (pagination)
   */
  skip?: number;

  /**
   * Champ et direction de tri (ex. "name:1", "price:-1")
   */
  sort?: string;

  /**
   * Filtrer par état (active = visible, inactive = archivé)
   */
  state?: 'active' | 'inactive';
}

export interface ProductImportFromCsvParams {
  /**
   * Fichier CSV à importer
   */
  file?: Uploadable;
}

Products.Variant = Variant;

export declare namespace Products {
  export {
    type Product as Product,
    type ProductInput as ProductInput,
    type ProductCreateResponse as ProductCreateResponse,
    type ProductRetrieveResponse as ProductRetrieveResponse,
    type ProductUpdateResponse as ProductUpdateResponse,
    type ProductListResponse as ProductListResponse,
    type ProductDeleteResponse as ProductDeleteResponse,
    type ProductImportFromCsvResponse as ProductImportFromCsvResponse,
    type ProductCreateParams as ProductCreateParams,
    type ProductRetrieveParams as ProductRetrieveParams,
    type ProductUpdateParams as ProductUpdateParams,
    type ProductListParams as ProductListParams,
    type ProductImportFromCsvParams as ProductImportFromCsvParams,
  };

  export {
    Variant as Variant,
    type ProductVariantInput as ProductVariantInput,
    type VariantCreateParams as VariantCreateParams,
    type VariantRetrieveParams as VariantRetrieveParams,
    type VariantUpdateParams as VariantUpdateParams,
    type VariantDeleteParams as VariantDeleteParams,
  };
}
