const http = require("http"),
  { Client } = require("discord.js-selfbot-v13"),
  fs = require("fs"),
  client = new Client({
    checkUpdate: false,
  });

// Read config.json file
const config = JSON.parse(fs.readFileSync("config.json", "utf8"));

const sendSlashCommand = (channelId, command, text, delay) => {
  const channel = client.channels.cache.get(channelId);
  if (channel) {
    setTimeout(() => {
      channel.sendSlash(command, text);
    }, delay);
  } else {
    console.error(`Channel with ID ${channelId} not found.`);
  }
};

client.on("ready", async () => {
  console.log(`${client.user.username} is ready!`);
  
  // Initial set of slash commands with 0.8s delay between each
  sendSlashCommand(config.channelID, "490707751832649738", "work", 900);
  sendSlashCommand(config.channelID, "490707751832649738", "tips", 1800);
  sendSlashCommand(config.channelID, "490707751832649738", "overtime", 2700);
  
  // Set timers for each command
  let workTimer = 607000;
  let tipsTimer = 307000;
  let overtimeTimer = 1807000;
  
  // Function to send slash command and reset its timer
  const sendAndResetTimer = (command, timer) => {
    sendSlashCommand(config.channelID, "490707751832649738", command, 0);
    setInterval(() => {
      sendSlashCommand(config.channelID, "490707751832649738", command, 0);
    }, timer);
  };
  
  // Start timers for each command
  sendAndResetTimer("work", workTimer);
  sendAndResetTimer("tips", tipsTimer);
  sendAndResetTimer("overtime", overtimeTimer);
});

client.login(process.env.token);

http.createServer((req, res) => {
  res.write("I'm alive");
  res.end();
}).listen(8080);
