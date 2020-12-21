const { TOKEN, LOFI_ID, VC_IDS } = require("./config.json");
const { Client } = require("discord.js");
const ytdl = require("ytdl-core");

const client = new Client();
client.token = TOKEN;

client.once("ready", async () => {
	console.log(`${client.user.username} is up and running!`);
	client.user.setPresence({
		status: "idle",
		activity: {
			name: "LOFI beats.",
			type: "LISTENING"
		}
	});

	for (let i = 0; i < VC_IDS.length; i++) {
		const connection = await client.channels.cache.get(VC_IDS[i]).join();
		const stream = await ytdl(`https://www.youtube.com/watch?v=${LOFI_ID}`, {
			filter: "audio"
		});

		connection.voice.setSelfDeaf(true);
		connection.play(stream);
		console.log(`Playing to "${VC_IDS[i]}".`);
	};
});

client.on("error", () => {
	console.error();
	client.login();
});

client.login();
