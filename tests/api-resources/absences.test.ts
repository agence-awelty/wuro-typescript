// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Wuro from 'wuro';

const client = new Wuro({
  apiKey: 'My API Key',
  privateKey: 'My Private Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource absences', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.absences.create({
      from: '2024-12-23T00:00:00.000Z',
      to: '2024-12-27T00:00:00.000Z',
      type: 'type',
    });
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
    const response = await client.absences.create({
      from: '2024-12-23T00:00:00.000Z',
      to: '2024-12-27T00:00:00.000Z',
      type: 'type',
      from_moment: 'half-am',
      logs: [{ comment: 'comment', file: 'file' }],
      positionTo: 'positionTo',
      state: 'waiting',
      to_moment: 'half-am',
      userTo: 'userTo',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.absences.retrieve('uid');
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
      client.absences.retrieve('uid', { populate: 'populate' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Wuro.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.absences.update('uid', {});
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
    const responsePromise = client.absences.list();
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
      client.absences.list(
        {
          from: '2019-12-27T18:11:19.117Z',
          inPeriod: ['2019-12-27T18:11:19.117Z', '2019-12-27T18:11:19.117Z'],
          limit: 0,
          month: 1,
          positionTo: 'string',
          skip: 0,
          sort: 'from:-1',
          state: 'waiting',
          to: '2019-12-27T18:11:19.117Z',
          today: true,
          type: 'string',
          userTo: 'userTo',
          year: 2024,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Wuro.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.absences.delete('uid');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
