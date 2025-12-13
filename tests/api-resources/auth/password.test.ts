// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Wuro from 'wuro';

const client = new Wuro({
  apiKey: 'My API Key',
  privateKey: 'My Private Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource password', () => {
  // Prism tests are disabled
  test.skip('confirmReset: only required params', async () => {
    const responsePromise = client.auth.password.confirmReset({ token: 'token', password: 'password' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('confirmReset: required and optional params', async () => {
    const response = await client.auth.password.confirmReset({ token: 'token', password: 'password' });
  });

  // Prism tests are disabled
  test.skip('requestReset: only required params', async () => {
    const responsePromise = client.auth.password.requestReset({ email: 'dev@stainless.com' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('requestReset: required and optional params', async () => {
    const response = await client.auth.password.requestReset({ email: 'dev@stainless.com' });
  });
});
