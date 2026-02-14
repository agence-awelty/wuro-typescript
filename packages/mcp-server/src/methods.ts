// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.invoiceFile.analyze',
    fullyQualifiedName: 'invoiceFile.analyze',
    httpMethod: 'post',
    httpPath: '/invoice-file',
  },
  {
    clientCallName: 'client.order.retrievePaymentInfos',
    fullyQualifiedName: 'order.retrievePaymentInfos',
    httpMethod: 'get',
    httpPath: '/order/{uid}/payment-infos',
  },
  {
    clientCallName: 'client.statistics.retrievePayments',
    fullyQualifiedName: 'statistics.retrievePayments',
    httpMethod: 'get',
    httpPath: '/statistics/payments',
  },
  {
    clientCallName: 'client.export.exportAbsences',
    fullyQualifiedName: 'export.exportAbsences',
    httpMethod: 'post',
    httpPath: '/export/absences',
  },
  {
    clientCallName: 'client.companyMails.list',
    fullyQualifiedName: 'companyMails.list',
    httpMethod: 'get',
    httpPath: '/company-mails',
  },
  {
    clientCallName: 'client.productUnits.list',
    fullyQualifiedName: 'productUnits.list',
    httpMethod: 'get',
    httpPath: '/product-units',
  },
  {
    clientCallName: 'client.purchaseFile.analyze',
    fullyQualifiedName: 'purchaseFile.analyze',
    httpMethod: 'post',
    httpPath: '/purchase-file',
  },
  {
    clientCallName: 'client.invoices.create',
    fullyQualifiedName: 'invoices.create',
    httpMethod: 'post',
    httpPath: '/invoice',
  },
  {
    clientCallName: 'client.invoices.retrieve',
    fullyQualifiedName: 'invoices.retrieve',
    httpMethod: 'get',
    httpPath: '/invoice/{uid}',
  },
  {
    clientCallName: 'client.invoices.update',
    fullyQualifiedName: 'invoices.update',
    httpMethod: 'patch',
    httpPath: '/invoice/{uid}',
  },
  {
    clientCallName: 'client.invoices.list',
    fullyQualifiedName: 'invoices.list',
    httpMethod: 'get',
    httpPath: '/invoices',
  },
  {
    clientCallName: 'client.invoices.delete',
    fullyQualifiedName: 'invoices.delete',
    httpMethod: 'delete',
    httpPath: '/invoice/{uid}',
  },
  {
    clientCallName: 'client.invoices.createCredit',
    fullyQualifiedName: 'invoices.createCredit',
    httpMethod: 'post',
    httpPath: '/invoice/{uid}/credit',
  },
  {
    clientCallName: 'client.invoices.createDeliveryReceipt',
    fullyQualifiedName: 'invoices.createDeliveryReceipt',
    httpMethod: 'post',
    httpPath: '/invoice/{uid}/delivery-receipt',
  },
  {
    clientCallName: 'client.invoices.createPackage',
    fullyQualifiedName: 'invoices.createPackage',
    httpMethod: 'post',
    httpPath: '/invoices/package',
  },
  {
    clientCallName: 'client.invoices.getLogs',
    fullyQualifiedName: 'invoices.getLogs',
    httpMethod: 'get',
    httpPath: '/invoices/logs',
  },
  {
    clientCallName: 'client.invoices.getStats',
    fullyQualifiedName: 'invoices.getStats',
    httpMethod: 'get',
    httpPath: '/invoices/stats',
  },
  {
    clientCallName: 'client.invoices.getTurnover',
    fullyQualifiedName: 'invoices.getTurnover',
    httpMethod: 'get',
    httpPath: '/invoices/turnover',
  },
  {
    clientCallName: 'client.invoices.listPayments',
    fullyQualifiedName: 'invoices.listPayments',
    httpMethod: 'get',
    httpPath: '/invoices/payments',
  },
  {
    clientCallName: 'client.invoices.listWaitingPayments',
    fullyQualifiedName: 'invoices.listWaitingPayments',
    httpMethod: 'get',
    httpPath: '/invoices/payments-waiting',
  },
  {
    clientCallName: 'client.invoices.recordPayment',
    fullyQualifiedName: 'invoices.recordPayment',
    httpMethod: 'post',
    httpPath: '/invoice/{uid}/payment',
  },
  {
    clientCallName: 'client.invoices.retrieveLogs',
    fullyQualifiedName: 'invoices.retrieveLogs',
    httpMethod: 'get',
    httpPath: '/invoice/{uid}/logs',
  },
  {
    clientCallName: 'client.invoices.sendEmail',
    fullyQualifiedName: 'invoices.sendEmail',
    httpMethod: 'post',
    httpPath: '/invoice/{uid}/mail',
  },
  {
    clientCallName: 'client.invoices.line.update',
    fullyQualifiedName: 'invoices.line.update',
    httpMethod: 'patch',
    httpPath: '/invoice/{uid}/line/{lineUuid}',
  },
  {
    clientCallName: 'client.invoices.line.delete',
    fullyQualifiedName: 'invoices.line.delete',
    httpMethod: 'delete',
    httpPath: '/invoice/{uid}/line/{lineUuid}',
  },
  {
    clientCallName: 'client.invoices.line.add',
    fullyQualifiedName: 'invoices.line.add',
    httpMethod: 'post',
    httpPath: '/invoice/{uid}/line',
  },
  {
    clientCallName: 'client.quotes.create',
    fullyQualifiedName: 'quotes.create',
    httpMethod: 'post',
    httpPath: '/quote',
  },
  {
    clientCallName: 'client.quotes.retrieve',
    fullyQualifiedName: 'quotes.retrieve',
    httpMethod: 'get',
    httpPath: '/quote/{uid}',
  },
  {
    clientCallName: 'client.quotes.update',
    fullyQualifiedName: 'quotes.update',
    httpMethod: 'patch',
    httpPath: '/quote/{uid}',
  },
  {
    clientCallName: 'client.quotes.list',
    fullyQualifiedName: 'quotes.list',
    httpMethod: 'get',
    httpPath: '/quotes',
  },
  {
    clientCallName: 'client.quotes.delete',
    fullyQualifiedName: 'quotes.delete',
    httpMethod: 'delete',
    httpPath: '/quote/{uid}',
  },
  {
    clientCallName: 'client.quotes.createAdvanceInvoice',
    fullyQualifiedName: 'quotes.createAdvanceInvoice',
    httpMethod: 'post',
    httpPath: '/quote/{uid}/advance',
  },
  {
    clientCallName: 'client.quotes.createDeliveryReceipt',
    fullyQualifiedName: 'quotes.createDeliveryReceipt',
    httpMethod: 'post',
    httpPath: '/quote/{uid}/delivery-receipt',
  },
  {
    clientCallName: 'client.quotes.createInvoice',
    fullyQualifiedName: 'quotes.createInvoice',
    httpMethod: 'post',
    httpPath: '/quote/{uid}/invoice',
  },
  {
    clientCallName: 'client.quotes.createInvoiceFromQuote',
    fullyQualifiedName: 'quotes.createInvoiceFromQuote',
    httpMethod: 'post',
    httpPath: '/quote/{uid}/sold',
  },
  {
    clientCallName: 'client.quotes.createPackage',
    fullyQualifiedName: 'quotes.createPackage',
    httpMethod: 'post',
    httpPath: '/quotes/package',
  },
  {
    clientCallName: 'client.quotes.createProformaInvoice',
    fullyQualifiedName: 'quotes.createProformaInvoice',
    httpMethod: 'post',
    httpPath: '/quote/{uid}/proforma',
  },
  {
    clientCallName: 'client.quotes.createPurchaseOrder',
    fullyQualifiedName: 'quotes.createPurchaseOrder',
    httpMethod: 'post',
    httpPath: '/quote/{uid}/bdc',
  },
  {
    clientCallName: 'client.quotes.generateHTML',
    fullyQualifiedName: 'quotes.generateHTML',
    httpMethod: 'get',
    httpPath: '/quote/{uid}/html',
  },
  {
    clientCallName: 'client.quotes.generatePdf',
    fullyQualifiedName: 'quotes.generatePdf',
    httpMethod: 'get',
    httpPath: '/quote/{uid}/pdf',
  },
  {
    clientCallName: 'client.quotes.generatePdfChromium',
    fullyQualifiedName: 'quotes.generatePdfChromium',
    httpMethod: 'get',
    httpPath: '/quote/{uid}/pdf-chromium',
  },
  {
    clientCallName: 'client.quotes.getLogs',
    fullyQualifiedName: 'quotes.getLogs',
    httpMethod: 'get',
    httpPath: '/quotes/logs',
  },
  {
    clientCallName: 'client.quotes.getStats',
    fullyQualifiedName: 'quotes.getStats',
    httpMethod: 'get',
    httpPath: '/quotes/stats',
  },
  {
    clientCallName: 'client.quotes.retrieveLogs',
    fullyQualifiedName: 'quotes.retrieveLogs',
    httpMethod: 'get',
    httpPath: '/quote/{uid}/logs',
  },
  {
    clientCallName: 'client.quotes.line.update',
    fullyQualifiedName: 'quotes.line.update',
    httpMethod: 'patch',
    httpPath: '/quote/{uid}/line/{lineUuid}',
  },
  {
    clientCallName: 'client.quotes.line.delete',
    fullyQualifiedName: 'quotes.line.delete',
    httpMethod: 'delete',
    httpPath: '/quote/{uid}/line/{lineUuid}',
  },
  {
    clientCallName: 'client.quotes.line.add',
    fullyQualifiedName: 'quotes.line.add',
    httpMethod: 'post',
    httpPath: '/quote/{uid}/line',
  },
  {
    clientCallName: 'client.paymentMethods.create',
    fullyQualifiedName: 'paymentMethods.create',
    httpMethod: 'post',
    httpPath: '/payment-method',
  },
  {
    clientCallName: 'client.paymentMethods.retrieve',
    fullyQualifiedName: 'paymentMethods.retrieve',
    httpMethod: 'get',
    httpPath: '/payment-method/{uid}',
  },
  {
    clientCallName: 'client.paymentMethods.update',
    fullyQualifiedName: 'paymentMethods.update',
    httpMethod: 'patch',
    httpPath: '/payment-method/{uid}',
  },
  {
    clientCallName: 'client.paymentMethods.list',
    fullyQualifiedName: 'paymentMethods.list',
    httpMethod: 'get',
    httpPath: '/payment-methods',
  },
  {
    clientCallName: 'client.paymentMethods.delete',
    fullyQualifiedName: 'paymentMethods.delete',
    httpMethod: 'delete',
    httpPath: '/payment-method/{uid}',
  },
  {
    clientCallName: 'client.deliveryReceipts.create',
    fullyQualifiedName: 'deliveryReceipts.create',
    httpMethod: 'post',
    httpPath: '/delivery-receipt',
  },
  {
    clientCallName: 'client.deliveryReceipts.retrieve',
    fullyQualifiedName: 'deliveryReceipts.retrieve',
    httpMethod: 'get',
    httpPath: '/delivery-receipt/{uid}',
  },
  {
    clientCallName: 'client.deliveryReceipts.update',
    fullyQualifiedName: 'deliveryReceipts.update',
    httpMethod: 'patch',
    httpPath: '/delivery-receipt/{uid}',
  },
  {
    clientCallName: 'client.deliveryReceipts.list',
    fullyQualifiedName: 'deliveryReceipts.list',
    httpMethod: 'get',
    httpPath: '/delivery-receipts',
  },
  {
    clientCallName: 'client.deliveryReceipts.delete',
    fullyQualifiedName: 'deliveryReceipts.delete',
    httpMethod: 'delete',
    httpPath: '/delivery-receipt/{uid}',
  },
  {
    clientCallName: 'client.deliveryReceipts.createInvoice',
    fullyQualifiedName: 'deliveryReceipts.createInvoice',
    httpMethod: 'post',
    httpPath: '/delivery-receipt/{uid}/invoice',
  },
  {
    clientCallName: 'client.deliveryReceipts.generateHTML',
    fullyQualifiedName: 'deliveryReceipts.generateHTML',
    httpMethod: 'get',
    httpPath: '/delivery-receipt/{uid}/html',
  },
  {
    clientCallName: 'client.deliveryReceipts.generatePdf',
    fullyQualifiedName: 'deliveryReceipts.generatePdf',
    httpMethod: 'get',
    httpPath: '/delivery-receipt/{uid}/pdf',
  },
  {
    clientCallName: 'client.absenceTypes.create',
    fullyQualifiedName: 'absenceTypes.create',
    httpMethod: 'post',
    httpPath: '/absence-type',
  },
  {
    clientCallName: 'client.absenceTypes.retrieve',
    fullyQualifiedName: 'absenceTypes.retrieve',
    httpMethod: 'get',
    httpPath: '/absence-type/{uid}',
  },
  {
    clientCallName: 'client.absenceTypes.update',
    fullyQualifiedName: 'absenceTypes.update',
    httpMethod: 'patch',
    httpPath: '/absence-type/{uid}',
  },
  {
    clientCallName: 'client.absenceTypes.list',
    fullyQualifiedName: 'absenceTypes.list',
    httpMethod: 'get',
    httpPath: '/absence-types',
  },
  {
    clientCallName: 'client.absenceTypes.delete',
    fullyQualifiedName: 'absenceTypes.delete',
    httpMethod: 'delete',
    httpPath: '/absence-type/{uid}',
  },
  {
    clientCallName: 'client.absences.create',
    fullyQualifiedName: 'absences.create',
    httpMethod: 'post',
    httpPath: '/absence',
  },
  {
    clientCallName: 'client.absences.retrieve',
    fullyQualifiedName: 'absences.retrieve',
    httpMethod: 'get',
    httpPath: '/absence/{uid}',
  },
  {
    clientCallName: 'client.absences.update',
    fullyQualifiedName: 'absences.update',
    httpMethod: 'patch',
    httpPath: '/absence/{uid}',
  },
  {
    clientCallName: 'client.absences.list',
    fullyQualifiedName: 'absences.list',
    httpMethod: 'get',
    httpPath: '/absences',
  },
  {
    clientCallName: 'client.absences.delete',
    fullyQualifiedName: 'absences.delete',
    httpMethod: 'delete',
    httpPath: '/absence/{uid}',
  },
  {
    clientCallName: 'client.companies.create',
    fullyQualifiedName: 'companies.create',
    httpMethod: 'post',
    httpPath: '/company',
  },
  {
    clientCallName: 'client.companies.retrieve',
    fullyQualifiedName: 'companies.retrieve',
    httpMethod: 'get',
    httpPath: '/company',
  },
  {
    clientCallName: 'client.companies.update',
    fullyQualifiedName: 'companies.update',
    httpMethod: 'patch',
    httpPath: '/company/{uid}',
  },
  {
    clientCallName: 'client.companies.delete',
    fullyQualifiedName: 'companies.delete',
    httpMethod: 'delete',
    httpPath: '/company/{uid}',
  },
  {
    clientCallName: 'client.companies.confirmDomain',
    fullyQualifiedName: 'companies.confirmDomain',
    httpMethod: 'patch',
    httpPath: '/company/{uid}/domain-confirm',
  },
  {
    clientCallName: 'client.companies.listPositions',
    fullyQualifiedName: 'companies.listPositions',
    httpMethod: 'get',
    httpPath: '/company/{uid}/positions',
  },
  {
    clientCallName: 'client.companies.retrieveByID',
    fullyQualifiedName: 'companies.retrieveByID',
    httpMethod: 'get',
    httpPath: '/company/{uid}',
  },
  {
    clientCallName: 'client.companies.retrieveCgv',
    fullyQualifiedName: 'companies.retrieveCgv',
    httpMethod: 'get',
    httpPath: '/company/{uid}/cgv',
  },
  {
    clientCallName: 'client.companies.retrieveExtraInfos',
    fullyQualifiedName: 'companies.retrieveExtraInfos',
    httpMethod: 'get',
    httpPath: '/company/{uid}/extra-infos',
  },
  {
    clientCallName: 'client.companies.appInfos.retrieve',
    fullyQualifiedName: 'companies.appInfos.retrieve',
    httpMethod: 'get',
    httpPath: '/company/app-infos',
  },
  {
    clientCallName: 'client.companies.appInfos.retrieveByID',
    fullyQualifiedName: 'companies.appInfos.retrieveByID',
    httpMethod: 'get',
    httpPath: '/company/{uid}/app-infos',
  },
  {
    clientCallName: 'client.companies.position.create',
    fullyQualifiedName: 'companies.position.create',
    httpMethod: 'post',
    httpPath: '/company/{uid}/position',
  },
  {
    clientCallName: 'client.companies.position.update',
    fullyQualifiedName: 'companies.position.update',
    httpMethod: 'patch',
    httpPath: '/company/{company}/position/{uid}',
  },
  {
    clientCallName: 'client.clients.create',
    fullyQualifiedName: 'clients.create',
    httpMethod: 'post',
    httpPath: '/client',
  },
  {
    clientCallName: 'client.clients.retrieve',
    fullyQualifiedName: 'clients.retrieve',
    httpMethod: 'get',
    httpPath: '/client/{uid}',
  },
  {
    clientCallName: 'client.clients.update',
    fullyQualifiedName: 'clients.update',
    httpMethod: 'patch',
    httpPath: '/client/{uid}',
  },
  {
    clientCallName: 'client.clients.list',
    fullyQualifiedName: 'clients.list',
    httpMethod: 'get',
    httpPath: '/clients',
  },
  {
    clientCallName: 'client.clients.delete',
    fullyQualifiedName: 'clients.delete',
    httpMethod: 'delete',
    httpPath: '/client/{uid}',
  },
  {
    clientCallName: 'client.clients.importFromCsv',
    fullyQualifiedName: 'clients.importFromCsv',
    httpMethod: 'post',
    httpPath: '/clients/csv',
  },
  {
    clientCallName: 'client.clients.merge',
    fullyQualifiedName: 'clients.merge',
    httpMethod: 'post',
    httpPath: '/clients/merge',
  },
  {
    clientCallName: 'client.products.create',
    fullyQualifiedName: 'products.create',
    httpMethod: 'post',
    httpPath: '/product',
  },
  {
    clientCallName: 'client.products.retrieve',
    fullyQualifiedName: 'products.retrieve',
    httpMethod: 'get',
    httpPath: '/product/{uid}',
  },
  {
    clientCallName: 'client.products.update',
    fullyQualifiedName: 'products.update',
    httpMethod: 'patch',
    httpPath: '/product/{uid}',
  },
  {
    clientCallName: 'client.products.list',
    fullyQualifiedName: 'products.list',
    httpMethod: 'get',
    httpPath: '/products',
  },
  {
    clientCallName: 'client.products.delete',
    fullyQualifiedName: 'products.delete',
    httpMethod: 'delete',
    httpPath: '/product/{uid}',
  },
  {
    clientCallName: 'client.products.importFromCsv',
    fullyQualifiedName: 'products.importFromCsv',
    httpMethod: 'post',
    httpPath: '/products/csv',
  },
  {
    clientCallName: 'client.products.listVariants',
    fullyQualifiedName: 'products.listVariants',
    httpMethod: 'get',
    httpPath: '/product/{uid}/variants',
  },
  {
    clientCallName: 'client.products.variant.create',
    fullyQualifiedName: 'products.variant.create',
    httpMethod: 'post',
    httpPath: '/product/{uid}/variant',
  },
  {
    clientCallName: 'client.products.variant.retrieve',
    fullyQualifiedName: 'products.variant.retrieve',
    httpMethod: 'get',
    httpPath: '/product/{productId}/variant/{uid}',
  },
  {
    clientCallName: 'client.products.variant.update',
    fullyQualifiedName: 'products.variant.update',
    httpMethod: 'patch',
    httpPath: '/product/{productId}/variant/{uid}',
  },
  {
    clientCallName: 'client.products.variant.list',
    fullyQualifiedName: 'products.variant.list',
    httpMethod: 'get',
    httpPath: '/product-variants',
  },
  {
    clientCallName: 'client.products.variant.delete',
    fullyQualifiedName: 'products.variant.delete',
    httpMethod: 'delete',
    httpPath: '/product/{productId}/variant/{uid}',
  },
  {
    clientCallName: 'client.productCategories.create',
    fullyQualifiedName: 'productCategories.create',
    httpMethod: 'post',
    httpPath: '/product-category',
  },
  {
    clientCallName: 'client.productCategories.retrieve',
    fullyQualifiedName: 'productCategories.retrieve',
    httpMethod: 'get',
    httpPath: '/product-category/{uid}',
  },
  {
    clientCallName: 'client.productCategories.update',
    fullyQualifiedName: 'productCategories.update',
    httpMethod: 'patch',
    httpPath: '/product-category/{uid}',
  },
  {
    clientCallName: 'client.productCategories.list',
    fullyQualifiedName: 'productCategories.list',
    httpMethod: 'get',
    httpPath: '/product-categories',
  },
  {
    clientCallName: 'client.productCategories.delete',
    fullyQualifiedName: 'productCategories.delete',
    httpMethod: 'delete',
    httpPath: '/product-category/{uid}',
  },
  {
    clientCallName: 'client.purchases.create',
    fullyQualifiedName: 'purchases.create',
    httpMethod: 'post',
    httpPath: '/purchase',
  },
  {
    clientCallName: 'client.purchases.retrieve',
    fullyQualifiedName: 'purchases.retrieve',
    httpMethod: 'get',
    httpPath: '/purchase/{uid}',
  },
  {
    clientCallName: 'client.purchases.update',
    fullyQualifiedName: 'purchases.update',
    httpMethod: 'patch',
    httpPath: '/purchase/{uid}',
  },
  {
    clientCallName: 'client.purchases.list',
    fullyQualifiedName: 'purchases.list',
    httpMethod: 'get',
    httpPath: '/purchases',
  },
  {
    clientCallName: 'client.purchases.delete',
    fullyQualifiedName: 'purchases.delete',
    httpMethod: 'delete',
    httpPath: '/purchase/{uid}',
  },
  {
    clientCallName: 'client.purchases.createCredit',
    fullyQualifiedName: 'purchases.createCredit',
    httpMethod: 'post',
    httpPath: '/purchase/{uid}/credit',
  },
  {
    clientCallName: 'client.purchases.getStats',
    fullyQualifiedName: 'purchases.getStats',
    httpMethod: 'get',
    httpPath: '/purchases/stats',
  },
  {
    clientCallName: 'client.purchaseCategories.create',
    fullyQualifiedName: 'purchaseCategories.create',
    httpMethod: 'post',
    httpPath: '/purchase-category',
  },
  {
    clientCallName: 'client.purchaseCategories.retrieve',
    fullyQualifiedName: 'purchaseCategories.retrieve',
    httpMethod: 'get',
    httpPath: '/purchase-category/{uid}',
  },
  {
    clientCallName: 'client.purchaseCategories.update',
    fullyQualifiedName: 'purchaseCategories.update',
    httpMethod: 'patch',
    httpPath: '/purchase-category/{uid}',
  },
  {
    clientCallName: 'client.purchaseCategories.list',
    fullyQualifiedName: 'purchaseCategories.list',
    httpMethod: 'get',
    httpPath: '/purchase-categories',
  },
  {
    clientCallName: 'client.purchaseCategories.delete',
    fullyQualifiedName: 'purchaseCategories.delete',
    httpMethod: 'delete',
    httpPath: '/purchase-category/{uid}',
  },
  {
    clientCallName: 'client.users.retrieve',
    fullyQualifiedName: 'users.retrieve',
    httpMethod: 'get',
    httpPath: '/user',
  },
  {
    clientCallName: 'client.users.update',
    fullyQualifiedName: 'users.update',
    httpMethod: 'patch',
    httpPath: '/user/{uid}',
  },
  {
    clientCallName: 'client.users.deactivate',
    fullyQualifiedName: 'users.deactivate',
    httpMethod: 'delete',
    httpPath: '/user/{uid}',
  },
  {
    clientCallName: 'client.users.listInvitations',
    fullyQualifiedName: 'users.listInvitations',
    httpMethod: 'get',
    httpPath: '/user/{uid}/invitations',
  },
  {
    clientCallName: 'client.users.listNotifications',
    fullyQualifiedName: 'users.listNotifications',
    httpMethod: 'get',
    httpPath: '/user/{uid}/notifications',
  },
  {
    clientCallName: 'client.users.listPositions',
    fullyQualifiedName: 'users.listPositions',
    httpMethod: 'get',
    httpPath: '/user/{uid}/positions',
  },
  {
    clientCallName: 'client.users.retrieveByUid',
    fullyQualifiedName: 'users.retrieveByUid',
    httpMethod: 'get',
    httpPath: '/user/{uid}',
  },
  {
    clientCallName: 'client.auth.login',
    fullyQualifiedName: 'auth.login',
    httpMethod: 'post',
    httpPath: '/auth',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
