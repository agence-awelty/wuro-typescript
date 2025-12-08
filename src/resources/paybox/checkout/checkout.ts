// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SessionAPI from './session';
import { Session } from './session';

export class Checkout extends APIResource {
  session: SessionAPI.Session = new SessionAPI.Session(this._client);
}

Checkout.Session = Session;

export declare namespace Checkout {
  export { Session as Session };
}
