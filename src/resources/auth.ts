// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Auth extends APIResource {
  login(body: AuthLoginParams, options?: RequestOptions): APIPromise<AuthLoginResponse> {
    return this._client.post('/auth', { body, ...options });
  }
}

export interface AuthLoginResponse {
  token?: string;
}

export interface AuthLoginParams {
  api_key: string;

  private_key: string;
}

export declare namespace Auth {
  export { type AuthLoginResponse as AuthLoginResponse, type AuthLoginParams as AuthLoginParams };
}
