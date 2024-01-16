const http = require("http"),
  { Client } = require("discord.js-selfbot-v13"),
  fs = require("fs"),
  client = new Client({
    checkUpdate: false,
  }),
  rawConfig = fs.readFileSync("config.json"),
  config = JSON.parse(rawConfig),
  sendSlashCommand = (channelId, commandId, commandName) => {
    const channel = client.channels.cache.get(channelId);
    if (channel) {
      setTimeout(() => {
        channel.sendSlash(commandId, commandName);
      }, 1000); // Add a 1-second delay before sending the command
    } else {
      console.error(`Channel with ID ${channelId} not found.`);
    }
  };

client.on("ready", async () => {
  console.log(`${client.user.username} is ready!`);
  sendSlashCommand(config.channelID, "490707751832649738", "work");
  setTimeout(() => {
    sendSlashCommand(config.channelID, "490707751832649738", "tips");
  }, 1000);
  setTimeout(() => {
    sendSlashCommand(config.channelID, "490707751832649738", "overtime");
  }, 2000);
  setInterval(() => {
    sendSlashCommand(config.channelID, "490707751832649738", "work");
  }, 607000);
  setInterval(() => {
    sendSlashCommand(config.channelID, "490707751832649738", "tips");
  }, 307000);
  setInterval(() => {
    sendSlashCommand(config.channelID, "490707751832649738", "overtime");
  }, 1807000);
});

client.login(process.env.token);
