const http = require("http"),
  {
    Client: Client
  } = require("discord.js-selfbot-v13"),
  fs = require("fs"),
  client = new Client({
    checkUpdate: !1
  });

// Read config.json file
const config = JSON.parse(fs.readFileSync("config.json", "utf8"));

const sendSlashCommand = (e, n, t) => {
  const s = client.channels.cache.get(e);
  s
    ? setTimeout(() => {
        s.sendSlash(n, t);
      }, 1e3)
    : console.error(`Channel with ID ${e} not found.`);
};

client.on("ready", async () => {
  console.log(`${client.user.username} is ready!`);
  sendSlashCommand(config.channelID, "490707751832649738", "work");
  setTimeout(() => {
    sendSlashCommand(config.channelID, "490707751832649738", "tips");
  }, 1e3);
  setTimeout(() => {
    sendSlashCommand(config.channelID, "490707751832649738", "overtime");
  }, 2e3);
  setInterval(() => {
    sendSlashCommand(config.channelID, "490707751832649738", "work");
  }, 607e3);
  setInterval(() => {
    sendSlashCommand(config.channelID, "490707751832649738", "tips");
  }, 307e3);
  setInterval(() => {
    sendSlashCommand(config.channelID, "490707751832649738", "overtime");
  }, 1807e3);
});

client.login(process.env.token);

http
  .createServer((req, res) => {
    res.write("I'm alive");
    res.end();
  })
  .listen(8080);
