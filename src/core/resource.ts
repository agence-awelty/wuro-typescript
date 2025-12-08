// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Wuro } from '../client';

export abstract class APIResource {
  protected _client: Wuro;

  constructor(client: Wuro) {
    this._client = client;
  }
}
