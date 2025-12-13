// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Wuro from 'wuro';

const client = new Wuro({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource register', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.auth.register.create({ email: 'dev@stainless.com', password: 'password' });
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
    const response = await client.auth.register.create({
      email: 'dev@stainless.com',
      password: 'password',
      first_name: 'first_name',
      last_name: 'last_name',
    });
  });

  // Prism tests are disabled
  test.skip('confirm: only required params', async () => {
    const responsePromise = client.auth.register.confirm({ token: 'token' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('confirm: required and optional params', async () => {
    const response = await client.auth.register.confirm({ token: 'token' });
  });
});
