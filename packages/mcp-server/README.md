# Wuro TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export WURO_BEARER_TOKEN="My Bearer Token"
npx -y wuro-mcp@latest
```

### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "wuro_api": {
      "command": "npx",
      "args": ["-y", "wuro-mcp", "--client=claude", "--tools=dynamic"],
      "env": {
        "WURO_BEARER_TOKEN": "My Bearer Token"
      }
    }
  }
}
```

### Cursor

If you use Cursor, you can install the MCP server by using the button below. You will need to set your environment variables
in Cursor's `mcp.json`, which can be found in Cursor Settings > Tools & MCP > New MCP Server.

[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=wuro-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsInd1cm8tbWNwIl0sImVudiI6eyJXVVJPX0JFQVJFUl9UT0tFTiI6IlNldCB5b3VyIFdVUk9fQkVBUkVSX1RPS0VOIGhlcmUuIn19)

### VS Code

If you use MCP, you can install the MCP server by clicking the link below. You will need to set your environment variables
in VS Code's `mcp.json`, which can be found via Command Palette > MCP: Open User Configuration.

[Open VS Code](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22wuro-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22wuro-mcp%22%5D%2C%22env%22%3A%7B%22WURO_BEARER_TOKEN%22%3A%22Set%20your%20WURO_BEARER_TOKEN%20here.%22%7D%7D)

### Claude Code

If you use Claude Code, you can install the MCP server by running the command below in your terminal. You will need to set your
environment variables in Claude Code's `.claude.json`, which can be found in your home directory.

```
claude mcp add --transport stdio wuro_api --env WURO_BEARER_TOKEN="Your WURO_BEARER_TOKEN here." -- npx -y wuro-mcp
```

## Exposing endpoints to your MCP Client

There are three ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API
3. Exposing a docs search tool and a code execution tool, allowing the client to write code to be executed against the TypeScript client

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Code execution

If you specify `--tools=code` to the MCP server, it will expose just two tools:

- `search_docs` - Searches the API documentation and returns a list of markdown results
- `execute` - Runs code against the TypeScript client

This allows the LLM to implement more complex logic by chaining together many API calls without loading
intermediary results into its context window.

The code execution itself happens in a Deno sandbox that has network access only to the base URL for the API.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Running remotely

Launching the client with `--transport=http` launches the server as a remote server using Streamable HTTP transport. The `--port` setting can choose the port it will run on, and the `--socket` setting allows it to run on a Unix socket.

Authorization can be provided via the `Authorization` header using the Bearer scheme.

Additionally, authorization can be provided via the following headers:
| Header | Equivalent client option | Security scheme |
| --------------------- | ------------------------ | --------------- |
| `x-wuro-bearer-token` | `bearerToken` | BearerAuth |

A configuration JSON for this server might look like this, assuming the server is hosted at `http://localhost:3000`:

```json
{
  "mcpServers": {
    "wuro_api": {
      "url": "http://localhost:3000",
      "headers": {
        "Authorization": "Bearer <auth value>"
      }
    }
  }
}
```

The command-line arguments for filtering tools and specifying clients can also be used as query parameters in the URL.
For example, to exclude specific tools while including others, use the URL:

```
http://localhost:3000?resource=cards&resource=accounts&no_tool=create_cards
```

Or, to configure for the Cursor client, with a custom max tool name length, use the URL:

```
http://localhost:3000?client=cursor&capability=tool-name-length%3D40
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "wuro-mcp/server";

// import a specific tool
import analyzeInvoiceFile from "wuro-mcp/tools/invoice-file/analyze-invoice-file";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [analyzeInvoiceFile, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `invoice_file`:

- `analyze_invoice_file` (`write`): Analyse un fichier PDF de facture via OCR et IA (Mistral) pour en extraire les informations.

  **Utilisation:**

  - Envoyer le fichier PDF en base64 dans le champ `file`
  - L'IA extrait: fournisseur, date, numéro, lignes, totaux, TVA

  **Restrictions:**

  - La reconnaissance doit être activée pour l'entreprise (`visionAnalytic`)

  **Réponse:**

  - `invoice`: Données extraites du PDF
  - `preSubmitInvoice`: Données avec totaux recalculés (pour vérification)

### Resource `paybox_paiement_done`:

- `process_callback_paybox_paiement_done` (`write`): Traite le callback de notification de paiement envoyé par Paybox.

  **Comportement:**

  - Valide la signature de la requête Paybox
  - Met à jour le statut de la commande/facture associée
  - Déclenche les événements de paiement appropriés

  **Sécurité:**

  - Cette route est appelée serveur-à-serveur par Paybox
  - La signature doit être validée avant traitement

- `retrieve_status_paybox_paiement_done` (`read`): Vérifie le statut d'un paiement Paybox à partir de l'ID de transaction.

  **Utilisation:**

  - Appelé automatiquement par Paybox après un paiement
  - Peut être utilisé pour vérifier manuellement le statut

  **Réponse:**

  - Retourne le statut actuel de la transaction (succès, échec, en attente)

### Resource `paybox.checkout.session`:

- `update_checkout_paybox_session` (`write`): Récupère les détails d'une session de paiement Paybox existante.

  **Utilisation:**

  - Permet de vérifier l'état d'une session de paiement
  - Utile pour reprendre un paiement interrompu

- `list_checkout_paybox_session` (`read`): Initialise une nouvelle session de paiement Paybox pour permettre au client de payer.

  **Utilisation:**

  - Retourne les informations nécessaires pour rediriger le client vers Paybox
  - La session contient l'URL de paiement et les paramètres de sécurité

  **Prérequis:**

  - L'entreprise doit avoir configuré ses identifiants Paybox

### Resource `stripe.checkout.session`:

- `create_checkout_stripe_session` (`read`): Initialise une nouvelle session de paiement Stripe (Checkout Session).

  **Utilisation:**

  - Retourne une URL de redirection vers la page de paiement Stripe
  - La session est valide pour une durée limitée

  **Prérequis:**

  - L'entreprise doit avoir configuré ses clés API Stripe

- `retrieve_checkout_stripe_session` (`read`): Récupère les détails d'une session de paiement Stripe existante.

  **Informations retournées:**

  - Statut du paiement (paid, unpaid, expired)
  - Détails du client et de la transaction
  - Montant et devise

### Resource `stripe.webhook`:

- `receive_stripe_webhook` (`write`): Reçoit et traite les événements webhook envoyés par Stripe.

  **Événements traités:**

  - `checkout.session.completed` : Paiement réussi
  - `payment_intent.succeeded` : Intention de paiement réussie
  - `payment_intent.payment_failed` : Échec de paiement
  - `invoice.paid` : Facture payée (abonnements)

  **Sécurité:**

  - La signature du webhook est validée avec le secret webhook Stripe
  - Seuls les événements signés correctement sont traités

  **Important:**

  - Cette route ne doit pas être modifiée (vérification du endpoint côté Stripe)

### Resource `order`:

- `retrieve_payment_infos_order` (`read`): Récupère les informations de paiement associées à une commande.

  **Informations retournées:**

  - URL de paiement (si applicable)
  - Statut du paiement
  - Historique des tentatives de paiement
  - Détails de la transaction

  **Utilisation:**

  - Affichage du statut de paiement au client
  - Génération d'un nouveau lien de paiement si nécessaire

### Resource `statistics`:

- `retrieve_payments_statistics` (`read`): Récupère les statistiques globales des paiements reçus.

  **Statistiques retournées:**

  - Total des paiements par période
  - Répartition par mode de paiement
  - Évolution temporelle des encaissements
  - Moyenne des paiements

  **Filtres disponibles:**

  - Période (minDate, maxDate)
  - Mode de paiement

  **Utilisation:**

  - Tableau de bord financier
  - Rapports de trésorerie
  - Analyse des modes de paiement préférés

### Resource `export`:

- `export_absences_export` (`write`): Export absences

### Resource `company_mails`:

- `list_company_mails` (`read`): Récupère la liste des adresses email configurées pour l'entreprise.

  **Utilisation:**

  - Sélection de l'expéditeur pour l'envoi de documents
  - Configuration des réponses automatiques

### Resource `product_units`:

- `list_product_units` (`read`): Récupère la liste des unités de mesure utilisables pour les produits.

  **Unités standard:**

  - Pièce, Unité
  - Heure, Jour, Mois
  - Kilogramme, Litre, Mètre
  - Forfait

  **Utilisation:**

  - Sélection de l'unité lors de la création/modification d'un produit
  - Affichage sur les devis et factures

### Resource `purchase_file`:

- `analyze_purchase_file` (`write`): Analyse un fichier PDF de facture fournisseur via OCR et IA pour en extraire les informations.

  **Utilisation:**

  - Envoyer le fichier PDF en base64 dans le corps de la requête
  - L'IA extrait : fournisseur, date, numéro, lignes, totaux, TVA

  **Restrictions:**

  - La reconnaissance doit être activée pour l'entreprise (`visionAnalytic`)

  **Réponse:**

  - `purchase` : Données extraites du PDF
  - `preSubmitPurchase` : Données avec totaux recalculés (pour vérification)

### Resource `invoices`:

- `create_invoices` (`write`): Crée une nouvelle facture.

  **Numérotation automatique:**

  - Si l'état est 'waiting', 'paid', 'notpaid' ou 'late', un numéro est automatiquement attribué
  - Le système verrouille la numérotation pendant l'attribution pour éviter les doublons
  - Un numéro d'enregistrement FEC (numberRecord) est aussi généré

  **Types de factures:**

  - `invoice`: Facture standard
  - `invoice_credit`: Avoir
  - `external`: Facture externe (client fournisseur)
  - `external_credit`: Avoir externe
  - `proforma`: Facture proforma
  - `advance`: Acompte

  **Calculs automatiques:**

  - Les totaux HT, TVA et TTC sont calculés automatiquement
  - Les réductions globales sont appliquées
  - La date d'échéance est calculée selon les paramètres de l'entreprise

  **Événements déclenchés:**

  - CREATE_INVOICE
  - Mise à jour du stock si nécessaire

  **Réponse:**

  - Inclut les liens `pdf_link` et `html_link` pour accéder aux documents

- `retrieve_invoices` (`read`): Récupère les détails complets d'une facture spécifique.

  Inclut toutes les informations: client, lignes, paiements, etc.

- `update_invoices` (`write`): Met à jour une facture existante.

  **Numérotation automatique:**

  - Si la facture passe de 'draft' à un état validé (waiting, paid, etc.), un numéro est automatiquement attribué
  - Le numéro est verrouillé pendant l'attribution pour éviter les doublons
  - Un numéro d'enregistrement FEC (numberRecord) est aussi généré

  **Restrictions:**

  - Une facture numérotée ne peut pas revenir en brouillon
  - Certaines modifications sont interdites sur les factures validées

  **Événements déclenchés:**

  - Mise à jour du stock si nécessaire
  - Logs de numérotation

- `list_invoices` (`read`): Récupère la liste des factures avec pagination, tri et filtres avancés.

  **Filtres disponibles:**

  - `state`: État de la facture (draft, waiting, paid, notpaid, late, inactive)
  - `type`: Type de facture (invoice, invoice_credit, external, external_credit, proforma, advance)
  - `client`: ID du client
  - `minDate` / `maxDate`: Plage de dates
  - `number`: Numéro de facture
  - `search`: Recherche textuelle

  **Réponse:**

  - `invoices`: Liste des factures
  - `total`: Nombre total de factures correspondantes
  - `skip` et `limit`: Paramètres de pagination

- `delete_invoices` (`write`): Supprime (désactive) une facture.

  **Restrictions:**

  - Seules les factures en brouillon non numérotées peuvent être supprimées
  - Une facture avec un numéro ou un numberRecord ne peut pas être supprimée
  - L'état passe à 'inactive' (soft delete)

  **Événement déclenché:** DELETE_INVOICE

- `create_credit_invoices` (`write`): Crée un avoir (facture d'avoir) lié à une facture existante.

  L'avoir reprend les informations de la facture d'origine avec des montants négatifs.

- `create_delivery_receipt_invoices` (`write`): Génère un bon de livraison (Receipt) à partir d'une facture.

  Le bon de livraison reprend les lignes de la facture.

- `create_package_invoices` (`write`): Génère une archive ZIP contenant les PDFs de plusieurs factures.

  **Comportement:**

  - Si le nombre de factures > seuil configuré ou `DEFERRED=true`, l'archive est générée en arrière-plan
  - Un objet Package est créé pour suivre la progression
  - Une fois terminé, l'archive est téléchargeable via GET /package/{uid}/download

  **Mode différé:**

  - Retourne immédiatement avec `newPackage` et un message
  - Le package passe par les états: created → finished (ou error)

- `get_logs_invoices` (`read`): Récupère les logs d'actions effectuées sur les factures (création, modification, envoi, etc.).

  Utile pour l'audit et le suivi des modifications.

- `get_stats_invoices` (`read`): Calcule et retourne des statistiques agrégées sur les factures.

  **Statistiques retournées:**

  - Totaux HT/TTC par état
  - Montants min/max
  - Répartition par type de facture

  Utilise les mêmes filtres que GET /invoices (state, type, client, dates, etc.)

- `get_turnover_invoices` (`read`): Calcule le chiffre d'affaires sur une période donnée.

  Basé sur les factures validées (état waiting, paid, late, notpaid).
  Exclut les avoirs et proformas.

- `list_payments_invoices` (`read`): Récupère la liste des paiements enregistrés sur les factures.

  **Filtres spécifiques aux paiements:**

  - `minDate` / `maxDate` / `date`: Date du paiement
  - `amount`: Montant du paiement
  - `method_name`: Nom du mode de paiement
  - `mode`: ID du mode de paiement

  **Réponse agrégée:**

  - `payments`: Liste des paiements avec informations de la facture associée
  - `count`: Nombre total de paiements
  - `total`: Somme des montants
  - `average`: Moyenne des montants

- `list_waiting_payments_invoices` (`read`): Récupère les factures qui sont en attente de paiement (état waiting ou late).

  **Réponse:**

  - `invoices`: Liste des factures en attente
  - `total`: Nombre de factures
  - `totalAmount`: Somme des montants restant à payer (total_nettopay)

- `record_payment_invoices` (`write`): Enregistre un paiement sur une facture en attente.

  **Restrictions:**

  - La facture doit être en état 'waiting'
  - Le mode de paiement doit exister et être actif

  **Comportement:**

  - Le paiement est ajouté à la liste `payments` de la facture
  - Le `total_nettopay` (reste à payer) est recalculé
  - Si le montant couvre le total, l'état passe à 'paid'
  - La `payment_date` est mise à jour

  **Événement déclenché:** PAYMENT_INVOICE

- `retrieve_logs_invoices` (`read`): Récupère l'historique des actions sur une facture spécifique.

  Inclut: création, modifications, numérotations, envois par email, etc.

- `send_email_invoices` (`write`): Envoie la facture par email au client.

  **Restrictions:**

  - La facture ne doit pas être en brouillon

  **Personnalisation:**

  - Utilise les modèles d'email configurés dans l'entreprise
  - Variables disponibles: [lien-html], [lien-pdf], [facture-numero], [facture-date], [contact-nom], etc.

  **Options:**

  - `action`: 'send_invoice' (envoi standard) ou 'dunning_invoice' (relance)
  - `joinPdf`: true pour joindre le PDF en pièce jointe
  - Possibilité de personnaliser subject, content, to, copyto, replyTo

### Resource `invoices.line`:

- `update_invoices_line` (`write`): Met à jour une ligne existante d'une facture.

  **Restrictions:**

  - La facture ne doit pas être numérotée (en brouillon uniquement)
  - Une facture validée ne peut pas être modifiée

  **Comportement:**

  - Les totaux de la facture sont automatiquement recalculés après modification
  - Seuls les champs fournis sont modifiés (mise à jour partielle)

  **Types de lignes:**

  - **product** : Ligne produit standard avec prix et quantité
  - **header** : Ligne de titre/séparation
  - **subtotal** : Sous-total automatique
  - **globalDiscount** : Remise globale

  **Événement déclenché:** UPDATE_INVOICE

- `delete_invoices_line` (`write`): Supprime une ligne d'une facture existante.

  **Restrictions:**

  - La facture ne doit pas être numérotée (en brouillon uniquement)
  - Une facture validée ne peut pas être modifiée

  **Comportement:**

  - Les totaux de la facture sont automatiquement recalculés après suppression
  - La ligne est définitivement supprimée (pas de soft delete)

  **Événement déclenché:** UPDATE_INVOICE

- `add_invoices_line` (`write`): Ajoute une nouvelle ligne à une facture existante.

  Les totaux sont automatiquement recalculés après l'ajout.

### Resource `quotes`:

- `create_quotes` (`write`): Crée un nouveau devis.

  **Numérotation automatique:**

  - Si l'état est 'pending', 'waiting', 'accepted', 'refused', 'invoiced' ou 'canceled', un numéro est automatiquement attribué
  - Le créateur (positionCreator) et l'assigné (positionAssigned) sont automatiquement définis

  **Types de documents:**

  - `quote`: Devis standard
  - `proforma`: Facture proforma
  - `bdc`: Bon de commande

  **Calculs automatiques:**

  - Les totaux HT, TVA et TTC sont calculés automatiquement

  **Événement déclenché:** CREATE_QUOTE

- `retrieve_quotes` (`read`): Récupère les détails complets d'un devis spécifique.

  **Réponse enrichie:**

  - Inclut les liens `pdf_link` et `html_link` pour accéder aux documents

- `update_quotes` (`write`): Met à jour un devis existant.

  **Numérotation automatique:**

  - Si le devis passe de 'draft' à un état validé (pending, waiting, accepted, etc.), un numéro est automatiquement attribué
  - La date est mise à jour automatiquement lors de la numérotation

  **Événement déclenché:** UPDATE_QUOTE

- `list_quotes` (`read`): Récupère la liste des devis avec pagination, tri et filtres.

  **Filtres disponibles:**

  - `state`: État du devis (draft, pending, waiting, accepted, refused, invoiced, canceled, inactive)
  - `type`: Type de document (quote, proforma, bdc)
  - `client`: ID du client
  - `minDate` / `maxDate`: Plage de dates
  - `number`: Numéro du devis
  - `search`: Recherche textuelle

  **Réponse:**

  - `quotes`: Liste des devis
  - `total`: Nombre total de devis correspondants
  - `skip` et `limit`: Paramètres de pagination

- `delete_quotes` (`write`): Supprime (désactive) un devis.

  **Comportement:**

  - L'état passe à 'inactive' (soft delete)
  - Déclenche un événement DELETE_QUOTE

- `create_advance_invoice_quotes` (`write`): Génère une facture d'acompte à partir d'un devis.

  **Options:**

  - Spécifier un montant ou un pourcentage de l'acompte
  - L'acompte est lié au devis d'origine

- `create_delivery_receipt_quotes` (`write`): Génère un bon de livraison à partir d'un devis.

  Le bon de livraison reprend les lignes du devis.

- `create_invoice_quotes` (`write`): Transforme un devis en facture.

  **Comportement:**

  - Crée une facture reprenant toutes les informations du devis
  - Le devis passe à l'état 'invoiced'
  - La facture est créée avec numérotation automatique

- `create_invoice_from_quote_quotes` (`write`): Génère une facture de solde à partir d'un devis.

  **Comportement:**

  - Crée une facture reprenant les lignes du devis
  - Déduit les acomptes déjà facturés
  - Le devis passe à l'état 'invoiced'

- `create_package_quotes` (`write`): Génère une archive ZIP contenant les PDFs de plusieurs devis.

  **Comportement:**

  - Si le nombre de devis > seuil configuré ou `DEFERRED=true`, l'archive est générée en arrière-plan
  - Un objet Package est créé pour suivre la progression
  - Une fois terminé, l'archive est téléchargeable via GET /package/{uid}/download

- `create_proforma_invoice_quotes` (`write`): Génère une facture proforma à partir d'un devis.

  La proforma est une facture sans valeur comptable utilisée comme document préliminaire.

- `create_purchase_order_quotes` (`write`): Transforme un devis en bon de commande (BDC).

  Le bon de commande est un document confirmant la commande avant facturation.

- `generate_html_quotes` (`read`): Génère et retourne le contenu HTML d'un devis.

  **Utilisation:**

  - Prévisualisation dans un navigateur
  - Intégration dans une iframe
  - Base pour la génération PDF

  **Format de réponse:**

  - Type MIME: text/html
  - HTML complet avec styles CSS intégrés

- `generate_pdf_quotes` (`read`): Génère et retourne le fichier PDF d'un devis.

  **Comportement:**

  - Utilise le modèle de document configuré pour l'entreprise
  - Le PDF inclut toutes les informations du devis (client, lignes, totaux)
  - Le rendu est optimisé pour l'impression

  **Format de réponse:**

  - Type MIME: application/pdf
  - Le fichier est retourné en téléchargement direct

- `generate_pdf_chromium_quotes` (`read`): Génère et retourne le fichier PDF d'un devis en utilisant le moteur de rendu Chromium.

  **Différences avec /pdf:**

  - Rendu plus fidèle aux navigateurs modernes
  - Meilleure gestion des polices et des styles CSS complexes
  - Temps de génération légèrement plus long

  **Utilisation recommandée:**

  - Documents avec mise en page complexe
  - Besoin d'un rendu identique au navigateur

- `get_logs_quotes` (`read`): Récupère les logs d'actions effectuées sur tous les devis.
- `get_stats_quotes` (`read`): Calcule et retourne des statistiques agrégées sur les devis.

  **Statistiques retournées:**

  - Totaux HT/TTC par état
  - Montants min/max
  - Répartition par type de devis

  Utilise les mêmes filtres que GET /quotes.

- `retrieve_logs_quotes` (`read`): Récupère l'historique des actions sur un devis spécifique.

### Resource `quotes.line`:

- `update_quotes_line` (`write`): Met à jour une ligne existante d'un devis.

  **Comportement:**

  - Les totaux du devis sont automatiquement recalculés après modification
  - Seuls les champs fournis sont modifiés (mise à jour partielle)

  **Types de lignes:**

  - **product** : Ligne produit standard avec prix et quantité
  - **header** : Ligne de titre/séparation
  - **subtotal** : Sous-total automatique
  - **globalDiscount** : Remise globale

  **Événement déclenché:** UPDATE_QUOTE

- `delete_quotes_line` (`write`): Supprime une ligne d'un devis existant.

  **Comportement:**

  - Les totaux du devis sont automatiquement recalculés après suppression
  - La ligne est définitivement supprimée (pas de soft delete)

  **Événement déclenché:** UPDATE_QUOTE

- `add_quotes_line` (`write`): Ajoute une nouvelle ligne à un devis existant.

  Les totaux sont automatiquement recalculés après l'ajout.

### Resource `payment_methods`:

- `create_payment_methods` (`write`): Crée un nouveau moyen de paiement pour l'entreprise.

  ## Types de moyens de paiement

  Le champ `tag` définit le type de moyen de paiement et détermine les champs additionnels requis :

  - **check** : Chèque (pas de champs supplémentaires)
  - **transfer** : Virement bancaire (utilisez `modality` pour les coordonnées bancaires)
  - **stripe** : Stripe (`public` pour la clé publique, `secret` pour la clé secrète)
  - **paypal** : PayPal (`public` pour l'identifiant marchand)
  - **paybox** : Paybox (`public`, `secret`, `rang`, `site`)
  - **epayment** : Paiement électronique générique
  - **other** : Autre

  ## Mode test

  Utilisez `isTest: true` pour créer un moyen de paiement en mode test.
  Les paiements effectués avec ce moyen ne seront pas réellement débités.

  ## Moyen par défaut

  Si `default: true`, ce moyen sera automatiquement sélectionné pour les nouveaux documents.

- `retrieve_payment_methods` (`read`): Récupère les informations détaillées d'un moyen de paiement par son identifiant.

  Les informations incluent le nom, le type (tag), les modalités de paiement
  et si c'est le moyen par défaut.

- `update_payment_methods` (`write`): Met à jour un moyen de paiement existant.

  ## Définir comme défaut

  Si vous définissez `default: true`, ce moyen deviendra le moyen par défaut
  pour les nouveaux documents. L'ancien moyen par défaut sera automatiquement
  désélectionné.

  ## Désactivation

  Utilisez `state: "inactive"` pour masquer un moyen de paiement sans le supprimer.
  Les documents existants utilisant ce moyen ne seront pas affectés.

- `list_payment_methods` (`read`): Récupère la liste de tous les moyens de paiement configurés pour l'entreprise.

  Les moyens de paiement sont utilisés sur les factures et devis pour indiquer
  au client comment régler sa facture.

  ## Types de moyens de paiement (tags)

  - **check** : Chèque
  - **transfer** : Virement bancaire
  - **paybox** : Paiement Paybox
  - **stripe** : Paiement Stripe
  - **paypal** : Paiement PayPal
  - **epayment** : Paiement électronique générique
  - **other** : Autre moyen de paiement

  ## Moyen de paiement par défaut

  Un seul moyen peut être défini comme "default" et sera automatiquement
  sélectionné lors de la création de nouveaux documents.

- `delete_payment_methods` (`write`): Supprime un moyen de paiement (soft delete).

  Le moyen passe en état "inactive" et n'est plus proposé pour les nouveaux documents.

  **Note** : Il est recommandé d'utiliser PATCH avec `state: "inactive"` plutôt que DELETE
  pour conserver l'historique des documents utilisant ce moyen.

### Resource `delivery_receipts`:

- `create_delivery_receipts` (`write`): Crée un nouveau bon de livraison.

  ## Numérotation automatique

  Le numéro est attribué automatiquement lorsque le bon passe en état validé
  (waiting, shipped, delivered). Un bon en brouillon (draft) n'a pas de numéro.

  ## Structure des lignes

  Les lignes peuvent être de deux types :

  - **product** : Ligne produit avec quantité, référence, poids
  - **header** : Ligne de séparation/titre pour organiser le bon

  ## Lien avec devis/facture

  Vous pouvez créer un bon de livraison depuis un devis via `/quote/{uid}/delivery-receipt`
  ou depuis une facture via `/invoice/{uid}/delivery-receipt`.

  ## Événement déclenché

  Un événement `CREATE_RECEIPT` est émis après la création.

- `retrieve_delivery_receipts` (`read`): Récupère les informations détaillées d'un bon de livraison par son identifiant.

  Les informations retournées incluent :

  - Les informations client (nom, adresse, email, etc.)
  - Les lignes du bon (produits, quantités, poids)
  - L'état actuel du bon (brouillon, en attente, expédié, livré, etc.)
  - Les dates importantes (création, expédition)
  - Les liens vers le PDF et la version HTML

- `update_delivery_receipts` (`write`): Met à jour un bon de livraison existant.

  ## Gestion de la numérotation

  Si le bon passe à un état "validé" (waiting, shipped, delivered) et n'a pas encore de numéro,
  un numéro officiel est automatiquement attribué via le système de numérotation.

  ## États disponibles

  - **draft** : Brouillon (modifiable librement)
  - **waiting** : En attente d'expédition
  - **shipped** : Expédié
  - **delivered** : Livré
  - **refused** : Refusé par le client
  - **canceled** : Annulé
  - **inactive** : Supprimé (soft delete)

  ## Événement déclenché

  Un événement `UPDATE_RECEIPT` est émis après la mise à jour.

- `list_delivery_receipts` (`read`): Récupère la liste des bons de livraison avec pagination, tri et filtres.

  **Filtres disponibles:**

  - `state`: État du bon de livraison
  - `client`: ID du client
  - `minDate` / `maxDate`: Plage de dates

  **Réponse:**

  - `receipts`: Liste des bons de livraison
  - `total`: Nombre total
  - `skip` et `limit`: Paramètres de pagination

- `delete_delivery_receipts` (`write`): Supprime un bon de livraison (soft delete).

  Le bon passe en état "inactive" et n'est plus visible dans les listes standards.

  ## Événement déclenché

  Un événement `DELETE_RECEIPT` est émis après la suppression.

- `create_invoice_delivery_receipts` (`write`): Transforme un bon de livraison en facture.

  ## Processus de transformation

  Cette route crée une nouvelle facture en copiant les informations du bon de livraison :

  - Informations client (nom, adresse, etc.)
  - Lignes du bon (produits, quantités)

  ## Cas d'usage

  Utile pour facturer après livraison :

  1. Créer un devis
  2. Créer un bon de livraison depuis le devis
  3. Livrer au client
  4. Créer la facture depuis le bon de livraison

  ## Événement déclenché

  Un événement `CREATE_INVOICE` est émis après la création de la facture.

- `generate_html_delivery_receipts` (`read`): Génère et retourne le rendu HTML du bon de livraison.

  Cette route est utile pour :

  - Prévisualiser le bon avant génération PDF
  - Intégrer le contenu dans une page web
  - Personnaliser l'affichage

  ## Réponse

  La réponse inclut :

  - **template** : Le HTML complet du bon de livraison
  - **metadata** : Les informations clés du bon (client, numéro, dates, etc.)

- `generate_pdf_delivery_receipts` (`read`): Génère et retourne le PDF du bon de livraison.

  Le PDF est généré à partir du modèle de document configuré pour l'entreprise
  et inclut toutes les informations du bon : client, lignes, dates, etc.

  ## Paramètres de téléchargement

  - Par défaut, le PDF s'affiche dans le navigateur (inline)
  - Utilisez `force_download=true` pour forcer le téléchargement

  ## Format de sortie

  - Content-Type: application/pdf
  - Content-Disposition: filename={numero_bon}.pdf

### Resource `absence_types`:

- `create_absence_types` (`write`): Crée un nouveau type d'absence pour l'entreprise.

  Les types d'absence permettent de catégoriser les demandes d'absence des collaborateurs.
  Exemples de types courants :

  - Congés payés
  - RTT
  - Congé maladie
  - Télétravail
  - Formation
  - Événement client

  Vous pouvez personnaliser l'apparence de chaque type avec une icône et des couleurs
  pour faciliter la lecture du calendrier d'équipe.

- `retrieve_absence_types` (`read`): Récupère les informations détaillées d'un type d'absence spécifique par son identifiant.

  Les informations incluent le nom, l'icône, les couleurs d'affichage et la catégorie (absence ou event).

- `update_absence_types` (`write`): Met à jour les informations d'un type d'absence existant.

  Vous pouvez modifier :

  - Le nom affiché
  - L'icône représentative
  - Les couleurs (fond et texte) pour la visualisation calendrier
  - L'état (active/inactive) pour masquer sans supprimer

  **Note** : Désactiver un type n'affecte pas les absences déjà créées avec ce type.

- `list_absence_types` (`read`): Récupère la liste de tous les types d'absence configurés pour l'entreprise.

  Les types d'absence permettent de catégoriser les absences (congés payés, RTT, maladie, télétravail, etc.).
  Chaque type peut avoir une icône et des couleurs personnalisées pour une meilleure visualisation dans le calendrier.

  Les types peuvent être de deux catégories :

  - **absence** : Congés, RTT, maladie, etc.
  - **event** : Événements comme les formations, réunions, etc.

- `delete_absence_types` (`write`): Supprime un type d'absence.

  **Attention** : Cette action est définitive. Pour masquer un type sans le supprimer,
  utilisez plutôt PATCH avec `state: "inactive"`.

  La suppression peut échouer si des absences sont liées à ce type.

### Resource `absences`:

- `create_absences` (`write`): Crée une nouvelle demande d'absence pour un collaborateur.

  ## Workflow de validation

  Par défaut, l'absence est créée en état "waiting" (en attente de validation).
  Le responsable peut ensuite la valider ("accepted") ou la refuser ("rejected").

  ## Gestion des demi-journées

  Les absences supportent les demi-journées :

  - Utilisez `from_moment` et `to_moment` avec les valeurs "full", "half-am" ou "half-pm"
  - Exemple : absence du lundi après-midi au mercredi matin

  ## Résolution automatique du collaborateur

  Si vous fournissez uniquement `positionTo` sans `userTo`,
  l'API récupère automatiquement l'utilisateur associé au poste.

  ## Événement déclenché

  Un événement `CREATE_ABSENCE` est émis après la création,
  permettant de notifier les responsables de la nouvelle demande.

- `retrieve_absences` (`read`): Récupère les informations détaillées d'une absence spécifique.

  Les informations incluent :

  - Les dates et moments (matin/après-midi/journée entière)
  - Le type d'absence
  - L'état actuel (en attente, validée, refusée, etc.)
  - L'historique complet des actions (logs)
  - Le collaborateur et son poste concernés

- `update_absences` (`write`): Met à jour une absence existante.

  ## Cas d'utilisation courants

  - **Validation/Refus** : Changer le state vers "accepted" ou "rejected"
  - **Modification des dates** : Ajuster la période d'absence
  - **Annulation** : Passer en state "canceled"

  ## Système de logs

  Chaque modification est tracée dans l'historique (logs).
  Vous pouvez ajouter un commentaire et/ou une pièce jointe à chaque action.

  Les logs enregistrent automatiquement :

  - La date de l'action
  - Le poste ayant effectué l'action
  - La méthode HTTP utilisée
  - L'état résultant

  ## Événement déclenché

  Un événement `UPDATE_ABSENCE` est émis après la mise à jour,
  permettant de notifier le collaborateur des changements.

- `list_absences` (`read`): Récupère la liste des absences de l'entreprise avec de nombreuses options de filtrage.

  Cette route est particulièrement utile pour :

  - Afficher le calendrier des absences d'équipe
  - Filtrer les absences par collaborateur ou période
  - Obtenir les absences du jour (pour un dashboard RH)

  ## Filtres de période

  Plusieurs modes de filtrage temporel sont disponibles :

  - **month + year** : Absences sur un mois calendaire (avec marge du mois précédent/suivant)
  - **today** : Absences en cours aujourd'hui (distingue matin/après-midi)
  - **from / to** : Filtrer par date de début ou fin exacte
  - **inPeriod** : Absences chevauchant une période donnée

  ## Gestion des demi-journées

  Les absences peuvent commencer ou finir en demi-journée :

  - **full** : Journée entière
  - **half-am** : Matin uniquement
  - **half-pm** : Après-midi uniquement

- `delete_absences` (`write`): Supprime une absence (soft delete).

  L'absence n'est pas physiquement supprimée mais passe en état "inactive".
  Un log de suppression est automatiquement ajouté à l'historique.

  ## Traçabilité

  La suppression enregistre :

  - La date de suppression
  - Le poste ayant effectué l'action
  - L'état précédent de l'absence

  ## Événement déclenché

  Un événement `DELETE_ABSENCE` est émis, permettant de notifier
  le collaborateur de l'annulation de sa demande.

### Resource `companies`:

- `create_companies` (`write`): Crée une nouvelle entreprise.

  **Comportement:**

  - L'URL est rendue unique automatiquement si elle existe déjà
  - Un CompanyApp est créé automatiquement avec des options par défaut
  - Si créée via une application, une Application d'accès est automatiquement générée

  **Restrictions:**

  - Ne peut pas être créée depuis une version API

  **Événement déclenché:** CREATE_COMPANY

- `retrieve_companies` (`read`): Retourne les informations de l'entreprise associée à la requête authentifiée.
- `update_companies` (`write`): Met à jour les informations d'une entreprise.

  **Restrictions:**

  - Le domaine d'envoi d'email est automatiquement extrait de emailExpeditor

  **Événement déclenché:** UPDATE_COMPANY

- `list_companies` (`read`): Récupère la liste des entreprises avec pagination, tri et filtres.

  **Filtres disponibles:**

  - `search`: Recherche par nom d'entreprise
  - `version` / `versions`: Filtre par version(s)
  - `email`: Filtre par email
  - `url`: Filtre par URL unique
  - `createdAt` / `createdAtMin` / `createdAtMax`: Filtre par date de création

- `delete_companies` (`write`): Supprime (désactive) une entreprise.

  **Restrictions:**

  - L'utilisateur doit être administrateur de l'entreprise
  - L'état passe à 'inactive' (soft delete)

  **Événement déclenché:** DELETE_COMPANY

- `confirm_domain_companies` (`write`): Confirme la vérification du domaine personnalisé pour l'entreprise.

  **Prérequis:**

  - Un email de confirmation a été envoyé via `/send-domain-confirm`
  - L'utilisateur doit cliquer sur le lien de confirmation

  **Comportement:**

  - Marque le domaine comme vérifié
  - Active les fonctionnalités liées au domaine personnalisé (envoi d'emails, etc.)

- `list_positions_companies` (`read`): Récupère la liste de tous les postes (positions) d'une entreprise.

  **Informations retournées:**

  - Liste des postes avec utilisateur, type et droits
  - Inclut les postes actifs et inactifs

  **Utilisation:**

  - Administration des accès utilisateurs
  - Gestion des droits et permissions

- `retrieve_by_id_companies` (`read`): Récupère les détails d'une entreprise spécifique.
- `retrieve_cgv_companies` (`read`): Récupère les conditions générales de vente (CGV) configurées pour l'entreprise.

  **Réponse:**

  - `cgv` : Texte des CGV personnalisées
  - `cgv_link` : Lien vers un document externe de CGV
  - `cgv_wuro` : Indique si les CGV par défaut de Wuro sont utilisées

  **Utilisation:**

  - Affichage sur les devis et factures
  - Page de mentions légales

- `retrieve_container_stats_companies` (`read`): Récupère les statistiques d'utilisation du stockage pour l'entreprise courante.

  **Informations retournées:**

  - `containerSize` : Taille totale du conteneur de stockage (en octets)
  - `containerPrivateSize` : Taille du stockage privé (en octets)

  **Utilisation:**

  - Affichage de l'espace utilisé
  - Gestion des quotas de stockage

- `retrieve_extra_infos_companies` (`read`): Récupère les informations complètes d'une entreprise, incluant les données Company et CompanyApp.

  **Informations retournées:**

  - `company` : Données de l'entreprise (coordonnées, paramètres légaux, etc.)
  - `companyApp` : Données applicatives (modules, quotas, configuration)

  **Utilisation:**

  - Affichage complet des paramètres entreprise
  - Administration et configuration

- `search_by_sirene_companies` (`read`): Recherche une entreprise française via l'API SIRENE de l'INSEE.

  **Utilisation:**

  - Permet de pré-remplir les informations d'une entreprise à partir de son nom
  - Retourne les établissements actifs correspondant à la recherche

  **Données retournées:**

  - SIREN, SIRET, NIC
  - Raison sociale
  - Adresse complète
  - Code NAF/APE

- `send_domain_confirmation_companies` (`write`): Envoie un email de confirmation pour vérifier le domaine personnalisé de l'entreprise.

  **Fonctionnement:**

  - Un email est envoyé à l'adresse associée au domaine
  - L'email contient un lien de confirmation
  - La confirmation permet d'activer le domaine personnalisé

  **Utilisation:**

  - Configuration initiale du domaine
  - Renvoi du mail de confirmation si expiré

### Resource `companies.app_infos`:

- `retrieve_companies_app_infos` (`read`): Récupère les informations applicatives (CompanyApp) de l'entreprise actuellement sélectionnée.

  **Informations retournées:**

  - Configuration de l'application
  - Modules activés
  - Limites et quotas
  - Paramètres de personnalisation

- `retrieve_by_id_companies_app_infos` (`read`): Récupère les informations applicatives (CompanyApp) d'une entreprise spécifique.

  **Informations retournées:**

  - Configuration de l'application
  - Modules activés
  - Limites et quotas
  - Paramètres de personnalisation

### Resource `companies.position`:

- `create_companies_position` (`write`): Crée un nouveau poste (position) pour un utilisateur dans l'entreprise.

  **Concept de Position:**

  - Un poste représente le lien entre un utilisateur et une entreprise
  - Chaque poste définit un type (admin, collaborateur, etc.) et des droits spécifiques
  - Un utilisateur peut avoir des postes dans plusieurs entreprises

  **Champs requis:**

  - `user` : Identifiant de l'utilisateur à ajouter
  - `type` : Type de poste (référence vers un Type de droits)

  **Événement déclenché:** CREATE_POSITION

- `update_companies_position` (`write`): Met à jour un poste (position) existant dans une entreprise.

  **Modifications possibles:**

  - Changer le type de poste
  - Modifier les droits spécifiques
  - Activer/désactiver le poste

  **États du poste:**

  - `active` : Poste actif, l'utilisateur a accès à l'entreprise
  - `inactive` : Poste désactivé, accès révoqué

  **Événement déclenché:** UPDATE_POSITION

### Resource `clients`:

- `create_clients` (`write`): Crée un nouveau client pour l'entreprise.

  ## Champs obligatoires

  Seul le nom (`name`) est obligatoire. Tous les autres champs sont optionnels.

  ## Code client automatique

  Si vous ne fournissez pas de code client (`code`), un code unique sera généré automatiquement.

  ## Validation TVA

  Si vous fournissez un numéro de TVA intracommunautaire, celui-ci sera validé.

  ## Événement déclenché

  Un événement `CREATE_CLIENT` est émis après la création.

- `retrieve_clients` (`read`): Récupère les informations détaillées d'un client par son identifiant.

  Les informations incluent :

  - Coordonnées (nom, adresse, email, téléphone)
  - Informations fiscales (SIRET, TVA intracommunautaire)
  - Conditions commerciales (remise par défaut, délai de paiement)
  - Statistiques (CA, nombre de factures, etc.)

- `update_clients` (`write`): Met à jour les informations d'un client existant.

  Vous pouvez modifier :

  - Les coordonnées (nom, adresse, contacts)
  - Les informations fiscales (SIRET, TVA)
  - Les conditions commerciales
  - L'état (active/inactive pour archiver)

  ## Événement déclenché

  Un événement `UPDATE_CLIENT` est émis après la mise à jour.

- `list_clients` (`read`): Récupère la liste de tous les clients de l'entreprise avec pagination, tri et recherche.

  ## Recherche

  Le paramètre `search` permet une recherche textuelle dans :

  - Le nom du client
  - L'email
  - Le numéro de téléphone
  - Le code client

  ## Tri

  Utilisez `sort` avec le format `champ:direction` où direction est 1 (asc) ou -1 (desc).
  Exemples : "name:1", "createdAt:-1"

- `delete_clients` (`write`): Supprime un client (soft delete).

  Le client passe en état "inactive" et n'apparaît plus dans les listes standards.
  Les documents existants (factures, devis) associés à ce client sont conservés.

  ## Événement déclenché

  Un événement `DELETE_CLIENT` est émis après la suppression.

- `import_from_csv_clients` (`write`): Importe une liste de clients à partir d'un fichier CSV.

  **Format du fichier CSV:**

  - Le fichier doit être encodé en UTF-8
  - La première ligne doit contenir les en-têtes des colonnes
  - Séparateur de colonnes : point-virgule (;) ou virgule (,)

  **Colonnes supportées:**

  - `name` : Nom du client (obligatoire)
  - `email` : Adresse email
  - `phone` : Numéro de téléphone
  - `address` : Adresse postale
  - `city` : Ville
  - `zip_code` : Code postal
  - `country` : Pays
  - `code` : Code client
  - `siren` : Numéro SIREN
  - `tva_intracom` : Numéro de TVA intracommunautaire

  **Comportement:**

  - Les clients existants (basé sur l'email ou le code) sont mis à jour
  - Les nouveaux clients sont créés
  - Un rapport d'import est retourné

  **Télécharger un modèle:**

  - GET /files/clients.csv pour obtenir un fichier modèle

- `merge_clients` (`write`): Fusionne deux fiches clients en une seule.

  **Fonctionnement:**

  - Le client `source` est fusionné dans le client `target`
  - Toutes les factures, devis et documents du client source sont transférés au client cible
  - Le client source est supprimé après la fusion

  **Transfert des données:**

  - Factures et devis
  - Historique des paiements
  - Notes et commentaires
  - Interlocuteurs

  **Attention:**

  - Cette opération est irréversible
  - Les informations du client source qui diffèrent ne sont pas copiées (seuls les documents sont transférés)

  **Événement déclenché:** MERGE_CLIENT

### Resource `products`:

- `create_products` (`write`): Crée un nouveau produit dans le catalogue.

  ## Champs principaux

  - **name** : Nom du produit (obligatoire)
  - **reference** : Référence/code article
  - **price** : Prix unitaire HT
  - **vat** : Taux de TVA (ex. 20, 10, 5.5)
  - **unit** : Unité de vente (ex. "pièce", "heure", "kg")

  ## Catégories

  Vous pouvez associer le produit à une ou plusieurs catégories
  en utilisant le champ `categories` (tableau d'IDs).

  ## Variantes

  Les produits peuvent avoir des variantes (taille, couleur, etc.)
  qui sont gérées séparément via `/product-variants`.

  ## Événement déclenché

  Un événement `CREATE_PRODUCT` est émis après la création.

- `retrieve_products` (`read`): Récupère les informations détaillées d'un produit par son identifiant.

  Les informations incluent :

  - Informations de base (nom, référence, description)
  - Prix et TVA
  - Unités de vente et conditionnement
  - Catégorie(s) associée(s)
  - Variantes si existantes

- `update_products` (`write`): Met à jour les informations d'un produit existant.

  Vous pouvez modifier :

  - Les informations de base (nom, référence, description)
  - Les prix et TVA
  - Les unités de vente
  - Les catégories

  ## Événement déclenché

  Un événement `UPDATE_PRODUCT` est émis après la mise à jour.

- `list_products` (`read`): Récupère la liste de tous les produits du catalogue avec pagination, tri et recherche.

  ## Recherche

  Le paramètre `search` permet une recherche textuelle dans :

  - Le nom du produit
  - La référence
  - La description

  ## Filtrage par catégorie

  Utilisez `category` pour filtrer par catégorie de produit.

  ## Tri

  Utilisez `sort` avec le format `champ:direction` où direction est 1 (asc) ou -1 (desc).

- `delete_products` (`write`): Supprime un produit (soft delete).

  Le produit passe en état "inactive" et n'apparaît plus dans les listes standards.
  Les documents existants (factures, devis) utilisant ce produit conservent les informations.

  ## Événement déclenché

  Un événement `DELETE_PRODUCT` est émis après la suppression.

- `import_from_csv_products` (`write`): Importe une liste de produits à partir d'un fichier CSV.

  **Format du fichier CSV:**

  - Le fichier doit être encodé en UTF-8
  - La première ligne doit contenir les en-têtes des colonnes
  - Séparateur de colonnes : point-virgule (;) ou virgule (,)

  **Colonnes supportées:**

  - `name` : Nom du produit (obligatoire)
  - `reference` : Référence produit
  - `description` : Description
  - `price_ht` : Prix unitaire HT
  - `tva_rate` : Taux de TVA
  - `unit` : Unité de mesure
  - `category` : Nom de la catégorie
  - `stock` : Quantité en stock

  **Comportement:**

  - Les produits existants (basé sur la référence) sont mis à jour
  - Les nouveaux produits sont créés
  - Les catégories inexistantes sont créées automatiquement

  **Télécharger un modèle:**

  - GET /files/products.csv pour obtenir un fichier modèle

- `list_variants_products` (`read`): Récupère la liste des variantes associées à un produit spécifique.

### Resource `products.variant`:

- `create_products_variant` (`write`): Crée une nouvelle variante pour un produit existant.

  **Exemples de variantes:**

  - Tailles : S, M, L, XL
  - Couleurs : Rouge, Bleu, Vert
  - Options : Avec option A, Sans option A

  **Propriétés personnalisables:**

  - Prix spécifique à la variante
  - Stock propre à la variante
  - Référence distincte

  **Événement déclenché:** CREATE_PRODUCT_VARIANT

- `retrieve_products_variant` (`read`): Récupère les détails d'une variante de produit spécifique.
- `update_products_variant` (`write`): Met à jour une variante de produit existante.

  **Modifications possibles:**

  - Prix de la variante
  - Stock
  - Référence
  - Attributs de la variante

  **Événement déclenché:** UPDATE_PRODUCT_VARIANT

- `list_products_variant` (`read`): Récupère la liste de toutes les variantes de produits de l'entreprise.

  **Concept de variante:**

  - Une variante est une déclinaison d'un produit (taille, couleur, etc.)
  - Chaque variante peut avoir son propre prix et stock
  - Les variantes héritent des propriétés du produit parent

  **Utilisation:**

  - Gestion des déclinaisons produit
  - Suivi du stock par variante

- `delete_products_variant` (`write`): Supprime une variante de produit.

  **Attention:**

  - Cette opération est irréversible
  - La variante ne sera plus disponible à la vente

  **Événement déclenché:** DELETE_PRODUCT_VARIANT

### Resource `product_categories`:

- `create_product_categories` (`write`): Crée une nouvelle catégorie pour organiser les produits.

  **Champs requis:**

  - `name` : Nom de la catégorie

  **Événement déclenché:** CREATE_PRODUCT_CATEGORY

- `retrieve_product_categories` (`read`): Récupère les détails d'une catégorie de produit spécifique.
- `update_product_categories` (`write`): Met à jour une catégorie de produit existante.

  **Modifications possibles:**

  - Renommer la catégorie
  - Activer/désactiver la catégorie

  **États:**

  - `active` : Catégorie visible et utilisable
  - `inactive` : Catégorie masquée

- `list_product_categories` (`read`): Récupère la liste de toutes les catégories de produits de l'entreprise.

  **Utilisation:**

  - Organisation du catalogue produits
  - Filtrage des produits par catégorie
  - Rapports et statistiques par catégorie

- `delete_product_categories` (`write`): Supprime une catégorie de produit.

  **Attention:**

  - Les produits associés à cette catégorie ne seront plus catégorisés
  - Cette opération est irréversible

### Resource `purchases`:

- `create_purchases` (`write`): Crée un nouvel achat (facture fournisseur).

  ## Champs principaux

  - **supplier** : Référence du fournisseur
  - **supplier_name** : Nom du fournisseur
  - **date** : Date de l'achat
  - **lines** : Lignes de l'achat (produits/services)

  ## États disponibles

  L'achat peut être créé directement en état :

  - **draft** : Brouillon
  - **waiting** : En attente
  - **paid** : Déjà payé

  ## Événement déclenché

  Un événement `CREATE_PURCHASE` est émis après la création.

- `retrieve_purchases` (`read`): Récupère les informations détaillées d'un achat par son identifiant.

  Les informations incluent :

  - Informations du fournisseur
  - Lignes de l'achat (produits/services, quantités, prix)
  - Montants (HT, TVA, TTC)
  - État et échéances de paiement

- `update_purchases` (`write`): Met à jour un achat existant.

  Vous pouvez modifier :

  - Les informations fournisseur
  - Les lignes de l'achat
  - Les dates et échéances
  - L'état (pour marquer comme payé, etc.)

  ## Événement déclenché

  Un événement `UPDATE_PURCHASE` est émis après la mise à jour.

- `list_purchases` (`read`): Récupère la liste de tous les achats/factures fournisseurs avec pagination et filtres.

  Les achats permettent de suivre les dépenses de l'entreprise (factures fournisseurs,
  notes de frais, etc.).

  ## États disponibles

  - **draft** : Brouillon (pas encore validé)
  - **waiting** : En attente de paiement
  - **to_pay** : À payer
  - **paid** : Payé
  - **notpaid** : Impayé (échéance dépassée)
  - **inactive** : Supprimé (soft delete)

- `delete_purchases` (`write`): Supprime un achat (soft delete).

  L'achat passe en état "inactive" et n'apparaît plus dans les listes standards.

  ## Événement déclenché

  Un événement `DELETE_PURCHASE` est émis après la suppression.

- `create_credit_purchases` (`write`): Crée un avoir (note de crédit) lié à un achat existant.

  **Fonctionnement:**

  - L'avoir reprend les informations de l'achat d'origine avec des montants négatifs
  - L'avoir est automatiquement lié à l'achat parent
  - Le solde de l'achat est recalculé

  **Utilisation:**

  - Remboursement d'une facture fournisseur
  - Correction d'une erreur de facturation

  **Événement déclenché:** CREATE_PURCHASE_CREDIT

- `get_stats_purchases` (`read`): Récupère des statistiques agrégées sur les achats de l'entreprise.

  Les statistiques incluent généralement :

  - Total des achats par période
  - Répartition par fournisseur
  - Montants en attente de paiement

### Resource `purchase_categories`:

- `create_purchase_categories` (`write`): Crée une nouvelle catégorie pour organiser les achats/dépenses.

  **Exemples de catégories:**

  - Fournitures de bureau
  - Services externes
  - Frais de déplacement
  - Abonnements

  **Champs requis:**

  - `name` : Nom de la catégorie

  **Événement déclenché:** CREATE_PURCHASE_CATEGORY

- `retrieve_purchase_categories` (`read`): Récupère les détails d'une catégorie d'achat spécifique.
- `update_purchase_categories` (`write`): Met à jour une catégorie d'achat existante.

  **Modifications possibles:**

  - Renommer la catégorie
  - Activer/désactiver la catégorie

  **États:**

  - `active` : Catégorie visible et utilisable
  - `inactive` : Catégorie masquée

- `list_purchase_categories` (`read`): Récupère la liste de toutes les catégories d'achats de l'entreprise.

  **Utilisation:**

  - Organisation des dépenses par type (fournitures, services, etc.)
  - Ventilation comptable des achats
  - Rapports et statistiques par catégorie

- `delete_purchase_categories` (`write`): Supprime une catégorie d'achat.

  **Attention:**

  - Les achats associés à cette catégorie ne seront plus catégorisés
  - Cette opération est irréversible

### Resource `users`:

- `create_users` (`write`): Crée un nouveau compte utilisateur.

  **Important:**

  - Le mot de passe est obligatoire
  - Par défaut, l'utilisateur sera automatiquement supprimé après 24h si `auto_deletion` n'est pas défini à 'migration'
  - L'état initial est 'created' (en attente de confirmation)

- `retrieve_users` (`read`): Retourne les informations de l'utilisateur actuellement authentifié.
  Utile pour obtenir le profil de l'utilisateur après connexion.
- `update_users` (`write`): Met à jour les informations d'un utilisateur.

  **Restrictions:**

  - L'email ne peut pas être modifié via cette route
  - Le mot de passe ne peut pas être modifié via cette route (utiliser /auth/password/reset)
  - Déclenche un événement UPDATE_USER

- `list_users` (`read`): Récupère la liste des utilisateurs avec pagination et filtrage.

  **Filtres disponibles:**

  - `company`: Filtre par entreprise (ID de la company)
  - `search`: Recherche dans l'email, prénom et nom

  **Réponse:**

  - `users`: Liste des utilisateurs
  - `total`: Nombre total d'utilisateurs correspondants
  - `skip` et `limit`: Paramètres de pagination utilisés

- `delete_users` (`write`): Supprime (désactive) l'utilisateur actuellement connecté.

  **Note:** L'utilisateur n'est pas réellement supprimé, son état passe à 'inactive'.
  Réservé à l'utilisateur système 'geswuro'.

- `deactivate_users` (`write`): Désactive un utilisateur (soft delete).

  **Comportement:**

  - L'état de l'utilisateur passe à 'inactive'
  - L'utilisateur n'est pas supprimé de la base de données
  - Déclenche un événement DELETE_USER

- `list_invitations_users` (`read`): Récupère la liste des invitations en attente pour un utilisateur.

  **Types d'invitations:**

  - Invitation à rejoindre une entreprise
  - Invitation à un projet ou équipe

  **États des invitations:**

  - `pending` : En attente de réponse
  - `accepted` : Acceptée
  - `refused` : Refusée
  - `expired` : Expirée

  **Utilisation:**

  - Affichage des invitations en attente sur le dashboard utilisateur
  - Gestion des demandes d'ajout à des entreprises

- `list_notifications_users` (`read`): Récupère la liste des notifications pour un utilisateur.

  **Types de notifications:**

  - Factures en retard
  - Devis en attente de validation
  - Paiements reçus
  - Invitations reçues
  - Actions requises

  **Gestion des notifications:**

  - Les notifications non lues sont marquées comme telles
  - Les notifications peuvent être archivées

  **Utilisation:**

  - Centre de notifications
  - Badge de notifications non lues

- `list_positions_users` (`read`): Récupère la liste des postes (positions) d'un utilisateur dans les différentes entreprises.

  **Informations retournées:**

  - Liste des entreprises où l'utilisateur a un poste
  - Type de poste dans chaque entreprise
  - Droits associés à chaque poste

  **Utilisation:**

  - Affichage du profil utilisateur multi-entreprises
  - Vérification des accès utilisateur

- `retrieve_by_uid_users` (`read`): Récupère les détails d'un utilisateur spécifique.

  **Paramètre uid:**

  - Peut être un ObjectId MongoDB
  - Ou une adresse email

  L'API détecte automatiquement le format.

### Resource `auth`:

- `login_auth` (`write`):
