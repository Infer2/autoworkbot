const http = require("http"),
	{
		Client: Client
	} = require("discord.js-selfbot-v13"),
	client = new Client({
		checkUpdate: !1
	}),
	sendSlashCommand = (e, n, t, s) => {
		const o = client.channels.cache.get(e);
		o ? setTimeout((() => {
			o.sendSlash(n, t)
		}), s) : console.error(`Channel with ID ${e} not found.`)
	};
client.on("ready", (async () => {
	console.log(`${client.user.username} is ready!`);
	const e = (e, n) => {
		sendSlashCommand(process.env.channel, "490707751832649738", e, 0), setInterval((() => {
			sendSlashCommand(process.env.channel, "490707751832649738", e, 0)
		}), n)
	};
	e("work", 547e3), e("tips", 247e3), e("overtime", 18075e2)
})), client.login(process.env.token), http.createServer(((e, n) => {
	n.write("I'm alive"), n.end()
})).listen(8080);
