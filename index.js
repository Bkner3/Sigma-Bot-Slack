require("dotenv").config();

const { App } = require("@slack/bolt");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

app.command("/sigmabot-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Pong!\nLatency: ${latency}ms` });
});
/*
app.command("/command-name", async ({ ack, respond }) => {
  // your code here
});*/

app.command("/sigmabot-catfact", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://catfact.ninja/fact");
    await respond({text: `Read the phrase below to learn a cat fact.`})
    await respond({ text: `Cat Fact:\n${response.data.fact}` });
  } catch (err) {
    await respond({ text: "Failed to fetch a cat fact." });
  }
});

app.command("/sigmabot-joke", async ({ ack, respond }) => {
  await ack();

  try {
    const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
    await respond({
      text:
`${response.data.setup}

${response.data.punchline}`
    });
  } catch (err) {
    await respond({ text: "Failed to fetch a joke." });
  }
});

app.command("/sigmabot-do-nothing", async ({ ack, respond }) => {
    await ack();
    await respond({ text: `Sigma-bot does nothing!!!`})
});

app.command("/sigmabot-help", async ({ ack, respond }) => {
  await ack();
  await respond({
    text:
`Available Commands:
/sigmabot-ping - Check bot latency
/sigmabot-do-nothing - Makes sigma bot do nothing`
  });
});
(async () => {
  await app.start();
  console.log("bot is running!");
})();