# Changelog

## 2.1.0 (2026-02-20)

Full Changelog: [v2.0.0...v2.1.0](https://github.com/agence-awelty/wuro-typescript/compare/v2.0.0...v2.1.0)

### Features

* **mcp:** add initial server instructions ([b3cdaba](https://github.com/agence-awelty/wuro-typescript/commit/b3cdababd1fd094a7f1db01298cdc6538233bec0))


### Bug Fixes

* **client:** avoid memory leak with abort signals ([c1e7976](https://github.com/agence-awelty/wuro-typescript/commit/c1e7976cab73401c014064cae98fc93a7a86063b))
* **client:** avoid removing abort listener too early ([3aea49e](https://github.com/agence-awelty/wuro-typescript/commit/3aea49eeebdfb0518f753180e0b7a62deba60eef))
* **docs:** fix mcp installation instructions for remote servers ([e38a4d8](https://github.com/agence-awelty/wuro-typescript/commit/e38a4d84141700f94e5dea0cc0efae36718ebaa8))
* **mcp:** allow falling back for required env variables ([e8715cf](https://github.com/agence-awelty/wuro-typescript/commit/e8715cf98328c8f5f80a8c90b0701bc9a508d586))
* **mcp:** correct code tool api output types ([8d3b232](https://github.com/agence-awelty/wuro-typescript/commit/8d3b232c6fa594782878d9a842f15c5d1d6c5388))
* **mcp:** fix options parsing ([d7ee420](https://github.com/agence-awelty/wuro-typescript/commit/d7ee42065d7da042005c6ce7ffbc9e684eeda12f))
* **mcp:** initialize SDK lazily to avoid failing the connection on init errors ([7ae9d07](https://github.com/agence-awelty/wuro-typescript/commit/7ae9d077c4d0fa4cfca568b120b7b730f25462a6))
* **mcp:** update code tool prompt ([ccde108](https://github.com/agence-awelty/wuro-typescript/commit/ccde1085cd50baad01092e433b1f13fd7baf723c))


### Chores

* break long lines in snippets into multiline ([742587b](https://github.com/agence-awelty/wuro-typescript/commit/742587b4274f599bf694611baa75ee08e76171e8))
* **ci:** upgrade `actions/github-script` ([261a30e](https://github.com/agence-awelty/wuro-typescript/commit/261a30e6b0c486d086b8b369bbbc91397899c82a))
* **client:** do not parse responses with empty content-length ([fd6d09c](https://github.com/agence-awelty/wuro-typescript/commit/fd6d09ca8f02e6584f491a9c49a5a728e8592ab1))
* **client:** restructure abort controller binding ([00614f3](https://github.com/agence-awelty/wuro-typescript/commit/00614f339d6f9c356aaee77a287759f17ea5294e))
* fix typo in descriptions ([1eedc9e](https://github.com/agence-awelty/wuro-typescript/commit/1eedc9e59d79b9a8848379d0cc54953723f717ce))
* **internal/client:** fix form-urlencoded requests ([15b8b98](https://github.com/agence-awelty/wuro-typescript/commit/15b8b98aeb29bac473b3ce6011d7cec72e29bf41))
* **internal:** add health check to MCP server when running in HTTP mode ([c7fcae0](https://github.com/agence-awelty/wuro-typescript/commit/c7fcae0f50a87e3e5bd28763361e68a86deb74c3))
* **internal:** allow basic filtering of methods allowed for MCP code mode ([df0d2ad](https://github.com/agence-awelty/wuro-typescript/commit/df0d2ad3d55fddaa414aa887631aed2666473fb7))
* **internal:** allow setting x-stainless-api-key header on mcp server requests ([125b95b](https://github.com/agence-awelty/wuro-typescript/commit/125b95b9199f98f9c689d9ba8cf5c3f66f683ead))
* **internal:** always generate MCP server dockerfiles and upgrade associated dependencies ([d6667c7](https://github.com/agence-awelty/wuro-typescript/commit/d6667c739d86d2ea53f0d8174b61a141ec09f581))
* **internal:** avoid type checking errors with ts-reset ([ffa0063](https://github.com/agence-awelty/wuro-typescript/commit/ffa0063472f19413b74e7afbe5810ac8ed42277b))
* **internal:** cache fetch instruction calls in MCP server ([bebf178](https://github.com/agence-awelty/wuro-typescript/commit/bebf1788fdb2407e5fbe04381b392d0da2a286ca))
* **internal:** codegen related update ([0352799](https://github.com/agence-awelty/wuro-typescript/commit/03527993d1b5517daecbee310a937c1115edb5cd))
* **internal:** codegen related update ([b420f6a](https://github.com/agence-awelty/wuro-typescript/commit/b420f6a938f9f16a63e575762e6fc2fcc01d9274))
* **internal:** codegen related update ([2156cd8](https://github.com/agence-awelty/wuro-typescript/commit/2156cd8d5714c8f8d24c5b0e89a74272b982384d))
* **internal:** codegen related update ([c55daef](https://github.com/agence-awelty/wuro-typescript/commit/c55daef2edd184c46b6e85e0d5e10013a8bbe5fe))
* **internal:** codegen related update ([db085c6](https://github.com/agence-awelty/wuro-typescript/commit/db085c67862794587f05f3cda585c1c99c7bc39b))
* **internal:** codegen related update ([3f36ed7](https://github.com/agence-awelty/wuro-typescript/commit/3f36ed7e5adbc80fe91a408fe4657ad343881dd1))
* **internal:** codegen related update ([e27b4a5](https://github.com/agence-awelty/wuro-typescript/commit/e27b4a5ba1f8a80949e5347240c076c209c450be))
* **internal:** fix dockerfile ([b7f3b73](https://github.com/agence-awelty/wuro-typescript/commit/b7f3b73215fd5ad397e1d3a70e0770eaa3b13c3e))
* **internal:** improve layout of generated MCP server files ([84822dc](https://github.com/agence-awelty/wuro-typescript/commit/84822dc7041a6d28ffee9b38e48f26b06b39dcce))
* **internal:** improve reliability of MCP servers when using local code mode execution ([5f376a4](https://github.com/agence-awelty/wuro-typescript/commit/5f376a42d714fcd9c1d60068ff6e1cb5c951a253))
* **internal:** refactor flag parsing for MCP servers and add debug flag ([070f57a](https://github.com/agence-awelty/wuro-typescript/commit/070f57adbb7a595471c3b668bd9ebe62c4828c3a))
* **internal:** remove mock server code ([a8a0fdb](https://github.com/agence-awelty/wuro-typescript/commit/a8a0fdb04e2d0862519de1c647e7790664898fab))
* **internal:** support oauth authorization code flow for MCP servers ([36a0ef1](https://github.com/agence-awelty/wuro-typescript/commit/36a0ef176cb47c7dd9a6b38e4e9d15cd88658841))
* **internal:** update `actions/checkout` version ([7978083](https://github.com/agence-awelty/wuro-typescript/commit/79780834fd9975f1470929f2cffddff18c9b41e6))
* **internal:** update lock file ([b4e0301](https://github.com/agence-awelty/wuro-typescript/commit/b4e030176dba75669751e1d084630f535e7b9028))
* **internal:** upgrade babel, qs, js-yaml ([d7e5f8d](https://github.com/agence-awelty/wuro-typescript/commit/d7e5f8db2861aefac1f2aca14453021056e16bc0))
* **internal:** upgrade brace-expansion and @babel/helpers ([2c14619](https://github.com/agence-awelty/wuro-typescript/commit/2c14619b943903acf518a62caed3c9f5a30f92b2))
* **internal:** upgrade pnpm ([060fbd5](https://github.com/agence-awelty/wuro-typescript/commit/060fbd5a256d3a6aaa2538895ff5448cf3efe96a))
* **mcp:** add intent param to execute tool ([9c4aa57](https://github.com/agence-awelty/wuro-typescript/commit/9c4aa57ddb218488c69b8a648050f1b2b71c2069))
* **mcp:** correctly update version in sync with sdk ([6decafa](https://github.com/agence-awelty/wuro-typescript/commit/6decafa198ebbd5cdbd67dc792b560cccf845747))
* **mcp:** forward STAINLESS_API_KEY to docs search endpoint ([57dda9f](https://github.com/agence-awelty/wuro-typescript/commit/57dda9fa4dfa136c418ecc7d43a77809173fdd3c))
* **mcp:** pass intent param to execute handler ([e1e5a46](https://github.com/agence-awelty/wuro-typescript/commit/e1e5a465a80aa7eaab81225b6e3584e2b35f7288))
* **mcp:** up tsconfig lib version to es2022 ([013cbcc](https://github.com/agence-awelty/wuro-typescript/commit/013cbcc9275f44603be0fad9bf4be7226f301b1a))
* **mcp:** upgrade dependencies ([8a886ea](https://github.com/agence-awelty/wuro-typescript/commit/8a886ea6030ddc7a361f316495b88ce6afe499ac))
* update mock server docs ([01f0f99](https://github.com/agence-awelty/wuro-typescript/commit/01f0f99a6cb221bf23a84548883092b90089a7ba))


### Documentation

* prominently feature MCP server setup in root SDK readmes ([996dce1](https://github.com/agence-awelty/wuro-typescript/commit/996dce1411b3d093c2f21f31f779a494a2a3fb65))

## 2.0.0 (2025-12-23)

Full Changelog: [v1.2.0...v2.0.0](https://github.com/agence-awelty/wuro-typescript/compare/v1.2.0...v2.0.0)

### ⚠ BREAKING CHANGES

* **mcp:** remove deprecated tool schemes
* **mcp:** **Migration:** To migrate, simply modify the command used to invoke the MCP server. Currently, the only supported tool scheme is code mode. Now, starting the server with just `node /path/to/mcp/server` or `npx package-name` will invoke code tools: changing your command to one of these is likely all you will need to do.

### Features

* **api:** manual updates ([058b310](https://github.com/agence-awelty/wuro-typescript/commit/058b3103071274135933e1bfde403cd0700e2e68))
* headers ([729fb2f](https://github.com/agence-awelty/wuro-typescript/commit/729fb2fc897f0903caf83287c9be8995483cc4ed))


### Bug Fixes

* **mcp:** pass base url to code tool ([7e5c908](https://github.com/agence-awelty/wuro-typescript/commit/7e5c9089e2506cdc676f4761a640dcea8d21fd48))


### Chores

* **mcp:** remove deprecated tool schemes ([f83d705](https://github.com/agence-awelty/wuro-typescript/commit/f83d7055b0c560c255f12b4c894fe77e8b74f709))

## 1.2.0 (2025-12-17)

Full Changelog: [v1.1.0...v1.2.0](https://github.com/agence-awelty/wuro-typescript/compare/v1.1.0...v1.2.0)

### Features

* **api:** manual updates ([a57431c](https://github.com/agence-awelty/wuro-typescript/commit/a57431c72374686a9fdabfa47b470a0978ccbfc4))


### Chores

* configure new SDK language ([4018e0b](https://github.com/agence-awelty/wuro-typescript/commit/4018e0bbf7120f5718249aff8b23fae12c5288c6))
* **internal:** configure MCP Server hosting ([136a56a](https://github.com/agence-awelty/wuro-typescript/commit/136a56ac05c4ac38e6e38a86b8886a06f228cfea))

## 1.1.0 (2025-12-13)

Full Changelog: [v1.0.0...v1.1.0](https://github.com/agence-awelty/wuro-typescript/compare/v1.0.0...v1.1.0)

### Features

* **api:** manual updates ([9f3bc60](https://github.com/agence-awelty/wuro-typescript/commit/9f3bc60f2d867844d4b8440449371589f09e22b1))

## 1.0.0 (2025-12-13)

Full Changelog: [v0.0.1...v1.0.0](https://github.com/agence-awelty/wuro-typescript/compare/v0.0.1...v1.0.0)

### Features

* **api:** manual updates ([9ac07b1](https://github.com/agence-awelty/wuro-typescript/commit/9ac07b10596ea65f105bfb388e2a716062fe6191))
* **api:** manual updates ([04bea55](https://github.com/agence-awelty/wuro-typescript/commit/04bea556b64c6ab98d403365c0adc033c992d08e))
* **api:** manual updates ([59778c2](https://github.com/agence-awelty/wuro-typescript/commit/59778c2555398f6ee20eeb016d2f2ed6d27b9bbe))
* **api:** manual updates ([7f39c3c](https://github.com/agence-awelty/wuro-typescript/commit/7f39c3cc5b75fa46608b2e055a9c052ecd611ef4))
* **api:** manual updates ([bcc7b62](https://github.com/agence-awelty/wuro-typescript/commit/bcc7b62264aaca337025c38a57311e6774b9f0b9))
* **api:** manual updates ([e705552](https://github.com/agence-awelty/wuro-typescript/commit/e705552d20b96e55d2269b6f62a73f70f58ef5f1))
* **api:** manual updates ([83abe9c](https://github.com/agence-awelty/wuro-typescript/commit/83abe9c3f92c143bfd2dd258c98b95c9f31db379))


### Chores

* update SDK settings ([7becdf9](https://github.com/agence-awelty/wuro-typescript/commit/7becdf9b5cd67d164f0eb6a2453f77dd4800509b))
* update SDK settings ([1b594d0](https://github.com/agence-awelty/wuro-typescript/commit/1b594d0d2ec4a7dbff2b15db5ee53ea40e0f557d))
