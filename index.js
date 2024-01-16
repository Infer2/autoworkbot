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
	e.isCommand() && ("work" === e.commandName ? e.reply("Working...") : "tips" === e.commandName ? e.reply("Here are some tips.") : "overtime" === e.commandName && e.reply("Overtime activated!"))
})), client.login(process.env.token);
