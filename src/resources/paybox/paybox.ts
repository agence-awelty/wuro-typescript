// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CheckoutAPI from './checkout/checkout';
import { Checkout } from './checkout/checkout';

export class Paybox extends APIResource {
  checkout: CheckoutAPI.Checkout = new CheckoutAPI.Checkout(this._client);
}

Paybox.Checkout = Checkout;

export declare namespace Paybox {
  export { Checkout as Checkout };
}
