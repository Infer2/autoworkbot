const express = require("express")
        , app = express()
        , port = process.env.PORT || 8080
        , { Client: e } = require("discord.js-infer");
app.get("/", (e, n) => { n.send("uwu") }), app.get("/ping", (e, n) => { n.send(new Date()
                .toString()) }), app.listen(port, () => {});
const client = new e;
let intervalId;
async function sendTips(e) { let n = client.channels.cache.get(e);
        n && await n.sendSlash(process.env.botId, "tips") } async function sendWork(e) { let n = client.channels
                .cache.get(e);
        n && await n.sendSlash(process.env.botId, "work") } async function sendFranchise(e) { let n =
                client.channels.cache.get(e);
        n && await n.sendSlash(process.env.botId, "franchise") }

function sleep(e) { return new Promise(n => setTimeout(n, e)) } async function sendBoost(e) { let n = client.channels
                .cache.get(e);
        n && await n.sendSlash(process.env.botId, "buy", "boosts all") } client.once("ready",
async () => { console.log("Bot is ready!"); let e = 0
                , n = async () => {++e % 82 == 0 && (clearInterval(intervalId), await sleep(
                                        72e5), e = 0, intervalId = setInterval(
                                        n, process.env.intervalValue)), await sendTips(
                                        process.env.channelId), [2, 4, 6, 8, 10, 12]
                                .includes(e % 18) && await sendWork(process.env
                                        .channelId), e % 6 == 0 && e < 81 && process.env
                                .franchiseEnabled && await sendFranchise(process.env
                                        .channelId), 48 === e && await sendBoost(process
                                        .env.channelId) };
        intervalId = setInterval(n, process.env.intervalValue) }), client.login(process.env.token);
