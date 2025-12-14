// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'wuro-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'wuro-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Wuro from 'wuro';

export const metadata: Metadata = {
  resource: 'export',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/export/absences',
  operationId: 'exportAbsences',
};

export const tool: Tool = {
  name: 'export_absences_export',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nExport absences\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/export_export_absences_response',\n  $defs: {\n    export_export_absences_response: {\n      type: 'object',\n      properties: {\n        message: {\n          type: 'string',\n          description: 'Success message'\n        },\n        package: {\n          type: 'object',\n          description: 'Package information',\n          additionalProperties: true\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      company: {
        type: 'string',
        description: 'Reference to the company',
      },
      filters: {
        type: 'object',
        description: 'Filters to apply to the export',
        additionalProperties: true,
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {},
};

export const handler = async (client: Wuro, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.export.exportAbsences(body)));
  } catch (error) {
    if (error instanceof Wuro.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
