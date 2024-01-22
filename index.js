const http = require("http"),
	{
		Client: Client
	} = require("discord.js-selfbot-v13"),
	client = new Client({
		checkUpdate: !1
	}),
	sendSlashCommand = (e, n, s, t) => {
		const o = client.channels.cache.get(e);
		o ? setTimeout((() => {
			o.sendSlash(n, s).catch((e => console.error(`Error sending slash command: ${e}`)))
		}), t) : console.error(`Channel with ID ${e} not found.`)
	};
client.on("ready", (async () => {
	console.log(`${client.user.username} is ready!`);
	const e = (e, n) => {
		sendSlashCommand(process.env.channel, "490707751832649738", e, 0), setInterval((() => {
			sendSlashCommand(process.env.channel, "490707751832649738", e, 0)
		}), n)
	};
	e("work", 548e3), e("tips", 248e3), e("overtime", 1808e3)
})), client.login(process.env.token), http.createServer(((e, n) => {
	n.write("I'm alive"), n.end()
})).listen(8080);
