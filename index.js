const {
	Client: Client
} = require("discord.js-selfbot-v13"), fs = require("fs"), client = new Client({
	checkUpdate: !1
}), rawConfig = fs.readFileSync("config.json"), config = JSON.parse(rawConfig);

function sendSlashCommand(n, e, s) {
	const o = client.channels.cache.get(n);
	o ? o.sendSlash(e, s) : console.error(`Channel with ID ${n} not found.`)
}
client.on("ready", (async () => {
	console.log(`${client.user.username} is ready!`), sendSlashCommand(config.channelID, "490707751832649738", "work"), setTimeout((() => {
		sendSlashCommand(config.channelID, "490707751832649738", "tips")
	}), 1e3), setTimeout((() => {
		sendSlashCommand(config.channelID, "490707751832649738", "overtime")
	}), 2e3), setInterval((() => {
		sendSlashCommand(config.channelID, "490707751832649738", "work")
	}), 547e3), setInterval((() => {
		sendSlashCommand(config.channelID, "490707751832649738", "tips")
	}), 247e3), setInterval((() => {
		sendSlashCommand(config.channelID, "490707751832649738", "overtime")
	}), 1807e3)
})), client.login(process.env.token);
