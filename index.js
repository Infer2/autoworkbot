const http = require("http"),
  { Client } = require("discord.js-selfbot-v13"),
  fs = require("fs"),
  client = new Client({
    checkUpdate: false, // Setting checkUpdate to false
  }),
  rawConfig = fs.readFileSync("config.json"),
  config = JSON.parse(rawConfig),
  sendSlashCommand = (channelId, commandId, commandName) => {
    const channel = client.channels.cache.get(channelId);
    if (channel) {
      channel.sendSlash(commandId, commandName);
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
  }, 547000);
  setInterval(() => {
    sendSlashCommand(config.channelID, "490707751832649738", "tips");
  }, 247000);
  setInterval(() => {
    sendSlashCommand(config.channelID, "490707751832649738", "overtime");
  }, 1807000);
});

client.on("interactionCreate", (interaction) => {
  // Check if the interaction is a command
  if (interaction.type === 'APPLICATION_COMMAND') {
    const commandName = interaction.commandName;
    console.log(`${commandName} command triggered.`);
    interaction.reply({
      content: "",
      ephemeral: true,
    });
  }
});

client.login(process.env.token);
