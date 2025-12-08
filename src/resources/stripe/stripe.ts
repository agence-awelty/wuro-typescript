// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as WebhookAPI from './webhook';
import { Webhook } from './webhook';
import * as CheckoutAPI from './checkout/checkout';
import { Checkout } from './checkout/checkout';

export class Stripe extends APIResource {
  checkout: CheckoutAPI.Checkout = new CheckoutAPI.Checkout(this._client);
  webhook: WebhookAPI.Webhook = new WebhookAPI.Webhook(this._client);
}

Stripe.Checkout = Checkout;
Stripe.Webhook = Webhook;

export declare namespace Stripe {
  export { Checkout as Checkout };

  export { Webhook as Webhook };
}
