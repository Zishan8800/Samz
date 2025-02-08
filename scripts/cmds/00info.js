const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
	config: {
		name: "info",
		version: "1.0",
		author: "NTKhang",
		countDown: 20,
		role: 0,
		shortDescription: { vi: "", en: "" },
		longDescription: { vi: "", en: "" },
		category: "owner",
		guide: { en: "" },
		envConfig: {}
	},
	onStart: async function ({ message }) {
		const authorName = " 𝗦𝗔𝗛𝗘𝗟 𝗔𝗛𝗠𝗘𝗗 𝗝𝗜𝗦𝗔𝗡 ";
		const ownAge = "『 𝟭𝟵+👾 』";
		const messenger = "https://www.facebook.com/C3X.ZY1N";
		const authorFB = "https://www.facebook.com/C3X.ZY1N";
		const authorNumber = "";
		const Status = "𝐒𝐈𝐍𝐆𝐋𝐄";
		const urls = [
"https://i.imgur.com/vZt0H7P.jpeg",
"",
"",
""
];
		const link = urls[Math.floor(Math.random() * urls.length)];
		const now = moment().tz('Asia/Jakarta');
		const date = now.format('MMMM Do YYYY');
		const time = now.format('h:mm:ss A');
		const uptime = process.uptime();
		const seconds = Math.floor(uptime % 60);
		const minutes = Math.floor((uptime / 60) % 60);
		const hours = Math.floor((uptime / (60 * 60)) % 24);
		const days = Math.floor(uptime / (60 * 60 * 24));
		const uptimeString = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

		message.reply({
			body: `《 ʙᴏᴛ ᴀɴᴅ ᴏᴡɴᴇʀ ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ 》🪄💗
\🤖BOT NAME : ⩸__${global.GoatBot.config.nickNameBot}__⩸
\👾BOT SYSTEM PREFIX : ${global.GoatBot.config.prefix}
\💙OWNER NAME: ${authorName}
\📝 AGE : ${ownAge}
\💕 MARRED: ${Status}
\🌐 WP: ${authorNumber}
\🌍 FACEBOOK LINK : ${authorFB}
\🗓 DATE : ${date}
\⏰ NOW TIME: ${time}
\🔰 ANY HELP CONTECT :⩸__${messenger}__⩸
\📛BOT I'S RUNNING FOR : ${uptimeString}
    TELIGRAM:
    INSTAGRAM:
    CAPCUT:
    TIKTOK:
    YOUTUBE:
\===============`,
			attachment: await global.utils.getStreamFromURL(link)
		});
	},
	onChat: async function ({ event, message, getLang }) {
		if (event.body && event.body.toLowerCase() === "info") {
			this.onStart({ message });
		}
	}
};
