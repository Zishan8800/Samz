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
		const authorName = " ⸙𝗥𝗔𝗙𝗜𝗬𝗔𝗡 𝗥𝗜𝗙𝗔𝗧༉ ";
		const ownAge = "『 𝟭𝟵+ 』";
		const messenger = "𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸.𝗰𝗼𝗺/𝗧𝗲𝗿𝗮.𝗕𝗮𝗽.𝗖4𝗫";
		const authorFB = "𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸.𝗰𝗼𝗺/𝗧𝗲𝗿𝗮.𝗕𝗮𝗽.𝗖4𝗫";
		const authorNumber = "_01731736377";
		const Status = "𝗦𝗜𝗡𝗚𝗟𝗘";
		const urls = [
"https://i.imgur.com/ykAKHTG.jpeg",
"https://i.imgur.com/ykAKHTG.jpeg",
"https://i.imgur.com/ykAKHTG.jpeg",
"https://i.imgur.com/ykAKHTG.jpeg"
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
			body: `ღ《 𝗕𝗢𝗧 𝗔𝗡𝗗 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 𝗡𝗦 》⸙
\🤖BOT NAME : ⩸__${global.GoatBot.config.nickNameBot}__⩸
\👾BOT SYSTEM PREFIX : ${global.GoatBot.config.prefix}
\💙 OWNER NAME: ${authorName}
\📝AGE  : ${ownAge}
\💕RELATIONSHIP: ${Status}
\🌐WP : ${authorNumber}
\🌍 FACEBOOK LINK : ${authorFB}
\🗓DATE : ${date}
\⏰NOW TIME : ${time}
\🔰ANY HELP CONTACT :⩸__${messenger}__⩸
\📛BOT I'S RUNNING FOR : ${uptimeString}
    𝑻𝒈: 𝗞𝗼𝘁𝗵𝗮𝗮 𝗕𝗼𝗹𝗮𝗿 𝗠𝗼𝘁𝗼 𝗸𝗲𝘄 𝗡𝗮𝗮𝗶
    𝑰𝒏𝒔𝒕𝒂: 𝗖𝗲𝗹𝗶𝗯𝗿𝗮𝘁𝘆 𝗗𝗲𝗿 𝗷𝗼𝗻𝗻𝗼
    𝑪𝒂𝒑𝑪𝒖𝒕: 𝗦𝗮𝗵𝗲𝗹 𝗔𝗵𝗺𝗲𝗱
    𝑻𝒊𝒌𝑻𝒐𝒌: 𝗣𝗿𝗼𝘁𝗶𝗯𝗼𝗻𝗱𝗶 𝗔𝗽𝗽𝘀
    𝒀𝒐𝒖𝑻𝒖𝒃𝒆: 𝗚𝗮𝗮𝗻 𝗦𝗵𝘂𝗻𝗶
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
