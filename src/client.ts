// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { RequestInit, RequestInfo, BodyInit } from './internal/builtin-types';
import type { HTTPMethod, PromiseOrValue, MergedRequestInit, FinalizedRequestInit } from './internal/types';
import { uuid4 } from './internal/utils/uuid';
import { validatePositiveInteger, isAbsoluteURL, safeJSON } from './internal/utils/values';
import { sleep } from './internal/utils/sleep';
export type { Logger, LogLevel } from './internal/utils/log';
import { castToError, isAbortError } from './internal/errors';
import type { APIResponseProps } from './internal/parse';
import { getPlatformHeaders } from './internal/detect-platform';
import * as Shims from './internal/shims';
import * as Opts from './internal/request-options';
import * as qs from './internal/qs';
import { VERSION } from './version';
import * as Errors from './core/error';
import * as Uploads from './core/uploads';
import * as API from './resources/index';
import { APIPromise } from './core/api-promise';
import {
  AbsenceType,
  AbsenceTypeCreateParams,
  AbsenceTypeCreateResponse,
  AbsenceTypeDeleteResponse,
  AbsenceTypeListParams,
  AbsenceTypeListResponse,
  AbsenceTypeRetrieveResponse,
  AbsenceTypeUpdateParams,
  AbsenceTypeUpdateResponse,
  AbsenceTypes,
} from './resources/absence-types';
import {
  Absence,
  AbsenceCreateParams,
  AbsenceCreateResponse,
  AbsenceDeleteResponse,
  AbsenceListParams,
  AbsenceListResponse,
  AbsenceRetrieveParams,
  AbsenceRetrieveResponse,
  AbsenceUpdateParams,
  AbsenceUpdateResponse,
  Absences,
} from './resources/absences';
import { Auth, AuthLoginParams, AuthLoginResponse } from './resources/auth';
import {
  Client,
  ClientCreateParams,
  ClientCreateResponse,
  ClientDeleteResponse,
  ClientImportFromCsvParams,
  ClientImportFromCsvResponse,
  ClientInput,
  ClientListParams,
  ClientListResponse,
  ClientMergeParams,
  ClientMergeResponse,
  ClientRetrieveParams,
  ClientRetrieveResponse,
  ClientUpdateParams,
  ClientUpdateResponse,
  Clients,
} from './resources/clients';
import { CompanyMailListResponse, CompanyMails } from './resources/company-mails';
import {
  DeliveryReceiptCreateInvoiceResponse,
  DeliveryReceiptCreateParams,
  DeliveryReceiptCreateResponse,
  DeliveryReceiptDeleteResponse,
  DeliveryReceiptGenerateHTMLResponse,
  DeliveryReceiptGeneratePdfParams,
  DeliveryReceiptListParams,
  DeliveryReceiptListResponse,
  DeliveryReceiptRetrieveParams,
  DeliveryReceiptRetrieveResponse,
  DeliveryReceiptUpdateParams,
  DeliveryReceiptUpdateResponse,
  DeliveryReceipts,
  Receipt,
} from './resources/delivery-receipts';
import { Export, ExportExportAbsencesParams, ExportExportAbsencesResponse } from './resources/export';
import { InvoiceFile, InvoiceFileAnalyzeParams, InvoiceFileAnalyzeResponse } from './resources/invoice-file';
import { Order } from './resources/order';
import { PayboxPaiementDone } from './resources/paybox-paiement-done';
import {
  PaymentMethod,
  PaymentMethodCreateParams,
  PaymentMethodCreateResponse,
  PaymentMethodDeleteResponse,
  PaymentMethodListParams,
  PaymentMethodListResponse,
  PaymentMethodRetrieveResponse,
  PaymentMethodUpdateParams,
  PaymentMethodUpdateResponse,
  PaymentMethods,
} from './resources/payment-methods';
import {
  ProductCategories,
  ProductCategory,
  ProductCategoryCreateParams,
  ProductCategoryListResponse,
  ProductCategoryUpdateParams,
} from './resources/product-categories';
import { ProductUnitListResponse, ProductUnits } from './resources/product-units';
import {
  PurchaseCategories,
  PurchaseCategoryCreateParams,
  PurchaseCategoryCreateResponse,
  PurchaseCategoryListResponse,
  PurchaseCategoryRetrieveResponse,
  PurchaseCategoryUpdateParams,
} from './resources/purchase-categories';
import {
  PurchaseFile,
  PurchaseFileAnalyzeParams,
  PurchaseFileAnalyzeResponse,
} from './resources/purchase-file';
import {
  Purchase,
  PurchaseCreateCreditResponse,
  PurchaseCreateParams,
  PurchaseCreateResponse,
  PurchaseDeleteResponse,
  PurchaseInput,
  PurchaseListParams,
  PurchaseListResponse,
  PurchaseRetrieveParams,
  PurchaseRetrieveResponse,
  PurchaseUpdateParams,
  PurchaseUpdateResponse,
  Purchases,
} from './resources/purchases';
import { StatisticRetrievePaymentsResponse, Statistics } from './resources/statistics';
import {
  User,
  UserCreateParams,
  UserCreateResponse,
  UserDeleteParams,
  UserListInvitationsResponse,
  UserListNotificationsResponse,
  UserListParams,
  UserListPositionsResponse,
  UserListResponse,
  UserRetrieveByUidResponse,
  UserRetrieveResponse,
  UserUpdateParams,
  UserUpdateResponse,
  Users,
} from './resources/users';
import {
  Companies,
  Company,
  CompanyConfirmDomainResponse,
  CompanyCreateParams,
  CompanyCreateResponse,
  CompanyListParams,
  CompanyListPositionsResponse,
  CompanyListResponse,
  CompanyRetrieveByIDResponse,
  CompanyRetrieveCgvResponse,
  CompanyRetrieveContainerStatsResponse,
  CompanyRetrieveExtraInfosResponse,
  CompanyRetrieveResponse,
  CompanySearchBySireneParams,
  CompanySearchBySireneResponse,
  CompanySendDomainConfirmationResponse,
  CompanyUpdateResponse,
} from './resources/companies/companies';
import {
  InvoiceCreateCreditResponse,
  InvoiceCreatePackageParams,
  InvoiceCreatePackageResponse,
  InvoiceCreateParams,
  InvoiceCreateResponse,
  InvoiceGetLogsParams,
  InvoiceGetLogsResponse,
  InvoiceGetStatsParams,
  InvoiceGetStatsResponse,
  InvoiceGetTurnoverParams,
  InvoiceGetTurnoverResponse,
  InvoiceListParams,
  InvoiceListPaymentsParams,
  InvoiceListPaymentsResponse,
  InvoiceListResponse,
  InvoiceListWaitingPaymentsParams,
  InvoiceListWaitingPaymentsResponse,
  InvoiceRecordPaymentParams,
  InvoiceRecordPaymentResponse,
  InvoiceRetrieveParams,
  InvoiceRetrieveResponse,
  InvoiceSendEmailParams,
  InvoiceSendEmailResponse,
  InvoiceUpdateParams,
  InvoiceUpdateResponse,
  Invoices,
} from './resources/invoices/invoices';
import { Paybox } from './resources/paybox/paybox';
import {
  Product,
  ProductCreateParams,
  ProductCreateResponse,
  ProductDeleteResponse,
  ProductImportFromCsvParams,
  ProductImportFromCsvResponse,
  ProductInput,
  ProductListParams,
  ProductListResponse,
  ProductRetrieveParams,
  ProductRetrieveResponse,
  ProductUpdateParams,
  ProductUpdateResponse,
  Products,
} from './resources/products/products';
import {
  QuoteCreateAdvanceInvoiceParams,
  QuoteCreateAdvanceInvoiceResponse,
  QuoteCreateInvoiceFromQuoteResponse,
  QuoteCreateInvoiceResponse,
  QuoteCreatePackageParams,
  QuoteCreatePackageResponse,
  QuoteCreateParams,
  QuoteCreateProformaInvoiceResponse,
  QuoteCreatePurchaseOrderResponse,
  QuoteCreateResponse,
  QuoteDeleteResponse,
  QuoteGenerateHTMLResponse,
  QuoteGetLogsParams,
  QuoteGetLogsResponse,
  QuoteGetStatsParams,
  QuoteGetStatsResponse,
  QuoteListParams,
  QuoteListResponse,
  QuoteRetrieveParams,
  QuoteRetrieveResponse,
  QuoteUpdateParams,
  QuoteUpdateResponse,
  Quotes,
} from './resources/quotes/quotes';
import { Stripe } from './resources/stripe/stripe';
import { type Fetch } from './internal/builtin-types';
import { HeadersLike, NullableHeaders, buildHeaders } from './internal/headers';
import { FinalRequestOptions, RequestOptions } from './internal/request-options';
import { readEnv } from './internal/utils/env';
import {
  type LogLevel,
  type Logger,
  formatRequestDetails,
  loggerFor,
  parseLogLevel,
} from './internal/utils/log';
import { isEmptyObj } from './internal/utils/values';

export interface ClientOptions {
  /**
   * Defaults to process.env['WURO_BEARER_TOKEN'].
   */
  bearerToken?: string | null | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['WURO_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   *
   * @unit milliseconds
   */
  timeout?: number | undefined;
  /**
   * Additional `RequestInit` options to be passed to `fetch` calls.
   * Properties will be overridden by per-request `fetchOptions`.
   */
  fetchOptions?: MergedRequestInit | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we expect that `fetch` is defined globally.
   */
  fetch?: Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `null` in request options.
   */
  defaultHeaders?: HeadersLike | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Record<string, string | undefined> | undefined;

  /**
   * Set the log level.
   *
   * Defaults to process.env['WURO_LOG'] or 'warn' if it isn't set.
   */
  logLevel?: LogLevel | undefined;

  /**
   * Set the logger.
   *
   * Defaults to globalThis.console.
   */
  logger?: Logger | undefined;
}

/**
 * API Client for interfacing with the Wuro API.
 */
export class Wuro {
  bearerToken: string | null;

  baseURL: string;
  maxRetries: number;
  timeout: number;
  logger: Logger;
  logLevel: LogLevel | undefined;
  fetchOptions: MergedRequestInit | undefined;

  private fetch: Fetch;
  #encoder: Opts.RequestEncoder;
  protected idempotencyHeader?: string;
  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Wuro API.
   *
   * @param {string | null | undefined} [opts.bearerToken=process.env['WURO_BEARER_TOKEN'] ?? null]
   * @param {string} [opts.baseURL=process.env['WURO_BASE_URL'] ?? https://wuro.pro/api/v3.2] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {MergedRequestInit} [opts.fetchOptions] - Additional `RequestInit` options to be passed to `fetch` calls.
   * @param {Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {HeadersLike} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Record<string, string | undefined>} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = readEnv('WURO_BASE_URL'),
    bearerToken = readEnv('WURO_BEARER_TOKEN') ?? null,
    ...opts
  }: ClientOptions = {}) {
    const options: ClientOptions = {
      bearerToken,
      ...opts,
      baseURL: baseURL || `https://wuro.pro/api/v3.2`,
    };

    this.baseURL = options.baseURL!;
    this.timeout = options.timeout ?? Wuro.DEFAULT_TIMEOUT /* 1 minute */;
    this.logger = options.logger ?? console;
    const defaultLogLevel = 'warn';
    // Set default logLevel early so that we can log a warning in parseLogLevel.
    this.logLevel = defaultLogLevel;
    this.logLevel =
      parseLogLevel(options.logLevel, 'ClientOptions.logLevel', this) ??
      parseLogLevel(readEnv('WURO_LOG'), "process.env['WURO_LOG']", this) ??
      defaultLogLevel;
    this.fetchOptions = options.fetchOptions;
    this.maxRetries = options.maxRetries ?? 2;
    this.fetch = options.fetch ?? Shims.getDefaultFetch();
    this.#encoder = Opts.FallbackEncoder;

    this._options = options;

    this.bearerToken = bearerToken;
  }

  /**
   * Create a new client instance re-using the same options given to the current client with optional overriding.
   */
  withOptions(options: Partial<ClientOptions>): this {
    const client = new (this.constructor as any as new (props: ClientOptions) => typeof this)({
      ...this._options,
      baseURL: this.baseURL,
      maxRetries: this.maxRetries,
      timeout: this.timeout,
      logger: this.logger,
      logLevel: this.logLevel,
      fetch: this.fetch,
      fetchOptions: this.fetchOptions,
      bearerToken: this.bearerToken,
      ...options,
    });
    return client;
  }

  /**
   * Check whether the base URL is set to its default.
   */
  #baseURLOverridden(): boolean {
    return this.baseURL !== 'https://wuro.pro/api/v3.2';
  }

  protected defaultQuery(): Record<string, string | undefined> | undefined {
    return this._options.defaultQuery;
  }

  protected validateHeaders({ values, nulls }: NullableHeaders) {
    if (this.bearerToken && values.get('authorization')) {
      return;
    }
    if (nulls.has('authorization')) {
      return;
    }

    throw new Error(
      'Could not resolve authentication method. Expected the bearerToken to be set. Or for the "Authorization" headers to be explicitly omitted',
    );
  }

  protected async authHeaders(opts: FinalRequestOptions): Promise<NullableHeaders | undefined> {
    if (this.bearerToken == null) {
      return undefined;
    }
    return buildHeaders([{ Authorization: `Bearer ${this.bearerToken}` }]);
  }

  protected stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'comma' });
  }

  private getUserAgent(): string {
    return `${this.constructor.name}/JS ${VERSION}`;
  }

  protected defaultIdempotencyKey(): string {
    return `stainless-node-retry-${uuid4()}`;
  }

  protected makeStatusError(
    status: number,
    error: Object,
    message: string | undefined,
    headers: Headers,
  ): Errors.APIError {
    return Errors.APIError.generate(status, error, message, headers);
  }

  buildURL(
    path: string,
    query: Record<string, unknown> | null | undefined,
    defaultBaseURL?: string | undefined,
  ): string {
    const baseURL = (!this.#baseURLOverridden() && defaultBaseURL) || this.baseURL;
    const url =
      isAbsoluteURL(path) ?
        new URL(path)
      : new URL(baseURL + (baseURL.endsWith('/') && path.startsWith('/') ? path.slice(1) : path));

    const defaultQuery = this.defaultQuery();
    if (!isEmptyObj(defaultQuery)) {
      query = { ...defaultQuery, ...query };
    }

    if (typeof query === 'object' && query && !Array.isArray(query)) {
      url.search = this.stringifyQuery(query as Record<string, unknown>);
    }

    return url.toString();
  }

  /**
   * Used as a callback for mutating the given `FinalRequestOptions` object.
   */
  protected async prepareOptions(options: FinalRequestOptions): Promise<void> {}

  /**
   * Used as a callback for mutating the given `RequestInit` object.
   *
   * This is useful for cases where you want to add certain headers based off of
   * the request properties, e.g. `method` or `url`.
   */
  protected async prepareRequest(
    request: RequestInit,
    { url, options }: { url: string; options: FinalRequestOptions },
  ): Promise<void> {}

  get<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('get', path, opts);
  }

  post<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('post', path, opts);
  }

  patch<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('patch', path, opts);
  }

  put<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('put', path, opts);
  }

  delete<Rsp>(path: string, opts?: PromiseOrValue<RequestOptions>): APIPromise<Rsp> {
    return this.methodRequest('delete', path, opts);
  }

  private methodRequest<Rsp>(
    method: HTTPMethod,
    path: string,
    opts?: PromiseOrValue<RequestOptions>,
  ): APIPromise<Rsp> {
    return this.request(
      Promise.resolve(opts).then((opts) => {
        return { method, path, ...opts };
      }),
    );
  }

  request<Rsp>(
    options: PromiseOrValue<FinalRequestOptions>,
    remainingRetries: number | null = null,
  ): APIPromise<Rsp> {
    return new APIPromise(this, this.makeRequest(options, remainingRetries, undefined));
  }

  private async makeRequest(
    optionsInput: PromiseOrValue<FinalRequestOptions>,
    retriesRemaining: number | null,
    retryOfRequestLogID: string | undefined,
  ): Promise<APIResponseProps> {
    const options = await optionsInput;
    const maxRetries = options.maxRetries ?? this.maxRetries;
    if (retriesRemaining == null) {
      retriesRemaining = maxRetries;
    }

    await this.prepareOptions(options);

    const { req, url, timeout } = await this.buildRequest(options, {
      retryCount: maxRetries - retriesRemaining,
    });

    await this.prepareRequest(req, { url, options });

    /** Not an API request ID, just for correlating local log entries. */
    const requestLogID = 'log_' + ((Math.random() * (1 << 24)) | 0).toString(16).padStart(6, '0');
    const retryLogStr = retryOfRequestLogID === undefined ? '' : `, retryOf: ${retryOfRequestLogID}`;
    const startTime = Date.now();

    loggerFor(this).debug(
      `[${requestLogID}] sending request`,
      formatRequestDetails({
        retryOfRequestLogID,
        method: options.method,
        url,
        options,
        headers: req.headers,
      }),
    );

    if (options.signal?.aborted) {
      throw new Errors.APIUserAbortError();
    }

    const controller = new AbortController();
    const response = await this.fetchWithTimeout(url, req, timeout, controller).catch(castToError);
    const headersTime = Date.now();

    if (response instanceof globalThis.Error) {
      const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;
      if (options.signal?.aborted) {
        throw new Errors.APIUserAbortError();
      }
      // detect native connection timeout errors
      // deno throws "TypeError: error sending request for url (https://example/): client error (Connect): tcp connect error: Operation timed out (os error 60): Operation timed out (os error 60)"
      // undici throws "TypeError: fetch failed" with cause "ConnectTimeoutError: Connect Timeout Error (attempted address: example:443, timeout: 1ms)"
      // others do not provide enough information to distinguish timeouts from other connection errors
      const isTimeout =
        isAbortError(response) ||
        /timed? ?out/i.test(String(response) + ('cause' in response ? String(response.cause) : ''));
      if (retriesRemaining) {
        loggerFor(this).info(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - ${retryMessage}`,
        );
        loggerFor(this).debug(
          `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url,
            durationMs: headersTime - startTime,
            message: response.message,
          }),
        );
        return this.retryRequest(options, retriesRemaining, retryOfRequestLogID ?? requestLogID);
      }
      loggerFor(this).info(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} - error; no more retries left`,
      );
      loggerFor(this).debug(
        `[${requestLogID}] connection ${isTimeout ? 'timed out' : 'failed'} (error; no more retries left)`,
        formatRequestDetails({
          retryOfRequestLogID,
          url,
          durationMs: headersTime - startTime,
          message: response.message,
        }),
      );
      if (isTimeout) {
        throw new Errors.APIConnectionTimeoutError();
      }
      throw new Errors.APIConnectionError({ cause: response });
    }

    const responseInfo = `[${requestLogID}${retryLogStr}] ${req.method} ${url} ${
      response.ok ? 'succeeded' : 'failed'
    } with status ${response.status} in ${headersTime - startTime}ms`;

    if (!response.ok) {
      const shouldRetry = await this.shouldRetry(response);
      if (retriesRemaining && shouldRetry) {
        const retryMessage = `retrying, ${retriesRemaining} attempts remaining`;

        // We don't need the body of this response.
        await Shims.CancelReadableStream(response.body);
        loggerFor(this).info(`${responseInfo} - ${retryMessage}`);
        loggerFor(this).debug(
          `[${requestLogID}] response error (${retryMessage})`,
          formatRequestDetails({
            retryOfRequestLogID,
            url: response.url,
            status: response.status,
            headers: response.headers,
            durationMs: headersTime - startTime,
          }),
        );
        return this.retryRequest(
          options,
          retriesRemaining,
          retryOfRequestLogID ?? requestLogID,
          response.headers,
        );
      }

      const retryMessage = shouldRetry ? `error; no more retries left` : `error; not retryable`;

      loggerFor(this).info(`${responseInfo} - ${retryMessage}`);

      const errText = await response.text().catch((err: any) => castToError(err).message);
      const errJSON = safeJSON(errText);
      const errMessage = errJSON ? undefined : errText;

      loggerFor(this).debug(
        `[${requestLogID}] response error (${retryMessage})`,
        formatRequestDetails({
          retryOfRequestLogID,
          url: response.url,
          status: response.status,
          headers: response.headers,
          message: errMessage,
          durationMs: Date.now() - startTime,
        }),
      );

      const err = this.makeStatusError(response.status, errJSON, errMessage, response.headers);
      throw err;
    }

    loggerFor(this).info(responseInfo);
    loggerFor(this).debug(
      `[${requestLogID}] response start`,
      formatRequestDetails({
        retryOfRequestLogID,
        url: response.url,
        status: response.status,
        headers: response.headers,
        durationMs: headersTime - startTime,
      }),
    );

    return { response, options, controller, requestLogID, retryOfRequestLogID, startTime };
  }

  async fetchWithTimeout(
    url: RequestInfo,
    init: RequestInit | undefined,
    ms: number,
    controller: AbortController,
  ): Promise<Response> {
    const { signal, method, ...options } = init || {};
    if (signal) signal.addEventListener('abort', () => controller.abort());

    const timeout = setTimeout(() => controller.abort(), ms);

    const isReadableBody =
      ((globalThis as any).ReadableStream && options.body instanceof (globalThis as any).ReadableStream) ||
      (typeof options.body === 'object' && options.body !== null && Symbol.asyncIterator in options.body);

    const fetchOptions: RequestInit = {
      signal: controller.signal as any,
      ...(isReadableBody ? { duplex: 'half' } : {}),
      method: 'GET',
      ...options,
    };
    if (method) {
      // Custom methods like 'patch' need to be uppercased
      // See https://github.com/nodejs/undici/issues/2294
      fetchOptions.method = method.toUpperCase();
    }

    try {
      // use undefined this binding; fetch errors if bound to something else in browser/cloudflare
      return await this.fetch.call(undefined, url, fetchOptions);
    } finally {
      clearTimeout(timeout);
    }
  }

  private async shouldRetry(response: Response): Promise<boolean> {
    // Note this is not a standard header.
    const shouldRetryHeader = response.headers.get('x-should-retry');

    // If the server explicitly says whether or not to retry, obey.
    if (shouldRetryHeader === 'true') return true;
    if (shouldRetryHeader === 'false') return false;

    // Retry on request timeouts.
    if (response.status === 408) return true;

    // Retry on lock timeouts.
    if (response.status === 409) return true;

    // Retry on rate limits.
    if (response.status === 429) return true;

    // Retry internal errors.
    if (response.status >= 500) return true;

    return false;
  }

  private async retryRequest(
    options: FinalRequestOptions,
    retriesRemaining: number,
    requestLogID: string,
    responseHeaders?: Headers | undefined,
  ): Promise<APIResponseProps> {
    let timeoutMillis: number | undefined;

    // Note the `retry-after-ms` header may not be standard, but is a good idea and we'd like proactive support for it.
    const retryAfterMillisHeader = responseHeaders?.get('retry-after-ms');
    if (retryAfterMillisHeader) {
      const timeoutMs = parseFloat(retryAfterMillisHeader);
      if (!Number.isNaN(timeoutMs)) {
        timeoutMillis = timeoutMs;
      }
    }

    // About the Retry-After header: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After
    const retryAfterHeader = responseHeaders?.get('retry-after');
    if (retryAfterHeader && !timeoutMillis) {
      const timeoutSeconds = parseFloat(retryAfterHeader);
      if (!Number.isNaN(timeoutSeconds)) {
        timeoutMillis = timeoutSeconds * 1000;
      } else {
        timeoutMillis = Date.parse(retryAfterHeader) - Date.now();
      }
    }

    // If the API asks us to wait a certain amount of time (and it's a reasonable amount),
    // just do what it says, but otherwise calculate a default
    if (!(timeoutMillis && 0 <= timeoutMillis && timeoutMillis < 60 * 1000)) {
      const maxRetries = options.maxRetries ?? this.maxRetries;
      timeoutMillis = this.calculateDefaultRetryTimeoutMillis(retriesRemaining, maxRetries);
    }
    await sleep(timeoutMillis);

    return this.makeRequest(options, retriesRemaining - 1, requestLogID);
  }

  private calculateDefaultRetryTimeoutMillis(retriesRemaining: number, maxRetries: number): number {
    const initialRetryDelay = 0.5;
    const maxRetryDelay = 8.0;

    const numRetries = maxRetries - retriesRemaining;

    // Apply exponential backoff, but not more than the max.
    const sleepSeconds = Math.min(initialRetryDelay * Math.pow(2, numRetries), maxRetryDelay);

    // Apply some jitter, take up to at most 25 percent of the retry time.
    const jitter = 1 - Math.random() * 0.25;

    return sleepSeconds * jitter * 1000;
  }

  async buildRequest(
    inputOptions: FinalRequestOptions,
    { retryCount = 0 }: { retryCount?: number } = {},
  ): Promise<{ req: FinalizedRequestInit; url: string; timeout: number }> {
    const options = { ...inputOptions };
    const { method, path, query, defaultBaseURL } = options;

    const url = this.buildURL(path!, query as Record<string, unknown>, defaultBaseURL);
    if ('timeout' in options) validatePositiveInteger('timeout', options.timeout);
    options.timeout = options.timeout ?? this.timeout;
    const { bodyHeaders, body } = this.buildBody({ options });
    const reqHeaders = await this.buildHeaders({ options: inputOptions, method, bodyHeaders, retryCount });

    const req: FinalizedRequestInit = {
      method,
      headers: reqHeaders,
      ...(options.signal && { signal: options.signal }),
      ...((globalThis as any).ReadableStream &&
        body instanceof (globalThis as any).ReadableStream && { duplex: 'half' }),
      ...(body && { body }),
      ...((this.fetchOptions as any) ?? {}),
      ...((options.fetchOptions as any) ?? {}),
    };

    return { req, url, timeout: options.timeout };
  }

  private async buildHeaders({
    options,
    method,
    bodyHeaders,
    retryCount,
  }: {
    options: FinalRequestOptions;
    method: HTTPMethod;
    bodyHeaders: HeadersLike;
    retryCount: number;
  }): Promise<Headers> {
    let idempotencyHeaders: HeadersLike = {};
    if (this.idempotencyHeader && method !== 'get') {
      if (!options.idempotencyKey) options.idempotencyKey = this.defaultIdempotencyKey();
      idempotencyHeaders[this.idempotencyHeader] = options.idempotencyKey;
    }

    const headers = buildHeaders([
      idempotencyHeaders,
      {
        Accept: 'application/json',
        'User-Agent': this.getUserAgent(),
        'X-Stainless-Retry-Count': String(retryCount),
        ...(options.timeout ? { 'X-Stainless-Timeout': String(Math.trunc(options.timeout / 1000)) } : {}),
        ...getPlatformHeaders(),
      },
      await this.authHeaders(options),
      this._options.defaultHeaders,
      bodyHeaders,
      options.headers,
    ]);

    this.validateHeaders(headers);

    return headers.values;
  }

  private buildBody({ options: { body, headers: rawHeaders } }: { options: FinalRequestOptions }): {
    bodyHeaders: HeadersLike;
    body: BodyInit | undefined;
  } {
    if (!body) {
      return { bodyHeaders: undefined, body: undefined };
    }
    const headers = buildHeaders([rawHeaders]);
    if (
      // Pass raw type verbatim
      ArrayBuffer.isView(body) ||
      body instanceof ArrayBuffer ||
      body instanceof DataView ||
      (typeof body === 'string' &&
        // Preserve legacy string encoding behavior for now
        headers.values.has('content-type')) ||
      // `Blob` is superset of `File`
      ((globalThis as any).Blob && body instanceof (globalThis as any).Blob) ||
      // `FormData` -> `multipart/form-data`
      body instanceof FormData ||
      // `URLSearchParams` -> `application/x-www-form-urlencoded`
      body instanceof URLSearchParams ||
      // Send chunked stream (each chunk has own `length`)
      ((globalThis as any).ReadableStream && body instanceof (globalThis as any).ReadableStream)
    ) {
      return { bodyHeaders: undefined, body: body as BodyInit };
    } else if (
      typeof body === 'object' &&
      (Symbol.asyncIterator in body ||
        (Symbol.iterator in body && 'next' in body && typeof body.next === 'function'))
    ) {
      return { bodyHeaders: undefined, body: Shims.ReadableStreamFrom(body as AsyncIterable<Uint8Array>) };
    } else {
      return this.#encoder({ body, headers });
    }
  }

  static Wuro = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static WuroError = Errors.WuroError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;

  invoiceFile: API.InvoiceFile = new API.InvoiceFile(this);
  payboxPaiementDone: API.PayboxPaiementDone = new API.PayboxPaiementDone(this);
  paybox: API.Paybox = new API.Paybox(this);
  stripe: API.Stripe = new API.Stripe(this);
  order: API.Order = new API.Order(this);
  statistics: API.Statistics = new API.Statistics(this);
  export: API.Export = new API.Export(this);
  companyMails: API.CompanyMails = new API.CompanyMails(this);
  productUnits: API.ProductUnits = new API.ProductUnits(this);
  purchaseFile: API.PurchaseFile = new API.PurchaseFile(this);
  invoices: API.Invoices = new API.Invoices(this);
  quotes: API.Quotes = new API.Quotes(this);
  paymentMethods: API.PaymentMethods = new API.PaymentMethods(this);
  deliveryReceipts: API.DeliveryReceipts = new API.DeliveryReceipts(this);
  absenceTypes: API.AbsenceTypes = new API.AbsenceTypes(this);
  absences: API.Absences = new API.Absences(this);
  companies: API.Companies = new API.Companies(this);
  clients: API.Clients = new API.Clients(this);
  products: API.Products = new API.Products(this);
  productCategories: API.ProductCategories = new API.ProductCategories(this);
  purchases: API.Purchases = new API.Purchases(this);
  purchaseCategories: API.PurchaseCategories = new API.PurchaseCategories(this);
  users: API.Users = new API.Users(this);
  auth: API.Auth = new API.Auth(this);
}

Wuro.InvoiceFile = InvoiceFile;
Wuro.PayboxPaiementDone = PayboxPaiementDone;
Wuro.Paybox = Paybox;
Wuro.Stripe = Stripe;
Wuro.Order = Order;
Wuro.Statistics = Statistics;
Wuro.Export = Export;
Wuro.CompanyMails = CompanyMails;
Wuro.ProductUnits = ProductUnits;
Wuro.PurchaseFile = PurchaseFile;
Wuro.Invoices = Invoices;
Wuro.Quotes = Quotes;
Wuro.PaymentMethods = PaymentMethods;
Wuro.DeliveryReceipts = DeliveryReceipts;
Wuro.AbsenceTypes = AbsenceTypes;
Wuro.Absences = Absences;
Wuro.Companies = Companies;
Wuro.Clients = Clients;
Wuro.Products = Products;
Wuro.ProductCategories = ProductCategories;
Wuro.Purchases = Purchases;
Wuro.PurchaseCategories = PurchaseCategories;
Wuro.Users = Users;
Wuro.Auth = Auth;

export declare namespace Wuro {
  export type RequestOptions = Opts.RequestOptions;

  export {
    InvoiceFile as InvoiceFile,
    type InvoiceFileAnalyzeResponse as InvoiceFileAnalyzeResponse,
    type InvoiceFileAnalyzeParams as InvoiceFileAnalyzeParams,
  };

  export { PayboxPaiementDone as PayboxPaiementDone };

  export { Paybox as Paybox };

  export { Stripe as Stripe };

  export { Order as Order };

  export {
    Statistics as Statistics,
    type StatisticRetrievePaymentsResponse as StatisticRetrievePaymentsResponse,
  };

  export {
    Export as Export,
    type ExportExportAbsencesResponse as ExportExportAbsencesResponse,
    type ExportExportAbsencesParams as ExportExportAbsencesParams,
  };

  export { CompanyMails as CompanyMails, type CompanyMailListResponse as CompanyMailListResponse };

  export { ProductUnits as ProductUnits, type ProductUnitListResponse as ProductUnitListResponse };

  export {
    PurchaseFile as PurchaseFile,
    type PurchaseFileAnalyzeResponse as PurchaseFileAnalyzeResponse,
    type PurchaseFileAnalyzeParams as PurchaseFileAnalyzeParams,
  };

  export {
    Invoices as Invoices,
    type InvoiceCreateResponse as InvoiceCreateResponse,
    type InvoiceRetrieveResponse as InvoiceRetrieveResponse,
    type InvoiceUpdateResponse as InvoiceUpdateResponse,
    type InvoiceListResponse as InvoiceListResponse,
    type InvoiceCreateCreditResponse as InvoiceCreateCreditResponse,
    type InvoiceCreatePackageResponse as InvoiceCreatePackageResponse,
    type InvoiceGetLogsResponse as InvoiceGetLogsResponse,
    type InvoiceGetStatsResponse as InvoiceGetStatsResponse,
    type InvoiceGetTurnoverResponse as InvoiceGetTurnoverResponse,
    type InvoiceListPaymentsResponse as InvoiceListPaymentsResponse,
    type InvoiceListWaitingPaymentsResponse as InvoiceListWaitingPaymentsResponse,
    type InvoiceRecordPaymentResponse as InvoiceRecordPaymentResponse,
    type InvoiceSendEmailResponse as InvoiceSendEmailResponse,
    type InvoiceCreateParams as InvoiceCreateParams,
    type InvoiceRetrieveParams as InvoiceRetrieveParams,
    type InvoiceUpdateParams as InvoiceUpdateParams,
    type InvoiceListParams as InvoiceListParams,
    type InvoiceCreatePackageParams as InvoiceCreatePackageParams,
    type InvoiceGetLogsParams as InvoiceGetLogsParams,
    type InvoiceGetStatsParams as InvoiceGetStatsParams,
    type InvoiceGetTurnoverParams as InvoiceGetTurnoverParams,
    type InvoiceListPaymentsParams as InvoiceListPaymentsParams,
    type InvoiceListWaitingPaymentsParams as InvoiceListWaitingPaymentsParams,
    type InvoiceRecordPaymentParams as InvoiceRecordPaymentParams,
    type InvoiceSendEmailParams as InvoiceSendEmailParams,
  };

  export {
    Quotes as Quotes,
    type QuoteCreateResponse as QuoteCreateResponse,
    type QuoteRetrieveResponse as QuoteRetrieveResponse,
    type QuoteUpdateResponse as QuoteUpdateResponse,
    type QuoteListResponse as QuoteListResponse,
    type QuoteDeleteResponse as QuoteDeleteResponse,
    type QuoteCreateAdvanceInvoiceResponse as QuoteCreateAdvanceInvoiceResponse,
    type QuoteCreateInvoiceResponse as QuoteCreateInvoiceResponse,
    type QuoteCreateInvoiceFromQuoteResponse as QuoteCreateInvoiceFromQuoteResponse,
    type QuoteCreatePackageResponse as QuoteCreatePackageResponse,
    type QuoteCreateProformaInvoiceResponse as QuoteCreateProformaInvoiceResponse,
    type QuoteCreatePurchaseOrderResponse as QuoteCreatePurchaseOrderResponse,
    type QuoteGenerateHTMLResponse as QuoteGenerateHTMLResponse,
    type QuoteGetLogsResponse as QuoteGetLogsResponse,
    type QuoteGetStatsResponse as QuoteGetStatsResponse,
    type QuoteCreateParams as QuoteCreateParams,
    type QuoteRetrieveParams as QuoteRetrieveParams,
    type QuoteUpdateParams as QuoteUpdateParams,
    type QuoteListParams as QuoteListParams,
    type QuoteCreateAdvanceInvoiceParams as QuoteCreateAdvanceInvoiceParams,
    type QuoteCreatePackageParams as QuoteCreatePackageParams,
    type QuoteGetLogsParams as QuoteGetLogsParams,
    type QuoteGetStatsParams as QuoteGetStatsParams,
  };

  export {
    PaymentMethods as PaymentMethods,
    type PaymentMethod as PaymentMethod,
    type PaymentMethodCreateResponse as PaymentMethodCreateResponse,
    type PaymentMethodRetrieveResponse as PaymentMethodRetrieveResponse,
    type PaymentMethodUpdateResponse as PaymentMethodUpdateResponse,
    type PaymentMethodListResponse as PaymentMethodListResponse,
    type PaymentMethodDeleteResponse as PaymentMethodDeleteResponse,
    type PaymentMethodCreateParams as PaymentMethodCreateParams,
    type PaymentMethodUpdateParams as PaymentMethodUpdateParams,
    type PaymentMethodListParams as PaymentMethodListParams,
  };

  export {
    DeliveryReceipts as DeliveryReceipts,
    type Receipt as Receipt,
    type DeliveryReceiptCreateResponse as DeliveryReceiptCreateResponse,
    type DeliveryReceiptRetrieveResponse as DeliveryReceiptRetrieveResponse,
    type DeliveryReceiptUpdateResponse as DeliveryReceiptUpdateResponse,
    type DeliveryReceiptListResponse as DeliveryReceiptListResponse,
    type DeliveryReceiptDeleteResponse as DeliveryReceiptDeleteResponse,
    type DeliveryReceiptCreateInvoiceResponse as DeliveryReceiptCreateInvoiceResponse,
    type DeliveryReceiptGenerateHTMLResponse as DeliveryReceiptGenerateHTMLResponse,
    type DeliveryReceiptCreateParams as DeliveryReceiptCreateParams,
    type DeliveryReceiptRetrieveParams as DeliveryReceiptRetrieveParams,
    type DeliveryReceiptUpdateParams as DeliveryReceiptUpdateParams,
    type DeliveryReceiptListParams as DeliveryReceiptListParams,
    type DeliveryReceiptGeneratePdfParams as DeliveryReceiptGeneratePdfParams,
  };

  export {
    AbsenceTypes as AbsenceTypes,
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

  export {
    Absences as Absences,
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

  export {
    Companies as Companies,
    type Company as Company,
    type CompanyCreateResponse as CompanyCreateResponse,
    type CompanyRetrieveResponse as CompanyRetrieveResponse,
    type CompanyUpdateResponse as CompanyUpdateResponse,
    type CompanyListResponse as CompanyListResponse,
    type CompanyConfirmDomainResponse as CompanyConfirmDomainResponse,
    type CompanyListPositionsResponse as CompanyListPositionsResponse,
    type CompanyRetrieveByIDResponse as CompanyRetrieveByIDResponse,
    type CompanyRetrieveCgvResponse as CompanyRetrieveCgvResponse,
    type CompanyRetrieveContainerStatsResponse as CompanyRetrieveContainerStatsResponse,
    type CompanyRetrieveExtraInfosResponse as CompanyRetrieveExtraInfosResponse,
    type CompanySearchBySireneResponse as CompanySearchBySireneResponse,
    type CompanySendDomainConfirmationResponse as CompanySendDomainConfirmationResponse,
    type CompanyCreateParams as CompanyCreateParams,
    type CompanyListParams as CompanyListParams,
    type CompanySearchBySireneParams as CompanySearchBySireneParams,
  };

  export {
    Clients as Clients,
    type Client as Client,
    type ClientInput as ClientInput,
    type ClientCreateResponse as ClientCreateResponse,
    type ClientRetrieveResponse as ClientRetrieveResponse,
    type ClientUpdateResponse as ClientUpdateResponse,
    type ClientListResponse as ClientListResponse,
    type ClientDeleteResponse as ClientDeleteResponse,
    type ClientImportFromCsvResponse as ClientImportFromCsvResponse,
    type ClientMergeResponse as ClientMergeResponse,
    type ClientCreateParams as ClientCreateParams,
    type ClientRetrieveParams as ClientRetrieveParams,
    type ClientUpdateParams as ClientUpdateParams,
    type ClientListParams as ClientListParams,
    type ClientImportFromCsvParams as ClientImportFromCsvParams,
    type ClientMergeParams as ClientMergeParams,
  };

  export {
    Products as Products,
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
    ProductCategories as ProductCategories,
    type ProductCategory as ProductCategory,
    type ProductCategoryListResponse as ProductCategoryListResponse,
    type ProductCategoryCreateParams as ProductCategoryCreateParams,
    type ProductCategoryUpdateParams as ProductCategoryUpdateParams,
  };

  export {
    Purchases as Purchases,
    type Purchase as Purchase,
    type PurchaseInput as PurchaseInput,
    type PurchaseCreateResponse as PurchaseCreateResponse,
    type PurchaseRetrieveResponse as PurchaseRetrieveResponse,
    type PurchaseUpdateResponse as PurchaseUpdateResponse,
    type PurchaseListResponse as PurchaseListResponse,
    type PurchaseDeleteResponse as PurchaseDeleteResponse,
    type PurchaseCreateCreditResponse as PurchaseCreateCreditResponse,
    type PurchaseCreateParams as PurchaseCreateParams,
    type PurchaseRetrieveParams as PurchaseRetrieveParams,
    type PurchaseUpdateParams as PurchaseUpdateParams,
    type PurchaseListParams as PurchaseListParams,
  };

  export {
    PurchaseCategories as PurchaseCategories,
    type PurchaseCategoryCreateResponse as PurchaseCategoryCreateResponse,
    type PurchaseCategoryRetrieveResponse as PurchaseCategoryRetrieveResponse,
    type PurchaseCategoryListResponse as PurchaseCategoryListResponse,
    type PurchaseCategoryCreateParams as PurchaseCategoryCreateParams,
    type PurchaseCategoryUpdateParams as PurchaseCategoryUpdateParams,
  };

  export {
    Users as Users,
    type User as User,
    type UserCreateResponse as UserCreateResponse,
    type UserRetrieveResponse as UserRetrieveResponse,
    type UserUpdateResponse as UserUpdateResponse,
    type UserListResponse as UserListResponse,
    type UserListInvitationsResponse as UserListInvitationsResponse,
    type UserListNotificationsResponse as UserListNotificationsResponse,
    type UserListPositionsResponse as UserListPositionsResponse,
    type UserRetrieveByUidResponse as UserRetrieveByUidResponse,
    type UserCreateParams as UserCreateParams,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserDeleteParams as UserDeleteParams,
  };

  export {
    Auth as Auth,
    type AuthLoginResponse as AuthLoginResponse,
    type AuthLoginParams as AuthLoginParams,
  };
}
