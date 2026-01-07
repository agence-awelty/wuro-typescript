// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Wuro from 'wuro';

const client = new Wuro({
  appID: 'My App ID',
  appSecret: 'My App Secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource products', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.products.create({ name: 'name' });
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
    const response = await client.products.create({
      name: 'name',
      analytical_code: 'analytical_code',
      buying_price: 0,
      category: 'category',
      cost_price: 0,
      description: 'description',
      ecotax: 0,
      electronic: true,
      hasSpecifications: true,
      hasStockManagement: true,
      hasVariations: true,
      is_marchandise: true,
      mandatory_mentions: 'mandatory_mentions',
      options: [{ name: 'name', values: ['string'] }],
      price_ht: 0,
      reference: 'reference',
      sku: 'sku',
      specifications: {
        depth: 0,
        height: 0,
        weight: 0,
        width: 0,
      },
      stock: {
        forceSell: true,
        nb_alert: 0,
        nb_min: 0,
        nb_stock: 0,
      },
      suppliers: ['string'],
      tva: 'tva',
      tva_rate: 0,
      unit: 'unit',
      url_ext: 'url_ext',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.products.retrieve('uid');
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
      client.products.retrieve('uid', { populate: 'populate' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Wuro.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.products.update('uid', { name: 'name' });
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
    const response = await client.products.update('uid', {
      name: 'name',
      analytical_code: 'analytical_code',
      buying_price: 0,
      category: 'category',
      cost_price: 0,
      description: 'description',
      ecotax: 0,
      electronic: true,
      hasSpecifications: true,
      hasStockManagement: true,
      hasVariations: true,
      is_marchandise: true,
      mandatory_mentions: 'mandatory_mentions',
      options: [{ name: 'name', values: ['string'] }],
      price_ht: 0,
      reference: 'reference',
      sku: 'sku',
      specifications: {
        depth: 0,
        height: 0,
        weight: 0,
        width: 0,
      },
      stock: {
        forceSell: true,
        nb_alert: 0,
        nb_min: 0,
        nb_stock: 0,
      },
      suppliers: ['string'],
      tva: 'tva',
      tva_rate: 0,
      unit: 'unit',
      url_ext: 'url_ext',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.products.list();
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
      client.products.list(
        {
          category: 'category',
          limit: 0,
          search: 'search',
          skip: 0,
          sort: 'name:1',
          state: 'active',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Wuro.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.products.delete('uid');
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
    const responsePromise = client.products.importFromCsv({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listVariants', async () => {
    const responsePromise = client.products.listVariants('uid');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
