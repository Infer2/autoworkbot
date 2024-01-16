const http = require("http"),
	{
		Client: Client
	} = require("discord.js-selfbot-v13"),
	fs = require("fs"),
	client = new Client({
		checkUpdate: !1
	}),
	rawConfig = fs.readFileSync("config.json"),
	config = JSON.parse(rawConfig),
	sendSlashCommand = (e, n, o) => {
		const a = client.channels.cache.get(e);
		a ? a.sendSlash(n, o) : console.error(`Channel with ID ${e} not found.`)
	};
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
})), client.on("interactionCreate", (e => {
	e.isCommand() && ("work" === e.commandName ? console.log("Work command triggered.") : "tips" === e.commandName ? console.log("Tips command triggered.") : "overtime" === e.commandName && console.log("Overtime command triggered."), e.reply({
		content: "",
		ephemeral: !0
	}))
})), client.login(process.env.token);
