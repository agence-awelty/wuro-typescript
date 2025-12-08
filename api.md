# Auth

Types:

- <code><a href="./src/resources/auth/auth.ts">AuthAuthenticateResponse</a></code>
- <code><a href="./src/resources/auth/auth.ts">AuthLoginResponse</a></code>
- <code><a href="./src/resources/auth/auth.ts">AuthLoginWithGoogleResponse</a></code>
- <code><a href="./src/resources/auth/auth.ts">AuthLoginWithLinkedinResponse</a></code>
- <code><a href="./src/resources/auth/auth.ts">AuthSelectCompanyResponse</a></code>

Methods:

- <code title="post /auth">client.auth.<a href="./src/resources/auth/auth.ts">authenticate</a>() -> AuthAuthenticateResponse</code>
- <code title="post /auth/login">client.auth.<a href="./src/resources/auth/auth.ts">login</a>({ ...params }) -> AuthLoginResponse</code>
- <code title="post /auth/google">client.auth.<a href="./src/resources/auth/auth.ts">loginWithGoogle</a>({ ...params }) -> AuthLoginWithGoogleResponse</code>
- <code title="post /auth/linkedin">client.auth.<a href="./src/resources/auth/auth.ts">loginWithLinkedin</a>({ ...params }) -> AuthLoginWithLinkedinResponse</code>
- <code title="post /auth/company">client.auth.<a href="./src/resources/auth/auth.ts">selectCompany</a>({ ...params }) -> AuthSelectCompanyResponse</code>

## Register

Methods:

- <code title="post /auth/register">client.auth.register.<a href="./src/resources/auth/register.ts">create</a>({ ...params }) -> void</code>
- <code title="patch /auth/register/confirm">client.auth.register.<a href="./src/resources/auth/register.ts">confirm</a>({ ...params }) -> void</code>

## Password

Methods:

- <code title="patch /auth/password/confirm">client.auth.password.<a href="./src/resources/auth/password.ts">confirmReset</a>({ ...params }) -> void</code>
- <code title="post /auth/password/reset">client.auth.password.<a href="./src/resources/auth/password.ts">requestReset</a>({ ...params }) -> void</code>

# InvoiceFile

Types:

- <code><a href="./src/resources/invoice-file.ts">InvoiceFileAnalyzeResponse</a></code>

Methods:

- <code title="post /invoice-file">client.invoiceFile.<a href="./src/resources/invoice-file.ts">analyze</a>({ ...params }) -> InvoiceFileAnalyzeResponse</code>

# PayboxPaiementDone

Methods:

- <code title="post /paybox-paiement-done/{transactionId}">client.payboxPaiementDone.<a href="./src/resources/paybox-paiement-done.ts">processCallback</a>(transactionID) -> void</code>
- <code title="get /paybox-paiement-done/{transactionId}">client.payboxPaiementDone.<a href="./src/resources/paybox-paiement-done.ts">retrieveStatus</a>(transactionID) -> void</code>

# Paybox

## Checkout

### Session

Methods:

- <code title="post /paybox/checkout/session/{id}">client.paybox.checkout.session.<a href="./src/resources/paybox/checkout/session.ts">update</a>(id) -> void</code>
- <code title="get /paybox/checkout/session">client.paybox.checkout.session.<a href="./src/resources/paybox/checkout/session.ts">list</a>() -> void</code>

# Stripe

## Checkout

### Session

Methods:

- <code title="get /stripe/checkout/session">client.stripe.checkout.session.<a href="./src/resources/stripe/checkout/session.ts">create</a>() -> void</code>
- <code title="get /stripe/checkout/session/{id}">client.stripe.checkout.session.<a href="./src/resources/stripe/checkout/session.ts">retrieve</a>(id) -> void</code>

## Webhook

Methods:

- <code title="post /stripe/webhook">client.stripe.webhook.<a href="./src/resources/stripe/webhook.ts">receive</a>() -> void</code>

# Order

Methods:

- <code title="get /order/{uid}/payment-infos">client.order.<a href="./src/resources/order.ts">retrievePaymentInfos</a>(uid) -> void</code>

# Statistics

Types:

- <code><a href="./src/resources/statistics.ts">StatisticRetrievePaymentsResponse</a></code>

Methods:

- <code title="get /statistics/payments">client.statistics.<a href="./src/resources/statistics.ts">retrievePayments</a>() -> StatisticRetrievePaymentsResponse</code>

# Export

Types:

- <code><a href="./src/resources/export.ts">ExportExportAbsencesResponse</a></code>

Methods:

- <code title="post /export/absences">client.export.<a href="./src/resources/export.ts">exportAbsences</a>({ ...params }) -> ExportExportAbsencesResponse</code>

# CompanyMails

Types:

- <code><a href="./src/resources/company-mails.ts">CompanyMailListResponse</a></code>

Methods:

- <code title="get /company-mails">client.companyMails.<a href="./src/resources/company-mails.ts">list</a>() -> CompanyMailListResponse</code>

# ProductUnits

Types:

- <code><a href="./src/resources/product-units.ts">ProductUnitListResponse</a></code>

Methods:

- <code title="get /product-units">client.productUnits.<a href="./src/resources/product-units.ts">list</a>() -> ProductUnitListResponse</code>

# PurchaseFile

Types:

- <code><a href="./src/resources/purchase-file.ts">PurchaseFileAnalyzeResponse</a></code>

Methods:

- <code title="post /purchase-file">client.purchaseFile.<a href="./src/resources/purchase-file.ts">analyze</a>({ ...params }) -> PurchaseFileAnalyzeResponse</code>

# Invoices

Types:

- <code><a href="./src/resources/invoices/invoices.ts">InvoiceCreateResponse</a></code>
- <code><a href="./src/resources/invoices/invoices.ts">InvoiceRetrieveResponse</a></code>
- <code><a href="./src/resources/invoices/invoices.ts">InvoiceUpdateResponse</a></code>
- <code><a href="./src/resources/invoices/invoices.ts">InvoiceListResponse</a></code>
- <code><a href="./src/resources/invoices/invoices.ts">InvoiceCreateCreditResponse</a></code>
- <code><a href="./src/resources/invoices/invoices.ts">InvoiceCreatePackageResponse</a></code>
- <code><a href="./src/resources/invoices/invoices.ts">InvoiceGetLogsResponse</a></code>
- <code><a href="./src/resources/invoices/invoices.ts">InvoiceGetStatsResponse</a></code>
- <code><a href="./src/resources/invoices/invoices.ts">InvoiceGetTurnoverResponse</a></code>
- <code><a href="./src/resources/invoices/invoices.ts">InvoiceListPaymentsResponse</a></code>
- <code><a href="./src/resources/invoices/invoices.ts">InvoiceListWaitingPaymentsResponse</a></code>
- <code><a href="./src/resources/invoices/invoices.ts">InvoiceRecordPaymentResponse</a></code>
- <code><a href="./src/resources/invoices/invoices.ts">InvoiceSendEmailResponse</a></code>

Methods:

- <code title="post /invoice">client.invoices.<a href="./src/resources/invoices/invoices.ts">create</a>({ ...params }) -> InvoiceCreateResponse</code>
- <code title="get /invoice/{uid}">client.invoices.<a href="./src/resources/invoices/invoices.ts">retrieve</a>(uid, { ...params }) -> InvoiceRetrieveResponse</code>
- <code title="patch /invoice/{uid}">client.invoices.<a href="./src/resources/invoices/invoices.ts">update</a>(uid, { ...params }) -> InvoiceUpdateResponse</code>
- <code title="get /invoices">client.invoices.<a href="./src/resources/invoices/invoices.ts">list</a>({ ...params }) -> InvoiceListResponse</code>
- <code title="delete /invoice/{uid}">client.invoices.<a href="./src/resources/invoices/invoices.ts">delete</a>(uid) -> void</code>
- <code title="post /invoice/{uid}/credit">client.invoices.<a href="./src/resources/invoices/invoices.ts">createCredit</a>(uid) -> InvoiceCreateCreditResponse</code>
- <code title="post /invoice/{uid}/delivery-receipt">client.invoices.<a href="./src/resources/invoices/invoices.ts">createDeliveryReceipt</a>(uid) -> void</code>
- <code title="post /invoices/package">client.invoices.<a href="./src/resources/invoices/invoices.ts">createPackage</a>({ ...params }) -> InvoiceCreatePackageResponse</code>
- <code title="get /invoices/logs">client.invoices.<a href="./src/resources/invoices/invoices.ts">getLogs</a>({ ...params }) -> InvoiceGetLogsResponse</code>
- <code title="get /invoices/stats">client.invoices.<a href="./src/resources/invoices/invoices.ts">getStats</a>({ ...params }) -> InvoiceGetStatsResponse</code>
- <code title="get /invoices/turnover">client.invoices.<a href="./src/resources/invoices/invoices.ts">getTurnover</a>({ ...params }) -> InvoiceGetTurnoverResponse</code>
- <code title="get /invoices/payments">client.invoices.<a href="./src/resources/invoices/invoices.ts">listPayments</a>({ ...params }) -> InvoiceListPaymentsResponse</code>
- <code title="get /invoices/payments-waiting">client.invoices.<a href="./src/resources/invoices/invoices.ts">listWaitingPayments</a>({ ...params }) -> InvoiceListWaitingPaymentsResponse</code>
- <code title="post /invoice/{uid}/payment">client.invoices.<a href="./src/resources/invoices/invoices.ts">recordPayment</a>(uid, { ...params }) -> InvoiceRecordPaymentResponse</code>
- <code title="get /invoice/{uid}/logs">client.invoices.<a href="./src/resources/invoices/invoices.ts">retrieveLogs</a>(uid) -> void</code>
- <code title="post /invoice/{uid}/mail">client.invoices.<a href="./src/resources/invoices/invoices.ts">sendEmail</a>(uid, { ...params }) -> InvoiceSendEmailResponse</code>

## Line

Types:

- <code><a href="./src/resources/invoices/line.ts">Invoice</a></code>
- <code><a href="./src/resources/invoices/line.ts">InvoiceLine</a></code>
- <code><a href="./src/resources/invoices/line.ts">VatRate</a></code>
- <code><a href="./src/resources/invoices/line.ts">LineUpdateResponse</a></code>
- <code><a href="./src/resources/invoices/line.ts">LineAddResponse</a></code>

Methods:

- <code title="patch /invoice/{uid}/line/{lineUuid}">client.invoices.line.<a href="./src/resources/invoices/line.ts">update</a>(lineUuid, { ...params }) -> LineUpdateResponse</code>
- <code title="delete /invoice/{uid}/line/{lineUuid}">client.invoices.line.<a href="./src/resources/invoices/line.ts">delete</a>(lineUuid, { ...params }) -> Invoice</code>
- <code title="post /invoice/{uid}/line">client.invoices.line.<a href="./src/resources/invoices/line.ts">add</a>(uid, { ...params }) -> LineAddResponse</code>

# Quotes

Types:

- <code><a href="./src/resources/quotes/quotes.ts">QuoteCreateResponse</a></code>
- <code><a href="./src/resources/quotes/quotes.ts">QuoteRetrieveResponse</a></code>
- <code><a href="./src/resources/quotes/quotes.ts">QuoteUpdateResponse</a></code>
- <code><a href="./src/resources/quotes/quotes.ts">QuoteListResponse</a></code>
- <code><a href="./src/resources/quotes/quotes.ts">QuoteDeleteResponse</a></code>
- <code><a href="./src/resources/quotes/quotes.ts">QuoteCreateAdvanceInvoiceResponse</a></code>
- <code><a href="./src/resources/quotes/quotes.ts">QuoteCreateInvoiceResponse</a></code>
- <code><a href="./src/resources/quotes/quotes.ts">QuoteCreateInvoiceFromQuoteResponse</a></code>
- <code><a href="./src/resources/quotes/quotes.ts">QuoteCreatePackageResponse</a></code>
- <code><a href="./src/resources/quotes/quotes.ts">QuoteCreateProformaInvoiceResponse</a></code>
- <code><a href="./src/resources/quotes/quotes.ts">QuoteCreatePurchaseOrderResponse</a></code>
- <code><a href="./src/resources/quotes/quotes.ts">QuoteGenerateHTMLResponse</a></code>
- <code><a href="./src/resources/quotes/quotes.ts">QuoteGetLogsResponse</a></code>
- <code><a href="./src/resources/quotes/quotes.ts">QuoteGetStatsResponse</a></code>

Methods:

- <code title="post /quote">client.quotes.<a href="./src/resources/quotes/quotes.ts">create</a>({ ...params }) -> QuoteCreateResponse</code>
- <code title="get /quote/{uid}">client.quotes.<a href="./src/resources/quotes/quotes.ts">retrieve</a>(uid, { ...params }) -> QuoteRetrieveResponse</code>
- <code title="patch /quote/{uid}">client.quotes.<a href="./src/resources/quotes/quotes.ts">update</a>(uid, { ...params }) -> QuoteUpdateResponse</code>
- <code title="get /quotes">client.quotes.<a href="./src/resources/quotes/quotes.ts">list</a>({ ...params }) -> QuoteListResponse</code>
- <code title="delete /quote/{uid}">client.quotes.<a href="./src/resources/quotes/quotes.ts">delete</a>(uid) -> QuoteDeleteResponse</code>
- <code title="post /quote/{uid}/advance">client.quotes.<a href="./src/resources/quotes/quotes.ts">createAdvanceInvoice</a>(uid, { ...params }) -> QuoteCreateAdvanceInvoiceResponse</code>
- <code title="post /quote/{uid}/delivery-receipt">client.quotes.<a href="./src/resources/quotes/quotes.ts">createDeliveryReceipt</a>(uid) -> void</code>
- <code title="post /quote/{uid}/invoice">client.quotes.<a href="./src/resources/quotes/quotes.ts">createInvoice</a>(uid) -> QuoteCreateInvoiceResponse</code>
- <code title="post /quote/{uid}/sold">client.quotes.<a href="./src/resources/quotes/quotes.ts">createInvoiceFromQuote</a>(uid) -> QuoteCreateInvoiceFromQuoteResponse</code>
- <code title="post /quotes/package">client.quotes.<a href="./src/resources/quotes/quotes.ts">createPackage</a>({ ...params }) -> QuoteCreatePackageResponse</code>
- <code title="post /quote/{uid}/proforma">client.quotes.<a href="./src/resources/quotes/quotes.ts">createProformaInvoice</a>(uid) -> QuoteCreateProformaInvoiceResponse</code>
- <code title="post /quote/{uid}/bdc">client.quotes.<a href="./src/resources/quotes/quotes.ts">createPurchaseOrder</a>(uid) -> QuoteCreatePurchaseOrderResponse</code>
- <code title="get /quote/{uid}/html">client.quotes.<a href="./src/resources/quotes/quotes.ts">generateHTML</a>(uid) -> string</code>
- <code title="get /quote/{uid}/pdf">client.quotes.<a href="./src/resources/quotes/quotes.ts">generatePdf</a>(uid) -> Response</code>
- <code title="get /quote/{uid}/pdf-chromium">client.quotes.<a href="./src/resources/quotes/quotes.ts">generatePdfChromium</a>(uid) -> Response</code>
- <code title="get /quotes/logs">client.quotes.<a href="./src/resources/quotes/quotes.ts">getLogs</a>({ ...params }) -> QuoteGetLogsResponse</code>
- <code title="get /quotes/stats">client.quotes.<a href="./src/resources/quotes/quotes.ts">getStats</a>({ ...params }) -> QuoteGetStatsResponse</code>
- <code title="get /quote/{uid}/logs">client.quotes.<a href="./src/resources/quotes/quotes.ts">retrieveLogs</a>(uid) -> void</code>

## Line

Types:

- <code><a href="./src/resources/quotes/line.ts">Quote</a></code>
- <code><a href="./src/resources/quotes/line.ts">QuoteLine</a></code>
- <code><a href="./src/resources/quotes/line.ts">LineUpdateResponse</a></code>
- <code><a href="./src/resources/quotes/line.ts">LineAddResponse</a></code>

Methods:

- <code title="patch /quote/{uid}/line/{lineUuid}">client.quotes.line.<a href="./src/resources/quotes/line.ts">update</a>(lineUuid, { ...params }) -> LineUpdateResponse</code>
- <code title="delete /quote/{uid}/line/{lineUuid}">client.quotes.line.<a href="./src/resources/quotes/line.ts">delete</a>(lineUuid, { ...params }) -> Quote</code>
- <code title="post /quote/{uid}/line">client.quotes.line.<a href="./src/resources/quotes/line.ts">add</a>(uid, { ...params }) -> LineAddResponse</code>

# PaymentMethods

Types:

- <code><a href="./src/resources/payment-methods.ts">PaymentMethod</a></code>
- <code><a href="./src/resources/payment-methods.ts">PaymentMethodCreateResponse</a></code>
- <code><a href="./src/resources/payment-methods.ts">PaymentMethodRetrieveResponse</a></code>
- <code><a href="./src/resources/payment-methods.ts">PaymentMethodUpdateResponse</a></code>
- <code><a href="./src/resources/payment-methods.ts">PaymentMethodListResponse</a></code>
- <code><a href="./src/resources/payment-methods.ts">PaymentMethodDeleteResponse</a></code>

Methods:

- <code title="post /payment-method">client.paymentMethods.<a href="./src/resources/payment-methods.ts">create</a>({ ...params }) -> PaymentMethodCreateResponse</code>
- <code title="get /payment-method/{uid}">client.paymentMethods.<a href="./src/resources/payment-methods.ts">retrieve</a>(uid) -> PaymentMethodRetrieveResponse</code>
- <code title="patch /payment-method/{uid}">client.paymentMethods.<a href="./src/resources/payment-methods.ts">update</a>(uid, { ...params }) -> PaymentMethodUpdateResponse</code>
- <code title="get /payment-methods">client.paymentMethods.<a href="./src/resources/payment-methods.ts">list</a>({ ...params }) -> PaymentMethodListResponse</code>
- <code title="delete /payment-method/{uid}">client.paymentMethods.<a href="./src/resources/payment-methods.ts">delete</a>(uid) -> PaymentMethodDeleteResponse</code>

# DeliveryReceipts

Types:

- <code><a href="./src/resources/delivery-receipts.ts">Receipt</a></code>
- <code><a href="./src/resources/delivery-receipts.ts">DeliveryReceiptCreateResponse</a></code>
- <code><a href="./src/resources/delivery-receipts.ts">DeliveryReceiptRetrieveResponse</a></code>
- <code><a href="./src/resources/delivery-receipts.ts">DeliveryReceiptUpdateResponse</a></code>
- <code><a href="./src/resources/delivery-receipts.ts">DeliveryReceiptListResponse</a></code>
- <code><a href="./src/resources/delivery-receipts.ts">DeliveryReceiptDeleteResponse</a></code>
- <code><a href="./src/resources/delivery-receipts.ts">DeliveryReceiptCreateInvoiceResponse</a></code>
- <code><a href="./src/resources/delivery-receipts.ts">DeliveryReceiptGenerateHTMLResponse</a></code>

Methods:

- <code title="post /delivery-receipt">client.deliveryReceipts.<a href="./src/resources/delivery-receipts.ts">create</a>({ ...params }) -> DeliveryReceiptCreateResponse</code>
- <code title="get /delivery-receipt/{uid}">client.deliveryReceipts.<a href="./src/resources/delivery-receipts.ts">retrieve</a>(uid, { ...params }) -> DeliveryReceiptRetrieveResponse</code>
- <code title="patch /delivery-receipt/{uid}">client.deliveryReceipts.<a href="./src/resources/delivery-receipts.ts">update</a>(uid, { ...params }) -> DeliveryReceiptUpdateResponse</code>
- <code title="get /delivery-receipts">client.deliveryReceipts.<a href="./src/resources/delivery-receipts.ts">list</a>({ ...params }) -> DeliveryReceiptListResponse</code>
- <code title="delete /delivery-receipt/{uid}">client.deliveryReceipts.<a href="./src/resources/delivery-receipts.ts">delete</a>(uid) -> DeliveryReceiptDeleteResponse</code>
- <code title="post /delivery-receipt/{uid}/invoice">client.deliveryReceipts.<a href="./src/resources/delivery-receipts.ts">createInvoice</a>(uid) -> DeliveryReceiptCreateInvoiceResponse</code>
- <code title="get /delivery-receipt/{uid}/html">client.deliveryReceipts.<a href="./src/resources/delivery-receipts.ts">generateHTML</a>(uid) -> DeliveryReceiptGenerateHTMLResponse</code>
- <code title="get /delivery-receipt/{uid}/pdf">client.deliveryReceipts.<a href="./src/resources/delivery-receipts.ts">generatePdf</a>(uid, { ...params }) -> Response</code>

# AbsenceTypes

Types:

- <code><a href="./src/resources/absence-types.ts">AbsenceType</a></code>
- <code><a href="./src/resources/absence-types.ts">AbsenceTypeCreateResponse</a></code>
- <code><a href="./src/resources/absence-types.ts">AbsenceTypeRetrieveResponse</a></code>
- <code><a href="./src/resources/absence-types.ts">AbsenceTypeUpdateResponse</a></code>
- <code><a href="./src/resources/absence-types.ts">AbsenceTypeListResponse</a></code>
- <code><a href="./src/resources/absence-types.ts">AbsenceTypeDeleteResponse</a></code>

Methods:

- <code title="post /absence-type">client.absenceTypes.<a href="./src/resources/absence-types.ts">create</a>({ ...params }) -> AbsenceTypeCreateResponse</code>
- <code title="get /absence-type/{uid}">client.absenceTypes.<a href="./src/resources/absence-types.ts">retrieve</a>(uid) -> AbsenceTypeRetrieveResponse</code>
- <code title="patch /absence-type/{uid}">client.absenceTypes.<a href="./src/resources/absence-types.ts">update</a>(uid, { ...params }) -> AbsenceTypeUpdateResponse</code>
- <code title="get /absence-types">client.absenceTypes.<a href="./src/resources/absence-types.ts">list</a>({ ...params }) -> AbsenceTypeListResponse</code>
- <code title="delete /absence-type/{uid}">client.absenceTypes.<a href="./src/resources/absence-types.ts">delete</a>(uid) -> AbsenceTypeDeleteResponse</code>

# Absences

Types:

- <code><a href="./src/resources/absences.ts">Absence</a></code>
- <code><a href="./src/resources/absences.ts">AbsenceCreateResponse</a></code>
- <code><a href="./src/resources/absences.ts">AbsenceRetrieveResponse</a></code>
- <code><a href="./src/resources/absences.ts">AbsenceUpdateResponse</a></code>
- <code><a href="./src/resources/absences.ts">AbsenceListResponse</a></code>
- <code><a href="./src/resources/absences.ts">AbsenceDeleteResponse</a></code>

Methods:

- <code title="post /absence">client.absences.<a href="./src/resources/absences.ts">create</a>({ ...params }) -> AbsenceCreateResponse</code>
- <code title="get /absence/{uid}">client.absences.<a href="./src/resources/absences.ts">retrieve</a>(uid, { ...params }) -> AbsenceRetrieveResponse</code>
- <code title="patch /absence/{uid}">client.absences.<a href="./src/resources/absences.ts">update</a>(uid, { ...params }) -> AbsenceUpdateResponse</code>
- <code title="get /absences">client.absences.<a href="./src/resources/absences.ts">list</a>({ ...params }) -> AbsenceListResponse</code>
- <code title="delete /absence/{uid}">client.absences.<a href="./src/resources/absences.ts">delete</a>(uid) -> AbsenceDeleteResponse</code>

# Companies

Types:

- <code><a href="./src/resources/companies/companies.ts">Company</a></code>
- <code><a href="./src/resources/companies/companies.ts">CompanyCreateResponse</a></code>
- <code><a href="./src/resources/companies/companies.ts">CompanyRetrieveResponse</a></code>
- <code><a href="./src/resources/companies/companies.ts">CompanyUpdateResponse</a></code>
- <code><a href="./src/resources/companies/companies.ts">CompanyListResponse</a></code>
- <code><a href="./src/resources/companies/companies.ts">CompanyConfirmDomainResponse</a></code>
- <code><a href="./src/resources/companies/companies.ts">CompanyListPositionsResponse</a></code>
- <code><a href="./src/resources/companies/companies.ts">CompanyRetrieveByIDResponse</a></code>
- <code><a href="./src/resources/companies/companies.ts">CompanyRetrieveCgvResponse</a></code>
- <code><a href="./src/resources/companies/companies.ts">CompanyRetrieveContainerStatsResponse</a></code>
- <code><a href="./src/resources/companies/companies.ts">CompanyRetrieveExtraInfosResponse</a></code>
- <code><a href="./src/resources/companies/companies.ts">CompanySearchBySireneResponse</a></code>
- <code><a href="./src/resources/companies/companies.ts">CompanySendDomainConfirmationResponse</a></code>

Methods:

- <code title="post /company">client.companies.<a href="./src/resources/companies/companies.ts">create</a>({ ...params }) -> CompanyCreateResponse</code>
- <code title="get /company">client.companies.<a href="./src/resources/companies/companies.ts">retrieve</a>() -> CompanyRetrieveResponse</code>
- <code title="patch /company/{uid}">client.companies.<a href="./src/resources/companies/companies.ts">update</a>(uid) -> CompanyUpdateResponse</code>
- <code title="get /companies">client.companies.<a href="./src/resources/companies/companies.ts">list</a>({ ...params }) -> CompanyListResponse</code>
- <code title="delete /company/{uid}">client.companies.<a href="./src/resources/companies/companies.ts">delete</a>(uid) -> void</code>
- <code title="patch /company/{uid}/domain-confirm">client.companies.<a href="./src/resources/companies/companies.ts">confirmDomain</a>(uid) -> CompanyConfirmDomainResponse</code>
- <code title="get /company/{uid}/positions">client.companies.<a href="./src/resources/companies/companies.ts">listPositions</a>(uid) -> CompanyListPositionsResponse</code>
- <code title="get /company/{uid}">client.companies.<a href="./src/resources/companies/companies.ts">retrieveByID</a>(uid) -> CompanyRetrieveByIDResponse</code>
- <code title="get /company/{uid}/cgv">client.companies.<a href="./src/resources/companies/companies.ts">retrieveCgv</a>(uid) -> CompanyRetrieveCgvResponse</code>
- <code title="get /company/container-stats">client.companies.<a href="./src/resources/companies/companies.ts">retrieveContainerStats</a>() -> CompanyRetrieveContainerStatsResponse</code>
- <code title="get /company/{uid}/extra-infos">client.companies.<a href="./src/resources/companies/companies.ts">retrieveExtraInfos</a>(uid) -> CompanyRetrieveExtraInfosResponse</code>
- <code title="get /companies/sirene">client.companies.<a href="./src/resources/companies/companies.ts">searchBySirene</a>({ ...params }) -> CompanySearchBySireneResponse</code>
- <code title="patch /company/{uid}/send-domain-confirm">client.companies.<a href="./src/resources/companies/companies.ts">sendDomainConfirmation</a>(uid) -> CompanySendDomainConfirmationResponse</code>

## AppInfos

Types:

- <code><a href="./src/resources/companies/app-infos.ts">CompanyApp</a></code>

Methods:

- <code title="get /company/app-infos">client.companies.appInfos.<a href="./src/resources/companies/app-infos.ts">retrieve</a>() -> CompanyApp</code>
- <code title="get /company/{uid}/app-infos">client.companies.appInfos.<a href="./src/resources/companies/app-infos.ts">retrieveByID</a>(uid) -> CompanyApp</code>

## Position

Types:

- <code><a href="./src/resources/companies/position.ts">Position</a></code>

Methods:

- <code title="post /company/{uid}/position">client.companies.position.<a href="./src/resources/companies/position.ts">create</a>(uid, { ...params }) -> Position</code>
- <code title="patch /company/{company}/position/{uid}">client.companies.position.<a href="./src/resources/companies/position.ts">update</a>(uid, { ...params }) -> Position</code>

# Clients

Types:

- <code><a href="./src/resources/clients.ts">Client</a></code>
- <code><a href="./src/resources/clients.ts">ClientInput</a></code>
- <code><a href="./src/resources/clients.ts">ClientCreateResponse</a></code>
- <code><a href="./src/resources/clients.ts">ClientRetrieveResponse</a></code>
- <code><a href="./src/resources/clients.ts">ClientUpdateResponse</a></code>
- <code><a href="./src/resources/clients.ts">ClientListResponse</a></code>
- <code><a href="./src/resources/clients.ts">ClientDeleteResponse</a></code>
- <code><a href="./src/resources/clients.ts">ClientImportFromCsvResponse</a></code>
- <code><a href="./src/resources/clients.ts">ClientMergeResponse</a></code>

Methods:

- <code title="post /client">client.clients.<a href="./src/resources/clients.ts">create</a>({ ...params }) -> ClientCreateResponse</code>
- <code title="get /client/{uid}">client.clients.<a href="./src/resources/clients.ts">retrieve</a>(uid, { ...params }) -> ClientRetrieveResponse</code>
- <code title="patch /client/{uid}">client.clients.<a href="./src/resources/clients.ts">update</a>(uid, { ...params }) -> ClientUpdateResponse</code>
- <code title="get /clients">client.clients.<a href="./src/resources/clients.ts">list</a>({ ...params }) -> ClientListResponse</code>
- <code title="delete /client/{uid}">client.clients.<a href="./src/resources/clients.ts">delete</a>(uid) -> ClientDeleteResponse</code>
- <code title="post /clients/csv">client.clients.<a href="./src/resources/clients.ts">importFromCsv</a>({ ...params }) -> ClientImportFromCsvResponse</code>
- <code title="post /clients/merge">client.clients.<a href="./src/resources/clients.ts">merge</a>({ ...params }) -> ClientMergeResponse</code>

# Products

Types:

- <code><a href="./src/resources/products/products.ts">Product</a></code>
- <code><a href="./src/resources/products/products.ts">ProductInput</a></code>
- <code><a href="./src/resources/products/products.ts">ProductCreateResponse</a></code>
- <code><a href="./src/resources/products/products.ts">ProductRetrieveResponse</a></code>
- <code><a href="./src/resources/products/products.ts">ProductUpdateResponse</a></code>
- <code><a href="./src/resources/products/products.ts">ProductListResponse</a></code>
- <code><a href="./src/resources/products/products.ts">ProductDeleteResponse</a></code>
- <code><a href="./src/resources/products/products.ts">ProductImportFromCsvResponse</a></code>

Methods:

- <code title="post /product">client.products.<a href="./src/resources/products/products.ts">create</a>({ ...params }) -> ProductCreateResponse</code>
- <code title="get /product/{uid}">client.products.<a href="./src/resources/products/products.ts">retrieve</a>(uid, { ...params }) -> ProductRetrieveResponse</code>
- <code title="patch /product/{uid}">client.products.<a href="./src/resources/products/products.ts">update</a>(uid, { ...params }) -> ProductUpdateResponse</code>
- <code title="get /products">client.products.<a href="./src/resources/products/products.ts">list</a>({ ...params }) -> ProductListResponse</code>
- <code title="delete /product/{uid}">client.products.<a href="./src/resources/products/products.ts">delete</a>(uid) -> ProductDeleteResponse</code>
- <code title="post /products/csv">client.products.<a href="./src/resources/products/products.ts">importFromCsv</a>({ ...params }) -> ProductImportFromCsvResponse</code>
- <code title="get /product/{uid}/variants">client.products.<a href="./src/resources/products/products.ts">listVariants</a>(uid) -> void</code>

## Variant

Types:

- <code><a href="./src/resources/products/variant.ts">ProductVariantInput</a></code>

Methods:

- <code title="post /product/{uid}/variant">client.products.variant.<a href="./src/resources/products/variant.ts">create</a>(uid, { ...params }) -> void</code>
- <code title="get /product/{productId}/variant/{uid}">client.products.variant.<a href="./src/resources/products/variant.ts">retrieve</a>(uid, { ...params }) -> void</code>
- <code title="patch /product/{productId}/variant/{uid}">client.products.variant.<a href="./src/resources/products/variant.ts">update</a>(uid, { ...params }) -> void</code>
- <code title="delete /product/{productId}/variant/{uid}">client.products.variant.<a href="./src/resources/products/variant.ts">delete</a>(uid, { ...params }) -> void</code>

# ProductVariants

Methods:

- <code title="get /product-variants">client.productVariants.<a href="./src/resources/product-variants.ts">list</a>() -> void</code>

# ProductCategories

Types:

- <code><a href="./src/resources/product-categories.ts">ProductCategory</a></code>
- <code><a href="./src/resources/product-categories.ts">ProductCategoryListResponse</a></code>

Methods:

- <code title="post /product-category">client.productCategories.<a href="./src/resources/product-categories.ts">create</a>({ ...params }) -> ProductCategory</code>
- <code title="get /product-category/{uid}">client.productCategories.<a href="./src/resources/product-categories.ts">retrieve</a>(uid) -> ProductCategory</code>
- <code title="patch /product-category/{uid}">client.productCategories.<a href="./src/resources/product-categories.ts">update</a>(uid, { ...params }) -> void</code>
- <code title="get /product-categories">client.productCategories.<a href="./src/resources/product-categories.ts">list</a>() -> ProductCategoryListResponse</code>
- <code title="delete /product-category/{uid}">client.productCategories.<a href="./src/resources/product-categories.ts">delete</a>(uid) -> void</code>

# Purchases

Types:

- <code><a href="./src/resources/purchases.ts">Purchase</a></code>
- <code><a href="./src/resources/purchases.ts">PurchaseInput</a></code>
- <code><a href="./src/resources/purchases.ts">PurchaseCreateResponse</a></code>
- <code><a href="./src/resources/purchases.ts">PurchaseRetrieveResponse</a></code>
- <code><a href="./src/resources/purchases.ts">PurchaseUpdateResponse</a></code>
- <code><a href="./src/resources/purchases.ts">PurchaseListResponse</a></code>
- <code><a href="./src/resources/purchases.ts">PurchaseDeleteResponse</a></code>
- <code><a href="./src/resources/purchases.ts">PurchaseCreateCreditResponse</a></code>

Methods:

- <code title="post /purchase">client.purchases.<a href="./src/resources/purchases.ts">create</a>({ ...params }) -> PurchaseCreateResponse</code>
- <code title="get /purchase/{uid}">client.purchases.<a href="./src/resources/purchases.ts">retrieve</a>(uid, { ...params }) -> PurchaseRetrieveResponse</code>
- <code title="patch /purchase/{uid}">client.purchases.<a href="./src/resources/purchases.ts">update</a>(uid, { ...params }) -> PurchaseUpdateResponse</code>
- <code title="get /purchases">client.purchases.<a href="./src/resources/purchases.ts">list</a>({ ...params }) -> PurchaseListResponse</code>
- <code title="delete /purchase/{uid}">client.purchases.<a href="./src/resources/purchases.ts">delete</a>(uid) -> PurchaseDeleteResponse</code>
- <code title="post /purchase/{uid}/credit">client.purchases.<a href="./src/resources/purchases.ts">createCredit</a>(uid) -> PurchaseCreateCreditResponse</code>
- <code title="get /purchases/stats">client.purchases.<a href="./src/resources/purchases.ts">getStats</a>() -> void</code>

# PurchaseCategories

Types:

- <code><a href="./src/resources/purchase-categories.ts">PurchaseCategoryCreateResponse</a></code>
- <code><a href="./src/resources/purchase-categories.ts">PurchaseCategoryRetrieveResponse</a></code>
- <code><a href="./src/resources/purchase-categories.ts">PurchaseCategoryListResponse</a></code>

Methods:

- <code title="post /purchase-category">client.purchaseCategories.<a href="./src/resources/purchase-categories.ts">create</a>({ ...params }) -> unknown</code>
- <code title="get /purchase-category/{uid}">client.purchaseCategories.<a href="./src/resources/purchase-categories.ts">retrieve</a>(uid) -> unknown</code>
- <code title="patch /purchase-category/{uid}">client.purchaseCategories.<a href="./src/resources/purchase-categories.ts">update</a>(uid, { ...params }) -> void</code>
- <code title="get /purchase-categories">client.purchaseCategories.<a href="./src/resources/purchase-categories.ts">list</a>() -> PurchaseCategoryListResponse</code>
- <code title="delete /purchase-category/{uid}">client.purchaseCategories.<a href="./src/resources/purchase-categories.ts">delete</a>(uid) -> void</code>

# Users

Types:

- <code><a href="./src/resources/users.ts">User</a></code>
- <code><a href="./src/resources/users.ts">UserCreateResponse</a></code>
- <code><a href="./src/resources/users.ts">UserRetrieveResponse</a></code>
- <code><a href="./src/resources/users.ts">UserUpdateResponse</a></code>
- <code><a href="./src/resources/users.ts">UserListResponse</a></code>
- <code><a href="./src/resources/users.ts">UserListInvitationsResponse</a></code>
- <code><a href="./src/resources/users.ts">UserListNotificationsResponse</a></code>
- <code><a href="./src/resources/users.ts">UserListPositionsResponse</a></code>
- <code><a href="./src/resources/users.ts">UserRetrieveByUidResponse</a></code>

Methods:

- <code title="post /user">client.users.<a href="./src/resources/users.ts">create</a>({ ...params }) -> UserCreateResponse</code>
- <code title="get /user">client.users.<a href="./src/resources/users.ts">retrieve</a>() -> UserRetrieveResponse</code>
- <code title="patch /user/{uid}">client.users.<a href="./src/resources/users.ts">update</a>(uid, { ...params }) -> UserUpdateResponse</code>
- <code title="get /users">client.users.<a href="./src/resources/users.ts">list</a>({ ...params }) -> UserListResponse</code>
- <code title="delete /user">client.users.<a href="./src/resources/users.ts">delete</a>({ ...params }) -> void</code>
- <code title="delete /user/{uid}">client.users.<a href="./src/resources/users.ts">deactivate</a>(uid) -> void</code>
- <code title="get /user/{uid}/invitations">client.users.<a href="./src/resources/users.ts">listInvitations</a>(uid) -> UserListInvitationsResponse</code>
- <code title="get /user/{uid}/notifications">client.users.<a href="./src/resources/users.ts">listNotifications</a>(uid) -> UserListNotificationsResponse</code>
- <code title="get /user/{uid}/positions">client.users.<a href="./src/resources/users.ts">listPositions</a>(uid) -> UserListPositionsResponse</code>
- <code title="get /user/{uid}">client.users.<a href="./src/resources/users.ts">retrieveByUid</a>(uid) -> UserRetrieveByUidResponse</code>
