// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Wuro from 'wuro';

const client = new Wuro({
  appID: 'My App ID',
  appSecret: 'My App Secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource invoices', () => {
  // Prism tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.invoices.create({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.invoices.retrieve('uid');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.invoices.retrieve('uid', { populate: 'populate' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Wuro.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.invoices.update('uid', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.invoices.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.invoices.list(
        {
          client: 'client',
          limit: 0,
          maxDate: '2019-12-27T18:11:19.117Z',
          minDate: '2019-12-27T18:11:19.117Z',
          number: 'number',
          search: 'search',
          skip: 0,
          sort: 'date:-1',
          state: 'draft',
          type: 'invoice',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Wuro.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.invoices.delete('uid');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createCredit', async () => {
    const responsePromise = client.invoices.createCredit('uid');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createDeliveryReceipt', async () => {
    const responsePromise = client.invoices.createDeliveryReceipt('uid');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createPackage: only required params', async () => {
    const responsePromise = client.invoices.createPackage({ invoicesId: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createPackage: required and optional params', async () => {
    const response = await client.invoices.createPackage({ invoicesId: ['string'], DEFERRED: true });
  });

  // Prism tests are disabled
  test.skip('getLogs', async () => {
    const responsePromise = client.invoices.getLogs();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getLogs: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.invoices.getLogs(
        { invoice: 'invoice', limit: 0, skip: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Wuro.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('getStats', async () => {
    const responsePromise = client.invoices.getStats();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getStats: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.invoices.getStats(
        { maxDate: '2019-12-27T18:11:19.117Z', minDate: '2019-12-27T18:11:19.117Z', state: 'state' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Wuro.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('getTurnover', async () => {
    const responsePromise = client.invoices.getTurnover();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getTurnover: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.invoices.getTurnover(
        { maxDate: '2019-12-27T18:11:19.117Z', minDate: '2019-12-27T18:11:19.117Z' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Wuro.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listPayments', async () => {
    const responsePromise = client.invoices.listPayments();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listPayments: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.invoices.listPayments(
        {
          limit: 0,
          maxDate: '2019-12-27T18:11:19.117Z',
          minDate: '2019-12-27T18:11:19.117Z',
          mode: 'mode',
          skip: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Wuro.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('listWaitingPayments', async () => {
    const responsePromise = client.invoices.listWaitingPayments();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listWaitingPayments: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.invoices.listWaitingPayments(
        { limit: 0, skip: 0, state: ['waiting'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Wuro.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('recordPayment: only required params', async () => {
    const responsePromise = client.invoices.recordPayment('uid', { amount: 0, mode: 'mode' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('recordPayment: required and optional params', async () => {
    const response = await client.invoices.recordPayment('uid', { amount: 0, mode: 'mode' });
  });

  // Prism tests are disabled
  test.skip('retrieveLogs', async () => {
    const responsePromise = client.invoices.retrieveLogs('uid');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('sendEmail', async () => {
    const responsePromise = client.invoices.sendEmail('uid');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('sendEmail: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.invoices.sendEmail(
        'uid',
        {
          action: 'send_invoice',
          content: 'content',
          copyto: 'dev@stainless.com',
          joinPdf: true,
          replyTo: 'dev@stainless.com',
          subject: 'subject',
          to: 'dev@stainless.com',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Wuro.NotFoundError);
  });
});
