// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import analyze_invoice_file from './invoice-file/analyze-invoice-file';
import process_callback_paybox_paiement_done from './paybox-paiement-done/process-callback-paybox-paiement-done';
import retrieve_status_paybox_paiement_done from './paybox-paiement-done/retrieve-status-paybox-paiement-done';
import update_checkout_paybox_session from './paybox/checkout/session/update-checkout-paybox-session';
import list_checkout_paybox_session from './paybox/checkout/session/list-checkout-paybox-session';
import create_checkout_stripe_session from './stripe/checkout/session/create-checkout-stripe-session';
import retrieve_checkout_stripe_session from './stripe/checkout/session/retrieve-checkout-stripe-session';
import receive_stripe_webhook from './stripe/webhook/receive-stripe-webhook';
import retrieve_payment_infos_order from './order/retrieve-payment-infos-order';
import retrieve_payments_statistics from './statistics/retrieve-payments-statistics';
import export_absences_export from './export/export-absences-export';
import list_company_mails from './company-mails/list-company-mails';
import list_product_units from './product-units/list-product-units';
import analyze_purchase_file from './purchase-file/analyze-purchase-file';
import create_invoices from './invoices/create-invoices';
import retrieve_invoices from './invoices/retrieve-invoices';
import update_invoices from './invoices/update-invoices';
import list_invoices from './invoices/list-invoices';
import delete_invoices from './invoices/delete-invoices';
import create_credit_invoices from './invoices/create-credit-invoices';
import create_delivery_receipt_invoices from './invoices/create-delivery-receipt-invoices';
import create_package_invoices from './invoices/create-package-invoices';
import get_logs_invoices from './invoices/get-logs-invoices';
import get_stats_invoices from './invoices/get-stats-invoices';
import get_turnover_invoices from './invoices/get-turnover-invoices';
import list_payments_invoices from './invoices/list-payments-invoices';
import list_waiting_payments_invoices from './invoices/list-waiting-payments-invoices';
import record_payment_invoices from './invoices/record-payment-invoices';
import retrieve_logs_invoices from './invoices/retrieve-logs-invoices';
import send_email_invoices from './invoices/send-email-invoices';
import update_invoices_line from './invoices/line/update-invoices-line';
import delete_invoices_line from './invoices/line/delete-invoices-line';
import add_invoices_line from './invoices/line/add-invoices-line';
import create_quotes from './quotes/create-quotes';
import retrieve_quotes from './quotes/retrieve-quotes';
import update_quotes from './quotes/update-quotes';
import list_quotes from './quotes/list-quotes';
import delete_quotes from './quotes/delete-quotes';
import create_advance_invoice_quotes from './quotes/create-advance-invoice-quotes';
import create_delivery_receipt_quotes from './quotes/create-delivery-receipt-quotes';
import create_invoice_quotes from './quotes/create-invoice-quotes';
import create_invoice_from_quote_quotes from './quotes/create-invoice-from-quote-quotes';
import create_package_quotes from './quotes/create-package-quotes';
import create_proforma_invoice_quotes from './quotes/create-proforma-invoice-quotes';
import create_purchase_order_quotes from './quotes/create-purchase-order-quotes';
import generate_html_quotes from './quotes/generate-html-quotes';
import generate_pdf_quotes from './quotes/generate-pdf-quotes';
import generate_pdf_chromium_quotes from './quotes/generate-pdf-chromium-quotes';
import get_logs_quotes from './quotes/get-logs-quotes';
import get_stats_quotes from './quotes/get-stats-quotes';
import retrieve_logs_quotes from './quotes/retrieve-logs-quotes';
import update_quotes_line from './quotes/line/update-quotes-line';
import delete_quotes_line from './quotes/line/delete-quotes-line';
import add_quotes_line from './quotes/line/add-quotes-line';
import create_payment_methods from './payment-methods/create-payment-methods';
import retrieve_payment_methods from './payment-methods/retrieve-payment-methods';
import update_payment_methods from './payment-methods/update-payment-methods';
import list_payment_methods from './payment-methods/list-payment-methods';
import delete_payment_methods from './payment-methods/delete-payment-methods';
import create_delivery_receipts from './delivery-receipts/create-delivery-receipts';
import retrieve_delivery_receipts from './delivery-receipts/retrieve-delivery-receipts';
import update_delivery_receipts from './delivery-receipts/update-delivery-receipts';
import list_delivery_receipts from './delivery-receipts/list-delivery-receipts';
import delete_delivery_receipts from './delivery-receipts/delete-delivery-receipts';
import create_invoice_delivery_receipts from './delivery-receipts/create-invoice-delivery-receipts';
import generate_html_delivery_receipts from './delivery-receipts/generate-html-delivery-receipts';
import generate_pdf_delivery_receipts from './delivery-receipts/generate-pdf-delivery-receipts';
import create_absence_types from './absence-types/create-absence-types';
import retrieve_absence_types from './absence-types/retrieve-absence-types';
import update_absence_types from './absence-types/update-absence-types';
import list_absence_types from './absence-types/list-absence-types';
import delete_absence_types from './absence-types/delete-absence-types';
import create_absences from './absences/create-absences';
import retrieve_absences from './absences/retrieve-absences';
import update_absences from './absences/update-absences';
import list_absences from './absences/list-absences';
import delete_absences from './absences/delete-absences';
import create_companies from './companies/create-companies';
import retrieve_companies from './companies/retrieve-companies';
import update_companies from './companies/update-companies';
import list_companies from './companies/list-companies';
import delete_companies from './companies/delete-companies';
import confirm_domain_companies from './companies/confirm-domain-companies';
import list_positions_companies from './companies/list-positions-companies';
import retrieve_by_id_companies from './companies/retrieve-by-id-companies';
import retrieve_cgv_companies from './companies/retrieve-cgv-companies';
import retrieve_container_stats_companies from './companies/retrieve-container-stats-companies';
import retrieve_extra_infos_companies from './companies/retrieve-extra-infos-companies';
import search_by_sirene_companies from './companies/search-by-sirene-companies';
import send_domain_confirmation_companies from './companies/send-domain-confirmation-companies';
import retrieve_companies_app_infos from './companies/app-infos/retrieve-companies-app-infos';
import retrieve_by_id_companies_app_infos from './companies/app-infos/retrieve-by-id-companies-app-infos';
import create_companies_position from './companies/position/create-companies-position';
import update_companies_position from './companies/position/update-companies-position';
import create_clients from './clients/create-clients';
import retrieve_clients from './clients/retrieve-clients';
import update_clients from './clients/update-clients';
import list_clients from './clients/list-clients';
import delete_clients from './clients/delete-clients';
import import_from_csv_clients from './clients/import-from-csv-clients';
import merge_clients from './clients/merge-clients';
import create_products from './products/create-products';
import retrieve_products from './products/retrieve-products';
import update_products from './products/update-products';
import list_products from './products/list-products';
import delete_products from './products/delete-products';
import import_from_csv_products from './products/import-from-csv-products';
import list_variants_products from './products/list-variants-products';
import create_products_variant from './products/variant/create-products-variant';
import retrieve_products_variant from './products/variant/retrieve-products-variant';
import update_products_variant from './products/variant/update-products-variant';
import list_products_variant from './products/variant/list-products-variant';
import delete_products_variant from './products/variant/delete-products-variant';
import create_product_categories from './product-categories/create-product-categories';
import retrieve_product_categories from './product-categories/retrieve-product-categories';
import update_product_categories from './product-categories/update-product-categories';
import list_product_categories from './product-categories/list-product-categories';
import delete_product_categories from './product-categories/delete-product-categories';
import create_purchases from './purchases/create-purchases';
import retrieve_purchases from './purchases/retrieve-purchases';
import update_purchases from './purchases/update-purchases';
import list_purchases from './purchases/list-purchases';
import delete_purchases from './purchases/delete-purchases';
import create_credit_purchases from './purchases/create-credit-purchases';
import get_stats_purchases from './purchases/get-stats-purchases';
import create_purchase_categories from './purchase-categories/create-purchase-categories';
import retrieve_purchase_categories from './purchase-categories/retrieve-purchase-categories';
import update_purchase_categories from './purchase-categories/update-purchase-categories';
import list_purchase_categories from './purchase-categories/list-purchase-categories';
import delete_purchase_categories from './purchase-categories/delete-purchase-categories';
import create_users from './users/create-users';
import retrieve_users from './users/retrieve-users';
import update_users from './users/update-users';
import list_users from './users/list-users';
import delete_users from './users/delete-users';
import deactivate_users from './users/deactivate-users';
import list_invitations_users from './users/list-invitations-users';
import list_notifications_users from './users/list-notifications-users';
import list_positions_users from './users/list-positions-users';
import retrieve_by_uid_users from './users/retrieve-by-uid-users';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(analyze_invoice_file);
addEndpoint(process_callback_paybox_paiement_done);
addEndpoint(retrieve_status_paybox_paiement_done);
addEndpoint(update_checkout_paybox_session);
addEndpoint(list_checkout_paybox_session);
addEndpoint(create_checkout_stripe_session);
addEndpoint(retrieve_checkout_stripe_session);
addEndpoint(receive_stripe_webhook);
addEndpoint(retrieve_payment_infos_order);
addEndpoint(retrieve_payments_statistics);
addEndpoint(export_absences_export);
addEndpoint(list_company_mails);
addEndpoint(list_product_units);
addEndpoint(analyze_purchase_file);
addEndpoint(create_invoices);
addEndpoint(retrieve_invoices);
addEndpoint(update_invoices);
addEndpoint(list_invoices);
addEndpoint(delete_invoices);
addEndpoint(create_credit_invoices);
addEndpoint(create_delivery_receipt_invoices);
addEndpoint(create_package_invoices);
addEndpoint(get_logs_invoices);
addEndpoint(get_stats_invoices);
addEndpoint(get_turnover_invoices);
addEndpoint(list_payments_invoices);
addEndpoint(list_waiting_payments_invoices);
addEndpoint(record_payment_invoices);
addEndpoint(retrieve_logs_invoices);
addEndpoint(send_email_invoices);
addEndpoint(update_invoices_line);
addEndpoint(delete_invoices_line);
addEndpoint(add_invoices_line);
addEndpoint(create_quotes);
addEndpoint(retrieve_quotes);
addEndpoint(update_quotes);
addEndpoint(list_quotes);
addEndpoint(delete_quotes);
addEndpoint(create_advance_invoice_quotes);
addEndpoint(create_delivery_receipt_quotes);
addEndpoint(create_invoice_quotes);
addEndpoint(create_invoice_from_quote_quotes);
addEndpoint(create_package_quotes);
addEndpoint(create_proforma_invoice_quotes);
addEndpoint(create_purchase_order_quotes);
addEndpoint(generate_html_quotes);
addEndpoint(generate_pdf_quotes);
addEndpoint(generate_pdf_chromium_quotes);
addEndpoint(get_logs_quotes);
addEndpoint(get_stats_quotes);
addEndpoint(retrieve_logs_quotes);
addEndpoint(update_quotes_line);
addEndpoint(delete_quotes_line);
addEndpoint(add_quotes_line);
addEndpoint(create_payment_methods);
addEndpoint(retrieve_payment_methods);
addEndpoint(update_payment_methods);
addEndpoint(list_payment_methods);
addEndpoint(delete_payment_methods);
addEndpoint(create_delivery_receipts);
addEndpoint(retrieve_delivery_receipts);
addEndpoint(update_delivery_receipts);
addEndpoint(list_delivery_receipts);
addEndpoint(delete_delivery_receipts);
addEndpoint(create_invoice_delivery_receipts);
addEndpoint(generate_html_delivery_receipts);
addEndpoint(generate_pdf_delivery_receipts);
addEndpoint(create_absence_types);
addEndpoint(retrieve_absence_types);
addEndpoint(update_absence_types);
addEndpoint(list_absence_types);
addEndpoint(delete_absence_types);
addEndpoint(create_absences);
addEndpoint(retrieve_absences);
addEndpoint(update_absences);
addEndpoint(list_absences);
addEndpoint(delete_absences);
addEndpoint(create_companies);
addEndpoint(retrieve_companies);
addEndpoint(update_companies);
addEndpoint(list_companies);
addEndpoint(delete_companies);
addEndpoint(confirm_domain_companies);
addEndpoint(list_positions_companies);
addEndpoint(retrieve_by_id_companies);
addEndpoint(retrieve_cgv_companies);
addEndpoint(retrieve_container_stats_companies);
addEndpoint(retrieve_extra_infos_companies);
addEndpoint(search_by_sirene_companies);
addEndpoint(send_domain_confirmation_companies);
addEndpoint(retrieve_companies_app_infos);
addEndpoint(retrieve_by_id_companies_app_infos);
addEndpoint(create_companies_position);
addEndpoint(update_companies_position);
addEndpoint(create_clients);
addEndpoint(retrieve_clients);
addEndpoint(update_clients);
addEndpoint(list_clients);
addEndpoint(delete_clients);
addEndpoint(import_from_csv_clients);
addEndpoint(merge_clients);
addEndpoint(create_products);
addEndpoint(retrieve_products);
addEndpoint(update_products);
addEndpoint(list_products);
addEndpoint(delete_products);
addEndpoint(import_from_csv_products);
addEndpoint(list_variants_products);
addEndpoint(create_products_variant);
addEndpoint(retrieve_products_variant);
addEndpoint(update_products_variant);
addEndpoint(list_products_variant);
addEndpoint(delete_products_variant);
addEndpoint(create_product_categories);
addEndpoint(retrieve_product_categories);
addEndpoint(update_product_categories);
addEndpoint(list_product_categories);
addEndpoint(delete_product_categories);
addEndpoint(create_purchases);
addEndpoint(retrieve_purchases);
addEndpoint(update_purchases);
addEndpoint(list_purchases);
addEndpoint(delete_purchases);
addEndpoint(create_credit_purchases);
addEndpoint(get_stats_purchases);
addEndpoint(create_purchase_categories);
addEndpoint(retrieve_purchase_categories);
addEndpoint(update_purchase_categories);
addEndpoint(list_purchase_categories);
addEndpoint(delete_purchase_categories);
addEndpoint(create_users);
addEndpoint(retrieve_users);
addEndpoint(update_users);
addEndpoint(list_users);
addEndpoint(delete_users);
addEndpoint(deactivate_users);
addEndpoint(list_invitations_users);
addEndpoint(list_notifications_users);
addEndpoint(list_positions_users);
addEndpoint(retrieve_by_uid_users);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  const unmatched = Array.from(unmatchedFilters).filter((f) => f.type === 'tool' || f.type === 'resource');
  if (unmatched.length > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${unmatched
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
