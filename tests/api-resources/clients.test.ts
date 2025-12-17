// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Wuro from 'wuro';

const client = new Wuro({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource clients', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.clients.create({ name: 'name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.clients.create({
      name: 'name',
      address: 'address',
      address_complement: 'address_complement',
      address_end: 'address_end',
      analytical_code: 'analytical_code',
      category: 'category',
      city: 'city',
      client_code: 'client_code',
      country: 'country',
      description: 'description',
      email: 'dev@stainless.com',
      fax: 'fax',
      mobile: 'mobile',
      nic: 'nic',
      notes: 'notes',
      phone: 'phone',
      siren: 'siren',
      tags: ['string'],
      tva_number: 'tva_number',
      website: 'website',
      zip_code: 'zip_code',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.clients.retrieve('uid');
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
      client.clients.retrieve('uid', { populate: 'populate' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Wuro.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.clients.update('uid', { name: 'name' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.clients.update('uid', {
      name: 'name',
      address: 'address',
      address_complement: 'address_complement',
      address_end: 'address_end',
      analytical_code: 'analytical_code',
      category: 'category',
      city: 'city',
      client_code: 'client_code',
      country: 'country',
      description: 'description',
      email: 'dev@stainless.com',
      fax: 'fax',
      mobile: 'mobile',
      nic: 'nic',
      notes: 'notes',
      phone: 'phone',
      siren: 'siren',
      tags: ['string'],
      tva_number: 'tva_number',
      website: 'website',
      zip_code: 'zip_code',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.clients.list();
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
      client.clients.list(
        { limit: 0, search: 'search', skip: 0, sort: 'name:1', state: 'active' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Wuro.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.clients.delete('uid');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('importFromCsv', async () => {
    const responsePromise = client.clients.importFromCsv({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('merge: only required params', async () => {
    const responsePromise = client.clients.merge({ source: 'source', target: 'target' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('merge: required and optional params', async () => {
    const response = await client.clients.merge({ source: 'source', target: 'target' });
  });
});
