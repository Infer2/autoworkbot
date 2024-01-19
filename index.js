const path = require('path');
const fs = require('fs');
const http = require('http');
const { Client } = require('discord.js-selfbot-v13');

const optionsPath = path.join(__dirname, 'node_modules', 'discord.js-selfbot-v13', 'src', 'util', 'Options.js');

try {
    // Read the content of Options.js
    let optionsContent = fs.readFileSync(optionsPath, 'utf8');

    // Modify the "browser" value
    optionsContent = optionsContent.replace(/browser: 'Discord Client',/, "browser: 'Discord iOS',");

    // Evaluate the modified content to apply changes at runtime
    eval(optionsContent);

} catch (error) {
    console.error("Error modifying Options.js:", error);
}

const client = new Client({
    checkUpdate: false,
});

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

    // Set timers for each command
    let workTimer = 547000;
    let tipsTimer = 247000;
    let overtimeTimer = 1807000;

    // Function to send slash command and reset its timer
    const sendAndResetTimer = (command, timer) => {
        sendSlashCommand(process.env.channel, "490707751832649738", command, 0);
        setInterval(() => {
            sendSlashCommand(process.env.channel, "490707751832649738", command, 0);
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
