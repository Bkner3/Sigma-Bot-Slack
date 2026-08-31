# Sigma-Bot-Slack

> **THE MOST SIGMA BOT FOR SLACK**

A simple Slack bot built with **Node.js**, **Slack Bolt**, and **Axios**.

SigmaBot runs in **Socket Mode** and provides slash commands for latency checks, random cat facts, jokes, and, of course, doing absolutely nothing.

## Features

* `/sigmabot-ping` — checks the bot's latency
* `/sigmabot-catfact` — fetches a random cat fact
* `/sigmabot-joke` — fetches a random joke
* `/sigmabot-do-nothing` — does... nothing
* `/sigmabot-help` — displays available commands

## Tech Stack

* Node.js
* Slack Bolt
* Axios
* dotenv
* Cat Facts API
* Official Joke API

## Requirements

Before getting started, make sure you have:

* Node.js installed
* A Slack application
* A Slack Bot Token
* An App-Level Token with Socket Mode enabled

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/Bkner3/Sigma-Bot-Slack.git
cd Sigma-Bot-Slack
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory:

```env
SLACK_BOT_TOKEN=xoxb-your-bot-token
SLACK_APP_TOKEN=xapp-your-app-token
```

**Never share your Slack tokens or commit them to your repository.**

Add `.env` to `.gitignore`:

```gitignore
node_modules/
.env
```

## Slack Configuration

Create a Slack application and enable **Socket Mode**.

The bot requires two environment variables:

| Variable          | Description                                        |
| ----------------- | -------------------------------------------------- |
| `SLACK_BOT_TOKEN` | Token used to authenticate the bot with Slack      |
| `SLACK_APP_TOKEN` | Token used to establish the Socket Mode connection |

Register these Slash Commands in your Slack application:

```text
/sigmabot-ping
/sigmabot-catfact
/sigmabot-joke
/sigmabot-do-nothing
/sigmabot-help
```

Since SigmaBot uses Socket Mode, **no public HTTP endpoint is required**.

## Running the Bot

Start the bot with:

```bash
node index.js
```

If your main file has a different name, replace `index.js` accordingly.

A successful startup should display:

```text
bot is running!
```

## Commands

### `/sigmabot-ping`

Checks the latency between Slack and the bot.

**Example:**

```text
Pong!

Latency: 42ms
```

### `/sigmabot-catfact`

Fetches a random cat fact using the Cat Facts API.

**Example:**

```text
Cat Fact:

Cats have five toes on their front paws.
```

### `/sigmabot-joke`

Fetches a random joke using the Official Joke API.

**Example:**

```text
Joke:

Why did the chicken cross the road?

To get to the other side!
```

### `/sigmabot-do-nothing`

The most important command in the project.

**Response:**

```text
Sigma-bot does nothing!!!
```

### `/sigmabot-help`

Displays all available SigmaBot commands.

## Project Structure

```text
sigmabot/
├── node_modules/
├── .env
├── .gitignore
├── index.js
├── package.json
└── package-lock.json
```

## Dependencies

Main dependencies:

```json
{
  "@slack/bolt": "...",
  "axios": "...",
  "dotenv": "..."
}
```

Install them manually with:

```bash
npm install @slack/bolt axios dotenv
```

## External APIs

### Cat Facts API

Used by `/sigmabot-catfact`.

```text
https://catfact.ninja/fact
```

### Official Joke API

Used by `/sigmabot-joke`.

```text
https://official-joke-api.appspot.com/random_joke
```

If either API is unavailable, SigmaBot sends an error message instead of stopping the application.

## Adding New Commands

New commands can be created using `app.command()` from Slack Bolt:

```js
app.command("/command-name", async ({ ack, respond }) => {
  await ack();

  await respond({
    text: "Hello from SigmaBot!"
  });
});
```

After adding the command to the code, register it in your Slack application configuration as well.

## Security

**Never put tokens directly in your source code.**

Don't do this:

```js
const token = "xoxb-...";
```

Instead, use environment variables:

```js
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});
```

Always keep `.env` out of Git:

```gitignore
.env
```

## License

Copyright (c) 2026 Bernardo

Licensed under the **MIT License**.
