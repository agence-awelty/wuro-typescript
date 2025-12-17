// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Wuro from 'wuro';

const client = new Wuro({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource auth', () => {
  // Prism tests are disabled
  test.skip('login: only required params', async () => {
    const responsePromise = client.auth.login({ api_key: 'api_key', private_key: 'private_key' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('login: required and optional params', async () => {
    const response = await client.auth.login({ api_key: 'api_key', private_key: 'private_key' });
  });
});
