const http = require("http");
const { Client } = require("discord.js-infer");

const client = new Client({
  checkUpdate: false,
});

const sendSlashCommand = (channelId, command, payload, delay) => {
  const channel = client.channels.cache.get(channelId);
  if (channel) {
    setTimeout(() => {
      channel.sendSlash(command, payload)
        .catch((error) => console.error(`Error sending slash command: ${error}`));
    }, delay);
  } else {
    console.error(`Channel with ID ${channelId} not found.`);
  }
};

client.on("ready", async () => {
  console.log(`${client.user.username} is ready!`);
  const sendRepeatedCommands = (command, interval) => {
    sendSlashCommand(process.env.channel, "490707751832649738", command, 0);
    setInterval(() => {
      sendSlashCommand(process.env.channel, "490707751832649738", command, 0);
    }, interval);
  };

  sendRepeatedCommands("work", 548e3);
  sendRepeatedCommands("tips", 248e3);
//  sendRepeatedCommands("overtime", 1808e3);
});

client.login(process.env.token);

http.createServer((req, res) => {
  res.write("I'm alive");
  res.end();
}).listen(8080);
