# Sigma-Bot-Slack

**THE MOST SIGMA BOT FOR SLACK**

SigmaBot is a simple Slack bot built with Node.js, Slack Bolt, and Axios.

SigmaBot runs in Socket Mode and provides several slash commands to check the bot's latency, get random cat facts, tell jokes, and do absolutely nothing.

## Technologies

* Node.js
* Slack Bolt
* Axios
* dotenv
* Cat Facts API
* Official Joke API

## Features

* `ping` — checks the bot's latency.
* `catfact` — fetches a random cat fact.
* `joke` — fetches a random joke.
* `do-nothing` — does... nothing.
* `help` — displays the available commands.

## Requirements

Before getting started, you need:

* Node.js installed
* A Slack application
* A Bot Token
* An App-Level Token with Socket Mode enabled

## Installation

1. Clone this repository:

```bash
git clone https://github.com/Bkner3/Sigma-Bot-Slack.git
cd Sigma-Bot-Slack
```
2. Install the dependencies

```bash
npm install
```

3. Configure environment variables

Create a .env file in the root directory:

SLACK_BOT_TOKEN=xoxb-your-bot-token
SLACK_APP_TOKEN=xapp-your-app-token

Never share your Slack tokens or commit them directly to your code.

It is also recommended to add .env to your .gitignore:

node_modules/
.env

Slack Configuration

To use the bot, create a Slack application and enable Socket Mode.

The bot uses two environment variables:

Variable	Description
SLACK_BOT_TOKEN	Token used by the bot to authenticate with Slack
SLACK_APP_TOKEN	Token used to establish the connection through Socket Mode

After configuring the application, add the following Slash Commands:

/sigmabot-ping
/sigmabot-catfact
/sigmabot-joke
/sigmabot-do-nothing
/sigmabot-help

Since the bot uses Socket Mode, you do not need to configure a public HTTP endpoint to receive events.

Running the Bot

Start the bot with:

node index.js

If your main file has a different name, replace index.js with the appropriate filename.

When the bot starts successfully, you should see:

bot is running!
Commands
/sigmabot-ping

Checks the latency between Slack and the bot.

Example:

Pong!
Latency: 42ms
/sigmabot-catfact

Fetches a random cat fact using the Cat Facts API.

Example:

Cat Fact:
Cats have five toes on their front paws.
/sigmabot-joke

Fetches a random joke using the Official Joke API.

Example:

Joke:
Why did the chicken cross the road?

To get to the other side!
/sigmabot-do-nothing

The most important command in the project.

Response:

Sigma-bot does nothing!!!
/sigmabot-help

Displays the available bot commands.

Project Structure

A simple project structure may look like this:

sigmabot/
├── node_modules/
├── .env
├── .gitignore
├── index.js
├── package.json
└── package-lock.json
Dependencies

The main dependencies used by the project are:

{
  "@slack/bolt": "...",
  "axios": "...",
  "dotenv": "..."
}

They can be installed with:

npm install @slack/bolt axios dotenv
External APIs

SigmaBot uses two public APIs:

Cat Facts API

Used by the /sigmabot-catfact command.

Endpoint:

https://catfact.ninja/fact
Official Joke API

Used by the /sigmabot-joke command.

Endpoint:

https://official-joke-api.appspot.com/random_joke

If either API is unavailable, the bot sends an error message instead of stopping the application.

Adding New Commands

New commands can be added using app.command() from Slack Bolt.

Example:

app.command("/command-name", async ({ ack, respond }) => {
  await ack();

  await respond({
    text: "Hello from SigmaBot!"
  });
});

After creating the command in the code, you also need to register it in your Slack application configuration.

Security

Never put tokens directly in your source code:

// Don't do this
const token = "xoxb-...";

Always use environment variables:

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

And keep your .env file out of Git:

.env
License
Copyright (c) 2026 Bernardo

Licensed under the MIT License.


